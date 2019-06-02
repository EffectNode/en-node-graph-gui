/*
npm i js-cookie strapi-sdk-javascript nprogress downscale --save
*/
import Strapi from 'strapi-sdk-javascript'
import * as Cookies from 'js-cookie'
import NProgress from 'nprogress'
import './nprogress/nprogress.css'
import downscale from 'downscale'
// @.@

NProgress.configure({
  minimum: 0.08,
  easing: 'ease',
  positionUsing: '',
  speed: 200,
  trickle: true,
  trickleRate: 0.015,
  trickleSpeed: 350,
  showSpinner: false,
  barSelector: '[role="bar"]',
  spinnerSelector: '[role="spinner"]',
  parent: 'body',
  template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
})

let storeConfig = {
  cookie: {
    key: 'en-igraph',
    options: {
      path: '/'
    }
  },
  localStorage: {
    key: 'en-igraph'
  }
}

let baseURL = 'https://en-node-graph-api.herokuapp.com/'

if (process.env.NODE_ENV === 'production') {

} else {
  baseURL = `http://${window.location.hostname}:${1337}`
}

export const SDK = new Strapi(baseURL, storeConfig)

export const useNProgress = () => {
  const axios = SDK.axios

  // Add a request interceptor
  axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    NProgress.start()
    return config
  }, function (error) {
    NProgress.done()
    // Do something with request error
    return Promise.reject(error)
  })

  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    // Do something with response data
    NProgress.done()
    return response
  }, function (error) {
    NProgress.done()
    // Do something with response error
    return Promise.reject(error)
  })
}

export const login = async ({ email, password }) => {
  return SDK.login(email, password)
}

export const logout = () => {
  SDK.clearToken()
  Cookies.remove(storeConfig.cookie.key, storeConfig.cookie.options)
  window.localStorage.removeItem(storeConfig.localStorage.key)
}

export const register = ({ username, email, password }) => {
  return SDK.register(username, email, password)
}

export const check = () => {
  let jwtcookie = Cookies.get(storeConfig.cookie.key)
  let jwt = window.localStorage.getItem(storeConfig.localStorage.key)
  return !!jwt && !!jwtcookie
}

export const getMyself = () => {
  return SDK.request('get', '/users/me')
}

useNProgress()

// ------- MEDIA ------

export const getMyMedia = ({ userID }) => {
  return SDK.request('get', `/mymedias?userID=${userID}`)
}

export const removeGalleryItem = async ({ entry }) => {
  return Promise.all([
    removeUpload({ file: entry.media }),
    SDK.request('delete', `/mymedias/${entry._id}?userID=${entry.userID}`)
  ])
}

export const addGalleryItem = ({ userID, media }) => {
  return SDK.createEntry('mymedias', {
    userID,
    media
  })
}

// ----- iGraph -----
export const ZIP = (str) => {
  return import('compress-str').then(m => m.gzip(str))
}
export const UNZIP = (str) => {
  return import('compress-str').then(m => m.gunzip(str))
}

export const createIGraph = ({ data }) => {
  return SDK.request('POST', `/igraphs`, { data })
}

export const getMyGraphs = ({ userID, pageAt = 0, perPage = 7 }) => {
  return SDK.request('GET', `/igraphs?userID=${userID}&_limit=${perPage}&_start=${pageAt * perPage}&_sort=updatedAt:DESC`)
}
export const getGraph = ({ graphID }) => {
  return SDK.request('GET', `/igraphs/${graphID}`)
}

export const updateGraph = ({ data }) => {
  return SDK.request('PUT', `/igraphs/${data._id}?userID=${data.userID}`, { data })
}

export const delGraph = ({ data }) => {
  return SDK.request('DELETE', `/igraphs/${data._id}?userID=${data.userID}`)
}

export const forkGraph = async ({ water, myself, graph }) => {
  let base64gzip = await ZIP(JSON.stringify(water))
  let data = {
    userID: myself._id,
    title: graph.title,
    fromGraphID: graph._id,
    fromUserID: graph.userID,
    base64gzip
  }
  let newGraph = await createIGraph({ data })
  return newGraph
}

// ---- UPLOAD ------

export const getDimension = ({ file, maxDimension = 1080 }) => {
  return new Promise((resolve) => {
    let url = URL.createObjectURL(file)
    let img = new Image()
    img.onload = () => {
      let aspect = img.width / img.height
      if (aspect >= 1) {
        resolve({ width: maxDimension, height: maxDimension / aspect })
      } else {
        resolve({ width: maxDimension * aspect, height: maxDimension })
      }
    }
    img.src = url
  })
}

export const resample = async ({ file, form, maxDimension = 1080 }) => {
  let { width, height } = await getDimension({ file, maxDimension })
  return downscale(file, width, height, { returnBlob: 1, imageType: 'png', quality: 0.7 })
    .then((blob) => {
      // Append image to form as a blob data
      form.append('files', blob, file.name)
    })
}

export const uploadMultipleFiles = async ({ files }) => {
  console.log(files)
  // const form = new FormData()
  // let rescaler = []
  // for (var i = 0; i < files.length; i++) {
  //   rescaler.push(resample({ file: files[i], form, maxDimension: 1080 }))
  // }
  // await Promise.all(rescaler)
  // const results = await SDK.upload(form)
  // return results
}

export const removeUpload = ({ file }) => {
  return SDK.request('delete', `/upload/files/${file._id}`)
}
