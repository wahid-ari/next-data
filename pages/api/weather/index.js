// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { weathers } from "@data/weathers";

export default function handler(req, res) {
  let result = weathers;

  if (req.query['province']) {
    result = result.forecast.area.filter((item) => {
      return item.domain.toLowerCase().includes(req.query['province'].toLowerCase());
    });
  }

  if (req.query['city']) {
    result = result.forecast.area.filter((item) => {
      return item.description.toLowerCase().includes(req.query['city'].toLowerCase());
    });
  }

  if (req.query['time']) {
    result = result.forecast.issue
  }

  if (result.length == 0) return res.status(200).json({ message: 'Not Found' })
  res.status(200).send(JSON.stringify(result, null, 2));
  // res.status(200).json(result);
  return;
}