import { useState } from 'react';
import Head from 'next/head'
import axios from 'axios';
import Navbar from '@components/Navbar';
import Spinner from '@components/Spinner';
import ConsoleSidebar from '@components/ConsoleSidebar';

const linkClassName = "text-sky-500 hover:text-sky-600 transition-all text-sm font-medium block mb-1.5"

export default function Emoji() {
  const [endpoint, setEndpoint] = useState('emojis')
  const [fetched, setFetched] = useState(false)
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  async function handleFetch() {
    setLoading(true)
    try {
      const res = await axios.get(`${process.env.API_URL}/api/${endpoint}`)
      setData(res.data)
      setFetched(true)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Head>
        <title>Console Emoji</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="sm:flex sm:flex-wrap min-h-screen max-w-5xl mx-auto">

          <ConsoleSidebar />

          <div className="sm:w-4/5 px-4 mx-auto pt-4">
            <h1 className="dark:text-white text-2xl font-semibold">Emoji</h1>
            <div className="mt-4 mb-8 dark:text-white">
              <a href='#' className={linkClassName} onClick={() => setEndpoint('emojis')}>
                {process.env.API_URL}/api/emojis
              </a>
            </div>

            <p className="font-semibold dark:text-white mt-2 mb-1">API Reference :</p>
            <table className="console-endpoint-description">
              <tbody className="text-sm dark:text-white">
                <tr>
                  <td className="py-1.5  font-medium dark:text-gray-200">Endpoint</td>
                  <td className="py-1.5  font-medium pl-2">:</td>
                  <td className="py-1.5 pl-2">
                    <a href={`${process.env.API_URL}/api/${endpoint}`} className={linkClassName + 'mb-0'} target="_blank" rel="noreferrer">{process.env.API_URL}/api/{endpoint}</a>
                  </td>
                </tr>
                <tr>
                  <td className=" font-medium dark:text-gray-200">HTTP Method</td>
                  <td className=" font-medium pl-2">:</td>
                  <td className="pl-2 font-semibold text-green-500">GET</td>
                </tr>
              </tbody>
            </table>

            <p className="font-semibold dark:text-white mt-6 mb-2">Request :</p>
            <div className="overflow-auto text-sm text-gray-600 dark:text-gray-300 bg-slate-100 dark:bg-neutral-800 rounded px-4 py-2.5">
              <pre>GET {process.env.API_URL}/api/{endpoint}</pre>
            </div>

            <button onClick={handleFetch} className="mt-3 px-3 tracking-widest py-1.5 rounded text-white text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 transition-all">TRY IT</button>

            {loading &&
              <div className="flex justify-center mt-8">
                <Spinner />
              </div>
            }

            {fetched &&
              <>
                <p className="font-semibold dark:text-white mt-6 mb-2">Response :</p>
                <div className="overflow-auto text-sm text-gray-600 dark:text-gray-300 bg-slate-100 dark:bg-neutral-800 rounded px-4 py-2.5">
                  <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
              </>
            }
          </div>
        </div>
      </main >
    </>
  )
}
