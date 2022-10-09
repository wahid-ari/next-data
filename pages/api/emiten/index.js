// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { emiten } from "@data/emiten";

export default function handler(req, res) {
  let result = emiten;

  if (req.query.kode) {
    result = result.filter((item) => {
      return item.kode_emiten.toLowerCase().includes(req.query.kode.toLowerCase());
    });
  }

  if (req.query.name) {
    result = result.filter((item) => {
      return item.nama_emiten.toLowerCase().includes(req.query.name.toLowerCase());
    });
  }

  if (req.query['category']) {
    result = result.filter((item) => {
      return item.kategori.toLowerCase() == req.query['category'].toLowerCase()
    });
  }

  if (result.length == 0) return res.status(200).json({ message: 'Not Found' })
  res.status(200).send(JSON.stringify(result, null, 2));
  // res.status(200).json(result);
  return;
}