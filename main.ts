namespace SpriteKind {
    export const dough = SpriteKind.create()
}
function placeDoughZone4() {
    dough1 = sprites.create(img`
        . . f f f f f f f f f f f f f f
        . b f c c c c c c c c c c c c c
        f f f c d d d d d d d d d d d d
        f c c c d c c c c c c c c c c c
        f c c d d c c c c c c c c c c c
        f c c d c c c c c c f f f f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c f e e e e f c
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c c f e e e e f c
    `, SpriteKind.dough)
    tiles.placeOnTile(dough1, tiles.getTileLocation(19, 5))
    dough2 = sprites.create(img`
        f f f f f f f f f f f f f f . .
        c c c c c c c c c c c c c f b .
        d d d d d d d d d d d d c f f f
        c c c c c c c c c c c d c c c f
        c c c c c 1 c c c c c d d c c f
        c c 1 c c c c c c c c c d c c f
        c c c c c c c 1 c c c c d c c f
        c 1 1 d d c c c c c c c d c c f
        1 1 1 1 1 d c c c c c c d c c f
        1 1 1 1 1 d d c c 1 c c d c c f
        1 1 1 1 1 1 1 1 c c c c d c c f
        1 1 1 1 1 1 1 1 c c c c d c c f
        1 1 1 1 1 1 1 1 c 1 c c d c c f
        d d d 1 1 1 1 c c c c c d c c f
        1 d d 1 1 1 c c c c c c d c c f
        c 1 d 1 1 c c c c c c c d c c f
    `, SpriteKind.dough)
    tiles.placeOnTile(dough2, tiles.getTileLocation(20, 5))
    dough3 = sprites.create(img`
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d d c c c c c f f f f c c
        f c c c d d d d d d d d d d d d
        f b c c c c c c c c c c c c c c
        f b b c c c c c c c c c c c c c
        f b b b c c c c c c c c c c c c
        f b b b b b b b b b b b b b b b
        f c b b b b b b b b b b b b b b
        f c b b c c b b b b c c b b b b
        . f f b f f b c c b f f b c c c
        . . f f f f f f f f f f f f f f
        . . f b b b b b f . . . . . . .
        . . f c c c c c f . . . . . . .
        . . . f f f f f . . . . . . . .
    `, SpriteKind.dough)
    tiles.placeOnTile(dough3, tiles.getTileLocation(19, 6))
    dough4 = sprites.create(img`
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c d d d c c f
        d d d d d d d d d d d c c c c f
        c c c c c c c c c c c c c c c f
        c c c c c c c c c c c c c c b f
        c c c c c c c c c c c c c b b f
        b b b b b b b b b b b b b b b f
        b b b b b b b b b b b b b b c f
        b b b b c c b b b b c c b b c f
        c c c b f f b c c b f f b f f .
        f f f f f f f f f f f f f f . .
        . . . . . . . . f b b b b f . .
        . . . . . . . . f c c c c f . .
        . . . . . . . . . f f f f . . .
    `, SpriteKind.dough)
    tiles.placeOnTile(dough4, tiles.getTileLocation(20, 6))
}
function placeDoughZone5() {
    dough1 = sprites.create(img`
        . . f f f f f f f f f f f f f f
        . b f c c c c c c c c c c c c c
        f f f c d d d d d d d d d d d d
        f c c c d c c c c c c c c c c c
        f c c d d c c c c c c c c c c c
        f c c d c c c c c c f f f f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c f e e e e f c
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c c f e e e e f c
    `, SpriteKind.dough)
    tiles.placeOnTile(dough1, tiles.getTileLocation(19, 8))
    dough2 = sprites.create(img`
        f f f f f f f f f f f f f f . .
        c c c c c c c c c c c c c f b .
        d d d d d d d d d d d d c f f f
        c c c c c c c c c c c d c c c f
        c c c c c 1 c c c c c d d c c f
        c c 1 c c c c c c c c c d c c f
        c c c c c c c 1 c c c c d c c f
        c 1 1 d d c c c c c c c d c c f
        1 1 1 1 1 d c c c c c c d c c f
        1 1 1 1 1 d d c c 1 c c d c c f
        1 1 1 1 1 1 1 1 c c c c d c c f
        1 1 1 1 1 1 1 1 c c c c d c c f
        1 1 1 1 1 1 1 1 c 1 c c d c c f
        d d d 1 1 1 1 c c c c c d c c f
        1 d d 1 1 1 c c c c c c d c c f
        c 1 d 1 1 c c c c c c c d c c f
    `, SpriteKind.dough)
    tiles.placeOnTile(dough2, tiles.getTileLocation(20, 8))
    dough3 = sprites.create(img`
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d d c c c c c f f f f c c
        f c c c d d d d d d d d d d d d
        f b c c c c c c c c c c c c c c
        f b b c c c c c c c c c c c c c
        f b b b c c c c c c c c c c c c
        f b b b b b b b b b b b b b b b
        f c b b b b b b b b b b b b b b
        f c b b c c b b b b c c b b b b
        . f f b f f b c c b f f b c c c
        . . f f f f f f f f f f f f f f
        . . f b b b b b f . . . . . . .
        . . f c c c c c f . . . . . . .
        . . . f f f f f . . . . . . . .
    `, SpriteKind.dough)
    tiles.placeOnTile(dough3, tiles.getTileLocation(19, 9))
    dough4 = sprites.create(img`
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c d d d c c f
        d d d d d d d d d d d c c c c f
        c c c c c c c c c c c c c c c f
        c c c c c c c c c c c c c c b f
        c c c c c c c c c c c c c b b f
        b b b b b b b b b b b b b b b f
        b b b b b b b b b b b b b b c f
        b b b b c c b b b b c c b b c f
        c c c b f f b c c b f f b f f .
        f f f f f f f f f f f f f f . .
        . . . . . . . . f b b b b f . .
        . . . . . . . . f c c c c f . .
        . . . . . . . . . f f f f . . .
    `, SpriteKind.dough)
    tiles.placeOnTile(dough4, tiles.getTileLocation(20, 9))
}
function placeDoughZone3 () {
    dough1 = sprites.create(img`
        . . f f f f f f f f f f f f f f
        . b f c c c c c c c c c c c c c
        f f f c d d d d d d d d d d d d
        f c c c d c c c c c c c c c c c
        f c c d d c c c c c c c c c c c
        f c c d c c c c c c f f f f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c f e e e e f c
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c c f e e e e f c
    `, SpriteKind.dough)
    tiles.placeOnTile(dough1, tiles.getTileLocation(19, 0))
    dough2 = sprites.create(img`
        f f f f f f f f f f f f f f . .
        c c c c c c c c c c c c c f b .
        d d d d d d d d d d d d c f f f
        c c c c c c c c c c c d c c c f
        c c c c c 1 c c c c c d d c c f
        c c 1 c c c c c c c c c d c c f
        c c c c c c c 1 c c c c d c c f
        c 1 1 d d c c c c c c c d c c f
        1 1 1 1 1 d c c c c c c d c c f
        1 1 1 1 1 d d c c 1 c c d c c f
        1 1 1 1 1 1 1 1 c c c c d c c f
        1 1 1 1 1 1 1 1 c c c c d c c f
        1 1 1 1 1 1 1 1 c 1 c c d c c f
        d d d 1 1 1 1 c c c c c d c c f
        1 d d 1 1 1 c c c c c c d c c f
        c 1 d 1 1 c c c c c c c d c c f
    `, SpriteKind.dough)
    tiles.placeOnTile(dough2, tiles.getTileLocation(20, 0))
    dough3 = sprites.create(img`
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d d c c c c c f f f f c c
        f c c c d d d d d d d d d d d d
        f b c c c c c c c c c c c c c c
        f b b c c c c c c c c c c c c c
        f b b b c c c c c c c c c c c c
        f b b b b b b b b b b b b b b b
        f c b b b b b b b b b b b b b b
        f c b b c c b b b b c c b b b b
        . f f b f f b c c b f f b c c c
        . . f f f f f f f f f f f f f f
        . . f b b b b b f . . . . . . .
        . . f c c c c c f . . . . . . .
        . . . f f f f f . . . . . . . .
    `, SpriteKind.dough)
    tiles.placeOnTile(dough3, tiles.getTileLocation(19, 1))
    dough4 = sprites.create(img`
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c d d d c c f
        d d d d d d d d d d d c c c c f
        c c c c c c c c c c c c c c c f
        c c c c c c c c c c c c c c b f
        c c c c c c c c c c c c c b b f
        b b b b b b b b b b b b b b b f
        b b b b b b b b b b b b b b c f
        b b b b c c b b b b c c b b c f
        c c c b f f b c c b f f b f f .
        f f f f f f f f f f f f f f . .
        . . . . . . . . f b b b b f . .
        . . . . . . . . f c c c c f . .
        . . . . . . . . . f f f f . . .
    `, SpriteKind.dough)
    tiles.placeOnTile(dough4, tiles.getTileLocation(20, 1))
}
function placeDoughZone2 () {
    dough1 = sprites.create(img`
        . . f f f f f f f f f f f f f f
        . b f c c c c c c c c c c c c c
        f f f c d d d d d d d d d d d d
        f c c c d c c c c c c c c c c c
        f c c d d c c c c c c c c c c c
        f c c d c c c c c c f f f f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c f e e e e f c
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c c f e e e e f c
    `, SpriteKind.dough)
    tiles.placeOnTile(dough1, tiles.getTileLocation(16, 0))
    dough2 = sprites.create(img`
        f f f f f f f f f f f f f f . .
        c c c c c c c c c c c c c f b .
        d d d d d d d d d d d d c f f f
        c c c c c c c c c c c d c c c f
        c c c c c 1 c c c c c d d c c f
        c c 1 c c c c c c c c c d c c f
        c c c c c c c 1 c c c c d c c f
        c 1 1 d d c c c c c c c d c c f
        1 1 1 1 1 d c c c c c c d c c f
        1 1 1 1 1 d d c c 1 c c d c c f
        1 1 1 1 1 1 1 1 c c c c d c c f
        1 1 1 1 1 1 1 1 c c c c d c c f
        1 1 1 1 1 1 1 1 c 1 c c d c c f
        d d d 1 1 1 1 c c c c c d c c f
        1 d d 1 1 1 c c c c c c d c c f
        c 1 d 1 1 c c c c c c c d c c f
    `, SpriteKind.dough)
    tiles.placeOnTile(dough2, tiles.getTileLocation(17, 0))
    dough3 = sprites.create(img`
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d d c c c c c f f f f c c
        f c c c d d d d d d d d d d d d
        f b c c c c c c c c c c c c c c
        f b b c c c c c c c c c c c c c
        f b b b c c c c c c c c c c c c
        f b b b b b b b b b b b b b b b
        f c b b b b b b b b b b b b b b
        f c b b c c b b b b c c b b b b
        . f f b f f b c c b f f b c c c
        . . f f f f f f f f f f f f f f
        . . f b b b b b f . . . . . . .
        . . f c c c c c f . . . . . . .
        . . . f f f f f . . . . . . . .
    `, SpriteKind.dough)
    tiles.placeOnTile(dough3, tiles.getTileLocation(16, 1))
    dough4 = sprites.create(img`
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c d d d c c f
        d d d d d d d d d d d c c c c f
        c c c c c c c c c c c c c c c f
        c c c c c c c c c c c c c c b f
        c c c c c c c c c c c c c b b f
        b b b b b b b b b b b b b b b f
        b b b b b b b b b b b b b b c f
        b b b b c c b b b b c c b b c f
        c c c b f f b c c b f f b f f .
        f f f f f f f f f f f f f f . .
        . . . . . . . . f b b b b f . .
        . . . . . . . . f c c c c f . .
        . . . . . . . . . f f f f . . .
    `, SpriteKind.dough)
    tiles.placeOnTile(dough4, tiles.getTileLocation(17, 1))
}
function placeDoughZone1 () {
    dough1 = sprites.create(img`
        . . f f f f f f f f f f f f f f
        . b f c c c c c c c c c c c c c
        f f f c d d d d d d d d d d d d
        f c c c d c c c c c c c c c c c
        f c c d d c c c c c c c c c c c
        f c c d c c c c c c f f f f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c f e e e e f c
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c f e e e e e e f
        f c c d c c c c c f e e e e f c
    `, SpriteKind.dough)
    tiles.placeOnTile(dough1, tiles.getTileLocation(13, 0))
    dough2 = sprites.create(img`
        f f f f f f f f f f f f f f . .
        c c c c c c c c c c c c c f b .
        d d d d d d d d d d d d c f f f
        c c c c c c c c c c c d c c c f
        c c c c c 1 c c c c c d d c c f
        c c 1 c c c c c c c c c d c c f
        c c c c c c c 1 c c c c d c c f
        c 1 1 d d c c c c c c c d c c f
        1 1 1 1 1 d c c c c c c d c c f
        1 1 1 1 1 d d c c 1 c c d c c f
        1 1 1 1 1 1 1 1 c c c c d c c f
        1 1 1 1 1 1 1 1 c c c c d c c f
        1 1 1 1 1 1 1 1 c 1 c c d c c f
        d d d 1 1 1 1 c c c c c d c c f
        1 d d 1 1 1 c c c c c c d c c f
        c 1 d 1 1 c c c c c c c d c c f
    `, SpriteKind.dough)
    tiles.placeOnTile(dough2, tiles.getTileLocation(14, 0))
    dough3 = sprites.create(img`
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d c c c c c c f e e f c c
        f c c d d c c c c c f f f f c c
        f c c c d d d d d d d d d d d d
        f b c c c c c c c c c c c c c c
        f b b c c c c c c c c c c c c c
        f b b b c c c c c c c c c c c c
        f b b b b b b b b b b b b b b b
        f c b b b b b b b b b b b b b b
        f c b b c c b b b b c c b b b b
        . f f b f f b c c b f f b c c c
        . . f f f f f f f f f f f f f f
        . . f b b b b b f . . . . . . .
        . . f c c c c c f . . . . . . .
        . . . f f f f f . . . . . . . .
    `, SpriteKind.dough)
    tiles.placeOnTile(dough3, tiles.getTileLocation(13, 1))
    dough4 = sprites.create(img`
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c c c d c c f
        c c c c c c c c c c d d d c c f
        d d d d d d d d d d d c c c c f
        c c c c c c c c c c c c c c c f
        c c c c c c c c c c c c c c b f
        c c c c c c c c c c c c c b b f
        b b b b b b b b b b b b b b b f
        b b b b b b b b b b b b b b c f
        b b b b c c b b b b c c b b c f
        c c c b f f b c c b f f b f f .
        f f f f f f f f f f f f f f . .
        . . . . . . . . f b b b b f . .
        . . . . . . . . f c c c c f . .
        . . . . . . . . . f f f f . . .
    `, SpriteKind.dough)
    tiles.placeOnTile(dough4, tiles.getTileLocation(14, 1))
}
let dough4: Sprite = null
let dough3: Sprite = null
let dough2: Sprite = null
let dough1: Sprite = null
namespace dough {
    //% block
    export function zone1_dough() {
        placeDoughZone1()
    }
    //% block
    export function zone2_dough() {
        placeDoughZone2()
    }
    //% block
    export function zone3_dough() {
        placeDoughZone3()
    }
    //% block
    export function zone4_dough() {
        placeDoughZone4()
    }
    //% block
    export function zone5_dough() {
        placeDoughZone5()
    }
}
