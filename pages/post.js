import Head from 'next/head'
import Navbar from '@components/Navbar';
import Code from '@components/Code';

const linkClassName = "text-sky-500 hover:text-sky-600 transition-all text-sm font-medium block mb-1"

export default function Post() {

  return (
    <>
      <Head>
        <title>Post Data</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 ">
          <h1 className="dark:text-white text-2xl font-semibold">Post Data</h1>

          <div className="my-8 dark:text-white">
            <a href={`${process.env.API_URL}/api/posts`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/posts
            </a>
            <a href={`${process.env.API_URL}/api/posts?user=1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/posts?user=1
            </a>
            <a href={`${process.env.API_URL}/api/posts?user=1&id=1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/posts?user=1&id=1
            </a>
            <a href={`${process.env.API_URL}/api/posts?id=1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/posts?id=1
            </a>
            <a href={`${process.env.API_URL}/api/posts/user/1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/posts/user/1
            </a>
            <a href={`${process.env.API_URL}/api/posts/detail/1`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/posts/detail/1
            </a>
          </div>

          <Code name={`Response From /api/posts`} code={`[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
]`} />

          <Code name="Response From /api/posts?user=1" code={`[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
]`} />

          <Code name="Response From /api/posts?user=1&id=1" code={`{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}`} />

          <Code name="pages/api/posts" code={`import { posts } from "@data/posts"

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
}`} />

          <Code name="pages/api/posts/user/[userId]" code={`import { posts } from "@data/posts"

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
}`} />

          <Code name="pages/api/posts/detail/[id]" code={`import { posts } from "@data/posts"

export default function handler(req, res) {

  const { id } = req.query
  const filtered = posts.filter(post => post.id == id)

  if (filtered.length > 0) {
    res.status(200).send(JSON.stringify(filtered[0], null, 2));
    // res.status(200).json(filtered[0])
  }
  else {
    res.status(404).json({ id: id, error: "Not Found" })
  }
}`} />

        </div>
      </main >
    </>
  )
}
