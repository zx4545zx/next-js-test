// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      GetAll(req, res)
      break;
    case 'POST':
      Post(req, res)
      break;
    default: res.status(404).json({ name: 'error 404' });
  }
}

const GetAll = (req, res) => {
  res.status(200).json({ name: "GET John Doe" })
}

const Post = (req, res) => {
  res.status(200).json({ name: "POST John Doe" })
}