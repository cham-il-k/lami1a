import config from '../config'
import jwt from 'jsonwebtoken'
import {apiCall} from './api-call'

export const newToken = user => {
  return jwt.sign({ id: user.id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  })
}

export const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })

export const signup = async (email, password, retypePassword) => {
  if (!email || !password || !retypePassword) {
    return new Error({ message: 'need email and password and retypePassword' })
  }
try {
  const user = await apiCall('get', `/signup`, {email, password, retypePassword})
    if (!user) {
      return new Error({ message: 'can t signup' })
    }
    if (!(password === retypePassword)) {
      return new Error({ message: 'retype password don t match' })
    }
    const {id, email, login } = {...user}
   const token = newToken({id,email, login})
    return { token,
      id,email,login
  }
 } catch (e) {
    return new Error({ message: 'can t signup' })
  }
}

export const signin = async (email, password) => {
  if (!email || !password) {
    return new Error({ message: 'need email and password' })
  }

  const invalid = { message: 'Invalid email and passoword combination' }

  try {
    const user = await apiCall('get', `/signin`, {email, password})
    if (!user) {
      return new Error({ message: 'can t signup' })
    }

    const match = await user.checkPassword(password)

    if (!match) {
      return new Error({ status: 501,
            message: 'can t signup' })
    }
    const {id, email, login } = {...user}

    const token = newToken({id,email, login})
    return ({ token,
      id,email,login
    })
  } catch (e) {
    new Error({ status: 500,
      message: 'can t signup' }) }
}
/* 
export const protect = async (email, password) => {
  const bearer = req.headers.authorization

  if (!bearer || !bearer.startsWith('Bearer ')) {
    return new Error({status: 401,
    message:'le token est erroné'
  })
  }

  const token = bearer.split('Bearer ')[1].trim()
  let payload
  try {
    payload = await verifyToken(token)
  } catch (e) {
    return new Error({status: 401,
      message:'le token est erroné'
    })
  }

  const user = await  apiCall('get', `/signin`, {email, password})


  if (!user) {
    return new Error({status: 401,
      message:'le token est erroné'
    })
  }

  next()
}
 */