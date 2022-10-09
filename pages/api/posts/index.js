// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { posts } from "@data/posts"

export default function handler(req, res) {
  const { user, id } = req.query

  if (user !== undefined && id !== undefined) {
    const filtered = posts.filter(post => post.userId == user && post.id == id)
    if (filtered.length > 0) {
      res.status(200).send(JSON.stringify(filtered[0], null, 2));
      // res.status(200).json(filtered[0])
    }
    else {
      res.status(404).json({ id: id, error: "Not Found" })
    }
  }
  else if (user !== undefined) {
    const filtered = posts.filter(post => post.userId == user)
    if (filtered.length > 0) {
      res.status(200).send(JSON.stringify(filtered, null, 2));
      // res.status(200).json(filtered[0])
    }
    else {
      res.status(404).json({ id: id, error: "Not Found" })
    }
  }
  else if (user == undefined && id !== undefined) {
    const filtered = posts.filter(post => post.id == id)
    if (filtered.length > 0) {
      res.status(200).send(JSON.stringify(filtered[0], null, 2));
      // res.status(200).json(filtered[0])
    }
    else {
      res.status(404).json({ id: id, error: "Not Found" })
    }
  }
  else {
    // res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(posts, null, 2));
    // res.status(200).json(avatars)
  }
}