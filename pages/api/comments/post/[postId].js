import { comments } from "@data/comments"

export default function handler(req, res) {

  const { postId } = req.query
  const filtered = comments.filter(comment => comment.postId == postId)

  if (filtered.length > 0) {
    res.status(200).send(JSON.stringify(filtered, null, 2));
    // res.status(200).json(filtered)
  }
  else {
    res.status(404).json({ postId: postId, error: "Not Found" })
  }
}