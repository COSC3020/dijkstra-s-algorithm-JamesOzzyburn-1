function dijkstra(graph, sourceNode) {
    var dist = new Array(graph.length).fill(Infinity);
    var markVert = new Array(graph.length);
    var node;

    dist[sourceNode] = 0; //Distance from the source node to itself it always zero

    while (markVert.includes(undefined)) { //Run until markVert is filled
        var min = Infinity

        for (let i = 0; i < dist.length; i++) { 
            if (dist[i] < min && markVert[i] == undefined) { //Find the minimum
                min = dist[i];
                node = i;
            }
        }
        markVert[node] = dist[node]; //Mark it

        //For each edge, dist[w] is the minimum distance
        for (edge of graph[node]) {
            dist[edge[0]] = Math.min(edge[1] + dist[node], dist[edge[0]]);
        }
    }
    return markVert;
}