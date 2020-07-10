namespace SpriteKind {
    export const fridge = SpriteKind.create()
    export const refri = SpriteKind.create()
}
let refri1: Sprite = null
function Fridge () {
    refri1 = sprites.create(img`
. d d d d d d d d d d d d d d d 
d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 3 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 3 3 3 3 3 1 1 1 1 1 
d 1 1 1 1 1 3 1 3 1 1 3 1 1 1 1 
d 1 1 1 1 3 1 1 1 3 1 3 1 1 1 1 
d 1 1 1 1 1 1 1 1 3 1 3 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 3 3 3 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 3 3 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 b b b b b b b b b b b b b b 
d b b b b b b b b b b b b b b b 
`, SpriteKind.refri)
    tiles.placeOnTile(refri1, tiles.getTileLocation(19, 0))
}
