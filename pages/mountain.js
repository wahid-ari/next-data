import Head from 'next/head'
import Navbar from '@components/Navbar';
import Code from '@components/Code';

const linkClassName = "text-sky-500 hover:text-sky-600 transition-all text-sm font-medium block mb-1"

export default function Avatar() {

  return (
    <>
      <Head>
        <title>Mountain Data</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 ">
          <h1 className="dark:text-white text-2xl font-semibold">Mountain Data</h1>

          <div className="my-8 dark:text-white">
            <a href={`${process.env.API_URL}/api/mountains`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/mountains
            </a>
            <a href={`${process.env.API_URL}/api/mountains?type=stratovulkan`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/mountains?type=stratovulkan
            </a>
            <a href={`${process.env.API_URL}/api/mountains?max_height=1000`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/mountains?max_height=1000
            </a>
            <a href={`${process.env.API_URL}/api/mountains?min_height=3000`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/mountains?min_height=3000
            </a>
            <a href={`${process.env.API_URL}/api/mountains?min_height=2500&max_height=3000`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/mountains?min_height=2500&max_height=3000
            </a>
            <a href={`${process.env.API_URL}/api/mountains?type=stratovulkan&max_height=3000`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/mountains?type=stratovulkan&max_height=3000
            </a>
            <a href={`${process.env.API_URL}/api/mountains?type=stratovulkan&min_height=2500&max_height=3000`} className={linkClassName} target="_blank" rel="noreferrer">
              {process.env.API_URL}/api/mountains?type=stratovulkan&min_height=2500&max_height=3000
            </a>
            <p className="text-sm dark:text-white">type : stratovulkan, kaldera, supervulkan, maar, fumarol, kubah lava, perisai, kerucut, kerucut bara, bawah laut, kompleks</p>
          </div>

          <Code name={`Response From /api/mountains`} code={`[
  {
    "nama": "Semeru",
    "bentuk": "stratovulkan",
    "tinggi_meter": "3676 meter",
    "estimasi_letusan_terakhir": 2020,
    "geolokasi": "8.108????S 112.92????E"
  },
  {
    "nama": "Bromo",
    "bentuk": "kerucut bara",
    "tinggi_meter": "2329 meter",
    "estimasi_letusan_terakhir": "8 Juni 2016",
    "geolokasi": "7.942????S 112.95????E"
  },
]`} />

          <Code name={`Response From /api/mountains?type=stratovulkan&min_height=2500&max_height=3000`} code={`[
  {
    "nama": "Merapi",
    "bentuk": "stratovulkan",
    "tinggi_meter": "2968 meter",
    "estimasi_letusan_terakhir": 2021,
    "geolokasi": "7.542????S 110.442????E"
  },
  {
    "nama": "Wilis",
    "bentuk": "stratovulkan",
    "tinggi_meter": "2563 meter",
    "estimasi_letusan_terakhir": "N/A",
    "geolokasi": "7.808????S 111.758????E"
  },
]`} />

          <Code name="pages/api/mountains" code={`import { mountains } from "@data/mountains";

export default function handler(req, res) {
  let result = mountains;

  if (req.query.name) {
    result = result.filter((mountain) => {
      return mountain.nama.toLowerCase().includes(req.query.name.toLowerCase());
    });
  }

  if (req.query['type']) {
    result = result.filter((mountain) => {
      return mountain.bentuk.toLowerCase().includes(req.query['type'].toLowerCase());
    });
  }

  if (req.query['min_height']) {
    result = result.filter((mountain) => {
      return parseInt(mountain.tinggi_meter) >= req.query['min_height']
    });
  }

  if (req.query['max_height']) {
    result = result.filter((mountain) => {
      return parseInt(mountain.tinggi_meter) <= req.query['max_height']
    });
  }

  if (result.length == 0 ) return res.status(200).json({message: 'Not Found'})
  res.status(200).send(JSON.stringify(result, null, 2));
  // res.status(200).json(result);
  return;
}`} />

        </div>
      </main >
    </>
  )
}
