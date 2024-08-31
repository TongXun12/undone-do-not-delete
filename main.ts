controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    burn = true
    mySprite.setImage(assets.image`burn`)
    mySprite.startEffect(effects.fire, 500)
    pause(500)
    mySprite.setImage(assets.image`alien`)
    burn = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (burn == true) {
        sprites.destroy(otherSprite, effects.fountain, 500)
    } else {
        info.changeLifeBy(-1)
    }
})
let burn = false
let enemy_1: Sprite = null
let mySprite: Sprite = null
info.setLife(3)
mySprite = sprites.create(assets.image`alien`, SpriteKind.Player)
mySprite.setPosition(150, 220)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(7)
for (let index = 0; index < 5; index++) {
    enemy_1 = sprites.create(assets.image`humans`, SpriteKind.Enemy)
    enemy_1.setPosition(randint(20, 220), randint(20, 220))
    enemy_1.follow(mySprite, 20)
}
