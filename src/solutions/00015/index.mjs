import GraphNode from '../../data-structures/GraphNode';

export const answer = 137846528820;

export function buildLatticeGraph(width, height = width) {
  const graphNodes = [];

  for (let row = 0; row < height; row += 1) {
    for (let col = 0; col < width; col += 1) {
      if (row === 0) graphNodes.push([]);

      const node = new GraphNode();
      if (col > 0) node.connectToAndFrom(graphNodes[row][col - 1]);
      if (row > 0) node.connectToAndFrom(graphNodes[row - 1][col]);
      node.position = `(${col}, ${row})`;
      graphNodes[row].push(node);
    }
  }

  return {
    bottomRightNode: graphNodes[width - 1][height - 1],
    graphNodes,
    topLeftNode: graphNodes[0][0],
  };
}

export function solve() {
  const twentyByTwentySquaresInGrid = 20;
  // considers each corner to be a vertex so there is one more row and column
  // of vertices than there are squares in the graph
  const graph = buildLatticeGraph(twentyByTwentySquaresInGrid + 1);
  let nextNodes = [graph.bottomRightNode];

  const addDestNodeToNextListIfNotPresent = (edge) => {
    if (!nextNodes.some(n => n.position === edge.destination.position)) {
      nextNodes.push(edge.destination);
    }
  };

  while (nextNodes.length > 0) {
    const theseNodes = nextNodes;
    nextNodes = [];

    for (let i = 0; i < theseNodes.length; i += 1) {
      theseNodes[i].value = theseNodes[i]
        .edges
        .filter(edge => edge.destination.value !== undefined)
        // the "|| 1" portion addresses the starting vertex only and
        // works as initialization value for counting the other paths
        .reduce((sum, edge) => sum + edge.destination.value, 0) || 1;
    }

    for (let i = 0; i < theseNodes.length; i += 1) {
      theseNodes[i]
        .edges
        .filter(edge => edge.destination.value === undefined)
        .forEach(addDestNodeToNextListIfNotPresent);
    }
  }

  return graph.topLeftNode.value;
}
