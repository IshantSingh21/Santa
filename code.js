var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4415c2e2-40fe-4372-b506-3756291b90f9","eb8cbaa9-9d1c-4a42-9c06-eaef3c878803","413abc8b-9b0d-4b16-b2f2-01917940f5e7","3f7d59ba-ad67-4ff1-a14e-096a64bc081d"],"propsByKey":{"4415c2e2-40fe-4372-b506-3756291b90f9":{"name":"santa_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"},"eb8cbaa9-9d1c-4a42-9c06-eaef3c878803":{"name":"","sourceUrl":"assets/v3/animations/bs9ajacUH8dbBnKa_Rs3CaUKQpnqg1_RAIcUppoD328/eb8cbaa9-9d1c-4a42-9c06-eaef3c878803.png","frameSize":{"x":188,"y":268},"frameCount":1,"looping":true,"frameDelay":4,"version":"ddGo1fQqABTbV6DMFbwn_VZ5Lz9qi1U_","loadedFromSource":true,"saved":true,"sourceSize":{"x":188,"y":268},"rootRelativePath":"assets/v3/animations/bs9ajacUH8dbBnKa_Rs3CaUKQpnqg1_RAIcUppoD328/eb8cbaa9-9d1c-4a42-9c06-eaef3c878803.png"},"413abc8b-9b0d-4b16-b2f2-01917940f5e7":{"name":"santa 2","sourceUrl":"assets/v3/animations/bs9ajacUH8dbBnKa_Rs3CaUKQpnqg1_RAIcUppoD328/413abc8b-9b0d-4b16-b2f2-01917940f5e7.png","frameSize":{"x":188,"y":268},"frameCount":1,"looping":true,"frameDelay":4,"version":"WLfV9ELv6_B2RLcGOg8zaYE.NN2IPSgv","loadedFromSource":true,"saved":true,"sourceSize":{"x":188,"y":268},"rootRelativePath":"assets/v3/animations/bs9ajacUH8dbBnKa_Rs3CaUKQpnqg1_RAIcUppoD328/413abc8b-9b0d-4b16-b2f2-01917940f5e7.png"},"3f7d59ba-ad67-4ff1-a14e-096a64bc081d":{"name":"c0a45b3ac8a1053f96d5738d61f661af--minions-despicable-me-minion-s-removebg-preview.png_1","sourceUrl":"assets/v3/animations/bs9ajacUH8dbBnKa_Rs3CaUKQpnqg1_RAIcUppoD328/3f7d59ba-ad67-4ff1-a14e-096a64bc081d.png","frameSize":{"x":236,"y":322},"frameCount":1,"looping":true,"frameDelay":4,"version":"5c_ua550L7gUO.vxkOtrUWHSA5cjazPd","loadedFromSource":true,"saved":true,"sourceSize":{"x":236,"y":322},"rootRelativePath":"assets/v3/animations/bs9ajacUH8dbBnKa_Rs3CaUKQpnqg1_RAIcUppoD328/3f7d59ba-ad67-4ff1-a14e-096a64bc081d.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boundary1,boundary2;

var bg=createSprite(200,200,400,400);
bg.setAnimation("santa_1");

var destination = createSprite(395,198,20,70);
destination.shapeColor="yellow";

var santa = createSprite(36,208,10,10);
santa.setAnimation("santa 2");
santa.scale=0.15;
var boundary1 = createSprite(200,66,380,2);
boundary1.shapeColor=("red");
var boundary2 = createSprite(200,329,380,2);
boundary2.shapeColor=("red");

var mini = createSprite(126,308,20,20);
mini.setAnimation("c0a45b3ac8a1053f96d5738d61f661af--minions-despicable-me-minion-s-removebg-preview.png_1");
mini.scale=0.10;
mini.velocityX=0;
mini.velocityY=-7;

var mini2 = createSprite(201,75,20,20);
mini2.setAnimation("c0a45b3ac8a1053f96d5738d61f661af--minions-despicable-me-minion-s-removebg-preview.png_1");
mini2.scale=0.10;
mini2.velocityX=0;
mini2.velocityY=-7;

var mini3 = createSprite(258,308,20,20);
mini3.setAnimation("c0a45b3ac8a1053f96d5738d61f661af--minions-despicable-me-minion-s-removebg-preview.png_1");
mini3.scale=0.10;
mini3.velocityX=0;
mini3.velocityY=7;

var mini4 = createSprite(318,67,20,20);
mini4.setAnimation("c0a45b3ac8a1053f96d5738d61f661af--minions-despicable-me-minion-s-removebg-preview.png_1");
mini4.scale=0.10;
mini4.velocityX=0;
mini4.velocityY=7;
































function draw() {
  
  mini.bounceOff(boundary1);
mini.bounceOff(boundary2);

 mini2.bounceOff(boundary1);
mini2.bounceOff(boundary2);

 mini3.bounceOff(boundary1);
mini3.bounceOff(boundary2);

mini4.bounceOff(boundary1);
mini4.bounceOff(boundary2);

santa.bounceOff(boundary1);
santa.bounceOff(boundary2);

if (santa.isTouching(mini)|| santa.isTouching(mini2)||santa.isTouching(mini3)
|| santa.isTouching(mini4)) {
  santa.x=36;
  santa.y=208;
  
}

if (keyDown(RIGHT_ARROW)) {
  santa.x = santa.x +3;
  
}
if (keyDown(UP_ARROW)) {
  santa.y=santa.y-3;
  
  
}
if (keyDown(DOWN_ARROW)) {
  santa.y=santa.y+3;
  
}




if (keyDown(LEFT_ARROW)) {
  santa.x=santa.x-3;
  
}



  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
