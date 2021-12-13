# The Pixelated Globe

This app projects the Earth globe onto the "Pixelated Globe" surface. This is used in the "[10 Minute Museum on the Mathematics of Climate Crisis](https://10mm.imaginary.org)", by [IMAGINARY](https://imaginary.org).

## Use
Try and choose an orientation of the globe by entering three Euler angles, and click on "Update". With "Get printable SVG", you will download six SVG files with the images.

## Orientation
The Globe can be rotated in three dimensions to any orientation prior to the projection (changing Aspect of the map), so we can have some regions of the Earth centered on the bigger faces of the Pixelated Globe.

Chosen orientation for the 10MM (and default values) are given by the Euler angles (λ,φ,γ)=(-25,-43,20)

## Versions
The default version uses SVG clipping paths. This poses problems when using the SVG files into a CNC milling machine, for production.

The version in [index_cuts.html](index_cuts.html) computes the intersection paths and only keeps the visible portion. Also, the grid of parallels and meridians is offsetted, so it is no longer a stroked path, but a filled region. However, those computations take a much longer render time (up to several minutes), hence this version is only for preparing the production files.

## Author
Daniel Ramos for IMAGINARY.
