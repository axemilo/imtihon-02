import { read, write } from '../utils/model.js'

const GET = (req, res) => {
  try {
    let category = read('category')
    let subcategory = read('subcategory')
    return res.status(200).json({ status: 200, message: 'ok', data1: category, data2: subcategory })
  } catch (error) {
    res.status(404).json({ status: 404, message: 'categories not found' })
  }
}

export default { GET }
