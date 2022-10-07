// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { method } = req;

  const GetAll = () => {
    res.status(200).json({ name: "GET John Doe" })
  }

  const Post = () => {
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
