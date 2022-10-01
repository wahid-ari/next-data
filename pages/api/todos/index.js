// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { todos } from "@data/todos"

export default function handler(req, res) {
  res.status(200).send(JSON.stringify(todos, null, 2));
  // res.status(200).json(todos)
}