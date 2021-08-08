const jwt = require("jsonwebtoken")
const secret = "老舅真帅"
const token = jwt.sign({name: "lencho", password: "123456"}, secret, {expiresIn: "3m"})

console.log(token)

const get_token = jwt.verify(token, secret)
console.log(get_token)