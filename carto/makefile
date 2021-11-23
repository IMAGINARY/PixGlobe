# Download and Transform the 1:110m Country Shapefiles from Natural Earth
# http://www.naturalearthdata.com/downloads/110m-physical-vectors/

URL = http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/110m/physical/ne_110m_land.zip

# Goals
all: land.geojson land.topojson #clean

# Download the zip file from the Natural Earth server
ne_110m_land.zip:
	curl -LO $(URL)

# Unzip the shapefiles
ne_110m_land.shp: ne_110m_land.zip
	unzip ne_110m_land.zip
	touch ne_110m_land.shp

# Convert the shapefiles to GeoJSON
land.geojson: ne_110m_land.shp
#	ogr2ogr -f GeoJSON land.geojson ne_110m_land.shp
	ogr2ogr -simplify 0.01 -f GeoJSON land.geojson ne_110m_land.shp
#	ogr2ogr -simplify 0.999 -f GeoJSON land.geojson ne_110m_land.shp #more coarse
#	ogr2ogr -simplify 0.5 -f GeoJSON land.geojson ne_110m_land.shp

# Convert the GeoJSON file to TopoJSON
land.topojson: land.geojson
	topojson -p -o land.topojson land.geojson

# Remove source and temporary files
# clean:
# 	rm ne_110m_land*
