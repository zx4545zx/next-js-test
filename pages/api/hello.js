// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  switch(req.method) {
    case GET:
      GetAll()
      break;
    case POST:
      Post()
      break;
    default:
      res.status(404).json({ name: 'error 404'})
  }
}

const GetAll = () => {
  res.status(200).json({name: "GET John Doe" })
}

const Post = () => {
  res.status(200).json({name: "POST John Doe" })
}