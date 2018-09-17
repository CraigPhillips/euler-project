import GraphNode from '../../data-structures/GraphNode';

export const answer = -1;

export function buildLatticeGraph(width, height = width) {
  const graphNodes = [];

  for (let row = 0; row < height; row += 1) {
    for (let col = 0; col < width; col += 1) {
      if (row === 0) graphNodes.push([]);

      const node = new GraphNode();
      if (col > 0) node.connectToAndFrom(graphNodes[row][col - 1]);
      if (row > 0) node.connectToAndFrom(graphNodes[row - 1][col]);
      graphNodes[row].push(node);
    }
  }

  return {
    bottomRightNode: graphNodes[width - 1][height - 1],
    graphNodes,
  };
}

export function solve() {
  const twentyByTwentySquaresInGrid = 2;
  // considers each corner to be a vertex so there is one more row and column
  // of vertices than there are squares in the graph
  const graph = buildLatticeGraph(twentyByTwentySquaresInGrid + 1);
  let nextNodesToProcess = [graph.bottomRightNode];
  graph.bottomRightNode.value = 1;

  while (nextNodesToProcess.length > 0) {
    const theseNodes = nextNodesToProcess;
    nextNodesToProcess = [];

    for (let i = 0; i < theseNodes.length; i += 1) {
      theseNodes[i].value = theseNodes[i]
        .edges
        .filter(edge => edge.destination.value !== undefined)
        .reduce((sum, edge) => sum + edge.destination.value, 0);
    }

    for (let i = 0; i < theseNodes.length; i += 1) {
      theseNodes[i]
        .edges
        .filter(edge => edge.destination.value === undefined)
        .forEach((edge) => {
          if (nextNodesToProcess.indexOf(edge.destination) === -1) {
            nextNodesToProcess.push(edge.destination)
          }
        });
    }
  }

  return -1;
}
