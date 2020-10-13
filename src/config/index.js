import { merge } from 'lodash'
const env = process.env.NODE_ENV || 'development'

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: 8080,
  firebaseConfig :{
    apiKey: "AIzaSyBK6_uM1AeQgPGL7e6qowyoeB6-sK2sQr0",
    authDomain: "liism-2a462.firebaseapp.com",
    databaseURL: "https://liism-2a462.firebaseio.com",
    projectId: "liism-2a462",
    storageBucket: "liism-2a462.appspot.com",
    messagingSenderId: "135614317013",
    appId: "1:135614317013:web:c0392d3131b359c6b23d5c"
  },
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: '100d'
  }
}

let envConfig = {}

switch (env) {
  case 'dev':
  case 'development':
    envConfig = require('./dev').config
    break
  case 'test':
  case 'testing':
    envConfig = require('./testing').config
    break
  default:
    envConfig = require('./dev').config
}

export default merge(baseConfig, envConfig)
