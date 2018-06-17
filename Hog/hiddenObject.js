HiddenObject = function()
{
    this.targetObject = '';
    this.targetSprite = '';
    this.movementSpeed = 1000;
    this.rotationSpeed = 10;
    this.totalObject;
    
    this.onMouseDown = function()
    {
        var t = wade.getSceneObject(this.targetObject);
        if (t && this.movementSpeed)
        {
            var ts = t.getSpriteByName(this.targetSprite);
            if (ts)
            {
                wade.playAudio('SmallExplosion8-Bit.ogg');
                this.owner.moveTo(ts.getPosition().x, ts.getPosition().y, this.movementSpeed);
                if (this.rotationSpeed)
                {
                    this.owner.setAngularVelocity(this.rotationSpeed);
                }
                this.owner.getSprite(0).setVisible(false);
                var s = this.owner.getSprite(1);
                s.setVisible(true);
                s.bringToFront();
                var time = wade.vec2.length(wade.vec2.sub(this.owner.getPosition(), ts.getPosition())) / this.movementSpeed;
                s.setDrawFunction(wade.drawFunctions.fadeOpacity_(1, 0, time, s.getDrawFunction()));
            }
            this.owner.objectToFind = false;
wade.app.score = (wade.app.score || 0) + 1;
_.scoreText.getSprite().setText(wade.app.score);
if (!wade.getSceneObjects('objectToFind', true).length)
{
 //   _.congratzMessage.setVisible(true);
// _.timer.stop();
}
this.totalObject =wade.app.score;
if(this.totalObject ===12){
   // _.congratzMessage.setVisible(true);
    wade.clearScene();
    wade.loadScene('gameOver.wsc');

    
}

        }
        return true;
    };
    
    this.onMoveComplete = function()
    {
        var t = wade.getSceneObject(this.targetObject);
        if (t)
        {
            var ts = t.getSpriteByName(this.targetSprite);
            if (ts)
            {
                ts.setImageFile && ts.setImageFile(this.owner.getSprite(1).getImageName());
            }
        }
        wade.removeSceneObject(this.owner);  
    };
};
