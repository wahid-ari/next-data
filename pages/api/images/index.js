// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { images } from "@data/images"

export default function handler(req, res) {
  res.status(200).send(JSON.stringify(images, null, 2));
  // res.status(200).json(images)
}