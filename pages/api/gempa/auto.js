// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gempa } from "@data/gempa";

export default function handler(req, res) {
  res.status(200).send(JSON.stringify(gempa.auto, null, 2));
  // res.status(200).json(gempaterkini);
  return;
}