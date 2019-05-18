// import * as Node from '../llsvg/node.js'

export const codeBuilder = ({ nodes }) => {

  /*

    add

    sendToParent

    -> parent handle add

    <Node1 :ref="_node + node._id" @add="$bus.onAdd({ node, nodes, $event })"></Node1>
  */

  // let links = Node.getLinks({ nodes })

  // let root = nodes.find(r => r.type === 'root')
  // let rootKids = Node.get1LevelKids({ node: root, nodes, links })

  // return nodes
}

export const nodeToCode = ({ nodes }) => {
  let html = ''
  let js = `

  `

  return html + js
}
