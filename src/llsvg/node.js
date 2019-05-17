export const getAllChildren = ({ node, links }) => {
  let bucket = []
  bucket.push(node)
  let mover = (node) => {
    let kids = get1LevelKids({ node, links })
    kids.forEach((k) => {
      bucket.push(k)
    })
  }
  mover(node)
}

export const get1LevelKids = ({ node, nodes, links }) => {
  return links.filter(c => c.to === node._id).map((c) => {
    return nodes.find(n => n._id === c.from)
  })
}

export const getLinks = ({ nodes }) => {
  return nodes.reduce((arr, item, ii) => {
    let toNode = nodes.find(n => n._id === item.to)
    if (toNode && item.to !== null) {
      arr.push({
        _id: item.to + item._id + ii,
        dashed: true,
        running: true,
        toPos: toNode.pos,
        fromPos: item.pos,
        from: item._id,
        to: item.to
      })
    }
    return arr
  }, [])
}
