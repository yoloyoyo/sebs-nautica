namespace SpriteKind {
    export const plastic = SpriteKind.create()
    export const fish = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . 7 8 8 8 8 8 8 8 8 7 . . . 
        . . . 7 8 a a a a a a 8 7 . . . 
        . . . 7 8 a 1 1 1 1 a 8 7 . . . 
        . . . 7 8 a 1 1 1 1 a 8 7 . . . 
        . . . 7 8 a 1 1 1 1 a 8 7 . . . 
        . . . 7 8 a a a a a a 8 7 . . . 
        . . . 7 8 8 8 8 8 8 8 8 7 . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 10, 50)
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.setVelocity(75, 0)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(10, 0)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(-10, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fish, function (sprite, otherSprite) {
    statusbar.value += -1
    music.thump.playUntilDone()
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.plastic, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.fish, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.setVelocity(-75, 0)
})
let mySprite3: Sprite = null
let projectile: Sprite = null
let mySprite2: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ..............333...............
    .............3cc3...............
    .............3cc3...............
    ..............333...............
    ...............33...............
    .....777777777777777777777777...
    ...777555555555555555555555577..
    ..77555555555555555555555555577.
    .775555555555555555555555555557.
    .7755555555555555555555555555577
    .7757775577755777557775557775577
    .7757574475744757447574447575577
    .7757775577755777557775557775577
    .7755555555555555555555555555577
    .7755555555555555555555555555574
    .4775555555555555555555555555774
    .4477555555555555555555555557744
    ..44777777777777777777777777744.
    ....4444444444ccc4444444444444..
    .............6ccc6..............
    ............6666666.............
    ............6666666.............
    ................................
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite.startEffect(effects.bubbles)
mySprite.setVelocity(-10, 0)
statusbar = statusbars.create(128, 8, StatusBarKind.Health)
statusbar.setBarBorder(1, 2)
statusbar.setPosition(80, 14)
controller.moveSprite(mySprite, 0, 50)
for (let index = 0; index < 5; index++) {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `, SpriteKind.fish)
    mySprite2.vx = 50
    mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile0`)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c . . . . 
        . . . . . . c d d d d d c . . . 
        . . . . . . c c c c c d c . . . 
        . . . . . c 4 4 4 4 d c c . . . 
        . . . . c d 4 4 4 4 4 1 c . . . 
        . . . c 4 4 1 4 4 4 4 4 1 c . . 
        . . c 4 4 4 4 1 4 4 4 4 1 c c c 
        . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
        . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
        f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
        f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
        . f 4 4 4 4 1 4 4 4 4 c b c f f 
        . . f f f d 4 4 4 4 c d d c . . 
        . . . . . f f f f f c c c . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . c c 
        . . . c 4 d 4 4 4 4 4 1 c c 4 c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
        . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
        f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
        . f 4 4 4 4 1 c c 4 4 d f f . . 
        . . f f 4 d 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . c c c c . . . 
        . . . . . . . c c d d d d c . . 
        . . . . . c c c c c c d d c . . 
        . . . c c c 4 4 4 4 d c c c c c 
        . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
        . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
        f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
        f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
        f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
        . f 4 4 4 4 1 4 4 f 4 4 d f . . 
        . . f 4 4 1 4 c c 4 4 d f . . . 
        . . . f d 4 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `],
    200,
    true
    )
}
game.onUpdateInterval(1000, function () {
    if (controller.left.isPressed()) {
        statusbar.value += -2.5
    } else if (controller.right.isPressed()) {
        statusbar.value += -2.5
    } else {
        statusbar.value += -1
    }
})
forever(function () {
    mySprite.say(mySprite.vx)
})
game.onUpdateInterval(500, function () {
    mySprite3 = sprites.create(img`
        . . . . . . c c c c . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c b b c . . . . . . 
        . . . . . c b b b b c . . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . c b b b b b b c . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . c b b b b b b c . . . . 
        . . . c b b b b b b b b c . . . 
        . . . c b b b b b b b b c . . . 
        . . . c b b b b b b b b c . . . 
        . . . c b b b b b b b b c . . . 
        . . . c b b b b b b b b c . . . 
        . . . . c c c c c c c c . . . . 
        `, SpriteKind.plastic)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(randint(0, 27), 7))
    mySprite3.lifespan = 2500
})
