import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";

const f = createUploadthing();

export const appFileRouter = {
  imageUploader: f({ image: { maxFileSize: "16MB" } }).onUploadComplete(
    ({ file }) => {
      console.log("file url", file.url);
    },
  ),
} satisfies FileRouter;

export type AppFileRouter = typeof appFileRouter;
