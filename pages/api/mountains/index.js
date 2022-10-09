// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mountains } from "@data/mountains";

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
}