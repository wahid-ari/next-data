// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { comments } from "@data/comments"

export default function handler(req, res) {
  res.status(200).send(JSON.stringify(comments, null, 2));
  // res.status(200).json(comments)
}