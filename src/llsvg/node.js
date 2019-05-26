import { uniqBy } from 'lodash'

export const getAllChildren = ({ node, nodes, links }) => {
  let bucket = []

  let mover = (mnode) => {
    bucket.push(mnode)
    let kids = get1LevelKids({ node: mnode, nodes, links })
    kids.forEach((k) => {
      mover(k)
    })
  }
  mover(node)

  return uniqBy(bucket, '_id')
}

export const getID = () => {
  return `_${Number(Math.random() * 1000000).toFixed(0)}`
}
export const get1LevelKids = ({ node, nodes, links }) => {
  let ans = links.filter(c => c.to === node._id).map((c) => {
    return nodes.find(n => n._id === c.from)
  })

  return uniqBy(ans, '_id')
}

export const getLinks = ({ nodes }) => {
  return nodes.reduce((arr, item, ii) => {
    let toNode = nodes.find(n => n._id === item.to)
    if (toNode && !!item.to) {
      arr.push({
        _id: item.to + item._id,
        dashed: true,
        running: true,
        toPos: toNode.pos || { x: 0, y: 0 },
        fromPos: item.pos || { x: 0, y: 0 },
        from: item._id,
        to: item.to
      })
    }
    return arr
  }, [])
}

export const getNodeTemplate = () => {
  return {
    _id: '',
    title: 'My New Node',
    to: ''
  }
}
