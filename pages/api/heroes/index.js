// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { heroes } from "@data/heroes";

export default function handler(req, res) {
  let result = heroes

  if (req.query['name']) {
    result = heroes.filter((person) => {
      return person.name.toLowerCase().includes(req.query['name'].trim().toLowerCase())
    });
  }

  if (req.query['q']) {
    result = heroes.filter((person) => {
      return (person.name.toLowerCase().includes(req.query['q'].toLowerCase()) || person.description.toLowerCase().includes(req.query['q'].toLowerCase()))
    });
  }

  if (req.query['alive_start'] && req.query['alive_end']) {
    result = heroes.filter((person) => {
      return parseInt(person.birth_year) >= req.query['alive_start'] && parseInt(person.death_year) <= req.query['alive_end']
    });
  }

  if (req.query['birth_start'] && req.query['birth_end']) {
    result = heroes.filter((person) => {
      return parseInt(person.birth_year) >= req.query['birth_start'] && person.birth_year <= req.query['birth_end']
    });
  }

  if (req.query['ascend_start'] && req.query['ascend_end']) {
    result = heroes.filter((person) => {
      return parseInt(person.ascension_year) >= req.query['ascend_start'] && parseInt(person.ascension_year) <= req.query['ascend_end']
    });
  }

  if (result.length == 0) return res.status(200).json({ message: 'Not Found' })
  res.status(200).send(JSON.stringify(result, null, 2));
  // res.status(200).json(heroes);
  return;
}