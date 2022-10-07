// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import excuteQuery from '../../../lib/db'

export default function handler(req, res) {
  const { method } = req;

  const GetAll = async () => {
    const results = await excuteQuery({
      query: 'INSERT INTO hello (name) VALUES(?)',
      values: ['natto'],
    })

    res.status(200).json(results)
  }

  const Post = async () => {
    res.status(200).json({ name: "POST John Doe" })
  }

  switch (method) {
    case 'GET':
      GetAll()
      break;
    case 'POST':
      Post()
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
