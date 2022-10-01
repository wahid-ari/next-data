// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { orgs } from "@data/orgs"

export default function handler(req, res) {
  res.status(200).send(JSON.stringify(orgs, null, 2));
  // res.status(200).json(orgs)
}