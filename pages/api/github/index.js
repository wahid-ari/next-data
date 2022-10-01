// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { github } from "@data/github"

export default function handler(req, res) {
  res.status(200).send(JSON.stringify(github, null, 2));
  // res.status(200).json(github)
}