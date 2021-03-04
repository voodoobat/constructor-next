const scheme_1 = require('@src/fixtures/scheme_1.json')
const scheme_2 = require('@src/fixtures/scheme_2.json')

const schemes = [
  scheme_1,
  scheme_2
]

export default (req, res) => {
  res.status(200).json(schemes)
}
