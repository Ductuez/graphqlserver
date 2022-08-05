import User from '../../models/User'
import Auth from '../../services/auth.service'

export default {
  Mutation: {
    async createUser(_, { createUserInput: { username, password, email, role } }, context) {
      try {
        const hashedPwd = await Auth.hashPassword(password)
        const newUser = new User({
          password: hashedPwd,
          username,
          createdAt: new Date().toISOString(),
          email,
          role,
        })

        const res = await newUser.save()

        console.log(res)
        return {
          id: res.id,
          ...res._doc,
        }
      } catch (error) {
        console.log(error)
      }
    },

    async login(_, { loginUserInput: { email, username, password } }) {
      console.log(email, username, password)
      if (!username || !email) throw new Error('email or username required')
      const userPayload = email ? { email } : { username }
      const user = await User.findOne(userPayload)
      if (!user) throw new Error('Unknown user', userPayload)

      const correctPassword = await Auth.matchPasswords(password, user.password)
      if (!correctPassword) throw new Error('invalid password')

      return {
        jwt: Auth.generateJwt({
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        }),
      }
    },
  },
  Query: {
    getUser: (_, { ID }) => User.findById(ID),
    getUsers: (_, { ...arg }, context) => {
      const users = User.find()
        .clone()
        .catch(function (err) {
          console.log(err)
        })
      return users
    },
  },
}
