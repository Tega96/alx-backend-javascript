export default const getNeighborhoodsList = () => {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = const add = newNeighborhood => {
    self.sanFranciscoNeigborhoods.push(newNeighborhood);
    return self.sanFranciscoNeigbourhoods;
  };
}
