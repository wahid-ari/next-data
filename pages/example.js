import Head from 'next/head'
import Navbar from '@components/Navbar';
import Code from '@components/Code';

const linkClassName = "text-sky-500 hover:text-sky-600 transition-all text-sm font-medium block mb-1"

export default function Example() {

  return (
    <>
      <Head>
        <title>Example Console</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 ">
          <h1 className="dark:text-white text-2xl font-semibold">Example Console</h1>

          <Code name="pages/console/repo" code={`import { useState } from 'react';
import axios from 'axios';
import Spinner from '@components/Spinner';

export default function Repo() {
  const [endpoint, setEndpoint] = useState('repos')
  const [fetched, setFetched] = useState(false)
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  async function handleFetch() {
    setLoading(true)
    try {
      const res = await axios.get('\${process.env.API_URL}/api/\${endpoint}')
      setData(res.data)
      setFetched(true)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <h1>Repo</h1>
    <a href='#' onClick={() => setEndpoint('repos')}>
      {process.env.API_URL}/api/repos
    </a>
    <a href='#' onClick={() => setEndpoint('repos/nextjs')}>
      {process.env.API_URL}/api/repos/nextjs
    </a>

    <p>Request :</p>
    <pre>GET {process.env.API_URL}/api/{endpoint}</pre>

    <button onClick={handleFetch}>TRY IT</button>

    {loading && <Spinner />}

    {fetched &&
      <>
        <p>Response :</p>
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </>
    }
  )
}`} />

        </div>
      </main >
    </>
  )
}
