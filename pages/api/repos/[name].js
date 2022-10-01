import { repos } from "@data/repos"

export default function handler(req, res) {

  const { name } = req.query
  const filtered = repos.filter(repo => repo.id === name)

  if (filtered.length > 0) {
    res.status(200).send(JSON.stringify(filtered[0], null, 2));
    // res.status(200).json(filtered[0])
  }
  else {
    res.status(404).json({ name: name, error: "Not Found" })
  }
}