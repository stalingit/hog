App = function()
{
    // this is where the WADE app is initialized
	this.init = function()
	{
        // load a scene
	wade.loadScene('scene1.wsc', true, function()
        {
            // the scene has been loaded, do something here

        });	
		
	};
	this.load =function(){
	wade.loadAudio('SmallExplosion8-Bit.ogg');
	};
};


