//This test code is inspired by countMooshroom
const fs = require('fs');
eval(fs.readFileSync('code.js')+'');

//This is the example from the slides
let graph1 = [
  [[1, 2], [2, 1], [3, 4]],       //node A
  [[2, 1], [4, 10], [5, 2]],      //node B
  [[0, 9], [4, 8]],               //node C
  [[2, 2]],                       //node D
  [[3, 7], [6, 1]],               //node E
  [[7, 3]],                       //node F
  [[4, 4], [5, 2]],               //node G
  [[6, 1]]                        //node H
];
let expected1 = [9, 11, 0, 13, 8, 11, 9, 14];

if ((JSON.stringify(dijkstra(graph1, 2)) != JSON.stringify(expected1))) {
  throw "Test failed";
}

//Took graph from
//https://www.geeksforgeeks.org/dijkstras-algorithm-for-adjacency-list-representation-greedy-algo-8/ 
let graph2 = [
  [[1, 4], [7, 8]],                   // Node 0
  [[2, 8], [7, 11], [0, 7]],          // Node 1
  [[1, 8], [3, 7], [8, 2], [5, 4]],   // Node 2
  [[2, 7], [4, 9], [5, 14]],          // Node 3
  [[3, 9], [5, 10]],                  // Node 4
  [[4, 10], [6, 2]],                  // Node 5
  [[5, 2], [7, 1], [8, 6]],           // Node 6
  [[0, 8], [1, 11], [6, 1], [8, 7]],  // Node 7
  [[2, 2], [6, 6], [7, 1]]            // Node 8
];

let expected2 = [0, 4, 12, 19, 21, 11, 9, 8, 14];

if ((JSON.stringify(dijkstra(graph2, 0)) != JSON.stringify(expected2))) {
  throw "Test failed";
}