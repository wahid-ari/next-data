// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prakerja_providers } from "@data/prakerja_providers";

export default function handler(req, res) {
  let result = prakerja_providers;

  if (req.query.name) {
    result = result.filter((item) => {
      return item.providerName.toLowerCase().includes(req.query.name.toLowerCase());
    });
  }

  if (result.length == 0) return res.status(200).json({ message: 'Not Found' })
  res.status(200).send(JSON.stringify(result, null, 2));
  // res.status(200).json(result);
  return;
}