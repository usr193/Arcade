// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function arcades(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(require(`../../../data/arcades/${req.query.id}.json`))
}
