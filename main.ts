scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 f f f f f f 7 7 f . . 
        . . f f f f 7 7 7 7 f f f f . . 
        . f f 7 f b f 4 4 f b f 7 f f . 
        . f 7 7 4 1 f d d f 1 4 7 7 f . 
        . . f f f f d d d d d 7 7 f . . 
        . f d d d d f 4 4 4 7 7 f . . . 
        . f b b b b f 7 7 7 7 f 4 7 . . 
        . f b b b b f 7 7 7 7 f d 4 . . 
        . . f c c f 6 5 5 6 6 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    game.splash("level 2")
    tiles.setCurrentTilemap(tilemap`level4`)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 200, 200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    music.play(music.createSong(hex`008c000408020400001c00010a006400f4016400000400000000000000000000000000050000042b0000000400012908000c0001221000140001271400180002242a1c002000012024002800012530003400012c05001c000f0a006400f4010a000004000000000000000000000000000000000247000400080002242c08000c00011d10001400011e1400180001251c002000012420002400012c240028000222292c003000031b252a30003400012034003800012538003c0002202a08001c000e050046006603320000040a002d0000006400140001320002010002120010001400012c18001c00011938003c00011909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80012000c000d00010920002100010028002900010b`), music.PlaybackMode.UntilDone)
    game.gameOver(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 f f f f f f 7 7 f . . 
        . . f f f f 7 7 7 7 f f f f . . 
        . f f 7 f b f 4 4 f b f 7 f f . 
        . f 7 7 4 1 f d d f 1 4 7 7 f . 
        . . f f f f d d d d d 7 7 f . . 
        . f d d d d f 4 4 4 7 7 f . . . 
        . f b b b b f 7 7 7 7 f 4 7 . . 
        . f b b b b f 7 7 7 7 f d 4 . . 
        . . f c c f 6 5 5 6 6 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    game.splash("level 8")
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 f f f f f f 7 7 f . . 
        . . f f f f 7 7 7 7 f f f f . . 
        . f f 7 f b f 4 4 f b f 7 f f . 
        . f 7 7 4 1 f d d f 1 4 7 7 f . 
        . . f f f f d d d d d 7 7 f . . 
        . f d d d d f 4 4 4 7 7 f . . . 
        . f b b b b f 7 7 7 7 f 4 7 . . 
        . f b b b b f 7 7 7 7 f d 4 . . 
        . . f c c f 6 5 5 6 6 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level17`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . f f f f f f . . . . . 
        . . . . f 7 f 7 7 7 7 f f . . . 
        . . . f 7 7 7 f 7 7 7 7 f f . . 
        . . . f 7 7 7 7 f f 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 f f f f . . 
        . . f 7 7 f f f f 7 7 7 7 f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 7 7 7 f . . . . 
        . . f b e d d e 7 7 7 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.splash("level 5")
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 f f f f f f 7 7 f . . 
        . . f f f f 7 7 7 7 f f f f . . 
        . f f 7 f b f 4 4 f b f 7 f f . 
        . f 7 7 4 1 f d d f 1 4 7 7 f . 
        . . f f f f d d d d d 7 7 f . . 
        . f d d d d f 4 4 4 7 7 f . . . 
        . f b b b b f 7 7 7 7 f 4 7 . . 
        . f b b b b f 7 7 7 7 f d 4 . . 
        . . f c c f 6 5 5 6 6 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 200, 200)
    scene.cameraFollowSprite(mySprite)
    tiles.setCurrentTilemap(tilemap`level10`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.splash("level 6")
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 f f f f f f 7 7 f . . 
        . . f f f f 7 7 7 7 f f f f . . 
        . f f 7 f b f 4 4 f b f 7 f f . 
        . f 7 7 4 1 f d d f 1 4 7 7 f . 
        . . f f f f d d d d d 7 7 f . . 
        . f d d d d f 4 4 4 7 7 f . . . 
        . f b b b b f 7 7 7 7 f 4 7 . . 
        . f b b b b f 7 7 7 7 f d 4 . . 
        . . f c c f 6 5 5 6 6 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level12`)
    music.play(music.createSoundEffect(WaveShape.Noise, 970, 0, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    controller.moveSprite(mySprite, 200, 200)
    scene.cameraFollowSprite(mySprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f 7 7 7 7 f 7 f . . . . 
        . . f f 7 7 7 7 f 7 7 7 f . . . 
        . . f 7 7 7 f f 7 7 7 7 f . . . 
        . . f f f f 7 7 7 7 7 7 7 f . . 
        . . f 7 7 7 7 f f f f 7 7 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . . f e e 4 e e e f b b f . 
        . . . . f 7 7 7 4 d d e b b f . 
        . . . f f 4 4 4 e d d e b f . . 
        . . . f f f f f f e e f f . . . 
        . . . . f f . . . f f f . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.splash("level 4")
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 f f f f f f 7 7 f . . 
        . . f f f f 7 7 7 7 f f f f . . 
        . f f 7 f b f 4 4 f b f 7 f f . 
        . f 7 7 4 1 f d d f 1 4 7 7 f . 
        . . f f f f d d d d d 7 7 f . . 
        . f d d d d f 4 4 4 7 7 f . . . 
        . f b b b b f 7 7 7 7 f 4 7 . . 
        . f b b b b f 7 7 7 7 f d 4 . . 
        . . f c c f 6 5 5 6 6 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 200, 200)
    scene.cameraFollowSprite(mySprite)
    tiles.setCurrentTilemap(tilemap`level8`)
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    game.splash("level 7")
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 f f f f f f 7 7 f . . 
        . . f f f f 7 7 7 7 f f f f . . 
        . f f 7 f b f 4 4 f b f 7 f f . 
        . f 7 7 4 1 f d d f 1 4 7 7 f . 
        . . f f f f d d d d d 7 7 f . . 
        . f d d d d f 4 4 4 7 7 f . . . 
        . f b b b b f 7 7 7 7 f 4 7 . . 
        . f b b b b f 7 7 7 7 f d 4 . . 
        . . f c c f 6 5 5 6 6 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 200, 200)
    scene.cameraFollowSprite(mySprite)
    tiles.setCurrentTilemap(tilemap`level14`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.splash("level 3")
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 f f f f f f 7 7 f . . 
        . . f f f f 7 7 7 7 f f f f . . 
        . f f 7 f b f 4 4 f b f 7 f f . 
        . f 7 7 4 1 f d d f 1 4 7 7 f . 
        . . f f f f d d d d d 7 7 f . . 
        . f d d d d f 4 4 4 7 7 f . . . 
        . f b b b b f 7 7 7 7 f 4 7 . . 
        . f b b b b f 7 7 7 7 f d 4 . . 
        . . f c c f 6 5 5 6 6 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level6`)
    controller.moveSprite(mySprite, 200, 200)
    scene.cameraFollowSprite(mySprite)
})
let mySprite: Sprite = null
game.splash("was goodie gang")
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 7 7 f f f . . . . 
    . . . f f f 7 7 7 7 f f f . . . 
    . . f f f 7 7 7 7 7 7 f f f . . 
    . . f f 7 7 7 7 7 7 7 7 7 f . . 
    . . f 7 7 f f f f f f 7 7 f . . 
    . . f f f f 7 7 7 7 f f f f . . 
    . f f 7 f b f 4 4 f b f 7 f f . 
    . f 7 7 4 1 f d d f 1 4 7 7 f . 
    . . f f f f d d d d d 7 7 f . . 
    . f d d d d f 4 4 4 7 7 f . . . 
    . f b b b b f 7 7 7 7 f 4 7 . . 
    . f b b b b f 7 7 7 7 f d 4 . . 
    . . f c c f 6 5 5 6 6 f 4 4 . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 200, 200)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(mySprite)
