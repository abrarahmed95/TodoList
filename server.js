import express from "express"
import config from "./webpack.config"
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware  from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const router = express.Router()
const compiler = webpack(config)
const PORT = process.env.PORT || 8080
const index = path.join(__dirname, './index.html')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(webpackDevMiddleware(compiler, {
  noInfo: config.noInfo,
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.get('*', (req,res)=> {
  res.sendFile(index)
})

app.listen(PORT, ()=>{
  console.log("http://localhost:%s", PORT)
})
