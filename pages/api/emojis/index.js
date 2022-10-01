// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { emojis } from "@data/emojis"

export default function handler(req, res) {
  // res.setHeader('Content-Type', 'application/json')
  res.status(200).send(JSON.stringify(emojis, null, 2));
  // res.status(200).json(emojis)
}