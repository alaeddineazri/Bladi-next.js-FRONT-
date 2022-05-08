const {events} = require ("./data.json")

export default function handler(req, res) {
    const evt = events.find(evt => evt.slug === req.query.slug)

  if (req.method === "GET") {
  res.status(200).json(evt)
  } else {
    res.setHedaer("Allow", ["GET"])
    res.status(405).json({
      message: `method ${req.method} not allowed`
    })


  }

}
