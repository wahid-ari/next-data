// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { users } from "@data/users"

export default function handler(req, res) {
  // res.setHeader('Content-Type', 'application/json')
  res.status(200).send(JSON.stringify(users, null, 2));
  // res.status(200).json(users)
}