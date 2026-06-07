import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import { put } from "@vercel/blob";

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (req: NextApiRequest) =>
  new Promise<{ fields: formidable.Fields; files: formidable.Files }>(
    (resolve, reject) => {
      const form = formidable({ multiples: false });
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    },
  );

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  if (req.method !== "POST") {
    return res.status(405).json("Method Not Allowed");
  }

  try {
    const { fields, files } = await parseForm(req);

    if (fields.api_key![0] !== process.env.BLOB_READ_WRITE_TOKEN) {
      return res.status(401).json("Unauthorized");
    }

    const fileField = files.fileupload;
    const file = Array.isArray(fileField)
      ? fileField[0]
      : (fileField as formidable.File | undefined);

    if (!file || !file.filepath) {
      return res.status(400).json("The Fileupload field is required.");
    }

    if (file.mimetype !== "image/png") {
      return res.status(400).json("A validation error occurred.");
    }

    const filename = file.newFilename;
    const buffer = await fs.promises.readFile(file.filepath);

    await put(filename + ".png", buffer, {
      access: "private",
    });

    const baseUrl = process.env.BASE_URL || "http://localhost:3000/img";

    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(`${baseUrl}/${filename}`);
  } catch (error) {
    return res.status(500).json(String(error));
  }
}
