import OneWayGraphEdge from './OneWayGraphEdge';

export default class GraphNode {
  constructor(value) {
    Object.assign(this, {
      edges: [],
      value,
    });
  }

  connectToAndFrom(destination, toWeight = 1, fromWeight = toWeight) {
    this.edges.push(new OneWayGraphEdge(destination, toWeight));
    destination.edges.push(new OneWayGraphEdge(this, fromWeight));
  }
}
