export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeigborhoods.push(newNeighborhood);
    return self.sanFranciscoNeigbourhoods;
  };
}
