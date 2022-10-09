// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pelabuhan } from "@data/pelabuhan";

export default function handler(req, res) {
  let result = pelabuhan;

  if (req.query.kode) {
    result = result.filter((item) => {
      return item.KodePelabuhan.toLowerCase().includes(req.query.kode.toLowerCase());
    });
  }

  if (req.query.name) {
    result = result.filter((item) => {
      return item.NamaPelabuhan.toLowerCase().includes(req.query.name.toLowerCase());
    });
  }

  if (req.query['location']) {
    result = result.filter((item) => {
      return item.LokasiPelabuhan.toLowerCase().includes(req.query['location'].toLowerCase());
    });
  }

  if (result.length == 0) return res.status(200).json({ message: 'Not Found' })
  res.status(200).send(JSON.stringify(result, null, 2));
  // res.status(200).json(result);
  return;
}