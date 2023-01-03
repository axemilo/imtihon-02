import jwt from '../utils/jwt.js'
import { read, write } from '../utils/model.js'

const LOGIN = (req, res) => {
  try {
    let admins = read('admins')
    let { admin_name, admin_password } = req.body
    let admin = admins.find(
      (admin) => admin.admin_name == admin_name && admin.admin_password == admin_password
    )
    console.log(admin)
    if (!admin) {
      throw new Error('wrong name or password!')
    }

    return res.status(200).json({
      status: 200,
      message: 'ok',
      data: admin,
      token: jwt.sign({ admin_id: admin.admin_id }),
    })
  } catch (error) {
    res.status(404).json({ status: 404, message: error.message })
  }
}

const REGISTER = (req, res) => {
  try {
    let admins = read('admins')
    let { admin_name, admin_password } = req.body
    let admin = admins.find((admin) => admin.admin_name == admin_name)
    if (admin) {
      throw new Error('this name already exist')
    }
    let newAdmin = {
      admin_id: admins.at(-1)?.admin_id + 1 || 1,
      admin_name,
      admin_password,
    }
    admins.push(newAdmin)
    write('admins', admins)
    return res.status(201).json({
      status: 201,
      message: 'ok',
      data: newAdmin,
      token: jwt.sign({ admin_id: newAdmin.admin_id }),
    })
  } catch (error) {
    res.status(404).json({ status: 404, message: error.message })
  }
}

export default { REGISTER, LOGIN }
