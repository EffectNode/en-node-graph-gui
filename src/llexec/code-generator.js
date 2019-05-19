// import * as Node from '../llsvg/node.js'

export const injector = ({ water = {}, compos = {} }) => {
  const EGRAPH_ID = `_APP_${Number(Math.random() * 100000).toFixed(0)}`
  const JSON_ID = `_JSON_${Number(Math.random() * 100000).toFixed(0)}`
  const APPID_REPLACER = `____APPID____`
  const ENGRAPH_WATER_REPLACER = `____ENGRAPH_WATER____`
  const BASEURL_REPLACER = `<!--BASE_URL-->`
  const APPJSON_REPLACER = `____APPJSON____`

  // eslint-disable-next-line import/no-webpack-loader-syntax
  let head = require('raw-loader!../../public/head.fragment.html').default
  // eslint-disable-next-line import/no-webpack-loader-syntax
  let app = require('raw-loader!../../public/app.fragment.html').default
  // eslint-disable-next-line import/no-webpack-loader-syntax
  let body = require('raw-loader!../../public/body.fragment.html').default
  // eslint-disable-next-line import/no-webpack-loader-syntax

  if (process.env.NODE_ENV === 'production') {
    head = head.replace(BASEURL_REPLACER, 'https://en-node-graph-gui.netlify.com')
  } else {
    head = head.replace(BASEURL_REPLACER, window.location.origin)
  }

  body = body.replace(APPID_REPLACER, EGRAPH_ID)
  body = body.replace(APPJSON_REPLACER, JSON_ID)
  body = body.replace(APPJSON_REPLACER, JSON_ID)
  body = body.replace(ENGRAPH_WATER_REPLACER, encodeURIComponent(JSON.stringify(water)))

  app = app.replace(APPID_REPLACER, EGRAPH_ID)

  // eslint-disable-next-line import/no-webpack-loader-syntax
  let html = require('raw-loader!../../public/enigma.html').default
  html = html.replace(`<!--HEAD-->`, head)
  html = html.replace(`<!--APP-->`, app)
  html = html.replace(`<!--BODY-->`, body)

  return html
}

export const nodeToCode = ({ nodes }) => {
  let water = {
    nodes
  }
  return injector({ water })
}

export const codeToBlobURL = ({ code }) => {
  return URL.createObjectURL(new Blob([code], { type: 'text/html' }))
}
