/* eslint-disable @next/next/no-img-element */
"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const slug = useParams()?.slug;

  if (!slug || typeof slug !== "string") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-base">Missing image slug</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <img src={`/api/preview/${encodeURIComponent(slug)}`} alt={slug} />
    </div>
  );
}
