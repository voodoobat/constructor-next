const scheme_1 = require('@src/fixtures/scheme_1.json')
const scheme_2 = require('@src/fixtures/scheme_2.json')

const schemes = [
  scheme_1,
  scheme_2
]

export default (req, res) => {
  const { query } = req
  const scheme = schemes.find(s => s.schemeUid == query.schemeUid) || {}

  res.status(200).json(scheme)
}
