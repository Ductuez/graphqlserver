import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { tokenSecret } from '../configs'

// retrieve env vars
dotenv.config()
class Auth {
  constructor() {}

  static async hashPassword(pwd) {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    return bcrypt.hashSync(pwd, salt)
  }

  static async matchPasswords(requestPwd, userPwd) {
    return bcrypt.compare(requestPwd, userPwd)
  }

  static generateJwt({ username, email, id, role }) {
    return jwt.sign({ username, email, id, role }, tokenSecret, {
      expiresIn: '30 days',
    })
  }

  static getJwtPayload(token) {
    return jwt.verify(token, tokenSecret)
  }

  static getUserId({ req = {}, authToken = '' }) {
    if (req.headers) {
      const authHeader = req?.headers?.authorization
      if (authHeader) {
        const token = authHeader.replace('Bearer ', '')
        if (!token) {
          return null
        }
        const result = this.getJwtPayload(token)
        return result
      }
    } else if (authToken) {
      const result = this.getJwtPayload(authToken)
      return result
    }

    return null
  }
}

export default Auth
