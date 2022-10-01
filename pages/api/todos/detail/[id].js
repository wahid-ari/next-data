import { todos } from "@data/todos"

export default function handler(req, res) {

  const { id } = req.query
  const filtered = todos.filter(todo => todo.id == id)

  if (filtered.length > 0) {
    res.status(200).send(JSON.stringify(filtered[0], null, 2));
    // res.status(200).json(filtered[0])
  }
  else {
    res.status(404).json({ id: id, error: "Not Found" })
  }
}