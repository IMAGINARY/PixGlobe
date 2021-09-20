

// Projection PieceWise for all the tiles

function pjTiles(q) {
return {
  pjC : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale)
                .translate([0,0]),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale)
                .translate([0,0])
                .rotate(versor.rotation(q)),
    mask : 'mC'
  },

  pjU : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([0,-5*tileUnit]),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([0,-5*tileUnit])
                .rotate(versor.rotation(versor.multiply(versU,q))),
    mask : 'mD'
  },

  pjD : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([0,5*tileUnit]),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([0,5*tileUnit])
                .rotate(versor.rotation(versor.multiply(versD,q))),
    mask : 'mU'
  },

  pjR : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([5*tileUnit,0]),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([5*tileUnit,0])
                .rotate(versor.rotation(versor.multiply(versR,q))),
    mask : 'mL'
  },

  pjL : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([-5*tileUnit,0]),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([-5*tileUnit,0])
                .rotate(versor.rotation(versor.multiply(versL,q))),
    mask : 'mR'
  },

  pjRU : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([5*tileUnit,-3*tileUnit])
                .angle(-90),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([5*tileUnit,-3*tileUnit])
                .rotate(versor.rotation(versor.multiply(versU,q)))
                .angle(-90),
    mask : 'mDR'
  },

  pjRD : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([5*tileUnit,3*tileUnit])
                .angle(90),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([5*tileUnit,3*tileUnit])
                .rotate(versor.rotation(versor.multiply(versD,q)))
                .angle(90),
    mask : 'mUR'
  },

  pjLU : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([-5*tileUnit,-3*tileUnit])
                .angle(90),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([-5*tileUnit,-3*tileUnit])
                .rotate(versor.rotation(versor.multiply(versU,q)))
                .angle(90),
    mask : 'mDL'
  },

  pjLD : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([-5*tileUnit,3*tileUnit])
                .angle(-90),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([-5*tileUnit,3*tileUnit])
                .rotate(versor.rotation(versor.multiply(versD,q)))
                .angle(-90),
    mask : 'mUL'
  },

  pjUR : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([3*tileUnit,-5*tileUnit])
                .angle(90),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([3*tileUnit,-5*tileUnit])
                .rotate(versor.rotation(versor.multiply(versR,q)))
                .angle(90),
    mask : 'mLU'
  },

  pjUL : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([-3*tileUnit,-5*tileUnit])
                .angle(-90),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([-3*tileUnit,-5*tileUnit])
                .rotate(versor.rotation(versor.multiply(versL,q)))
                .angle(-90),
    mask : 'mRU'
  },

  pjDR : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([3*tileUnit,5*tileUnit])
                .angle(-90),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([3*tileUnit,5*tileUnit])
                .rotate(versor.rotation(versor.multiply(versR,q)))
                .angle(-90),
    mask : 'mLD'
  },

  pjDL : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([-3*tileUnit,5*tileUnit])
                .angle(90),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*1/3)
                .translate([-3*tileUnit,5*tileUnit])
                .rotate(versor.rotation(versor.multiply(versL,q)))
                .angle(90),
    mask : 'mRD'
  },

  pjCUR : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([3*tileUnit,-2*tileUnit])
                .angle(90),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([3*tileUnit,-2*tileUnit])
                .rotate(versor.rotation(q))
                .angle(90),
    mask : 'mCUR'
  },

  pjCUL : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([-3*tileUnit,-2*tileUnit])
                .angle(-90),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([-3*tileUnit,-2*tileUnit])
                .rotate(versor.rotation(q))
                .angle(-90),
    mask : 'mCUL'
  },

  pjCDR : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([3*tileUnit,2*tileUnit])
                .angle(-90),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([3*tileUnit,2*tileUnit])
                .rotate(versor.rotation(q))
                .angle(-90),
    mask : 'mCDR'
  },

  pjCDL : {
    projWire : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([-3*tileUnit,2*tileUnit])
                .angle(90),

    projLand : d3.geoGnomonic().clipAngle(80)
                .scale(Scale*2/3)
                .translate([-3*tileUnit,2*tileUnit])
                .rotate(versor.rotation(q))
                .angle(90),
    mask : 'mCDL'
  }
}}


// Drawing each tile
function drawTile(svg, pj){
  var path = d3.geoPath().projection(pj.projWire);
  var pathLand = d3.geoPath().projection(pj.projLand);

  var water = svg.append("path")
      .datum(topojson.feature(cube_tj,pj.mask))
      .attr("id","path_" + pj.mask)
      .attr("class","water")
      .attr("d",path);

  var grid = svg.append("path")
      .datum(grat())
      .attr("class","graticule")
      .attr("d",pathLand);

  var land = svg.append("path")
      .datum(Data)
      .attr("class","land")
      .attr("d",pathLand);

  svg.append("path")
      .datum(topojson.feature(cube_tj,pj.mask))
      .attr("id","path_" + pj.mask)
      .attr("class","maskstyle")
      .attr("d",path);

  svg.append("clipPath").attr("id","clip_" + pj.mask)
        .append("use").attr("xlink:href","#path_" + pj.mask);

  land.attr("clip-path","url(#clip_" + pj.mask);
  grid.attr("clip-path","url(#clip_" + pj.mask);
}


function drawPixFace(svg,q){
  var tiles = [ 'C','U','D','R','L',
                'RU','RD','LU','LD','UR','UL','DR','DL',
                'CUR','CUL','CDR','CDL'];

  tiles.forEach(d => {
                drawTile(svg, pjTiles(q)["pj"+d])
              });
}
