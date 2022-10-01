import { posts } from "@data/posts"

export default function handler(req, res) {

  const { userId } = req.query
  const filtered = posts.filter(post => post.userId == userId)

  if (filtered.length > 0) {
    res.status(200).send(JSON.stringify(filtered, null, 2));
    // res.status(200).json(filtered)
  }
  else {
    res.status(404).json({ userId: userId, error: "Not Found" })
  }
}