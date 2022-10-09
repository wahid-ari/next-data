// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { publishers } from "@data/publishers";
import { publisherArea } from '@helpers/enums';

export default function handler(req, res) {
  let result = publishers;

  if (req.query['name']) {
    result = result.filter((publisher) => {
      return publisher.penerbit.toLowerCase().includes(req.query['name'].toLowerCase());
    });
  }

  if (req.query['area']) {
    let selectedArea = [];
    let selectedPublishers = [];
    publisherArea.map((target) => {
      if (req.query['area'].includes(target.id)) {
        selectedArea.push(target.area);
      }
    })
    result.map((publisher) => {
      if (selectedArea.includes(publisher.wilayah)) {
        selectedPublishers.push(publisher);
      }
    })
    result = selectedPublishers;
  }

  if (req.query['registered_year_start']) {
    result = result.filter((publisher) => {
      return parseInt(publisher.tahun_masuk) >= req.query['registered_year_start']
    });
  }

  if (req.query['registered_year_end']) {
    result = result.filter((publisher) => {
      return parseInt(publisher.tahun_masuk) <= req.query['registered_year_end']
    });
  }

  if (req.query['count_only']) {
    res.status(200).json({ count: result.length });
    return;
  }

  if (result.length == 0) return res.status(200).json({ message: 'Not Found' })
  res.status(200).send(JSON.stringify(result, null, 2));
  // res.status(200).json(result);
  return;
}