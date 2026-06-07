This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

It works as a ShareX upload server using Vercel Blob storage which would replace your usual upload service such as imgur.

You can setup Blob storage and the service hosting for free through Vercel or deploy now using the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRealDebugg%2Fsharex-nextjs-uploader&env=BLOB_READ_WRITE_TOKEN,BASE_URL&envDefaults=%7B%22BLOB_READ_WRITE_TOKEN%22%3A%22************%22%2C%22BASE_URL%22%3A%22http%3A%2F%2Flocalhost%3A3000%2Fimg%22%7D&envDescription=Setting%20up%20blob%20storage%20and%20getting%20a%20token%20is%20linked%20below.%20The%20base%20URL%20should%20be%20your%20domain%20%2B%20%22%2Fimg%22&envLink=https%3A%2F%2Fvercel.com%2Fdocs%2Fvercel-blob%2Fserver-upload)

## Prerequisites (for running Dev and Prod):

- Private blob storage: https://vercel.com/docs/vercel-blob/server-upload

## Getting Started

- First copy the `.env.example` file to `.env`
- Replace the value for `BLOB_READ_WRITE_TOKEN` for the private Blob storage token found in Vercel
- Run your development server as seen below:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

When deploying to Vercel, make sure to update the environment variables to match your settings.

- `BLOB_READ_WRITE_TOKEN` should be the token to your private blob storage.
- `BASE_URL` should be your domain + "/img". This is the URL where you can view your images online. For example: "https://img.debugg.co/img". **Including https in the beginning is important!!!!!**

## Setting up ShareX

- Open ShareX image gallery
- Press "Destinations" > "Image uploader" > "Custom image uploader"
- Press "Custom uploader settings..."
- Under "Uploaders" press the "New" button
  - "Name" can be whatever you want
  - "Destination type" has to be "Image uploader"
  - "Method" must be "POST"
  - "Request URL" should be your domain + "/api/upload", for example: "img.debugg.co/api/upload"
  - "Body" must be "Form data (multipart/form-data)"
  - Under the "Body" drop down, in the "Name" field, enter "api_key" & the "Value" should be the same as your `BLOB_READ_WRITE_TOKEN` in your Vercel environment.
  - "File form name" should be "fileupload"

## Roadmap

- [ ] Discord inline image preview
