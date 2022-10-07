// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { query: { id }, method } = req;

  const GetOne = () => {
    res.status(200).json({ name: "GET ONE John Doe : " + id })
  }

  const Update = () => {
    res.status(200).json({ name: "PUT John Doe : " + id })
  }

  const Destroy = () => {
    res.status(200).json({ name: "DELETE John Doe : " + id })
  }

  switch (method) {
    case 'GET':
      GetOne()
      break;
    case 'PUT':
      Update()
      break;
    case 'DELETE':
      Destroy()
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
