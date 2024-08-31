// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`100010000201020202020202020202020b0a02020201020202020202020202020b0a020202020102020201020202020f0b0a0f020202020201020202020201020b0a0202021e19191d020202010202020b0a0202011a1b1b1c0202020202020f0b0a0f020202020202020202020303030b0a02020201010102020101020303030b0a02020e020e0202020202020d020f0b0a0f02020e0d0d010d03030e0202020b0a02020d0e0e0c0d0d0e0d0c0203030b0a02020e0d101111120e0d0202020f0b0a0f020210171817130d0d01020709080a01020e141817181712020c020604040501020d1617181817150e0d02020d02010202020e0e0e0e0e010e0202020201020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . . 2 . 
. . . . . . . . . . . . . . . . 
. 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . 2 . . 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . . 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 . . . . . 2 . . 2 . 
. 2 2 2 2 2 . . . . . . . . . . 
. 2 2 2 2 2 2 . . . . . . . . . 
. 2 2 2 2 2 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles0,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles9,sprites.builtin.forestTiles15,sprites.builtin.forestTiles13,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.builtin.forestTiles22,sprites.builtin.forestTiles17,sprites.builtin.forestTiles18,sprites.builtin.forestTiles19,sprites.builtin.forestTiles3,sprites.builtin.forestTiles1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
