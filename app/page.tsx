import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl items-center px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Debugg&apos;s ShareX Image Uploader.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Want to host your images on your own? This is a simple image
            uploader built with Next.js and Vercel Blob Storage, designed for
            use with ShareX. It allows you to upload images directly from ShareX
            and serves them with optimized caching for fast delivery.
          </p>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRealDebugg%2Fsharex-nextjs-uploader&env=BLOB_READ_WRITE_TOKEN,BASE_URL,DISABLE_CDN_REDIRECT&envDefaults=%7B%22BLOB_READ_WRITE_TOKEN%22%3A%22************%22%2C%22BASE_URL%22%3A%22http%3A%2F%2Flocalhost%3A3000%22%2C%22DISABLE_CDN_REDIRECT%22%3A%22false%22%7D&envDescription=Setting%20up%20blob%20storage%20and%20getting%20a%20token%20is%20linked%20below.%20The%20base%20URL%20should%20be%20your%20domain%20such%20as%20%22img.debugg.co%22.&envLink=https%3A%2F%2Fvercel.com%2Fdocs%2Fvercel-blob%2Fserver-upload"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
        </div>
      </main>
    </div>
  );
}
