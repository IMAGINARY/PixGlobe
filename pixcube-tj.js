//PIXELATED CUBE  2

//Vertices in one octant
var v0 = [[2,2,2],[1,2,3],[2,1,3],[3,1,2],[3,2,1],[2,3,1],[1,3,2],
         [1,2,2],[2,1,2],[2,2,1],[1,1,3],[3,1,1],[1,3,1],[0,3,2],[0,2,3],[2,0,3],[3,0,2],[3,2,0],[2,3,0],
         [1,1,2],[2,1,1],[1,2,1],[0,2,2],[2,0,2],[2,2,0]];

//Edges in one octant (pairs of indices of vertices)
var e0 = [[0,7],[0,8],[0,9],
         [1,7],[1,10],[1,14],
         [2,8],[2,10],[2,15],
         [3,8],[3,11],[3,16],
         [4,11],[4,9],[4,17],
         [5,9],[5,12],[5,18],
         [6,12],[6,7],[6,13],
         [19,7],[19,8],[19,10],
         [20,8],[20,9],[20,11],
         [21,9],[21,7],[21,12],
         [22,7],
         [23,8],
         [24,9]
       ];

var v1 = v0.map( p => [-p[0],p[1],p[2]] )
var v2 = v0.map( p => [p[0],-p[1],p[2]] )
var v3 = v0.map( p => [p[0],p[1],-p[2]] )
var v4 = v0.map( p => [-p[0],-p[1],p[2]] )
var v5 = v0.map( p => [-p[0],p[1],-p[2]] )
var v6 = v0.map( p => [p[0],-p[1],-p[2]] )
var v7 = v0.map( p => [-p[0],-p[1],-p[2]] )

var v = v0.concat(v1,v2,v3,v4,v5,v6,v7);

var e = e0;
for (var i=1; i<=7; i++) {
  e = e.concat(e0.map( a => [a[0]+i*25 , a[1]+i*25]));
}

// var eee = e.map(i => [v[i[0]] , v[i[1]] ]);

//var m1_0 = [~14,12,~10,11];

// Masks
//
//       | UL  |___U____| UR  |
//  | LU | CUL |        | CUR | RU |
//  | L  |         C          | R  |
//  | LD | CDL |________| CDR | RD |
//       | DL  |   D    | DR  |


var mC = [~14,12,~10,11,
          ~(11+2*33),(10+2*33),~(12+2*33),(14+2*33),
          ~(14+6*33),(12+6*33),~(10+6*33),(11+6*33),
          ~(11+3*33),(10+3*33),~(12+3*33),(14+3*33) ];


var mCUR = [1,~24,25,~2];
var mCUL = [(1+2*33),~(24+2*33),(25+2*33),~(2+2*33)];
var mCDL = [(1+6*33),~(24+6*33),(25+6*33),~(2+6*33)];
var mCDR = [(1+3*33),~(24+3*33),(25+3*33),~(2+3*33)];

// var mRU = [19,~28,29,~18];
var mRU = [19,~28,29,~18];
var mLU = [(19+2*33),~(28+2*33),(29+2*33),~(18+2*33)];
var mLD = [(19+6*33),~(28+6*33),(29+6*33),~(18+6*33)];
var mRD = [(19+3*33),~(28+3*33),(29+3*33),~(18+3*33)];

var mUR = [4,~23,21,~3];
var mUL = [(4+2*33),~(23+2*33),(21+2*33),~(3+2*33)];
var mDL = [(4+6*33),~(23+6*33),(21+6*33),~(3+6*33)];
var mDR = [(4+3*33),~(23+3*33),(21+3*33),~(3+3*33)];

var mR = [~17,15,~32,~(32+3*33),(15+3*33),~(17+3*33)];
var mL = [~(17+2*33),(15+2*33),~(32+2*33),~(32+6*33),(15+6*33),~(17+6*33)];

var mU = [31,~6,8,(8+2*33),~(6+2*33),(31+2*33)];
var mD = [(31+6*33),~(6+6*33),(8+6*33),(8+3*33),~(6+3*33),(31+3*33)];

// var ep = e.map(i => [v[i[0]] , v[i[1]] ])
// console.log(ep);


function cart2ll (p) {
//Cartesian to lon-lat, in degrees
var r = Math.sqrt( p[0]*p[0] + p[1]*p[1] + p[2]*p[2] );
var lon = Math.atan2( p[1] , p[0] ) * 180/Math.PI;
var lat = Math.asin(p[2]/r) * 180/Math.PI;
return [lon,lat];
}

var vv = v.map(i => cart2ll(i));
var ee = e.map(i => [vv[i[0]] , vv[i[1]] ])



var cube_tj = {
  "type": "Topology",
  "objects": {
    "vertices": {
          "type": "MultiPoint",
          "id": "vertices",
          "coordinates": vv
        },
    "edges": {
          "type": "MultiLineString",
          "id": "edges",
          "arcs": ee.map((x,i)=>[i])
        },
    "mask": {
          "type": "MultiLineString",
          "id": "mask",
          "arcs": [mC,mCUR,mCUL,mCDL,mCDR,mRU,mLU,mLD,mRD,mUR,mUL,mDL,mDR,mR,mL,mU,mD]
        },
    "mask1": {
          "type": "MultiLineString",
          "id": "mask",
          "arcs": [mC]
        },
    "mask2": {
          "type": "MultiLineString",
          "id": "mask",
          "arcs": [mCUR,mCUL,mCDL,mCDR,mR,mL,mU,mD]
        },
    "mask3": {
          "type": "MultiLineString",
          "id": "mask",
          "arcs": [mRU,mLU,mLD,mRD,mUR,mUL,mDL,mDR]
        },
    "mC": {"type": "LineString", "arcs": mC },
    "mCUR": {"type": "LineString", "arcs": mCUR },
    "mCUL": {"type": "LineString", "arcs": mCUL },
    "mCDL": {"type": "LineString", "arcs": mCDL },
    "mCDR": {"type": "LineString", "arcs": mCDR },
    "mRU": {"type": "LineString", "arcs": mRU },
    "mLU": {"type": "LineString", "arcs": mLU },
    "mLD": {"type": "LineString", "arcs": mLD },
    "mRD": {"type": "LineString", "arcs": mRD },
    "mUR": {"type": "LineString", "arcs": mUR },
    "mUL": {"type": "LineString", "arcs": mUL },
    "mDL": {"type": "LineString", "arcs": mDL },
    "mDR": {"type": "LineString", "arcs": mDR },
    "mR": {"type": "LineString", "arcs": mR },
    "mL": {"type": "LineString", "arcs": mL },
    "mU": {"type": "LineString", "arcs": mU },
    "mD": {"type": "LineString", "arcs": mD }

    },
  "arcs": ee
}
