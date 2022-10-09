// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { kode_sni_kota } from "@data/kode_sni_kota";

export default function handler(req, res) {
  let result = kode_sni_kota;

  if (req.query.kode) {
    result = result.filter((item) => {
      return item.sni_code.toLowerCase().includes(req.query.kode.toLowerCase());
    });
  }

  if (req.query.province) {
    result = result.filter((item) => {
      return item.province.toLowerCase().includes(req.query.province.toLowerCase());
    });
  }

  if (req.query['city']) {
    result = result.filter((item) => {
      return item.capital.toLowerCase().includes(req.query['city'].toLowerCase());
    });
  }

  if (result.length == 0) return res.status(200).json({ message: 'Not Found' })
  res.status(200).send(JSON.stringify(result, null, 2));
  // res.status(200).json(result);
  return;
}