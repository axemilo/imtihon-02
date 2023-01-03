import { read, write } from '../utils/model.js'
import path from 'path'
const GET = (req, res) => {
  try {
    let posts = read('posts')
    return res.status(200).json({ status: 200, message: 'posts here', data: posts })
  } catch (error) {
    res.status(404).json({ status: 404, message: 'posts not found' })
  }
}

const FIND = (req, res) => {
  let posts = read('posts')

  let { id } = req.params

  let post = posts.find((i) => i.post_id == id)
  res.send(post)
}

const POST = (req, res) => {
  try {
    let posts = read('posts')

    let {
      post_user,
      post_title,
      post_body,
      post_desc,
      post_date,
      post_category,
      post_subcategory,
      post_time,
      post_active,
      phone,
    } = req.body
    let { post_img } = req.files

    let fileName = Date.now() + post_img.name.replace(/\s/g, '')
    post_img.mv(path.resolve('uploads', fileName))

    if (
      post_user &&
      post_title &&
      post_body &&
      post_desc &&
      post_date &&
      post_category &&
      post_subcategory &&
      post_time &&
      post_img &&
      post_active &&
      phone
    ) {
      let newPost = {
        post_id: posts.at(-1)?.post_id + 1 || 1,
        post_user,
        post_title,
        post_body,
        post_desc,
        post_date,
        post_category,
        post_subcategory,
        post_time,
        post_img: fileName,
        post_active,
        phone,
        active: true,
      }

      posts.push(newPost)
      write('posts', posts)
      res.status(200).json({ status: 200, message: 'new post added', data: newPost })
    } else {
      throw 'you didnt fill something'
    }
  } catch (error) {
    res.status(403).json({ status: 403, message: error })
  }
}

const GET_FIND = () => {}

export default {
  GET,
  FIND,
  POST,
  GET_FIND,
}
