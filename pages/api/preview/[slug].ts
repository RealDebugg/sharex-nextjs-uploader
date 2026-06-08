import type { NextApiRequest, NextApiResponse } from "next";
import { get } from "@vercel/blob";

type ErrorResponse = {
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | Buffer<ArrayBuffer>>,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const baseUrl = process.env.BASE_URL || "http://localhost:3000";

  const url = req.url;
  const imgSlug = url?.split("/").pop();

  /* console.log("REQUEST HEADERS:", req);

  if (
    req.headers.accept?.includes("text/html") === true &&
    req.headers.origin !== baseUrl
  ) {
    res.setHeader(
      "Location",
      `${baseUrl}/img/${encodeURIComponent(imgSlug as string)}`,
    );
    return res.status(302).end();
  } */

  if (!imgSlug) {
    return res
      .status(400)
      .json({ error: "The Img query parameter is required." });
  }

  const pathname = `${encodeURIComponent(imgSlug)}.png`;
  const result = await get(pathname, {
    access: "private",
    useCache: true,
  }).catch((err) => {
    console.error("Error fetching blob:", err);
    return res.status(500).json({ error: "Error fetching blob" });
  });

  if (!result) {
    return res.status(404).json({ error: "Blob not found" });
  }

  const arrayBuffer = await new Response(result.stream).arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  res.setHeader("Content-Type", "image/png");
  res.setHeader(
    "Cache-Control",
    "public, max-age=60, stale-while-revalidate=300",
  );
  return res.status(200).send(buffer);
}
