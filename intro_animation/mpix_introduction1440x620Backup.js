(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.UX_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAAiAIAhBkIBpAAIhVA8IAgBkIhVg9IhUA9IAghkIhVg8IBpAAg");
	this.shape.setTransform(154.9,141.1,1,1,0,0,0,0,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("AAAiAIAhBkIBpAAIhVA8IAgBkIhVg9IhUA9IAghkIhVg8IBpAAg");
	this.shape_1.setTransform(123.1,141.1,1,1,0,0,0,0,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AAAiAIAhBkIBpAAIhVA8IAgBkIhVg9IhUA9IAghkIhVg8IBpAAg");
	this.shape_2.setTransform(91.4,141.1,1,1,0,0,0,0,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("AAAiAIAhBkIBpAAIhVA8IAgBkIhVg9IhUA9IAghkIhVg8IBpAAg");
	this.shape_3.setTransform(59.7,141.1,1,1,0,0,0,0,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").p("AAAiAIAgBkIBpAAIhVA8IAhBkIhVg9IhUA9IAghkIhUg8IBpAAg");
	this.shape_4.setTransform(28,141.1,1,1,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},35).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[]},13).wait(18));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABjESIg7hwIgrhaIgDAAIgpBaIg5BwIiEAAICgkYIiXkLICLAAIA1BnIApBYIADAAIAlhYIAxhnICEAAIiWEQICgETg");
	this.shape_5.setTransform(115.2,78.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhVEIQglgOgZgcQgZgdgNgpQgMgpAAg1IAAlQIB7AAIAAFdQAAAYAFATQAFATAJAMQAKANAOAHQAOAHATAAQATAAAPgHQAOgHAKgNQAKgMAEgTQAFgTAAgYIAAldIB3AAIAAFQQAAA1gMApQgMApgYAdQgZAcglAOQglAPgxAAQgxAAgmgPg");
	this.shape_6.setTransform(64.9,79.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_7.setTransform(164.3,17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_8.setTransform(164.3,13.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_9.setTransform(164.3,9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").p("Ai4ACID1hRIB8BSIj0BNg");
	this.shape_10.setTransform(22.4,14.8,1,1,0,0,0,0.5,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ai4AFIB6hhID3BiIinBXg");
	this.shape_11.setTransform(22,14.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgeAdQgdAegpAAI5LAAQgpAAgdgeQgegdAAgpIAA5LQAAgpAegdQAdgeApAAIZLAAQApAAAdAeQAeAdAAApg");
	this.shape_12.setTransform(90.6,90.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_13.setTransform(90.6,28.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAABFIhUA+IAghkIhUg9IBpAAIAfhkIAgBkIBpAAIhVA9IAhBkg");
	this.shape_14.setTransform(28.1,140.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAABFIhUA+IAghkIhUg9IBoAAIAghkIAhBkIBoAAIhUA9IAgBkg");
	this.shape_15.setTransform(59.9,140.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAABFIhUA+IAghkIhUg9IBpAAIAfhkIAhBkIBoAAIhVA9IAhBkg");
	this.shape_16.setTransform(91.6,140.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAABFIhUA+IAhhkIhWg9IBqAAIAfhkIAgBkIBqAAIhWA9IAhBkg");
	this.shape_17.setTransform(123.3,140.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAABFIhUA+IAghkIhUg9IBpAAIAfhkIAhBkIBoAAIhVA9IAhBkg");
	this.shape_18.setTransform(91.6,140.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_14},{t:this.shape_6},{t:this.shape_5}]},8).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_14},{t:this.shape_15},{t:this.shape_6},{t:this.shape_5}]},9).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_14},{t:this.shape_15},{t:this.shape_16,p:{x:91.6}},{t:this.shape_6},{t:this.shape_5}]},9).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_14},{t:this.shape_15},{t:this.shape_16,p:{x:91.6}},{t:this.shape_17},{t:this.shape_6},{t:this.shape_5}]},9).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_14},{t:this.shape_15},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:155}},{t:this.shape_6},{t:this.shape_5}]},9).to({state:[]},13).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,183.1,183.2);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF6D00").s().p("AgMA2IgNgCQgOgEgLgGIANgUQAKAFAKADQALACAKgBQAJAAAEgDQAEgCAAgEQgBgFgFgCIgUgEQgLgCgHgCQgIgDgFgEQgFgDgCgEQgDgFAAgGQgBgHADgGQADgHAGgEQAGgFAJgDQAJgDALgBQAIAAAQAEQAKACAKAGIgMATQgJgEgIgCQgKgCgHABQgHAAgDACQgEADAAADQAAAEAGADIASADQAMACAIADQAIADAFADQAFADACAFQACAFAAAGQABAHgDAGQgDAHgGAFQgGAFgKADQgKADgMABIgCAAIgLgBg");
	this.shape.setTransform(47,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF6D00").s().p("AgMA0QgLgDgIgHQgJgGgEgKIgFgKIgBgNQgBgHAEgPQAEgKAHgIQAHgHAKgFQAJgEAKgBQAMAAAJADQAKADAGAHQAHAGADAJQAEAJABALIgBAMIhGAEQACAGACAEIAHAHQAEACAEABIANABQAHgBAGgCQAGgCAHgFIALATQgIAGgLAEQgLAEgLAAIgEABQgJAAgIgDgAACgeQgIAAgGAGQgGAFgBAKIArgDQgCgJgFgFQgGgEgIAAIgBAAg");
	this.shape_1.setTransform(34.3,40.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF6D00").s().p("Ag4hIIAegBIAGBUIAAAAIAjgsIAigCIgmAsIAvA7IghACIgdgpIgOASIABAaIgfABg");
	this.shape_2.setTransform(22.2,39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF6D00").s().p("AgbA1QgHgCgFgEQgEgEgDgFQgDgGAAgGQgBgJAEgHQADgHAIgEQAIgFANgEQANgDARgCQgBgHgGgEQgGgEgJABQgHAAgIADIgQAIIgNgTQAMgHALgFQAIgCASgDQAKgBAJADQAIACAGAGQAHAFAEAIQAEAJAAAMIADA7IgYABIgEgMIAAAAQgIAIgJAEQgJAFgKAAQgHAAgGgCgAAAAFQgIACgFADQgEACgBADQgCADAAAEQABAEAEADQAEACAGgBQAGAAAGgDIALgHIgBgSQgLABgGACg");
	this.shape_3.setTransform(9.3,41.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EF6D00").s().p("AgMA0QgLgDgIgHQgJgGgEgKIgFgKIgBgNQgBgFACgGQAAgGACgFQADgHAJgLQAJgHAKgFQALgEALgBQAMAAAKADQALADAGAGIgMAUQgHgEgFgBQgGgCgGAAQgGABgFACQgGACgDAFQgEAEgCAGQgCAFAAAGQABAGACAGQADAFAEAEQAEADAFACQAFACAGgBQAIAAAHgDQAGgDAGgFIAOATIgKAHIgKAGQgLAEgLABIgEAAQgJAAgJgDg");
	this.shape_4.setTransform(-3.2,42.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EF6D00").s().p("AgzhDIAZgCIADALIAAAAQAHgHAHgEQAJgEAHAAQAKgBAHADQAJAEAFAHQAGAGADAKQAEAKABAMQAAANgDAJQgDALgGAIQgGAHgIAFQgIAEgIAAQgHABgGgDQgGgDgHgFIAAAAIACARIACAfIgfABgAAAgvQgFAAgEADQgFACgEAGIACApQAEADAFABIAIACIAIgDIAHgGIADgIQABgHAAgHIgCgNQgBgFgDgDQgCgEgEgBQgDgBgEAAIgBAAg");
	this.shape_5.setTransform(-15.8,45.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EF6D00").s().p("AgaA1QgGgDgFgFQgEgFgDgIIgDgRIgDg/IAegCIAEA7QAAALAEAEQADAFAJgBQAFAAAFgDQAEgDAFgHIgFhDIAggCIAFBnIgYABIgEgOIgBAAQgGAIgIAFQgLAGgIAAIgCAAQgHAAgGgCg");
	this.shape_6.setTransform(-28.7,43.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EF6D00").s().p("AgMA0QgLgDgIgHQgJgGgEgKIgFgKIgBgNQgBgFACgGQAAgGACgFQADgHAJgLQAJgHAKgFQALgEALgBQAMAAAKADQALADAGAGIgMAUQgHgEgFgBQgGgCgGAAQgGABgFACQgGACgDAFQgEAEgCAGQgCAFAAAGQABAGACAGQADAFAEAEQAEADAFACQAFACAGgBQAIAAAHgDQAGgDAGgFIAOATIgKAHIgKAGQgLAEgLABIgEAAQgJAAgJgDg");
	this.shape_7.setTransform(-40.9,44.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AipAfIBugRIg8hYIEhB6IjwAbg");
	this.shape_8.setTransform(46.8,17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AimgtIDVgVIB4ApIiCANIBCBPg");
	this.shape_9.setTransform(-43.8,65.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ap3gqITviMIAADhIzvCMg");
	this.shape_10.setTransform(1.6,41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAgIgGgCQAEACABgGQAFgsAagJIAFgFIgBAIIgCAHIgDgDQgDgCgDADQgUAVABAYIAGAGIgDAAIgDABIgEgBg");
	this.shape_11.setTransform(12.2,-46.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EF6D00").s().p("AADA2QgOAAgMgIQgWgLgIgWQgIgUALgUQAGgMANgIQANgHAQABQAOABAMAGQAWAMAIAVQAIAWgLASQgGANgNAHQgMAHgNAAIgEAAgAgcgqQgMAGgGAMQgKARAIATQAIAUASAKQALAGAOABQAOAAAMgGQAMgHAGgLQAJgRgHgTQgHgTgUgLQgMgHgMAAIgCAAQgNAAgLAGg");
	this.shape_12.setTransform(10.5,-39.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAsQgVgLgHgUQgIgUAJgSQALgTAUgFQAVgFAUALQAVALAHAUQAIAUgKASQgKASgUAGQgIACgHAAQgNAAgNgIg");
	this.shape_13.setTransform(10.5,-39.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EF6D00").s().p("AAZARQghgEgzgVQgGgCgCgDIgDgGQgBgDAVAHIAqAOQALADAfAFQAaAEAHAEQAKAGgPAAQgLAAgagEg");
	this.shape_14.setTransform(4.1,-27);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EF6D00").s().p("Ag+gBQgHgBgDgCQgCgCgCgEQgCgEBFALQALACAiABQAbACAIAEQALAEgJABQgHABgeAAQgjAAg/gNg");
	this.shape_15.setTransform(4.3,-18.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EF6D00").s().p("AgEAQQgCgBAEgFQAEgFgCgEQgDgIgJgDQgIgCAMgCIAKgBIAFAAIAFAEQAFAFAAAFIgCAKQgCADgEABIgMADIgBAAg");
	this.shape_16.setTransform(17.1,-26.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EF6D00").s().p("AgFAUQgDAAAFgHQAFgHgCgEQgEgLgKgDQgJgCAOgEIARgBIAFAFQAGAGgBAHQgBAQgIACIgHADIgEAAIgDAAg");
	this.shape_17.setTransform(18.9,-20.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EF6D00").s().p("AAfBQIgKgYIgEgKQgFgNgFgDQgGgEgXAAIgUAAQgegBgZgOQgNgIgIgIQgBAAAAAAQAAgBgBAAQgBAAAAAAQgBAAgBgBQgFABgEAHQgQAcgPgBQgIAAgFgJQgEgNABgJIAAgDIgEgCIgDgBQgFAAgLADQgMAEgFAAQgJAAgBgKQgCgOAQgYIADgFIABgEQADgTAWgLIABgBIACACIAgAbQAoAcAvAJQAtAJA9ACQBuAEAugbIABgBIABABQAOAFAEANQAEALgDAIQAPAXgFAWQgDANgHAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGAAgCgKQgBgHAAgKQAAgHgJgGIgCAEQgDADgHAAIgWgEIgGgCIgFgBQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgCAFQgCALgGAGQgGAGgFAAQgFAAgIgHIgOgJQgLgHgHgBQgHAAgGAHQgGAGAAALQAAAQgIANQgGAIgFAAQgGgBgGgKgAh1gKIACACIAUANQAYAOAeABIATABQAYABAIAEQAHADAFAPIAEALQALAeAGAAQADABAEgGQAHgLAAgPQABgNAGgIQAIgIAJABQAGAAAPAIIAGADIAJAGQAGAGADgBQADAAAFgEQAEgFACgJQACgGABgCQADgDAFAAIAMACQAQAFAFAAQAFgBABgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgEIAEACQACAAAGAEQAHAHAAAJQAAAJABAGQACAGACAAIABgBQAFgCADgLQAEgUgOgWIgBgBIAAgBQADgIgDgKQgDgJgLgFQgwAbhtgDQg6gDgxgIQgsgJgngZQgXgPgPgRQgSAKgCAQIgBAEIgEAHQgPAWACANQABAFAEAAQAGAAAJgDQANgFAFAAIAFABQAFACACAEQABABgBAFQgBAJAEAJQADAHAFAAQAFAAAIgHQAIgIAFgJQAGgLAJAAQADAAACACg");
	this.shape_18.setTransform(2,-14);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAhBOIgNgiQgGgOgIgDQgIgEglAAQgfgBgbgPIgUgOIgFgCQgHgBgFAKQgJAPgLAHQgNAKgGgPQgFgKACgKQAAgGgGgCQgFgCgVAHQgRAFgCgLQgBgLAJgPQAJgOABgDQAAgHADgGQAFgLAQgIIAgAbQApAeAwAJQA1AKBEABQBiABAsgZQANAFAEALQADAKgDAKQAOAUgDATQgCAPgIAFQgFADgDgJQgCgIAAgKQABgHgHgGIgHgFQABAKgMgBQgEAAgXgGQgKgCgCAIQgEANgEAFQgIAIgHgFQgJgHgFgDIgUgKQgMgEgJAJQgGAIAAANQgBAPgHALQgEAHgFAAQgFAAgFgKg");
	this.shape_19.setTransform(2,-14);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EF6D00").s().p("AAJBcQgzgChFgZQgrgRgRgRQgMgMgKgcQgUg3AngTQAUgJAPABIALABIABABIABABIAWAXQAjAaBAAPQAmAKAmABQAkABAegGIAYgHIABAAIABAAQAZAHAIARQAGALgCAQQgBALgDAGIgCAOIglAMQgrAOgsAGQgaADgYAAIgLAAgAishOQgSAJgEAQQgEAQAKAbQAKAbAMALQAQAQApAQQBEAZAyACQAeABAegFQBGgKAygUIACgMQAKgXgJgSQgIgPgWgFQglAOg2gCQgogBglgKQg+gPgkgYQgUgOgHgNIgIgBQgQAAgRAIg");
	this.shape_20.setTransform(2.6,-21.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXBXQglgGgygTQgrgQgQgRQgMgMgKgbQgJgZADgRQAEgTAUgJQARgJAQAAIALACIAWAXQAjAbBCAQQBCAQA6gHIAsgLQAiAJACAcQABAPgGANIgCANIgiAMQgrANgsAGQgaAEgZAAQgVAAgVgDg");
	this.shape_21.setTransform(2.6,-21.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EF6D00").s().p("AgbBaQgNAAgKgDQgagHgqg0QgMgQgNgSIgLgQIAAgBQgEgIgBgKQgDgWALgNQANgOAQABQAOAAARALQBZA2A6AEIAaACQAYABARgCIANgBIABgBIABABIALAIQALAJABAKQABASgVARQgcAWg0AOQguAMgkAAIgGAAgAiThIQgPARAMAeIAmAzQAoAyAYAGQAJADANAAQAlABAwgNQA0gOAbgVQATgPgCgPQgBgNgSgKQgOADgogBIgagBQg7gFhag3QgQgJgNgBQgOAAgLAMg");
	this.shape_22.setTransform(4.9,-28.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgxBUQgZgHgqg0IgkgxQgDgIgCgKQgDgUALgNQAVgXAkAWQBaA2A6AFQAkACAagBIATgCIASAQQAMATgcAWQggAahAAOQglAJgaAAQgQAAgNgEg");
	this.shape_23.setTransform(4.9,-28.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EF6D00").s().p("AABB6QgVAAgQgGQgkgMgggiIgYggIAAgBQgGgYAEgYQAHg1AwgMQAagGAaAAIADAAQAWACAOgNIAKgNIAGgQIgBARIgEAbQgHAagQAEIgNACQgaACgCAJIAAALQACANAMAEQAVAIATABIAMABQAPAAAPAEQBBARAHAkQADAMgFANQgFAKgJAIIAAAAIAAAAIgmALQglAJgeAAIgJgBgAhKhHQgsALgHAxQgCAOABARQABALACAFQAIAOARASQAeAgAhALQAQAGAUAAQAfABApgJQAYgFAPgGQAIgGAEgJQAFgLgDgLQgHghg+gQQgQgEgMAAIgMgBQgTAAgXgJQgPgGgCgPIAAgOQACgIAKgDQAFgCAPgCQAIAAAFgBQANgDAGgZIADgNIgFAFQgPAOgagBIgCAAIgJAAQgUAAgWAFg");
	this.shape_24.setTransform(7.2,-40.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgjBrQgkgMgfgiIgYgfQgFgXADgZQAIgzAtgLQAdgHAaABQAXABAPgNIAKgOIgDAZQgHAagPADQgGACgSABQgQADgDAJIAAANQADANANAGQAWAJATABQAbABAOACQA8AQAKAfQAIAagWATIg2ANQgdAGgYAAQgYAAgSgGg");
	this.shape_25.setTransform(7.2,-39.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EF6D00").s().p("AAfhWQAGgHAHAAQAFgBABAFIgBAFIheCxIgDABg");
	this.shape_26.setTransform(14.3,5.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAVhTQAGgIAIAAQAEAAADAEQADADAAADIhSCsIgGABgAAWhSIg/CsIADgBIBRiqIgCgFQgCgDgEAAQgFAAgIAHg");
	this.shape_27.setTransform(12,5.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EF6D00").s().p("AAWhSQAFgIAHAAQAFAAADAFIABAEIhRCrIgFABg");
	this.shape_28.setTransform(12.1,5.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AglBZIAxisIABAAQAIgHAIAAQAFAAADAFIABAEIAAABIhFCpIgGABgAAOhSIgxCqIACAAIBFipIgBgDQgCgEgEAAQgGABgJAFg");
	this.shape_29.setTransform(9.8,6.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EF6D00").s().p("AANhSQAIgGAIAAQAEgBADAFIABAEIhFCpIgEABg");
	this.shape_30.setTransform(9.8,6.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgeBZIAlioQAGgIAJgBQAHAAACAKIAAAAIg4CngAAWhWQgFAAgEAEIgEAEIglClIACAAIA3ilIgCgEQgBgEgEAAIAAAAg");
	this.shape_31.setTransform(7.5,6.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EF6D00").s().p("AgdBYIAlimQAGgJAIAAQAEAAACAFIACAEIg4Cmg");
	this.shape_32.setTransform(7.5,6.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZBWIAYijIAAAAQAHgHAIgBQAFAAAEAFIADAEIguCigAAAhMIgXCgIACAAIAtifQgCgIgIAAQgIAAgGAHg");
	this.shape_33.setTransform(5.2,6.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EF6D00").s().p("AgYBVIAYiiQAHgGAHgBQAFAAAEAEIACAEIgtChg");
	this.shape_34.setTransform(5.2,6.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgPBVIAEiiQAJgHAGAAQAFAAAEAEQADADAAACIAAAAIgaCggAgJhMIgFCfIACAAIAbieQgFgHgGAAQgHAAgGAGg");
	this.shape_35.setTransform(2.6,6.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EF6D00").s().p("AgPBUIAFigQAIgHAGAAQAFAAAEAEIADAEIgbCfg");
	this.shape_36.setTransform(2.6,6.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EF6D00").s().p("AAoBgIhSi3QgCgJAHAAQAFABAFAEIADAEIBEC4g");
	this.shape_37.setTransform(-12.7,4.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EF6D00").s().p("AAgBdIhGixQACgKAIABQAFAAAFAEIAEAFIAAAAIA1CzgAgkhUIBGCwIACAAIg0ivIgDgEQgFgEgEAAIAAgBQgGAAgCAIg");
	this.shape_38.setTransform(-10.4,5.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EF6D00").s().p("AAiBcIhHiwQACgJAIABQAEAAAFAEIADAEIA1Cxg");
	this.shape_39.setTransform(-10.5,5.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAbBbIg7iuIABAAQABgJAJABQAEAAAGAEIAFAEIAAAAIAnCwgAgehTIA6CtIADAAIgmisQgHgHgHgBIgBAAQgEAAgEAHg");
	this.shape_40.setTransform(-8.3,5.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EF6D00").s().p("AAcBbIg7iuQACgIAIABQAEAAAGAEIAFADIAmCug");
	this.shape_41.setTransform(-8.3,5.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAUBaIAAgBIgtipQACgJAIAAQAFABAFAEIAEAFIAAABIAbCogAgXhQIAsCoIACAAIgaimIgEgFQgEgDgEgBIAAAAQgFAAgDAHg");
	this.shape_42.setTransform(-5.9,6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EF6D00").s().p("AAVBZIgtipQACgIAIAAQAEABAFAEIADAFIAbCng");
	this.shape_43.setTransform(-5.9,6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAPBXIgjikIAAgBQAFgIAIAAQAFABAEAEIAFADIAAABIABAAIANCkgAgPhRQgCACgBACIAjCiIACAAIgNiiQgGgGgHgBIgBAAQgEAAgDADg");
	this.shape_44.setTransform(-3.7,6.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EF6D00").s().p("AAQBWIgjijQAEgIAIAAQAEABAFADIAFAEIANCjg");
	this.shape_45.setTransform(-3.7,6.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AADBWIgQiiIAAAAQAEgJAIABQAEAAAGAEIAFAEIAAAAIgGCigAgIhQQgDACAAACIAPCgIADAAIAFifIgFgEQgEgDgEgBIgBAAQgDAAgDADg");
	this.shape_46.setTransform(-0.8,6.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EF6D00").s().p("AAEBVIgQihQAEgIAHABQAEAAAGAEIAEADIgGChg");
	this.shape_47.setTransform(-0.8,6.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EF6D00").s().p("AAEB7IgWgBQgpgBgbgJQgOgFgGgEIgBgBQgmhXghhFIgcg4QgDgHACgDQABgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIABAAIAAAAQAMAGAGALIAAgBQAEgDAGAAQAMAAAGATIABgBQAEgEAJACQANADADAJQAHgFAIAAQAKAAAFAMQADgFAHgCIADAAQAHAAAHAKQAGgIALAAQAOAAAEANQAIgFAKgCQAJgBAHALQAHgKAJABQAJACAJAGQAFgMAOABQAMABAEAIQAIgKAHABIADAAQAGACADAFQAGgMAKABQAKABAEAFQAFgJAMgBQAKgCADAFIABAAQAHgSAMAAQAHABADADIABABQAFgKANgGIABAAIADACQABADgDAIIgfA1QgsBPgmBIIAAABIAAAAIgVAIQgXAGggAAIgNAAgAjKhvIAbA3QAeA/ApBdQAYAQA+ACIAWABQAmACAbgHQAPgDAGgFQAlhGAthRIAfg1QACgEAAgDQgPAHgDAMIAAAAIgEAAIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBgBAAQgBgCgGgBQgGAAgFAIQgFAGgCAGIgDgBIgBgDQgDgDgHABQgNACgCAJIgCAGIgCgGIgCgDQgEgDgHgBQgLAAgDANIgCAJIgBgJIgCgDQgCgEgGgCIgCAAQgGAAgHALIgDAFIAAgGQAAgCgCgDQgEgEgJgBQgNgBgDANIgBADIgCgCIgFgEQgGgEgGgBQgIgBgHAKIgBADIgBgDQgIgLgHABQgJABgJAGIgCACIAAgDQgBgDgCgDQgFgGgIAAQgNAAgCAJIgBAFIgCgFIgEgFQgEgGgFAAIgCAAQgIACgCAGIgCAIIgBgIIgDgHQgEgHgGAAQgLABgDAFIgCAFIgBgFQAAgCgDgDQgEgFgIgCQgHgCgDADIgBADIgDABIgFgLQgFgKgHAAQgFAAgCACQgCABAAAEIgDAAIAAAAQAAgDgDgFQgEgHgKgFIACAHg");
	this.shape_48.setTransform(1.2,3.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAEB5IgWgBQgpgBgbgJQgNgEgGgFQghhLg0huIgOgaQgCgGABgDIABgBQALAGAFAIIADAGQgBgHALAAQAIAAAGALIAEALQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgBABAAQADgEAJACQAJACAEAGIADAGQADgHAMAAQAHgBAFAIIACAHQACgGAKgDQAGgBAGAGIAEAHQACgKAPAAQAKAAAEAHQADAEAAADQAJgHAKgBQAJgBAHAMQAIgLAIABQAHABAGAEIAFAEIAEgHQAFgGAKAAQAJABAEAGQACACAAADIAFgHQAHgGAGACQAGACADAEIACAEQADgPAMABQAIAAAEAEIADAEQACgKAPgDQAJgBACAEQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAIgWAMAAQAIABACAEIABAEQACgMARgIIABABQABADgDAGIgPAaQg0BcgtBXIgTAHQgXAGggAAIgOAAg");
	this.shape_49.setTransform(1.2,3.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EF6D00").s().p("AgGAzIiyhJQgNgJgBgCIgGgQIAAgBIABgBIAIAAQAGAAADADQAEACAAACIAIgBQAHAAAEADQAHAGAAAGQASACAEAEIAHAFQAHgCAIAAIAGABQAKABAFAEQAKgFAJAAIADABIAIgDIAAgBIABABQAHAGAGACQAIACAGAGQAKgFAGAAIAAAAQAGABAKAHQACgGAIAAIAEABIATAGQABgKARABQAPACAFACQAHgFAGgBIABAAQAGAAAFAGQAGgGAJAAQAKACAFACQADgLAKAAQAMAAAHAEQAEgRAIgCIAEAAQAHAAAFAGQAKgKADAAIAHACIAAAAIgQAWIAAAAIjCBDgAjKgxIAGAQQABADAMAGICyBKIDBhDIAPgTIgFgBQgDAAgJAKIgBAAIAAAAIgDgDQgFgDgEAAIgEAAQgIACgCARIAAABIgBgBIgGgCQgHgDgHABQgKAAgCALIAAABIgFgDIgMgCQgIAAgGAGIAAABIgBgBIgDgDQgEgDgDAAIgBAAQgGABgGAFIgBAAIgUgEQgQgBgBAJIAAABIgBAAQAAgBgTgFIgEgBQgIAAgBAGIgBABIgBgBIgFgEQgFgEgFAAIAAAAQgHAAgJAFIgBABIAAgBIgEgEIgJgFQgIgCgGgGQgFAEgDAAIgCgBIgBAAQgGgBgNAFIgBAAIgDgBIgLgEIgGAAQgIAAgGABIgBAAQgBAAgHgFQgEgDgJgBIgIgBIgBAAIAAgBQAAgGgHgFQgEgDgGAAIgJABIgDABIACgCIgDgEQgDgCgGAAg");
	this.shape_50.setTransform(1.3,-2.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EF6D00").s().p("Ai4gXQgMgHgBgDIgGgRIAHAAQAGABADABQAFAEgBABIAGAAQAJgBAEADQAIAGgBAGIAJABQAKABAEADIAHAGQALgDAKACIALADIADABIAKgCQAJgCACABQAEACAGgGQAIAHAGACIAJAFIAEADQAKgFAHABQAFAAAFAEIAGAEQACgJAMADIATAGIADgFQAEgFAKACIAVADQAHgFAFgBQAEAAAFAEIADADQAGgHAJAAIAMADIAFACQABgLALgBQAHAAAIACIAFADQABgSAKgBQAHgCAFAEIAEADQAKgKADAAIAGACIgPAUIjDBDg");
	this.shape_51.setTransform(1.3,-2.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EF6D00").s().p("AA1B0IgQgBQg4gEgUgGQgZADgagBQgaAAgRgGQgRgHgWgSIgQgQIgKgIIAAgBQgHgNgDgMQgHgaAIgSQAKgYAOgOQAOgOAUgGQAOgLAXgLQApgSAkABIAGAAQAmADApAJIAiAHIgBAFIgggFQglgFgagBQglAAgPAGQgTAKgDAEQgEADgBALIgBANIgBADIgGgBQgSgBgMAUQgMASgBAYQAAAUAHAOQAIAQARAAQAFABAJgDQAPgEAEgIQADgHgFgNIgBgFIABgLIABgIIADgKIAGATQAFALAGAIIAGAMQAGANAHAGQAKAJATACIABAAIAbACQANABAHgDQAHgDAFgIQAIgKADgWIACgTIAFAAIABASQADAVAGAOQAEAKAFADQAEADAHAAIAKAAIAKgBQAPAAAIgJQAGgHACgNQACgJgCgPIgCgOIAFgCIAFAPQAFAQABAMQABAJAJAAQALAAAGgHQAHgHACgOQADgRgFgTIgDgNIAIALIAIAUQAGAagNAZIAAAAIAAAAQgKAKgVAIQgJATgegBQgKAAgNgDQgKAMgQAEQgKADgQAAIgFAAgAgmBkQAWAGA1AEIAQAAQAnACAPgUIABgBIACAAQALADAMABQAbAAAHgQIABgBIABgBQAVgHAJgJQAMgYgGgXQACAbgNAPQgIAJgNAAQgOgBgBgOIgDgPIgBANQgFAhgfABIgJAAIgLAAQgJAAgGgEQgFgEgFgLQgFgMgDgRQgDASgHAKQgHAJgIADQgIAEgOgBIgcgCQgVgCgMgKQgHgHgGgOIgHgLQgGgIgFgMIgBAIIABADQAHAOgFAKQgGALgRAEQgHADgIAAQgUgBgKgSQgIgPABgWQABgaANgUQAPgWAVACIABgLQABgMAFgFQAEgEAUgKQAQgIAmABIAQABIgngEQglgBgoAUQgUAJgOALIAAAAIgBAAQgUAGgMANQgNAMgKAYQgHAQAGAYQAEAPAFAJQAFAFAEACIACACIAAAAQAZAcAbALQANAFAcABQAQABATgCIAQgBIABAAg");
	this.shape_52.setTransform(1.3,-12.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAlBwQg3gEgVgFQg/AHgegMQgdgLgZgdQgFgDgFgFQgVgnAMgbQALgYAMgNQAOgOAVgGQAOgLAVgLQAsgUAnADQAnADAoAIIAhAIIg+gJQhBgHgVALQgXALgDAGIgEAaQgVgDgOAUQgNATgBAZQgCAbAMAQQAOARAZgHQAWgHAAgPIgEgSIACgTIADAKQAFALAGAJQAGAHAJASQALAPAZADQAgADAKgCQAMgCAJgLQAHgLAEgWIABgUIACATQACAVAHAOQAGAPAJACQADABAYgBQARAAAIgKQAGgHADgPQACgJgCgQIgCgOIAFAPQAFAQAAALQABAMANAAQALAAAHgIQASgVgLgmIAJASQAGAZgNAZQgLAJgUAIQgMAZgxgLQgLAOgUAEQgHABgMAAIgWgBg");
	this.shape_53.setTransform(1.3,-12.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EF6D00").s().p("AA1B2IgQgBQg4gEgUgFQgZADgagBQgagBgRgGQgRgGgWgTIgQgQQgLgHgHgLQgPgVAFgaQAGggATgTQANgNAegNQAKgKAXgKQApgTA0ABIAdADQCkAaAWBBQAIAIAHALQAMATgCARQgCAVgKAMQgLAMgXAIQgJATgegBQgKAAgNgDQgKAMgQAFQgKADgQAAIgFgBgAgmBnQAWAFA1AEIAQABQAnABAPgTIABgCIACABQALACAMABQAbABAHgRIABgBIABAAQAXgJAJgKQAKgLACgTQABgQgMgTIgOgRIAAgBIAAAAQgKgfgvgWQgugXhPgMQgPgCgNAAQgxgCgpATQgVAJgMAKIAAAAQgdANgNANQgSASgGAdQgFAZAPAUQAJANAHADIACABIAAABQAZAcAbAKQANAFAcACQAQAAATgBIAQgBIABgBg");
	this.shape_54.setTransform(1.3,-12.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAlBzQg3gEgVgFQg/AHgegMQgdgLgZgdQgJgFgIgLQgQgVAGgaQAFgeASgSQAOgOAdgOQAOgMAbgKQA0gVA8AJQBNAMAvAWQAyAXAKAgIAOASQANAUgBARQgCAUgLALQgKALgXAJQgMAZgxgLQgLAOgUAEQgHABgMAAIgWgBg");
	this.shape_55.setTransform(1.3,-12.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B72C4D").s().p("Ai3ALIgSgcQgGgVAMgCQAIgCADADQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAgEACgEQADgIAIAAQAIAAAGAFIADADIABgGQACgHAKAAQAKgBAEAEIABAEQAAgDACgDQAFgFAKAAQALAAADAEIABACIACgFQAFgFAJACQAKACADADIACACIACgFQAEgEAIAAQAIABAEAFQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQABgLALACQAHABADAFIACAEQADgLAHAAIAEAAQAEAAADAGIACAGQACgJALgBQAHAAADAGIABAEQABgIAOgBQAIAAAEAGIACAEQABgEANgCQAKgBAFAGIACAFIABgDQADgEAKABQALAAAEAHQACACAAADQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQADgDAKABQAKAAACAIQABADgBADQAEgHANABQAIAAADAIQACAEgBAEQABgGAMADQAHACgBAMQAAAFgCAFIgTAbIi4Asg");
	this.shape_56.setTransform(1.2,-5.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_57.setTransform(73.7,-72.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_58.setTransform(73.7,-76.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_59.setTransform(73.7,-80.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").p("Ai4ACID1hRIB8BSIj0BNg");
	this.shape_60.setTransform(-68,-75.7,1,1,0,0,0,0.5,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ai4AFIB6hhID3BiIinBXg");
	this.shape_61.setTransform(-68.5,-76);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgeAdQgdAegpAAI5LAAQgpAAgdgeQgegdAAgpIAA5LQAAgpAegdQAdgeApAAIZLAAQApAAAdAeQAeAdAAApg");

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_63.setTransform(0,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-91.5,183.1,186.9);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF6D00").s().p("AgMA2IgNgCQgOgEgLgGIANgUQAKAFAKADQALACAKgBQAJAAAEgDQAEgCAAgEQgBgFgFgCIgUgEQgLgCgHgCQgIgDgFgEQgFgDgCgEQgDgFAAgGQgBgHADgGQADgHAGgEQAGgFAJgDQAJgDALgBQAIAAAQAEQAKACAKAGIgMATQgJgEgIgCQgKgCgHABQgHAAgDACQgEADAAADQAAAEAGADIASADQAMACAIADQAIADAFADQAFADACAFQACAFAAAGQABAHgDAGQgDAHgGAFQgGAFgKADQgKADgMABIgCAAIgLgBg");
	this.shape.setTransform(47,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF6D00").s().p("AgMA0QgLgDgIgHQgJgGgEgKIgFgKIgBgNQgBgHAEgPQAEgKAHgIQAHgHAKgFQAJgEAKgBQAMAAAJADQAKADAGAHQAHAGADAJQAEAJABALIgBAMIhGAEQACAGACAEIAHAHQAEACAEABIANABQAHgBAGgCQAGgCAHgFIALATQgIAGgLAEQgLAEgLAAIgEABQgJAAgIgDgAACgeQgIAAgGAGQgGAFgBAKIArgDQgCgJgFgFQgGgEgIAAIgBAAg");
	this.shape_1.setTransform(34.3,40.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF6D00").s().p("Ag4hIIAegBIAGBUIAAAAIAjgsIAigCIgmAsIAvA7IghACIgdgpIgOASIABAaIgfABg");
	this.shape_2.setTransform(22.2,39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF6D00").s().p("AgbA1QgHgCgFgEQgEgEgDgFQgDgGAAgGQgBgJAEgHQADgHAIgEQAIgFANgEQANgDARgCQgBgHgGgEQgGgEgJABQgHAAgIADIgQAIIgNgTQAMgHALgFQAIgCASgDQAKgBAJADQAIACAGAGQAHAFAEAIQAEAJAAAMIADA7IgYABIgEgMIAAAAQgIAIgJAEQgJAFgKAAQgHAAgGgCgAAAAFQgIACgFADQgEACgBADQgCADAAAEQABAEAEADQAEACAGgBQAGAAAGgDIALgHIgBgSQgLABgGACg");
	this.shape_3.setTransform(9.3,41.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EF6D00").s().p("AgMA0QgLgDgIgHQgJgGgEgKIgFgKIgBgNQgBgFACgGQAAgGACgFQADgHAJgLQAJgHAKgFQALgEALgBQAMAAAKADQALADAGAGIgMAUQgHgEgFgBQgGgCgGAAQgGABgFACQgGACgDAFQgEAEgCAGQgCAFAAAGQABAGACAGQADAFAEAEQAEADAFACQAFACAGgBQAIAAAHgDQAGgDAGgFIAOATIgKAHIgKAGQgLAEgLABIgEAAQgJAAgJgDg");
	this.shape_4.setTransform(-3.2,42.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EF6D00").s().p("AgzhDIAZgCIADALIAAAAQAHgHAHgEQAJgEAHAAQAKgBAHADQAJAEAFAHQAGAGADAKQAEAKABAMQAAANgDAJQgDALgGAIQgGAHgIAFQgIAEgIAAQgHABgGgDQgGgDgHgFIAAAAIACARIACAfIgfABgAAAgvQgFAAgEADQgFACgEAGIACApQAEADAFABIAIACIAIgDIAHgGIADgIQABgHAAgHIgCgNQgBgFgDgDQgCgEgEgBQgDgBgEAAIgBAAg");
	this.shape_5.setTransform(-15.8,45.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EF6D00").s().p("AgaA1QgGgDgFgFQgEgFgDgIIgDgRIgDg/IAegCIAEA7QAAALAEAEQADAFAJgBQAFAAAFgDQAEgDAFgHIgFhDIAggCIAFBnIgYABIgEgOIgBAAQgGAIgIAFQgLAGgIAAIgCAAQgHAAgGgCg");
	this.shape_6.setTransform(-28.7,43.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EF6D00").s().p("AgMA0QgLgDgIgHQgJgGgEgKIgFgKIgBgNQgBgFACgGQAAgGACgFQADgHAJgLQAJgHAKgFQALgEALgBQAMAAAKADQALADAGAGIgMAUQgHgEgFgBQgGgCgGAAQgGABgFACQgGACgDAFQgEAEgCAGQgCAFAAAGQABAGACAGQADAFAEAEQAEADAFACQAFACAGgBQAIAAAHgDQAGgDAGgFIAOATIgKAHIgKAGQgLAEgLABIgEAAQgJAAgJgDg");
	this.shape_7.setTransform(-40.9,44.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AipAfIBugRIg8hYIEhB6IjwAbg");
	this.shape_8.setTransform(46.8,17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AimgtIDVgVIB4ApIiCANIBCBPg");
	this.shape_9.setTransform(-43.8,65.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ap3gqITviMIAADhIzvCMg");
	this.shape_10.setTransform(1.6,41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAgIgGgCQAEACABgGQAFgsAagJIAFgFIgBAIIgCAHIgDgDQgDgCgDADQgUAVABAYIAGAGIgDAAIgDABIgEgBg");
	this.shape_11.setTransform(12.2,-46.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EF6D00").s().p("AADA2QgOAAgMgIQgWgLgIgWQgIgUALgUQAGgMANgIQANgHAQABQAOABAMAGQAWAMAIAVQAIAWgLASQgGANgNAHQgMAHgNAAIgEAAgAgcgqQgMAGgGAMQgKARAIATQAIAUASAKQALAGAOABQAOAAAMgGQAMgHAGgLQAJgRgHgTQgHgTgUgLQgMgHgMAAIgCAAQgNAAgLAGg");
	this.shape_12.setTransform(10.5,-39.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAsQgVgLgHgUQgIgUAJgSQALgTAUgFQAVgFAUALQAVALAHAUQAIAUgKASQgKASgUAGQgIACgHAAQgNAAgNgIg");
	this.shape_13.setTransform(10.5,-39.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EF6D00").s().p("AAZARQghgEgzgVQgGgCgCgDIgDgGQgBgDAVAHIAqAOQALADAfAFQAaAEAHAEQAKAGgPAAQgLAAgagEg");
	this.shape_14.setTransform(4.1,-27);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EF6D00").s().p("Ag+gBQgHgBgDgCQgCgCgCgEQgCgEBFALQALACAiABQAbACAIAEQALAEgJABQgHABgeAAQgjAAg/gNg");
	this.shape_15.setTransform(4.3,-18.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EF6D00").s().p("AgEAQQgCgBAEgFQAEgFgCgEQgDgIgJgDQgIgCAMgCIAKgBIAFAAIAFAEQAFAFAAAFIgCAKQgCADgEABIgMADIgBAAg");
	this.shape_16.setTransform(17.1,-26.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EF6D00").s().p("AgFAUQgDAAAFgHQAFgHgCgEQgEgLgKgDQgJgCAOgEIARgBIAFAFQAGAGgBAHQgBAQgIACIgHADIgEAAIgDAAg");
	this.shape_17.setTransform(18.9,-20.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EF6D00").s().p("AAfBQIgKgYIgEgKQgFgNgFgDQgGgEgXAAIgUAAQgegBgZgOQgNgIgIgIQgBAAAAAAQAAgBgBAAQgBAAAAAAQgBAAgBgBQgFABgEAHQgQAcgPgBQgIAAgFgJQgEgNABgJIAAgDIgEgCIgDgBQgFAAgLADQgMAEgFAAQgJAAgBgKQgCgOAQgYIADgFIABgEQADgTAWgLIABgBIACACIAgAbQAoAcAvAJQAtAJA9ACQBuAEAugbIABgBIABABQAOAFAEANQAEALgDAIQAPAXgFAWQgDANgHAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgGAAgCgKQgBgHAAgKQAAgHgJgGIgCAEQgDADgHAAIgWgEIgGgCIgFgBQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgCAFQgCALgGAGQgGAGgFAAQgFAAgIgHIgOgJQgLgHgHgBQgHAAgGAHQgGAGAAALQAAAQgIANQgGAIgFAAQgGgBgGgKgAh1gKIACACIAUANQAYAOAeABIATABQAYABAIAEQAHADAFAPIAEALQALAeAGAAQADABAEgGQAHgLAAgPQABgNAGgIQAIgIAJABQAGAAAPAIIAGADIAJAGQAGAGADgBQADAAAFgEQAEgFACgJQACgGABgCQADgDAFAAIAMACQAQAFAFAAQAFgBABgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgEIAEACQACAAAGAEQAHAHAAAJQAAAJABAGQACAGACAAIABgBQAFgCADgLQAEgUgOgWIgBgBIAAgBQADgIgDgKQgDgJgLgFQgwAbhtgDQg6gDgxgIQgsgJgngZQgXgPgPgRQgSAKgCAQIgBAEIgEAHQgPAWACANQABAFAEAAQAGAAAJgDQANgFAFAAIAFABQAFACACAEQABABgBAFQgBAJAEAJQADAHAFAAQAFAAAIgHQAIgIAFgJQAGgLAJAAQADAAACACg");
	this.shape_18.setTransform(2,-14);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAhBOIgNgiQgGgOgIgDQgIgEglAAQgfgBgbgPIgUgOIgFgCQgHgBgFAKQgJAPgLAHQgNAKgGgPQgFgKACgKQAAgGgGgCQgFgCgVAHQgRAFgCgLQgBgLAJgPQAJgOABgDQAAgHADgGQAFgLAQgIIAgAbQApAeAwAJQA1AKBEABQBiABAsgZQANAFAEALQADAKgDAKQAOAUgDATQgCAPgIAFQgFADgDgJQgCgIAAgKQABgHgHgGIgHgFQABAKgMgBQgEAAgXgGQgKgCgCAIQgEANgEAFQgIAIgHgFQgJgHgFgDIgUgKQgMgEgJAJQgGAIAAANQgBAPgHALQgEAHgFAAQgFAAgFgKg");
	this.shape_19.setTransform(2,-14);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EF6D00").s().p("AAJBcQgzgChFgZQgrgRgRgRQgMgMgKgcQgUg3AngTQAUgJAPABIALABIABABIABABIAWAXQAjAaBAAPQAmAKAmABQAkABAegGIAYgHIABAAIABAAQAZAHAIARQAGALgCAQQgBALgDAGIgCAOIglAMQgrAOgsAGQgaADgYAAIgLAAgAishOQgSAJgEAQQgEAQAKAbQAKAbAMALQAQAQApAQQBEAZAyACQAeABAegFQBGgKAygUIACgMQAKgXgJgSQgIgPgWgFQglAOg2gCQgogBglgKQg+gPgkgYQgUgOgHgNIgIgBQgQAAgRAIg");
	this.shape_20.setTransform(2.6,-21.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXBXQglgGgygTQgrgQgQgRQgMgMgKgbQgJgZADgRQAEgTAUgJQARgJAQAAIALACIAWAXQAjAbBCAQQBCAQA6gHIAsgLQAiAJACAcQABAPgGANIgCANIgiAMQgrANgsAGQgaAEgZAAQgVAAgVgDg");
	this.shape_21.setTransform(2.6,-21.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EF6D00").s().p("AgbBaQgNAAgKgDQgagHgqg0QgMgQgNgSIgLgQIAAgBQgEgIgBgKQgDgWALgNQANgOAQABQAOAAARALQBZA2A6AEIAaACQAYABARgCIANgBIABgBIABABIALAIQALAJABAKQABASgVARQgcAWg0AOQguAMgkAAIgGAAgAiThIQgPARAMAeIAmAzQAoAyAYAGQAJADANAAQAlABAwgNQA0gOAbgVQATgPgCgPQgBgNgSgKQgOADgogBIgagBQg7gFhag3QgQgJgNgBQgOAAgLAMg");
	this.shape_22.setTransform(4.9,-28.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgxBUQgZgHgqg0IgkgxQgDgIgCgKQgDgUALgNQAVgXAkAWQBaA2A6AFQAkACAagBIATgCIASAQQAMATgcAWQggAahAAOQglAJgaAAQgQAAgNgEg");
	this.shape_23.setTransform(4.9,-28.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EF6D00").s().p("AABB6QgVAAgQgGQgkgMgggiIgYggIAAgBQgGgYAEgYQAHg1AwgMQAagGAaAAIADAAQAWACAOgNIAKgNIAGgQIgBARIgEAbQgHAagQAEIgNACQgaACgCAJIAAALQACANAMAEQAVAIATABIAMABQAPAAAPAEQBBARAHAkQADAMgFANQgFAKgJAIIAAAAIAAAAIgmALQglAJgeAAIgJgBgAhKhHQgsALgHAxQgCAOABARQABALACAFQAIAOARASQAeAgAhALQAQAGAUAAQAfABApgJQAYgFAPgGQAIgGAEgJQAFgLgDgLQgHghg+gQQgQgEgMAAIgMgBQgTAAgXgJQgPgGgCgPIAAgOQACgIAKgDQAFgCAPgCQAIAAAFgBQANgDAGgZIADgNIgFAFQgPAOgagBIgCAAIgJAAQgUAAgWAFg");
	this.shape_24.setTransform(7.2,-40.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgjBrQgkgMgfgiIgYgfQgFgXADgZQAIgzAtgLQAdgHAaABQAXABAPgNIAKgOIgDAZQgHAagPADQgGACgSABQgQADgDAJIAAANQADANANAGQAWAJATABQAbABAOACQA8AQAKAfQAIAagWATIg2ANQgdAGgYAAQgYAAgSgGg");
	this.shape_25.setTransform(7.2,-39.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EF6D00").s().p("AAfhWQAGgHAHAAQAFgBABAFIgBAFIheCxIgDABg");
	this.shape_26.setTransform(14.3,5.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAVhTQAGgIAIAAQAEAAADAEQADADAAADIhSCsIgGABgAAWhSIg/CsIADgBIBRiqIgCgFQgCgDgEAAQgFAAgIAHg");
	this.shape_27.setTransform(12,5.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EF6D00").s().p("AAWhSQAFgIAHAAQAFAAADAFIABAEIhRCrIgFABg");
	this.shape_28.setTransform(12.1,5.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AglBZIAxisIABAAQAIgHAIAAQAFAAADAFIABAEIAAABIhFCpIgGABgAAOhSIgxCqIACAAIBFipIgBgDQgCgEgEAAQgGABgJAFg");
	this.shape_29.setTransform(9.8,6.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EF6D00").s().p("AANhSQAIgGAIAAQAEgBADAFIABAEIhFCpIgEABg");
	this.shape_30.setTransform(9.8,6.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgeBZIAlioQAGgIAJgBQAHAAACAKIAAAAIg4CngAAWhWQgFAAgEAEIgEAEIglClIACAAIA3ilIgCgEQgBgEgEAAIAAAAg");
	this.shape_31.setTransform(7.5,6.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EF6D00").s().p("AgdBYIAlimQAGgJAIAAQAEAAACAFIACAEIg4Cmg");
	this.shape_32.setTransform(7.5,6.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZBWIAYijIAAAAQAHgHAIgBQAFAAAEAFIADAEIguCigAAAhMIgXCgIACAAIAtifQgCgIgIAAQgIAAgGAHg");
	this.shape_33.setTransform(5.2,6.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EF6D00").s().p("AgYBVIAYiiQAHgGAHgBQAFAAAEAEIACAEIgtChg");
	this.shape_34.setTransform(5.2,6.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgPBVIAEiiQAJgHAGAAQAFAAAEAEQADADAAACIAAAAIgaCggAgJhMIgFCfIACAAIAbieQgFgHgGAAQgHAAgGAGg");
	this.shape_35.setTransform(2.6,6.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EF6D00").s().p("AgPBUIAFigQAIgHAGAAQAFAAAEAEIADAEIgbCfg");
	this.shape_36.setTransform(2.6,6.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EF6D00").s().p("AAoBgIhSi3QgCgJAHAAQAFABAFAEIADAEIBEC4g");
	this.shape_37.setTransform(-12.7,4.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EF6D00").s().p("AAgBdIhGixQACgKAIABQAFAAAFAEIAEAFIAAAAIA1CzgAgkhUIBGCwIACAAIg0ivIgDgEQgFgEgEAAIAAgBQgGAAgCAIg");
	this.shape_38.setTransform(-10.4,5.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EF6D00").s().p("AAiBcIhHiwQACgJAIABQAEAAAFAEIADAEIA1Cxg");
	this.shape_39.setTransform(-10.5,5.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAbBbIg7iuIABAAQABgJAJABQAEAAAGAEIAFAEIAAAAIAnCwgAgehTIA6CtIADAAIgmisQgHgHgHgBIgBAAQgEAAgEAHg");
	this.shape_40.setTransform(-8.3,5.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EF6D00").s().p("AAcBbIg7iuQACgIAIABQAEAAAGAEIAFADIAmCug");
	this.shape_41.setTransform(-8.3,5.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAUBaIAAgBIgtipQACgJAIAAQAFABAFAEIAEAFIAAABIAbCogAgXhQIAsCoIACAAIgaimIgEgFQgEgDgEgBIAAAAQgFAAgDAHg");
	this.shape_42.setTransform(-5.9,6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EF6D00").s().p("AAVBZIgtipQACgIAIAAQAEABAFAEIADAFIAbCng");
	this.shape_43.setTransform(-5.9,6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAPBXIgjikIAAgBQAFgIAIAAQAFABAEAEIAFADIAAABIABAAIANCkgAgPhRQgCACgBACIAjCiIACAAIgNiiQgGgGgHgBIgBAAQgEAAgDADg");
	this.shape_44.setTransform(-3.7,6.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EF6D00").s().p("AAQBWIgjijQAEgIAIAAQAEABAFADIAFAEIANCjg");
	this.shape_45.setTransform(-3.7,6.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AADBWIgQiiIAAAAQAEgJAIABQAEAAAGAEIAFAEIAAAAIgGCigAgIhQQgDACAAACIAPCgIADAAIAFifIgFgEQgEgDgEgBIgBAAQgDAAgDADg");
	this.shape_46.setTransform(-0.8,6.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EF6D00").s().p("AAEBVIgQihQAEgIAHABQAEAAAGAEIAEADIgGChg");
	this.shape_47.setTransform(-0.8,6.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EF6D00").s().p("AAEB7IgWgBQgpgBgbgJQgOgFgGgEIgBgBQgmhXghhFIgcg4QgDgHACgDQABgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIABAAIAAAAQAMAGAGALIAAgBQAEgDAGAAQAMAAAGATIABgBQAEgEAJACQANADADAJQAHgFAIAAQAKAAAFAMQADgFAHgCIADAAQAHAAAHAKQAGgIALAAQAOAAAEANQAIgFAKgCQAJgBAHALQAHgKAJABQAJACAJAGQAFgMAOABQAMABAEAIQAIgKAHABIADAAQAGACADAFQAGgMAKABQAKABAEAFQAFgJAMgBQAKgCADAFIABAAQAHgSAMAAQAHABADADIABABQAFgKANgGIABAAIADACQABADgDAIIgfA1QgsBPgmBIIAAABIAAAAIgVAIQgXAGggAAIgNAAgAjKhvIAbA3QAeA/ApBdQAYAQA+ACIAWABQAmACAbgHQAPgDAGgFQAlhGAthRIAfg1QACgEAAgDQgPAHgDAMIAAAAIgEAAIAAgBQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBgBAAQgBgCgGgBQgGAAgFAIQgFAGgCAGIgDgBIgBgDQgDgDgHABQgNACgCAJIgCAGIgCgGIgCgDQgEgDgHgBQgLAAgDANIgCAJIgBgJIgCgDQgCgEgGgCIgCAAQgGAAgHALIgDAFIAAgGQAAgCgCgDQgEgEgJgBQgNgBgDANIgBADIgCgCIgFgEQgGgEgGgBQgIgBgHAKIgBADIgBgDQgIgLgHABQgJABgJAGIgCACIAAgDQgBgDgCgDQgFgGgIAAQgNAAgCAJIgBAFIgCgFIgEgFQgEgGgFAAIgCAAQgIACgCAGIgCAIIgBgIIgDgHQgEgHgGAAQgLABgDAFIgCAFIgBgFQAAgCgDgDQgEgFgIgCQgHgCgDADIgBADIgDABIgFgLQgFgKgHAAQgFAAgCACQgCABAAAEIgDAAIAAAAQAAgDgDgFQgEgHgKgFIACAHg");
	this.shape_48.setTransform(1.2,3.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAEB5IgWgBQgpgBgbgJQgNgEgGgFQghhLg0huIgOgaQgCgGABgDIABgBQALAGAFAIIADAGQgBgHALAAQAIAAAGALIAEALQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgBABAAQADgEAJACQAJACAEAGIADAGQADgHAMAAQAHgBAFAIIACAHQACgGAKgDQAGgBAGAGIAEAHQACgKAPAAQAKAAAEAHQADAEAAADQAJgHAKgBQAJgBAHAMQAIgLAIABQAHABAGAEIAFAEIAEgHQAFgGAKAAQAJABAEAGQACACAAADIAFgHQAHgGAGACQAGACADAEIACAEQADgPAMABQAIAAAEAEIADAEQACgKAPgDQAJgBACAEQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAIgWAMAAQAIABACAEIABAEQACgMARgIIABABQABADgDAGIgPAaQg0BcgtBXIgTAHQgXAGggAAIgOAAg");
	this.shape_49.setTransform(1.2,3.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EF6D00").s().p("AgGAzIiyhJQgNgJgBgCIgGgQIAAgBIABgBIAIAAQAGAAADADQAEACAAACIAIgBQAHAAAEADQAHAGAAAGQASACAEAEIAHAFQAHgCAIAAIAGABQAKABAFAEQAKgFAJAAIADABIAIgDIAAgBIABABQAHAGAGACQAIACAGAGQAKgFAGAAIAAAAQAGABAKAHQACgGAIAAIAEABIATAGQABgKARABQAPACAFACQAHgFAGgBIABAAQAGAAAFAGQAGgGAJAAQAKACAFACQADgLAKAAQAMAAAHAEQAEgRAIgCIAEAAQAHAAAFAGQAKgKADAAIAHACIAAAAIgQAWIAAAAIjCBDgAjKgxIAGAQQABADAMAGICyBKIDBhDIAPgTIgFgBQgDAAgJAKIgBAAIAAAAIgDgDQgFgDgEAAIgEAAQgIACgCARIAAABIgBgBIgGgCQgHgDgHABQgKAAgCALIAAABIgFgDIgMgCQgIAAgGAGIAAABIgBgBIgDgDQgEgDgDAAIgBAAQgGABgGAFIgBAAIgUgEQgQgBgBAJIAAABIgBAAQAAgBgTgFIgEgBQgIAAgBAGIgBABIgBgBIgFgEQgFgEgFAAIAAAAQgHAAgJAFIgBABIAAgBIgEgEIgJgFQgIgCgGgGQgFAEgDAAIgCgBIgBAAQgGgBgNAFIgBAAIgDgBIgLgEIgGAAQgIAAgGABIgBAAQgBAAgHgFQgEgDgJgBIgIgBIgBAAIAAgBQAAgGgHgFQgEgDgGAAIgJABIgDABIACgCIgDgEQgDgCgGAAg");
	this.shape_50.setTransform(1.3,-2.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EF6D00").s().p("Ai4gXQgMgHgBgDIgGgRIAHAAQAGABADABQAFAEgBABIAGAAQAJgBAEADQAIAGgBAGIAJABQAKABAEADIAHAGQALgDAKACIALADIADABIAKgCQAJgCACABQAEACAGgGQAIAHAGACIAJAFIAEADQAKgFAHABQAFAAAFAEIAGAEQACgJAMADIATAGIADgFQAEgFAKACIAVADQAHgFAFgBQAEAAAFAEIADADQAGgHAJAAIAMADIAFACQABgLALgBQAHAAAIACIAFADQABgSAKgBQAHgCAFAEIAEADQAKgKADAAIAGACIgPAUIjDBDg");
	this.shape_51.setTransform(1.3,-2.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EF6D00").s().p("AA1B0IgQgBQg4gEgUgGQgZADgagBQgaAAgRgGQgRgHgWgSIgQgQIgKgIIAAgBQgHgNgDgMQgHgaAIgSQAKgYAOgOQAOgOAUgGQAOgLAXgLQApgSAkABIAGAAQAmADApAJIAiAHIgBAFIgggFQglgFgagBQglAAgPAGQgTAKgDAEQgEADgBALIgBANIgBADIgGgBQgSgBgMAUQgMASgBAYQAAAUAHAOQAIAQARAAQAFABAJgDQAPgEAEgIQADgHgFgNIgBgFIABgLIABgIIADgKIAGATQAFALAGAIIAGAMQAGANAHAGQAKAJATACIABAAIAbACQANABAHgDQAHgDAFgIQAIgKADgWIACgTIAFAAIABASQADAVAGAOQAEAKAFADQAEADAHAAIAKAAIAKgBQAPAAAIgJQAGgHACgNQACgJgCgPIgCgOIAFgCIAFAPQAFAQABAMQABAJAJAAQALAAAGgHQAHgHACgOQADgRgFgTIgDgNIAIALIAIAUQAGAagNAZIAAAAIAAAAQgKAKgVAIQgJATgegBQgKAAgNgDQgKAMgQAEQgKADgQAAIgFAAgAgmBkQAWAGA1AEIAQAAQAnACAPgUIABgBIACAAQALADAMABQAbAAAHgQIABgBIABgBQAVgHAJgJQAMgYgGgXQACAbgNAPQgIAJgNAAQgOgBgBgOIgDgPIgBANQgFAhgfABIgJAAIgLAAQgJAAgGgEQgFgEgFgLQgFgMgDgRQgDASgHAKQgHAJgIADQgIAEgOgBIgcgCQgVgCgMgKQgHgHgGgOIgHgLQgGgIgFgMIgBAIIABADQAHAOgFAKQgGALgRAEQgHADgIAAQgUgBgKgSQgIgPABgWQABgaANgUQAPgWAVACIABgLQABgMAFgFQAEgEAUgKQAQgIAmABIAQABIgngEQglgBgoAUQgUAJgOALIAAAAIgBAAQgUAGgMANQgNAMgKAYQgHAQAGAYQAEAPAFAJQAFAFAEACIACACIAAAAQAZAcAbALQANAFAcABQAQABATgCIAQgBIABAAg");
	this.shape_52.setTransform(1.3,-12.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAlBwQg3gEgVgFQg/AHgegMQgdgLgZgdQgFgDgFgFQgVgnAMgbQALgYAMgNQAOgOAVgGQAOgLAVgLQAsgUAnADQAnADAoAIIAhAIIg+gJQhBgHgVALQgXALgDAGIgEAaQgVgDgOAUQgNATgBAZQgCAbAMAQQAOARAZgHQAWgHAAgPIgEgSIACgTIADAKQAFALAGAJQAGAHAJASQALAPAZADQAgADAKgCQAMgCAJgLQAHgLAEgWIABgUIACATQACAVAHAOQAGAPAJACQADABAYgBQARAAAIgKQAGgHADgPQACgJgCgQIgCgOIAFAPQAFAQAAALQABAMANAAQALAAAHgIQASgVgLgmIAJASQAGAZgNAZQgLAJgUAIQgMAZgxgLQgLAOgUAEQgHABgMAAIgWgBg");
	this.shape_53.setTransform(1.3,-12.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EF6D00").s().p("AA1B2IgQgBQg4gEgUgFQgZADgagBQgagBgRgGQgRgGgWgTIgQgQQgLgHgHgLQgPgVAFgaQAGggATgTQANgNAegNQAKgKAXgKQApgTA0ABIAdADQCkAaAWBBQAIAIAHALQAMATgCARQgCAVgKAMQgLAMgXAIQgJATgegBQgKAAgNgDQgKAMgQAFQgKADgQAAIgFgBgAgmBnQAWAFA1AEIAQABQAnABAPgTIABgCIACABQALACAMABQAbABAHgRIABgBIABAAQAXgJAJgKQAKgLACgTQABgQgMgTIgOgRIAAgBIAAAAQgKgfgvgWQgugXhPgMQgPgCgNAAQgxgCgpATQgVAJgMAKIAAAAQgdANgNANQgSASgGAdQgFAZAPAUQAJANAHADIACABIAAABQAZAcAbAKQANAFAcACQAQAAATgBIAQgBIABgBg");
	this.shape_54.setTransform(1.3,-12.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAlBzQg3gEgVgFQg/AHgegMQgdgLgZgdQgJgFgIgLQgQgVAGgaQAFgeASgSQAOgOAdgOQAOgMAbgKQA0gVA8AJQBNAMAvAWQAyAXAKAgIAOASQANAUgBARQgCAUgLALQgKALgXAJQgMAZgxgLQgLAOgUAEQgHABgMAAIgWgBg");
	this.shape_55.setTransform(1.3,-12.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B72C4D").s().p("Ai3ALIgSgcQgGgVAMgCQAIgCADADQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAgEACgEQADgIAIAAQAIAAAGAFIADADIABgGQACgHAKAAQAKgBAEAEIABAEQAAgDACgDQAFgFAKAAQALAAADAEIABACIACgFQAFgFAJACQAKACADADIACACIACgFQAEgEAIAAQAIABAEAFQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQABgLALACQAHABADAFIACAEQADgLAHAAIAEAAQAEAAADAGIACAGQACgJALgBQAHAAADAGIABAEQABgIAOgBQAIAAAEAGIACAEQABgEANgCQAKgBAFAGIACAFIABgDQADgEAKABQALAAAEAHQACACAAADQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQADgDAKABQAKAAACAIQABADgBADQAEgHANABQAIAAADAIQACAEgBAEQABgGAMADQAHACgBAMQAAAFgCAFIgTAbIi4Asg");
	this.shape_56.setTransform(1.2,-5.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_57.setTransform(73.7,-72.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_58.setTransform(73.7,-76.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_59.setTransform(73.7,-80.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").p("Ai4ACID1hRIB8BSIj0BNg");
	this.shape_60.setTransform(-68,-75.7,1,1,0,0,0,0.5,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ai4AFIB6hhID3BiIinBXg");
	this.shape_61.setTransform(-68.5,-76);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgeAdQgdAegpAAI5LAAQgpAAgdgeQgegdAAgpIAA5LQAAgpAegdQAdgeApAAIZLAAQApAAAdAeQAeAdAAApg");

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_63.setTransform(0,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-91.5,183.1,186.9);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai7FCQg4AAgngnQgogoAAg3IAAl3QAAg3AogoQAngnA4AAIF3AAQA4AAAnAnQAoAoAAA3IAAF3QAAA3goAoQgnAng4AAgAkBkBQgdAdAAApIAAF3QAAApAdAdQAdAeApgBIF3AAQApABAdgeQAegdAAgpIAAl3QAAgpgegdQgdgdgpAAIl3AAQgpAAgdAdg");
	this.shape.setTransform(39.3,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_1.setTransform(55.7,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiBkQgqgqAAg6QAAg5AqgpQApgqA5AAQA6AAAqAqQApApAAA5QAAA6gpAqQgqApg6AAQg5AAgpgpgAhJhKQgfAfAAArQAAAsAfAeQAeAfArAAQAsAAAfgfQAfgeAAgsQAAgrgfgfQgfgfgsAAQgrAAgeAfg");
	this.shape_2.setTransform(39.3,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkNE4QgYAAgJgJQgJgJAAgZIAAoaQAAgYAJgJQAJgJAXAAIIdAAQAXAAAJAJQAJAJAAAXIAAIdQAAAWgJAJQgJAKgWAAgAB0EoICOAAQAVAAAJgJQAIgJAAgVIAAoBQAAgWgJgJQgIgJgWAAIoBAAQgWAAgJAJQgIAJAAAWIAAH/QAAAXAIAJQAJAJAWAAIESAAIAAjZQAAgLgNAAQgiABgRgCQgDAAgEgEQgFgEAAgDIgBhDQAAgOAQABIArAAQAKABAFgEQAEgEgBgLQAAgwADgYQAEgkAWgZQAWgYAjgGQASgDAbAAIAuAAQAOAAAAAPIAAA5QAAAIgEAEQgEACgIAAQgXAAgcADQgLABgHAGQgHAHgBALIAABGIBYAAIgJBLQgBAJgEAFQgFAEgKgBIg7AAg");
	this.shape_3.setTransform(-42,-18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_4.setTransform(73.7,-72.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_5.setTransform(73.7,-76.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_6.setTransform(73.7,-80.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").p("Ai4ACID1hRIB8BSIj0BNg");
	this.shape_7.setTransform(-68,-75.7,1,1,0,0,0,0.5,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai4AFIB6hhID3BiIinBXg");
	this.shape_8.setTransform(-68.6,-76);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgdAdQgeAegpAAI5LAAQgoAAgegeQgegdAAgpIAA5LQAAgpAegdQAegeAoAAIZLAAQApAAAeAeQAdAdAAApg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_10.setTransform(0,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-91.5,183.1,186.9);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai7FCQg4AAgngnQgogoAAg3IAAl3QAAg3AogoQAngnA4AAIF3AAQA4AAAnAnQAoAoAAA3IAAF3QAAA3goAoQgnAng4AAgAkBkBQgdAdAAApIAAF3QAAApAdAdQAdAeApgBIF3AAQApABAdgeQAegdAAgpIAAl3QAAgpgegdQgdgdgpAAIl3AAQgpAAgdAdg");
	this.shape.setTransform(39.3,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_1.setTransform(55.7,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiBkQgqgqAAg6QAAg5AqgpQApgqA5AAQA6AAAqAqQApApAAA5QAAA6gpAqQgqApg6AAQg5AAgpgpgAhJhKQgfAfAAArQAAAsAfAeQAeAfArAAQAsAAAfgfQAfgeAAgsQAAgrgfgfQgfgfgsAAQgrAAgeAfg");
	this.shape_2.setTransform(39.3,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkNE4QgYAAgJgJQgJgJAAgZIAAoaQAAgYAJgJQAJgJAXAAIIdAAQAXAAAJAJQAJAJAAAXIAAIdQAAAWgJAJQgJAKgWAAgAB0EoICOAAQAVAAAJgJQAIgJAAgVIAAoBQAAgWgJgJQgIgJgWAAIoBAAQgWAAgJAJQgIAJAAAWIAAH/QAAAXAIAJQAJAJAWAAIESAAIAAjZQAAgLgNAAQgiABgRgCQgDAAgEgEQgFgEAAgDIgBhDQAAgOAQABIArAAQAKABAFgEQAEgEgBgLQAAgwADgYQAEgkAWgZQAWgYAjgGQASgDAbAAIAuAAQAOAAAAAPIAAA5QAAAIgEAEQgEACgIAAQgXAAgcADQgLABgHAGQgHAHgBALIAABGIBYAAIgJBLQgBAJgEAFQgFAEgKgBIg7AAg");
	this.shape_3.setTransform(-42,-18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_4.setTransform(73.7,-72.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_5.setTransform(73.7,-76.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_6.setTransform(73.7,-80.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").p("Ai4ACID1hRIB8BSIj0BNg");
	this.shape_7.setTransform(-68,-75.7,1,1,0,0,0,0.5,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai4AFIB6hhID3BiIinBXg");
	this.shape_8.setTransform(-68.6,-76);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgdAdQgeAegpAAI5LAAQgoAAgegeQgegdAAgpIAA5LQAAgpAegdQAegeAoAAIZLAAQApAAAeAeQAdAdAAApg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_10.setTransform(0,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-91.5,183.1,186.9);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvBpIgEgfIhEAAIgRAfIg9AAIBqjHQAFgLALABIA4AAQAFAAADABQACACABAGIASDIgAApAgIgGhgIgqBfIAwABg");
	this.shape.setTransform(23.2,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBqIgJAAQgXAAgCgEQgDgEAHgWQAhhpAShAQACgHADgDQADgDAHABIAPAAQAXAAADADQADAEgHAWIgxCjQgDAMgFAEQgEADgGAAIgGAAg");
	this.shape_1.setTransform(-8,44.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhbBbQgKgFAGgIIADgDIAIgPQAFgJAFgDQAGgEAJAGIAOAJQAZAHANgBQASgBAEgQQACgHgFgFQgCgDgIgFQgggVgHgHQgYgUADgeQADgdAbgRQAWgOAdAAQAkAAAgATQAMAHgJAIIgEAEIgJAMQgFAHgFACQgFADgHgFIgMgJQgVgHgNAEQgMAEgBAJQgCAJAJAIIATANIAPAKQATANAIALQALAQgEATQgJAygxALQgRADgPAAQgnAAglgUg");
	this.shape_2.setTransform(5.4,44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BnQgCgDgBgJIgPiLQgDgbgIgIQgHgJgbgJQADgEAGAAIAIAAIBFAAQAHgBACADQADACAAAHIAIB3IAlhCIAfg3QAGgKAKABIAvAAQABAEgCAEIgEAGIhpC6QgHALgKAAQgRgCgSACIgDAAQgGAAgDgDg");
	this.shape_3.setTransform(-22.8,44.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnPA7QgEgEABgLQABgsgBgtQAAgKADgEQAEgDAJAAIOHAAQAJAAACACQAEADAAAJIgBBdQAAAPgCABQgDACgPgCIgSABIttABQgLAAgEgEg");
	this.shape_4.setTransform(-0.4,67.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Am8A/QgQAAgDgDQgDgDAAgQIAAhZQgBgJADgCQADgDAIAAIOKAAQAJAAADADQADADAAAJQgCArABA2QABAIgDACQgDADgHAAg");
	this.shape_5.setTransform(-0.5,21.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AnrFXQgKAAgDgDQgEgDAAgKQABlHgBlGQAAgKADgDQADgEAKAAQHsABHtgBQAKABADACQADADAAAKIAAKOQAAAKgEADQgDADgKAAgAHcFHQAKAAADgDQADgDAAgJIAAprQAAgKgDgEQgDgDgKAAIu4AAQgKAAgEADQgDAEAAAKQABE1gBE1QAAAJADAEQADADAKAAIHdAAIHcAAg");
	this.shape_6.setTransform(-0.4,44.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+CNQgEgFAGgcQAXhlAZh0QAGgZAGgGQAHgFAaAAIAGAAQATAAAEAEQAEAFgEATIgzDmQgFAWgGAGQgHAFgWAAQgdAAgEgFg");
	this.shape_7.setTransform(65.3,-31.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhdBvQgSgJgIgTQgHgSAGgYQAGgYARgOQAbgVA5gJQAfgDAPgDQAEAAAFgDIAIgGIgGgLQgDgHgEgBQgWgHgVABQgQAAgeAIQgRAFgDgDQgEgDADgRQAFgfAegDQApgGAWAAQAiAAAcAKQAVAHAJAMQAIANgCAVQgDASgPBFIgPA7QgDASgUABIgaABQgOgBgDgCQgDgCgDgLIgiAMQgVAHgPACIgNABQgPAAgNgHgAABANIggAJQgJADgEAIQgEAJACAKQAEASAXABQAaABAPgRQAPgRgBgiIgjAJg");
	this.shape_8.setTransform(-32.3,-28.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhdBvQgSgJgIgTQgIgUAHgYQAHgYATgOQAcgUA1gIQAfgDAQgDQAEAAAEgDIAIgFQgGgQgFgCQgdgJgQABQgTABgmAKIgJAAQgKguArgJQBFgNA0APQAyAOgKAyQgEAYgXBfIgCAKQgBAGgCADQgLAQgJACQgRAEgVgEQgEgBgFgFIgGgIIghALQgUAHgOACIgNABQgRAAgNgHgAgiAYQgFADgDAJQgEAIABAIQAAAJAHAFQAHAFAKAAQAfgCANgNQANgNABgiIgKAAQglAAgYAPg");
	this.shape_9.setTransform(45.7,-28.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AheClIgIAAIgagFIAIgZQAPgcAGgHQAPgTgGgjIghi8QgCgMAEgFQAEgFANAAQAqgBAIAIQAEAEAGAkIAMBHIADANIAFACIBAhuQAPgZAZACIAhAAQANAAACAEQACADgGALIgnBDIh+DYQgRAdgdAAIgHgBg");
	this.shape_10.setTransform(-5.4,-23);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AheCUIghAAQgMAAgEgFQgDgFACgMIAoiqQAJgmAJgpQAFgXAZAAIA0AAIAAgBIBKAFQArAEAVAgQAUAfgOApQgLAigbATQgXASgmAIQgWAFguACQgXACgFAUIgLA0QgFAWgUAAIgDAAgAgFhaQgKACgDALQgJAcgFAeQAAADAFAGQAEAGADAAQAogEASgHQAOgEAHgPQAGgPgEgQQgEgXghgCIgMgBIgRABg");
	this.shape_11.setTransform(21.3,-31.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiNCPQgGgGAHgdQAPg7AnitQAFgXAUAAQBWABAsADQA5AEAOAvQAQA1gmAqQgUAWgdALQgYAJgiAEQgQADgYAAQgVAAgFAUIgKAoQgGAbgFAEQgGAFgcAAIgHAAQgUAAgEgFgAgNhXQgEADgEALIgLAvQgCANAFAEQAFAFATAAIARgEQAOgCAKgEQAagMAAgfQgBgXgQgGQgSgGgLgBIgEAAQgNAAgMAGg");
	this.shape_12.setTransform(-56.7,-31.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_13.setTransform(73.7,-72.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_14.setTransform(73.7,-76.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_15.setTransform(73.7,-80.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").p("Ai4ACID0hRIB9BSIj0BNg");
	this.shape_16.setTransform(-68,-75.7,1,1,0,0,0,0.5,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ai4AFIB5hhID4BiIinBXg");
	this.shape_17.setTransform(-68.6,-76);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgeAdQgdAegpAAI5LAAQgpAAgdgeQgegdAAgpIAA5LQAAgpAegdQAdgeApAAIZLAAQApAAAdAeQAeAdAAApg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_19.setTransform(0,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-91.5,183.1,183.1);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvBpIgEgfIhEAAIgRAfIg9AAIBqjHQAFgLALABIA4AAQAFAAADABQACACABAGIASDIgAApAgIgGhgIgqBfIAwABg");
	this.shape.setTransform(23.2,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBqIgJAAQgXAAgCgEQgDgEAHgWQAhhpAShAQACgHADgDQADgDAHABIAPAAQAXAAADADQADAEgHAWIgxCjQgDAMgFAEQgEADgGAAIgGAAg");
	this.shape_1.setTransform(-8,44.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhbBbQgKgFAGgIIADgDIAIgPQAFgJAFgDQAGgEAJAGIAOAJQAZAHANgBQASgBAEgQQACgHgFgFQgCgDgIgFQgggVgHgHQgYgUADgeQADgdAbgRQAWgOAdAAQAkAAAgATQAMAHgJAIIgEAEIgJAMQgFAHgFACQgFADgHgFIgMgJQgVgHgNAEQgMAEgBAJQgCAJAJAIIATANIAPAKQATANAIALQALAQgEATQgJAygxALQgRADgPAAQgnAAglgUg");
	this.shape_2.setTransform(5.4,44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BnQgCgDgBgJIgPiLQgDgbgIgIQgHgJgbgJQADgEAGAAIAIAAIBFAAQAHgBACADQADACAAAHIAIB3IAlhCIAfg3QAGgKAKABIAvAAQABAEgCAEIgEAGIhpC6QgHALgKAAQgRgCgSACIgDAAQgGAAgDgDg");
	this.shape_3.setTransform(-22.8,44.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnPA7QgEgEABgLQABgsgBgtQAAgKADgEQAEgDAJAAIOHAAQAJAAACACQAEADAAAJIgBBdQAAAPgCABQgDACgPgCIgSABIttABQgLAAgEgEg");
	this.shape_4.setTransform(-0.4,67.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Am8A/QgQAAgDgDQgDgDAAgQIAAhZQgBgJADgCQADgDAIAAIOKAAQAJAAADADQADADAAAJQgCArABA2QABAIgDACQgDADgHAAg");
	this.shape_5.setTransform(-0.5,21.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AnrFXQgKAAgDgDQgEgDAAgKQABlHgBlGQAAgKADgDQADgEAKAAQHsABHtgBQAKABADACQADADAAAKIAAKOQAAAKgEADQgDADgKAAgAHcFHQAKAAADgDQADgDAAgJIAAprQAAgKgDgEQgDgDgKAAIu4AAQgKAAgEADQgDAEAAAKQABE1gBE1QAAAJADAEQADADAKAAIHdAAIHcAAg");
	this.shape_6.setTransform(-0.4,44.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+CNQgEgFAGgcQAXhlAZh0QAGgZAGgGQAHgFAaAAIAGAAQATAAAEAEQAEAFgEATIgzDmQgFAWgGAGQgHAFgWAAQgdAAgEgFg");
	this.shape_7.setTransform(65.3,-31.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhdBvQgSgJgIgTQgHgSAGgYQAGgYARgOQAbgVA5gJQAfgDAPgDQAEAAAFgDIAIgGIgGgLQgDgHgEgBQgWgHgVABQgQAAgeAIQgRAFgDgDQgEgDADgRQAFgfAegDQApgGAWAAQAiAAAcAKQAVAHAJAMQAIANgCAVQgDASgPBFIgPA7QgDASgUABIgaABQgOgBgDgCQgDgCgDgLIgiAMQgVAHgPACIgNABQgPAAgNgHgAABANIggAJQgJADgEAIQgEAJACAKQAEASAXABQAaABAPgRQAPgRgBgiIgjAJg");
	this.shape_8.setTransform(-32.3,-28.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhdBvQgSgJgIgTQgIgUAHgYQAHgYATgOQAcgUA1gIQAfgDAQgDQAEAAAEgDIAIgFQgGgQgFgCQgdgJgQABQgTABgmAKIgJAAQgKguArgJQBFgNA0APQAyAOgKAyQgEAYgXBfIgCAKQgBAGgCADQgLAQgJACQgRAEgVgEQgEgBgFgFIgGgIIghALQgUAHgOACIgNABQgRAAgNgHgAgiAYQgFADgDAJQgEAIABAIQAAAJAHAFQAHAFAKAAQAfgCANgNQANgNABgiIgKAAQglAAgYAPg");
	this.shape_9.setTransform(45.7,-28.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AheClIgIAAIgagFIAIgZQAPgcAGgHQAPgTgGgjIghi8QgCgMAEgFQAEgFANAAQAqgBAIAIQAEAEAGAkIAMBHIADANIAFACIBAhuQAPgZAZACIAhAAQANAAACAEQACADgGALIgnBDIh+DYQgRAdgdAAIgHgBg");
	this.shape_10.setTransform(-5.4,-23);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AheCUIghAAQgMAAgEgFQgDgFACgMIAoiqQAJgmAJgpQAFgXAZAAIA0AAIAAgBIBKAFQArAEAVAgQAUAfgOApQgLAigbATQgXASgmAIQgWAFguACQgXACgFAUIgLA0QgFAWgUAAIgDAAgAgFhaQgKACgDALQgJAcgFAeQAAADAFAGQAEAGADAAQAogEASgHQAOgEAHgPQAGgPgEgQQgEgXghgCIgMgBIgRABg");
	this.shape_11.setTransform(21.3,-31.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiNCPQgGgGAHgdQAPg7AnitQAFgXAUAAQBWABAsADQA5AEAOAvQAQA1gmAqQgUAWgdALQgYAJgiAEQgQADgYAAQgVAAgFAUIgKAoQgGAbgFAEQgGAFgcAAIgHAAQgUAAgEgFgAgNhXQgEADgEALIgLAvQgCANAFAEQAFAFATAAIARgEQAOgCAKgEQAagMAAgfQgBgXgQgGQgSgGgLgBIgEAAQgNAAgMAGg");
	this.shape_12.setTransform(-56.7,-31.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_13.setTransform(73.7,-72.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_14.setTransform(73.7,-76.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_15.setTransform(73.7,-80.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").p("Ai4ACID0hRIB9BSIj0BNg");
	this.shape_16.setTransform(-68,-75.7,1,1,0,0,0,0.5,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ai4AFIB5hhID4BiIinBXg");
	this.shape_17.setTransform(-68.6,-76);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgeAdQgdAegpAAI5LAAQgpAAgdgeQgegdAAgpIAA5LQAAgpAegdQAdgeApAAIZLAAQApAAAdAeQAeAdAAApg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_19.setTransform(0,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-91.5,183.1,183.1);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7400").s().p("AiuCvQhIhJAAhmQAAhlBIhJQBJhIBlAAQBmAABJBIQBIBJAABlQAABmhIBJQhJBIhmAAQhlAAhJhIgAADAVIg/C5QgBAEAFABQATAGAZABQApADAngNQAFgBgCgEIhDi3gAhfDDIhnkaQgRAggDArQgCAuAQAqQAfBRBOAmgAC/hkIABAEQADAogOAoIhHDNQAkgVAWgcQBXhwg9iAIgCgDQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABgAhkhwQAAAHgIABIgZADIBQDsIAviMQABgEgCgDIgfhWQgCgEgEAAIgTgCQgIgBABgIQAAgIAJAAIAJAAQAjADAYgBIAigCIAMAAQAIgBACAIQABAJgKABIgYADIBPDqQAMgrAUg8QATg5gigyQgIgLgFgMQgHgRADgOQAHgZAfgFQhOhGhnAQQhjAQgwBQIAVAAIAygCIACAAQAJAAgBAJg");
	this.shape.setTransform(7,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkBJkQglglAAg0QAAglAVgfQASgeAhgPIAAhjImEAAQgQAAgLgLQgLgMAAgQIAAmCIBgAAQAPAhAeATQAeAUAlAAQA0AAAlglQAlglAAg0QAAg0glglQglgkg0AAQglAAgeAUQgeATgPAgIhgAAIAAmDQAAgQALgLQALgLAQAAIGEAAIAABdQghAQgSAeQgVAfAAAlQAAA0AlAkQAlAlA0AAQA0AAAlglQAkgkAAg0QAAglgUgfQgTgegggQIAAhdIGCAAQAQAAALALQAMALAAAQIAAGDIBkAAQAPggAegTQAfgUAkAAQA0AAAlAkQAlAlAAA0QAAA0glAlQglAlg0AAQgkAAgfgUQgegTgPghIhkAAIAAGCQAAAQgMAMQgLALgQAAImCAAIAABjQAgAPATAeQAUAfAAAlQAAA0gkAlQglAkg0AAQg0AAglgkg");
	this.shape_1.setTransform(7.4,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_2.setTransform(73.7,-72.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_3.setTransform(73.7,-76.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_4.setTransform(73.7,-80.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").p("Ai4ACID1hRIB8BSIj0BNg");
	this.shape_5.setTransform(-68,-75.7,1,1,0,0,0,0.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai4AFIB6hhID3BiIinBXg");
	this.shape_6.setTransform(-68.5,-76);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgeAdQgdAegpAAI5LAAQgpAAgdgeQgegdAAgpIAA5LQAAgpAegdQAdgeApAAIZLAAQApAAAdAeQAeAdAAApg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_8.setTransform(0,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-91.5,183.1,186.9);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7400").s().p("AiuCvQhIhJAAhmQAAhlBIhJQBJhIBlAAQBmAABJBIQBIBJAABlQAABmhIBJQhJBIhmAAQhlAAhJhIgAADAVIg/C5QgBAEAFABQATAGAZABQApADAngNQAFgBgCgEIhDi3gAhfDDIhnkaQgRAggDArQgCAuAQAqQAfBRBOAmgAC/hkIABAEQADAogOAoIhHDNQAkgVAWgcQBXhwg9iAIgCgDQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABgAhkhwQAAAHgIABIgZADIBQDsIAviMQABgEgCgDIgfhWQgCgEgEAAIgTgCQgIgBABgIQAAgIAJAAIAJAAQAjADAYgBIAigCIAMAAQAIgBACAIQABAJgKABIgYADIBPDqQAMgrAUg8QATg5gigyQgIgLgFgMQgHgRADgOQAHgZAfgFQhOhGhnAQQhjAQgwBQIAVAAIAygCIACAAQAJAAgBAJg");
	this.shape.setTransform(7,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkBJkQglglAAg0QAAglAVgfQASgeAhgPIAAhjImEAAQgQAAgLgLQgLgMAAgQIAAmCIBgAAQAPAhAeATQAeAUAlAAQA0AAAlglQAlglAAg0QAAg0glglQglgkg0AAQglAAgeAUQgeATgPAgIhgAAIAAmDQAAgQALgLQALgLAQAAIGEAAIAABdQghAQgSAeQgVAfAAAlQAAA0AlAkQAlAlA0AAQA0AAAlglQAkgkAAg0QAAglgUgfQgTgegggQIAAhdIGCAAQAQAAALALQAMALAAAQIAAGDIBkAAQAPggAegTQAfgUAkAAQA0AAAlAkQAlAlAAA0QAAA0glAlQglAlg0AAQgkAAgfgUQgegTgPghIhkAAIAAGCQAAAQgMAMQgLALgQAAImCAAIAABjQAgAPATAeQAUAfAAAlQAAA0gkAlQglAkg0AAQg0AAglgkg");
	this.shape_1.setTransform(7.4,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_2.setTransform(73.7,-72.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_3.setTransform(73.7,-76.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_4.setTransform(73.7,-80.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").p("Ai4ACID1hRIB8BSIj0BNg");
	this.shape_5.setTransform(-68,-75.7,1,1,0,0,0,0.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai4AFIB6hhID3BiIinBXg");
	this.shape_6.setTransform(-68.5,-76);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgeAdQgdAegpAAI5LAAQgpAAgdgeQgegdAAgpIAA5LQAAgpAegdQAdgeApAAIZLAAQApAAAdAeQAeAdAAApg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_8.setTransform(0,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-91.5,183.1,186.9);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0A/IAAh6IAdAAIADAbIABAAQAEgIAGgGQAGgFAFgEQAHgDAGgCQAIgCAHAAQALAAAMAFIgHAeQgMgDgKAAQgFAAgGABQgGACgFAEQgFAEgEAFQgGAGgDAIIAAA/g");
	this.shape.setTransform(60.3,67.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTA8QgMgEgJgJQgKgIgFgMIgEgMIgBgPQAAgJAFgSQAFgLAKgIQAIgJAMgFQAMgEALAAQAOABALAEQALAEAHAJQAIAHADALQAEALAAANIgCAPIhTAAQACAGADAGQADAEAFAEQAEACAGACQAGACAHgBQAIAAAIgBQAIgDAIgEIAMAWQgLAHgMAEQgNADgNAAQgNABgNgFgAAdgNQgCgLgGgGQgGgGgLAAQgKAAgHAGQgHAGgDALIA0AAIAAAAg");
	this.shape_1.setTransform(44.6,67.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7BWIAAioIAeAAIADAMIAAAAQAIgHAKgEQAJgEAJAAQAMAAAJAEQAJAFAHAIQAGAIADAMQAEALAAAPQAAAPgFAMQgEAMgIAJQgHAIgKAFQgJAEgLAAQgHAAgIgDQgIgEgGgGIgBAAIACAUIAAAkgAgLg0QgGACgFAGIAAAxQAFAEAGACQAFACAFAAQAEAAAEgCQAFgCADgEQADgFACgFQACgIAAgJQAAgIgBgGQgCgHgCgEQgDgEgEgCQgFgCgFAAQgGAAgFADg");
	this.shape_2.setTransform(30,69.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXA8QgLgEgJgJQgJgIgEgMIgFgMIgBgPQAAgKAGgRQAEgLAJgJQAJgIALgFQAMgEALAAQAMAAAMAEQALAFAJAIQAJAJAEALQAGARAAAKIgBAPIgFAMQgEAMgJAIQgJAJgLAEQgMAFgMgBQgLABgMgFgAgKgfQgFACgDAEQgDAFgCAHQgCAGAAAHQAAAIACAHQACAGADAEQADAFAFADQAFACAFAAQAGAAAFgCQAFgDADgFQADgEACgGQABgHABgIQgBgHgBgGQgCgHgDgFQgDgEgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_3.setTransform(14.8,67.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADBVQgIgEgGgGQgGgHgDgJQgDgKAAgLIAAhhIgkAAIAAgcIBHAAIAAB+QAAAKAHAGQAFAEAJAAQAJAAAKgEIAIAbQgVAGgQAAQgLABgJgEg");
	this.shape_4.setTransform(0,64.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTA8QgMgEgJgJQgKgIgFgMIgEgMIgBgPQAAgJAFgSQAFgLAKgIQAIgJAMgFQAMgEALAAQAOABALAEQALAEAHAJQAIAHADALQAEALAAANIgCAPIhTAAQACAGADAGQADAEAFAEQAEACAGACQAGACAHgBQAIAAAIgBQAIgDAIgEIAMAWQgLAHgMAEQgNADgNAAQgNABgNgFgAAdgNQgCgLgGgGQgGgGgLAAQgKAAgHAGQgHAGgDALIA0AAIAAAAg");
	this.shape_5.setTransform(-15,67.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUA+Iguh7IAlAAIATA7IAKAlIABAAIAMglIATg7IAjAAIgtB7g");
	this.shape_6.setTransform(-29.9,67.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTA8QgMgEgJgJQgKgIgFgMIgEgMIgBgPQAAgJAFgSQAFgLAKgIQAIgJAMgFQAMgEALAAQAOABALAEQALAEAHAJQAIAHADALQAEALAAANIgCAPIhTAAQACAGADAGQADAEAFAEQAEACAGACQAGACAHgBQAIAAAIgBQAIgDAIgEIAMAWQgLAHgMAEQgNADgNAAQgNABgNgFgAAdgNQgCgLgGgGQgGgGgLAAQgKAAgHAGQgHAGgDALIA0AAIAAAAg");
	this.shape_7.setTransform(-44.8,67.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag8BRIAAihIAsAAQAMAAAUAEIANAHIALAIQAFAFAEAHQAEAFADAIQADAIABAJQABAJAAAKQAAAJgBAKQgBAJgDAHQgDAIgEAGQgEAHgFAFIgLAJIgNAGQgSAFgLAAgAgYAzIAGAAQAKAAAIgCQAHgDAFgGQAGgGADgLQADgKAAgNQAAgOgDgKQgDgJgGgGQgFgGgHgDQgIgDgKABIgGAAg");
	this.shape_8.setTransform(-59.3,65.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AlMFOQiKiLgBjDQABjCCKiKQCKiLDCAAQDDAACKCLQCLCKAADCQAADDiLCLQiKCJjDAAQjCAAiKiJgAlClCQiGCGAAC8QAAC9CGCGQCGCGC8AAQC9AACGiGQCGiGAAi9QAAi8iGiGQiGiGi9AAQi8AAiGCGg");
	this.shape_9.setTransform(0.5,-5.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#98C6D5").s().p("AgBgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIACAEIgCAHQgBgDAAgEg");
	this.shape_10.setTransform(36.1,-24.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AAfhwQAahMgFhIIgBgFQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQBxDviiDOQgmAzhEAog");
	this.shape_11.setTransform(30.9,2.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AhXAqQgehMAFhYQAFhQAeg7IC/ILQiRhHg4iVg");
	this.shape_12.setTransform(-28.6,4.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AggC3QgpgCgqgLQgFgCgBgBQgCgDACgFIB1lUIADgCIB7FSQACAFgDACIgGACQg8AUg/AAIgYgBg");
	this.shape_13.setTransform(1.5,16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AjXhuIAugFQAPgBAAgPQAAgHgFgFQgFgFgJABIiDAFQArhHBJgwQBHguBWgNQC/gfCQCDQgfAEgQANQgRAOgGAZQgGAZANAfQAJAWAOAVQA/BcgiBrQghBkgaBaIiTmyIAtgFQAJgBAEgFQAFgFgCgHQgDgPgQABIgVABIg+ADQgmAChKgFIgQgBQgQAAgBAPQgBAPAOACIAkAEQAIAAADAIIA5CdQACAHgCAGIhWEEg");
	this.shape_14.setTransform(-2.7,-13.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_15.setTransform(73.7,-72.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_16.setTransform(73.7,-76.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_17.setTransform(73.7,-80.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").p("Ai4ACID1hRIB8BSIj0BNg");
	this.shape_18.setTransform(-68,-75.7,1,1,0,0,0,0.5,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ai4AFIB5hhID4BiIinBXg");
	this.shape_19.setTransform(-68.5,-76);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgeAdQgdAegpAAI5LAAQgpAAgdgeQgegdAAgpIAA5LQAAgpAegdQAdgeApAAIZLAAQApAAAdAeQAeAdAAApg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_21.setTransform(0,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-91.5,183.1,186.9);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0A/IAAh6IAdAAIADAbIABAAQAEgIAGgGQAGgFAFgEQAHgDAGgCQAIgCAHAAQALAAAMAFIgHAeQgMgDgKAAQgFAAgGABQgGACgFAEQgFAEgEAFQgGAGgDAIIAAA/g");
	this.shape.setTransform(60.3,67.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTA8QgMgEgJgJQgKgIgFgMIgEgMIgBgPQAAgJAFgSQAFgLAKgIQAIgJAMgFQAMgEALAAQAOABALAEQALAEAHAJQAIAHADALQAEALAAANIgCAPIhTAAQACAGADAGQADAEAFAEQAEACAGACQAGACAHgBQAIAAAIgBQAIgDAIgEIAMAWQgLAHgMAEQgNADgNAAQgNABgNgFgAAdgNQgCgLgGgGQgGgGgLAAQgKAAgHAGQgHAGgDALIA0AAIAAAAg");
	this.shape_1.setTransform(44.6,67.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7BWIAAioIAeAAIADAMIAAAAQAIgHAKgEQAJgEAJAAQAMAAAJAEQAJAFAHAIQAGAIADAMQAEALAAAPQAAAPgFAMQgEAMgIAJQgHAIgKAFQgJAEgLAAQgHAAgIgDQgIgEgGgGIgBAAIACAUIAAAkgAgLg0QgGACgFAGIAAAxQAFAEAGACQAFACAFAAQAEAAAEgCQAFgCADgEQADgFACgFQACgIAAgJQAAgIgBgGQgCgHgCgEQgDgEgEgCQgFgCgFAAQgGAAgFADg");
	this.shape_2.setTransform(30,69.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXA8QgLgEgJgJQgJgIgEgMIgFgMIgBgPQAAgKAGgRQAEgLAJgJQAJgIALgFQAMgEALAAQAMAAAMAEQALAFAJAIQAJAJAEALQAGARAAAKIgBAPIgFAMQgEAMgJAIQgJAJgLAEQgMAFgMgBQgLABgMgFgAgKgfQgFACgDAEQgDAFgCAHQgCAGAAAHQAAAIACAHQACAGADAEQADAFAFADQAFACAFAAQAGAAAFgCQAFgDADgFQADgEACgGQABgHABgIQgBgHgBgGQgCgHgDgFQgDgEgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_3.setTransform(14.8,67.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADBVQgIgEgGgGQgGgHgDgJQgDgKAAgLIAAhhIgkAAIAAgcIBHAAIAAB+QAAAKAHAGQAFAEAJAAQAJAAAKgEIAIAbQgVAGgQAAQgLABgJgEg");
	this.shape_4.setTransform(0,64.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTA8QgMgEgJgJQgKgIgFgMIgEgMIgBgPQAAgJAFgSQAFgLAKgIQAIgJAMgFQAMgEALAAQAOABALAEQALAEAHAJQAIAHADALQAEALAAANIgCAPIhTAAQACAGADAGQADAEAFAEQAEACAGACQAGACAHgBQAIAAAIgBQAIgDAIgEIAMAWQgLAHgMAEQgNADgNAAQgNABgNgFgAAdgNQgCgLgGgGQgGgGgLAAQgKAAgHAGQgHAGgDALIA0AAIAAAAg");
	this.shape_5.setTransform(-15,67.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUA+Iguh7IAlAAIATA7IAKAlIABAAIAMglIATg7IAjAAIgtB7g");
	this.shape_6.setTransform(-29.9,67.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTA8QgMgEgJgJQgKgIgFgMIgEgMIgBgPQAAgJAFgSQAFgLAKgIQAIgJAMgFQAMgEALAAQAOABALAEQALAEAHAJQAIAHADALQAEALAAANIgCAPIhTAAQACAGADAGQADAEAFAEQAEACAGACQAGACAHgBQAIAAAIgBQAIgDAIgEIAMAWQgLAHgMAEQgNADgNAAQgNABgNgFgAAdgNQgCgLgGgGQgGgGgLAAQgKAAgHAGQgHAGgDALIA0AAIAAAAg");
	this.shape_7.setTransform(-44.8,67.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag8BRIAAihIAsAAQAMAAAUAEIANAHIALAIQAFAFAEAHQAEAFADAIQADAIABAJQABAJAAAKQAAAJgBAKQgBAJgDAHQgDAIgEAGQgEAHgFAFIgLAJIgNAGQgSAFgLAAgAgYAzIAGAAQAKAAAIgCQAHgDAFgGQAGgGADgLQADgKAAgNQAAgOgDgKQgDgJgGgGQgFgGgHgDQgIgDgKABIgGAAg");
	this.shape_8.setTransform(-59.3,65.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AlMFOQiKiLgBjDQABjCCKiKQCKiLDCAAQDDAACKCLQCLCKAADCQAADDiLCLQiKCJjDAAQjCAAiKiJgAlClCQiGCGAAC8QAAC9CGCGQCGCGC8AAQC9AACGiGQCGiGAAi9QAAi8iGiGQiGiGi9AAQi8AAiGCGg");
	this.shape_9.setTransform(0.5,-5.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#98C6D5").s().p("AgBgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIACAEIgCAHQgBgDAAgEg");
	this.shape_10.setTransform(36.1,-24.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AAfhwQAahMgFhIIgBgFQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQBxDviiDOQgmAzhEAog");
	this.shape_11.setTransform(30.9,2.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AhXAqQgehMAFhYQAFhQAeg7IC/ILQiRhHg4iVg");
	this.shape_12.setTransform(-28.6,4.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AggC3QgpgCgqgLQgFgCgBgBQgCgDACgFIB1lUIADgCIB7FSQACAFgDACIgGACQg8AUg/AAIgYgBg");
	this.shape_13.setTransform(1.5,16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AjXhuIAugFQAPgBAAgPQAAgHgFgFQgFgFgJABIiDAFQArhHBJgwQBHguBWgNQC/gfCQCDQgfAEgQANQgRAOgGAZQgGAZANAfQAJAWAOAVQA/BcgiBrQghBkgaBaIiTmyIAtgFQAJgBAEgFQAFgFgCgHQgDgPgQABIgVABIg+ADQgmAChKgFIgQgBQgQAAgBAPQgBAPAOACIAkAEQAIAAADAIIA5CdQACAHgCAGIhWEEg");
	this.shape_14.setTransform(-2.7,-13.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_15.setTransform(73.7,-72.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_16.setTransform(73.7,-76.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_17.setTransform(73.7,-80.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").p("Ai4ACID1hRIB8BSIj0BNg");
	this.shape_18.setTransform(-68,-75.7,1,1,0,0,0,0.5,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ai4AFIB5hhID4BiIinBXg");
	this.shape_19.setTransform(-68.5,-76);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgeAdQgdAegpAAI5LAAQgpAAgdgeQgegdAAgpIAA5LQAAgpAegdQAdgeApAAIZLAAQApAAAdAeQAeAdAAApg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_21.setTransform(0,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-91.5,183.1,186.9);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAABeQgLgFgGgHQgHgIgDgLQgCgLAAgOIAAhEIgqAAIAAgTIAqgCIAEguIAUAAIAAAuIBHAAIAAAVIhHAAIAABEQAAAKACAIQACAHADAFQAEAFAHACQAIADAKAAQAOAAAVgGIAGASQgcAIgSAAQgQAAgKgEg");
	this.shape.setTransform(126.1,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoBLIAAhXQAAgKgCgIQgCgHgEgFQgEgFgGgDQgHgCgJAAQgLAAgLAGQgKAGgNAOIAABlIgZAAIAAiRIAVAAIACAZIABAAQANgOALgGQAIgEAHgCQAHgDAIAAQANAAAJAEQAKAEAGAHQAHAIACALQADALAAAOIAABag");
	this.shape_1.setTransform(108.2,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWBIQgOgGgLgJQgKgLgHgOIgEgPIgBgRQAAgLAFgUQAHgOAKgKQAKgKAOgFQANgFAOgBQAQAAAMAGQAMAFAJAIQAJAJAEANQAFAMgBAQIgBAOIhyAAQACAMAEAKQAFAJAHAHQAIAFAJAEQAKADALAAQAMgBAMgDQAKgEALgGIAJAQQgMAIgNAFQgPAEgRAAQgPAAgPgEgAAwgMQgBgKgDgJQgDgIgHgGQgFgGgHgCQgIgDgKAAQgIAAgIADQgIADgHAGQgGAGgFAHQgFAJgBAKIBcAAIAAAAg");
	this.shape_2.setTransform(90,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzBLIAAhmQAAgNgFgGQgDgGgJAAQgGAAgGAFQgEAFgHAMIAABpIgVAAIAAhmQgBgNgDgGQgDgGgJAAQgHAAgFAFQgGAFgFAMIAABpIgZAAIAAiRIATAAIADATIAAAAQAHgLAHgFQAIgHALAAQALAAAHAHQAGAGADANQAHgNAHgGQAJgHAMAAQAHAAAGADQAGADAFAGQADAGACAIQADAIAAALIAABog");
	this.shape_3.setTransform(72.2,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCBqIAAjPIAVAAIACATIAAAAQALgLANgFQAOgGAMgBQAPABALAFQALAFAIAKQAHAKAEANQAEAOAAARQAAASgFAOQgGAPgJAKQgJAKgMAFQgMAGgNgBQgKAAgLgEQgNgGgJgIIgBAAIABAbIAAAygAgThPQgLAGgMALIAABIQAKAIAMAFQAJAEAJAAQAIAAAJgEQAIgEAGgIQAGgHADgKQAEgLAAgNQAAgNgDgJQgCgKgFgHQgFgHgIgEQgIgEgKAAQgKAAgKAFg");
	this.shape_4.setTransform(54.4,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBIQgMgGgKgJQgLgLgFgOQgEgJgCgWQAAgMAGgUQAFgOALgLQAKgJAMgFQANgGAOAAQAOAAANAGQANAFALAJQAKALAFAOQAGAUAAAMQgCAWgEAJQgFAOgKALQgLAJgNAGQgNAEgOAAQgOAAgNgEgAgSgzQgJAEgFAHQgHAIgDAKQgDALgBAMQABAMADAKQADALAHAHQAFAHAJAEQAIAEAKAAQAKAAAJgEQAJgEAGgHQAGgHADgLQAEgKAAgMQAAgMgEgLQgDgKgGgIQgGgHgJgEQgJgEgKAAQgKAAgIAEg");
	this.shape_5.setTransform(35.9,3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJBqQgJgEgFgGQgGgIgEgJQgDgKAAgNIAAiQIgxAAIAAgUIBJAAIAACmQAAAIACAFQACAGAEAEQAHAHAOAAQANAAAOgHIAGATQgXAIgQAAQgLAAgJgCg");
	this.shape_6.setTransform(18.2,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWBIQgOgGgLgJQgKgLgHgOIgEgPIgBgRQAAgLAFgUQAHgOAKgKQAKgKAOgFQANgFAOgBQAQAAAMAGQAMAFAJAIQAJAJAEANQAFAMgBAQIgBAOIhyAAQACAMAEAKQAFAJAHAHQAIAFAJAEQAKADALAAQAMgBAMgDQAKgEALgGIAJAQQgMAIgNAFQgPAEgRAAQgPAAgPgEgAAwgMQgBgKgDgJQgDgIgHgGQgFgGgHgCQgIgDgKAAQgIAAgIADQgIADgHAGQgGAGgFAHQgFAJgBAKIBcAAIAAAAg");
	this.shape_7.setTransform(0,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMBJIg+iRIAZAAIAiBSIAPArIACAAIAQgrIAhhSIAYAAIg8CRg");
	this.shape_8.setTransform(-18.1,3.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWBIQgOgGgLgJQgKgLgHgOIgEgPIgBgRQAAgLAFgUQAHgOAKgKQAKgKAOgFQANgFAOgBQAQAAAMAGQAMAFAJAIQAJAJAEANQAFAMgBAQIgBAOIhyAAQACAMAEAKQAFAJAHAHQAIAFAJAEQAKADALAAQAMgBAMgDQAKgEALgGIAJAQQgMAIgNAFQgPAEgRAAQgPAAgPgEgAAwgMQgBgKgDgJQgDgIgHgGQgFgGgHgCQgJgDgJAAQgIAAgIADQgIADgHAGQgGAGgFAHQgFAJgBAKIBcAAIAAAAg");
	this.shape_9.setTransform(-36,3.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhFBiIAAjDIAxAAIAUABQAKACAIADQAIADAIAFIAMALIAKAOQAFAHADAJQAGAaAAAQQgCAdgEAMQgDAJgFAIQgDAIgHAGQgFAGgHAFQgHAFgJAEQgIADgKABQgJACgKAAgAgsBOIAWAAQAQAAANgGQAMgFAIgKQAJgKAEgPQAEgOAAgSQAAgTgEgOQgEgOgJgKQgIgKgMgFQgNgFgQAAIgWAAg");
	this.shape_10.setTransform(-53.5,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVBnQgMgFgLgJIAAAAIgCAQIgUAAIAAjVIAYAAIAAA7IgBAcIABAAQALgLANgFQANgHAMAAQAOABAMAFQAKAFAJAKQAHAKAEANQAEANAAAQQAAATgFAPQgGAPgJAKQgJAKgMAFQgMAGgNgBQgJABgNgGgAgTgSQgLAGgMALIAABIQALAIALAFQAJAEAJAAQAIAAAJgEQAIgEAGgIQAGgHADgLQAEgLAAgNQAAgNgDgJQgDgJgEgHQgFgHgIgEQgIgEgLAAQgJAAgKAFg");
	this.shape_11.setTransform(-89.6,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWBIQgOgGgLgJQgKgLgHgOIgEgPIgBgRQAAgLAFgUQAHgOAKgKQAKgKAOgFQANgFAOgBQAQAAAMAGQAMAFAJAIQAJAJAEANQAFAMgBAQIgBAOIhyAAQACAMAEAKQAFAJAHAHQAIAFAJAEQAKADALAAQAMgBAMgDQAKgEALgGIAJAQQgMAIgNAFQgPAEgRAAQgPAAgPgEgAAwgMQgBgKgDgJQgDgIgHgGQgFgGgHgCQgJgDgJAAQgIAAgIADQgIADgHAGQgGAGgFAHQgFAJgBAKIBcAAIAAAAg");
	this.shape_12.setTransform(-108,3.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAbBiIgThOQgFgUgDgPIAAAAIgGAjIgUBOIgeAAIgejEIAcAAIAOB7QAEAdABAQIAAAAIAKgtIAThIIAYAAIASBIQAEARAFAcIABAAIAEgtIAOh7IAbAAIgdDEg");
	this.shape_13.setTransform(-126.1,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.1,-20.8,274.2,41.7);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape.setTransform(153,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOBKIgTgGQgRgFgOgKIAHgKQANALAOAEIARAFIAUABQALAAAJgCQAIgDAFgDQAGgEADgGQADgEAAgGQgCgMgHgGQgFgEgKgEIgbgHIgYgGQgLgDgHgFQgHgFgEgGQgEgHAAgHQAAgIAEgHQADgHAHgFQAHgFALgDQALgDANgBQAOABAPAEQAPAFALAIIgHAJQgKgHgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFAEgCAEQgCAEAAAGQAAAGADAEQADAFAGADQAHAEAbAIQATADAMAEQAMAEAHAFQAGAFADAGQACAHAAAIQAAAJgEAGQgEAIgHAGQgIAFgLAEQgLACgOAAQgKABgKgCg");
	this.shape_1.setTransform(134.9,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAcBoIAAiEIhIAAIAAgLIBUAAIAACPgAAVhOQgFgEAAgHQAAgGAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAGQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_2.setTransform(115.3,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABBeQgJgFgGgIQgGgGgCgMQgDgJAAgOIAAhOIgrAAIAAgKIArgBIACgvIALAAIAAAvIBMAAIAAALIhMAAIAABQQAAALACAHQACAJAFAFQADAGAHADQAIADAMAAQALAAAKgCIASgGIADAKQgLAFgJACQgLADgNgBQgOAAgKgDg");
	this.shape_3.setTransform(99.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag2BKIAAiPIALAAIACAjIAAAAQAHgJAHgHQAHgHAJgFQAIgFAJgDQAKgDAKAAIAPABQAIACAGADIgDAMQgPgFgNAAQgJAAgIACQgJADgHAFQgIAGgIAIQgJAJgHAMIAABZg");
	this.shape_4.setTransform(82.3,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_5.setTransform(63,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag/BqIAAjQIALAAIACAVIAAAAQAMgLAOgGQAPgHAMAAQAPAAAMAFQALAFAIAKQAHAJAEAOQAEANAAARQAAASgFAOQgFAOgKAKQgJAKgNAGQgMAFgMAAQgLAAgNgGQgOgFgKgKIgBAAIABAeIAAA0gAgXhXQgOAHgNANIAABPQAMALAOAFQALAFAKAAQALAAAKgFQAKgEAHgJQAHgJAEgLQAEgMAAgPQAAgNgDgLQgDgMgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAHg");
	this.shape_6.setTransform(45.5,6.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAzBIIgfgnIgUgbIgBAAIgTAcIgeAmIgPAAIA5hJIg0hGIAPAAIAbAlIASAYIABAAIATgZIAbgkIAOAAIg1BGIA6BJg");
	this.shape_7.setTransform(26.9,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_8.setTransform(9,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYBuIAAiEIgsAAIAAgKIAsgBIAAgSQAAgNADgLQADgLAHgHQAGgIAKgEQAKgEANAAQALAAAJACQALACAKAFIgEAKQgKgEgIgCQgHgBgLAAQgLAAgJADQgHADgFAGQgEAGgDAJQgCAIAAAKIAAATIBCAAIAAALIhCAAIAACEg");
	this.shape_9.setTransform(-25.7,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaBHQgNgGgJgJQgKgKgGgOQgFgPAAgQQAAgRAFgPQAGgOAKgJQAJgLANgFQANgEANgBQAOABANAEQANAFAJALQAKAJAFAOQAGAPAAARQAAAQgGAPQgFAOgKAKQgJAJgNAGQgNAEgOAAQgNAAgNgEgAgVg6QgLAFgHAIQgHAJgEALQgFAMAAAOQAAANAFAMQAEAMAHAIQAHAJALAEQAKAFALAAQAMAAALgFQAKgEAHgJQAIgIADgMQAFgMAAgNQAAgOgFgMQgDgLgIgJQgHgIgKgFQgLgFgMAAQgLAAgKAFg");
	this.shape_10.setTransform(-45.1,3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOBKIgTgGQgRgFgOgKIAHgKQANALAOAEIARAFIAUABQALAAAJgCQAIgDAFgDQAGgEADgGQADgEAAgGQgCgMgHgGQgFgEgKgEIgbgHIgYgGQgLgDgHgFQgHgFgEgGQgEgHAAgHQAAgIAEgHQADgHAHgFQAHgFALgDQALgDANgBQAOABAPAEQAPAFALAIIgHAJQgKgHgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFAEgCAEQgCAEAAAGQAAAGADAEQADAFAGADQAHAEAbAIQATADAMAEQAMAEAHAFQAGAFADAGQACAHAAAIQAAAJgEAGQgEAIgHAGQgIAFgLAEQgLACgOAAQgKABgKgCg");
	this.shape_11.setTransform(-81.1,3.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdBKQgJgDgHgFQgIgFgDgHQgFgIAAgKQAAgMAHgJQAGgJANgGQAOgGAVgEQATgEAegDQAAgKgCgHQgDgJgEgGQgGgHgIgDQgIgEgMAAQgHAAgIACIgPAEQgNAGgLAIIgGgKQALgIAPgGIASgFQAJgCAIgBQAOABALAEQAKAEAHAHQAHAIADAKQADAKAAAMIAABbIgLAAIgCgWIAAAAQgOALgPAHQgUAHgLAAQgJAAgJgBgAADgBQgSADgLAGQgLAEgFAIQgFAGAAAKQAAAHADAFQADAGAGADQAHAFAUACQANAAAOgHQAPgGAPgNIAAgtQgcADgSADg");
	this.shape_12.setTransform(-99.2,3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_13.setTransform(-117,3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag2BKIAAiPIALAAIACAjIAAAAQAGgJAIgHQAHgHAJgFQAIgFAJgDQAKgDAKAAIAPABQAIACAGADIgDAMQgPgFgNAAQgJAAgIACQgJADgHAFQgIAGgJAIQgIAJgHAMIAABZg");
	this.shape_14.setTransform(-133.7,3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AA+BjIgXhEIhOAAIgXBEIgNAAIBFjFIANAAIBGDFgAAjAUIgMgkQgOgogJgdIAAAAIgVBFIgNAkIBFAAg");
	this.shape_15.setTransform(-153.1,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.1,-20.8,328.2,41.7);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape.setTransform(153,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOBKIgTgGQgRgFgOgKIAHgKQANALAOAEIARAFIAUABQALAAAJgCQAIgDAFgDQAGgEADgGQADgEAAgGQgCgMgHgGQgFgEgKgEIgbgHIgYgGQgLgDgHgFQgHgFgEgGQgEgHAAgHQAAgIAEgHQADgHAHgFQAHgFALgDQALgDANgBQAOABAPAEQAPAFALAIIgHAJQgKgHgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFAEgCAEQgCAEAAAGQAAAGADAEQADAFAGADQAHAEAbAIQATADAMAEQAMAEAHAFQAGAFADAGQACAHAAAIQAAAJgEAGQgEAIgHAGQgIAFgLAEQgLACgOAAQgKABgKgCg");
	this.shape_1.setTransform(134.9,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAcBoIAAiEIhIAAIAAgLIBUAAIAACPgAAVhOQgFgEAAgHQAAgGAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAGQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_2.setTransform(115.3,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABBeQgJgFgGgIQgGgGgCgMQgDgJAAgOIAAhOIgrAAIAAgKIArgBIACgvIALAAIAAAvIBMAAIAAALIhMAAIAABQQAAALACAHQACAJAFAFQADAGAHADQAIADAMAAQALAAAKgCIASgGIADAKQgLAFgJACQgLADgNgBQgOAAgKgDg");
	this.shape_3.setTransform(99.3,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag2BKIAAiPIALAAIACAjIAAAAQAHgJAHgHQAHgHAJgFQAIgFAJgDQAKgDAKAAIAPABQAIACAGADIgDAMQgPgFgNAAQgJAAgIACQgJADgHAFQgIAGgIAIQgJAJgHAMIAABZg");
	this.shape_4.setTransform(82.3,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_5.setTransform(63,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag/BqIAAjQIALAAIACAVIAAAAQAMgLAOgGQAPgHAMAAQAPAAAMAFQALAFAIAKQAHAJAEAOQAEANAAARQAAASgFAOQgFAOgKAKQgJAKgNAGQgMAFgMAAQgLAAgNgGQgOgFgKgKIgBAAIABAeIAAA0gAgXhXQgOAHgNANIAABPQAMALAOAFQALAFAKAAQALAAAKgFQAKgEAHgJQAHgJAEgLQAEgMAAgPQAAgNgDgLQgDgMgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAHg");
	this.shape_6.setTransform(45.5,6.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAzBIIgfgnIgUgbIgBAAIgTAcIgeAmIgPAAIA5hJIg0hGIAPAAIAbAlIASAYIABAAIATgZIAbgkIAOAAIg1BGIA6BJg");
	this.shape_7.setTransform(26.9,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_8.setTransform(9,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYBuIAAiEIgsAAIAAgKIAsgBIAAgSQAAgNADgLQADgLAHgHQAGgIAKgEQAKgEANAAQALAAAJACQALACAKAFIgEAKQgKgEgIgCQgHgBgLAAQgLAAgJADQgHADgFAGQgEAGgDAJQgCAIAAAKIAAATIBCAAIAAALIhCAAIAACEg");
	this.shape_9.setTransform(-25.7,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaBHQgNgGgJgJQgKgKgGgOQgFgPAAgQQAAgRAFgPQAGgOAKgJQAJgLANgFQANgEANgBQAOABANAEQANAFAJALQAKAJAFAOQAGAPAAARQAAAQgGAPQgFAOgKAKQgJAJgNAGQgNAEgOAAQgNAAgNgEgAgVg6QgLAFgHAIQgHAJgEALQgFAMAAAOQAAANAFAMQAEAMAHAIQAHAJALAEQAKAFALAAQAMAAALgFQAKgEAHgJQAIgIADgMQAFgMAAgNQAAgOgFgMQgDgLgIgJQgHgIgKgFQgLgFgMAAQgLAAgKAFg");
	this.shape_10.setTransform(-45.1,3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOBKIgTgGQgRgFgOgKIAHgKQANALAOAEIARAFIAUABQALAAAJgCQAIgDAFgDQAGgEADgGQADgEAAgGQgCgMgHgGQgFgEgKgEIgbgHIgYgGQgLgDgHgFQgHgFgEgGQgEgHAAgHQAAgIAEgHQADgHAHgFQAHgFALgDQALgDANgBQAOABAPAEQAPAFALAIIgHAJQgKgHgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFAEgCAEQgCAEAAAGQAAAGADAEQADAFAGADQAHAEAbAIQATADAMAEQAMAEAHAFQAGAFADAGQACAHAAAIQAAAJgEAGQgEAIgHAGQgIAFgLAEQgLACgOAAQgKABgKgCg");
	this.shape_11.setTransform(-81.1,3.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdBKQgJgDgHgFQgIgFgDgHQgFgIAAgKQAAgMAHgJQAGgJANgGQAOgGAVgEQATgEAegDQAAgKgCgHQgDgJgEgGQgGgHgIgDQgIgEgMAAQgHAAgIACIgPAEQgNAGgLAIIgGgKQALgIAPgGIASgFQAJgCAIgBQAOABALAEQAKAEAHAHQAHAIADAKQADAKAAAMIAABbIgLAAIgCgWIAAAAQgOALgPAHQgUAHgLAAQgJAAgJgBgAADgBQgSADgLAGQgLAEgFAIQgFAGAAAKQAAAHADAFQADAGAGADQAHAFAUACQANAAAOgHQAPgGAPgNIAAgtQgcADgSADg");
	this.shape_12.setTransform(-99.2,3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_13.setTransform(-117,3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag2BKIAAiPIALAAIACAjIAAAAQAGgJAIgHQAHgHAJgFQAIgFAJgDQAKgDAKAAIAPABQAIACAGADIgDAMQgPgFgNAAQgJAAgIACQgJADgHAFQgIAGgJAIQgIAJgHAMIAABZg");
	this.shape_14.setTransform(-133.7,3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AA+BjIgXhEIhOAAIgXBEIgNAAIBFjFIANAAIBGDFgAAjAUIgMgkQgOgogJgdIAAAAIgVBFIgNAkIBFAAg");
	this.shape_15.setTransform(-153.1,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.1,-20.8,328.2,41.7);


(lib.green_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BAD80B").s().dr(-399.6,-200.55,799.2,401.1);
	this.shape.setTransform(399.7,200.6,1.811,1.589);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.green_background, new cjs.Rectangle(-324,-118,1447.4,637.2), null);


(lib.gear_sm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgD/IAJhWQgWgLgQgPIhOAnQgLgMgOgVIA6hAIgJgVIgHgXIhVgNQgCgSABgXIBVgSQAEgWAJgWIg9g9QAJgRAOgRIBPAjQAPgQAWgNIgNhVIATgIQAIgDAMgDIArBLQAYgDAVACIAnhNQAYAFAQAGIgJBXQAVAKASAQIBMgnQAPAQAKAQIg5BBIAJAWQAEAJACAMIBWAOQACARgBAXIhVASQgDAWgKAXIA9A9QgKARgNARIhPgjQgSARgTALIANBWIgTAHIgTAGIgshKQgXADgWgCIgoBNQgUgDgTgJgAglhrQguAPgUArQgUArAQAsQAPAtArAVQAsAUArgQQAtgPAUgsQAVgqgPgtQgQgtgsgUQgYgLgZAAQgSAAgTAHg");
	this.shape.setTransform(27.4,26.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gear_sm1, new cjs.Rectangle(0,0,54.7,53.4), null);


(lib.Gear_s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZBMQgJgDgKgHIg8ATQgHgKgHgLIAogwIgBgLIAAgKIgugrQAEgKAHgMIA+ALQALgIAHgEIAOg9IAYgCIAVA7QAKADAKAHIA8gTQAIALAGAKIgpAwIACALIAAAKIAuArQgGAOgFAIIg+gMQgKAJgJAEIgNA9IgZACgAgBgfQgNAAgKAKQgIALAAAMQABAOALAIQAJAKANgCQAOAAAJgKQAIgLAAgMQgBgOgLgIQgJgJgMAAIgBABg");
	this.shape.setTransform(12.6,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Gear_s2, new cjs.Rectangle(0,0,25.2,27), null);


(lib.Gear_M2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOCpIgJg1QgOgDgOgGIgnAkQgMgIgJgHIAYgwIgJgMIgIgMIg1AGIgIgYIAwgZQgCgMACgQIgvgaIAIgZIA2AIQAJgPAIgIIgWgxIAVgPIAmAmQAPgHANgCIAKg1QANgBAMACIAJA1QAPADAMAGIAoglQAMAIAJAIIgYAwIAJALQAFAHACAGIA2gHQAEAKAEAPIgwAZQABAPgCANIAwAaIgJAYIg1gHQgGALgLAMIAWAxIgVAPIgmgmQgLAFgRAEIgKA1IgHAAIgSgBgAgog6QgZARgFAeQgFAcARAYQASAYAdAFQAcAFAYgRQAYgRAFgdQAFgcgRgYQgRgZgdgFIgMgBQgWAAgSANg");
	this.shape.setTransform(16.6,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Gear_M2, new cjs.Rectangle(0,0,33.2,34), null);


(lib.Gear_L2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsDuIAAg4QgPgEgKgEIghAtQgQgHgOgJIAVg0IgUgRIgvAdQgLgMgLgPIAognQgGgLgGgNIg3AJIgJghIAzgVIgCgbIg2gMQAAgOAEgUIA4AAIAIgZIgtghQAIgQAIgNIA0AVQAIgKAJgKIgdgwIAbgVIAnAoQAMgHAMgFIgJg3IAhgKIAVA0QAMgCAOAAIANg2QATABAOADIABA4QANADALAFIAhguQARAIANAJIgVA0IAUARIAwgdQANAOAIAMIgoAoIAMAXIA3gIIAKAhIg0AVQACAMAAAOIA2AMQAAAQgEASIg4AAIgIAZIAtAhQgHAQgJAOIg0gVQgIALgJAIIAdAwQgMAMgPAJIgngnQgNAHgLAFIAJA3IghAJIgVgzIgaACIgMA2QgQAAgSgEgAggh0QgwAOgZAsQgYArANAwQAOAwAsAZQArAYAwgNQAwgOAZgsQAYgsgNgvQgOgxgsgYQgbgQgeAAQgQAAgSAFg");
	this.shape.setTransform(24.2,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Gear_L2, new cjs.Rectangle(0,0,48.5,48.5), null);


(lib.gear_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbGFIgKhaQgSgBgYgHIgsBPQgbgKgXgLIAYhXQgSgKgQgNIhHA4QgUgSgUgVIA5hHQgNgQgLgTIhXAYQgMgYgJgbIBPgrQgFgSgDgYIhagKIAAg2IBagLQADgZAFgQIhPgtQAJgbAMgXIBXAYQAKgQAOgTIg5hHQAQgRAYgWIBHA4QASgOAQgJIgYhXQAXgMAbgIIAsBOQASgFAYgDIAKhaIA2AAIALBaQAYADASAFIAshOQAaAIAYAMIgYBXQATALAQAMIBGg4QAZAWAPARIg4BHQAMARALASIBXgYQALAXAKAbIhPAtQAFARADAYIBaALIAAA2IhaAKQgCAXgGATIBPArQgJAbgMAYIhXgYQgMAWgLANIA4BHQgUAVgUASIhGg4QgNALgWAMIAYBXQgYAMgaAJIgshPQgZAHgRABIgLBagAiJiJQg5A5AABQQAABRA5A5QA5A5BQAAQBRAAA5g5QA5g5AAhRQAAhQg5g5Qg5g5hRAAQhQAAg5A5g");
	this.shape.setTransform(38.9,38.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gear_L, new cjs.Rectangle(0,0,77.8,77.8), null);


(lib.flower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5GdQgTgZAAglIAAgRQAHgwASgvIAjhgIAhAAQATA3AQApQASAwAHAvIAAARQAAAkgTAaQgTAbgnAAQgmAAgTgbgADJE3QgZgYgUghQgUghgQgoQgSgqgNgZIAYgZQAfAQAkAQQAnASAhATQAjATAYAZQAXAZgBAgQABAdgXAXQgYAXgdAAQghAAgYgXgAk2E3QgXgYAAgcQAAgfAXgaQAWgZAjgTQAggUAogRQAngRAdgPIAYAZQgMAZgTAqQgSApgSAgQgTAhgaAYQgaAXgfAAQgcAAgYgXgAFNBOQgygJgtgRIhggjIAAggIBggkQAxgSAugHIARAAQAlAAAaATQAbAUAAAlQAAAogbASQgaAUglAAgAleBOQgkAAgbgUQgagSAAgoQAAgmAagTQAbgTAkAAIARAAQAwAHAwASIBfAkIAAAgIhfAjQgsARg0AJgABZhwQANgbASgoQAQgmAUgjQAUghAZgZQAYgXAhAAQAdAAAYAXQAXAXgBAdQABAjgXAXQgZAZgiAUQgjAVglAPQgnARgcAOgAi1h3QgmgPgigVQgigUgXgZQgXgYAAgiQAAgcAXgYQAYgXAcAAQAfAAAaAXQAbAZASAhQASAjASAmQASAoANAbIgYAYQgbgOgpgRgAgQiOQgRg2gRgpQgTgugHgyIAAgRQAAgjATgbQATgbAmAAQAnAAATAbQATAbAAAjIAAARQgGAwgVAwQgSAtgPAyg");
	this.shape.setTransform(44,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flower, new cjs.Rectangle(0,0,88,88), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlEsUQBPgEBKAVQCWAqCDBkQB3BaAjBNQAfBHAOBWQAIArAAAdIABA1QgCBHgNBZIgSBLQAXATAKAdQAMAfgIAdQgOAzgqA6QgxBDgtAIQgIACgJgBIgOgBQglB7gdBHQggBQgiApQhMBhkBAeg");
	this.shape.setTransform(32.5,78.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,65,157.9), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlCsiQAngBAqAEQCkAXCBBTQBtBFA1BWQAiBGAVBVQAKAqAEAdQADA/gICKIgEAVQAMgMAQATQAPASAEAeQAKAjgpB6QgtCDgrADIgfABQgVBOggCMQgcBtgcAlQg0BGhzAyQhgAqh5AUg");
	this.shape.setTransform(32.3,80.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,64.6,160.6), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjjiTIGNjGIA6HBInHDyg");
	this.shape.setTransform(22.8,28.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,-6.2,45.6,69.3), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjfixIAoh9IAuAAIgJBQIFyDVIhiE4g");
	this.shape.setTransform(22.4,30.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,44.8,60.6), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjfgJIFyjVIgJhQIAuAAIAoB9IldHgg");
	this.shape.setTransform(22.4,30.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,44.8,60.6), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArJICIAArHIBRAAIAEgCIgIgXIFukHIgEgeIAuAAIAoB9IJjCHIAqAMQA0ARArAUQCMA/AMBGQAIAtgTBFQgVBOgtBLQhzC/jIA7QiXAtlDARQjSALj7gCIAAABg");
	this.shape.setTransform(71.4,51.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,142.9,103.3), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ak6MQIAA4pQBkAFBhApQBUAjAtAtQA5A2ApBTQAVApAJAfIAVA3QAXBHALBJIAJA/QAoABAdAIQAWAFAHAGQAKAKADAiQACASgFBTQgBATgEAKQgFALgLAKQgUAUgjANIAFAsQAIBogDBxQgEBygOA2QgrChgaAzQgoBLhLAPQgvAKhgABIgZAAQhiAAhcgKg");
	this.shape_1.setTransform(31.5,79.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,63.1,158.9), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AigMoQg0gCg6gKIAA5EQBwADBmAsQBUAkA8A4QA2A4AlBIQATAkAHAZIAPA5QAQBIAIBKIAKBjQAMAJADAjQABASgGBAQAHBZAAArQABAlgiCZQgfCRgTA6QgvCOhGBYQhHBZhRANQgWAEgfAAIgagBg");
	this.shape_2.setTransform(27.1,80.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,54.3,161.8), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ak6tHQCbAMCEBAQB0A4AwBFQAtA/AZBaQAMAsADAgIAKA7QAIBJgDBKIgBAWQAPgVAPgFQAVgJARAWQAVAdgTCVQgTCcgrAJIgfAGQgcEjgtBWQhAB6ibBhQiOBZhdAAg");
	this.shape_1.setTransform(31.5,84);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,63,168), null);


(lib.Circle_Flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#353535").ss(2).p("ABLAAQAAAfgWAWQgWAWgfAAQgeAAgWgWQgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeg");
	this.shape.setTransform(7.5,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_1.setTransform(7.5,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,17,17);


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5A6QgYgYAAgiQAAghAYgYQAYgYAhAAQAiAAAYAYQAYAZAAAgQAAAigYAYQgYAYgiAAQghAAgYgYg");
	this.shape.setTransform(8.2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle, new cjs.Rectangle(0,0,16.4,16.4), null);


(lib.BlinkingCursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-9.5,-13.25,19,26.5);
	this.shape.setTransform(9.2,15.1,0.974,1.14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8).to({_off:false},0).wait(7).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,30.2);


(lib.HeadR2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(96.8,79.6,1,1,0,0,0,31.6,79.4);
	this.instance.alpha = 0.051;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAE0AF").s().p("AgcB7QgkgIgXgcQgQgTgQgmQgdhAgCgiQgCgXA6gSQAygQAygCQA1gDApAJQAeAGAIAIQAKAIADAjQACASgFBSQgBATgEALQgFALgLAKQgMAMgWAMQgXAMgQACIgcAEIgDAAQgWAAgdgGg");
	this.shape.setTransform(113.1,72.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DAE0AF").s().p("AhVCRQgkgJgVgLQgUgLgJgNQgIgMgFgZQgUhiAAghQAAgTAEgQQAEgRAJgGQANgKAugIQA9gLBOACQBBACA8ARQBFASAAAYQABAUgGAbQgFAVgNAkQgNAqgRAYQgYAigqAQQgpAQgfAFIgnADIgIAAQgVAAgfgIg");
	this.shape_1.setTransform(69.8,75.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3A3A").s().p("AgrChQghgGgYgLQgWgLgLgIQgPgKgHgOQgGgMgNhRQgOhPgCgCQgGgLgHgEIgKgBIgGgBImeC4IgDgaIAIgBIAAAIIGbjPIARgMQAKgGBTgIQBZgIA4ABQA1ACBbAVQBZAVAHAAQAIAABMgVQBLgVApgBQAngBA4AHQA0AGAHAEIAFAqQgEACgDAJIgDA/QgDA8gCAKQgDALgIAKQgGAHgNALQgOANgUAJQgbANgcADQgVACgcgEQgegFgSgKQgTgKgVgeQgIgKgUgwIgYg4QgGgLgKgGQgJgGgJABQgKAAgJAGQgJAHgFAMIgVA8QgRA0gHANQgUAjgVAPQgVAPgmANQgkAMgcADQgPABgPAAQgZAAgagFg");
	this.shape_2.setTransform(66.3,75.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A3A3A").s().p("AAdF3QiYgQhiglQhYghgzhQQgQgZgKgbIgHgVQgyj8gRg5QgIgdguhQQgphKAAgGQABgLALgHQAKgHAIAEQAEABCIDdQCIDcAOAHQANAGBRACQBkABAlAFQAzAFAVgLQALgGAAgHQA4hqAFgOQADgKAXgZQAUgWAPgNQAQgQA4gcQBBggAfABQAYABA6AxQA2AtALAWQAKAWAPAvQARAygDAKQgiCYgXBEQgOAtgRAbQgQAYgaAKQglANhfADIhDACQhlAAhggLgAEThVQg7AagLAJQgOAMgcAsQgfAxADAPQAEAQAkAQQAjAPAtAGQAkAGAbgPQATgLADgLQAIgdgVgNIgLgFQgDgCAIgCIAkgBQAXgBARgDQAJgBgDADIgMALQgYAYAPAZQADAGAZAHQAbAHAQgEQAQgFAdgjQAcgjgBgLQgBgJgUghQgSgfgIgKQgHgIghgZQgkgbgIAAQgHgBgLAJIgJAJQgWgNgHAAQgGAAg5Aag");
	this.shape_3.setTransform(64.7,120.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE8B6").s().p("AA+MTQkQgdhQhlQgigpgghQQgdhHglh7QgUACgLgCQgtgIgxhDQgqg6gOgzQgIgdAMgfQAKgdAXgTIgShLQgNhZgChHIABg1QABgdAHgrQAOhWAfhHQAjhNB3haQCEhkCWgqQCHgnCZAuQB9AlBEBCQA5A1ApBTQAVAqAJAfIAVA3QAXBGALBKIASB+QAUCPAIBWQAIBogDBxQgEBxgOA2QgrCigaAzQgoBLhLAPQguAJhbACIgiAAQhXAAhUgIg");
	this.shape_4.setTransform(60.7,79.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HeadR2, new cjs.Rectangle(0,0,130,159.4), null);


(lib.HeadR1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_2();
	this.instance.parent = this;
	this.instance.setTransform(91.7,81,1,1,0,0,0,27.1,80.9);
	this.instance.alpha = 0.051;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAE0AF").s().p("AgnB6QgogJgbgbQgSgTgRgmQgfhBgCggQgCgWBDgTQA5gRA6gCQA+gCAwAJQAjAGAJAHQAMAKADAjQACAagIBKQgBATgFALQgGALgNALQgPALgaAMQgcAMgSACIghADQgZAAgmgHg");
	this.shape.setTransform(101,73.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DAE0AF").s().p("AhjCLQglgKgXgLQgVgKgJgNQgJgMgEgXQgThkAAgYQAAgTAFgOQAFgRAIgGQAOgJAxgIQBCgLBTACQBGACBDAQQBLASABAXQAAAigcBEQgQApgTAWQgbAhguAPQguAPghAEIgqACIgFAAQgXAAgkgIg");
	this.shape_1.setTransform(52.7,76);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3A3A").s().p("Ai9CaQgjgGgZgLQgXgKgMgJQgPgKgHgOQgGgLgNhNQgNhLgCgCQgGgLgHgCIgKgCIgGAAIjYAjIgCgZIAIAAIABAHIDTg5IARgMQALgFBYgIQBfgJA8ACQA7ABBiAVQBhAUAJAAQAJAABWgVQBYgVAugBQAvgCBBAHQA+AGAHAEIALAJIgBAeQgCABgEAFIgHAJQgBACgEA9QgFA9gDAKQgEALgJAKQgHAHgQAMQgQAMgYAJQggAMggACQgZACghgFQgigFgWgKQgUgKgYgeQgIgKgWgwIgag3QgHgLgLgGQgKgGgLABQgLAAgKAGQgKAHgGALIgYA7QgUAzgIAMQgYAigWAOQgXAOgqAMQgmALgfACIgaABQgfAAgfgGg");
	this.shape_2.setTransform(62.5,76.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A3A3A").s().p("ABPGzQhkgJhNgaQg8gUhlg2QhNgognhVQgMgbgGgcIgFgXQgdkDgLg6QgFgdgnhoQgkhhABgGQACgLACgBQACgBAHAEQAJAFArB0QA3CVBOD5QAFANAvAFQBRAJAVAEQBKAQA4APQAyhsAEgPQACgJAWgZQAQgUAPgQQAOgOA/gfQBGgiAdABQAZAAA9AsQA8ArAJATQALAWAQAxQASA3gCAKQgBAFAkgYQAkgZgBAFQgECihpBrQg+A/g/AWQgqAOgrABIgEAAQggAAhUgIgABUAPQgNAMgYAsQgbAxADAOQADAPArANQAoAMAqACQAjABAggNQAbgLABgIQAFgdgSgUIgJgJQgCgDAGAAQAPgDANAAIAZADQAJABgBAEIgGAMQgNAYAPAVQADAGAgAEQAiAGAOgGQAOgGAQgfQAOgdgBgMQgBgJgTghQgRgegHgIQgGgGgngWQgogVgHgBQgHAAgKAJIgIAJQgUgMgGAAQh+AwgOANg");
	this.shape_3.setTransform(59.8,117.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE8B6").s().p("AgqMIQjTg4hPhqQgcglgchtQggiMgVhOQgNABgSgCQgsgDgsiDQgph5AKgkQADgeAQgSQAPgTANAMIgEgVQgFhWAAhCIAAgxQAEgdAKgqQAVhVAhhGQA1hWBuhFQCChTCkgXQCJgOB/AvQBnAlBHBDQA3A3AlBIQASAlAIAZIAOA5QAQBIAJBJIANCNQANCZABA/QAAAmghCZQggCQgTA7QguCOhHBXQhHBahRANQgcAFgiAAQhbAAiCgig");
	this.shape_4.setTransform(59.4,81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HeadR1, new cjs.Rectangle(0,0,121.3,162.2), null);


(lib.HeadL2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(97.5,78.9,1,1,0,0,0,32.5,78.9);
	this.instance.alpha = 0.051;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAE0AF").s().p("AgZCBIgcgEQgQgCgXgMQgWgMgMgMQgLgLgEgKQgFgLgBgTQgEhOABgWQADgjALgIQAIgIAegGQAogJA1ADQAyACAyAQQA6ASgCAXQgBAUgIAZQgGAUgPAhQgQAmgQATQgYAcgjAIQgeAGgWAAIgDAAg");
	this.shape.setTransform(16.8,73.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DAE0AF").s().p("AAaCZIgmgDQgfgFgqgQQgpgQgZgiQgQgXgOgrQgYhGABgiQAAgYBGgSQA8gRBBgCQBNgCA+ALQAuAIANAKQAIAGAFARQAEAQgBATQAAAYgUBrQgEAZgJAMQgJANgUALQgVALgjAJQgfAIgVAAIgJAAg");
	this.shape_1.setTransform(60.2,75.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3A3A").s().p("AglClQgcgDgkgMQgmgNgVgPQgUgOgWgkQgHgNgRg0IgUg8QgFgMgJgHQgJgGgKAAQgJgBgJAGQgLAGgFALIgYA4QgUAwgIAKQgWAegSAKQgSAKgfAFQgcAEgVgCQgbgDgbgNQgVgKgNgMQgZgVgFgSQgCgKgDg8IgDg/QgEgJgDgCIAFgqQAHgEAzgGQA5gHAnABQAoABBMAVQBMAVAIAAQAHAABZgVQBagVA2gCQA4gBBZAIQBTAIAKAGIARAMIGbDPIAAgIIAIABIgDAaImei4QgLAAgFACQgIAEgGALQgBACgOBPQgNBRgGAMQgHAOgPAKQgLAIgWALQgYALghAGQgaAFgZAAQgPAAgPgBg");
	this.shape_2.setTransform(63.7,75.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A3A3A").s().p("AkkGAQhfgDglgNQgagKgQgYQgRgcgOgsQgXhEgiiYQgDgKARgyQAPgvAKgWQAKgWA3gtQA5gxAZgBQAfgBBBAgQA4AcAQAQQAQAPASAUQAYAaADAJQAFAOA4BqIALANQAVALAzgFQAlgFBkgBQBRgCANgGQAOgHCIjcQCIjdADgBQAIgEALAHQALAHABALQAAAGgqBKQgtBQgJAdQgQA5gyD8QgIAhgZAoQgzBQhYAhQhiAliYAQQhhALhkAAIhDgCgAmMAkQARADAWABIAlABQAHACgCACIgLAFQgWANAJAdQADALATALQAbAPAkgGQAtgGAigPQAlgQAEgQQADgPgfgxQgcgsgOgMQgLgJg7gaQg5gagGAAQgFAAgNAHIgMAGQgPgTgLACQgIAAgkAbQghAZgHAIQgIAJgSAgQgUAhgBAJQgBAMAcAiQAdAkAQAEQAQAEAbgHQAZgHADgGQAPgZgYgYIgNgLQAAgBAAAAQgBAAABgBQAAAAAAAAQABAAABAAIAFAAg");
	this.shape_3.setTransform(65.3,121.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE8B6").s().p("AkLMbQhagCgvgJQhKgPgohLQgagzgriiQgOg1gEhyQgDhxAIhoQAHhWAViPIASh+QALhKAXhGIAVg3QAJgfAVgqQAphTA4g1QBFhCB9glQCZguCHAnQCWAqCEBkQB3BaAjBNQAfBHAOBWQAIArAAAdIABA1QgCBHgNBZIgSBLQAXATAKAdQAMAfgIAdQgOAzgqA6QgxBDgtAIQgLACgUgCQglB7gdBHQggBQgiApQhQBlkQAdQhUAIhXAAIgjAAg");
	this.shape_4.setTransform(69.3,79.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HeadL2, new cjs.Rectangle(0,0,130,159.8), null);


(lib.HeadL1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(89,80.3,1,1,0,0,0,32.3,80.3);
	this.instance.alpha = 0.051;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAE0AF").s().p("Ag4B+QgSgCgcgMQgagMgPgLQgNgLgGgLQgFgKgCgUQgGhVABgPQACgjAMgKQAKgHAjgGQAvgJA/ACQA6ACA5ARQBCATgBAWQgCAggfBBQgRAmgSATQgaAbgpAJQgmAHgZAAIghgDg");
	this.shape.setTransform(20.3,74.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DAE0AF").s().p("AAjCTIgpgCQgigEgtgPQgugPgcghQgSgWgQgpQgPgjgGgVQgHgaAAgUQABgXBLgSQBDgQBGgCQBTgCBCALQAxAIANAJQAJAGAFARQAFAOAAATQAAAbgTBhQgFAXgJAMQgJANgVAKQgWALglAKQgkAIgYAAIgFAAg");
	this.shape_1.setTransform(68.6,76.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3A3A").s().p("ABnCfQgfgCgngLQgpgLgYgPQgWgOgYgiQgIgMgUgzIgYg7QgFgMgLgGQgKgGgLAAQgLgBgJAGQgMAGgGALIgaA3QgXAvgIALQgYAegVAKQgUAKgkAFQggAFgYgCQgggCgggMQgZgJgRgMQgcgWgHgSQgDgKgFg9IgEg/QgFgKgJgFIgBgeIALgJQAIgEA9gGQBCgHAuACQAuABBXAVQBXAVAJAAQAJAABigUQBigVA5gBQA+gCBeAJQBYAIALAFQAIAFAJAHIDUA5IAAgHIAIAAIgCAZIjXgjQgLAAgGACQgFACgJALIgNBNQgOBNgFALQgIAOgPAKQgMAJgXAKQgYALgjAGQggAGgfAAIgZgBg");
	this.shape_2.setTransform(58.8,76.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A3A3A").s().p("AjGG7QgrgBgqgOQg/gWg+g/QhohrgFiiQAAgFAjAZQAkAYgBgFQgCgKASg3QAQgxALgWQAJgTA8grQA+gsAYAAQAdgBBGAiQA/AfAOAOQAPAQAQAUQAWAZADAJQACAJAZA6IAaA4IAlgJQAvgMAugKQAVgEBRgJQAwgFAEgNQBOj5A3iVQArh0AKgFQAHgEABABQACABACALQABAGgkBhQgnBogFAdQgKA6geEDIgFAXQgGAcgMAbQgmBVhNAoQhmA2g8AUQhMAahkAJQhVAIggAAIgEAAgAjjBUQAGAAgCADIgJAJQgSAUAFAdQABAIAbALQAgANAjgBQArgCAngMQArgNADgPQAEgOgbgxQgZgsgNgMQgJgJg/gaQg9gagGAAQgEAAgMAGIgLAGQgOgTgKABQgIABgoAVQgmAWgGAGQgIAHgRAfQgTAhgBAJQgBAMAPAdQAPAfAOAGQAOAGAigGQAggEADgGQAPgVgMgYIgHgMQAAgEAJgBIAYgDIAEAAQAMAAAMADg");
	this.shape_3.setTransform(61.4,118.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE8B6").s().p("AjwMlQhRgNhHhaQhHhXguiOQgTg6ggiRQghiYAAgnQAAg/AOiZIANiNQAJhJAQhIIAOg5IAag+QAlhIA2g3QBIhDBnglQB/gvCJAOQCkAXCCBTQBuBFA0BWQAiBGAVBVQAKAqAEAdIABAxQgBBCgFBWIgEAVQAMgMAQATQAPASAEAeQAKAkgpB5QgtCDgrADQgSACgNgBQgVBOggCMQgcBtgcAlQhPBqjTA4QiCAihbAAQghAAgdgFg");
	this.shape_4.setTransform(61.9,81.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HeadL1, new cjs.Rectangle(0,0,121.3,162.6), null);


(lib.Head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0_1();
	this.instance.parent = this;
	this.instance.setTransform(94.6,84,1,1,0,0,0,31.5,84);
	this.instance.alpha = 0.051;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAE0AF").s().p("AhDB5QgxgLgegdQgVgUgTgmQgRgigIgTQgJgaAAgSQgBgXBQgSQBGgPBHgCQBRgDA/AKQAuAHANAIQAQAKACAmQABAYgOBUQgDAVgIALQgIALgSALQgUALgkAKQglALgYABIgqABQghgCgugLg");
	this.shape.setTransform(90.1,79.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DAE0AF").s().p("Ag1CFQgYgBglgLQgjgKgVgLQgSgLgIgLQgIgLgDgVQgOhUABgYQAAgQAFgNQAFgOAIgFQANgIAugHQA/gKBQADQBIACBGAPQBQASgBAXQAAASgJAaQgIATgRAiQgTAmgVAUQgeAdgxALQguALghACIgqgBg");
	this.shape_1.setTransform(36,79.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3A3A").s().p("ADfCWQgrgIgYgLQgbgOgZgdQgKgLgXgxIgcg3QgHgLgMgHQgMgFgMAAQgMAAgKAFQgOAHgGALIgcA3QgYAxgJALQgbAegYANQgaALgrAIQgoAIgfAAQgrAAgqgLQgggIgXgMQgVgKgKgIQgNgKgHgLQgEgLgKhDIgKhDQgGgKgGgCIgOgCIgXhAIgBgVIAHAAIABAFIATAuIAQgKQAKgFBSgGQBYgIA7ACQA7ABBpAVQBoATAJABQAJgBBpgTQBogVA7gBQA7gCBZAIQBRAGALAFIAPAJIAVgtIAAgFIAGAAIgBAVIgWBAQgJABgFABQgGACgGAKIgKBDQgJBDgGALQgFALgOAKQgLAIgUAKQgXAMghAIQgqALgqAAQgfAAgpgIg");
	this.shape_2.setTransform(63.1,78.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A3A3A").s().p("AixHUQgXgOgjgcQgngfgRgMQhIgvgwg/Qg7hOgShhQgWhzgOh/QgQiYgLjWQAgEyAZBpQAjCVBEAWQAfAKAzAoQAZAUASASIAxh+QAHgTATgQQARgPANgEIChgqIChAqQANAEASAPQASAQAHATIAyB+IArgmQAygoAhgKQBDgWAjiVQAYhpAhkyQgLDYgQCWQgPCAgVByQgSBhg7BOQgwA/hHAvQhJA8gqAZQhJArhpAAQhpAAhIgrgAAACgIARAAQARACgDAKQgMAlALARQACAEASALQAKAFAWgBQAMgBAWgDQANgCAzggQA0gfADgIQADgHgfg1Qgfg0gJgHQgJgFgygMQgxgLgLAAQgJAAgVAHIgSAGQghgNgOAAQgLAAgxALQgzAMgHAFQgKAHgfA0QggA1ADAHQAEAIAzAfQA0AgANACIAiAEQAWABAKgFQASgLACgEQALgRgMglQgDgKAQgCIAMAAIAFAAg");
	this.shape_3.setTransform(63.1,116.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE8B6").s().p("AjqLwQichihAh6QgthXgckiQgQgCgPgDQgrgLgTibQgTiWAVgbQAdgnAnAyIgBgVQgEhKAJhJIAKg6QADggAMguQAZhZAthAQAwhFB1g4QCEg+CagNQCcANCDA+QB1A4AxBFQAsBAAZBZQAMAuAEAgIAJA6QAJBJgDBKIgBAVQAOgTAPgHQAVgIARAXQAVAcgSCVQgUCbgrALIgfAFQgcEjgtBWQg/B6idBiQiOBYhdAAQhcAAiOhYg");
	this.shape_4.setTransform(63,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(0,0,126.1,168), null);


(lib.frontendicon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.flower();
	this.instance.parent = this;
	this.instance.setTransform(90.6,101.8,1,1,0,0,0,44,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:4.2},0).wait(1).to({rotation:8.4},0).wait(1).to({rotation:12.6,y:101.7},0).wait(1).to({rotation:16.7,y:101.8},0).wait(1).to({rotation:20.9,y:101.7},0).wait(1).to({rotation:25.1,y:101.8},0).wait(1).to({rotation:29.3,y:101.7},0).wait(1).to({rotation:33.5,y:101.8},0).wait(1).to({rotation:37.7},0).wait(1).to({rotation:41.9,y:101.7},0).wait(1).to({rotation:46,y:101.8},0).wait(1).to({rotation:50.2,y:101.7},0).wait(1).to({rotation:54.4,y:101.8},0).wait(1).to({rotation:58.6,y:101.7},0).wait(1).to({rotation:62.8,y:101.8},0).wait(1).to({rotation:67,y:101.7},0).wait(1).to({rotation:71.2},0).wait(1).to({rotation:75.3,y:101.8},0).wait(1).to({rotation:79.5,y:101.7},0).wait(1).to({rotation:83.7,y:101.8},0).wait(1).to({rotation:87.9,y:101.7},0).wait(1).to({rotation:92.1},0).wait(1).to({rotation:96.3,y:101.8},0).wait(1).to({rotation:100.5,y:101.7},0).wait(1).to({rotation:104.7},0).wait(1).to({rotation:108.8,y:101.8},0).wait(1).to({rotation:113},0).wait(1).to({rotation:117.2},0).wait(1).to({rotation:121.4},0).wait(1).to({rotation:125.6},0).wait(1).to({rotation:129.8,y:101.7},0).wait(1).to({rotation:134,y:101.8},0).wait(1).to({rotation:138.1},0).wait(1).to({rotation:142.3,y:101.7},0).wait(1).to({rotation:146.5,y:101.8},0).wait(1).to({rotation:150.7},0).wait(1).to({rotation:154.9},0).wait(1).to({rotation:159.1,y:101.7},0).wait(1).to({rotation:163.3,y:101.8},0).wait(1).to({rotation:167.4,y:101.7},0).wait(1).to({rotation:171.6},0).wait(1).to({rotation:175.8},0).wait(1).to({rotation:180,y:101.8},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape.setTransform(164.3,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_1.setTransform(164.3,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_2.setTransform(164.3,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("Ai4ACID1hRIB8BSIj0BNg");
	this.shape_3.setTransform(22.5,14.8,1,1,0,0,0,0.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai4AFIB5hhID4BiIinBXg");
	this.shape_4.setTransform(22,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgeAdQgdAegpAAI5LAAQgpAAgdgeQgegdAAgpIAA5LQAAgpAegdQAdgeApAAIZLAAQApAAAdAeQAeAdAAApg");
	this.shape_5.setTransform(90.6,90.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2).p("AhKAAICVAA");
	this.shape_6.setTransform(17.7,69.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2).p("AhKAAICVAA");
	this.shape_7.setTransform(17.7,63.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2).p("AhKAAICVAA");
	this.shape_8.setTransform(17.7,57.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_9.setTransform(90.6,28.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2).p("AhKAAICVAA");
	this.shape_10.setTransform(17.7,57.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2).p("AhKAAICVAA");
	this.shape_11.setTransform(17.7,57.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2).p("AhKAAICVAA");
	this.shape_12.setTransform(17.7,57.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(2).p("AhKAAICVAA");
	this.shape_13.setTransform(17.7,57.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2).p("AhKAAICVAA");
	this.shape_14.setTransform(17.7,57.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2).p("AhKAAICVAA");
	this.shape_15.setTransform(17.7,57.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2).p("AhKAAICVAA");
	this.shape_16.setTransform(17.7,57.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2).p("AhKAAICVAA");
	this.shape_17.setTransform(17.7,57.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(2).p("AhKAAICVAA");
	this.shape_18.setTransform(17.7,57.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(2).p("AhKAAICVAA");
	this.shape_19.setTransform(17.7,57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8,p:{y:57.8,x:17.7}},{t:this.shape_7,p:{y:63.8,x:17.7}},{t:this.shape_6,p:{y:69.8,x:17.7}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_10,p:{y:57.8,x:17.7}},{t:this.shape_8,p:{y:63.8,x:17.7}},{t:this.shape_7,p:{y:69.8,x:17.7}},{t:this.shape_6,p:{y:75.8,x:17.7}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_9},{t:this.shape_11,p:{y:57.8,x:17.7}},{t:this.shape_10,p:{y:63.8,x:17.7}},{t:this.shape_8,p:{y:69.8,x:17.7}},{t:this.shape_7,p:{y:75.8,x:17.7}},{t:this.shape_6,p:{y:81.8,x:17.5}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_12,p:{y:57.8,x:17.7}},{t:this.shape_11,p:{y:63.8,x:17.7}},{t:this.shape_10,p:{y:69.8,x:17.7}},{t:this.shape_8,p:{y:75.8,x:17.7}},{t:this.shape_7,p:{y:81.8,x:17.5}},{t:this.shape_6,p:{y:88,x:17.6}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_13,p:{y:57.8,x:17.7}},{t:this.shape_12,p:{y:63.8,x:17.7}},{t:this.shape_11,p:{y:69.8,x:17.7}},{t:this.shape_10,p:{y:75.8,x:17.7}},{t:this.shape_8,p:{y:81.8,x:17.5}},{t:this.shape_7,p:{y:88,x:17.6}},{t:this.shape_6,p:{y:94,x:17.6}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_14,p:{y:57.8,x:17.7}},{t:this.shape_13,p:{y:63.8,x:17.7}},{t:this.shape_12,p:{y:69.8,x:17.7}},{t:this.shape_11,p:{y:75.8,x:17.7}},{t:this.shape_10,p:{y:81.8,x:17.5}},{t:this.shape_8,p:{y:88,x:17.6}},{t:this.shape_7,p:{y:94,x:17.6}},{t:this.shape_6,p:{y:100,x:17.6}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_15,p:{y:57.8,x:17.7}},{t:this.shape_14,p:{y:63.8,x:17.7}},{t:this.shape_13,p:{y:69.8,x:17.7}},{t:this.shape_12,p:{y:75.8,x:17.7}},{t:this.shape_11,p:{y:81.8,x:17.5}},{t:this.shape_10,p:{y:88,x:17.6}},{t:this.shape_8,p:{y:94,x:17.6}},{t:this.shape_7,p:{y:100,x:17.6}},{t:this.shape_6,p:{y:106,x:17.6}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_16,p:{y:57.8}},{t:this.shape_15,p:{y:63.8,x:17.7}},{t:this.shape_14,p:{y:69.8,x:17.7}},{t:this.shape_13,p:{y:75.8,x:17.7}},{t:this.shape_12,p:{y:81.8,x:17.5}},{t:this.shape_11,p:{y:88,x:17.6}},{t:this.shape_10,p:{y:94,x:17.6}},{t:this.shape_8,p:{y:100,x:17.6}},{t:this.shape_7,p:{y:106,x:17.6}},{t:this.shape_6,p:{y:112,x:17.5}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_17,p:{y:57.8}},{t:this.shape_16,p:{y:63.8}},{t:this.shape_15,p:{y:69.8,x:17.7}},{t:this.shape_14,p:{y:75.8,x:17.7}},{t:this.shape_13,p:{y:81.8,x:17.5}},{t:this.shape_12,p:{y:88,x:17.6}},{t:this.shape_11,p:{y:94,x:17.6}},{t:this.shape_10,p:{y:100,x:17.6}},{t:this.shape_8,p:{y:106,x:17.6}},{t:this.shape_7,p:{y:112,x:17.5}},{t:this.shape_6,p:{y:118.5,x:17.6}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_18,p:{y:57.8}},{t:this.shape_17,p:{y:63.8}},{t:this.shape_16,p:{y:69.8}},{t:this.shape_15,p:{y:75.8,x:17.7}},{t:this.shape_14,p:{y:81.8,x:17.5}},{t:this.shape_13,p:{y:88,x:17.6}},{t:this.shape_12,p:{y:94,x:17.6}},{t:this.shape_11,p:{y:100,x:17.6}},{t:this.shape_10,p:{y:106,x:17.6}},{t:this.shape_8,p:{y:112,x:17.5}},{t:this.shape_7,p:{y:118.5,x:17.6}},{t:this.shape_6,p:{y:124.5,x:17.6}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_19},{t:this.shape_18,p:{y:63.8}},{t:this.shape_17,p:{y:69.8}},{t:this.shape_16,p:{y:75.8}},{t:this.shape_15,p:{y:81.8,x:17.5}},{t:this.shape_14,p:{y:88,x:17.6}},{t:this.shape_13,p:{y:94,x:17.6}},{t:this.shape_12,p:{y:100,x:17.6}},{t:this.shape_11,p:{y:106,x:17.6}},{t:this.shape_10,p:{y:112,x:17.5}},{t:this.shape_8,p:{y:118.5,x:17.6}},{t:this.shape_7,p:{y:124.5,x:17.6}},{t:this.shape_6,p:{y:130.5,x:17.5}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_18,p:{y:57.8}},{t:this.shape_17,p:{y:63.8}},{t:this.shape_16,p:{y:69.8}},{t:this.shape_15,p:{y:75.8,x:17.7}},{t:this.shape_14,p:{y:81.8,x:17.5}},{t:this.shape_13,p:{y:88,x:17.6}},{t:this.shape_12,p:{y:94,x:17.6}},{t:this.shape_11,p:{y:100,x:17.6}},{t:this.shape_10,p:{y:106,x:17.6}},{t:this.shape_8,p:{y:112,x:17.5}},{t:this.shape_7,p:{y:118.5,x:17.6}},{t:this.shape_6,p:{y:124.5,x:17.6}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_16,p:{y:57.8}},{t:this.shape_15,p:{y:63.8,x:17.7}},{t:this.shape_14,p:{y:69.8,x:17.7}},{t:this.shape_13,p:{y:75.8,x:17.7}},{t:this.shape_12,p:{y:81.8,x:17.5}},{t:this.shape_11,p:{y:88,x:17.6}},{t:this.shape_10,p:{y:94,x:17.6}},{t:this.shape_8,p:{y:100,x:17.6}},{t:this.shape_7,p:{y:106,x:17.6}},{t:this.shape_6,p:{y:112,x:17.5}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_15,p:{y:57.8,x:17.7}},{t:this.shape_14,p:{y:63.8,x:17.7}},{t:this.shape_13,p:{y:69.8,x:17.7}},{t:this.shape_12,p:{y:75.8,x:17.7}},{t:this.shape_11,p:{y:81.8,x:17.5}},{t:this.shape_10,p:{y:88,x:17.6}},{t:this.shape_8,p:{y:94,x:17.6}},{t:this.shape_7,p:{y:100,x:17.6}},{t:this.shape_6,p:{y:106,x:17.6}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_14,p:{y:57.8,x:17.7}},{t:this.shape_13,p:{y:63.8,x:17.7}},{t:this.shape_12,p:{y:69.8,x:17.7}},{t:this.shape_11,p:{y:75.8,x:17.7}},{t:this.shape_10,p:{y:81.8,x:17.5}},{t:this.shape_8,p:{y:88,x:17.6}},{t:this.shape_7,p:{y:94,x:17.6}},{t:this.shape_6,p:{y:100,x:17.6}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_13,p:{y:57.8,x:17.7}},{t:this.shape_12,p:{y:63.8,x:17.7}},{t:this.shape_11,p:{y:69.8,x:17.7}},{t:this.shape_10,p:{y:75.8,x:17.7}},{t:this.shape_8,p:{y:81.8,x:17.5}},{t:this.shape_7,p:{y:88,x:17.6}},{t:this.shape_6,p:{y:94,x:17.6}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_12,p:{y:57.8,x:17.7}},{t:this.shape_11,p:{y:63.8,x:17.7}},{t:this.shape_10,p:{y:69.8,x:17.7}},{t:this.shape_8,p:{y:75.8,x:17.7}},{t:this.shape_7,p:{y:81.8,x:17.5}},{t:this.shape_6,p:{y:88,x:17.6}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_11,p:{y:57.8,x:17.7}},{t:this.shape_10,p:{y:63.8,x:17.7}},{t:this.shape_8,p:{y:69.8,x:17.7}},{t:this.shape_7,p:{y:75.8,x:17.7}},{t:this.shape_6,p:{y:81.8,x:17.5}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_10,p:{y:57.8,x:17.7}},{t:this.shape_8,p:{y:63.8,x:17.7}},{t:this.shape_7,p:{y:69.8,x:17.7}},{t:this.shape_6,p:{y:75.8,x:17.7}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_8,p:{y:57.8,x:17.7}},{t:this.shape_7,p:{y:63.8,x:17.7}},{t:this.shape_6,p:{y:69.8,x:17.7}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_7,p:{y:57.8,x:17.7}},{t:this.shape_6,p:{y:63.8,x:17.7}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_9},{t:this.shape_7,p:{y:57.8,x:17.7}},{t:this.shape_6,p:{y:63.8,x:17.7}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,183.2,187);


(lib.endlessness_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// circle
	this.instance = new lib.circle();
	this.instance.parent = this;
	this.instance.setTransform(89.4,102.6,1,1,0,0,0,8.2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[89.4,102.6,72.7,111.2,56,115,22.6,122.6,22.6,99,22.7,75.9,59.3,87,77.6,92.6,95.7,102.8,100.7,105.3,105.7,107.8,117.7,113.2,127.6,115.7,159.5,123.5,158.9,98.3,158.4,75.9,126.7,85.3,111,90,95.4,99.1]}},49).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("AAvAZQCeBYCfApQE9BRAAjuQAAjvk9BgQifAvieBgIgfALQjhh1iugoQkphEAADWQAADcEqg6QCvgiDghyg");
	this.shape.setTransform(90.9,99.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_1.setTransform(164.3,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_2.setTransform(164.3,13.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_3.setTransform(164.3,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").p("Ai4ACID1hRIB8BSIj0BNg");
	this.shape_4.setTransform(22.5,14.8,1,1,0,0,0,0.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai4AFIB5hhID4BiIinBXg");
	this.shape_5.setTransform(22,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgeAdQgdAegpAAI5LAAQgpAAgdgeQgegdAAgpIAA5LQAAgpAegdQAdgeApAAIZLAAQApAAAdAeQAeAdAAApg");
	this.shape_6.setTransform(90.6,90.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_7.setTransform(90.6,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,183.2,187);


(lib.cms_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Gear_s2();
	this.instance.parent = this;
	this.instance.setTransform(120,137.6,1,1,0,0,0,12.6,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:11.2},0).wait(1).to({rotation:22.3},0).wait(1).to({rotation:33.5},0).wait(1).to({rotation:44.7},0).wait(1).to({rotation:55.8},0).wait(1).to({rotation:67},0).wait(1).to({rotation:78.1},0).wait(1).to({rotation:89.3},0).wait(1).to({rotation:100.5},0).wait(1).to({rotation:111.6},0).wait(1).to({rotation:122.8},0).wait(1).to({rotation:134},0).wait(1).to({rotation:145.1},0).wait(1).to({rotation:156.3},0).wait(1).to({rotation:167.4},0).wait(1).to({rotation:178.6},0).wait(1).to({rotation:189.8},0).wait(1).to({rotation:200.9},0).wait(1).to({rotation:212.1},0).wait(1).to({rotation:223.3},0).wait(1).to({rotation:234.4},0).wait(1).to({rotation:245.6},0).wait(1).to({rotation:256.7},0).wait(1).to({rotation:267.9},0).wait(1).to({rotation:279.1},0).wait(1).to({rotation:290.2},0).wait(1).to({rotation:301.4},0).wait(1).to({rotation:312.6},0).wait(1).to({rotation:323.7},0).wait(1).to({rotation:334.9},0).wait(1).to({rotation:346},0).wait(1).to({rotation:357.2},0).wait(1).to({rotation:368.4},0).wait(1).to({rotation:379.5},0).wait(1).to({rotation:390.7},0).wait(1).to({rotation:401.9},0).wait(1).to({rotation:413},0).wait(1).to({rotation:424.2},0).wait(1).to({rotation:435.3},0).wait(1).to({rotation:446.5},0).wait(1).to({rotation:457.7},0).wait(1).to({rotation:468.8},0).wait(1).to({rotation:480},0).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.Gear_M2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(98.5,152.4,1,1,0,0,0,16.6,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-6.7,y:152.3},0).wait(1).to({rotation:-13.4},0).wait(1).to({rotation:-20.1},0).wait(1).to({rotation:-26.8,x:98.4},0).wait(1).to({rotation:-33.5,x:98.5,y:152.4},0).wait(1).to({rotation:-40.2,x:98.4,y:152.3},0).wait(1).to({rotation:-46.9},0).wait(1).to({rotation:-53.6},0).wait(1).to({rotation:-60.3},0).wait(1).to({rotation:-67},0).wait(1).to({rotation:-73.7},0).wait(1).to({rotation:-80.4},0).wait(1).to({rotation:-87.1},0).wait(1).to({rotation:-93.8},0).wait(1).to({rotation:-100.5},0).wait(1).to({rotation:-107.2},0).wait(1).to({rotation:-113.9},0).wait(1).to({rotation:-120.6},0).wait(1).to({rotation:-127.3},0).wait(1).to({rotation:-134},0).wait(1).to({rotation:-140.7},0).wait(1).to({rotation:-147.3,x:98.3},0).wait(1).to({rotation:-154},0).wait(1).to({rotation:-160.7,x:98.4,y:152.4},0).wait(1).to({rotation:-167.4,y:152.3},0).wait(1).to({rotation:-174.1,y:152.4},0).wait(1).to({rotation:-180.8,x:98.3},0).wait(1).to({rotation:-187.5},0).wait(1).to({rotation:-194.2},0).wait(1).to({rotation:-200.9,x:98.4},0).wait(1).to({rotation:-207.6,x:98.3},0).wait(1).to({rotation:-214.3,x:98.4},0).wait(1).to({rotation:-221},0).wait(1).to({rotation:-227.7},0).wait(1).to({rotation:-234.4},0).wait(1).to({rotation:-241.1},0).wait(1).to({rotation:-247.8},0).wait(1).to({rotation:-254.5},0).wait(1).to({rotation:-261.2},0).wait(1).to({rotation:-267.9},0).wait(1).to({rotation:-274.6},0).wait(1).to({rotation:-281.3},0).wait(1).to({rotation:-288,x:98.5},0).to({_off:true},1).wait(1));

	// Layer 2
	this.instance_2 = new lib.Gear_L2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.6,140.9,1,1,0,0,0,24.2,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:4.2,y:140.8},0).wait(1).to({rotation:8.4},0).wait(1).to({rotation:12.6},0).wait(1).to({rotation:16.7},0).wait(1).to({rotation:20.9,y:140.9},0).wait(1).to({rotation:25.1,y:140.8},0).wait(1).to({rotation:29.3,y:140.9},0).wait(1).to({rotation:33.5},0).wait(1).to({rotation:37.7},0).wait(1).to({rotation:41.9,y:140.8},0).wait(1).to({rotation:46},0).wait(1).to({rotation:50.2,y:140.9},0).wait(1).to({rotation:54.4},0).wait(1).to({rotation:58.6,y:140.8},0).wait(1).to({rotation:62.8},0).wait(1).to({rotation:67},0).wait(1).to({rotation:71.2},0).wait(1).to({rotation:75.3},0).wait(1).to({rotation:79.5,y:140.9},0).wait(1).to({rotation:83.7,y:140.8},0).wait(1).to({rotation:87.9,y:140.9},0).wait(1).to({rotation:92.1,y:140.8},0).wait(1).to({rotation:96.3},0).wait(1).to({rotation:100.5},0).wait(1).to({rotation:104.7,y:140.9},0).wait(1).to({rotation:108.8},0).wait(1).to({rotation:113,y:140.8},0).wait(1).to({rotation:117.2},0).wait(1).to({rotation:121.4},0).wait(1).to({rotation:125.6},0).wait(1).to({rotation:129.8},0).wait(1).to({rotation:134},0).wait(1).to({rotation:138.1,y:140.9},0).wait(1).to({rotation:142.3},0).wait(1).to({rotation:146.5,y:140.8},0).wait(1).to({rotation:150.7,y:140.9},0).wait(1).to({rotation:154.9,y:140.8},0).wait(1).to({rotation:159.1,y:140.9},0).wait(1).to({rotation:163.3},0).wait(1).to({rotation:167.4},0).wait(1).to({rotation:171.6,y:140.8},0).wait(1).to({rotation:175.8},0).wait(1).to({rotation:180,y:140.9},0).to({_off:true},1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5EXQgbgFgbgKQgbgKgYgPQgZgPgWgTIBHhVQAgAbAkAOQAnAQAlAAQAnAAAUgOQASgMAAgWQAAgZgWgQQgMgIgxgVIhHgeQgYgJgUgNQgVgNgQgSQgRgTgJgXQgJgZAAgdQAAgiAOgeQAPgdAagWQAbgXAlgMQAmgNAqAAQAhAABBATIAsAWQAWAOATARIhABPQgegXgbgKQgegLgmAAQgfAAgSANQgTANAAAXQAAAXAZAPQAOAJAxASIBDAcQAcALAVANQAWAOAPARQAPATAIAWQAIAYAAAcQAAAigOAfQgOAfgbAXQgcAYgnANQgpAOgwAAQgcAAgcgFg");
	this.shape.setTransform(141.2,78.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABjERIAAipQAAg+AQi/IgCAAIgrCSIgpCDIg8AAIgriDIgniSIgDAAQARC/gBA+IAACpIhmAAIAAoiICBAAIA1DCIATBLIADAAIAShLIA2jCICBAAIAAIig");
	this.shape_1.setTransform(90.8,78.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8EKQgWgJgUgOQgVgNgRgRQgRgSgOgWQgPgWgJgaQgLgbgEgeQgFgfgBghQAAghAGgfQAEgeAKgbQALgaAOgXQAOgWARgTQARgSAWgPQAUgOAYgJQAYgKAZgFQAZgFAbAAQAkAAA6AWQAnASAfAeIhEBMQgVgTgVgJQgZgLgdAAQgdAAgXAMQgYAMgTAXQgSAXgKAgQgKAiAAAoQAAApAKAiQAKAgATAXQASAXAaAMQAZAMAfAAQAcAAAagNQAXgMAWgXIBDBKQgQAUgUAPQgUAPgXALQgWAJgaAGQgYAFgcAAQhCgGgfgMg");
	this.shape_2.setTransform(41.5,78.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_3.setTransform(164.3,17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_4.setTransform(164.3,13.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").p("Ai4ACID1hRIB8BSIj0BNg");
	this.shape_5.setTransform(22.4,14.8,1,1,0,0,0,0.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ai4AFIB5hhID4BiIinBXg");
	this.shape_6.setTransform(22,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgeAdQgdAegpAAI5LAAQgpAAgdgeQgegdAAgpIAA5LQAAgpAegdQAdgeApAAIZLAAQApAAAdAeQAeAdAAApg");
	this.shape_7.setTransform(90.6,90.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_8.setTransform(90.6,28.6);

	this.instance_3 = new lib.Gear_s2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,137.6,1,1,0,0,0,12.6,13.5);

	this.instance_4 = new lib.Gear_M2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(98.5,152.4,1,1,0,0,0,16.6,17);

	this.instance_5 = new lib.Gear_L2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(63.6,140.9,1,1,0,0,0,24.2,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,183.1,183.2);


(lib.Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_3();
	this.instance.parent = this;
	this.instance.setTransform(214.3,84.2,1,1,0,0,0,71.4,51.6);
	this.instance.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A2E1").s().p("AjfAMIGXkkIAoB9IlYG0g");
	this.shape.setTransform(173,60.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A2E1").s().p("AjfibIAph9IGWEkIhmENg");
	this.shape_1.setTransform(112.7,60.7);

	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(173,62.8,1,1,0,0,0,22.4,30.2);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.Path_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(112.7,62.8,1,1,0,0,0,22.4,30.2);
	this.instance_2.alpha = 0.398;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiFqIAenIIg9ikIAshnICrAAIAsBnIg9CkIAcHIg");
	this.shape_2.setTransform(142.8,100.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A2E1").s().p("AmUHDQm7gUi6g3QjIg7hzi/QgthLgVhNQgThGAHgtQAMhGCMg/QBGggBEgRIJjiHIB6AAIGTDyIGVjyIB4AAIJkCHIArAMQAzARArAUQCMA/AMBGQAIAtgTBGQgVBNgtBLQhzC/jHA7Qi6A3m7AUQiLAGiUABIh3ABIgyAAQijAAi/gIg");
	this.shape_3.setTransform(142.9,91);

	this.instance_3 = new lib.Path_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(165.7,37.9,1,1,0,0,0,22.8,31.5);
	this.instance_3.alpha = 0.051;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE8B6").s().p("AnHBoIA9nCIGKDHIGPjEIA5G/InIDzg");
	this.shape_4.setTransform(142.8,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance_3},{t:this.shape_3},{t:this.shape_2},{t:this.instance_2},{t:this.instance_1},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Body, new cjs.Rectangle(0,0,285.7,136.9), null);


(lib.bacendicon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.gear_L();
	this.instance.parent = this;
	this.instance.setTransform(109.2,115.3,1,1,0,0,0,38.9,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:4.1},0).wait(1).to({rotation:8.2,x:109.1},0).wait(1).to({rotation:12.3,x:109.2},0).wait(1).to({rotation:16.4,x:109.1},0).wait(1).to({rotation:20.5},0).wait(1).to({rotation:24.5,x:109.2},0).wait(1).to({rotation:28.6},0).wait(1).to({rotation:32.7,x:109.1},0).wait(1).to({rotation:36.8,x:109.2},0).wait(1).to({rotation:40.9},0).wait(1).to({rotation:45},0).wait(1).to({rotation:49.1,x:109.1},0).wait(1).to({rotation:53.2},0).wait(1).to({rotation:57.3,x:109.2},0).wait(1).to({rotation:61.4,x:109.1},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:69.5,x:109.2},0).wait(1).to({rotation:73.6},0).wait(1).to({rotation:77.7,x:109.1},0).wait(1).to({rotation:81.8,x:109.2},0).wait(1).to({rotation:85.9,x:109.1},0).wait(1).to({rotation:90,x:109.2},0).wait(1).to({rotation:94.1},0).wait(1).to({rotation:98.2,x:109.1},0).wait(1).to({rotation:102.3,x:109.2},0).wait(1).to({rotation:106.4},0).wait(1).to({rotation:110.5,x:109.1},0).wait(1).to({rotation:114.5},0).wait(1).to({rotation:118.6},0).wait(1).to({rotation:122.7,x:109.2},0).wait(1).to({rotation:126.8},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:135},0).wait(1).to({rotation:139.1},0).wait(1).to({rotation:143.2},0).wait(1).to({rotation:147.3},0).wait(1).to({rotation:151.4,x:109.1},0).wait(1).to({rotation:155.5},0).wait(1).to({rotation:159.5},0).wait(1).to({rotation:163.6,x:109.2},0).wait(1).to({rotation:167.7},0).wait(1).to({rotation:171.8,x:109.1},0).wait(1).to({rotation:175.9,x:109.2},0).wait(1).to({rotation:180},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.gear_sm1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.4,82.4,1,1,0,0,0,27.4,26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-6.5},0).wait(1).to({rotation:-13.1,y:82.3},0).wait(1).to({rotation:-19.6},0).wait(1).to({rotation:-26.2},0).wait(1).to({rotation:-32.7},0).wait(1).to({rotation:-39.3},0).wait(1).to({rotation:-45.8},0).wait(1).to({rotation:-52.4},0).wait(1).to({rotation:-58.9},0).wait(1).to({rotation:-65.5},0).wait(1).to({rotation:-72},0).wait(1).to({rotation:-78.5},0).wait(1).to({rotation:-85.1},0).wait(1).to({rotation:-91.6,x:60.3},0).wait(1).to({rotation:-98.2,x:60.4},0).wait(1).to({rotation:-104.7,x:60.3},0).wait(1).to({rotation:-111.3},0).wait(1).to({rotation:-117.8},0).wait(1).to({rotation:-124.4},0).wait(1).to({rotation:-130.9},0).wait(1).to({rotation:-137.5},0).wait(1).to({rotation:-144},0).wait(1).to({rotation:-150.5},0).wait(1).to({rotation:-157.1},0).wait(1).to({rotation:-163.6,y:82.4},0).wait(1).to({rotation:-170.2},0).wait(1).to({rotation:-176.7},0).wait(1).to({rotation:-183.3,y:82.3},0).wait(1).to({rotation:-189.8},0).wait(1).to({rotation:-196.4,y:82.4},0).wait(1).to({rotation:-202.9,y:82.3},0).wait(1).to({rotation:-209.5,y:82.4},0).wait(1).to({rotation:-216},0).wait(1).to({rotation:-222.5},0).wait(1).to({rotation:-229.1},0).wait(1).to({rotation:-235.6},0).wait(1).to({rotation:-242.2},0).wait(1).to({rotation:-248.7},0).wait(1).to({rotation:-255.3,x:60.4},0).wait(1).to({rotation:-261.8,x:60.3},0).wait(1).to({rotation:-268.4},0).wait(1).to({rotation:-274.9,x:60.4},0).wait(1).to({rotation:-281.5},0).wait(1).to({rotation:-288,x:60.3},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape.setTransform(164.3,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_1.setTransform(164.3,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2).p("Ag5AAIBzAA");
	this.shape_2.setTransform(164.3,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("Ai4ACID1hRIB8BSIj0BNg");
	this.shape_3.setTransform(22.5,14.8,1,1,0,0,0,0.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai4AFIB6hhID3BiIinBXg");
	this.shape_4.setTransform(22,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2).p("AOKMmQAAApgeAdQgdAegpAAI5LAAQgpAAgdgeQgegdAAgpIAA5LQAAgpAegdQAdgeApAAIZLAAQApAAAdAeQAeAdAAApg");
	this.shape_5.setTransform(90.6,90.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2).p("AuJAAIcTAA");
	this.shape_6.setTransform(90.6,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,183.2,187);


// stage content:
(lib.mpix_introduction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head R2
	this.instance = new lib.HeadR2();
	this.instance.parent = this;
	this.instance.setTransform(499,257,1,1,0,0,0,65,79.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(225).to({_off:false},0).wait(176).to({_off:true},1).wait(942));

	// Head R1
	this.instance_1 = new lib.HeadR1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(495,258,1,1,0,0,0,60.6,81.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(223).to({_off:false},0).wait(1).to({_off:true},1).wait(177).to({_off:false},0).to({_off:true},1).wait(941));

	// Head
	this.instance_2 = new lib.Head();
	this.instance_2.parent = this;
	this.instance_2.setTransform(496,259,1,1,0,0,0,63,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(185).to({regY:127,y:302},0).wait(1).to({regY:84,rotation:1.8,x:497.4,y:259},0).wait(1).to({rotation:3.7,x:498.7,y:259.1},0).wait(1).to({rotation:5.5,x:500.1,y:259.2},0).wait(1).to({rotation:7.3,x:501.5,y:259.3},0).wait(1).to({rotation:9.1,x:502.8,y:259.6},0).wait(1).to({rotation:11,x:504.2,y:259.7},0).wait(28).to({rotation:5.5,x:500.1,y:259.2},0).wait(1).to({rotation:0.1,x:496.1,y:259},0).wait(1).to({regY:127,rotation:0,x:496,y:302},0).wait(1).to({regY:84,y:259},0).to({_off:true},1).wait(180).to({_off:false},0).to({_off:true},16).wait(21).to({_off:false,x:961.2},0).to({_off:true},100).wait(75).to({_off:false},0).to({_off:true},189).wait(124).to({_off:false},0).to({_off:true},95).wait(190).to({_off:false},0).wait(114).to({x:933.8},0).wait(1).to({x:906.4},0).wait(1).to({x:879.1},0).wait(1).to({x:851.7},0).wait(1).to({x:824.4},0).wait(1).to({x:797},0).wait(1).to({x:769.7},0).wait(1).to({x:742.3},0).wait(1).to({x:715},0).wait(1).to({x:687.6},0).wait(1).to({x:660.3},0).wait(1).to({x:632.9},0).wait(1).to({x:605.6},0).wait(1).to({x:578.2},0).wait(1).to({x:550.9},0).wait(1).to({x:523.5},0).wait(1).to({x:496.2},0).wait(1));

	// Head L1
	this.instance_3 = new lib.HeadL1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(523,256,1,1,0,0,0,60.6,81.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(419).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false,x:964.1},0).to({_off:true},1).wait(100).to({_off:false},0).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(189).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(95).to({_off:false},0).to({_off:true},1).wait(188).to({_off:false},0).to({_off:true},1).wait(131));

	// Head L2
	this.instance_4 = new lib.HeadL2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(542,254,1,1,0,0,0,65,79.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(420).to({_off:false},0).wait(1).to({x:565.3},0).wait(1).to({x:588.6},0).wait(1).to({x:611.8},0).wait(1).to({x:635.1},0).wait(1).to({x:658.4},0).wait(1).to({x:681.7},0).wait(1).to({x:704.9},0).wait(1).to({x:728.2},0).wait(1).to({x:751.5},0).wait(1).to({x:774.8},0).wait(1).to({x:798.1},0).wait(1).to({x:821.3},0).wait(1).to({x:844.6},0).wait(1).to({x:867.9},0).wait(1).to({x:891.2},0).wait(1).to({x:914.4},0).wait(1).to({x:937.7},0).wait(1).to({x:961},0).to({_off:true},1).wait(102).to({_off:false},0).to({_off:true},73).wait(191).to({_off:false},0).wait(121).to({_off:true},1).wait(97).to({_off:false,regY:134.6,y:308.7},0).wait(1).to({regY:79.9,rotation:-0.7,x:960.3,y:254},0).wait(1).to({rotation:-1.5,x:959.6},0).wait(1).to({rotation:-2.2,x:958.9,y:254.1},0).wait(1).to({rotation:-3,x:958.1},0).wait(1).to({rotation:-3.7,x:957.4},0).wait(1).to({rotation:-4.5,x:956.7,y:254.2},0).wait(1).to({rotation:-5.2,x:956},0).wait(1).to({rotation:-6,x:955.3,y:254.3},0).wait(1).to({rotation:-6.7,x:954.6,y:254.4},0).wait(1).to({rotation:-7.5,x:953.9},0).wait(1).to({rotation:-8.2,x:953.2,y:254.5},0).wait(1).to({rotation:-9,x:952.4,y:254.7},0).wait(1).to({rotation:-9.7,x:951.7,y:254.8},0).wait(1).to({rotation:-10.5,x:951,y:254.9},0).wait(1).to({rotation:-11.2,x:950.3,y:255},0).wait(1).to({rotation:-12,x:949.6,y:255.2},0).wait(1).to({rotation:-12.7,x:948.9,y:255.4},0).wait(1).to({rotation:-13.5,x:948.2,y:255.5},0).wait(1).to({rotation:-14.2,x:947.5,y:255.7},0).wait(1).to({rotation:-15,x:946.9,y:255.9},0).wait(1).to({rotation:-14.3,x:947.4,y:255.7},0).wait(1).to({rotation:-13.7,x:948.1,y:255.6},0).wait(1).to({rotation:-13,x:948.7,y:255.4},0).wait(1).to({rotation:-12.4,x:949.3,y:255.3},0).wait(1).to({rotation:-11.7,x:949.9,y:255.1},0).wait(1).to({rotation:-11,x:950.5,y:255},0).wait(1).to({rotation:-10.4,x:951.2,y:254.9},0).wait(1).to({rotation:-9.7,x:951.8,y:254.8},0).wait(1).to({rotation:-9.1,x:952.4,y:254.7},0).wait(1).to({rotation:-8.4,x:953,y:254.6},0).wait(1).to({rotation:-7.7,x:953.6,y:254.5},0).wait(1).to({rotation:-7.1,x:954.3,y:254.4},0).wait(1).to({rotation:-6.4,x:954.9},0).wait(1).to({rotation:-5.8,x:955.5,y:254.3},0).wait(1).to({rotation:-5.1,x:956.1,y:254.2},0).wait(1).to({rotation:-4.4,x:956.8,y:254.1},0).wait(1).to({rotation:-3.8,x:957.4},0).wait(1).to({rotation:-3.1,x:958},0).wait(1).to({rotation:-2.5,x:958.7},0).wait(1).to({rotation:-1.8,x:959.2,y:254},0).wait(1).to({rotation:-1.1,x:959.9},0).wait(1).to({rotation:-0.5,x:960.5},0).wait(1).to({rotation:0.2,x:961.2},0).wait(1).to({regY:131.9,rotation:0,x:961,y:306},0).to({_off:true},144).wait(132));

	// Body
	this.instance_5 = new lib.Body();
	this.instance_5.parent = this;
	this.instance_5.setTransform(497,375.1,1,1,0,0,0,142.8,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(419).to({regX:142.9,x:520.2},0).wait(1).to({x:543.4},0).wait(1).to({x:566.6},0).wait(1).to({x:589.8},0).wait(1).to({x:613},0).wait(1).to({x:636.2},0).wait(1).to({x:659.4},0).wait(1).to({x:682.6},0).wait(1).to({x:705.8},0).wait(1).to({x:729},0).wait(1).to({x:752.2},0).wait(1).to({x:775.4},0).wait(1).to({x:798.6},0).wait(1).to({x:821.8},0).wait(1).to({x:845},0).wait(1).to({x:868.2},0).wait(1).to({x:891.4},0).wait(1).to({x:914.6},0).wait(1).to({x:937.8},0).wait(1).to({x:961},0).wait(889).to({x:933.7},0).wait(1).to({x:906.4},0).wait(1).to({x:879.1},0).wait(1).to({x:851.8},0).wait(1).to({x:824.4},0).wait(1).to({x:797.1},0).wait(1).to({x:769.8},0).wait(1).to({x:742.5},0).wait(1).to({x:715.2},0).wait(1).to({x:687.9},0).wait(1).to({x:660.6},0).wait(1).to({x:633.3},0).wait(1).to({x:605.9},0).wait(1).to({x:578.6},0).wait(1).to({x:551.3},0).wait(1).to({x:524},0).wait(1).to({x:496.7},0).wait(1));

	// circle flash
	this.instance_6 = new lib.Circle_Flash("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(438.7,328.4,1,1,0,0,0,7.5,7.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1311).to({_off:false},0).to({scaleX:96.71,scaleY:96.71,x:717.4,y:308.6},24).to({_off:true},1).wait(8));

	// pointer line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("AF2AAIicAAImeAAIiwAA");
	this.shape.setTransform(561.8,230.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2).p("Al0AqICwAAIGehTICbAA");
	this.shape_1.setTransform(561.8,234.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2).p("Al0BUICxAAIGdinICbAA");
	this.shape_2.setTransform(561.8,238.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2).p("Al0B+ICxAAIGcj7ICcAA");
	this.shape_3.setTransform(561.8,242.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2).p("Al0CoICxAAIGclPICcAA");
	this.shape_4.setTransform(561.9,246.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2).p("AlzDSICwAAIGcmjICbAA");
	this.shape_5.setTransform(561.9,251.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2).p("AlzD8ICwAAIGbn3ICcAA");
	this.shape_6.setTransform(561.9,255.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2).p("AlzEmICxAAIGapLICcAA");
	this.shape_7.setTransform(561.9,259.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2).p("AlzFQICxAAIGaqfICbAA");
	this.shape_8.setTransform(562,263.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2).p("AlyF6ICwAAIGarzICbAA");
	this.shape_9.setTransform(562,267.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2).p("AFzmjIibAAImZNHIixAA");
	this.shape_10.setTransform(562,272.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2).p("AlyGqICwAAIGZtTICcAA");
	this.shape_11.setTransform(562,272.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2).p("AlyGwICwAAIGZtfICcAA");
	this.shape_12.setTransform(562,273.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(2).p("AlyG2ICwAAIGZtrICcAA");
	this.shape_13.setTransform(562,273.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2).p("AlyG8ICwAAIGZt2ICcAA");
	this.shape_14.setTransform(562,274.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2).p("AlyHBICwAAIGZuBICcAA");
	this.shape_15.setTransform(562,275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2).p("AlyHHICwAAIGZuOICcAA");
	this.shape_16.setTransform(562,275.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2).p("AlyHNICwAAIGZuZICcAA");
	this.shape_17.setTransform(562,276.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(2).p("AlyHTICwAAIGZulICcAA");
	this.shape_18.setTransform(562,276.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(2).p("AlyHZICwAAIGZuxICcAA");
	this.shape_19.setTransform(562,277.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(2).p("AlyHfICwAAIGZu9ICcAA");
	this.shape_20.setTransform(562,278);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(2).p("AlyHlICwAAIGZvJICcAA");
	this.shape_21.setTransform(562,278.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(2).p("AlyHrICwAAIGZvVICcAA");
	this.shape_22.setTransform(562,279.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(2).p("AlyHxICwAAIGZvhICcAA");
	this.shape_23.setTransform(562,279.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(2).p("AlyH3ICwAAIGZvtICcAA");
	this.shape_24.setTransform(562,280.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(2).p("AlyH9ICwAAIGZv4ICcAA");
	this.shape_25.setTransform(562,280.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(2).p("AlyICICwAAIGZwDICcAA");
	this.shape_26.setTransform(562,281.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(2).p("AlyIIICwAAIGZwPICcAA");
	this.shape_27.setTransform(562,282.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(2).p("AlyIOICwAAIGZwbICcAA");
	this.shape_28.setTransform(562,282.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(2).p("AlyIUICwAAIGZwnICcAA");
	this.shape_29.setTransform(562,283.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(2).p("AlyIaICwAAIGZwzICcAA");
	this.shape_30.setTransform(562,283.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(2).p("AlyIgICwAAIGZw/ICcAA");
	this.shape_31.setTransform(562,284.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(2).p("AlyImICwAAIGZxLICcAA");
	this.shape_32.setTransform(562,285);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(2).p("AlyIsICwAAIGZxXICcAA");
	this.shape_33.setTransform(562,285.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(2).p("AlyIxICwAAIGZxiICcAA");
	this.shape_34.setTransform(562,286.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(2).p("AFzo3IibAAImZRvIixAA");
	this.shape_35.setTransform(562,286.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(2).p("AlyIvICwAAIGZxdICcAA");
	this.shape_36.setTransform(562,286);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(2).p("AlyInICwAAIGaxNICbAA");
	this.shape_37.setTransform(562,285.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(2).p("AlyIfICwAAIGaw9ICbAA");
	this.shape_38.setTransform(562,284.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(2).p("AlzIXICxAAIGawtICbAA");
	this.shape_39.setTransform(562,283.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(2).p("AlzIOICxAAIGawcICbAA");
	this.shape_40.setTransform(562,282.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(2).p("AlzIGICxAAIGawLICcAA");
	this.shape_41.setTransform(561.9,281.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(2).p("AlzH+ICxAAIGav7ICcAA");
	this.shape_42.setTransform(561.9,281.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(2).p("AlzH2ICwAAIGbvrICcAA");
	this.shape_43.setTransform(561.9,280.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(2).p("AlzHuICwAAIGbvaICcAA");
	this.shape_44.setTransform(561.9,279.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(2).p("AlzHlICwAAIGcvJICbAA");
	this.shape_45.setTransform(561.9,278.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(2).p("AlzHdICwAAIGcu5ICbAA");
	this.shape_46.setTransform(561.9,277.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(2).p("Al0HVICxAAIGcupICcAA");
	this.shape_47.setTransform(561.9,277);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(2).p("Al0HNICxAAIGcuZICcAA");
	this.shape_48.setTransform(561.9,276.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(2).p("Al0HFICxAAIGcuJICcAA");
	this.shape_49.setTransform(561.8,275.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(2).p("Al0G8ICxAAIGct3ICcAA");
	this.shape_50.setTransform(561.8,274.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(2).p("Al0G0ICxAAIGdtnICbAA");
	this.shape_51.setTransform(561.8,273.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(2).p("Al0GsICxAAIGdtXICbAA");
	this.shape_52.setTransform(561.8,272.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(2).p("Al0GkICwAAIGetHICbAA");
	this.shape_53.setTransform(561.8,272);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(2).p("Al0GbICwAAIGes2ICbAA");
	this.shape_54.setTransform(561.8,271.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(2).p("Al1GTICxAAIGeslICcAA");
	this.shape_55.setTransform(561.8,270.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(2).p("AF2mKIicAAImeMVIiwAA");
	this.shape_56.setTransform(561.8,269.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(2).p("AF2khIicAAImeJDIiwAA");
	this.shape_57.setTransform(561.8,280.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(2).p("Al1EqICxAAIGepTICcAA");
	this.shape_58.setTransform(561.8,280.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(2).p("Al1ExICxAAIGephICcAA");
	this.shape_59.setTransform(561.8,281.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(2).p("Al1E5ICxAAIGepxICcAA");
	this.shape_60.setTransform(561.8,282.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(2).p("Al1FAICxAAIGeqAICcAA");
	this.shape_61.setTransform(561.8,283.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(2).p("Al1FIICxAAIGeqPICcAA");
	this.shape_62.setTransform(561.8,283.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(2).p("Al1FQICxAAIGeqfICcAA");
	this.shape_63.setTransform(561.8,284.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(2).p("Al1FXICxAAIGeqtICcAA");
	this.shape_64.setTransform(561.8,285.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(2).p("Al1FfICxAAIGeq9ICcAA");
	this.shape_65.setTransform(561.8,286.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(2).p("Al1FnICxAAIGerMICcAA");
	this.shape_66.setTransform(561.8,286.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(2).p("Al1FuICxAAIGerbICcAA");
	this.shape_67.setTransform(561.8,287.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(2).p("Al1F2ICxAAIGerrICcAA");
	this.shape_68.setTransform(561.8,288.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(2).p("Al1F9ICxAAIGer5ICcAA");
	this.shape_69.setTransform(561.8,289.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(2).p("Al1GFICxAAIGesJICcAA");
	this.shape_70.setTransform(561.8,290);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(2).p("Al1GMICxAAIGesYICcAA");
	this.shape_71.setTransform(561.8,290.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(2).p("Al1GUICxAAIGesnICcAA");
	this.shape_72.setTransform(561.8,291.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(2).p("Al1GcICxAAIGes3ICcAA");
	this.shape_73.setTransform(561.8,292.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(2).p("Al1GjICxAAIGetFICcAA");
	this.shape_74.setTransform(561.8,293);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(2).p("Al1GrICxAAIGetVICcAA");
	this.shape_75.setTransform(561.8,293.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(2).p("Al1GyICxAAIGetjICcAA");
	this.shape_76.setTransform(561.8,294.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(2).p("Al1G6ICxAAIGetzICcAA");
	this.shape_77.setTransform(561.8,295.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(2).p("Al1HCICxAAIGeuDICcAA");
	this.shape_78.setTransform(561.8,296);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(2).p("Al1HKICxAAIGeuTICcAA");
	this.shape_79.setTransform(561.8,296.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(2).p("Al1HRICxAAIGeuhICcAA");
	this.shape_80.setTransform(561.8,297.6);
	this.shape_80._off = true;

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(2).p("AF2jAIicAAImeGBIiwAA");
	this.shape_81.setTransform(561.8,289.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(2).p("Al1DIICxAAIGemPICcAA");
	this.shape_82.setTransform(561.8,290.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(2).p("Al1DPICxAAIGemdICcAA");
	this.shape_83.setTransform(561.8,291.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(2).p("Al1DXICxAAIGemsICcAA");
	this.shape_84.setTransform(561.8,291.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(2).p("Al1DeICxAAIGem7ICcAA");
	this.shape_85.setTransform(561.8,292.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(2).p("Al1DlICxAAIGenJICcAA");
	this.shape_86.setTransform(561.8,293.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(2).p("Al1DsICxAAIGenXICcAA");
	this.shape_87.setTransform(561.8,294.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(2).p("Al1DzICxAAIGenlICcAA");
	this.shape_88.setTransform(561.8,294.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(2).p("Al1D7ICxAAIGen1ICcAA");
	this.shape_89.setTransform(561.8,295.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(2).p("Al1ECICxAAIGeoDICcAA");
	this.shape_90.setTransform(561.8,296.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(2).p("Al1EJICxAAIGeoRICcAA");
	this.shape_91.setTransform(561.8,296.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(2).p("Al1EQICxAAIGeofICcAA");
	this.shape_92.setTransform(561.8,297.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(2).p("Al1EXICxAAIGeotICcAA");
	this.shape_93.setTransform(561.8,298.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(2).p("Al1EeICxAAIGeo7ICcAA");
	this.shape_94.setTransform(561.8,299.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFFFF").ss(2).p("Al1EmICxAAIGepKICcAA");
	this.shape_95.setTransform(561.8,299.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(2).p("Al1EtICxAAIGepZICcAA");
	this.shape_96.setTransform(561.8,300.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(2).p("Al1E0ICxAAIGepnICcAA");
	this.shape_97.setTransform(561.8,301.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(2).p("Al1E7ICxAAIGep1ICcAA");
	this.shape_98.setTransform(561.8,302);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFFFFF").ss(2).p("Al1FCICxAAIGeqDICcAA");
	this.shape_99.setTransform(561.8,302.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(2).p("Al1FJICxAAIGeqRICcAA");
	this.shape_100.setTransform(561.8,303.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(2).p("Al1FQICxAAIGeqgICcAA");
	this.shape_101.setTransform(561.8,304.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(2).p("Al1FYICxAAIGeqvICcAA");
	this.shape_102.setTransform(561.8,304.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FFFFFF").ss(2).p("Al1FmICxAAIGerLICcAA");
	this.shape_103.setTransform(561.8,306.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(2).p("Al1FgICxAAIGeq/ICcAA");
	this.shape_104.setTransform(561.8,305.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FFFFFF").ss(2).p("Al1FZICxAAIGeqxICcAA");
	this.shape_105.setTransform(561.8,305);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(2).p("Al1FTICxAAIGeqlICcAA");
	this.shape_106.setTransform(561.8,304.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FFFFFF").ss(2).p("Al1FNICxAAIGeqZICcAA");
	this.shape_107.setTransform(561.8,303.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").ss(2).p("Al1FGICxAAIGeqLICcAA");
	this.shape_108.setTransform(561.8,303.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFFFFF").ss(2).p("Al1FAICxAAIGep/ICcAA");
	this.shape_109.setTransform(561.8,302.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(2).p("Al1E6ICxAAIGepyICcAA");
	this.shape_110.setTransform(561.8,301.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFFFFF").ss(2).p("Al1EzICxAAIGeplICcAA");
	this.shape_111.setTransform(561.8,301.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(2).p("Al1EnICxAAIGepMICcAA");
	this.shape_112.setTransform(561.8,299.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFFFFF").ss(2).p("Al1EgICxAAIGeo/ICcAA");
	this.shape_113.setTransform(561.8,299.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(2).p("Al1EaICxAAIGeozICcAA");
	this.shape_114.setTransform(561.8,298.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FFFFFF").ss(2).p("Al1EUICxAAIGeonICcAA");
	this.shape_115.setTransform(561.8,298);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(2).p("Al1ENICxAAIGeoZICcAA");
	this.shape_116.setTransform(561.8,297.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFFFFF").ss(2).p("Al1EHICxAAIGeoNICcAA");
	this.shape_117.setTransform(561.8,296.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(2).p("Al1EAICxAAIGeoAICcAA");
	this.shape_118.setTransform(561.8,296.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FFFFFF").ss(2).p("Al1D6ICxAAIGenzICcAA");
	this.shape_119.setTransform(561.8,295.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(2).p("Al1D0ICxAAIGennICcAA");
	this.shape_120.setTransform(561.8,294.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FFFFFF").ss(2).p("Al1DuICxAAIGenbICcAA");
	this.shape_121.setTransform(561.8,294.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(2).p("Al1DnICxAAIGenNICcAA");
	this.shape_122.setTransform(561.8,293.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FFFFFF").ss(2).p("Al1DhICxAAIGenBICcAA");
	this.shape_123.setTransform(561.8,292.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFFFFF").ss(2).p("Al1DbICxAAIGem0ICcAA");
	this.shape_124.setTransform(561.8,292.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FFFFFF").ss(2).p("Al1DUICxAAIGemnICcAA");
	this.shape_125.setTransform(561.8,291.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FFFFFF").ss(2).p("Al1DOICxAAIGembICcAA");
	this.shape_126.setTransform(561.8,291);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#FFFFFF").ss(2).p("Al1DHICxAAIGemNICcAA");
	this.shape_127.setTransform(561.8,290.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FFFFFF").ss(2).p("AF2hcIicAAImeC5IiwAA");
	this.shape_128.setTransform(561.8,299.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#FFFFFF").ss(2).p("Al1BlICxAAIGejJICcAA");
	this.shape_129.setTransform(561.8,300.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FFFFFF").ss(2).p("Al1BuICxAAIGejaICcAA");
	this.shape_130.setTransform(561.8,301.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FFFFFF").ss(2).p("Al1B2ICxAAIGejrICcAA");
	this.shape_131.setTransform(561.8,302.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FFFFFF").ss(2).p("Al1B+ICxAAIGej7ICcAA");
	this.shape_132.setTransform(561.8,303.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#FFFFFF").ss(2).p("Al1CGICxAAIGekLICcAA");
	this.shape_133.setTransform(561.8,303.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FFFFFF").ss(2).p("Al1CPICxAAIGekdICcAA");
	this.shape_134.setTransform(561.8,304.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#FFFFFF").ss(2).p("Al1CXICxAAIGektICcAA");
	this.shape_135.setTransform(561.8,305.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FFFFFF").ss(2).p("Al1CfICxAAIGek9ICcAA");
	this.shape_136.setTransform(561.8,306.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FFFFFF").ss(2).p("Al1CnICxAAIGelNICcAA");
	this.shape_137.setTransform(561.8,307.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#FFFFFF").ss(2).p("Al1CwICxAAIGelfICcAA");
	this.shape_138.setTransform(561.8,308);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FFFFFF").ss(2).p("Al1C4ICxAAIGelvICcAA");
	this.shape_139.setTransform(561.8,308.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FFFFFF").ss(2).p("Al1DAICxAAIGel/ICcAA");
	this.shape_140.setTransform(561.8,309.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FFFFFF").ss(2).p("Al1DRICxAAIGemgICcAA");
	this.shape_141.setTransform(561.8,311.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FFFFFF").ss(2).p("Al1DZICxAAIGemxICcAA");
	this.shape_142.setTransform(561.8,312.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#FFFFFF").ss(2).p("Al1DpICxAAIGenRICcAA");
	this.shape_143.setTransform(561.8,313.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FFFFFF").ss(2).p("Al1DxICxAAIGeniICcAA");
	this.shape_144.setTransform(561.8,314.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#FFFFFF").ss(2).p("Al1EKICxAAIGeoTICcAA");
	this.shape_145.setTransform(561.8,317.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#FFFFFF").ss(2).p("Al1ETICxAAIGeokICcAA");
	this.shape_146.setTransform(561.8,317.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#FFFFFF").ss(2).p("Al1EbICxAAIGeo1ICcAA");
	this.shape_147.setTransform(561.8,318.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FFFFFF").ss(2).p("Al1ETICxAAIGeolICcAA");
	this.shape_148.setTransform(561.8,317.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#FFFFFF").ss(2).p("Al1ELICxAAIGeoVICcAA");
	this.shape_149.setTransform(561.8,317.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FFFFFF").ss(2).p("Al1EDICxAAIGeoFICcAA");
	this.shape_150.setTransform(561.8,316.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#FFFFFF").ss(2).p("Al1DrICxAAIGenVICcAA");
	this.shape_151.setTransform(561.8,314);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FFFFFF").ss(2).p("Al1DkICxAAIGenHICcAA");
	this.shape_152.setTransform(561.8,313.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#FFFFFF").ss(2).p("Al1DcICxAAIGem2ICcAA");
	this.shape_153.setTransform(561.8,312.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FFFFFF").ss(2).p("Al1DTICxAAIGemmICcAA");
	this.shape_154.setTransform(561.8,311.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#FFFFFF").ss(2).p("Al1DMICxAAIGemXICcAA");
	this.shape_155.setTransform(561.8,310.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#FFFFFF").ss(2).p("Al1DEICxAAIGemHICcAA");
	this.shape_156.setTransform(561.8,310);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#FFFFFF").ss(2).p("Al1C8ICxAAIGel3ICcAA");
	this.shape_157.setTransform(561.8,309.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#FFFFFF").ss(2).p("Al1C0ICxAAIGelnICcAA");
	this.shape_158.setTransform(561.8,308.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#FFFFFF").ss(2).p("Al1CsICxAAIGelXICcAA");
	this.shape_159.setTransform(561.8,307.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#FFFFFF").ss(2).p("Al1CkICxAAIGelHICcAA");
	this.shape_160.setTransform(561.8,306.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#FFFFFF").ss(2).p("Al1CcICxAAIGek3ICcAA");
	this.shape_161.setTransform(561.8,306.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#FFFFFF").ss(2).p("Al1CUICxAAIGeknICcAA");
	this.shape_162.setTransform(561.8,305.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#FFFFFF").ss(2).p("Al1CNICxAAIGekZICcAA");
	this.shape_163.setTransform(561.8,304.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#FFFFFF").ss(2).p("Al1CFICxAAIGekJICcAA");
	this.shape_164.setTransform(561.8,303.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#FFFFFF").ss(2).p("Al1B9ICxAAIGej5ICcAA");
	this.shape_165.setTransform(561.8,302.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#FFFFFF").ss(2).p("Al1B1ICxAAIGejpICcAA");
	this.shape_166.setTransform(561.8,302.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#FFFFFF").ss(2).p("Al1BtICxAAIGejZICcAA");
	this.shape_167.setTransform(561.8,301.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#FFFFFF").ss(2).p("AF2gCIicAAImeAFIiwAA");
	this.shape_168.setTransform(561.8,308.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#FFFFFF").ss(2).p("Al1ALICxAAIGegVICcAA");
	this.shape_169.setTransform(561.8,309.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#FFFFFF").ss(2).p("Al1ASICxAAIGegjICcAA");
	this.shape_170.setTransform(561.8,310.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#FFFFFF").ss(2).p("Al1AaICxAAIGegzICcAA");
	this.shape_171.setTransform(561.8,311.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#FFFFFF").ss(2).p("Al1AiICxAAIGehCICcAA");
	this.shape_172.setTransform(561.8,312.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#FFFFFF").ss(2).p("Al1ApICxAAIGehRICcAA");
	this.shape_173.setTransform(561.8,312.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#FFFFFF").ss(2).p("Al1AwICxAAIGehgICcAA");
	this.shape_174.setTransform(561.8,313.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#FFFFFF").ss(2).p("Al1A4ICxAAIGehvICcAA");
	this.shape_175.setTransform(561.8,314.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#FFFFFF").ss(2).p("Al1BAICxAAIGeh/ICcAA");
	this.shape_176.setTransform(561.8,315.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#FFFFFF").ss(2).p("Al1BIICxAAIGeiOICcAA");
	this.shape_177.setTransform(561.8,316.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#FFFFFF").ss(2).p("Al1BPICxAAIGeidICcAA");
	this.shape_178.setTransform(561.8,317);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#FFFFFF").ss(2).p("Al1BXICxAAIGeisICcAA");
	this.shape_179.setTransform(561.8,317.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#FFFFFF").ss(2).p("Al1BeICxAAIGei7ICcAA");
	this.shape_180.setTransform(561.8,318.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#FFFFFF").ss(2).p("Al1BmICxAAIGejLICcAA");
	this.shape_181.setTransform(561.8,319.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#FFFFFF").ss(2).p("Al1B9ICxAAIGej4ICcAA");
	this.shape_182.setTransform(561.8,321.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#FFFFFF").ss(2).p("Al1CEICxAAIGekHICcAA");
	this.shape_183.setTransform(561.8,322.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#FFFFFF").ss(2).p("Al1CLICxAAIGekVICcAA");
	this.shape_184.setTransform(561.8,323.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#FFFFFF").ss(2).p("Al1CTICxAAIGeklICcAA");
	this.shape_185.setTransform(561.8,324.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#FFFFFF").ss(2).p("Al1CbICxAAIGek1ICcAA");
	this.shape_186.setTransform(561.8,325.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#FFFFFF").ss(2).p("Al1CjICxAAIGelFICcAA");
	this.shape_187.setTransform(561.8,326);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#FFFFFF").ss(2).p("Al1CqICxAAIGelTICcAA");
	this.shape_188.setTransform(561.8,326.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#FFFFFF").ss(2).p("Al1CyICxAAIGeljICcAA");
	this.shape_189.setTransform(561.8,327.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#FFFFFF").ss(2).p("Al1C5ICxAAIGelxICcAA");
	this.shape_190.setTransform(561.8,328.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#FFFFFF").ss(2).p("AFwBkIibAAImTjHIixAA");
	this.shape_191.setTransform(561.2,319);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#FFFFFF").ss(2).p("AlvhUICwAAIGUCpICbAA");
	this.shape_192.setTransform(561.2,320.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#FFFFFF").ss(2).p("AlvhGICwAAIGUCNICbAA");
	this.shape_193.setTransform(561.2,321.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#FFFFFF").ss(2).p("Alvg3ICwAAIGUBvICbAA");
	this.shape_194.setTransform(561.2,323.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#FFFFFF").ss(2).p("AlwgpICxAAIGUBTICcAA");
	this.shape_195.setTransform(561.2,324.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#FFFFFF").ss(2).p("AlwgbICxAAIGUA3ICcAA");
	this.shape_196.setTransform(561.2,326.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#FFFFFF").ss(2).p("AlwgMICxAAIGUAZICcAA");
	this.shape_197.setTransform(561.1,327.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#FFFFFF").ss(2).p("AlwACILhgC");
	this.shape_198.setTransform(561.1,329.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#FFFFFF").ss(2).p("AlwAQICwAAIGWgfICbAA");
	this.shape_199.setTransform(561.1,330.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#FFFFFF").ss(2).p("AlwAfICwAAIGWg9ICbAA");
	this.shape_200.setTransform(561.1,332.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#FFFFFF").ss(2).p("AlwAtICwAAIGWhZICbAA");
	this.shape_201.setTransform(561.1,333.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#FFFFFF").ss(2).p("AlwA7ICwAAIGWh1ICbAA");
	this.shape_202.setTransform(561.1,335);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#FFFFFF").ss(2).p("AlwBKICwAAIGWiTICbAA");
	this.shape_203.setTransform(561.1,336.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#FFFFFF").ss(2).p("AlwBYICwAAIGWivICcAA");
	this.shape_204.setTransform(561.1,337.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#FFFFFF").ss(2).p("AlwBnICwAAIGWjNICcAA");
	this.shape_205.setTransform(561.1,339.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#FFFFFF").ss(2).p("AlxB1ICxAAIGWjpICcAA");
	this.shape_206.setTransform(561,340.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#FFFFFF").ss(2).p("AlxCEICxAAIGWkHICcAA");
	this.shape_207.setTransform(561,342.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#FFFFFF").ss(2).p("AlxCSICwAAIGYkjICbAA");
	this.shape_208.setTransform(561,343.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#FFFFFF").ss(2).p("AlxChICwAAIGYlBICbAA");
	this.shape_209.setTransform(561,345.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FFFFFF").ss(2).p("AlxCvICwAAIGYldICbAA");
	this.shape_210.setTransform(561,346.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#FFFFFF").ss(2).p("AlxC9ICwAAIGYl5ICbAA");
	this.shape_211.setTransform(561,348);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#FFFFFF").ss(2).p("AlyDMICxAAIGYmXICbAA");
	this.shape_212.setTransform(561,349.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#FFFFFF").ss(2).p("AlyDaICxAAIGYm0ICbAA");
	this.shape_213.setTransform(561,350.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#FFFFFF").ss(2).p("AlyDpICxAAIGYnRICcAA");
	this.shape_214.setTransform(560.9,352.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#FFFFFF").ss(2).p("AlyD4ICxAAIGYnvICcAA");
	this.shape_215.setTransform(560.9,353.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#FFFFFF").ss(2).p("AFwDFIibAAImTmJIixAA");
	this.shape_216.setTransform(561.2,328.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#FFFFFF").ss(2).p("Alvi5ICwAAIGUFzICbAA");
	this.shape_217.setTransform(561.2,329.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#FFFFFF").ss(2).p("AlvitICwAAIGUFbICbAA");
	this.shape_218.setTransform(561.2,331.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#FFFFFF").ss(2).p("AlviiICwAAIGUFFICbAA");
	this.shape_219.setTransform(561.2,332.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#FFFFFF").ss(2).p("AlwiXICxAAIGUEvICcAA");
	this.shape_220.setTransform(561.2,333.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#FFFFFF").ss(2).p("AlwiLICxAAIGUEXICcAA");
	this.shape_221.setTransform(561.2,334.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#FFFFFF").ss(2).p("AlwiAICxAAIGUEBICcAA");
	this.shape_222.setTransform(561.1,335.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#FFFFFF").ss(2).p("Alwh1ICxAAIGUDrICcAA");
	this.shape_223.setTransform(561.1,336.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#FFFFFF").ss(2).p("AlwhpICwAAIGWDTICbAA");
	this.shape_224.setTransform(561.1,337.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#FFFFFF").ss(2).p("AlwheICwAAIGWC9ICbAA");
	this.shape_225.setTransform(561.1,339);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#FFFFFF").ss(2).p("AlwhSICwAAIGWClICbAA");
	this.shape_226.setTransform(561.1,340.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#FFFFFF").ss(2).p("AlwhHICwAAIGWCPICbAA");
	this.shape_227.setTransform(561.1,341.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#FFFFFF").ss(2).p("Alwg8ICwAAIGWB5ICcAA");
	this.shape_228.setTransform(561.1,342.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#FFFFFF").ss(2).p("AlwgwICwAAIGWBhICcAA");
	this.shape_229.setTransform(561.1,343.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#FFFFFF").ss(2).p("AlxglICxAAIGWBLICcAA");
	this.shape_230.setTransform(561,344.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#FFFFFF").ss(2).p("AlxgZICxAAIGWAzICcAA");
	this.shape_231.setTransform(561,345.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#FFFFFF").ss(2).p("AlxgOICwAAIGYAdICbAA");
	this.shape_232.setTransform(561,347);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#FFFFFF").ss(2).p("AlxgCILjAG");
	this.shape_233.setTransform(561,348.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#FFFFFF").ss(2).p("AlxAIICwAAIGYgPICbAA");
	this.shape_234.setTransform(561,349.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#FFFFFF").ss(2).p("AlxATICwAAIGYglICbAA");
	this.shape_235.setTransform(561,350.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#FFFFFF").ss(2).p("AlyAfICxAAIGYg9ICbAA");
	this.shape_236.setTransform(561,351.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#FFFFFF").ss(2).p("AlyAqICxAAIGYhTICbAA");
	this.shape_237.setTransform(561,352.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#FFFFFF").ss(2).p("AlyA1ICxAAIGYhqICcAA");
	this.shape_238.setTransform(560.9,353.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#FFFFFF").ss(2).p("AlyBBICxAAIGYiBICcAA");
	this.shape_239.setTransform(560.9,355);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#FFFFFF").ss(2).p("AlyA2ICxAAIGYhrICcAA");
	this.shape_240.setTransform(560.9,354);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#FFFFFF").ss(2).p("AlyAsICxAAIGYhXICbAA");
	this.shape_241.setTransform(561,352.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#FFFFFF").ss(2).p("AlyAhICxAAIGYhCICbAA");
	this.shape_242.setTransform(561,351.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#FFFFFF").ss(2).p("AlxAXICwAAIGYgtICbAA");
	this.shape_243.setTransform(561,350.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#FFFFFF").ss(2).p("AlxANICwAAIGYgZICbAA");
	this.shape_244.setTransform(561,349.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#FFFFFF").ss(2).p("AlxACILjgD");
	this.shape_245.setTransform(561,348.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#FFFFFF").ss(2).p("AlxgHICwAAIGYAQICbAA");
	this.shape_246.setTransform(561,347.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#FFFFFF").ss(2).p("AlxgSICxAAIGWAlICcAA");
	this.shape_247.setTransform(561,346.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#FFFFFF").ss(2).p("AlxgcICxAAIGWA5ICcAA");
	this.shape_248.setTransform(561,345.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#FFFFFF").ss(2).p("AlxgnICxAAIGWBPICcAA");
	this.shape_249.setTransform(561,344.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#FFFFFF").ss(2).p("AlwgyICwAAIGWBlICcAA");
	this.shape_250.setTransform(561.1,343.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#FFFFFF").ss(2).p("AlwhGICwAAIGWCNICbAA");
	this.shape_251.setTransform(561.1,341.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#FFFFFF").ss(2).p("AlwhRICwAAIGWCjICbAA");
	this.shape_252.setTransform(561.1,340.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#FFFFFF").ss(2).p("AlwhbICwAAIGWC3ICbAA");
	this.shape_253.setTransform(561.1,339.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#FFFFFF").ss(2).p("AlwhmICwAAIGWDNICbAA");
	this.shape_254.setTransform(561.1,338.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#FFFFFF").ss(2).p("AlwhwICwAAIGWDhICbAA");
	this.shape_255.setTransform(561.1,337.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#FFFFFF").ss(2).p("Alwh7ICxAAIGUD3ICcAA");
	this.shape_256.setTransform(561.1,336.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#FFFFFF").ss(2).p("AlwiFICxAAIGUELICcAA");
	this.shape_257.setTransform(561.1,335.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#FFFFFF").ss(2).p("AlwiQICxAAIGUEhICcAA");
	this.shape_258.setTransform(561.2,334);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#FFFFFF").ss(2).p("AlwiaICxAAIGUE1ICcAA");
	this.shape_259.setTransform(561.2,333);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#FFFFFF").ss(2).p("AlvilICwAAIGUFLICbAA");
	this.shape_260.setTransform(561.2,331.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#FFFFFF").ss(2).p("AlvivICwAAIGUFfICbAA");
	this.shape_261.setTransform(561.2,330.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#FFFFFF").ss(2).p("Alvi6ICwAAIGUF1ICbAA");
	this.shape_262.setTransform(561.2,329.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#FFFFFF").ss(2).p("AFuEpIicAAImOpRIiwAA");
	this.shape_263.setTransform(561,338.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#FFFFFF").ss(2).p("AltkeICxAAIGOI9ICbAA");
	this.shape_264.setTransform(561,339.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#FFFFFF").ss(2).p("AltkUICxAAIGOIpICbAA");
	this.shape_265.setTransform(561,340.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#FFFFFF").ss(2).p("AltkKICxAAIGOIVICbAA");
	this.shape_266.setTransform(561,341.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#FFFFFF").ss(2).p("AltkAICxAAIGOIBICbAA");
	this.shape_267.setTransform(561,342.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#FFFFFF").ss(2).p("Altj2ICxAAIGOHtICbAA");
	this.shape_268.setTransform(561,343.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#FFFFFF").ss(2).p("AltjsICxAAIGOHZICbAA");
	this.shape_269.setTransform(561,344.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#FFFFFF").ss(2).p("AltjiICxAAIGOHFICbAA");
	this.shape_270.setTransform(561,345.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#FFFFFF").ss(2).p("AltjYICxAAIGOGxICbAA");
	this.shape_271.setTransform(561,346.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#FFFFFF").ss(2).p("AltjOICxAAIGOGdICbAA");
	this.shape_272.setTransform(561,347.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#FFFFFF").ss(2).p("AltjEICxAAIGOGJICbAA");
	this.shape_273.setTransform(561,348.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#FFFFFF").ss(2).p("Alti6ICxAAIGOF1ICbAA");
	this.shape_274.setTransform(561,349.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#FFFFFF").ss(2).p("AltiwICxAAIGOFhICbAA");
	this.shape_275.setTransform(561,350.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#FFFFFF").ss(2).p("AltimICxAAIGOFNICbAA");
	this.shape_276.setTransform(561,351.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#FFFFFF").ss(2).p("AlticICxAAIGOE5ICbAA");
	this.shape_277.setTransform(561,352.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#FFFFFF").ss(2).p("AltiSICxAAIGOElICbAA");
	this.shape_278.setTransform(561,353.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#FFFFFF").ss(2).p("AltiIICxAAIGOERICbAA");
	this.shape_279.setTransform(561,354.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#FFFFFF").ss(2).p("Alth+ICxAAIGOD9ICbAA");
	this.shape_280.setTransform(561,355.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#FFFFFF").ss(2).p("Alth0ICxAAIGODpICbAA");
	this.shape_281.setTransform(561,356.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#FFFFFF").ss(2).p("AlthqICxAAIGODVICbAA");
	this.shape_282.setTransform(561,357.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#FFFFFF").ss(2).p("AlthgICxAAIGODBICbAA");
	this.shape_283.setTransform(561,358.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#FFFFFF").ss(2).p("AlthWICxAAIGOCtICbAA");
	this.shape_284.setTransform(561,359.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#FFFFFF").ss(2).p("AlthMICxAAIGOCZICbAA");
	this.shape_285.setTransform(561,360.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#FFFFFF").ss(2).p("AlthCICxAAIGOCFICbAA");
	this.shape_286.setTransform(561,361.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#FFFFFF").ss(2).p("Altg4ICxAAIGOBxICbAA");
	this.shape_287.setTransform(561,362.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#FFFFFF").ss(2).p("AlthDICxAAIGOCHICbAA");
	this.shape_288.setTransform(561,361.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#FFFFFF").ss(2).p("AlthNICxAAIGOCbICbAA");
	this.shape_289.setTransform(561,360.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#FFFFFF").ss(2).p("AlthXICxAAIGOCwICbAA");
	this.shape_290.setTransform(561,359.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#FFFFFF").ss(2).p("AlthiICxAAIGODFICbAA");
	this.shape_291.setTransform(561,358.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#FFFFFF").ss(2).p("AlthsICxAAIGODZICbAA");
	this.shape_292.setTransform(561,357.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#FFFFFF").ss(2).p("Alth3ICxAAIGODvICbAA");
	this.shape_293.setTransform(561,356.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#FFFFFF").ss(2).p("AltiBICxAAIGOEDICbAA");
	this.shape_294.setTransform(561,355.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#FFFFFF").ss(2).p("AltiMICxAAIGOEZICbAA");
	this.shape_295.setTransform(561,354.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#FFFFFF").ss(2).p("AltiWICxAAIGOEtICbAA");
	this.shape_296.setTransform(561,353.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#FFFFFF").ss(2).p("AltihICxAAIGOFCICbAA");
	this.shape_297.setTransform(561,352.4);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#FFFFFF").ss(2).p("AltirICxAAIGOFXICbAA");
	this.shape_298.setTransform(561,351.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#FFFFFF").ss(2).p("Alti2ICxAAIGOFtICbAA");
	this.shape_299.setTransform(561,350.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#FFFFFF").ss(2).p("AltjAICxAAIGOGBICbAA");
	this.shape_300.setTransform(561,349.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#FFFFFF").ss(2).p("AltjKICxAAIGOGVICbAA");
	this.shape_301.setTransform(561,348.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#FFFFFF").ss(2).p("AltjVICxAAIGOGrICbAA");
	this.shape_302.setTransform(561,347.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#FFFFFF").ss(2).p("AltjfICxAAIGOG/ICbAA");
	this.shape_303.setTransform(561,346.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#FFFFFF").ss(2).p("AltjqICxAAIGOHVICbAA");
	this.shape_304.setTransform(561,345);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#FFFFFF").ss(2).p("Altj0ICxAAIGOHpICbAA");
	this.shape_305.setTransform(561,344);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#FFFFFF").ss(2).p("Altj/ICxAAIGOH/ICbAA");
	this.shape_306.setTransform(561,343);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#FFFFFF").ss(2).p("AltkJICxAAIGOITICbAA");
	this.shape_307.setTransform(561,341.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#FFFFFF").ss(2).p("AltkUICxAAIGOIoICbAA");
	this.shape_308.setTransform(561,340.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#FFFFFF").ss(2).p("AFpGGIicAAImEsLIiwAA");
	this.shape_309.setTransform(560.5,348);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#FFFFFF").ss(2).p("Alol7ICxAAIGEL3ICbAA");
	this.shape_310.setTransform(560.5,349);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#FFFFFF").ss(2).p("AlolxICxAAIGELjICbAA");
	this.shape_311.setTransform(560.5,350);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#FFFFFF").ss(2).p("AlolnICxAAIGELPICbAA");
	this.shape_312.setTransform(560.5,351);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#FFFFFF").ss(2).p("AloldICxAAIGEK7ICbAA");
	this.shape_313.setTransform(560.5,352);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#FFFFFF").ss(2).p("AlolTICxAAIGEKnICbAA");
	this.shape_314.setTransform(560.5,353);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#FFFFFF").ss(2).p("AlolJICxAAIGEKTICbAA");
	this.shape_315.setTransform(560.5,354);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#FFFFFF").ss(2).p("Alok/ICxAAIGEJ/ICbAA");
	this.shape_316.setTransform(560.5,355);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#FFFFFF").ss(2).p("Alok1ICxAAIGEJrICbAA");
	this.shape_317.setTransform(560.5,356);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#FFFFFF").ss(2).p("AlokrICxAAIGEJXICbAA");
	this.shape_318.setTransform(560.5,357);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#FFFFFF").ss(2).p("AlokhICxAAIGEJDICbAA");
	this.shape_319.setTransform(560.5,358);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#FFFFFF").ss(2).p("AlokXICxAAIGEIvICbAA");
	this.shape_320.setTransform(560.5,359);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#FFFFFF").ss(2).p("AlokNICxAAIGEIbICbAA");
	this.shape_321.setTransform(560.5,360);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#FFFFFF").ss(2).p("AlokDICxAAIGEIHICbAA");
	this.shape_322.setTransform(560.5,361);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#FFFFFF").ss(2).p("Aloj5ICxAAIGEHzICbAA");
	this.shape_323.setTransform(560.5,362);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#FFFFFF").ss(2).p("AlojvICxAAIGEHfICbAA");
	this.shape_324.setTransform(560.5,363);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#FFFFFF").ss(2).p("AlojlICxAAIGEHLICbAA");
	this.shape_325.setTransform(560.5,364);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#FFFFFF").ss(2).p("AlojbICxAAIGEG3ICbAA");
	this.shape_326.setTransform(560.5,365);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#FFFFFF").ss(2).p("AlojRICxAAIGEGjICbAA");
	this.shape_327.setTransform(560.5,366);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#FFFFFF").ss(2).p("AlojHICxAAIGEGPICbAA");
	this.shape_328.setTransform(560.5,367);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#FFFFFF").ss(2).p("Aloi9ICxAAIGEF7ICbAA");
	this.shape_329.setTransform(560.5,368);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#FFFFFF").ss(2).p("AloizICxAAIGEFnICbAA");
	this.shape_330.setTransform(560.5,369);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#FFFFFF").ss(2).p("AloipICxAAIGEFTICbAA");
	this.shape_331.setTransform(560.5,370);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#FFFFFF").ss(2).p("AloifICxAAIGEE/ICbAA");
	this.shape_332.setTransform(560.5,371);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#FFFFFF").ss(2).p("AloiVICxAAIGEErICbAA");
	this.shape_333.setTransform(560.5,372);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#FFFFFF").ss(2).p("AFuH5IicAAImOvxIiwAA");
	this.shape_334.setTransform(561.5,359);
	this.shape_334._off = true;

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#FFFFFF").ss(2).p("AltnvICxAAIGOPfICbAA");
	this.shape_335.setTransform(561.5,359.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#FFFFFF").ss(2).p("AltnmICxAAIGOPNICbAA");
	this.shape_336.setTransform(561.5,360.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#FFFFFF").ss(2).p("AltndICxAAIGOO7ICbAA");
	this.shape_337.setTransform(561.5,361.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#FFFFFF").ss(2).p("AltnUICxAAIGOOpICbAA");
	this.shape_338.setTransform(561.5,362.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#FFFFFF").ss(2).p("AltnMICxAAIGOOZICbAA");
	this.shape_339.setTransform(561.5,363.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#FFFFFF").ss(2).p("AltnDICxAAIGOOHICbAA");
	this.shape_340.setTransform(561.5,364.3);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#FFFFFF").ss(2).p("Altm6ICxAAIGON1ICbAA");
	this.shape_341.setTransform(561.5,365.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#FFFFFF").ss(2).p("AltmxICxAAIGONjICbAA");
	this.shape_342.setTransform(561.5,366.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#FFFFFF").ss(2).p("AltmpICxAAIGONTICbAA");
	this.shape_343.setTransform(561.5,367);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#FFFFFF").ss(2).p("AltmgICxAAIGONBICbAA");
	this.shape_344.setTransform(561.5,367.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#FFFFFF").ss(2).p("AltmXICxAAIGOMvICbAA");
	this.shape_345.setTransform(561.5,368.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#FFFFFF").ss(2).p("AltmOICxAAIGOMdICbAA");
	this.shape_346.setTransform(561.5,369.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#FFFFFF").ss(2).p("AltmFICxAAIGOMLICbAA");
	this.shape_347.setTransform(561.5,370.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#FFFFFF").ss(2).p("Altl9ICxAAIGOL6ICbAA");
	this.shape_348.setTransform(561.5,371.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#FFFFFF").ss(2).p("Altl0ICxAAIGOLpICbAA");
	this.shape_349.setTransform(561.5,372.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#FFFFFF").ss(2).p("AltlrICxAAIGOLXICbAA");
	this.shape_350.setTransform(561.5,373.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#FFFFFF").ss(2).p("AltliICxAAIGOLFICbAA");
	this.shape_351.setTransform(561.5,374);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#FFFFFF").ss(2).p("AltlZICxAAIGOKzICbAA");
	this.shape_352.setTransform(561.5,374.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#FFFFFF").ss(2).p("AltlRICxAAIGOKjICbAA");
	this.shape_353.setTransform(561.5,375.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#FFFFFF").ss(2).p("AltlIICxAAIGOKRICbAA");
	this.shape_354.setTransform(561.5,376.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#FFFFFF").ss(2).p("Altk/ICxAAIGOJ/ICbAA");
	this.shape_355.setTransform(561.5,377.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#FFFFFF").ss(2).p("Altk2ICxAAIGOJtICbAA");
	this.shape_356.setTransform(561.5,378.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#FFFFFF").ss(2).p("AltktICxAAIGOJbICbAA");
	this.shape_357.setTransform(561.5,379.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#FFFFFF").ss(2).p("Altk1ICxAAIGOJrICbAA");
	this.shape_358.setTransform(561.5,378.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#FFFFFF").ss(2).p("Altk9ICxAAIGOJ8ICbAA");
	this.shape_359.setTransform(561.5,377.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#FFFFFF").ss(2).p("AltlGICxAAIGOKMICbAA");
	this.shape_360.setTransform(561.5,376.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#FFFFFF").ss(2).p("AltlOICxAAIGOKdICbAA");
	this.shape_361.setTransform(561.5,376);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#FFFFFF").ss(2).p("AltlWICxAAIGOKtICbAA");
	this.shape_362.setTransform(561.5,375.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#FFFFFF").ss(2).p("AltleICxAAIGOK9ICbAA");
	this.shape_363.setTransform(561.5,374.4);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#FFFFFF").ss(2).p("AltlmICxAAIGOLNICbAA");
	this.shape_364.setTransform(561.5,373.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#FFFFFF").ss(2).p("AltluICxAAIGOLdICbAA");
	this.shape_365.setTransform(561.5,372.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#FFFFFF").ss(2).p("Altl2ICxAAIGOLtICbAA");
	this.shape_366.setTransform(561.5,372);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#FFFFFF").ss(2).p("Altl+ICxAAIGOL9ICbAA");
	this.shape_367.setTransform(561.5,371.2);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#FFFFFF").ss(2).p("AltmGICxAAIGOMNICbAA");
	this.shape_368.setTransform(561.5,370.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#FFFFFF").ss(2).p("AltmfICxAAIGOM/ICbAA");
	this.shape_369.setTransform(561.5,367.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#FFFFFF").ss(2).p("AltmnICxAAIGONPICbAA");
	this.shape_370.setTransform(561.5,367.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#FFFFFF").ss(2).p("AltmvICxAAIGONfICbAA");
	this.shape_371.setTransform(561.5,366.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#FFFFFF").ss(2).p("Altm3ICxAAIGONvICbAA");
	this.shape_372.setTransform(561.5,365.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#FFFFFF").ss(2).p("Altm/ICxAAIGON/ICbAA");
	this.shape_373.setTransform(561.5,364.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#FFFFFF").ss(2).p("AltnHICxAAIGOOPICbAA");
	this.shape_374.setTransform(561.5,363.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#FFFFFF").ss(2).p("AltnPICxAAIGOOfICbAA");
	this.shape_375.setTransform(561.5,363.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#FFFFFF").ss(2).p("AltnXICxAAIGOOvICbAA");
	this.shape_376.setTransform(561.5,362.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#FFFFFF").ss(2).p("AltngICxAAIGOPBICbAA");
	this.shape_377.setTransform(561.5,361.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#FFFFFF").ss(2).p("AltnnICxAAIGOPQICbAA");
	this.shape_378.setTransform(561.5,360.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#FFFFFF").ss(2).p("AltnwICxAAIGOPhICbAA");
	this.shape_379.setTransform(561.5,359.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#FFFFFF").ss(2).p("AltnnICxAAIGOPPICbAA");
	this.shape_380.setTransform(561.5,360.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#FFFFFF").ss(2).p("AltneICxAAIGOO9ICbAA");
	this.shape_381.setTransform(561.5,361.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#FFFFFF").ss(2).p("AltnWICxAAIGOOtICbAA");
	this.shape_382.setTransform(561.5,362.4);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#FFFFFF").ss(2).p("AltnNICxAAIGOObICbAA");
	this.shape_383.setTransform(561.5,363.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#FFFFFF").ss(2).p("AltnFICxAAIGOOLICbAA");
	this.shape_384.setTransform(561.5,364.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#FFFFFF").ss(2).p("Altm9ICxAAIGON7ICbAA");
	this.shape_385.setTransform(561.5,365);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#FFFFFF").ss(2).p("Altm0ICxAAIGONpICbAA");
	this.shape_386.setTransform(561.5,365.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#FFFFFF").ss(2).p("AltmrICxAAIGONYICbAA");
	this.shape_387.setTransform(561.5,366.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#FFFFFF").ss(2).p("AltmjICxAAIGONHICbAA");
	this.shape_388.setTransform(561.5,367.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#FFFFFF").ss(2).p("AltmbICxAAIGOM2ICbAA");
	this.shape_389.setTransform(561.5,368.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#FFFFFF").ss(2).p("AltmSICxAAIGOMlICbAA");
	this.shape_390.setTransform(561.5,369.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#FFFFFF").ss(2).p("AltmJICxAAIGOMTICbAA");
	this.shape_391.setTransform(561.5,370.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#FFFFFF").ss(2).p("AltmBICxAAIGOMDICbAA");
	this.shape_392.setTransform(561.5,370.9);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#FFFFFF").ss(2).p("Altl5ICxAAIGOLzICbAA");
	this.shape_393.setTransform(561.5,371.8);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#FFFFFF").ss(2).p("AltlwICxAAIGOLhICbAA");
	this.shape_394.setTransform(561.5,372.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#FFFFFF").ss(2).p("AltloICxAAIGOLRICbAA");
	this.shape_395.setTransform(561.5,373.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#FFFFFF").ss(2).p("AltlfICxAAIGOK/ICbAA");
	this.shape_396.setTransform(561.5,374.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#FFFFFF").ss(2).p("AltlXICxAAIGOKvICbAA");
	this.shape_397.setTransform(561.5,375.1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#FFFFFF").ss(2).p("AltlGICxAAIGOKNICbAA");
	this.shape_398.setTransform(561.5,376.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#FFFFFF").ss(2).p("Altk9ICxAAIGOJ7ICbAA");
	this.shape_399.setTransform(561.5,377.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#FFFFFF").ss(2).p("AltlEICxAAIGOKJICbAA");
	this.shape_400.setTransform(561.5,377);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#FFFFFF").ss(2).p("AltlMICxAAIGOKZICbAA");
	this.shape_401.setTransform(561.5,376.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#FFFFFF").ss(2).p("AltlUICxAAIGOKpICbAA");
	this.shape_402.setTransform(561.5,375.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#FFFFFF").ss(2).p("AltlcICxAAIGOK5ICbAA");
	this.shape_403.setTransform(561.5,374.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#FFFFFF").ss(2).p("AltlkICxAAIGOLIICbAA");
	this.shape_404.setTransform(561.5,373.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#FFFFFF").ss(2).p("AltlzICxAAIGOLnICbAA");
	this.shape_405.setTransform(561.5,372.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#FFFFFF").ss(2).p("Altl7ICxAAIGOL3ICbAA");
	this.shape_406.setTransform(561.5,371.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#FFFFFF").ss(2).p("AltmDICxAAIGOMHICbAA");
	this.shape_407.setTransform(561.5,370.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#FFFFFF").ss(2).p("AltmLICxAAIGOMXICbAA");
	this.shape_408.setTransform(561.5,370);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#FFFFFF").ss(2).p("AltmaICxAAIGOM1ICbAA");
	this.shape_409.setTransform(561.5,368.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#FFFFFF").ss(2).p("AltmiICxAAIGONFICbAA");
	this.shape_410.setTransform(561.5,367.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#FFFFFF").ss(2).p("AltmqICxAAIGONVICbAA");
	this.shape_411.setTransform(561.5,366.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#FFFFFF").ss(2).p("Altm5ICxAAIGONzICbAA");
	this.shape_412.setTransform(561.5,365.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#FFFFFF").ss(2).p("AltnBICxAAIGOODICbAA");
	this.shape_413.setTransform(561.5,364.5);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#FFFFFF").ss(2).p("AltnJICxAAIGOOTICbAA");
	this.shape_414.setTransform(561.5,363.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#FFFFFF").ss(2).p("AltnRICxAAIGOOjICbAA");
	this.shape_415.setTransform(561.5,362.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#FFFFFF").ss(2).p("AltnYICxAAIGOOyICbAA");
	this.shape_416.setTransform(561.5,362.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#FFFFFF").ss(2).p("AltnoICxAAIGOPRICbAA");
	this.shape_417.setTransform(561.5,360.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},769).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65,p:{y:286.1}}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82,p:{y:290.5}}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88,p:{y:294.8}}]},1).to({state:[{t:this.shape_89,p:{y:295.5}}]},1).to({state:[{t:this.shape_90,p:{y:296.2}}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96,p:{y:300.5}}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_65,p:{y:305.5}}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_96,p:{y:300.6}}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119,p:{y:295.5}}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123,p:{y:292.9}}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_82,p:{y:310.5}}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_123,p:{y:313}}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_119,p:{y:315.4}}]},1).to({state:[{t:this.shape_90,p:{y:316.3}}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_89,p:{y:315.6}}]},1).to({state:[{t:this.shape_88,p:{y:314.8}}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166,p:{y:302.1}}]},1).to({state:[{t:this.shape_167,p:{y:301.3}}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_167,p:{y:320.3}}]},1).to({state:[{t:this.shape_166,p:{y:321.1}}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_166,p:{y:321.1}}]},1).to({state:[{t:this.shape_167,p:{y:320.3}}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228,p:{y:342.5}}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_228,p:{y:342.4}}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345,p:{y:368.7}}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_345,p:{y:368.8}}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377,p:{y:361.5}}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399,p:{y:377.7}}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_399,p:{y:377.8}}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_377,p:{y:361.4}}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_334}]},1).to({state:[]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(849).to({_off:false},0).wait(23).to({_off:true},1).wait(471));
	this.timeline.addTween(cjs.Tween.get(this.shape_334).wait(1215).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).wait(24).to({_off:true},1).wait(8));

	// Icons copy 9
	this.instance_7 = new lib.endlessness_icon("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(433.8,321.7,1,1,0,0,0,90.5,92.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1212).to({_off:false},0).to({alpha:1,startPosition:6},6).to({_off:true},118).wait(8));

	// Icons copy 8
	this.instance_8 = new lib.Tween17("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(433.8,319.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween18("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(433.8,319.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1163).to({_off:false},0).to({_off:true,alpha:1},6).wait(175));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1163).to({_off:false},6).wait(43).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(125));

	// Icons copy 7
	this.instance_10 = new lib.Tween15("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(433.9,319.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween16("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(433.9,319.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1114).to({_off:false},0).to({_off:true,alpha:1},7).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1114).to({_off:false},7).wait(42).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(174));

	// Icons copy 6
	this.instance_12 = new lib.Tween13("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(433.7,319.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(433.7,319.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1065).to({_off:false},0).to({_off:true,alpha:1},7).wait(272));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1065).to({_off:false},7).wait(42).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(222));

	// Icons copy 5
	this.instance_14 = new lib.Tween11("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(433.8,320.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween12("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(433.8,320.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1017).to({_off:false},0).to({_off:true,alpha:1},6).wait(321));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1017).to({_off:false},6).wait(42).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(271));

	// Icons copy 4
	this.instance_16 = new lib.Tween9("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(433.8,320.1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween10("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(433.8,320.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(968).to({_off:false},0).to({_off:true,alpha:1},6).wait(370));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(968).to({_off:false},6).wait(43).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(320));

	// Icons copy 3
	this.instance_18 = new lib.cms_icon("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(433.8,320.1,1,1,0,0,0,90.5,90.5);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(919).to({_off:false},0).to({alpha:1,startPosition:7},7).wait(42).to({startPosition:4},0).to({alpha:0,startPosition:7},6).to({_off:true},1).wait(369));

	// Icons copy 2
	this.instance_19 = new lib.UX_icon("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(433.8,320.1,1,1,0,0,0,90.5,90.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(869).to({_off:false},0).to({alpha:1,startPosition:7},7).wait(43).to({startPosition:50},0).to({alpha:0,startPosition:7},7).to({_off:true},1).wait(417));

	// Icons copy
	this.instance_20 = new lib.bacendicon("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(433.5,321.5,1,1,0,0,0,90.5,92.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(822).to({_off:false},0).to({alpha:1,startPosition:7},7).wait(40).to({startPosition:2},0).to({alpha:0,startPosition:7},7).to({_off:true},1).wait(467));

	// UX_Icon
	this.instance_21 = new lib.frontendicon("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(433.5,321.4,1,1,0,0,0,90.5,92.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(777).to({_off:false},0).wait(45).to({startPosition:1},0).to({alpha:0,startPosition:4},7).to({_off:true},1).wait(514));

	// category text
	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AAAA/QgHgDgFgGQgEgFgDgIQgCgHAAgJIAAgrIgaAAIAAgPIAbgBIADgfIAQAAIAAAfIAtAAIAAAQIgtAAIAAArIABALQABAEACADQADAEAFABQAEACAHAAQAIAAAOgFIAEAPQgSAGgNAAQgKAAgHgDg");
	this.shape_418.setTransform(587.1,462.4);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgDgDQgCgDgEgCQgEgBgGAAQgGAAgGAEQgGADgIAJIAABCIgUAAIAAhhIAQAAIACAQIAAAAQAJgIAIgFIAIgEIAKgBQAJAAAHACQAGADAEAFQAEAFACAIQACAHAAAKIAAA7g");
	this.shape_419.setTransform(575.2,463.7);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AgOAwQgKgEgHgGQgIgHgDgJIgEgLIgBgLQAAgHAFgOQADgJAHgHQAHgGAKgEQAIgDAKAAQAKAAAJADQAIADAGAGQAFAHAEAIQADAJAAAKIgBAKIhJAAQAAAHADAGQADAFAFAEQAFAEAGACQAFACAHAAQAIAAAHgDQAGgCAIgEIAGANQgIAFgIADQgLADgLAAQgKAAgJgDgAAegIQgBgHgCgFQgCgFgDgDIgJgFQgEgCgGAAQgFAAgEACQgGACgDADIgHAIIgEAMIA4AAIAAAAg");
	this.shape_420.setTransform(563.1,463.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AAgAyIAAhDQAAgHgCgFQgDgDgEAAQgEAAgEADQgDADgEAIIAABEIgQAAIAAhDQAAgHgCgFQgCgDgFAAQgEAAgDADQgEADgCAIIAABEIgUAAIAAhhIAPAAIACANIABAAQAEgHAEgEQAGgEAHAAQAOAAADARQAFgJAEgDQAGgFAIAAQAFAAAFACQAEACACADQADAFACAFQABAGAAAIIAABEg");
	this.shape_421.setTransform(551.2,463.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AgtBGIAAiJIARAAIABAMIABAAQAHgGAIgEQAJgEAHAAQAKAAAHAEQAIACAFAIQAFAGADAJQADAKAAALQAAAMgEAJQgDAJgHAHQgGAHgIAEQgIAEgIAAQgGAAgIgEQgHgDgGgGIgBAAIABASIAAAggAgMgyQgGAEgHAGIAAAuQAGAFAHACQAGADAFAAQAFAAAFgDQAFgCADgEQAEgFACgGQACgHAAgIQAAgIgBgGQgCgGgDgEQgDgFgFgCQgFgCgGAAQgFgBgHADg");
	this.shape_422.setTransform(539.3,465.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AgSAwQgJgEgGgGQgHgHgEgJIgDgLIgBgLQAAgHAEgOQAEgJAHgHQAGgHAJgDQAKgDAIAAQAJAAAJADQAKADAGAHQAHAHAEAJQAEAOAAAHIgCALIgCALQgEAJgHAHQgGAGgKAEQgJADgJAAQgIAAgKgDgAgLgfQgFACgDAFQgFAEgCAHQgBAGAAAHQAAAIABAGQACAHAFAEQADAFAFACQAGADAFAAQAGAAAGgDQAFgCAEgFQADgEACgHQACgGAAgIQAAgHgCgGQgCgHgDgEQgEgFgFgCQgGgDgGAAQgFAAgGADg");
	this.shape_423.setTransform(527,463.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AAFBGQgFgDgEgEQgFgFgCgHQgDgHABgIIAAhbIghAAIAAgQIA0AAIAABsQAAAFABAEQABADADACQAEAFAJAAQAHAAAKgEIAGAPQgRAFgKAAQgJAAgGgCg");
	this.shape_424.setTransform(515.2,461.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AgPAwQgJgEgHgGQgIgHgEgJIgCgLIgBgLQAAgHADgOQAEgJAHgHQAHgGAJgEQAJgDAJAAQALAAAIADQAJADAGAGQAGAHADAIQACAJAAAKIgBAKIhIAAQAAAHADAGQADAFAFAEQAFAEAFACQAGACAHAAQAIAAAHgDQAGgCAIgEIAHANQgIAFgJADQgLADgKAAQgKAAgLgDgAAdgIQAAgHgCgFQgCgFgEgDIgIgFQgEgCgGAAQgFAAgFACQgFACgEADIgHAIIgDAMIA3AAIAAAAg");
	this.shape_425.setTransform(503.1,463.8);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AgKAxIgohhIAUAAIAVA0IAJAeIABAAIAKgeIAVg0IATAAIgoBhg");
	this.shape_426.setTransform(491,463.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AgOAwQgKgEgHgGQgHgHgFgJIgDgLIgBgLQAAgHAEgOQAFgJAHgHQAHgGAIgEQAKgDAJAAQAKAAAJADQAIADAGAGQAFAHADAIQADAJABAKIgCAKIhJAAQABAHADAGQADAFAFAEQAEAEAHACQAFACAHAAQAIAAAHgDQAHgCAGgEIAHANQgHAFgKADQgKADgKAAQgLAAgJgDgAAegIQgBgHgCgFQgCgFgDgDIgIgFQgFgCgGAAQgEAAgGACQgEACgFADIgGAIIgFAMIA5AAIAAAAg");
	this.shape_427.setTransform(479.1,463.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AgUBFQgHgEgGgGQgGgHgCgJQgEgKAAgMQAAgMAEgJQAEgJAGgHQAGgGAIgEQAIgDAIAAQAIAAAHADQAGADAGAGIABAAIgBgSIAAgkIAUAAIAACNIgRAAIgBgMIgBAAQgGAGgIAEQgIAEgHAAQgKAAgIgDgAgHgKQgFACgEAFQgEADgCAGQgCAHAAAIQAAAIACAHQABAGAEAFQADAEAFACQAFADAFAAQANAAAMgNIAAguQgGgFgGgDQgFgCgGAAQgFAAgFADg");
	this.shape_428.setTransform(466.7,461.7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AgUBFQgHgEgGgGQgGgHgCgJQgEgKAAgMQAAgMAEgJQAEgJAGgHQAGgGAIgEQAIgDAIAAQAIAAAHADQAGADAGAGIABAAIgBgSIAAgkIAUAAIAACNIgRAAIgBgMIgBAAQgGAGgIAEQgIAEgHAAQgKAAgIgDgAgHgKQgFACgEAFQgEADgCAGQgCAHAAAIQAAAIACAHQABAGAEAFQADAEAFACQAFADAFAAQANAAAMgNIAAguQgGgFgGgDQgFgCgGAAQgFAAgFADg");
	this.shape_429.setTransform(442.7,461.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgDgDQgCgDgEgCQgEgBgGAAQgGAAgGAEQgGADgIAJIAABCIgUAAIAAhhIAQAAIACAQIAAAAQAJgIAHgFIAJgEIAKgBQAJAAAHACQAGADAEAFQAEAFACAIQACAHAAAKIAAA7g");
	this.shape_430.setTransform(431.2,463.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AgOAwQgKgEgHgGQgIgHgDgJIgEgLIgBgLQAAgHAFgOQADgJAHgHQAIgGAJgEQAIgDAKAAQAKAAAIADQAJADAGAGQAGAHADAIQADAJAAAKIgBAKIhJAAQAAAHADAGQADAFAFAEQAFAEAFACQAGACAHAAQAIAAAHgDQAGgCAIgEIAGANQgIAFgIADQgLADgLAAQgKAAgJgDgAAegIQgBgHgCgFQgCgFgEgDIgIgFQgEgCgGAAQgFAAgEACQgGACgDADIgIAIIgDAMIA4AAIAAAAg");
	this.shape_431.setTransform(419.1,463.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgrAHIAAgNIBXAAIAAANg");
	this.shape_432.setTransform(407,462.1);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AAAA/QgHgDgFgGQgEgFgDgIQgCgHAAgJIAAgrIgaAAIAAgPIAbgBIADgfIAQAAIAAAfIAtAAIAAAQIgtAAIAAArIABALQABAEACADQADAEAFABQAEACAHAAQAIAAAOgFIAEAPQgSAGgNAAQgKAAgHgDg");
	this.shape_433.setTransform(395.1,462.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgCgDQgDgDgEgCQgEgBgGAAQgGAAgGAEQgGADgIAJIAABCIgUAAIAAhhIARAAIABAQIABAAQAIgIAIgFIAIgEIALgBQAIAAAHACQAGADAEAFQAEAFACAIQACAHAAAKIAAA7g");
	this.shape_434.setTransform(383.2,463.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AgRAwQgJgEgHgGQgHgHgEgJIgDgLIgBgLQAAgHAEgOQAEgJAHgHQAHgHAJgDQAJgDAIAAQAJAAAKADQAIADAHAHQAHAHAEAJQAEAOAAAHIgBALIgDALQgEAJgHAHQgHAGgIAEQgKADgJAAQgIAAgJgDgAgLgfQgFACgEAFQgDAEgCAHQgCAGAAAHQAAAIACAGQACAHADAEQAEAFAFACQAFADAGAAQAHAAAFgDQAFgCAEgFQAEgEACgHQACgGAAgIQAAgHgCgGQgCgHgEgEQgEgFgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_435.setTransform(371,463.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AgnAyIAAhhIAQAAIACAXIAAAAIAJgKIAKgIQAEgEAGgCIANgBQALAAAIAEIgEARQgKgDgIgBQgFABgFABQgGACgDADIgKAIQgEAFgEAHIAAA3g");
	this.shape_436.setTransform(359.8,463.7);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AgUBIIAAhRIgbAAIAAgPIAbgBIAAgGQAAgKADgGQACgIAFgFQAFgFAHgDQAHgDALAAIAOABIAOAFIgEAOIgLgEIgLAAQgGAAgFABQgEABgDAEQgDADgBAEQAAAEAAAGIAAAHIAmAAIAAAQIgmAAIAABRg");
	this.shape_437.setTransform(347.8,461.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AgOAwQgKgEgHgGQgHgHgFgJIgDgLIgBgLQAAgHAEgOQAFgJAHgHQAHgGAIgEQAKgDAJAAQAKAAAJADQAIADAGAGQAFAHADAIQADAJABAKIgCAKIhJAAQABAHADAGQADAFAFAEQAEAEAHACQAFACAHAAQAIAAAHgDQAHgCAGgEIAHANQgIAFgJADQgKADgKAAQgLAAgJgDgAAegIQgBgHgCgFQgCgFgDgDIgIgFQgFgCgGAAQgEAAgGACQgEACgFADIgGAIIgFAMIA5AAIAAAAg");
	this.shape_438.setTransform(551.1,463.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AAgAyIAAhDQgBgHgCgFQgCgDgEAAQgFAAgDADQgDADgDAIIAABEIgRAAIAAhDQABgHgDgFQgCgDgFAAQgEAAgEADQgCADgDAIIAABEIgUAAIAAhhIAPAAIACANIAAAAQAEgHAFgEQAFgEAJAAQAMAAAFARQAEgJAFgDQAFgFAIAAQAFAAAEACQAEACADADQADAFACAFQABAGAAAIIAABEg");
	this.shape_439.setTransform(539.2,463.7);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AgRAwQgJgEgHgGQgHgHgEgJIgDgLIgBgLQAAgHAEgOQAEgJAHgHQAHgHAJgDQAIgDAJAAQAJAAAKADQAIADAHAHQAHAHAEAJQAEAOAAAHIgBALIgDALQgEAJgHAHQgHAGgIAEQgKADgJAAQgJAAgIgDgAgLgfQgFACgEAFQgEAEgBAHQgCAGAAAHQAAAIACAGQABAHAEAEQAEAFAFACQAFADAGAAQAHAAAFgDQAFgCAEgFQADgEADgHQACgGAAgIQAAgHgCgGQgDgHgDgEQgEgFgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_440.setTransform(515,463.8);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AAFBGQgFgDgFgEQgEgFgCgHQgDgHAAgIIAAhbIgfAAIAAgQIAzAAIAABsQAAAFABAEQABADACACQAGAFAIAAQAIAAAKgEIAEAPQgPAFgMAAQgIAAgGgCg");
	this.shape_441.setTransform(503.2,461.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AgPAwQgJgEgHgGQgIgHgEgJIgCgLIgBgLQAAgHADgOQAEgJAHgHQAHgGAJgEQAJgDAJAAQALAAAIADQAJADAGAGQAGAHADAIQACAJAAAKIgBAKIhIAAQAAAHADAGQADAFAFAEQAFAEAFACQAGACAHAAQAIAAAHgDQAGgCAHgEIAIANQgIAFgJADQgLADgKAAQgKAAgLgDgAAdgIQAAgHgCgFQgCgFgEgDIgIgFQgEgCgGAAQgFAAgFACQgFACgEADIgHAIIgDAMIA3AAIAAAAg");
	this.shape_442.setTransform(467.1,463.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgCgDQgDgDgEgCQgEgBgGAAQgGAAgGAEQgGADgIAJIAABCIgUAAIAAhhIARAAIABAQIABAAQAIgIAIgFIAIgEIALgBQAIAAAHACQAGADAEAFQAEAFACAIQACAHAAAKIAAA7g");
	this.shape_443.setTransform(419.2,463.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AAaBHIgggvIgVAVIAAAaIgUAAIAAiNIAUAAIAABcIAAAAIAwgwIAWAAIgmAmIArA7g");
	this.shape_444.setTransform(383.8,461.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AgNAwQgJgEgIgGQgIgHgDgJIgEgLIgBgLQABgFABgGIADgKQAFgJAHgHQAHgHAKgDQALgDAJAAQAJAAANAEQAIADAGAHIgJAMQgGgFgGgCQgGgDgIAAQgHAAgGADQgGACgFAFQgFAEgCAHQgDAGAAAHQAAAIADAGQACAHAFAEQAEAFAHACQAFADAIAAQAJAAAHgDQAHgDAGgGIAJANQgJAHgJAEQgLAEgLAAQgKAAgKgDg");
	this.shape_445.setTransform(371.2,463.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgYAxQgFgCgFgEQgEgDgDgFQgDgGABgGQAAgIADgGQAFgHAIgDQAIgEANgDQAMgDATgBQAAgFgCgEIgEgHQgDgDgFgCQgFgBgFAAQgIAAgJADQgIADgIAFIgIgOQALgGAKgDIALgDIALgBQALAAAHACQAIADAGAGQAFAFACAIQACAHABAKIAAA6IgRAAIgBgNIgBAAQgJAHgIAEQgKAEgJAAQgHAAgHgCgAABACQgIACgHADQgFADgDADQgCAEAAAFQAAAHAGADQAFADAIAAQAHAAAIgDQAHgDAIgHIAAgWQgOAAgKACg");
	this.shape_446.setTransform(359,463.8);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgMBFQgIgEgHgGIAAAAIgCALIgQAAIAAiNIAUAAIAAAmIgBASIABAAQAGgHAJgEQAIgDAHAAQAKAAAHADQAIADAFAHQAFAHADAJQADAIAAALQAAAMgEALQgDAJgHAHQgGAHgIAEQgIADgIAAQgGAAgIgDgAgMgKQgGAEgHAGIAAAuQAGAFAHACQAGADAFAAQAFAAAFgDQAFgCADgFQAEgEACgHQACgHAAgIQAAgIgBgGQgCgGgDgEQgDgEgFgCQgFgDgGAAQgFAAgHADg");
	this.shape_447.setTransform(347.3,461.7);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AgNAwQgJgEgIgGQgHgHgEgJIgDgLIgBgLQgBgFACgGIADgKQAFgJAHgHQAIgHAKgDQAJgDALAAQAIAAAMAEQAJADAHAHIgKAMQgGgFgGgCQgGgDgIAAQgHAAgGADQgGACgFAFQgFAEgDAHQgCAGAAAHQAAAIACAGQADAHAFAEQAFAFAGACQAFADAIAAQAJAAAHgDQAGgDAHgGIAIANQgHAHgLAEQgKAEgKAAQgLAAgKgDg");
	this.shape_448.setTransform(503.2,463.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AAKBJIAAhRIgqAAIAAgQIA+AAIAABhgAAIgvQgEgEAAgHQAAgGAEgEQAEgDAHAAQAGAAAEADQAEAEAAAGQAAAHgEAEQgEADgGABQgHgBgEgDg");
	this.shape_449.setTransform(466.1,461.5);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AgOAwQgKgEgHgGQgHgHgFgJIgDgLIgBgLQAAgHAEgOQAFgJAHgHQAHgGAIgEQAKgDAJAAQAKAAAJADQAIADAGAGQAFAHADAIQADAJABAKIgCAKIhJAAQABAHADAGQADAFAFAEQAEAEAHACQAFACAHAAQAIAAAHgDQAHgCAGgEIAHANQgHAFgKADQgKADgKAAQgLAAgJgDgAAegIQgBgHgCgFQgCgFgDgDIgIgFQgFgCgGAAQgEAAgGACQgEACgFADIgGAIIgFAMIA5AAIAAAAg");
	this.shape_450.setTransform(443.1,463.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AAbAxIgQgVIgLgRIgBAAIgLARIgPAVIgUAAIAkgyIgigvIAVAAIAPAUIAKARIAAAAIALgRIANgUIAVAAIgiAwIAkAxg");
	this.shape_451.setTransform(419,463.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AgOAwQgKgEgHgGQgHgHgFgJIgDgLIgBgLQAAgHAEgOQAFgJAHgHQAHgGAIgEQAKgDAJAAQAKAAAJADQAIADAGAGQAFAHADAIQADAJABAKIgCAKIhJAAQABAHADAGQADAFAFAEQAEAEAHACQAFACAHAAQAIAAAHgDQAHgCAGgEIAHANQgHAFgKADQgKADgKAAQgLAAgJgDgAAegIQgBgHgCgFQgCgFgDgDIgIgFQgFgCgGAAQgEAAgGACQgEACgFADIgGAIIgFAMIA5AAIAAAAg");
	this.shape_452.setTransform(407.1,463.8);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AgnAyIAAhhIAQAAIACAXIAAAAIAJgKIAKgIQAEgEAGgCIANgBQALAAAIAEIgEARQgKgDgIgBQgFABgFABQgGACgDADIgKAIQgEAFgEAHIAAA3g");
	this.shape_453.setTransform(383.8,463.7);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AgOAwQgKgEgHgGQgHgHgFgJIgDgLIgBgLQAAgHAEgOQAFgJAHgHQAHgGAIgEQAKgDAJAAQAKAAAJADQAIADAGAGQAFAHADAIQADAJABAKIgCAKIhJAAQABAHADAGQADAFAFAEQAEAEAHACQAFACAHAAQAIAAAHgDQAHgCAGgEIAHANQgHAFgKADQgKADgKAAQgLAAgJgDgAAegIQgBgHgCgFQgCgFgDgDIgIgFQgFgCgGAAQgEAAgGACQgEACgFADIgGAIIgFAMIA5AAIAAAAg");
	this.shape_454.setTransform(371.1,463.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AgLAyIgNgDQgMgEgJgHIAIgNQAJAGAKAEQALADALAAQALAAAGgEQAFgEAAgFQAAgGgFgDQgLgFgLgDQgKgCgHgDQgHgBgFgEQgFgDgCgFQgCgEAAgGQAAgGACgFQADgGAFgDQAGgEAHgCQAIgCAJAAQALAAAMADQAJAEAIAFIgJANQgHgFgIgDQgJgCgIAAQgKAAgFADQgFAEAAAFQAAAGAHADQAFADAOADIAUAGQAIACAEADQAFAEACAEQABAEAAAGQAAAHgDAFQgDAFgFAEQgGAFgIACQgJACgLAAIgMgBg");
	this.shape_455.setTransform(359,463.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AgYAwQgGgDgFgFQgEgFgCgHQgCgIAAgJIAAg8IAUAAIAAA5IABALQABAFADADQACADAEACQAEABAGAAQAGAAAHgEQAGgDAHgJIAAhCIAUAAIAABhIgQAAIgCgQIgBAAQgIAJgIAEIgJAEQgEABgFAAQgJAAgGgCg");
	this.shape_456.setTransform(346.8,463.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgCgDQgDgDgEgCQgEgBgFAAQgHAAgHAEQgFADgIAJIAABCIgUAAIAAhhIAQAAIACAQIABAAQAIgIAHgFIAJgEIALgBQAIAAAGACQAHADAEAFQAEAFACAIQACAHAAAKIAAA7g");
	this.shape_457.setTransform(587.2,463.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("AAfAyIAAhDQAAgHgCgFQgCgDgFAAQgEAAgDADQgDADgDAIIAABEIgQAAIAAhDQgBgHgCgFQgCgDgEAAQgFAAgDADQgEADgDAIIAABEIgTAAIAAhhIAQAAIABANIAAAAQAEgHAFgEQAGgEAHAAQANAAAEARQAFgJAEgDQAGgFAIAAQAGAAAEACQADACADADQADAFABAFQACAGAAAIIAABEg");
	this.shape_458.setTransform(563.2,463.7);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AgSAwQgIgEgHgGQgHgHgEgJIgDgLIgBgLQAAgHAEgOQAEgJAHgHQAHgHAIgDQAJgDAJAAQAKAAAIADQAJADAHAHQAHAHAEAJQAEAOAAAHIgBALIgDALQgEAJgHAHQgHAGgJAEQgIADgKAAQgJAAgJgDgAgLgfQgFACgEAFQgDAEgDAHQgCAGAAAHQAAAIACAGQADAHADAEQAEAFAFACQAFADAGAAQAGAAAGgDQAFgCAEgFQADgEACgHQACgGABgIQgBgHgCgGQgCgHgDgEQgEgFgFgCQgGgDgGAAQgGAAgFADg");
	this.shape_459.setTransform(539,463.8);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("AAFBGQgGgDgEgEQgEgFgCgHQgCgHgBgIIAAhbIgfAAIAAgQIAyAAIAABsQAAAFACAEQABADADACQAEAFAJAAQAHAAAKgEIAGAPQgQAFgLAAQgJAAgGgCg");
	this.shape_460.setTransform(527.2,461.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AgKAxIgohhIAUAAIAVA0IAJAeIABAAIAKgeIAVg0IATAAIgnBhg");
	this.shape_461.setTransform(503,463.8);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AgMBDIgNgEQgGgCgGgEIgKgIIAMgOQAIAHAJAFQAKADAKAAQAGABAFgCQAEgBAEgCQADgDACgDQACgEAAgEQAAgFgCgDIgFgFQgEgEgMgEIgSgJIgKgEIgJgHQgEgEgCgGQgDgFAAgHQAAgHAEgIQADgGAGgFQAGgEAIgDQAIgDAJAAQAIAAAOAEQALAFAIAIIgLAMQgHgGgHgDQgIgCgJAAIgJAAIgHAEIgFAGIgBAHQAAAEABADIAGAFQAEADAKAFIASAIIAMAEQAFADAEAEQAEAEACAGQACAFAAAIQAAAHgDAHQgEAHgGAGQgGAFgJADQgJADgLAAQgGAAgGgBg");
	this.shape_462.setTransform(455,462.2);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AAcBCIAAg8QAAgMADgkIgBAAIgIAcIgQAtIgLAAIgRgtIgIgcIgBAAQADAkABAMIAAA8IgSAAIAAiDIAXAAIARA2IAFATIABAAIAFgTIARg2IAYAAIAACDg");
	this.shape_463.setTransform(443,462.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("AgDBDIgKgDIgKgGIgJgIIgHgKIgFgLQgDgGgBgIIgBgOIABgPQABgHADgHIAFgLIAHgKIAJgIIAKgFQAGgCAFgCQAGgBAGAAQAIAAANAFQAJAEAHAIIgLAMQgFgGgHgDQgGgCgIAAQgIAAgHADQgHADgFAHQgGAGgCAKQgDAKAAAKQAAAMADAJQACAJAGAHQAFAHAHADQAHADAJAAQAHAAAIgDQAGgEAHgGIAKAMIgIAIIgKAGQgFACgFACQgGABgGAAg");
	this.shape_464.setTransform(431.2,462.2);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AgSAwQgIgEgHgGQgHgHgEgJIgDgLIgBgLQAAgHAEgOQAEgJAHgHQAHgHAIgDQAJgDAJAAQAKAAAIADQAJADAHAHQAHAHAEAJQAEAOAAAHIgBALIgDALQgEAJgHAHQgHAGgJAEQgIADgKAAQgJAAgJgDgAgLgfQgFACgEAFQgDAEgDAHQgCAGAAAHQAAAIACAGQADAHADAEQAEAFAFACQAFADAGAAQAGAAAGgDQAFgCAEgFQADgEACgHQACgGABgIQgBgHgCgGQgCgHgDgEQgEgFgFgCQgGgDgGAAQgGAAgFADg");
	this.shape_465.setTransform(395,463.8);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AgNAwQgKgEgHgGQgIgHgDgJIgDgLIgBgLQAAgFABgGIADgKQAEgJAIgHQAIgHAJgDQALgDAKAAQAHAAAOAEQAIADAHAHIgKAMQgGgFgGgCQgHgDgGAAQgIAAgGADQgGACgFAFQgFAEgDAHQgCAGAAAHQAAAIACAGQADAHAFAEQAFAFAGACQAGADAHAAQAIAAAIgDQAGgDAHgGIAJANQgJAHgJAEQgLAEgKAAQgLAAgKgDg");
	this.shape_466.setTransform(347.2,463.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("AgOAwQgKgEgHgGQgHgHgFgJIgDgLIgBgLQAAgHAEgOQAFgJAHgHQAHgGAIgEQAKgDAJAAQAKAAAJADQAIADAGAGQAFAHADAIQADAJABAKIgCAKIhJAAQABAHADAGQADAFAFAEQAEAEAHACQAFACAHAAQAIAAAHgDQAHgCAGgEIAHANQgIAFgJADQgKADgKAAQgLAAgJgDgAAegIQgBgHgCgFQgCgFgDgDIgIgFQgFgCgGAAQgEAAgGACQgEACgFADIgGAIIgFAMIA5AAIAAAAg");
	this.shape_467.setTransform(515.1,463.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AAYBHIAAg6IgBgLQgBgEgCgDQgDgDgEgCQgEgBgFAAQgHAAgHAEQgFADgIAIIAABDIgUAAIAAiNIAUAAIAAAmIgBAWIABAAQAHgIAIgFIAIgEIALgBQAIAAAGACQAHADAEAFQAEAFACAIQACAGAAAKIAAA8g");
	this.shape_468.setTransform(479.2,461.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AgJBCIAAhyIgqAAIAAgRIBnAAIAAARIgqAAIAAByg");
	this.shape_469.setTransform(467,462.2);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AgLAyIgNgDQgMgEgJgHIAIgNQAJAGAKAEQALADALAAQALAAAGgEQAFgEAAgFQAAgGgFgDQgLgFgLgDQgKgCgHgDQgHgBgFgEQgFgDgCgFQgCgEAAgGQAAgGACgFQADgGAFgDQAGgEAHgCQAIgCAJAAQALAAAMADQAJAEAIAFIgJANQgHgFgIgDQgJgCgIAAQgKAAgFADQgFAEAAAFQAAAGAHADQAFADAOADIAUAGQAIACAEADQAFAEACAEQABAEAAAGQAAAHgDAFQgDAFgFAEQgGAFgIACQgJACgLAAIgMgBg");
	this.shape_470.setTransform(443,463.8);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("AgLAyIgNgDQgMgEgJgHIAIgNQAJAGAKAEQALADALAAQALAAAGgEQAFgEAAgFQAAgGgFgDQgLgFgLgDQgKgCgHgDQgHgBgFgEQgFgDgCgFQgCgEAAgGQAAgGACgFQADgGAFgDQAGgEAHgCQAIgCAJAAQALAAAMADQAJAEAIAFIgJANQgHgFgIgDQgJgCgIAAQgKAAgFADQgFAEAAAFQAAAGAHADQAFADAOADIAUAGQAIACAEADQAFAEACAEQABAEAAAGQAAAHgDAFQgDAFgFAEQgGAFgIACQgJACgLAAIgMgBg");
	this.shape_471.setTransform(431,463.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AgOAwQgKgEgHgGQgIgHgDgJIgEgLIgBgLQAAgHAFgOQADgJAHgHQAIgGAJgEQAIgDAKAAQAKAAAIADQAJADAGAGQAGAHADAIQADAJAAAKIgBAKIhJAAQAAAHADAGQADAFAFAEQAFAEAFACQAGACAHAAQAIAAAHgDQAGgCAIgEIAGANQgIAFgIADQgLADgLAAQgKAAgJgDgAAegIQgBgHgCgFQgCgFgEgDIgIgFQgEgCgGAAQgFAAgEACQgGACgDADIgIAIIgDAMIA4AAIAAAAg");
	this.shape_472.setTransform(419.1,463.8);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("AgtBGIAAiJIARAAIABAMIABAAQAHgGAIgEQAJgEAHAAQAKAAAHAEQAIACAFAIQAFAGADAJQADAKAAALQAAAMgEAJQgDAJgHAHQgGAHgIAEQgIAEgIAAQgGAAgIgEQgHgDgGgGIgBAAIABASIAAAggAgMgyQgGAEgHAGIAAAuQAGAFAHACQAGADAFAAQAFAAAFgDQAFgCADgEQAEgFACgGQACgHAAgIQAAgIgBgGQgCgGgDgEQgDgFgFgCQgFgCgGAAQgFgBgHADg");
	this.shape_473.setTransform(395.3,465.7);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AAQBCIgLgyQgEgOgBgJIAAAAIgEAXIgLAyIgXAAIgTiDIAVAAIAIBPIADAeIAAAAIAHgeIALgtIAQAAIALAtIAHAeIABAAIACgeIAHhPIAVAAIgSCDg");
	this.shape_474.setTransform(347,462.2);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AgXBGQgJgBgFgEQgGgDgDgFQgDgFAAgHQAAgFAEgGQAEgGAHgDIAAgBQgEgDgCgEQgEgEAAgGQAAgEAEgEQADgFAGgEIAAgBQgGgEgDgGQgEgGAAgJQAAgIAEgHQADgGAFgFQAFgFAHgCQAIgCAIAAQAGAAAHACIApAAIAAAQIgZAAQAEADACAFQACAEAAAFQAAAJgDAGQgDAGgFAFQgFADgIADQgHACgGAAQgJAAgHgDQgHAEAAAFQAAAFAFACQAFADAJAAIAUAAQAKAAAHACQAHABAFACQAEAEADAEQACAFAAAFQAAAIgEAGQgEAGgHAFQgIAFgKADQgKACgLAAQgKAAgJgCgAgeAjQgCAEAAAEQAAAEACADQACACADACQAEACAGACIANABQAGAAAHgCIALgEQAEgDACgDQADgDAAgDQgBgGgFgCQgEgDgLAAIgRAAQgJAAgFgCQgGAEgDADgAgMg3IgHADQgDAEgBADQgCAEAAAFQAAAFACAEQABAEADADQADADAEABIAIABIAHgBQADgBADgDQADgDACgEQABgEAAgFQAAgFgBgEQgCgDgDgEIgGgDIgHgCIgIACg");
	this.shape_475.setTransform(503.4,465.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AAFBGQgFgDgEgEQgFgFgCgHQgDgHABgIIAAhbIghAAIAAgQIAzAAIAABsQABAFABAEQABADADACQAEAFAJAAQAHAAAKgEIAGAPQgRAFgKAAQgJAAgGgCg");
	this.shape_476.setTransform(479.2,461.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("AgtBGIAAiJIARAAIABAMIABAAQAHgGAIgEQAJgEAHAAQAKAAAHAEQAIACAFAIQAFAGADAJQADAKAAALQAAAMgEAJQgDAJgHAHQgGAHgIAEQgIAEgIAAQgGAAgIgEQgHgDgGgGIgBAAIABASIAAAggAgMgyQgGAEgHAGIAAAuQAGAFAHACQAGADAFAAQAFAAAFgDQAFgCADgEQAEgFACgGQACgHAAgIQAAgIgBgGQgCgGgDgEQgDgFgFgCQgFgCgGAAQgFgBgHADg");
	this.shape_477.setTransform(395.3,465.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AgYAxQgFgCgFgEQgEgDgDgFQgDgGABgGQAAgIADgGQAFgHAIgDQAIgEANgDQAMgDATgBQAAgFgCgEIgEgHQgDgDgFgCQgFgBgFAAQgIAAgJADQgIADgIAFIgIgOQALgGAKgDIALgDIALgBQALAAAHACQAIADAGAGQAEAFADAIQACAHABAKIAAA6IgRAAIgBgNIgBAAQgJAHgIAEQgKAEgJAAQgHAAgHgCgAABACQgIACgHADQgFADgDADQgCAEAAAFQAAAHAGADQAFADAIAAQAHAAAIgDQAHgDAIgHIAAgWQgOAAgKACg");
	this.shape_478.setTransform(611,463.8);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AgXBGQgJgBgFgEQgGgDgDgFQgDgFAAgHQAAgFAEgGQAEgGAIgDIAAgBQgFgDgCgEQgEgEABgGQgBgEAEgEQADgFAFgEIAAgBQgFgEgDgGQgEgGAAgJQAAgIAEgHQACgGAGgFQAFgFAHgCQAHgCAIAAQAIAAAHACIAnAAIAAAQIgYAAQAEADABAFQADAEAAAFQAAAJgDAGQgDAGgFAFQgGADgGADQgHACgIAAQgIAAgIgDQgGAEAAAFQAAAFAFACQAEADALAAIATAAQAKAAAHACQAHABAEACQAFAEADAEQACAFAAAFQAAAIgEAGQgDAGgIAFQgIAFgJADQgLACgMAAQgKAAgIgCgAgeAjQgDAEABAEQAAAEABADQACACAFACQADACAGACIAMABQAIAAAGgCIAKgEQAFgDADgDQABgDAAgDQABgGgGgCQgEgDgLAAIgQAAQgKAAgGgCQgFAEgDADgAgNg3IgGADQgDAEgBADQgCAEAAAFQAAAFACAEQABAEADADQADADADABIAIABIAIgBQADgBADgDQADgDABgEQACgEAAgFQAAgFgCgEQgBgDgDgEIgGgDIgIgCIgIACg");
	this.shape_479.setTransform(587.4,465.9);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgCgDQgDgDgEgCQgEgBgFAAQgHAAgHAEQgFADgIAJIAABCIgUAAIAAhhIAQAAIACAQIABAAQAIgIAHgFIAJgEIALgBQAIAAAGACQAHADAEAFQAEAFACAIQACAHAAAKIAAA7g");
	this.shape_480.setTransform(551.2,463.7);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("AAKBJIAAhRIgqAAIAAgQIA+AAIAABhgAAIgvQgEgEAAgHQAAgGAEgEQAEgDAHAAQAGAAAEADQAEAEAAAGQAAAHgEAEQgEADgGABQgHgBgEgDg");
	this.shape_481.setTransform(538.1,461.5);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("AAAA/QgHgDgFgGQgEgFgDgIQgCgHAAgJIAAgrIgaAAIAAgPIAbgBIADgfIAQAAIAAAfIAtAAIAAAQIgtAAIAAArIABALQABAEACADQADAEAFABQAEACAHAAQAIAAAOgFIAEAPQgSAGgNAAQgKAAgHgDg");
	this.shape_482.setTransform(479.1,462.4);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AgtBDIADgPQAEACAFAAQAEAAAEgCQAFgBACgDQAGgEAEgKIACgGIgshgIAUAAIAWAzIAKAcIABAAIAKgcIAUgzIASAAIgqBmQgCAJgFAGQgCAGgGAFQgFAEgGADQgHACgIAAQgIAAgFgCg");
	this.shape_483.setTransform(455,465.9);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AAAA/QgHgDgFgGQgEgFgDgIQgCgHAAgJIAAgrIgaAAIAAgPIAbgBIADgfIAQAAIAAAfIAtAAIAAAQIgtAAIAAArIABALQABAEACADQADAEAFABQAEACAHAAQAIAAAOgFIAEAPQgSAGgNAAQgKAAgHgDg");
	this.shape_484.setTransform(419.1,462.4);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgCgDQgDgDgEgCQgEgBgFAAQgHAAgHAEQgFADgIAJIAABCIgUAAIAAhhIAQAAIACAQIABAAQAIgIAHgFIAJgEIALgBQAIAAAGACQAHADAEAFQAEAFACAIQACAHAAAKIAAA7g");
	this.shape_485.setTransform(407.2,463.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AAfAyIAAhDQAAgHgBgFQgDgDgFAAQgEAAgDADQgDADgDAIIAABEIgQAAIAAhDQgBgHgCgFQgCgDgEAAQgFAAgDADQgEADgDAIIAABEIgTAAIAAhhIAQAAIABANIAAAAQAEgHAFgEQAGgEAHAAQANAAAEARQAFgJAEgDQAGgFAIAAQAGAAAEACQADACADADQADAFABAFQACAGAAAIIAABEg");
	this.shape_486.setTransform(383.2,463.7);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("AAKBJIAAhRIgqAAIAAgQIA+AAIAABhgAAIgvQgEgEAAgHQAAgGAEgEQAEgDAHAAQAGAAAEADQAEAEAAAGQAAAHgEAEQgEADgGABQgHgBgEgDg");
	this.shape_487.setTransform(370.1,461.5);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AAaBHIgggvIgVAVIAAAaIgUAAIAAiNIAUAAIAABcIABAAIAvgwIAWAAIgnAmIAsA7g");
	this.shape_488.setTransform(503.8,461.6);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AAOAxIgJgrIgFgcIAAAAIgEAcIgJArIgZAAIgThhIATAAIAKA1IAEAbIABAAIAFgbIALgtIAQAAIALAtIAFAbIABAAIAEgbIAKg1IATAAIgUBhg");
	this.shape_489.setTransform(467,463.8);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AgXBGQgIgBgGgEQgGgDgDgFQgDgFAAgHQAAgFAEgGQAEgGAHgDIAAgBQgEgDgCgEQgDgEgBgGQABgEADgEQADgFAFgEIAAgBQgFgEgEgGQgDgGAAgJQAAgIADgHQAEgGAFgFQAFgFAIgCQAHgCAHAAQAHAAAHACIAoAAIAAAQIgXAAQADADABAFQADAEAAAFQAAAJgDAGQgDAGgFAFQgGADgHADQgHACgHAAQgHAAgIgDQgHAEAAAFQAAAFAFACQAEADAKAAIAUAAQAKAAAHACQAHABAEACQAGAEABAEQADAFAAAFQAAAIgEAGQgEAGgHAFQgHAFgKADQgLACgMAAQgJAAgJgCgAgeAjQgCAEgBAEQAAAEACADQADACADACQAEACAGACIANABQAGAAAHgCIAKgEQAFgDACgDQACgDAAgDQAAgGgEgCQgFgDgLAAIgRAAQgJAAgGgCQgFAEgDADgAgNg3IgGADQgDAEgCADQgBAEAAAFQAAAFABAEQACAEADADQADADADABIAIABIAHgBQAEgBADgDQADgDABgEQACgEAAgFQAAgFgCgEQgBgDgDgEIgHgDIgHgCIgIACg");
	this.shape_490.setTransform(491.4,465.9);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AAKBJIAAhRIgqAAIAAgQIA+AAIAABhgAAIgvQgEgEAAgHQAAgGAEgEQAEgDAHAAQAGAAAEADQAEAEAAAGQAAAHgEAEQgEADgGABQgHgBgEgDg");
	this.shape_491.setTransform(490.1,461.5);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AgLAyIgNgDQgMgEgJgHIAIgNQAJAGAKAEQALADALAAQALAAAGgEQAFgEAAgFQAAgGgFgDQgLgFgLgDQgKgCgHgDQgHgBgFgEQgFgDgCgFQgCgEAAgGQAAgGACgFQADgGAFgDQAGgEAHgCQAIgCAJAAQALAAAMADQAJAEAIAFIgJANQgHgFgIgDQgJgCgIAAQgKAAgFADQgFAEAAAFQAAAGAHADQAFADAOADIAUAGQAIACAEADQAFAEACAEQABAEAAAGQAAAHgDAFQgDAFgFAEQgGAFgIACQgJACgLAAIgMgBg");
	this.shape_492.setTransform(419,463.8);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AgLAyIgNgDQgMgEgJgHIAIgNQAJAGAKAEQALADALAAQALAAAGgEQAFgEAAgFQAAgGgFgDQgLgFgLgDQgKgCgHgDQgHgBgFgEQgFgDgCgFQgCgEAAgGQAAgGACgFQADgGAFgDQAGgEAHgCQAIgCAJAAQALAAAMADQAJAEAIAFIgJANQgHgFgIgDQgJgCgIAAQgKAAgFADQgFAEAAAFQAAAGAHADQAFADAOADIAUAGQAIACAEADQAFAEACAEQABAEAAAGQAAAHgDAFQgDAFgFAEQgGAFgIACQgJACgLAAIgMgBg");
	this.shape_493.setTransform(407,463.8);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AAFBGQgGgDgEgEQgEgFgCgHQgCgHgBgIIAAhbIgfAAIAAgQIAyAAIAABsQAAAFACAEQABADADACQAEAFAJAAQAIAAAJgEIAGAPQgQAFgLAAQgJAAgGgCg");
	this.shape_494.setTransform(383.2,461.7);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_495.setTransform(599,467.1);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_496.setTransform(611,467.1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_497.setTransform(623,467.1);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_498.setTransform(599,467.1);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_499.setTransform(611,467.1);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_500.setTransform(623,467.1);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_501.setTransform(599,467.1);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_502.setTransform(611,467.1);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_503.setTransform(623,467.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_504.setTransform(599,467.1);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_505.setTransform(611,467.1);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_506.setTransform(623,467.1);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_507.setTransform(599,467.1);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_508.setTransform(611,467.1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_509.setTransform(623,467.1);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_510.setTransform(599,467.1);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_511.setTransform(611,467.1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_512.setTransform(623,467.1);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_513.setTransform(599,467.1);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_514.setTransform(611,467.1);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_515.setTransform(623,467.1);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_516.setTransform(599,467.1);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_517.setTransform(611,467.1);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_518.setTransform(623,467.1);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_519.setTransform(599,467.1);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_520.setTransform(611,467.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_521.setTransform(623,467.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_522.setTransform(599,467.1);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_523.setTransform(611,467.1);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_524.setTransform(623,467.1);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_525.setTransform(599,467.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_526.setTransform(611,467.1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_527.setTransform(623,467.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_528.setTransform(599,467.1);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_529.setTransform(611,467.1);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_530.setTransform(623,467.1);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_531.setTransform(599,467.1);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_532.setTransform(611,467.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_533.setTransform(611,467.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_534.setTransform(599,467.1);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_535.setTransform(611,467.1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_536.setTransform(611,467.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_437},{t:this.shape_436,p:{x:359.8}},{t:this.shape_435,p:{x:371}},{t:this.shape_434,p:{x:383.2}},{t:this.shape_433,p:{x:395.1}},{t:this.shape_432,p:{x:407}},{t:this.shape_431,p:{x:419.1}},{t:this.shape_430,p:{x:431.2}},{t:this.shape_429,p:{x:442.7}},{t:this.shape_428,p:{x:466.7}},{t:this.shape_427,p:{x:479.1}},{t:this.shape_426,p:{x:491}},{t:this.shape_425,p:{x:503.1}},{t:this.shape_424},{t:this.shape_423,p:{x:527}},{t:this.shape_422,p:{x:539.3}},{t:this.shape_421,p:{x:551.2}},{t:this.shape_420,p:{x:563.1}},{t:this.shape_419,p:{x:575.2}},{t:this.shape_418,p:{x:587.1}}]},777).to({state:[{t:this.shape_437},{t:this.shape_436,p:{x:359.8}},{t:this.shape_435,p:{x:371}},{t:this.shape_434,p:{x:383.2}},{t:this.shape_433,p:{x:395.1}},{t:this.shape_432,p:{x:407}},{t:this.shape_431,p:{x:419.1}},{t:this.shape_430,p:{x:431.2}},{t:this.shape_429,p:{x:442.7}},{t:this.shape_428,p:{x:466.7}},{t:this.shape_427,p:{x:479.1}},{t:this.shape_426,p:{x:491}},{t:this.shape_425,p:{x:503.1}},{t:this.shape_424},{t:this.shape_423,p:{x:527}},{t:this.shape_422,p:{x:539.3}},{t:this.shape_421,p:{x:551.2}},{t:this.shape_420,p:{x:563.1}},{t:this.shape_419,p:{x:575.2}},{t:this.shape_418,p:{x:587.1}}]},48).to({state:[{t:this.shape_447,p:{x:347.3}},{t:this.shape_446,p:{x:359}},{t:this.shape_445},{t:this.shape_444},{t:this.shape_432,p:{x:395}},{t:this.shape_427,p:{x:407.1}},{t:this.shape_443,p:{x:419.2}},{t:this.shape_429,p:{x:430.7}},{t:this.shape_428,p:{x:454.7}},{t:this.shape_442,p:{x:467.1}},{t:this.shape_426,p:{x:479}},{t:this.shape_431,p:{x:491.1}},{t:this.shape_441,p:{x:503.2}},{t:this.shape_440,p:{x:515}},{t:this.shape_422,p:{x:527.3}},{t:this.shape_439,p:{x:539.2}},{t:this.shape_438,p:{x:551.1}},{t:this.shape_434,p:{x:563.2}},{t:this.shape_418,p:{x:575.1}}]},1).to({state:[{t:this.shape_456,p:{x:346.8}},{t:this.shape_455,p:{x:359}},{t:this.shape_454},{t:this.shape_453,p:{x:383.8}},{t:this.shape_452},{t:this.shape_451},{t:this.shape_422,p:{x:431.3}},{t:this.shape_450},{t:this.shape_436,p:{x:455.8}},{t:this.shape_449,p:{x:466.1}},{t:this.shape_427,p:{x:479.1}},{t:this.shape_434,p:{x:491.2}},{t:this.shape_448},{t:this.shape_438,p:{x:515.1}}]},47).to({state:[{t:this.shape_466},{t:this.shape_456,p:{x:358.8}},{t:this.shape_455,p:{x:371}},{t:this.shape_433,p:{x:383.1}},{t:this.shape_465,p:{x:395}},{t:this.shape_421,p:{x:407.2}},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_428,p:{x:478.7}},{t:this.shape_431,p:{x:491.1}},{t:this.shape_461,p:{x:503}},{t:this.shape_438,p:{x:515.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_459,p:{x:539}},{t:this.shape_422,p:{x:551.3}},{t:this.shape_458,p:{x:563.2}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_457,p:{x:587.2}},{t:this.shape_418,p:{x:599.1}}]},50).to({state:[{t:this.shape_474},{t:this.shape_465,p:{x:359}},{t:this.shape_453,p:{x:371.8}},{t:this.shape_429,p:{x:382.7}},{t:this.shape_473,p:{x:395.3}},{t:this.shape_436,p:{x:407.8}},{t:this.shape_472},{t:this.shape_471,p:{x:431}},{t:this.shape_470,p:{x:443}},{t:this.shape_469},{t:this.shape_468},{t:this.shape_431,p:{x:491.1}},{t:this.shape_439,p:{x:503.2}},{t:this.shape_467},{t:this.shape_455,p:{x:527}},{t:this.shape_428,p:{x:550.7}},{t:this.shape_420,p:{x:563.1}},{t:this.shape_461,p:{x:575}},{t:this.shape_438,p:{x:587.1}},{t:this.shape_460,p:{x:599.2}},{t:this.shape_459,p:{x:611}},{t:this.shape_422,p:{x:623.3}},{t:this.shape_458,p:{x:635.2}},{t:this.shape_425,p:{x:647.1}},{t:this.shape_457,p:{x:659.2}},{t:this.shape_418,p:{x:671.1}}]},48).to({state:[{t:this.shape_474},{t:this.shape_459,p:{x:359}},{t:this.shape_453,p:{x:371.8}},{t:this.shape_429,p:{x:382.7}},{t:this.shape_477},{t:this.shape_436,p:{x:407.8}},{t:this.shape_431,p:{x:419.1}},{t:this.shape_471,p:{x:431}},{t:this.shape_470,p:{x:443}},{t:this.shape_473,p:{x:467.3}},{t:this.shape_476,p:{x:479.2}},{t:this.shape_456,p:{x:490.8}},{t:this.shape_475},{t:this.shape_449,p:{x:514.1}},{t:this.shape_443,p:{x:527.2}},{t:this.shape_455,p:{x:539}},{t:this.shape_428,p:{x:562.7}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_426,p:{x:587}},{t:this.shape_420,p:{x:599.1}},{t:this.shape_441,p:{x:611.2}},{t:this.shape_440,p:{x:623}},{t:this.shape_422,p:{x:635.3}},{t:this.shape_439,p:{x:647.2}},{t:this.shape_438,p:{x:659.1}},{t:this.shape_434,p:{x:671.2}},{t:this.shape_418,p:{x:683.1}}]},49).to({state:[{t:this.shape_422,p:{x:347.3}},{t:this.shape_446,p:{x:359}},{t:this.shape_487,p:{x:370.1}},{t:this.shape_486},{t:this.shape_442,p:{x:395.1}},{t:this.shape_485},{t:this.shape_484},{t:this.shape_471,p:{x:443}},{t:this.shape_483},{t:this.shape_470,p:{x:467}},{t:this.shape_482,p:{x:479.1}},{t:this.shape_431,p:{x:491.1}},{t:this.shape_439,p:{x:503.2}},{t:this.shape_455,p:{x:515}},{t:this.shape_481},{t:this.shape_480},{t:this.shape_433,p:{x:563.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_479},{t:this.shape_436,p:{x:599.8}},{t:this.shape_478},{t:this.shape_418,p:{x:623.1}},{t:this.shape_449,p:{x:634.1}},{t:this.shape_459,p:{x:647}},{t:this.shape_457,p:{x:659.2}}]},49).to({state:[{t:this.shape_470,p:{x:347}},{t:this.shape_465,p:{x:359}},{t:this.shape_445},{t:this.shape_487,p:{x:382.1}},{t:this.shape_446,p:{x:395}},{t:this.shape_476,p:{x:407.2}},{t:this.shape_430,p:{x:431.2}},{t:this.shape_427,p:{x:443.1}},{t:this.shape_482,p:{x:455.1}},{t:this.shape_489},{t:this.shape_435,p:{x:479}},{t:this.shape_453,p:{x:491.8}},{t:this.shape_488},{t:this.shape_455,p:{x:515}},{t:this.shape_481},{t:this.shape_480},{t:this.shape_433,p:{x:563.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_479},{t:this.shape_436,p:{x:599.8}},{t:this.shape_478},{t:this.shape_418,p:{x:623.1}},{t:this.shape_449,p:{x:634.1}},{t:this.shape_459,p:{x:647}},{t:this.shape_457,p:{x:659.2}}]},49).to({state:[{t:this.shape_447,p:{x:347.3}},{t:this.shape_446,p:{x:359}},{t:this.shape_457,p:{x:371.2}},{t:this.shape_434,p:{x:383.2}},{t:this.shape_442,p:{x:395.1}},{t:this.shape_436,p:{x:407.8}},{t:this.shape_470,p:{x:419}},{t:this.shape_428,p:{x:442.7}},{t:this.shape_431,p:{x:455.1}},{t:this.shape_455,p:{x:467}},{t:this.shape_449,p:{x:478.1}},{t:this.shape_490},{t:this.shape_419,p:{x:503.2}}]},48).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}}]},49).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_495,p:{x:599}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_495,p:{x:599}},{t:this.shape_496,p:{x:611}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_495,p:{x:599}},{t:this.shape_496,p:{x:611}},{t:this.shape_497,p:{x:623}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_498,p:{x:599}},{t:this.shape_496,p:{x:611}},{t:this.shape_497,p:{x:623}},{t:this.shape_495,p:{x:635}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_498,p:{x:599}},{t:this.shape_499,p:{x:611}},{t:this.shape_497,p:{x:623}},{t:this.shape_495,p:{x:635}},{t:this.shape_496,p:{x:647}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_498,p:{x:599}},{t:this.shape_499,p:{x:611}},{t:this.shape_500,p:{x:623}},{t:this.shape_495,p:{x:635}},{t:this.shape_496,p:{x:647}},{t:this.shape_497,p:{x:659}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_501,p:{x:599}},{t:this.shape_499,p:{x:611}},{t:this.shape_500,p:{x:623}},{t:this.shape_498,p:{x:635}},{t:this.shape_496,p:{x:647}},{t:this.shape_497,p:{x:659}},{t:this.shape_495,p:{x:671}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_501,p:{x:599}},{t:this.shape_502,p:{x:611}},{t:this.shape_500,p:{x:623}},{t:this.shape_498,p:{x:635}},{t:this.shape_499,p:{x:647}},{t:this.shape_497,p:{x:659}},{t:this.shape_495,p:{x:671}},{t:this.shape_496,p:{x:683}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_501,p:{x:599}},{t:this.shape_502,p:{x:611}},{t:this.shape_503,p:{x:623}},{t:this.shape_498,p:{x:635}},{t:this.shape_499,p:{x:647}},{t:this.shape_500,p:{x:659}},{t:this.shape_495,p:{x:671}},{t:this.shape_496,p:{x:683}},{t:this.shape_497,p:{x:695}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_504,p:{x:599}},{t:this.shape_502,p:{x:611}},{t:this.shape_503,p:{x:623}},{t:this.shape_501,p:{x:635}},{t:this.shape_499,p:{x:647}},{t:this.shape_500,p:{x:659}},{t:this.shape_498,p:{x:671}},{t:this.shape_496,p:{x:683}},{t:this.shape_497,p:{x:695}},{t:this.shape_495,p:{x:707}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_504,p:{x:599}},{t:this.shape_505,p:{x:611}},{t:this.shape_503,p:{x:623}},{t:this.shape_501,p:{x:635}},{t:this.shape_502,p:{x:647}},{t:this.shape_500,p:{x:659}},{t:this.shape_498,p:{x:671}},{t:this.shape_499,p:{x:683}},{t:this.shape_497,p:{x:695}},{t:this.shape_495,p:{x:707}},{t:this.shape_496,p:{x:719}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_504,p:{x:599}},{t:this.shape_505,p:{x:611}},{t:this.shape_506,p:{x:623}},{t:this.shape_501,p:{x:635}},{t:this.shape_502,p:{x:647}},{t:this.shape_503,p:{x:659}},{t:this.shape_498,p:{x:671}},{t:this.shape_499,p:{x:683}},{t:this.shape_500,p:{x:695}},{t:this.shape_495,p:{x:707}},{t:this.shape_496,p:{x:719}},{t:this.shape_497,p:{x:731}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_507,p:{x:599}},{t:this.shape_505,p:{x:611}},{t:this.shape_506,p:{x:623}},{t:this.shape_504,p:{x:635}},{t:this.shape_502,p:{x:647}},{t:this.shape_503,p:{x:659}},{t:this.shape_501,p:{x:671}},{t:this.shape_499,p:{x:683}},{t:this.shape_500,p:{x:695}},{t:this.shape_498,p:{x:707}},{t:this.shape_496,p:{x:719}},{t:this.shape_497,p:{x:731}},{t:this.shape_495,p:{x:743}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_507,p:{x:599}},{t:this.shape_508,p:{x:611}},{t:this.shape_506,p:{x:623}},{t:this.shape_504,p:{x:635}},{t:this.shape_505,p:{x:647}},{t:this.shape_503,p:{x:659}},{t:this.shape_501,p:{x:671}},{t:this.shape_502,p:{x:683}},{t:this.shape_500,p:{x:695}},{t:this.shape_498,p:{x:707}},{t:this.shape_499,p:{x:719}},{t:this.shape_497,p:{x:731}},{t:this.shape_495,p:{x:743}},{t:this.shape_496,p:{x:755}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_507,p:{x:599}},{t:this.shape_508,p:{x:611}},{t:this.shape_509,p:{x:623}},{t:this.shape_504,p:{x:635}},{t:this.shape_505,p:{x:647}},{t:this.shape_506,p:{x:659}},{t:this.shape_501,p:{x:671}},{t:this.shape_502,p:{x:683}},{t:this.shape_503,p:{x:695}},{t:this.shape_498,p:{x:707}},{t:this.shape_499,p:{x:719}},{t:this.shape_500,p:{x:731}},{t:this.shape_495,p:{x:743}},{t:this.shape_496,p:{x:755}},{t:this.shape_497,p:{x:767}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_510,p:{x:599}},{t:this.shape_508,p:{x:611}},{t:this.shape_509,p:{x:623}},{t:this.shape_507,p:{x:635}},{t:this.shape_505,p:{x:647}},{t:this.shape_506,p:{x:659}},{t:this.shape_504,p:{x:671}},{t:this.shape_502,p:{x:683}},{t:this.shape_503,p:{x:695}},{t:this.shape_501,p:{x:707}},{t:this.shape_499,p:{x:719}},{t:this.shape_500,p:{x:731}},{t:this.shape_498,p:{x:743}},{t:this.shape_496,p:{x:755}},{t:this.shape_497,p:{x:767}},{t:this.shape_495,p:{x:779}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_510,p:{x:599}},{t:this.shape_511,p:{x:611}},{t:this.shape_509,p:{x:623}},{t:this.shape_507,p:{x:635}},{t:this.shape_508,p:{x:647}},{t:this.shape_506,p:{x:659}},{t:this.shape_504,p:{x:671}},{t:this.shape_505,p:{x:683}},{t:this.shape_503,p:{x:695}},{t:this.shape_501,p:{x:707}},{t:this.shape_502,p:{x:719}},{t:this.shape_500,p:{x:731}},{t:this.shape_498,p:{x:743}},{t:this.shape_499,p:{x:755}},{t:this.shape_497,p:{x:767}},{t:this.shape_495,p:{x:779}},{t:this.shape_496,p:{x:791}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_510,p:{x:599}},{t:this.shape_511,p:{x:611}},{t:this.shape_512,p:{x:623}},{t:this.shape_507,p:{x:635}},{t:this.shape_508,p:{x:647}},{t:this.shape_509,p:{x:659}},{t:this.shape_504,p:{x:671}},{t:this.shape_505,p:{x:683}},{t:this.shape_506,p:{x:695}},{t:this.shape_501,p:{x:707}},{t:this.shape_502,p:{x:719}},{t:this.shape_503,p:{x:731}},{t:this.shape_498,p:{x:743}},{t:this.shape_499,p:{x:755}},{t:this.shape_500,p:{x:767}},{t:this.shape_495,p:{x:779}},{t:this.shape_496,p:{x:791}},{t:this.shape_497,p:{x:803}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_513,p:{x:599}},{t:this.shape_511,p:{x:611}},{t:this.shape_512,p:{x:623}},{t:this.shape_510,p:{x:635}},{t:this.shape_508,p:{x:647}},{t:this.shape_509,p:{x:659}},{t:this.shape_507,p:{x:671}},{t:this.shape_505,p:{x:683}},{t:this.shape_506,p:{x:695}},{t:this.shape_504,p:{x:707}},{t:this.shape_502,p:{x:719}},{t:this.shape_503,p:{x:731}},{t:this.shape_501,p:{x:743}},{t:this.shape_499,p:{x:755}},{t:this.shape_500,p:{x:767}},{t:this.shape_498,p:{x:779}},{t:this.shape_496,p:{x:791}},{t:this.shape_497,p:{x:803}},{t:this.shape_495,p:{x:815}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_513,p:{x:599}},{t:this.shape_514,p:{x:611}},{t:this.shape_512,p:{x:623}},{t:this.shape_510,p:{x:635}},{t:this.shape_511,p:{x:647}},{t:this.shape_509,p:{x:659}},{t:this.shape_507,p:{x:671}},{t:this.shape_508,p:{x:683}},{t:this.shape_506,p:{x:695}},{t:this.shape_504,p:{x:707}},{t:this.shape_505,p:{x:719}},{t:this.shape_503,p:{x:731}},{t:this.shape_501,p:{x:743}},{t:this.shape_502,p:{x:755}},{t:this.shape_500,p:{x:767}},{t:this.shape_498,p:{x:779}},{t:this.shape_499,p:{x:791}},{t:this.shape_497,p:{x:803}},{t:this.shape_495,p:{x:815}},{t:this.shape_496,p:{x:827}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_513,p:{x:599}},{t:this.shape_514,p:{x:611}},{t:this.shape_515,p:{x:623}},{t:this.shape_510,p:{x:635}},{t:this.shape_511,p:{x:647}},{t:this.shape_512,p:{x:659}},{t:this.shape_507,p:{x:671}},{t:this.shape_508,p:{x:683}},{t:this.shape_509,p:{x:695}},{t:this.shape_504,p:{x:707}},{t:this.shape_505,p:{x:719}},{t:this.shape_506,p:{x:731}},{t:this.shape_501,p:{x:743}},{t:this.shape_502,p:{x:755}},{t:this.shape_503,p:{x:767}},{t:this.shape_498,p:{x:779}},{t:this.shape_499,p:{x:791}},{t:this.shape_500,p:{x:803}},{t:this.shape_495,p:{x:815}},{t:this.shape_496,p:{x:827}},{t:this.shape_497,p:{x:839}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_516,p:{x:599}},{t:this.shape_514,p:{x:611}},{t:this.shape_515,p:{x:623}},{t:this.shape_513,p:{x:635}},{t:this.shape_511,p:{x:647}},{t:this.shape_512,p:{x:659}},{t:this.shape_510,p:{x:671}},{t:this.shape_508,p:{x:683}},{t:this.shape_509,p:{x:695}},{t:this.shape_507,p:{x:707}},{t:this.shape_505,p:{x:719}},{t:this.shape_506,p:{x:731}},{t:this.shape_504,p:{x:743}},{t:this.shape_502,p:{x:755}},{t:this.shape_503,p:{x:767}},{t:this.shape_501,p:{x:779}},{t:this.shape_499,p:{x:791}},{t:this.shape_500,p:{x:803}},{t:this.shape_498,p:{x:815}},{t:this.shape_496,p:{x:827}},{t:this.shape_497,p:{x:839}},{t:this.shape_495,p:{x:851}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_516,p:{x:599}},{t:this.shape_517,p:{x:611}},{t:this.shape_515,p:{x:623}},{t:this.shape_513,p:{x:635}},{t:this.shape_514,p:{x:647}},{t:this.shape_512,p:{x:659}},{t:this.shape_510,p:{x:671}},{t:this.shape_511,p:{x:683}},{t:this.shape_509,p:{x:695}},{t:this.shape_507,p:{x:707}},{t:this.shape_508,p:{x:719}},{t:this.shape_506,p:{x:731}},{t:this.shape_504,p:{x:743}},{t:this.shape_505,p:{x:755}},{t:this.shape_503,p:{x:767}},{t:this.shape_501,p:{x:779}},{t:this.shape_502,p:{x:791}},{t:this.shape_500,p:{x:803}},{t:this.shape_498,p:{x:815}},{t:this.shape_499,p:{x:827}},{t:this.shape_497,p:{x:839}},{t:this.shape_495,p:{x:851}},{t:this.shape_496,p:{x:863}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_516,p:{x:599}},{t:this.shape_517,p:{x:611}},{t:this.shape_518,p:{x:623}},{t:this.shape_513,p:{x:635}},{t:this.shape_514,p:{x:647}},{t:this.shape_515,p:{x:659}},{t:this.shape_510,p:{x:671}},{t:this.shape_511,p:{x:683}},{t:this.shape_512,p:{x:695}},{t:this.shape_507,p:{x:707}},{t:this.shape_508,p:{x:719}},{t:this.shape_509,p:{x:731}},{t:this.shape_504,p:{x:743}},{t:this.shape_505,p:{x:755}},{t:this.shape_506,p:{x:767}},{t:this.shape_501,p:{x:779}},{t:this.shape_502,p:{x:791}},{t:this.shape_503,p:{x:803}},{t:this.shape_498,p:{x:815}},{t:this.shape_499,p:{x:827}},{t:this.shape_500,p:{x:839}},{t:this.shape_495,p:{x:851}},{t:this.shape_496,p:{x:863}},{t:this.shape_497,p:{x:875}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_519,p:{x:599}},{t:this.shape_517,p:{x:611}},{t:this.shape_518,p:{x:623}},{t:this.shape_516,p:{x:635}},{t:this.shape_514,p:{x:647}},{t:this.shape_515,p:{x:659}},{t:this.shape_513,p:{x:671}},{t:this.shape_511,p:{x:683}},{t:this.shape_512,p:{x:695}},{t:this.shape_510,p:{x:707}},{t:this.shape_508,p:{x:719}},{t:this.shape_509,p:{x:731}},{t:this.shape_507,p:{x:743}},{t:this.shape_505,p:{x:755}},{t:this.shape_506,p:{x:767}},{t:this.shape_504,p:{x:779}},{t:this.shape_502,p:{x:791}},{t:this.shape_503,p:{x:803}},{t:this.shape_501,p:{x:815}},{t:this.shape_499,p:{x:827}},{t:this.shape_500,p:{x:839}},{t:this.shape_498,p:{x:851}},{t:this.shape_496,p:{x:863}},{t:this.shape_497,p:{x:875}},{t:this.shape_495,p:{x:887}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_519,p:{x:599}},{t:this.shape_520,p:{x:611}},{t:this.shape_518,p:{x:623}},{t:this.shape_516,p:{x:635}},{t:this.shape_517,p:{x:647}},{t:this.shape_515,p:{x:659}},{t:this.shape_513,p:{x:671}},{t:this.shape_514,p:{x:683}},{t:this.shape_512,p:{x:695}},{t:this.shape_510,p:{x:707}},{t:this.shape_511,p:{x:719}},{t:this.shape_509,p:{x:731}},{t:this.shape_507,p:{x:743}},{t:this.shape_508,p:{x:755}},{t:this.shape_506,p:{x:767}},{t:this.shape_504,p:{x:779}},{t:this.shape_505,p:{x:791}},{t:this.shape_503,p:{x:803}},{t:this.shape_501,p:{x:815}},{t:this.shape_502,p:{x:827}},{t:this.shape_500,p:{x:839}},{t:this.shape_498,p:{x:851}},{t:this.shape_499,p:{x:863}},{t:this.shape_497,p:{x:875}},{t:this.shape_495,p:{x:887}},{t:this.shape_496,p:{x:899}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_519,p:{x:599}},{t:this.shape_520,p:{x:611}},{t:this.shape_521,p:{x:623}},{t:this.shape_516,p:{x:635}},{t:this.shape_517,p:{x:647}},{t:this.shape_518,p:{x:659}},{t:this.shape_513,p:{x:671}},{t:this.shape_514,p:{x:683}},{t:this.shape_515,p:{x:695}},{t:this.shape_510,p:{x:707}},{t:this.shape_511,p:{x:719}},{t:this.shape_512,p:{x:731}},{t:this.shape_507,p:{x:743}},{t:this.shape_508,p:{x:755}},{t:this.shape_509,p:{x:767}},{t:this.shape_504,p:{x:779}},{t:this.shape_505,p:{x:791}},{t:this.shape_506,p:{x:803}},{t:this.shape_501,p:{x:815}},{t:this.shape_502,p:{x:827}},{t:this.shape_503,p:{x:839}},{t:this.shape_498,p:{x:851}},{t:this.shape_499,p:{x:863}},{t:this.shape_500,p:{x:875}},{t:this.shape_495,p:{x:887}},{t:this.shape_496,p:{x:899}},{t:this.shape_497,p:{x:911}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_522,p:{x:599}},{t:this.shape_520,p:{x:611}},{t:this.shape_521,p:{x:623}},{t:this.shape_519,p:{x:635}},{t:this.shape_517,p:{x:647}},{t:this.shape_518,p:{x:659}},{t:this.shape_516,p:{x:671}},{t:this.shape_514,p:{x:683}},{t:this.shape_515,p:{x:695}},{t:this.shape_513,p:{x:707}},{t:this.shape_511,p:{x:719}},{t:this.shape_512,p:{x:731}},{t:this.shape_510,p:{x:743}},{t:this.shape_508,p:{x:755}},{t:this.shape_509,p:{x:767}},{t:this.shape_507,p:{x:779}},{t:this.shape_505,p:{x:791}},{t:this.shape_506,p:{x:803}},{t:this.shape_504,p:{x:815}},{t:this.shape_502,p:{x:827}},{t:this.shape_503,p:{x:839}},{t:this.shape_501,p:{x:851}},{t:this.shape_499,p:{x:863}},{t:this.shape_500,p:{x:875}},{t:this.shape_498,p:{x:887}},{t:this.shape_496,p:{x:899}},{t:this.shape_497,p:{x:911}},{t:this.shape_495,p:{x:923}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_522,p:{x:599}},{t:this.shape_523,p:{x:611}},{t:this.shape_521,p:{x:623}},{t:this.shape_519,p:{x:635}},{t:this.shape_520,p:{x:647}},{t:this.shape_518,p:{x:659}},{t:this.shape_516,p:{x:671}},{t:this.shape_517,p:{x:683}},{t:this.shape_515,p:{x:695}},{t:this.shape_513,p:{x:707}},{t:this.shape_514,p:{x:719}},{t:this.shape_512,p:{x:731}},{t:this.shape_510,p:{x:743}},{t:this.shape_511,p:{x:755}},{t:this.shape_509,p:{x:767}},{t:this.shape_507,p:{x:779}},{t:this.shape_508,p:{x:791}},{t:this.shape_506,p:{x:803}},{t:this.shape_504,p:{x:815}},{t:this.shape_505,p:{x:827}},{t:this.shape_503,p:{x:839}},{t:this.shape_501,p:{x:851}},{t:this.shape_502,p:{x:863}},{t:this.shape_500,p:{x:875}},{t:this.shape_498,p:{x:887}},{t:this.shape_499,p:{x:899}},{t:this.shape_497,p:{x:911}},{t:this.shape_495,p:{x:923}},{t:this.shape_496,p:{x:935}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_522,p:{x:599}},{t:this.shape_523,p:{x:611}},{t:this.shape_524,p:{x:623}},{t:this.shape_519,p:{x:635}},{t:this.shape_520,p:{x:647}},{t:this.shape_521,p:{x:659}},{t:this.shape_516,p:{x:671}},{t:this.shape_517,p:{x:683}},{t:this.shape_518,p:{x:695}},{t:this.shape_513,p:{x:707}},{t:this.shape_514,p:{x:719}},{t:this.shape_515,p:{x:731}},{t:this.shape_510,p:{x:743}},{t:this.shape_511,p:{x:755}},{t:this.shape_512,p:{x:767}},{t:this.shape_507,p:{x:779}},{t:this.shape_508,p:{x:791}},{t:this.shape_509,p:{x:803}},{t:this.shape_504,p:{x:815}},{t:this.shape_505,p:{x:827}},{t:this.shape_506,p:{x:839}},{t:this.shape_501,p:{x:851}},{t:this.shape_502,p:{x:863}},{t:this.shape_503,p:{x:875}},{t:this.shape_498,p:{x:887}},{t:this.shape_499,p:{x:899}},{t:this.shape_500,p:{x:911}},{t:this.shape_495,p:{x:923}},{t:this.shape_496,p:{x:935}},{t:this.shape_497,p:{x:947}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_525,p:{x:599}},{t:this.shape_523,p:{x:611}},{t:this.shape_524,p:{x:623}},{t:this.shape_522,p:{x:635}},{t:this.shape_520,p:{x:647}},{t:this.shape_521,p:{x:659}},{t:this.shape_519,p:{x:671}},{t:this.shape_517,p:{x:683}},{t:this.shape_518,p:{x:695}},{t:this.shape_516,p:{x:707}},{t:this.shape_514,p:{x:719}},{t:this.shape_515,p:{x:731}},{t:this.shape_513,p:{x:743}},{t:this.shape_511,p:{x:755}},{t:this.shape_512,p:{x:767}},{t:this.shape_510,p:{x:779}},{t:this.shape_508,p:{x:791}},{t:this.shape_509,p:{x:803}},{t:this.shape_507,p:{x:815}},{t:this.shape_505,p:{x:827}},{t:this.shape_506,p:{x:839}},{t:this.shape_504,p:{x:851}},{t:this.shape_502,p:{x:863}},{t:this.shape_503,p:{x:875}},{t:this.shape_501,p:{x:887}},{t:this.shape_499,p:{x:899}},{t:this.shape_500,p:{x:911}},{t:this.shape_498,p:{x:923}},{t:this.shape_496,p:{x:935}},{t:this.shape_497,p:{x:947}},{t:this.shape_495,p:{x:959}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_525,p:{x:599}},{t:this.shape_526,p:{x:611}},{t:this.shape_524,p:{x:623}},{t:this.shape_522,p:{x:635}},{t:this.shape_523,p:{x:647}},{t:this.shape_521,p:{x:659}},{t:this.shape_519,p:{x:671}},{t:this.shape_520,p:{x:683}},{t:this.shape_518,p:{x:695}},{t:this.shape_516,p:{x:707}},{t:this.shape_517,p:{x:719}},{t:this.shape_515,p:{x:731}},{t:this.shape_513,p:{x:743}},{t:this.shape_514,p:{x:755}},{t:this.shape_512,p:{x:767}},{t:this.shape_510,p:{x:779}},{t:this.shape_511,p:{x:791}},{t:this.shape_509,p:{x:803}},{t:this.shape_507,p:{x:815}},{t:this.shape_508,p:{x:827}},{t:this.shape_506,p:{x:839}},{t:this.shape_504,p:{x:851}},{t:this.shape_505,p:{x:863}},{t:this.shape_503,p:{x:875}},{t:this.shape_501,p:{x:887}},{t:this.shape_502,p:{x:899}},{t:this.shape_500,p:{x:911}},{t:this.shape_498,p:{x:923}},{t:this.shape_499,p:{x:935}},{t:this.shape_497,p:{x:947}},{t:this.shape_495,p:{x:959}},{t:this.shape_496,p:{x:971}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_525,p:{x:599}},{t:this.shape_526,p:{x:611}},{t:this.shape_527,p:{x:623}},{t:this.shape_522,p:{x:635}},{t:this.shape_523,p:{x:647}},{t:this.shape_524,p:{x:659}},{t:this.shape_519,p:{x:671}},{t:this.shape_520,p:{x:683}},{t:this.shape_521,p:{x:695}},{t:this.shape_516,p:{x:707}},{t:this.shape_517,p:{x:719}},{t:this.shape_518,p:{x:731}},{t:this.shape_513,p:{x:743}},{t:this.shape_514,p:{x:755}},{t:this.shape_515,p:{x:767}},{t:this.shape_510,p:{x:779}},{t:this.shape_511,p:{x:791}},{t:this.shape_512,p:{x:803}},{t:this.shape_507,p:{x:815}},{t:this.shape_508,p:{x:827}},{t:this.shape_509,p:{x:839}},{t:this.shape_504,p:{x:851}},{t:this.shape_505,p:{x:863}},{t:this.shape_506,p:{x:875}},{t:this.shape_501,p:{x:887}},{t:this.shape_502,p:{x:899}},{t:this.shape_503,p:{x:911}},{t:this.shape_498,p:{x:923}},{t:this.shape_499,p:{x:935}},{t:this.shape_500,p:{x:947}},{t:this.shape_495,p:{x:959}},{t:this.shape_496,p:{x:971}},{t:this.shape_497,p:{x:983}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_528,p:{x:599}},{t:this.shape_526,p:{x:611}},{t:this.shape_527,p:{x:623}},{t:this.shape_525,p:{x:635}},{t:this.shape_523,p:{x:647}},{t:this.shape_524,p:{x:659}},{t:this.shape_522,p:{x:671}},{t:this.shape_520,p:{x:683}},{t:this.shape_521,p:{x:695}},{t:this.shape_519,p:{x:707}},{t:this.shape_517,p:{x:719}},{t:this.shape_518,p:{x:731}},{t:this.shape_516,p:{x:743}},{t:this.shape_514,p:{x:755}},{t:this.shape_515,p:{x:767}},{t:this.shape_513,p:{x:779}},{t:this.shape_511,p:{x:791}},{t:this.shape_512,p:{x:803}},{t:this.shape_510,p:{x:815}},{t:this.shape_508,p:{x:827}},{t:this.shape_509,p:{x:839}},{t:this.shape_507,p:{x:851}},{t:this.shape_505,p:{x:863}},{t:this.shape_506,p:{x:875}},{t:this.shape_504,p:{x:887}},{t:this.shape_502,p:{x:899}},{t:this.shape_503,p:{x:911}},{t:this.shape_501,p:{x:923}},{t:this.shape_499,p:{x:935}},{t:this.shape_500,p:{x:947}},{t:this.shape_498,p:{x:959}},{t:this.shape_496,p:{x:971}},{t:this.shape_497,p:{x:983}},{t:this.shape_495,p:{x:995}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_528,p:{x:599}},{t:this.shape_529,p:{x:611}},{t:this.shape_527,p:{x:623}},{t:this.shape_525,p:{x:635}},{t:this.shape_526,p:{x:647}},{t:this.shape_524,p:{x:659}},{t:this.shape_522,p:{x:671}},{t:this.shape_523,p:{x:683}},{t:this.shape_521,p:{x:695}},{t:this.shape_519,p:{x:707}},{t:this.shape_520,p:{x:719}},{t:this.shape_518,p:{x:731}},{t:this.shape_516,p:{x:743}},{t:this.shape_517,p:{x:755}},{t:this.shape_515,p:{x:767}},{t:this.shape_513,p:{x:779}},{t:this.shape_514,p:{x:791}},{t:this.shape_512,p:{x:803}},{t:this.shape_510,p:{x:815}},{t:this.shape_511,p:{x:827}},{t:this.shape_509,p:{x:839}},{t:this.shape_507,p:{x:851}},{t:this.shape_508,p:{x:863}},{t:this.shape_506,p:{x:875}},{t:this.shape_504,p:{x:887}},{t:this.shape_505,p:{x:899}},{t:this.shape_503,p:{x:911}},{t:this.shape_501,p:{x:923}},{t:this.shape_502,p:{x:935}},{t:this.shape_500,p:{x:947}},{t:this.shape_498,p:{x:959}},{t:this.shape_499,p:{x:971}},{t:this.shape_497,p:{x:983}},{t:this.shape_495,p:{x:995}},{t:this.shape_496,p:{x:1007}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_528,p:{x:599}},{t:this.shape_529,p:{x:611}},{t:this.shape_530},{t:this.shape_525,p:{x:635}},{t:this.shape_526,p:{x:647}},{t:this.shape_527,p:{x:659}},{t:this.shape_522,p:{x:671}},{t:this.shape_523,p:{x:683}},{t:this.shape_524,p:{x:695}},{t:this.shape_519,p:{x:707}},{t:this.shape_520,p:{x:719}},{t:this.shape_521,p:{x:731}},{t:this.shape_516,p:{x:743}},{t:this.shape_517,p:{x:755}},{t:this.shape_518,p:{x:767}},{t:this.shape_513,p:{x:779}},{t:this.shape_514,p:{x:791}},{t:this.shape_515,p:{x:803}},{t:this.shape_510,p:{x:815}},{t:this.shape_511,p:{x:827}},{t:this.shape_512,p:{x:839}},{t:this.shape_507,p:{x:851}},{t:this.shape_508,p:{x:863}},{t:this.shape_509,p:{x:875}},{t:this.shape_504,p:{x:887}},{t:this.shape_505,p:{x:899}},{t:this.shape_506,p:{x:911}},{t:this.shape_501,p:{x:923}},{t:this.shape_502,p:{x:935}},{t:this.shape_503,p:{x:947}},{t:this.shape_498,p:{x:959}},{t:this.shape_499,p:{x:971}},{t:this.shape_500,p:{x:983}},{t:this.shape_495,p:{x:995}},{t:this.shape_496,p:{x:1007}},{t:this.shape_497,p:{x:1019}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_531,p:{x:599}},{t:this.shape_529,p:{x:611}},{t:this.shape_530},{t:this.shape_528,p:{x:635}},{t:this.shape_526,p:{x:647}},{t:this.shape_527,p:{x:659}},{t:this.shape_525,p:{x:671}},{t:this.shape_523,p:{x:683}},{t:this.shape_524,p:{x:695}},{t:this.shape_522,p:{x:707}},{t:this.shape_520,p:{x:719}},{t:this.shape_521,p:{x:731}},{t:this.shape_519,p:{x:743}},{t:this.shape_517,p:{x:755}},{t:this.shape_518,p:{x:767}},{t:this.shape_516,p:{x:779}},{t:this.shape_514,p:{x:791}},{t:this.shape_515,p:{x:803}},{t:this.shape_513,p:{x:815}},{t:this.shape_511,p:{x:827}},{t:this.shape_512,p:{x:839}},{t:this.shape_510,p:{x:851}},{t:this.shape_508,p:{x:863}},{t:this.shape_509,p:{x:875}},{t:this.shape_507,p:{x:887}},{t:this.shape_505,p:{x:899}},{t:this.shape_506,p:{x:911}},{t:this.shape_504,p:{x:923}},{t:this.shape_502,p:{x:935}},{t:this.shape_503,p:{x:947}},{t:this.shape_501,p:{x:959}},{t:this.shape_499,p:{x:971}},{t:this.shape_500,p:{x:983}},{t:this.shape_498,p:{x:995}},{t:this.shape_496,p:{x:1007}},{t:this.shape_497,p:{x:1019}},{t:this.shape_495,p:{x:1031}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_531,p:{x:599}},{t:this.shape_532,p:{x:611}},{t:this.shape_530},{t:this.shape_528,p:{x:635}},{t:this.shape_529,p:{x:647}},{t:this.shape_527,p:{x:659}},{t:this.shape_525,p:{x:671}},{t:this.shape_526,p:{x:683}},{t:this.shape_524,p:{x:695}},{t:this.shape_522,p:{x:707}},{t:this.shape_523,p:{x:719}},{t:this.shape_521,p:{x:731}},{t:this.shape_519,p:{x:743}},{t:this.shape_520,p:{x:755}},{t:this.shape_518,p:{x:767}},{t:this.shape_516,p:{x:779}},{t:this.shape_517,p:{x:791}},{t:this.shape_515,p:{x:803}},{t:this.shape_513,p:{x:815}},{t:this.shape_514,p:{x:827}},{t:this.shape_512,p:{x:839}},{t:this.shape_510,p:{x:851}},{t:this.shape_511,p:{x:863}},{t:this.shape_509,p:{x:875}},{t:this.shape_507,p:{x:887}},{t:this.shape_508,p:{x:899}},{t:this.shape_506,p:{x:911}},{t:this.shape_504,p:{x:923}},{t:this.shape_505,p:{x:935}},{t:this.shape_503,p:{x:947}},{t:this.shape_501,p:{x:959}},{t:this.shape_502,p:{x:971}},{t:this.shape_500,p:{x:983}},{t:this.shape_498,p:{x:995}},{t:this.shape_499,p:{x:1007}},{t:this.shape_497,p:{x:1019}},{t:this.shape_495,p:{x:1031}},{t:this.shape_496,p:{x:1043}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_531,p:{x:599}},{t:this.shape_533,p:{x:611}},{t:this.shape_530},{t:this.shape_528,p:{x:635}},{t:this.shape_532,p:{x:647}},{t:this.shape_527,p:{x:659}},{t:this.shape_525,p:{x:671}},{t:this.shape_529,p:{x:683}},{t:this.shape_524,p:{x:695}},{t:this.shape_522,p:{x:707}},{t:this.shape_526,p:{x:719}},{t:this.shape_521,p:{x:731}},{t:this.shape_519,p:{x:743}},{t:this.shape_523,p:{x:755}},{t:this.shape_518,p:{x:767}},{t:this.shape_516,p:{x:779}},{t:this.shape_520,p:{x:791}},{t:this.shape_515,p:{x:803}},{t:this.shape_513,p:{x:815}},{t:this.shape_517,p:{x:827}},{t:this.shape_512,p:{x:839}},{t:this.shape_510,p:{x:851}},{t:this.shape_514,p:{x:863}},{t:this.shape_509,p:{x:875}},{t:this.shape_507,p:{x:887}},{t:this.shape_511,p:{x:899}},{t:this.shape_506,p:{x:911}},{t:this.shape_504,p:{x:923}},{t:this.shape_508,p:{x:935}},{t:this.shape_503,p:{x:947}},{t:this.shape_501,p:{x:959}},{t:this.shape_505,p:{x:971}},{t:this.shape_500,p:{x:983}},{t:this.shape_498,p:{x:995}},{t:this.shape_502,p:{x:1007}},{t:this.shape_497,p:{x:1019}},{t:this.shape_495,p:{x:1031}},{t:this.shape_499,p:{x:1043}},{t:this.shape_496,p:{x:1055}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_534},{t:this.shape_533,p:{x:611}},{t:this.shape_530},{t:this.shape_531,p:{x:635}},{t:this.shape_532,p:{x:647}},{t:this.shape_527,p:{x:659}},{t:this.shape_528,p:{x:671}},{t:this.shape_529,p:{x:683}},{t:this.shape_524,p:{x:695}},{t:this.shape_525,p:{x:707}},{t:this.shape_526,p:{x:719}},{t:this.shape_521,p:{x:731}},{t:this.shape_522,p:{x:743}},{t:this.shape_523,p:{x:755}},{t:this.shape_518,p:{x:767}},{t:this.shape_519,p:{x:779}},{t:this.shape_520,p:{x:791}},{t:this.shape_515,p:{x:803}},{t:this.shape_516,p:{x:815}},{t:this.shape_517,p:{x:827}},{t:this.shape_512,p:{x:839}},{t:this.shape_513,p:{x:851}},{t:this.shape_514,p:{x:863}},{t:this.shape_509,p:{x:875}},{t:this.shape_510,p:{x:887}},{t:this.shape_511,p:{x:899}},{t:this.shape_506,p:{x:911}},{t:this.shape_507,p:{x:923}},{t:this.shape_508,p:{x:935}},{t:this.shape_503,p:{x:947}},{t:this.shape_504,p:{x:959}},{t:this.shape_505,p:{x:971}},{t:this.shape_500,p:{x:983}},{t:this.shape_501,p:{x:995}},{t:this.shape_502,p:{x:1007}},{t:this.shape_497,p:{x:1019}},{t:this.shape_498,p:{x:1031}},{t:this.shape_499,p:{x:1043}},{t:this.shape_496,p:{x:1055}},{t:this.shape_495,p:{x:1067}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_534},{t:this.shape_535,p:{x:611}},{t:this.shape_530},{t:this.shape_531,p:{x:635}},{t:this.shape_533,p:{x:647}},{t:this.shape_527,p:{x:659}},{t:this.shape_528,p:{x:671}},{t:this.shape_532,p:{x:683}},{t:this.shape_524,p:{x:695}},{t:this.shape_525,p:{x:707}},{t:this.shape_529,p:{x:719}},{t:this.shape_521,p:{x:731}},{t:this.shape_522,p:{x:743}},{t:this.shape_526,p:{x:755}},{t:this.shape_518,p:{x:767}},{t:this.shape_519,p:{x:779}},{t:this.shape_523,p:{x:791}},{t:this.shape_515,p:{x:803}},{t:this.shape_516,p:{x:815}},{t:this.shape_520,p:{x:827}},{t:this.shape_512,p:{x:839}},{t:this.shape_513,p:{x:851}},{t:this.shape_517,p:{x:863}},{t:this.shape_509,p:{x:875}},{t:this.shape_510,p:{x:887}},{t:this.shape_514,p:{x:899}},{t:this.shape_506,p:{x:911}},{t:this.shape_507,p:{x:923}},{t:this.shape_511,p:{x:935}},{t:this.shape_503,p:{x:947}},{t:this.shape_504,p:{x:959}},{t:this.shape_508,p:{x:971}},{t:this.shape_500,p:{x:983}},{t:this.shape_501,p:{x:995}},{t:this.shape_505,p:{x:1007}},{t:this.shape_497,p:{x:1019}},{t:this.shape_498,p:{x:1031}},{t:this.shape_502,p:{x:1043}},{t:this.shape_499,p:{x:1055}},{t:this.shape_495,p:{x:1067}},{t:this.shape_496,p:{x:1079}}]},2).to({state:[{t:this.shape_431,p:{x:347.1}},{t:this.shape_430,p:{x:359.2}},{t:this.shape_428,p:{x:370.7}},{t:this.shape_494},{t:this.shape_442,p:{x:395.1}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_422,p:{x:443.3}},{t:this.shape_423,p:{x:455}},{t:this.shape_471,p:{x:467}},{t:this.shape_470,p:{x:479}},{t:this.shape_491},{t:this.shape_447,p:{x:503.3}},{t:this.shape_487,p:{x:514.1}},{t:this.shape_460,p:{x:527.2}},{t:this.shape_481},{t:this.shape_418,p:{x:551.1}},{t:this.shape_449,p:{x:562.1}},{t:this.shape_425,p:{x:575.1}},{t:this.shape_455,p:{x:587}},{t:this.shape_534},{t:this.shape_536},{t:this.shape_530},{t:this.shape_531,p:{x:635}},{t:this.shape_535,p:{x:647}},{t:this.shape_527,p:{x:659}},{t:this.shape_528,p:{x:671}},{t:this.shape_533,p:{x:683}},{t:this.shape_524,p:{x:695}},{t:this.shape_525,p:{x:707}},{t:this.shape_532,p:{x:719}},{t:this.shape_521,p:{x:731}},{t:this.shape_522,p:{x:743}},{t:this.shape_529,p:{x:755}},{t:this.shape_518,p:{x:767}},{t:this.shape_519,p:{x:779}},{t:this.shape_526,p:{x:791}},{t:this.shape_515,p:{x:803}},{t:this.shape_516,p:{x:815}},{t:this.shape_523,p:{x:827}},{t:this.shape_512,p:{x:839}},{t:this.shape_513,p:{x:851}},{t:this.shape_520,p:{x:863}},{t:this.shape_509,p:{x:875}},{t:this.shape_510,p:{x:887}},{t:this.shape_517,p:{x:899}},{t:this.shape_506,p:{x:911}},{t:this.shape_507,p:{x:923}},{t:this.shape_514,p:{x:935}},{t:this.shape_503,p:{x:947}},{t:this.shape_504,p:{x:959}},{t:this.shape_511,p:{x:971}},{t:this.shape_500,p:{x:983}},{t:this.shape_501,p:{x:995}},{t:this.shape_508,p:{x:1007}},{t:this.shape_497,p:{x:1019}},{t:this.shape_498,p:{x:1031}},{t:this.shape_505,p:{x:1043}},{t:this.shape_502,p:{x:1055}},{t:this.shape_495,p:{x:1067}},{t:this.shape_499,p:{x:1079}},{t:this.shape_496,p:{x:1091}}]},2).to({state:[]},37).wait(8));

	// Central text
	this.instance_22 = new lib.Tween5("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(719.2,307.8,0.06,0.06,0,180,0);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(629).to({_off:false},0).to({scaleX:1,scaleY:1,skewX:0},6).wait(14).to({startPosition:0},0).wait(10).to({startPosition:0},0).to({y:185.8},20).to({x:744.2},4).to({_off:true},653).wait(8));

	// small text block
	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AAAAqQgFgCgCgEQgDgEgCgFIgBgKIAAgcIgSAAIAAgKIASgBIACgVIALAAIAAAVIAdAAIAAALIgdAAIAAAcIAAAHQAAADACACQACACADABIAHABQAGAAAJgDIADAKQgMADgJABQgHAAgEgCg");
	this.shape_537.setTransform(772.4,231.8);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_538.setTransform(764.5,232.7);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgHIgBgHQAAgEADgJQADgGAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAFQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACAEQACADADADQADACAEABIAIABQAGABAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDgBIgHgBIgGABQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_539.setTransform(756.5,232.8);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQgBAAAAgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_540.setTransform(748.6,232.7);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AgdAvIAAhbIALAAIAAAIIABAAQAEgEAGgDQAGgDAEAAQAHAAAFADQAFACAEAEQADAFABAGQACAGAAAHQAAAJgCAGQgDAGgEAFQgEAEgFACQgFACgGABQgEAAgFgCQgFgCgEgFIAAAAIABAMIAAAWgAgIggIgIAGIAAAeQADAEAFABIAIACQACAAAEgCIAFgFQADgCACgEQABgFAAgGIgBgJIgDgHIgFgEQgDgBgFAAQgDAAgFACg");
	this.shape_541.setTransform(740.8,234);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AgMAgQgFgDgFgEQgEgEgDgHIgCgHIAAgHQgBgEADgJQADgGAEgFQAFgEAFgDQAHgCAFAAQAGAAAGACQAGADAEAEQAFAFADAGQACAJAAAEIgBAHIgBAHQgDAHgFAEQgEAEgGADQgGACgGAAQgFAAgHgCgAgHgVQgDACgDADQgCADgBAFQgCAEAAAEQAAAFACAFQABAEACADQADADADABQADACAEAAQAEAAADgCQAEgBADgDQACgDABgEQACgFAAgFQAAgEgCgEIgDgIQgDgDgEgCQgDgBgEAAQgEAAgDABg");
	this.shape_542.setTransform(732.6,232.8);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AADAuQgDgBgDgDIgEgIQgBgEAAgGIAAg8IgWAAIAAgLIAiAAIAABIIABAFIACAFQADACAGAAQAFAAAHgCIADAKQgLADgHAAQgFAAgFgCg");
	this.shape_543.setTransform(724.7,231.4);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgHIgBgHQAAgEADgJQADgGAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAFQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACAEQACADADADQADACAEABIAIABQAGABAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDgBIgHgBIgGABQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_544.setTransform(716.7,232.8);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AgGAgIgbhAIAOAAIANAjIAGATIABAAIAHgTIANgjIANAAIgaBAg");
	this.shape_545.setTransform(708.7,232.8);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgHIgBgHQAAgEADgJQADgGAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAFQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACAEQACADADADQADACAEABIAIABQAGABAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDgBIgHgBIgGABQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_546.setTransform(700.8,232.8);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AgfArIAAhVIAXAAIAIAAIAIACIAHADIAGAGIAEAFIAEAIIACAIIAAAKIAAAJIgCAJIgEAIIgEAGIgGAFIgGAEIgIACIgIAAgAgRAgIAIAAQAGABAFgCQAFgDAEgEQADgEACgGQACgGAAgIQAAgHgCgGQgCgHgDgEQgEgEgFgCQgFgCgGAAIgIAAg");
	this.shape_547.setTransform(693.1,231.7);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AgNAuQgFgDgEgEQgDgEgCgHQgCgGAAgIQAAgHACgHQACgFAFgFQAEgEAFgDQAFgCAGAAQAEAAAFACQAEACAEAEIABAAIgBgMIAAgYIANAAIAABdIgKAAIgCgIIgJAHQgGADgEAAQgHAAgFgCgAgEgHQgEACgCADQgDACgBAFQgCAEAAAFIABAKIAEAHIAFAEQAEACADAAQAJAAAHgJIAAgdQgEgEgEgCQgDgBgEAAQgDAAgDABg");
	this.shape_548.setTransform(676.7,231.4);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_549.setTransform(669.1,232.7);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("AgbArIAAhVIA2AAIAAALIgoAAIAAAZIAiAAIAAAKIgiAAIAAAcIApAAIAAALg");
	this.shape_550.setTransform(661.3,231.7);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AgcAFIAAgJIA5AAIAAAJg");
	this.shape_551.setTransform(653.1,231.6);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AAAAqQgEgCgEgEQgCgEgCgFIgBgKIAAgcIgSAAIAAgKIATgBIABgVIALAAIAAAVIAeAAIAAALIgeAAIAAAcIAAAHQAAADADACQABACADABIAHABQAGAAAKgDIACAKQgMADgIABQgHAAgFgCg");
	this.shape_552.setTransform(645.2,231.8);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_553.setTransform(637.3,232.7);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgEgEQgFgEgDgHIgCgHIAAgHQAAgEACgJQADgGAFgFQAEgEAGgDQAFgCAGAAQAHAAAFACQAGADAFAEQAEAFACAGQAEAJAAAEIgBAHIgDAHQgCAHgEAEQgFAEgGADQgFACgHAAQgGAAgFgCgAgHgVQgDACgDADQgDADgBAFQgBAEAAAEQAAAFABAFQABAEADADQADADADABQADACAEAAQAEAAAEgCQADgBADgDQACgDABgEQACgFAAgFQAAgEgCgEIgDgIQgDgDgDgCQgEgBgEAAQgEAAgDABg");
	this.shape_554.setTransform(629.3,232.8);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_555.setTransform(621.8,232.7);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFFFFF").s().p("AgaArIAAhVIA1AAIAAALIgoAAIAAAbIAiAAIAAAKIgiAAIAAAlg");
	this.shape_556.setTransform(613.8,231.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AAAApQgEgCgEgDQgCgDgCgFIgBgMIAAgcIgSAAIAAgKIATAAIABgUIALAAIAAAUIAeAAIAAAKIgeAAIAAAcIAAAHQAAAEADACQABACADABIAHABQAGAAAKgDIACAKQgMADgIAAQgHAAgFgCg");
	this.shape_557.setTransform(764.5,251.2);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgFgDgFIgCgIIgBgHQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAEQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAFQACAEADACQADADAEABIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgBgDgBIgHgBIgGABQgDAAgDADIgFAGIgCAHIAlAAIAAAAg");
	this.shape_558.setTransform(748.5,252.2);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_559.setTransform(740.6,252.1);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AgeAuIAAhaIAMAAIABAIIAAAAQAFgEAFgDQAGgDAEABQAHAAAFABQAFADADAFQAEADACAHQABAGAAAIQAAAIgCAFQgDAHgEAEQgDAFgGACQgFACgGAAQgEAAgEgCQgGgBgDgEIgBAAIABAMIAAAUgAgHghIgJAHIAAAeQAEADAEACIAIABQADABADgCIAGgEQACgDABgEQACgEAAgGIgBgJIgDgHIgFgFQgDgBgFgBQgDAAgEACg");
	this.shape_560.setTransform(732.8,253.4);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AgLAgQgGgCgEgFQgGgFgCgFIgCgIIAAgHQAAgFACgIQACgHAGgEQAEgEAGgDQAFgCAGAAQAHAAAFACQAGADAFAEQAEAEACAHQAEAIAAAFIgBAHIgDAIQgCAFgEAFQgFAFgGACQgFACgHAAQgGAAgFgCgAgHgUQgEABgCADQgDAEgBADQgBAFAAAEQAAAFABAEQABAFADADQACADAEACQADACAEAAQAEAAADgCQAEgCADgDQACgDABgFQACgEAAgFQAAgEgCgFIgDgHQgDgDgEgBQgDgCgEAAQgEAAgDACg");
	this.shape_561.setTransform(724.7,252.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AADAvQgDgCgDgDIgEgIQgBgEAAgGIAAg9IgWAAIAAgKIAiAAIAABHIABAHIACADQADAEAGAAQAFAAAHgEIADALQgLADgHAAQgFAAgFgBg");
	this.shape_562.setTransform(716.8,250.8);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgFgDgFIgCgIIgBgHQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAEQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAFQACAEADACQADADAEABIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgBgDgBIgHgBIgGABQgDAAgDADIgFAGIgCAHIAlAAIAAAAg");
	this.shape_563.setTransform(708.8,252.2);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AgGAhIgbhAIAOAAIANAiIAGATIABAAIAHgTIANgiIANAAIgaBAg");
	this.shape_564.setTransform(700.8,252.2);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgFgDgFIgCgIIgBgHQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAEQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAFQACAEADACQADADAEABIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgBgDgBIgHgBIgGABQgDAAgDADIgFAGIgCAHIAlAAIAAAAg");
	this.shape_565.setTransform(692.9,252.2);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AgeAsIAAhXIAVAAIAJABIAIACIAHAEIAGAEIAEAGIADAIIADAJIABAJIgBAJIgDAJIgDAIIgEAGIgGAFIgHADIgIADIgIABgAgRAhIAIAAQAHgBAEgCQAFgCADgDQAEgFACgGQACgHAAgHQAAgHgCgHQgCgFgEgFQgDgEgFgCQgEgCgHAAIgIAAg");
	this.shape_566.setTransform(685.2,251.1);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFFFFF").s().p("AgNAuQgFgCgEgFQgDgFgCgFQgCgHAAgIQAAgHACgHQACgFAFgFQAEgEAFgDQAFgCAGAAQAEAAAFACQAEACAEAEIABAAIgBgMIAAgYIANAAIAABeIgKAAIgCgIIgJAHQgGACgEAAQgHAAgFgCgAgEgGQgEABgCADQgDACgBAEQgCAFAAAFIABAKIAEAHIAFAFQAEABADAAQAJAAAHgIIAAgfQgEgDgEgBQgDgCgEAAQgDAAgDACg");
	this.shape_567.setTransform(668.8,250.8);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("AgbAsIAAhXIA2AAIAAALIgpAAIAAAZIAiAAIAAAKIgiAAIAAAeIAqAAIAAALg");
	this.shape_568.setTransform(653.4,251.1);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFFFFF").s().p("AARAvIgVgfIgOAOIAAARIgNAAIAAhdIANAAIAAA8IABAAIAfgfIAOAAIgZAZIAdAng");
	this.shape_569.setTransform(637.7,250.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AgJAgQgGgCgFgFQgEgFgDgFIgCgIIgBgHIABgHIACgGQADgHAFgEQAFgEAGgDQAHgCAHAAQAFAAAIADQAGACAFAEIgHAIQgEgDgEgBQgEgCgFAAQgFAAgDACQgEABgEADQgDAEgBADQgDAFAAAEQAAAFADAEQABAFADADQAEADAEACQADACAFAAQAGgBAEgCQAFgCAEgDIAGAIQgFAFgIADQgGACgHAAQgGAAgIgCg");
	this.shape_570.setTransform(629.4,252.2);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgDgCgDQgCgEAAgDQABgGACgEQADgFAFgCIAPgEQAHgCAMgBIgBgFIgCgFIgGgDQgDgBgEAAQgEAAgHACIgKAFIgFgJQAGgEAIgCIAHgDIAIAAQAGAAAGACQAEABAEAEQADADACAGQACAFAAAGIAAAnIgLAAIgBgJIgBAAIgLAHQgGADgHAAIgIgBgAAAABIgJAEQgEABgBADQgCADAAADQAAAEAEADQADACAHAAQAEAAAEgCIAKgHIAAgPIgQABg");
	this.shape_571.setTransform(621.3,252.2);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("AgeAsIAAhXIAaAAIAMABIAJAEQAEADADAEQACAEAAAFIgBAHQgBADgCADIgFAEIgGADIAAAAIAIACIAGAEIAEAGQACAEAAAEQAAAHgDAEQgCAFgFADQgEAEgGABQgGABgGABgAgQAhIANAAIAIgCQAEAAADgCQADgCABgDQACgDAAgEQAAgDgCgDQgBgDgDgBIgHgDIgIgBIgNAAgAgQgHIALAAIAHgBQAEAAACgCQADgCABgCIABgGIgBgGIgEgDIgGgCIgHgBIgLAAg");
	this.shape_572.setTransform(613.6,251.1);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_573.setTransform(669.1,232.7);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("AgcAFIAAgJIA5AAIAAAJg");
	this.shape_574.setTransform(653.1,231.6);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_575.setTransform(637.3,232.7);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIQAAgEADgKQADgFAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEADACAGQACAGAAAGIgBAHIgwAAQAAAFACADQACAEADADQADADAEAAIAIABQAGAAAEgBQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgDgDgBIgHgBIgGABQgDABgDADIgFAFIgCAIIAlAAIAAAAg");
	this.shape_576.setTransform(724.7,271.6);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("AgIAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIIABgGIACgIQADgFAFgFQAFgEAHgDQAHgCAGAAQAFAAAIACQAHADADAEIgGAJQgEgEgEgCQgEgBgEAAQgGAAgDABQgFACgCADQgEADgCAFQgCAEAAAEQAAAFACAFQACAEADADQADADAFABQADACAFAAQAFAAAGgCQAEgCAEgEIAGAJQgGAFgHACQgGADgHAAQgHAAgGgCg");
	this.shape_577.setTransform(716.8,271.6);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgDgBgDQgDgDAAgFQAAgFADgFQADgDAGgCIANgFQAIgCAMgBIgBgGIgCgEIgGgDQgDgBgEgBQgEABgHACIgKAFIgEgJQAGgEAGgCIAIgDIAIAAQAGAAAFACQAFACAEADQADADACAGQABAFABAGIAAAmIgLAAIgBgIIAAAAIgMAHQgGADgGAAIgJgBgAABACIgJADQgEACgCACQgCACABADQgBAFAEACQAEACAFAAQAFAAAEgCIAKgGIAAgPIgPACg");
	this.shape_578.setTransform(700.8,271.6);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AAHAwIAAg1IgcAAIAAgLIApAAIAABAgAAFgfQgCgDAAgEQAAgEACgDQADgCAEAAQAFAAACACQADADAAAEQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_579.setTransform(692.2,270);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIQAAgEADgKQADgFAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEADACAGQACAGAAAGIgBAHIgwAAQAAAFACADQACAEADADQADADAEAAIAIABQAGAAAEgBQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgDgDgBIgHgBIgGABQgDABgDADIgFAFIgCAIIAlAAIAAAAg");
	this.shape_580.setTransform(677,271.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFFFFF").s().p("AgdAvIAAhbIALAAIAAAIIABAAQAEgFAGgCQAGgDAEAAQAHABAFACQAFACAEAEQADAFABAGQACAGAAAHQAAAIgCAHQgDAGgEAEQgEAFgFACQgFACgGAAQgEAAgFgBQgFgDgEgEIAAAAIABAMIAAAWgAgIggIgIAGIAAAeQADAEAFABIAIACQACgBAEgBIAFgFQADgDACgDQABgFAAgGIgBgJIgDgHIgFgEQgDgBgFAAQgDAAgFACg");
	this.shape_581.setTransform(669.2,272.8);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AASAgIgKgNIgIgMIAAAAIgIAMIgJANIgOAAIAYggIgWggIAOAAIAJAOIAHALIAAAAIAHgLIAJgOIAOAAIgXAgIAYAgg");
	this.shape_582.setTransform(661,271.6);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFFFFF").s().p("AgbArIAAhVIA2AAIAAALIgpAAIAAAZIAiAAIAAAKIgiAAIAAAcIAqAAIAAALg");
	this.shape_583.setTransform(653.4,270.5);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_584.setTransform(637.7,271.5);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIQAAgEADgKQADgFAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEADACAGQACAGAAAGIgBAHIgwAAQAAAFACADQACAEADADQADADAEAAIAIABQAGAAAEgBQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgDgDgBIgHgBIgGABQgDABgDADIgFAFIgCAIIAlAAIAAAAg");
	this.shape_585.setTransform(629.3,271.6);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgDgHgEIAGgJQAGAFAGABQAHADAIAAQAHAAAEgDQADgCAAgEQAAgEgDgCIgPgFIgLgDIgIgDIgEgFQgCgDAAgEQAAgEACgEQACgDADgCQAEgEAFgBQAFgBAGAAQAHAAAIACQAGADAGAEIgHAIQgEgDgGgCQgFgCgGAAQgGAAgEACQgDACAAAEQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAGQAAAEgCAEIgGAHQgEACgFABQgGACgHAAIgIgBg");
	this.shape_586.setTransform(621.3,271.6);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("AgMAqQgFgCgEgEQgEgEgCgHQgCgGAAgJIAAg1IAOAAIAAA1IABALIADAHQACACAEACIAFABIAHgBIAFgEQADgDAAgEQACgFAAgGIAAg1IANAAIAAA1QAAAJgCAGQgDAHgDAEQgEAEgFACQgGACgHAAQgGAAgGgCg");
	this.shape_587.setTransform(613.4,270.5);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_588.setTransform(637.3,232.7);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_589.setTransform(621.8,232.7);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgCgHgFIAGgJQAGAFAGACQAHACAIAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgDQAEgCAFgBQAFgCAGAAQAHAAAIADQAGABAGAEIgHAIQgEgDgGgBQgFgCgGAAQgGAAgEADQgDACAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAFIABAIQAAADgCAEIgGAGQgEADgFACQgGABgHAAIgIgBg");
	this.shape_590.setTransform(867.7,291);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgFIgCgIIgBgHQAAgFADgIQADgHAFgEQAEgFAGgCQAGgCAGAAQAHAAAFACQAGACAEAEQAEAFACAFQACAGAAAHIgBAGIgwAAQAAAFACAEQACAEADACQADADAEABIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgBgDgBIgHgBIgGABQgDAAgDADIgFAGIgCAHIAlAAIAAAAg");
	this.shape_591.setTransform(851.9,291);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AAAApQgFgCgCgDQgDgEgCgEIgBgLIAAgdIgSAAIAAgKIASAAIACgUIALAAIAAAUIAdAAIAAAKIgdAAIAAAdIAAAGQAAAEADACQABACADABIAHABQAGAAAJgDIADAKQgMAEgJAAQgHgBgEgCg");
	this.shape_592.setTransform(844,290);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgCgHgFIAGgJQAGAFAGACQAHACAIAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgDQAEgCAFgBQAFgCAGAAQAHAAAIADQAGABAGAEIgHAIQgEgDgGgBQgFgCgGAAQgGAAgEADQgDACAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAFIABAIQAAADgCAEIgGAGQgEADgFACQgGABgHAAIgIgBg");
	this.shape_593.setTransform(835.9,291);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AgeAtIACgLIAGABIAGgBQACAAACgCQAEgDADgGIABgFIgdg/IANAAIAPAiIAHASIAAAAIAGgSIAOgiIAMAAIgcBEIgEAJQgCAFgEADQgDADgEABQgFACgFAAQgFAAgEgBg");
	this.shape_594.setTransform(828,292.3);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("AgIAsIgJgCIgHgFIgHgFIAIgJQAFAFAGACQAHAEAGAAIAHgBIAGgDIADgEQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgBgFIgDgEIgLgFIgLgGIgHgCIgGgFQgDgDgBgDQgCgEAAgEQAAgGACgEQACgEAEgDQAEgDAGgDQAFgBAGAAQAFAAAKADQAHADAFAEIgHAJIgJgFQgGgDgGAAIgFABIgFADIgDADIgBAFIABAEIADAEIAKAFIAMAGIAHACIAGAFQADACABAEQACAEAAAEQAAAGgCAEQgDAFgEADQgEAEgGACQgGACgHAAIgIgBg");
	this.shape_595.setTransform(820.1,289.9);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AAAApQgEgCgEgDQgDgEgBgEIgBgLIAAgdIgSAAIAAgKIATAAIABgUIALAAIAAAUIAdAAIAAAKIgdAAIAAAdIAAAGQABAEABACQACACADABIAIABQAGAAAIgDIADAKQgMAEgJAAQgHgBgEgCg");
	this.shape_596.setTransform(804.2,290);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgFIgCgIIgBgHQAAgFADgIQADgHAFgEQAEgFAGgCQAGgCAGAAQAHAAAFACQAGACAEAEQAEAFACAFQACAGAAAHIgBAGIgwAAQAAAFACAEQACAEADACQADADAEABIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgBgDgBIgHgBIgGABQgDAAgDADIgFAGIgCAHIAlAAIAAAAg");
	this.shape_597.setTransform(788.3,291);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_598.setTransform(780.4,290.9);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgFIgCgIIgBgHQAAgFADgIQADgHAFgEQAEgFAGgCQAGgCAGAAQAHAAAFACQAGACAEAEQAEAFACAFQACAGAAAHIgBAGIgwAAQAAAFACAEQACAEADACQADADAEABIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgBgDgBIgHgBIgGABQgDAAgDADIgFAGIgCAHIAlAAIAAAAg");
	this.shape_599.setTransform(772.4,291);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("AgPAuQgGAAgDgCQgEgDgCgDQgCgEAAgEQAAgEACgEQADgDAFgDIAAAAQgDgCgBgDQgCgDAAgDQAAgDACgCQACgEADgCIAAgBQgDgDgDgEQgCgEAAgGQAAgFACgFQACgDAEgEQAEgDAEgBIAKgCQAFAAAEACIAbAAIAAAKIgQAAIADAFIACAGQAAAGgCAEQgCAEgEADQgDADgFABQgEACgFAAQgFAAgFgCQgFADAAACQAAAEAEACQADACAGAAIANAAIALAAIAIADQADACACADQABADAAAEQAAAEgCAFQgDAEgFADQgFADgGACQgHACgIAAQgGAAgGgCgAgUAXIgBAFQAAABAAABQAAAAAAABQAAAAABABQAAABAAAAIAEADIAGACIAJAAIAIAAQAEgBADgCIAFgEQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgDgCQgDgBgHAAIgLAAIgKgBQgEACgCACgAgIglIgEADIgDAEIgBAGIABAGQABADACABIAEAEIAFABIAFgBIAEgEQACgBABgDIABgGIgBgGIgDgEIgEgDIgFgBIgFABg");
	this.shape_600.setTransform(764.6,292.4);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgCgBgEQgCgEAAgEQAAgFACgEQADgEAGgDIANgEQAIgCANgBIgBgFIgEgFIgEgDQgDgBgFAAQgEAAgGACIgLAFIgFgJQAGgEAHgCIAIgCIAHgBQAHAAAGACQAFACADADQADADACAGQACAFgBAHIAAAmIgKAAIgBgJIAAAAIgMAHQgGADgHAAIgIgBgAABABIgJAEQgEABgCADQgBADgBADQABAEADADQADACAHAAQADAAAGgCIAKgHIAAgPIgQABg");
	this.shape_601.setTransform(756.4,291);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgCgCgEQgCgEAAgEQABgFACgEQADgEAFgDIAPgEQAHgCAMgBIgBgFIgCgFIgGgDQgDgBgEAAQgEAAgHACIgKAFIgFgJQAGgEAIgCIAHgCIAIgBQAGAAAGACQAEACAEADQADADACAGQACAFAAAHIAAAmIgLAAIgBgJIgBAAIgLAHQgGADgHAAIgIgBgAAAABIgJAEQgEABgBADQgCADAAADQAAAEAEADQAEACAGAAQAEAAAEgCIAKgHIAAgPIgQABg");
	this.shape_602.setTransform(740.5,291);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("AATAsIAAgnIACghIgGATIgLAdIgIAAIgKgdIgGgTIAAAAIACAhIAAAnIgMAAIAAhXIAQAAIALAkIADANIAAAAIAEgNIALgkIAQAAIAABXg");
	this.shape_603.setTransform(732.6,289.9);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AAAApQgEgCgEgDQgCgEgCgEIgBgLIAAgdIgSAAIAAgKIATAAIABgUIALAAIAAAUIAeAAIAAAKIgeAAIAAAdIAAAGQAAAEADACQABACADABIAIABQAFAAAKgDIACAKQgMAEgIAAQgHgBgFgCg");
	this.shape_604.setTransform(716.8,290);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgFIgCgIIgBgHQAAgFADgIQADgHAFgEQAEgFAGgCQAGgCAGAAQAHAAAFACQAGACAEAEQAEAFACAFQACAGAAAHIgBAGIgwAAQAAAFACAEQACAEADACQADADAEABIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgBgDgBIgHgBIgGABQgDAAgDADIgFAGIgCAHIAlAAIAAAAg");
	this.shape_605.setTransform(700.8,291);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFFFFF").s().p("AAAApQgEgCgEgDQgCgEgCgEIgBgLIAAgdIgSAAIAAgKIATAAIABgUIALAAIAAAUIAeAAIAAAKIgeAAIAAAdIAAAGQAAAEADACQABACADABIAHABQAGAAAKgDIACAKQgMAEgIAAQgHgBgFgCg");
	this.shape_606.setTransform(692.9,290);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgEgEQgFgFgDgFIgCgIIAAgHQAAgFACgIQACgHAGgEQAEgFAGgCQAFgCAGAAQAHAAAFACQAGACAFAFQAEAEACAHQAEAIAAAFIgBAHIgDAIQgCAFgEAFQgFAEgGADQgFACgHAAQgGAAgFgCgAgHgUQgDABgDADQgDADgBAEQgBAFAAAEQAAAFABAEQABAFADADQADADADACQADACAEAAQAEAAAEgCQADgCADgDQACgDABgFQACgEAAgFQAAgEgCgFIgDgHQgDgDgDgBQgEgCgEAAQgEAAgDACg");
	this.shape_607.setTransform(677,291);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFFFFF").s().p("AgBAsIgHgCIgHgEIgFgEIgFgHIgEgIIgCgJIgBgKIABgJIACgJIAEgIIAFgGIAFgFIAHgEIAIgDIAHAAQAFAAAJADQAGADAEAEIgHAJQgDgEgEgBQgFgDgFAAQgGAAgDADQgGACgDAEQgDAFgCAGQgCAGAAAHQAAAIACAGQACAGADAFQADAEAGACQAEACAFABQAFgBAGgCQADgCAFgEIAHAIIgGAFIgGAEIgHACIgIABg");
	this.shape_608.setTransform(669.1,289.9);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFFFFF").s().p("AgMAgQgFgDgFgEQgFgFgCgFIgCgIIgBgHQAAgFADgIQACgHAFgEQAFgFAFgCQAHgCAFAAQAGAAAGACQAGACAEAFQAFAEACAHQADAIAAAFIgBAHIgCAIQgCAFgFAFQgEAEgGADQgGACgGAAQgFAAgHgCgAgHgUQgEABgCADQgCADgBAEQgCAFAAAEQAAAFACAEQABAFACADQACADAEACQAEACADAAQAEAAAEgCQADgCACgDQADgDACgFQABgEAAgFQAAgEgBgFIgFgHQgCgDgDgBQgEgCgEAAQgDAAgEACg");
	this.shape_609.setTransform(645.2,291);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FFFFFF").s().p("AAAApQgEgCgEgDQgDgEgBgEIgBgLIAAgdIgSAAIAAgKIATAAIABgUIALAAIAAAUIAdAAIAAAKIgdAAIAAAdIAAAGQABAEABACQACACADABIAIABQAGAAAIgDIADAKQgMAEgJAAQgHgBgEgCg");
	this.shape_610.setTransform(637.3,290);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgCgHgFIAGgJQAGAFAGACQAHACAIAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgDQAEgCAFgBQAFgCAGAAQAHAAAIADQAGABAGAEIgHAIQgEgDgGgBQgFgCgGAAQgGAAgEADQgDACAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAFIABAIQAAADgCAEIgGAGQgEADgFACQgGABgHAAIgIgBg");
	this.shape_611.setTransform(629.2,291);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFFFF").s().p("AgQAgIgHgFQgCgEgCgFQgBgFAAgGIAAgnIANAAIAAAlIABAIIACAFIAEADIAHABQAEAAAEgCQAEgDAFgGIAAgrIANAAIAABAIgLAAIgBgLIAAAAQgFAGgGADIgGACIgGABQgGAAgEgBg");
	this.shape_612.setTransform(621.2,291);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFFFFF").s().p("AgBAsIgHgCIgHgEIgGgEIgEgHIgEgIIgCgJIgBgKIABgJIACgJIAEgIIAEgGIAHgFIAGgEIAHgDIAIAAQAFAAAJADQAGADAEAEIgHAJQgEgEgEgBQgEgDgFAAQgGAAgEADQgEACgEAEQgEAFgBAGQgCAGAAAHQAAAIACAGQABAGAEAFQAEAEAEACQAEACAGABQAFgBAGgCQAEgCAEgEIAHAIIgFAFIgHAEIgHACIgIABg");
	this.shape_613.setTransform(613.5,289.9);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_614.setTransform(740.6,252.1);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_615.setTransform(661.1,252.1);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_616.setTransform(764.5,232.7);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQgBAAAAgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_617.setTransform(748.6,232.7);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_618.setTransform(669.1,232.7);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_619.setTransform(637.3,232.7);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FFFFFF").s().p("AAAAqQgEgCgEgEQgDgDgBgGIgBgLIAAgbIgSAAIAAgKIATgBIABgVIALAAIAAAVIAdAAIAAALIgdAAIAAAbIAAAIQABADABACQACACADABIAIABQAGAAAIgDIADAKQgMADgJAAQgHAAgEgBg");
	this.shape_620.setTransform(828.1,309.4);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIQAAgEADgKQADgFAFgFQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAGIgBAHIgwAAQAAAEACAEQACAFADACQADADAEAAIAIABQAGAAAEgBQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgCgDgCIgHgBIgGABQgDABgDADIgFAFIgCAIIAlAAIAAAAg");
	this.shape_621.setTransform(812.1,310.4);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FFFFFF").s().p("AgeAvIAAhbIALAAIABAIIABAAQAFgEAFgDQAGgCAFAAQAGAAAFACQAFACADAFQAEAEACAGQACAGAAAHQgBAIgCAHQgCAFgEAFQgFAFgFACQgFACgGAAQgDAAgGgBQgEgCgFgFIAAAAIABANIAAAVgAgIghIgIAHIAAAeQAEADAEACIAHACQADgBAEgBIAGgFQACgDABgDQACgEAAgHIgBgJIgDgHIgGgEQgDgCgEABQgDAAgFABg");
	this.shape_622.setTransform(796.4,311.6);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FFFFFF").s().p("AgMAgQgFgDgFgEQgFgEgCgHIgCgGIgBgIQABgEACgKQACgFAFgFQAFgFAFgCQAHgCAFAAQAGAAAGACQAGACAEAFQAFAFACAFQADAKAAAEIgBAIIgCAGQgCAHgFAEQgEAEgGADQgGACgGAAQgFAAgHgCgAgHgVQgEACgCADQgCADgBAFQgCAEAAAEQAAAFACAFQABAEACADQACADAEABQAEACADAAQAEAAAEgCQADgBACgDQADgDACgEQABgFAAgFQAAgEgBgEIgFgIQgCgDgDgCQgEgBgEAAQgDAAgEABg");
	this.shape_623.setTransform(788.3,310.4);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FFFFFF").s().p("AADAuQgDgBgDgDIgEgIQgBgFAAgFIAAg9IgWAAIAAgKIAiAAIAABHIABAHIACADQADADAGAAQAFAAAHgDIADAKQgLAEgHAAQgFAAgFgCg");
	this.shape_624.setTransform(780.4,309);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIQAAgEADgKQADgFAFgFQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAGIgBAHIgwAAQAAAEACAEQACAFADACQADADAEAAIAIABQAGAAAEgBQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgCgDgCIgHgBIgGABQgDABgDADIgFAFIgCAIIAlAAIAAAAg");
	this.shape_625.setTransform(772.4,310.4);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIQAAgEADgKQADgFAFgFQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAGIgBAHIgwAAQAAAEACAEQACAFADACQADADAEAAIAIABQAGAAAEgBQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgCgDgCIgHgBIgGABQgDABgDADIgFAFIgCAIIAlAAIAAAAg");
	this.shape_626.setTransform(756.5,310.4);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FFFFFF").s().p("AgfArIAAhVIAXAAIAIAAIAIACIAHADIAGAFIAFAHIACAHIADAIIAAAKIAAAKIgDAJIgCAHIgFAGIgGAFIgGADIgJADIgIAAgAgRAgIAIAAQAGAAAFgCQAFgBADgFQAEgEACgGQACgHAAgHQAAgIgCgGQgCgFgEgFQgDgEgFgCQgFgCgGAAIgIAAg");
	this.shape_627.setTransform(748.8,309.3);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgDgHgEIAGgIQAGADAGACQAHADAIAAQAHAAAEgDQADgCAAgEQAAgEgDgCIgPgFQgGgBgFgCIgIgDIgEgFQgCgDAAgEQAAgEACgEQACgDADgCQAEgEAFgBQAFgBAGAAQAHAAAIACQAGACAGAEIgHAJQgEgDgGgCQgFgCgGAAQgGAAgEACQgDADAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAGQAAAEgCAEIgGAGIgJAEQgGACgHAAIgIAAg");
	this.shape_628.setTransform(732.6,310.4);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIQAAgEADgKQADgFAFgFQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAGIgBAHIgwAAQAAAEACAEQACAFADACQADADAEAAIAIABQAGAAAEgBQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgCgDgCIgHgBIgGABQgDABgDADIgFAFIgCAIIAlAAIAAAAg");
	this.shape_629.setTransform(724.7,310.4);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIQAAgEADgKQADgFAFgFQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAGIgBAHIgwAAQAAAEACAEQACAFADACQADADAEAAIAIABQAGAAAEgBQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgCgDgCIgHgBIgGABQgDABgDADIgFAFIgCAIIAlAAIAAAAg");
	this.shape_630.setTransform(708.8,310.4);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FFFFFF").s().p("AAQAvIAAgmIgBgIIgCgEIgEgDIgGgBQgEAAgFADQgEACgFAEIAAAtIgNAAIAAhdIANAAIAAAZIgBAPIABAAQAFgGAFgDIAFgCIAHgBQAGAAAEABQAEACADADQADAEABAFIABAKIAAAog");
	this.shape_631.setTransform(700.9,308.9);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FFFFFF").s().p("AgFArIAAhLIgdAAIAAgKIBFAAIAAAKIgcAAIAABLg");
	this.shape_632.setTransform(692.8,309.3);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgDgHgEIAGgIQAGADAGACQAHADAIAAQAHAAAEgDQADgCAAgEQAAgEgDgCIgPgFQgGgBgFgCIgIgDIgEgFQgCgDAAgEQAAgEACgEQACgDADgCQAEgEAFgBQAFgBAGAAQAHAAAIACQAGACAGAEIgHAJQgEgDgGgCQgFgCgGAAQgGAAgEACQgDADAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAGQAAAEgCAEIgGAGQgEADgFABQgGACgHAAIgIAAg");
	this.shape_633.setTransform(676.9,310.4);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgDgHgEIAGgIQAGADAGACQAHADAIAAQAHAAAEgDQADgCAAgEQAAgEgDgCIgPgFQgGgBgFgCIgIgDIgEgFQgCgDAAgEQAAgEACgEQACgDADgCQAEgEAFgBQAFgBAGAAQAHAAAIACQAGACAGAEIgHAJQgEgDgGgCQgFgCgGAAQgGAAgEACQgDADAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAGQAAAEgCAEIgGAGQgEADgFABQgGACgHAAIgIAAg");
	this.shape_634.setTransform(669,310.4);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIQAAgEADgKQADgFAFgFQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAGIgBAHIgwAAQAAAEACAEQACAFADACQADADAEAAIAIABQAGAAAEgBQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgCgDgCIgHgBIgGABQgDABgDADIgFAFIgCAIIAlAAIAAAAg");
	this.shape_635.setTransform(661.1,310.4);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FFFFFF").s().p("AgdAvIAAhbIALAAIABAIIAAAAQAEgEAGgDQAGgCAEAAQAHAAAFACQAFACAEAFQADAEABAGQACAGAAAHQAAAIgCAHQgDAFgEAFQgEAFgFACQgFACgGAAQgEAAgFgBQgFgCgEgFIAAAAIABANIAAAVgAgIghIgIAHIAAAeQADADAFACIAIACQACgBAEgBIAFgFQADgDACgDQABgEAAgHIgBgJIgDgHIgFgEQgDgCgFABQgDAAgFABg");
	this.shape_636.setTransform(645.4,311.6);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FFFFFF").s().p("AgNAuQgFgDgEgEQgDgEgCgHQgCgGAAgIQAAgIACgGQACgGAFgEQAEgFAFgCQAFgCAGAAQAEAAAFACQAEACAEAEIABAAIgBgLIAAgZIANAAIAABdIgKAAIgCgHIgJAGQgGADgEAAQgHAAgFgCgAgEgHQgEACgCADQgDACgBAFQgCAEAAAFIABAKIAEAHIAFAEQAEACADAAQAJAAAHgJIAAgeQgEgDgEgCQgDgBgEAAQgDAAgDABg");
	this.shape_637.setTransform(637,309);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FFFFFF").s().p("AgMAgQgFgDgFgEQgFgEgCgHIgCgGIgBgIQABgEACgKQACgFAFgFQAFgFAFgCQAHgCAFAAQAGAAAGACQAGACAEAFQAFAFACAFQADAKAAAEIgBAIIgCAGQgCAHgFAEQgEAEgGADQgGACgGAAQgFAAgHgCgAgHgVQgEACgCADQgCADgBAFQgCAEAAAEQAAAFACAFQABAEACADQACADAEABQAEACADAAQAEAAAEgCQADgBACgDQADgDACgEQABgFAAgFQAAgEgBgEIgFgIQgCgDgDgCQgEgBgEAAQgDAAgEABg");
	this.shape_638.setTransform(621.3,310.4);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FFFFFF").s().p("AALArIgIggIgDgQIAAAAIgCAQIgHAgIgQAAIgNhVIAPAAIAFAzIACAVIAAAAIAEgVIAIgeIAKAAIAIAeIAEAVIABAAIABgVIAFgzIAOAAIgMBVg");
	this.shape_639.setTransform(613.3,309.3);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_640.setTransform(780.4,290.9);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_641.setTransform(637.7,271.5);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_642.setTransform(740.6,252.1);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FFFFFF").s().p("AgGAgIgbhAIAOAAIANAjIAGATIABAAIAHgTIANgjIANAAIgaBAg");
	this.shape_643.setTransform(708.7,232.8);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_644.setTransform(637.3,232.7);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_645.setTransform(621.8,232.7);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FFFFFF").s().p("AAAApQgEgBgEgEQgCgEgCgEIgBgLIAAgdIgSAAIAAgKIATAAIABgVIALAAIAAAVIAeAAIAAAKIgeAAIAAAdIAAAGQAAAEADACQABACADABIAIABQAFAAAKgDIACAKQgMAEgIAAQgHAAgFgDg");
	this.shape_646.setTransform(836,328.8);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgGIgCgHIgBgHQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAEACAFQACAEADACQADACAEACIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgCgDAAIgHgBIgGABQgDABgDACIgFAGIgCAHIAlAAIAAAAg");
	this.shape_647.setTransform(820.1,329.8);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FFFFFF").s().p("AgeAuIAAhaIAMAAIABAIIAAAAQAFgFAFgCQAGgCAEgBQAHAAAFACQAFADADAEQAEAEACAHQABAGAAAIQAAAHgCAGQgDAGgEAGQgDAEgGACQgFADgGAAQgEAAgEgDQgGgCgDgDIgBAAIABALIAAAVgAgHggQgFACgEAEIAAAeQAEADAEACIAIABQADAAADgBIAGgEQACgDABgEQACgFAAgFIgBgJIgDgIIgFgEQgEgCgEAAQgDAAgEADg");
	this.shape_648.setTransform(804.4,331);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgEgEQgFgFgDgGIgCgHIAAgHQAAgFACgIQACgHAGgEQAEgEAGgDQAFgCAGAAQAHAAAFACQAGADAFAEQAEAEACAHQAEAIAAAFIgBAHIgDAHQgCAGgEAFQgFAEgGADQgFACgHAAQgGAAgFgCgAgHgUQgDABgDADQgDADgBAEQgBAFAAAEQAAAFABAEQABAFADADQADADADACQADABAEABQAEgBAEgBQADgCADgDQACgDABgFQACgEAAgFQAAgEgCgFIgDgHQgDgDgDgBQgEgCgEAAQgEAAgDACg");
	this.shape_649.setTransform(796.2,329.8);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FFFFFF").s().p("AADAuQgDgBgDgDIgEgIQgBgFAAgFIAAg8IgWAAIAAgLIAiAAIAABIIABAFIACAFQADACAGABQAFgBAHgCIADAKQgLADgHAAQgFAAgFgCg");
	this.shape_650.setTransform(788.3,328.4);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgGIgCgHIgBgHQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAEACAFQACAEADACQADACAEACIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgCgDAAIgHgBIgGABQgDABgDACIgFAGIgCAHIAlAAIAAAAg");
	this.shape_651.setTransform(780.3,329.8);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgGIgCgHIgBgHQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAEACAFQACAEADACQADACAEACIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgCgDAAIgHgBIgGABQgDABgDACIgFAGIgCAHIAlAAIAAAAg");
	this.shape_652.setTransform(764.4,329.8);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FFFFFF").s().p("AgeAsIAAhXIAVAAIAJABIAIACIAHADIAGAGIAEAFIADAIIADAJIABAJIgBAJIgDAJIgDAIIgEAGIgGAFIgHAEIgIACIgIABgAgRAhIAIAAQAHAAAEgCQAFgDADgDQAEgFACgGQACgGAAgIQAAgHgCgGQgCgHgEgEQgDgEgFgCQgEgCgHAAIgIAAg");
	this.shape_653.setTransform(756.7,328.7);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgDgHgEIAGgJQAGAEAGADQAHACAIAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgDQAEgCAFgBQAFgCAGAAQAHAAAIADQAGABAGAFIgHAHQgEgCgGgCQgFgCgGAAQgGAAgEADQgDABAAAEQAAAEAFACQADACAJACIANAEQAFABADACIAFAFIABAHQAAAEgCAEIgGAHQgEACgFACQgGABgHAAIgIgBg");
	this.shape_654.setTransform(740.5,329.8);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FFFFFF").s().p("AgPAuQgGAAgDgCQgEgDgCgDQgCgEAAgEQAAgEACgEQADgDAFgDIAAAAQgDgCgBgDQgCgDAAgDQAAgDACgCQACgEADgDIAAAAQgDgDgDgEQgCgEAAgGQAAgFACgFQACgDAEgEQAEgDAEgBIAKgCQAFAAAEACIAbAAIAAAKIgQAAIADAFIACAGQAAAGgCAEQgCAEgEADQgDADgFACQgEABgFAAQgFAAgFgCQgFACAAADQAAAEAEACQADABAGABIANAAIALAAIAIADQADACACADQABADAAAEQAAAFgCAEQgDAEgFADQgFADgGACQgHACgIAAQgGAAgGgCgAgUAYIgBAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEADIAGACIAJAAIAIgBQAEAAADgCIAFgEQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgDgCQgDgBgHAAIgLAAIgKgBQgEACgCADgAgIglIgEADIgDAFIgBAFIABAGQABADACABIAEAEIAFABIAFgBIAEgEQACgBABgDIABgGIgBgFIgDgFIgEgDIgFgBIgFABg");
	this.shape_655.setTransform(716.9,331.2);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FFFFFF").s().p("AADAuQgDgBgDgDIgEgIQgBgFAAgFIAAg8IgWAAIAAgLIAiAAIAABIIABAFIACAFQADACAGABQAFgBAHgCIADAKQgLADgHAAQgFAAgFgCg");
	this.shape_656.setTransform(700.9,328.4);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIAbAAIANABQAGACAEADQAFAEACAEQACAGAAAGQAAAIgCAFQgCAEgFAEQgEADgGABQgGACgHAAIgNAAIAAAigAgPAAIAMAAIAIAAQAFgBACgCQADgCABgEIABgIIgBgHIgEgEQgCgCgFgBIgIgBIgMAAg");
	this.shape_657.setTransform(693.1,328.7);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgDgHgEIAGgJQAGAEAGADQAHACAIAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgDQAEgCAFgBQAFgCAGAAQAHAAAIADQAGABAGAFIgHAHQgEgCgGgCQgFgCgGAAQgGAAgEADQgDABAAAEQAAAEAFACQADACAJACIANAEQAFABADACIAFAFIABAHQAAAEgCAEIgGAHQgEACgFACQgGABgHAAIgIgBg");
	this.shape_658.setTransform(676.9,329.8);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgDgHgEIAGgJQAGAEAGADQAHACAIAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgDQAEgCAFgBQAFgCAGAAQAHAAAIADQAGABAGAFIgHAHQgEgCgGgCQgFgCgGAAQgGAAgEADQgDABAAAEQAAAEAFACQADACAJACIANAEQAFABADACIAFAFIABAHQAAAEgCAEIgGAHQgEACgFACQgGABgHAAIgIgBg");
	this.shape_659.setTransform(669,329.8);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgGIgCgHIgBgHQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAEACAFQACAEADACQADACAEACIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgCgDAAIgHgBIgGABQgDABgDACIgFAGIgCAHIAlAAIAAAAg");
	this.shape_660.setTransform(661.1,329.8);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FFFFFF").s().p("AgdAuIAAhaIALAAIABAIIAAAAQAEgFAGgCQAGgCAEgBQAHAAAFACQAFADAEAEQADAEABAHQACAGAAAIQAAAHgCAGQgDAGgEAGQgEAEgFACQgFADgGAAQgEAAgFgDQgFgCgEgDIAAAAIABALIAAAVgAgIggQgEACgEAEIAAAeQADADAFACIAIABQACAAAEgBIAFgEQADgDACgEQABgFAAgFIgBgJIgDgIIgFgEQgDgCgFAAQgDAAgFADg");
	this.shape_661.setTransform(645.4,331);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FFFFFF").s().p("AgNAuQgFgDgEgEQgDgFgCgGQgCgGAAgIQAAgIACgGQACgGAFgEQAEgEAFgDQAFgCAGAAQAEAAAFACQAEACAEAEIABAAIgBgMIAAgYIANAAIAABdIgKAAIgCgIIgJAIQgGACgEAAQgHAAgFgCgAgEgGQgEABgCADQgDACgBAEQgCAFAAAFIABAKIAEAHIAFAFQAEABADAAQAJAAAHgJIAAgdQgEgEgEgBQgDgCgEAAQgDAAgDACg");
	this.shape_662.setTransform(637,328.4);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FFFFFF").s().p("AgMAgQgFgDgFgEQgFgFgCgGIgCgHIgBgHQABgFACgIQACgHAFgEQAFgEAFgDQAHgCAFAAQAGAAAGACQAGADAEAEQAFAEACAHQADAIAAAFIgBAHIgCAHQgCAGgFAFQgEAEgGADQgGACgGAAQgFAAgHgCgAgHgUQgEABgCADQgCADgBAEQgCAFAAAEQAAAFACAEQABAFACADQACADAEACQAEABADABQAEgBAEgBQADgCACgDQADgDACgFQABgEAAgFQAAgEgBgFIgFgHQgCgDgDgBQgEgCgEAAQgDAAgEACg");
	this.shape_663.setTransform(621.3,329.8);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FFFFFF").s().p("AALAsIgIgiIgDgOIAAAAIgCAOIgHAiIgQAAIgNhXIAPAAIAFA0IACAUIAAAAIAEgUIAIgdIAKAAIAIAdIAEAUIABAAIABgUIAFg0IAOAAIgMBXg");
	this.shape_664.setTransform(613.3,328.7);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FFFFFF").s().p("AgQAgIgHgFQgCgEgCgFQgBgFAAgGIAAgnIANAAIAAAlIABAIIACAFIAEADIAHABQAEAAAEgCQAEgDAFgGIAAgrIANAAIAABAIgLAAIgBgLIAAAAQgFAGgGADIgGACIgGABQgGAAgEgBg");
	this.shape_665.setTransform(621.2,291);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FFFFFF").s().p("AAHAwIAAg1IgcAAIAAgLIApAAIAABAgAAFgfQgCgDAAgEQAAgEACgDQADgCAEAAQAFAAACACQADADAAAEQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_666.setTransform(692.2,270);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_667.setTransform(637.7,271.5);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_668.setTransform(740.6,252.1);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FFFFFF").s().p("AgGAhIgbhAIAOAAIANAiIAGATIABAAIAHgTIANgiIANAAIgaBAg");
	this.shape_669.setTransform(700.8,252.2);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_670.setTransform(669.1,232.7);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_671.setTransform(637.3,232.7);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_672.setTransform(621.8,232.7);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FFFFFF").s().p("AgMAgQgFgCgFgFQgFgEgCgGIgCgHIgBgIQABgEACgKQACgFAFgFQAFgFAFgCQAHgCAFAAQAGAAAGACQAGACAEAFQAFAFACAFQADAKAAAEIgBAIIgCAHQgCAGgFAEQgEAFgGACQgGACgGAAQgFAAgHgCgAgHgUQgEABgCADQgCAEgBAEQgCAEAAAEQAAAFACAFQABAEACADQACADAEABQAEACADABQAEgBAEgCQADgBACgDQADgDACgEQABgFAAgFQAAgEgBgEIgFgIQgCgDgDgBQgEgCgEAAQgDAAgEACg");
	this.shape_673.setTransform(812.1,349.2);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FFFFFF").s().p("AAAAqQgFgDgCgDQgDgDgCgGIgBgLIAAgcIgSAAIAAgJIASgBIACgUIALAAIAAAUIAeAAIAAAKIgeAAIAAAcIAAAHQAAAEADACQABACADABIAHABQAGAAAKgDIACAKQgMAEgJgBQgHAAgEgBg");
	this.shape_674.setTransform(796.3,348.2);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgDgCgDQgCgDAAgEQABgGACgEQADgFAFgBIAPgFQAHgCAMgBIgBgGIgCgEIgGgDQgDgCgEAAQgEAAgHADIgKAFIgFgJQAHgEAHgCIAHgDIAIAAQAGAAAGACQAEABAEAEQADAEACAFQACAFAAAGIAAAnIgLAAIgBgJIgBAAIgLAHQgGADgHAAIgIgBgAAAABIgJAEQgEABgBADQgCADAAADQAAAEAEACQADACAHABQAEgBAEgCIAKgGIAAgPIgQABg");
	this.shape_675.setTransform(788.2,349.2);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FFFFFF").s().p("AgPAvQgGgCgDgCQgEgCgCgDQgCgDAAgFQAAgEACgEQADgDAFgDIAAgBQgDgBgBgCQgCgDAAgEQAAgDACgDQACgDADgCIAAgBQgDgDgDgDQgCgFAAgGQAAgFACgEQACgEAEgEQAEgDAEgCIAKgBQAFAAAEABIAbAAIAAALIgQAAIADAFIACAHQAAAFgCAEQgCAEgEADQgDADgFABQgEACgFAAQgFAAgFgCQgFACAAAEQAAADAEABQADACAGABIANAAIALAAIAIADQADACACADQABADAAAEQAAAEgCAFQgDAEgFADQgFAEgGABQgHACgIAAQgGAAgGgBgAgUAXIgBAGQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAIAEADIAGACIAJABIAIgBQAEgBADgCIAFgEQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgDgBQgDgCgHAAIgLAAIgKgBQgEACgCACgAgIglIgEADIgDAEIgBAGIABAGQABADACACIAEACIAFABIAFgBIAEgCQACgCABgDIABgGIgBgGIgDgEIgEgDIgFgBIgFABg");
	this.shape_676.setTransform(772.6,350.6);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgEgDgGIgCgHIgBgIQAAgEADgKQADgFAFgFQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAEQACAEADADQADACAEABIAIACQAGAAAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgCgDgCIgHgBIgGABQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_677.setTransform(764.4,349.2);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FFFFFF").s().p("AAAAqQgEgDgEgDQgDgDgBgGIgBgLIAAgcIgSAAIAAgJIATgBIABgUIALAAIAAAUIAdAAIAAAKIgdAAIAAAcIAAAHQABAEABACQACACADABIAIABQAGAAAIgDIADAKQgMAEgJgBQgHAAgEgBg");
	this.shape_678.setTransform(756.5,348.2);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FFFFFF").s().p("AgbAsIAAgMIAVAAIAAhAIgVAAIAAgKIA3AAIAAAKIgVAAIAABAIAVAAIAAAMg");
	this.shape_679.setTransform(740.6,348.1);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgDgHgEIAGgIQAGADAGACQAHADAIAAQAHAAAEgDQADgCAAgEQAAgDgDgDIgPgFIgLgDIgIgDIgEgGQgCgCAAgEQAAgEACgEQACgDADgCQAEgDAFgCQAFgBAGAAQAHAAAIACQAGADAGADIgHAIQgEgCgGgCQgFgCgGAAQgGAAgEADQgDABAAAEQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAHQAAAEgCADIgGAGIgJAFQgGABgHAAIgIAAg");
	this.shape_680.setTransform(724.6,349.2);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgEgDgGIgCgHIgBgIQAAgEADgKQADgFAFgFQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAEQACAEADADQADACAEABIAIACQAGAAAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgCgDgCIgHgBIgGABQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_681.setTransform(708.8,349.2);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FFFFFF").s().p("AAAAqQgFgDgCgDQgDgDgCgGIgBgLIAAgcIgSAAIAAgJIASgBIACgUIALAAIAAAUIAdAAIAAAKIgdAAIAAAcIAAAHQAAAEACACQACACADABIAHABQAHAAAIgDIADAKQgMAEgIgBQgIAAgEgBg");
	this.shape_682.setTransform(700.9,348.2);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgDgHgEIAGgIQAGADAGACQAHADAIAAQAHAAAEgDQADgCAAgEQAAgDgDgDIgPgFIgLgDIgIgDIgEgGQgCgCAAgEQAAgEACgEQACgDADgCQAEgDAFgCQAFgBAGAAQAHAAAIACQAGADAGADIgHAIQgEgCgGgCQgFgCgGAAQgGAAgEADQgDABAAAEQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAHQAAAEgCADIgGAGIgJAFQgGABgHAAIgIAAg");
	this.shape_683.setTransform(692.8,349.2);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FFFFFF").s().p("AgeAtIACgLIAGABIAGgBQACAAACgCQAEgDADgGIACgFIgeg/IANAAIAPAiIAHASIAAAAIAGgSIAOgiIAMAAIgcBEIgEAJQgCAFgDADQgEADgEABQgFACgFAAQgFAAgEgBg");
	this.shape_684.setTransform(684.9,350.5);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FFFFFF").s().p("AgIAsIgJgDIgHgDIgHgGIAIgJQAFAFAGACQAHADAGAAIAHgBIAGgCIADgEQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgBgFIgDgEIgLgFIgLgFIgHgDIgGgFQgDgCgBgEQgCgEAAgFQAAgFACgEQACgEAEgEQAEgDAGgBQAFgCAGAAQAFAAAKADQAHADAFAFIgHAIIgJgGQgGgCgGAAIgFABIgFACIgDAEIgBAFIABAFIADADIAKAFIAMAFIAHADIAGAFQADADABADQACAEAAAFQAAAFgCAEQgDAFgEAEQgEADgGACQgGACgHAAIgIgBg");
	this.shape_685.setTransform(677,348.1);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FFFFFF").s().p("AAAAqQgEgDgEgDQgDgDgBgGIgBgLIAAgcIgSAAIAAgJIATgBIABgUIALAAIAAAUIAdAAIAAAKIgdAAIAAAcIAAAHQABAEABACQACACADABIAIABQAGAAAIgDIADAKQgMAEgJgBQgHAAgEgBg");
	this.shape_686.setTransform(661.1,348.2);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgEgDgGIgCgHIgBgIQAAgEADgKQADgFAFgFQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAEQACAEADADQADACAEABIAIACQAGAAAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgCgDgCIgHgBIgGABQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_687.setTransform(645.2,349.2);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FFFFFF").s().p("AgeAtIACgLIAGABIAGgBQADAAACgCQAEgDACgGIACgFIgeg/IANAAIAPAiIAGASIABAAIAGgSIAOgiIAMAAIgcBEIgFAJQgBAFgDADQgEADgEABQgEACgGAAQgFAAgEgBg");
	this.shape_688.setTransform(629.3,350.5);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgDgCgDQgCgDAAgEQABgGACgEQADgFAFgBIAPgFQAHgCAMgBIgBgGIgCgEIgGgDQgDgCgEAAQgEAAgHADIgKAFIgFgJQAGgEAIgCIAHgDIAIAAQAGAAAGACQAEABAEAEQADAEACAFQACAFAAAGIAAAnIgLAAIgBgJIgBAAIgLAHQgGADgHAAIgIgBgAAAABIgJAEQgEABgBADQgCADAAADQAAAEAEACQADACAHABQAEgBAEgCIAKgGIAAgPIgQABg");
	this.shape_689.setTransform(621.3,349.2);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FFFFFF").s().p("AgdAsIAAhWIAbAAIANAAQAGACAEADQAEAEADAEQACAFAAAIQAAAGgCAGQgDAEgEADQgFAEgFACQgGACgHAAIgOAAIAAAhgAgQAAIAOAAIAIAAQADgCADgCQACgCACgDIABgHIgBgIIgEgFQgDgBgDgBIgIgBIgOAAg");
	this.shape_690.setTransform(613.6,348.1);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_691.setTransform(780.4,290.9);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FFFFFF").s().p("AAHAwIAAg1IgcAAIAAgLIApAAIAABAgAAFgfQgCgDAAgEQAAgEACgDQADgCAEAAQAFAAACACQADADAAAEQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_692.setTransform(692.2,270);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_693.setTransform(740.6,252.1);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_694.setTransform(764.5,232.7);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_695.setTransform(669.1,232.7);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_696.setTransform(637.3,232.7);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_697.setTransform(621.8,232.7);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FFFFFF").s().p("AgMAgQgFgDgFgEQgFgFgCgGIgCgHIgBgHQABgEACgJQACgGAFgFQAFgEAFgDQAHgCAFAAQAGAAAGACQAGADAEAEQAFAFACAGQADAJAAAEIgBAHIgCAHQgCAGgFAFQgEAEgGADQgGACgGAAQgFAAgHgCgAgHgVQgEACgCADQgCADgBAEQgCAFAAAEQAAAFACAFQABAEACADQACADAEACQAEABADAAQAEAAAEgBQADgCACgDQADgDACgEQABgFAAgFQAAgEgBgFIgFgHQgCgDgDgCQgEgBgEAAQgDAAgEABg");
	this.shape_698.setTransform(812.1,368.6);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#FFFFFF").s().p("AAAAqQgFgDgCgDQgDgEgCgEIgBgLIAAgcIgSAAIAAgLIASAAIACgVIALAAIAAAVIAeAAIAAALIgeAAIAAAcIAAAHQAAADADACQABACADABIAHABQAGAAAKgDIACAKQgMADgJABQgHAAgEgCg");
	this.shape_699.setTransform(796.3,367.6);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgCgCgEQgCgDAAgFQABgFACgFQADgDAFgDIAPgEQAHgCAMgBIgBgFIgCgFIgGgDQgDgCgEABQgEgBgHADIgKAFIgFgJQAHgEAHgCIAHgCIAIgBQAGAAAGACQAEACAEADQADAEACAFQACAFAAAHIAAAlIgLAAIgBgIIgBAAIgLAHQgGADgHAAIgIgBgAAAACIgJADQgEACgBACQgCACAAADQAAAFAEADQADABAHAAQAEAAAEgBIAKgHIAAgPIgQACg");
	this.shape_700.setTransform(788.2,368.6);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FFFFFF").s().p("AgPAuQgGgBgDgBQgEgDgCgDQgCgDAAgFQAAgEACgDQADgEAFgDIAAAAQgDgCgBgDQgCgDAAgDQAAgDACgCQACgEADgDIAAAAQgDgDgDgEQgCgEAAgGQAAgFACgFQACgEAEgDQAEgDAEgBIAKgCQAFAAAEACIAbAAIAAAKIgQAAIADAFIACAGQAAAGgCAEQgCAEgEADQgDADgFACQgEABgFAAQgFAAgFgCQgFACAAADQAAAEAEACQADABAGAAIANAAIALABIAIADQADACACADQABADAAAEQAAAFgCAEQgDAEgFADQgFAEgGABQgHACgIAAQgGAAgGgCgAgUAYIgBAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEADIAGACIAJAAIAIgBQAEAAADgCIAFgDQAAgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgDgCQgDgBgHAAIgLAAIgKgBQgEACgCADgAgIglIgEADIgDAFIgBAFIABAGQABADACABIAEAEIAFABIAFgBIAEgEQACgBABgDIABgGIgBgFIgDgFIgEgDIgFgBIgFABg");
	this.shape_701.setTransform(772.6,370);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgGIgCgHIgBgHQAAgEADgJQADgGAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACAEQACADADADQADACAEABIAIABQAGABAEgCQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDgBIgHAAIgGAAQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_702.setTransform(764.4,368.6);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#FFFFFF").s().p("AAAAqQgEgDgEgDQgDgEgBgEIgBgLIAAgcIgSAAIAAgLIATAAIABgVIALAAIAAAVIAdAAIAAALIgdAAIAAAcIAAAHQABADABACQACACADABIAIABQAGAAAIgDIADAKQgMADgJABQgHAAgEgCg");
	this.shape_703.setTransform(756.5,367.6);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FFFFFF").s().p("AgbArIAAgKIAVAAIAAhAIgVAAIAAgMIA3AAIAAAMIgVAAIAABAIAVAAIAAAKg");
	this.shape_704.setTransform(740.6,367.5);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgDgHgEIAGgJQAGAFAGACQAHACAIAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgPgFIgLgDIgIgDIgEgFQgCgDAAgEQAAgEACgEQACgDADgDQAEgCAFgBQAFgCAGAAQAHAAAIACQAGACAGAFIgHAIQgEgEgGgBQgFgCgGAAQgGAAgEACQgDACAAAEQAAAEAFACQADACAJACIANAEQAFABADACIAFAFIABAHQAAAEgCAEIgGAHQgEACgFABQgGACgHAAIgIgBg");
	this.shape_705.setTransform(724.6,368.6);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FFFFFF").s().p("AARAvIgVgfIgOAOIAAARIgNAAIAAhdIANAAIAAA8IABAAIAfgfIAPAAIgaAZIAdAng");
	this.shape_706.setTransform(717.2,367.1);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgEgEQgFgFgDgGIgCgHIAAgHQAAgEACgJQADgGAFgFQAEgEAGgDQAFgCAGAAQAHAAAFACQAGADAFAEQAEAFACAGQAEAJAAAEIgBAHIgDAHQgCAGgEAFQgFAEgGADQgFACgHAAQgGAAgFgCgAgHgVQgEACgCADQgDADgBAEQgBAFAAAEQAAAFABAFQABAEADADQACADAEACQADABAEAAQAEAAADgBQAEgCADgDQACgDABgEQACgFAAgFQAAgEgCgFIgDgHQgDgDgEgCQgDgBgEAAQgEAAgDABg");
	this.shape_707.setTransform(700.8,368.6);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FFFFFF").s().p("AAKAgIgHgcIgDgSIAAAAIgDASIgFAcIgRAAIgNg/IANAAIAHAiIADATIAAAAIADgTIAHgdIALAAIAHAdIAEATIABAAIACgTIAHgiIAMAAIgNA/g");
	this.shape_708.setTransform(692.9,368.6);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#FFFFFF").s().p("AAAAqQgEgDgEgDQgDgEgBgEIgBgLIAAgcIgSAAIAAgLIATAAIABgVIALAAIAAAVIAdAAIAAALIgdAAIAAAcIAAAHQABADABACQACACADABIAIABQAGAAAIgDIADAKQgMADgJABQgHAAgEgCg");
	this.shape_709.setTransform(685,367.6);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgGIgCgHIgBgHQAAgEADgJQADgGAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACAEQACADADADQADACAEABIAIABQAGABAEgCQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDgBIgHAAIgGAAQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_710.setTransform(677,368.6);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#FFFFFF").s().p("AAPArIgYgzIgIgSIABAbIAAAqIgMAAIAAhWIANAAIAZAzIAIASIABAAIgCgbIAAgqIAMAAIAABWg");
	this.shape_711.setTransform(669,367.5);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FFFFFF").s().p("AADAuQgDgBgDgDIgEgIQgBgFAAgFIAAg8IgWAAIAAgLIAiAAIAABIIABAFIACAFQADACAGAAQAFAAAHgCIADAKQgLADgHAAQgFAAgFgCg");
	this.shape_712.setTransform(653.2,367.2);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgCgCgEQgCgDAAgFQABgFACgFQADgDAFgDIAPgEQAHgCAMgBIgBgFIgCgFIgGgDQgDgCgEABQgEgBgGADIgLAFIgFgJQAGgEAIgCIAHgCIAIgBQAGAAAGACQAEACAEADQADAEACAFQACAFAAAHIAAAlIgLAAIgBgIIgBAAIgLAHQgGADgHAAIgIgBgAAAACIgJADQgEACgBACQgCACAAADQAAAFAEADQAEABAGAAQAEAAAFgBIAJgHIAAgPIgQACg");
	this.shape_713.setTransform(645.1,368.6);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#FFFFFF").s().p("AgJAgQgGgDgFgEQgEgFgDgGIgCgHIgBgHIABgGIACgHQADgGAFgFQAFgEAGgDQAHgCAHAAQAFAAAIACQAGADAFAEIgHAJQgEgEgEgCQgEgBgFAAQgFAAgDABQgEACgEADQgDADgBAEQgDAFAAAEQAAAFADAFQABAEADADQAEADAEACQADABAFAAQAGAAAEgCQAFgCAEgEIAGAJQgFAFgIACQgGADgHAAQgGAAgIgCg");
	this.shape_714.setTransform(629.4,368.6);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#FFFFFF").s().p("AgMAgQgFgDgFgEQgFgFgCgGIgCgHIgBgHQABgEACgJQACgGAFgFQAFgEAFgDQAHgCAFAAQAGAAAGACQAGADAEAEQAFAFACAGQADAJAAAEIgBAHIgCAHQgCAGgFAFQgEAEgGADQgGACgGAAQgFAAgHgCgAgHgVQgEACgCADQgCADgBAEQgCAFAAAEQAAAFACAFQABAEACADQACADAEACQAEABADAAQAEAAAEgBQADgCACgDQADgDACgEQABgFAAgFQAAgEgBgFIgFgHQgCgDgDgCQgEgBgEAAQgDAAgEABg");
	this.shape_715.setTransform(621.3,368.6);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#FFFFFF").s().p("AgIAsIgJgCIgHgFIgHgFIAIgJQAFAFAGADQAHACAGAAIAHAAIAGgDIADgEQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIgDgEIgLgFIgLgGIgHgCIgGgEQgDgDgBgEQgCgEAAgEQAAgFACgFQACgEAEgDQAEgDAGgDQAFgBAGAAQAFAAAKADQAHACAFAFIgHAJIgJgFQgGgCgGAAIgFAAIgFADIgDADIgBAFIABAEIADAEIAKAFIAMAGIAHACIAGAFQADADABAEQACADAAAEQAAAGgCAFQgDAEgEADQgEAEgGACQgGACgHAAIgIgBg");
	this.shape_716.setTransform(613.4,367.5);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#FFFFFF").s().p("AAHAwIAAg1IgcAAIAAgLIApAAIAABAgAAFgfQgCgDAAgEQAAgEACgDQADgCAEAAQAFAAACACQADADAAAEQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_717.setTransform(724,328.2);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#FFFFFF").s().p("AAHAwIAAg1IgcAAIAAgLIApAAIAABAgAAFgfQgCgDAAgEQAAgEACgDQADgCAEAAQAFAAACACQADADAAAEQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_718.setTransform(692.2,270);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_719.setTransform(637.7,271.5);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_720.setTransform(669.1,232.7);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_721.setTransform(637.3,232.7);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_722.setTransform(621.8,232.7);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#FFFFFF").s().p("AgPAvQgGgBgDgDQgEgCgCgDQgCgDAAgFQAAgEACgEQADgDAFgDIAAgBQgDgBgBgCQgCgDAAgEQAAgEACgCQACgDADgCIAAgBQgDgDgDgEQgCgEAAgGQAAgFACgEQACgFAEgDQAEgDAEgCIAKgBQAFAAAEABIAbAAIAAALIgQAAIADAFIACAHQAAAFgCAEQgCAEgEADQgDADgFABQgEACgFAAQgFAAgFgCQgFADAAADQAAADAEABQADADAGAAIANAAIALAAQAFABADACQADACACADQABADAAAEQAAAFgCAEQgDAEgFADQgFADgGACQgHACgIAAQgGAAgGgBgAgUAXIgBAGQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAIAEADIAGACIAJABIAIgBQAEgBADgCIAFgEQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgDgCQgDgBgHAAIgLAAIgKgBQgEACgCACgAgIglIgEADIgDAEIgBAGIABAGQABADACABIAEADIAFABIAFgBIAEgDQACgBABgDIABgGIgBgGIgDgEIgEgDIgFgBIgFABg");
	this.shape_723.setTransform(709,389.4);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgCgHgFIAGgIQAGADAGACQAHADAIAAQAHAAAEgDQADgCAAgEQAAgDgDgDIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgCQAEgDAFgCQAFgBAGAAQAHAAAIADQAGACAGADIgHAIQgEgDgGgBQgFgCgGAAQgGAAgEADQgDACAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAHQAAAEgCADIgGAGQgEADgFACQgGABgHAAIgIAAg");
	this.shape_724.setTransform(692.8,388);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgFgDgFIgCgHIgBgIQAAgFADgJQADgGAFgEQAEgFAGgCQAGgCAGAAQAHAAAFACQAGACAEAEQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAEQACAEADADQADACAEACIAIABQAGAAAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgGQgCgCgDgBIgHgCIgGACQgDABgDACIgFAGIgCAHIAlAAIAAAAg");
	this.shape_725.setTransform(684.9,388);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FFFFFF").s().p("AgfAsIAAhXIAXAAIAIABIAIACIAHAEIAGAEIAFAHIACAHIADAJIAAAJIAAAKIgDAJIgCAHIgFAGIgGAFIgGADIgJADIgIABgAgRAgIAIAAQAGAAAFgCQAFgBADgEQAEgFACgGQACgHAAgHQAAgHgCgHQgCgFgEgFQgDgEgFgCQgFgCgGAAIgIAAg");
	this.shape_726.setTransform(677.2,386.9);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgCgHgFIAGgIQAGADAGACQAHADAIAAQAHAAAEgDQADgCAAgEQAAgDgDgDIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgCQAEgDAFgCQAFgBAGAAQAHAAAIADQAGACAGADIgHAIQgEgDgGgBQgFgCgGAAQgGAAgEADQgDACAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAHQAAAEgCADIgGAGQgEADgFACQgGABgHAAIgIAAg");
	this.shape_727.setTransform(661,388);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgFgDgFIgCgHIgBgIQAAgFADgJQADgGAFgEQAEgFAGgCQAGgCAGAAQAHAAAFACQAGACAEAEQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAEQACAEADADQADACAEACIAIABQAGAAAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgGQgCgCgDgBIgHgCIgGACQgDABgDACIgFAGIgCAHIAlAAIAAAAg");
	this.shape_728.setTransform(645.2,388);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgDgCgDQgCgDAAgEQABgGACgEQADgFAFgBIAPgFQAHgCAMgBIgBgGIgCgEIgGgDQgDgCgEAAQgEAAgHADIgKAFIgFgJQAGgEAIgCIAHgDIAIAAQAGAAAGACQAEABAEAEQADADACAGQACAFAAAGIAAAnIgLAAIgBgJIgBAAIgLAHQgGADgHAAIgIgBgAAAABIgJAEQgEABgBADQgCACAAAEQAAAEAEACQADADAHAAQAEAAAEgDIAKgGIAAgPIgQABg");
	this.shape_729.setTransform(621.3,388);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FFFFFF").s().p("AgeAsIAAhXIAaAAIAMABIAJAEQAEADADAEQACAEAAAFIgBAHQgBADgCADIgFAEIgGACIAAABIAIACIAGAEIAEAGQACAEAAAEQAAAHgDAEQgCAFgFADQgEAEgGABQgGACgGAAgAgQAgIANAAIAIgBQAEAAADgCQADgCABgDQACgDAAgEQAAgDgCgDQgBgDgDgBIgHgDIgIgBIgNAAgAgQgGIALAAIAHgBQAEgBACgCQADgBABgDIABgGIgBgFIgEgEIgGgCIgHgBIgLAAg");
	this.shape_730.setTransform(613.6,386.9);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#FFFFFF").s().p("AAHAwIAAg1IgcAAIAAgLIApAAIAABAgAAFgfQgCgDAAgEQAAgEACgDQADgCAEAAQAFAAACACQADADAAAEQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_731.setTransform(692.2,270);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_732.setTransform(764.5,232.7);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_733.setTransform(669.1,232.7);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_734.setTransform(637.3,232.7);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_735.setTransform(621.8,232.7);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#FFFFFF").s().p("AgJAgQgGgDgFgEQgEgEgDgHIgCgHIgBgHIABgGIACgIQADgFAFgFQAFgEAGgDQAHgCAHAAQAFAAAIACQAGADAFAEIgHAJQgEgEgEgCQgEgBgFAAQgFAAgDABQgEACgEADQgDADgBAFQgDAEAAAEQAAAFADAFQABAEADADQAEADAEABQADACAFAAQAGABAEgDQAFgCAEgEIAGAJQgFAFgIACQgGADgHAAQgGAAgIgCg");
	this.shape_736.setTransform(629.4,407.4);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#FFFFFF").s().p("AAAAqQgEgDgEgDQgCgEgCgFIgBgKIAAgcIgSAAIAAgKIATgBIABgVIALAAIAAAVIAeAAIAAALIgeAAIAAAcIAAAHQABADACACQABACADABIAHABQAGAAAKgDIACAKQgMADgIABQgHAAgFgCg");
	this.shape_737.setTransform(621.4,406.4);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgHIgBgHQAAgEADgKQADgFAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAFQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACAEQACADADADQADACAEABIAIABQAGABAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDgBIgHgBIgGABQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_738.setTransform(613.4,407.4);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_739.setTransform(637.2,409.5);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_740.setTransform(645.2,409.5);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgFAAgDgDg");
	this.shape_741.setTransform(653.1,409.5);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_742.setTransform(645.2,409.5);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_743.setTransform(637.2,409.5);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgFAAgDgDg");
	this.shape_744.setTransform(653.1,409.5);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_745.setTransform(645.2,409.5);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_746.setTransform(637.2,409.5);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgFAAgDgDg");
	this.shape_747.setTransform(653.1,409.5);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_748.setTransform(637.2,409.5);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgFAAgCgDg");
	this.shape_749.setTransform(716.7,409.5);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgFAAgDgDg");
	this.shape_750.setTransform(653.1,409.5);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_751.setTransform(637.2,409.5);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_752.setTransform(645.2,409.5);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgFAAgDgDg");
	this.shape_753.setTransform(653.1,409.5);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_754.setTransform(637.2,409.5);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_755.setTransform(645.2,409.5);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgFAAgDgDg");
	this.shape_756.setTransform(653.1,409.5);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_757.setTransform(637.2,409.5);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_758.setTransform(645.2,409.5);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgFAAgDgDg");
	this.shape_759.setTransform(653.1,409.5);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_760.setTransform(637.2,409.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_556},{t:this.shape_555,p:{x:621.8,y:232.7}},{t:this.shape_554},{t:this.shape_553,p:{x:637.3,y:232.7}},{t:this.shape_552},{t:this.shape_551,p:{x:653.1,y:231.6}},{t:this.shape_550},{t:this.shape_549,p:{x:669.1,y:232.7}},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545,p:{x:708.7,y:232.8}},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540,p:{x:748.6,y:232.7}},{t:this.shape_539},{t:this.shape_538,p:{x:764.5,y:232.7}},{t:this.shape_537}]},683).to({state:[{t:this.shape_556},{t:this.shape_555,p:{x:621.8,y:232.7}},{t:this.shape_554},{t:this.shape_575,p:{x:637.3,y:232.7}},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_573,p:{x:669.1,y:232.7}},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545,p:{x:708.7,y:232.8}},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540,p:{x:748.6,y:232.7}},{t:this.shape_539},{t:this.shape_553,p:{x:764.5,y:232.7}},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_549,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564,p:{x:700.8,y:252.2}},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559,p:{x:740.6,y:252.1}},{t:this.shape_558},{t:this.shape_538,p:{x:756.5,y:252.1}},{t:this.shape_557}]},4).to({state:[{t:this.shape_556},{t:this.shape_589,p:{x:621.8,y:232.7}},{t:this.shape_554},{t:this.shape_588,p:{x:637.3,y:232.7}},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_575,p:{x:669.1,y:232.7}},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545,p:{x:708.7,y:232.8}},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540,p:{x:748.6,y:232.7}},{t:this.shape_539},{t:this.shape_573,p:{x:764.5,y:232.7}},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_553,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564,p:{x:700.8,y:252.2}},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559,p:{x:740.6,y:252.1}},{t:this.shape_558},{t:this.shape_549,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_555,p:{x:685.4,y:271.5}},{t:this.shape_579,p:{x:692.2,y:270}},{t:this.shape_578},{t:this.shape_538,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576}]},4).to({state:[{t:this.shape_556},{t:this.shape_589,p:{x:621.8,y:232.7}},{t:this.shape_554},{t:this.shape_619,p:{x:637.3,y:232.7}},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_618,p:{x:669.1,y:232.7}},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545,p:{x:708.7,y:232.8}},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_616,p:{x:764.5,y:232.7}},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_615,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564,p:{x:700.8,y:252.2}},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_614,p:{x:740.6,y:252.1}},{t:this.shape_558},{t:this.shape_588,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_555,p:{x:685.4,y:271.5}},{t:this.shape_579,p:{x:692.2,y:270}},{t:this.shape_578},{t:this.shape_575,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_612,p:{x:621.2,y:291}},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_573,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_553,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_549,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598,p:{x:780.4,y:290.9}},{t:this.shape_597},{t:this.shape_538,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_559,p:{x:859.9,y:290.9}},{t:this.shape_590}]},4).to({state:[{t:this.shape_556},{t:this.shape_645,p:{x:621.8,y:232.7}},{t:this.shape_554},{t:this.shape_644,p:{x:637.3,y:232.7}},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_619,p:{x:669.1,y:232.7}},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_618,p:{x:764.5,y:232.7}},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_616,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564,p:{x:700.8,y:252.2}},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_642,p:{x:740.6,y:252.1}},{t:this.shape_558},{t:this.shape_615,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_641,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_589,p:{x:685.4,y:271.5}},{t:this.shape_579,p:{x:692.2,y:270}},{t:this.shape_578},{t:this.shape_588,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_612,p:{x:621.2,y:291}},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_575,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_573,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_553,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_640,p:{x:780.4,y:290.9}},{t:this.shape_597},{t:this.shape_549,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_614,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_584,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_555,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_559,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_598,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_538,p:{x:820.1,y:310.3}},{t:this.shape_620}]},4).to({state:[{t:this.shape_556},{t:this.shape_672,p:{x:621.8,y:232.7}},{t:this.shape_554},{t:this.shape_671,p:{x:637.3,y:232.7}},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_670,p:{x:669.1,y:232.7}},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_644,p:{x:764.5,y:232.7}},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_619,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_668,p:{x:740.6,y:252.1}},{t:this.shape_558},{t:this.shape_618,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_667,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_645,p:{x:685.4,y:271.5}},{t:this.shape_666,p:{x:692.2,y:270}},{t:this.shape_578},{t:this.shape_616,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_615,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_588,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_575,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_640,p:{x:780.4,y:290.9}},{t:this.shape_597},{t:this.shape_573,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_642,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_641,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_589,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_614,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_598,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_553,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_584,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_555,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_579,p:{x:724,y:328.2}},{t:this.shape_549,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_559,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_538,p:{x:828.1,y:329.7}},{t:this.shape_646}]},4).to({state:[{t:this.shape_556},{t:this.shape_697,p:{x:621.8,y:232.7}},{t:this.shape_554},{t:this.shape_696,p:{x:637.3,y:232.7}},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_695,p:{x:669.1,y:232.7}},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_694,p:{x:764.5,y:232.7}},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_671,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_670,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_672,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_667,p:{x:685.4,y:271.5}},{t:this.shape_692,p:{x:692.2,y:270}},{t:this.shape_578},{t:this.shape_644,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_619,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_618,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_616,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_615,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_645,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_641,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_588,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_589,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_584,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_666,p:{x:724,y:328.2}},{t:this.shape_575,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_573,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_553,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_549,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_555,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_579,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_538,p:{x:820.1,y:349.1}}]},4).to({state:[{t:this.shape_556},{t:this.shape_722,p:{x:621.8,y:232.7}},{t:this.shape_554},{t:this.shape_721,p:{x:637.3,y:232.7}},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_720,p:{x:669.1,y:232.7}},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_696,p:{x:764.5,y:232.7}},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_695,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_694,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_719,p:{x:637.7}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_697,p:{x:685.4,y:271.5}},{t:this.shape_718,p:{x:692.2,y:270}},{t:this.shape_578},{t:this.shape_671,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_670,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_644,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_619,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_618,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_672,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_667,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_616,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_645,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_641,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_717,p:{x:724,y:328.2}},{t:this.shape_615,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_588,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_575,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_573,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_589,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_692,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_553,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_666,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_584,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_549,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_555,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_579,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_538,p:{x:820.1,y:368.5}}]},4).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}}]},4).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736}]},3).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_739,p:{x:637.2}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_739,p:{x:637.2}},{t:this.shape_740,p:{x:645.2}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_743,p:{x:637.2}},{t:this.shape_742,p:{x:645.2}},{t:this.shape_741,p:{x:653.1}},{t:this.shape_739,p:{x:661.1}},{t:this.shape_740,p:{x:669}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_743,p:{x:637.2}},{t:this.shape_740,p:{x:645.2}},{t:this.shape_741,p:{x:653.1}},{t:this.shape_739,p:{x:661.1}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_743,p:{x:637.2}},{t:this.shape_742,p:{x:645.2}},{t:this.shape_741,p:{x:653.1}},{t:this.shape_739,p:{x:661.1}},{t:this.shape_740,p:{x:669}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_743,p:{x:637.2}},{t:this.shape_742,p:{x:645.2}},{t:this.shape_744,p:{x:653.1}},{t:this.shape_739,p:{x:661.1}},{t:this.shape_740,p:{x:669}},{t:this.shape_741,p:{x:677}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_746,p:{x:637.2}},{t:this.shape_745,p:{x:645.2}},{t:this.shape_744,p:{x:653.1}},{t:this.shape_743,p:{x:661.1}},{t:this.shape_742,p:{x:669}},{t:this.shape_741,p:{x:677}},{t:this.shape_739,p:{x:684.9}},{t:this.shape_740,p:{x:692.9}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_746,p:{x:637.2}},{t:this.shape_745,p:{x:645.2}},{t:this.shape_747,p:{x:653.1}},{t:this.shape_743,p:{x:661.1}},{t:this.shape_742,p:{x:669}},{t:this.shape_744,p:{x:677}},{t:this.shape_739,p:{x:684.9}},{t:this.shape_740,p:{x:692.9}},{t:this.shape_741,p:{x:700.8}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_748,p:{x:637.2}},{t:this.shape_745,p:{x:645.2}},{t:this.shape_747,p:{x:653.1}},{t:this.shape_746,p:{x:661.1}},{t:this.shape_742,p:{x:669}},{t:this.shape_744,p:{x:677}},{t:this.shape_743,p:{x:684.9}},{t:this.shape_740,p:{x:692.9}},{t:this.shape_741,p:{x:700.8}},{t:this.shape_739,p:{x:708.8}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_748,p:{x:637.2}},{t:this.shape_745,p:{x:645.2}},{t:this.shape_747,p:{x:653.1}},{t:this.shape_746,p:{x:661.1}},{t:this.shape_742,p:{x:669}},{t:this.shape_744,p:{x:677}},{t:this.shape_743,p:{x:684.9}},{t:this.shape_740,p:{x:692.9}},{t:this.shape_741,p:{x:700.8}},{t:this.shape_739,p:{x:708.8}},{t:this.shape_749}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_748,p:{x:637.2}},{t:this.shape_745,p:{x:645.2}},{t:this.shape_750,p:{x:653.1}},{t:this.shape_746,p:{x:661.1}},{t:this.shape_742,p:{x:669}},{t:this.shape_747,p:{x:677}},{t:this.shape_743,p:{x:684.9}},{t:this.shape_740,p:{x:692.9}},{t:this.shape_744,p:{x:700.8}},{t:this.shape_739,p:{x:708.8}},{t:this.shape_749},{t:this.shape_741,p:{x:724.7}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_751,p:{x:637.2}},{t:this.shape_745,p:{x:645.2}},{t:this.shape_750,p:{x:653.1}},{t:this.shape_748,p:{x:661.1}},{t:this.shape_742,p:{x:669}},{t:this.shape_747,p:{x:677}},{t:this.shape_746,p:{x:684.9}},{t:this.shape_740,p:{x:692.9}},{t:this.shape_744,p:{x:700.8}},{t:this.shape_743,p:{x:708.8}},{t:this.shape_749},{t:this.shape_741,p:{x:724.7}},{t:this.shape_739,p:{x:732.6}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_751,p:{x:637.2}},{t:this.shape_752,p:{x:645.2}},{t:this.shape_750,p:{x:653.1}},{t:this.shape_748,p:{x:661.1}},{t:this.shape_745,p:{x:669}},{t:this.shape_747,p:{x:677}},{t:this.shape_746,p:{x:684.9}},{t:this.shape_742,p:{x:692.9}},{t:this.shape_744,p:{x:700.8}},{t:this.shape_743,p:{x:708.8}},{t:this.shape_749},{t:this.shape_741,p:{x:724.7}},{t:this.shape_739,p:{x:732.6}},{t:this.shape_740,p:{x:740.6}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_751,p:{x:637.2}},{t:this.shape_752,p:{x:645.2}},{t:this.shape_753,p:{x:653.1}},{t:this.shape_748,p:{x:661.1}},{t:this.shape_745,p:{x:669}},{t:this.shape_750,p:{x:677}},{t:this.shape_746,p:{x:684.9}},{t:this.shape_742,p:{x:692.9}},{t:this.shape_747,p:{x:700.8}},{t:this.shape_743,p:{x:708.8}},{t:this.shape_749},{t:this.shape_744,p:{x:724.7}},{t:this.shape_739,p:{x:732.6}},{t:this.shape_740,p:{x:740.6}},{t:this.shape_741,p:{x:748.5}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_754,p:{x:637.2}},{t:this.shape_752,p:{x:645.2}},{t:this.shape_753,p:{x:653.1}},{t:this.shape_751,p:{x:661.1}},{t:this.shape_745,p:{x:669}},{t:this.shape_750,p:{x:677}},{t:this.shape_748,p:{x:684.9}},{t:this.shape_742,p:{x:692.9}},{t:this.shape_747,p:{x:700.8}},{t:this.shape_746,p:{x:708.8}},{t:this.shape_749},{t:this.shape_744,p:{x:724.7}},{t:this.shape_743,p:{x:732.6}},{t:this.shape_740,p:{x:740.6}},{t:this.shape_741,p:{x:748.5}},{t:this.shape_739,p:{x:756.5}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_754,p:{x:637.2}},{t:this.shape_755,p:{x:645.2}},{t:this.shape_753,p:{x:653.1}},{t:this.shape_751,p:{x:661.1}},{t:this.shape_752,p:{x:669}},{t:this.shape_750,p:{x:677}},{t:this.shape_748,p:{x:684.9}},{t:this.shape_745,p:{x:692.9}},{t:this.shape_747,p:{x:700.8}},{t:this.shape_746,p:{x:708.8}},{t:this.shape_749},{t:this.shape_744,p:{x:724.7}},{t:this.shape_743,p:{x:732.6}},{t:this.shape_742,p:{x:740.6}},{t:this.shape_741,p:{x:748.5}},{t:this.shape_739,p:{x:756.5}},{t:this.shape_740,p:{x:764.4}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_754,p:{x:637.2}},{t:this.shape_755,p:{x:645.2}},{t:this.shape_756,p:{x:653.1}},{t:this.shape_751,p:{x:661.1}},{t:this.shape_752,p:{x:669}},{t:this.shape_753,p:{x:677}},{t:this.shape_748,p:{x:684.9}},{t:this.shape_745,p:{x:692.9}},{t:this.shape_750,p:{x:700.8}},{t:this.shape_746,p:{x:708.8}},{t:this.shape_749},{t:this.shape_747,p:{x:724.7}},{t:this.shape_743,p:{x:732.6}},{t:this.shape_742,p:{x:740.6}},{t:this.shape_744,p:{x:748.5}},{t:this.shape_739,p:{x:756.5}},{t:this.shape_740,p:{x:764.4}},{t:this.shape_741,p:{x:772.4}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_757,p:{x:637.2}},{t:this.shape_755,p:{x:645.2}},{t:this.shape_756,p:{x:653.1}},{t:this.shape_754,p:{x:661.1}},{t:this.shape_752,p:{x:669}},{t:this.shape_753,p:{x:677}},{t:this.shape_751,p:{x:684.9}},{t:this.shape_745,p:{x:692.9}},{t:this.shape_750,p:{x:700.8}},{t:this.shape_748,p:{x:708.8}},{t:this.shape_749},{t:this.shape_747,p:{x:724.7}},{t:this.shape_746,p:{x:732.6}},{t:this.shape_742,p:{x:740.6}},{t:this.shape_744,p:{x:748.5}},{t:this.shape_743,p:{x:756.5}},{t:this.shape_740,p:{x:764.4}},{t:this.shape_741,p:{x:772.4}},{t:this.shape_739,p:{x:780.3}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_757,p:{x:637.2}},{t:this.shape_758},{t:this.shape_756,p:{x:653.1}},{t:this.shape_754,p:{x:661.1}},{t:this.shape_755,p:{x:669}},{t:this.shape_753,p:{x:677}},{t:this.shape_751,p:{x:684.9}},{t:this.shape_752,p:{x:692.9}},{t:this.shape_750,p:{x:700.8}},{t:this.shape_748,p:{x:708.8}},{t:this.shape_749},{t:this.shape_747,p:{x:724.7}},{t:this.shape_746,p:{x:732.6}},{t:this.shape_745,p:{x:740.6}},{t:this.shape_744,p:{x:748.5}},{t:this.shape_743,p:{x:756.5}},{t:this.shape_742,p:{x:764.4}},{t:this.shape_741,p:{x:772.4}},{t:this.shape_739,p:{x:780.3}},{t:this.shape_740,p:{x:788.3}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_757,p:{x:637.2}},{t:this.shape_758},{t:this.shape_759},{t:this.shape_754,p:{x:661.1}},{t:this.shape_755,p:{x:669}},{t:this.shape_756,p:{x:677}},{t:this.shape_751,p:{x:684.9}},{t:this.shape_752,p:{x:692.9}},{t:this.shape_753,p:{x:700.8}},{t:this.shape_748,p:{x:708.8}},{t:this.shape_749},{t:this.shape_750,p:{x:724.7}},{t:this.shape_746,p:{x:732.6}},{t:this.shape_745,p:{x:740.6}},{t:this.shape_747,p:{x:748.5}},{t:this.shape_743,p:{x:756.5}},{t:this.shape_742,p:{x:764.4}},{t:this.shape_744,p:{x:772.4}},{t:this.shape_739,p:{x:780.3}},{t:this.shape_740,p:{x:788.3}},{t:this.shape_741,p:{x:796.2}}]},1).to({state:[{t:this.shape_556},{t:this.shape_735},{t:this.shape_554},{t:this.shape_734},{t:this.shape_552},{t:this.shape_574},{t:this.shape_550},{t:this.shape_733},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_643},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_617},{t:this.shape_539},{t:this.shape_732},{t:this.shape_537},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_551,p:{x:645.2,y:251}},{t:this.shape_568},{t:this.shape_721,p:{x:661.1,y:252.1}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_669},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_693},{t:this.shape_558},{t:this.shape_720,p:{x:756.5,y:252.1}},{t:this.shape_557},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_722,p:{x:637.7,y:271.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_719,p:{x:685.4}},{t:this.shape_731},{t:this.shape_578},{t:this.shape_696,p:{x:708.8,y:271.5}},{t:this.shape_577},{t:this.shape_576},{t:this.shape_613},{t:this.shape_665},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_540,p:{x:653.2,y:290.9}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_695,p:{x:685,y:290.9}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_694,p:{x:708.8,y:290.9}},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_671,p:{x:748.6,y:290.9}},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_691},{t:this.shape_597},{t:this.shape_670,p:{x:796.3,y:290.9}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_668,p:{x:859.9,y:290.9}},{t:this.shape_590},{t:this.shape_639},{t:this.shape_638},{t:this.shape_697,p:{x:629.8,y:310.3}},{t:this.shape_637},{t:this.shape_636},{t:this.shape_672,p:{x:653.6,y:310.3}},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_642,p:{x:716.8,y:310.3}},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_545,p:{x:764.4,y:310.4}},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_640,p:{x:804.2,y:310.3}},{t:this.shape_621},{t:this.shape_644,p:{x:820.1,y:310.3}},{t:this.shape_620},{t:this.shape_664},{t:this.shape_663},{t:this.shape_667,p:{x:629.8,y:329.7}},{t:this.shape_662},{t:this.shape_661},{t:this.shape_645,p:{x:653.6,y:329.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_612,p:{x:708.6,y:329.8}},{t:this.shape_655},{t:this.shape_718,p:{x:724,y:328.2}},{t:this.shape_619,p:{x:732.7,y:329.7}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_564,p:{x:772.3,y:329.8}},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_614,p:{x:812.2,y:329.7}},{t:this.shape_647},{t:this.shape_618,p:{x:828.1,y:329.7}},{t:this.shape_646},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_598,p:{x:637.3,y:349.1}},{t:this.shape_687},{t:this.shape_616,p:{x:653.2,y:349.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_559,p:{x:716.8,y:349.1}},{t:this.shape_680},{t:this.shape_679},{t:this.shape_615,p:{x:748.6,y:349.1}},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_641,p:{x:780.8,y:349.1}},{t:this.shape_675},{t:this.shape_674},{t:this.shape_717,p:{x:803.5,y:347.6}},{t:this.shape_673},{t:this.shape_588,p:{x:820.1,y:349.1}},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_692,p:{x:636.6,y:367}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_589,p:{x:709.3,y:368.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_575,p:{x:748.6,y:368.5}},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_584,p:{x:780.8,y:368.5}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_666,p:{x:803.5,y:367}},{t:this.shape_698},{t:this.shape_573,p:{x:820.1,y:368.5}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_553,p:{x:629.3,y:387.9}},{t:this.shape_549,p:{x:637.3,y:387.9}},{t:this.shape_728},{t:this.shape_555,p:{x:653.6,y:387.9}},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_579,p:{x:700.2,y:386.4}},{t:this.shape_723},{t:this.shape_538,p:{x:716.8,y:387.9}},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_760},{t:this.shape_758},{t:this.shape_759},{t:this.shape_757,p:{x:661.1}},{t:this.shape_755,p:{x:669}},{t:this.shape_756,p:{x:677}},{t:this.shape_754,p:{x:684.9}},{t:this.shape_752,p:{x:692.9}},{t:this.shape_753,p:{x:700.8}},{t:this.shape_751,p:{x:708.8}},{t:this.shape_749},{t:this.shape_750,p:{x:724.7}},{t:this.shape_748,p:{x:732.6}},{t:this.shape_745,p:{x:740.6}},{t:this.shape_747,p:{x:748.5}},{t:this.shape_746,p:{x:756.5}},{t:this.shape_742,p:{x:764.4}},{t:this.shape_744,p:{x:772.4}},{t:this.shape_743,p:{x:780.3}},{t:this.shape_740,p:{x:788.3}},{t:this.shape_741,p:{x:796.2}},{t:this.shape_739,p:{x:804.2}}]},1).to({state:[]},597).wait(8));

	// Back Orng
	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#DE7300").s().p("Ag4A4QgXgXABghQgBggAXgYQAYgWAgAAQAhAAAXAWQAXAYAAAgQAAAhgXAXQgXAXghAAQggAAgYgXg");
	this.shape_761.setTransform(719.6,309.5);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#DE7300").s().p("AlVFTQiMiLAAjIQAAjHCMiOQCOiMDHAAQDIAACLCMQCPCOAADHQAADIiPCLQiLCPjIAAQjHAAiOiPg");
	this.shape_762.setTransform(719.7,309.8);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#DE7300").s().p("ApzJuQkAj/AAlvQAAluEAkFQEFkAFuAAQFvAAEAEAQEFEFAAFuQAAFvkFD/QkAEGlvAAQluAAkFkGg");
	this.shape_763.setTransform(719.8,310.1);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#DE7300").s().p("AuROKQl0l0AAoWQAAoVF0l8QF8l0IVAAQIWAAFzF0QF9F8AAIVQAAIWl9F0QlzF8oWAAQoVAAl8l8g");
	this.shape_764.setTransform(720,310.4);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#DE7300").s().p("AyuSlQnpnoAAq9QAAq8HpnzQHynoK8AAQK9AAHoHoQHzHzAAK8QAAK9nzHoQnoHzq9AAQq8AAnynzg");
	this.shape_765.setTransform(720.1,310.8);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#DE7300").s().p("A3MXBQpdpeAAtjQAAtjJdppQJqpdNiAAQNjAAJdJdQJqJpAANjQAANjpqJeQpdJptjAAQtiAApqppg");
	this.shape_766.setTransform(720.2,311.1);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#DE7300").s().p("A7qbbQrRrRAAwKQAAwKLRrgQLhrRQJAAQQKAALSLRQLgLgAAQKQAAQKrgLRQrSLhwKAAQwJAArhrhg");
	this.shape_767.setTransform(720.3,311.5);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#DE7300").s().p("EggIAf3QtFtGAAyxQAAywNFtYQNYtFSwAAQSxAANFNFQNYNYAASwQAASxtYNGQtFNXyxAAQywAAtYtXg");
	this.shape_768.setTransform(720.5,311.8);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#DE7300").s().p("EgkmAkSQu5u6AA1YQAA1YO5vOQPPu5VXAAQVYAAO6O5QPOPOAAVYQAAVYvOO6Qu6PO1YAAQ1XAAvPvOg");
	this.shape_769.setTransform(720.6,312.1);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#DE7300").s().p("EgpDAotQwuwuAA3/QAA3+QuxFQRFwuX+AAQX/AAQuQuQRFRFAAX+QAAX/xFQuQwuRF3/AAQ3+AAxFxFg");
	this.shape_770.setTransform(720.7,312.4);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#DE7300").s().p("EgthAtIQyiyiAA6mQAA6lSiy8QS8yialAAQamAASiSiQS8S8AAalQAAamy8SiQyiS86mAAQ6lAAy8y8g");
	this.shape_771.setTransform(720.8,312.8);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#DE7300").s().p("Egx/AxkQ0W0YAA9MQAA9MUW0zQUz0WdMgBQdNABUWUWQUzUzAAdMQAAdM0zUYQ0WUy9NABQ9MgB0z0yg");
	this.shape_772.setTransform(720.9,313.1);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#DE7300").s().p("Eg2cA1/Q2L2LgB/0QAB/zWL2qQWp2LfzAAQfzAAWMWLQWpWqAAfzQAAf02pWLQ2MWq/zAAQ/zAA2p2qg");
	this.shape_773.setTransform(721.1,313.4);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#DE7300").s().p("Eg66A6aUgX/gX/AAAgibUAAAgiaAX/gYgUAYhgYAAiZAAAUAibAAAAX/AYAUAYgAYgAABAiaUgABAibgYgAX/UgX/AYhgibgABUgiZAABgYhgYhg");
	this.shape_774.setTransform(721.2,313.8);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#DE7300").s().p("Eg/YA+1UgZ0gZzAABglCUgABglBAZ0gaXUAaXgZ0AlBAAAUAlCAAAAZzAZ0UAaXAaXAAAAlBUAAAAlCgaXAZzUgZzAaYglCAAAUglBAAAgaXgaYg");
	this.shape_775.setTransform(721.3,314.1);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#DE7300").s().p("EhD1BDRUgbogbpgABgnoUAABgnoAbogcOUAcNgboAnoAAAUAnoAAAAboAboUAcOAcOAAAAnoUAAAAnogcOAbpUgboAcOgnoAAAUgnoAAAgcNgcOg");
	this.shape_776.setTransform(721.4,314.4);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#DE7300").s().p("EhIUBHsUgdcgddAAAgqPUAAAgqOAdcgeGUAeGgdcAqOAAAUAqPAAAAddAdcUAeFAeGAAAAqOUAAAAqPgeFAddUgddAeFgqPAAAUgqOAAAgeGgeFg");
	this.shape_777.setTransform(721.5,314.8);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#DE7300").s().p("EhMxBMHUgfRgfRAAAgs2UAAAgs2AfRgf7UAf8gfRAs1AAAUAs2AAAAfRAfRUAf8Af7AAAAs2UAAAAs2gf8AfRUgfRAf8gs2AAAUgs1AAAgf8gf8g");
	this.shape_778.setTransform(721.6,315.1);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#DE7300").s().p("EhRPBQjUghFghGAAAgvdUAAAgvdAhFghyUAhzghFAvcAAAUAvdAAAAhFAhFUAhzAhyAAAAvdUAAAAvdghzAhGUghFAhygvdAAAUgvcAAAghzghyg");
	this.shape_779.setTransform(721.8,315.4);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#DE7300").s().p("EhVtBU+Ugi5gi6AAAgyEUAAAgyEAi5gjpUAjqgi5AyDAAAUAyEAAAAi5Ai5UAjqAjpAAAAyEUAAAAyEgjqAi6Ugi5AjpgyEAAAUgyDAAAgjqgjpg");
	this.shape_780.setTransform(721.9,315.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_761,p:{scaleX:1,scaleY:1,x:719.6,y:309.5}}]},629).to({state:[{t:this.shape_762}]},1).to({state:[{t:this.shape_763}]},1).to({state:[{t:this.shape_764}]},1).to({state:[{t:this.shape_765}]},1).to({state:[{t:this.shape_766}]},1).to({state:[{t:this.shape_767}]},1).to({state:[{t:this.shape_768}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_771}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_773}]},1).to({state:[{t:this.shape_774}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_776}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_778}]},1).to({state:[{t:this.shape_779}]},1).to({state:[{t:this.shape_780}]},1).to({state:[{t:this.shape_761,p:{scaleX:102.153,scaleY:102.153,x:722,y:316.1}}]},1).to({state:[]},687).wait(8));

	// subtexts
	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#000000").s().p("AAABBQgFgCgEgGQgEgFgDgIQgBgHAAgJIAAg2IgeAAIAAgHIAegBIABghIAIAAIAAAhIA1AAIAAAIIg1AAIAAA3IABANQABAGAEAEQACAEAGACQAFACAIAAQAHAAAIgBIAMgEIACAHQgHADgGACQgJABgIAAQgKAAgIgDg");
	this.shape_781.setTransform(554,199.1);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#000000").s().p("AAhA0IAAg9QAAgIgBgHQgCgGgDgEQgEgEgFgCQgFgCgIAAIgJABIgJAEQgIAFgLAMIAABIIgKAAIAAhkIAIAAIABATIABAAQAKgKAIgFIAKgFQAFgCAFAAQAKAAAGADQAHACAFAFQAEAFACAIQADAIAAAKIAAA+g");
	this.shape_782.setTransform(541.4,200.5);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#000000").s().p("AgOAyQgKgEgHgHQgHgHgEgJIgEgLIgBgMQAAgLAFgKQADgJAIgIQAGgGAKgEQAIgEAKAAQAKAAAJAEQAHACAGAHQAHAFACAKQAEAIAAALIAAAHIhWAAQABAKAEAJQADAHAHAGQAFAFAIADQAIADAIAAQAJAAAJgDQAIgDAIgFIADAHQgHAGgJADQgJADgMAAQgLAAgJgDgAAogFQgBgKgDgHQgDgIgFgFQgFgEgGgCQgHgDgHAAQgGAAgIADQgGADgGAEQgGAFgDAHQgEAIgBAJIBNAAIAAAAg");
	this.shape_783.setTransform(528.7,200.6);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#000000").s().p("AApA0IAAhHQgBgMgDgFQgEgGgHAAQgHAAgFAFQgEAEgGAKIAABLIgHAAIAAhHQgBgMgDgFQgDgGgIAAQgHAAgFAFQgEAEgFAKIAABLIgJAAIAAhkIAIAAIAAAOIABAAQAFgJAEgDQAGgFAIAAQAIAAAFAFQAEAEACAJQAGgJAFgEQAGgFAIAAQAFAAAEACQAEACADAEQADAEABAFQABAGAAAIIAABIg");
	this.shape_784.setTransform(516.2,200.5);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#000000").s().p("AgsBLIAAiSIAIAAIABAPIABAAQAIgIAJgEQALgGAIABQAKgBAJAEQAIAEAFAHQAFAGADAKQADAKAAALQAAAMgEAKQgDAKgIAHQgFAHgKAEQgIADgJABQgHgBgJgDQgKgEgGgHIgBAAIABAVIAAAlgAgPg9QgLAFgIAJIAAA3QAHAIALAEQAHADAHABQAIgBAGgDQAIgDAEgHQAGgFACgIQADgIAAgLQAAgJgCgIQgCgIgEgGQgEgGgGgDQgIgDgIAAQgHAAgJAEg");
	this.shape_785.setTransform(503.8,202.8);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#000000").s().p("AgSAyQgIgEgIgHQgGgHgEgJQgEgLAAgMQAAgLAEgKQAEgKAGgHQAIgHAIgDQAJgEAJAAQAKAAAJAEQAJADAGAHQAIAHADAKQAEAKAAALQAAAMgEALQgDAJgIAHQgGAHgJAEQgJADgKAAQgJAAgJgDgAgOgoQgIADgFAGQgGAGgCAIQgDAJAAAIQAAAKADAIQACAJAGAFQAFAGAIADQAGAEAIAAQAIAAAHgEQAIgDAFgGQAFgFADgJQADgIAAgKQAAgIgDgJQgDgIgFgGQgFgGgIgDQgHgDgIgBQgIABgGADg");
	this.shape_786.setTransform(490.8,200.6);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#000000").s().p("AAIBLQgFgCgDgEQgEgEgCgGQgCgHAAgIIAAhwIglAAIAAgIIAtAAIAAB5QAAAGACAEQABAFADADQADADAEABQAEACAFAAIAKgCIALgEIADAHIgMAFQgGACgHAAQgHAAgGgCg");
	this.shape_787.setTransform(478.4,198.2);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#000000").s().p("AgOAyQgKgEgHgHQgHgHgEgJIgEgLIgBgMQAAgLAFgKQADgJAIgIQAGgGAKgEQAIgEAKAAQAKAAAJAEQAHACAGAHQAHAFACAKQAEAIAAALIAAAHIhWAAQABAKAEAJQADAHAHAGQAFAFAIADQAIADAIAAQAJAAAJgDQAIgDAIgFIADAHQgHAGgJADQgJADgNAAQgKAAgJgDgAAogFQgBgKgDgHQgDgIgFgFQgFgEgGgCQgHgDgHAAQgGAAgIADQgGADgGAEQgGAFgDAHQgEAIgBAJIBNAAIAAAAg");
	this.shape_788.setTransform(465.7,200.6);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#000000").s().p("AgDAyIguhjIAKAAIAcA+IALAdIABAAIAMgdIAcg+IAJAAIgsBjg");
	this.shape_789.setTransform(453,200.6);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#000000").s().p("AgOAyQgKgEgHgHQgHgHgEgJIgEgLIgBgMQAAgLAFgKQADgJAIgIQAGgGAKgEQAIgEAKAAQAKAAAJAEQAHACAGAHQAHAFACAKQAEAIAAALIAAAHIhWAAQABAKAEAJQADAHAHAGQAFAFAIADQAIADAIAAQAJAAAJgDQAIgDAIgFIADAHQgHAGgJADQgJADgMAAQgLAAgJgDgAAogFQgBgKgDgHQgDgIgFgFQgFgEgGgCQgHgDgHAAQgGAAgIADQgGADgGAEQgGAFgDAHQgEAIgBAJIBNAAIAAAAg");
	this.shape_790.setTransform(440.5,200.6);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#000000").s().p("AguBFIAAiJIAgAAQAIAAAGABQAHABAGADIAKAGQAFADAEAEIAHAKIAFAMQADASAAAKQgBAUgCAIIgFAMQgDAGgEAEIgJAIIgKAGIgNAEIgOABgAgkA9IAVAAQAHAAAGgBIAKgDIAJgGIAIgHQAGgIADgMQADgLAAgNQAAgNgDgLQgDgLgGgIIgIgHIgJgGIgKgDIgNgBIgVAAg");
	this.shape_791.setTransform(428.2,198.7);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#000000").s().p("AgSBJQgJgEgHgGIgBAAIgBALIgIAAIAAiWIAKAAIAAAsIgBAWIABAAQAHgIAKgFQALgFAIAAQAKAAAJAEQAIADAFAHQAFAHADAIQADAKAAALQAAANgEAKQgDAKgHAHQgGAHgJAEQgJAEgIAAQgIAAgJgEgAgPgPQgLAEgIAKIAAA3QAHAHALAEQAHAEAHAAQAIAAAGgEQAIgDAEgGQAGgGACgJQADgJAAgKQAAgJgCgIQgCgHgEgFQgEgHgGgDQgIgDgIAAQgHAAgJAFg");
	this.shape_792.setTransform(403,198.2);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#000000").s().p("AgOAyQgKgEgHgHQgHgHgEgJIgEgLIgBgMQAAgLAFgKQADgJAIgIQAGgGAKgEQAIgEAKAAQAKAAAJAEQAHACAGAHQAHAFACAKQAEAIAAALIAAAHIhWAAQABAKAEAJQADAHAHAGQAFAFAIADQAIADAIAAQAJAAAJgDQAIgDAIgFIADAHQgHAGgJADQgJADgMAAQgLAAgJgDgAAogFQgBgKgDgHQgDgIgFgFQgEgEgHgCQgHgDgHAAQgGAAgIADQgGADgGAEQgGAFgDAHQgEAIgBAJIBNAAIAAAAg");
	this.shape_793.setTransform(390.1,200.6);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#000000").s().p("AAZBFIgThBIgGgYIAAAAIgFAYIgTBBIgNAAIgWiJIAKAAIAOBdIAFAhIAAAAIAJghIASg5IAJAAIARA5IAJAhIABAAIADghIAPhdIAJAAIgWCJg");
	this.shape_794.setTransform(377.4,198.7);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#000000").s().p("AAhA0IAAg9QABgIgCgHQgCgGgDgEQgEgEgFgCQgFgCgIAAIgJABIgJAEQgIAFgLAMIAABIIgKAAIAAhkIAIAAIABATIABAAQAKgKAIgFIAKgFQAFgCAFAAQAKAAAGADQAHACAFAFQAEAFADAIQACAIAAAKIAAA+g");
	this.shape_795.setTransform(491,238);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#000000").s().p("AgXBKQgIgCgGgEQgGgEgDgFQgDgGAAgGQAAgHAEgGQAFgGAIgFIAAAAQgFgDgCgEQgEgEAAgGQAAgFAEgEQADgFAGgEIAAgBQgGgEgDgHQgDgGAAgJQAAgHADgIQACgGAGgEQAFgFAHgDQAHgDAHAAQAHAAAGACIAqAAIAAAJIgeAAQAFAFADAGQADAHAAAIQAAAHgDAGQgCAHgFAFQgGAEgGACQgHAEgHAAQgKAAgJgFQgFADgCADQgDADAAAEQAAAHAHAEQAGADALAAIAYAAIAQABQAHABAEADQAFADACAEQACAEAAAHQAAAGgEAGQgDAHgHAEQgHAGgKACQgKADgLAAQgMAAgJgCgAglAkQgDAFAAAGQAAAEACAEQACAFAFACIAMAFQAHABAJABQAJgBAJgCQAIgCAGgEQAFgDAEgFQADgFAAgEQAAgEgCgEQgCgDgDgBQgGgDgOgBIgXAAQgJABgGgCQgJAEgEAGgAgQhBQgFACgEAEQgEAEgCAFQgCAFAAAGQAAAGACAFQACAFAEAEQAEAEAFACQAFACAGAAQAFAAAFgCQAFgCAEgEQAEgEACgFQACgFAAgGQAAgGgCgFQgCgFgEgEQgEgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_796.setTransform(478.6,240.5);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#000000").s().p("AATBJIAAhcIgxAAIAAgIIA6AAIAABkgAAPg2QgDgDAAgFQAAgEADgDQACgDAFAAQAEAAADADQACADAAAEQAAAFgCADQgDACgEAAQgFAAgCgCg");
	this.shape_797.setTransform(464.4,235.9);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#000000").s().p("AgKAzIgNgDQgLgEgLgHIAFgHQAKAHAJAEIANADIANABQAIAAAGgCQAFgBAEgDQAEgDACgDQACgEAAgEQgBgJgFgEIgKgFIgTgFQgJgCgHgBQgIgDgFgDQgFgEgDgEQgDgEAAgGQAAgFADgFQACgGAFgDQAFgDAHgDQAIgCAJAAQAKAAALADQAKAEAHAFIgFAIQgHgGgIgDQgJgDgJAAQgIAAgGACQgFABgEADQgDACgCAEQgBACAAAFQAAADACADQACADAEADQAGAEASAEIAWAFQAIADAFADQAEAEACAEQACAFAAAFQAAAHgDAFQgDAEgFAFQgGADgHACQgIADgKAAIgOgCg");
	this.shape_798.setTransform(452.9,238.2);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#000000").s().p("AgOAxQgKgDgHgHQgHgHgEgKIgEgKIgBgMQAAgLAFgKQADgJAIgIQAGgGAKgEQAIgEAKAAQAKAAAJADQAHAEAGAFQAHAHACAJQAEAIAAALIAAAHIhWAAQABAKAEAJQADAHAHAGQAFAFAIADQAIADAIAAQAJAAAJgDQAIgDAIgFIADAHQgHAFgJADQgJAEgMAAQgLAAgJgEgAAogFQgBgKgDgHQgDgIgFgEQgFgFgGgCQgHgDgHAAQgGAAgIADQgGADgGAEQgGAFgDAHQgEAHgBAKIBNAAIAAAAg");
	this.shape_799.setTransform(440.5,238.2);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#000000").s().p("AgOAxQgKgDgHgHQgHgHgEgKIgEgKIgBgMQAAgLAFgKQADgJAIgIQAGgGAKgEQAIgEAKAAQAKAAAJADQAHAEAGAFQAHAHACAJQAEAIAAALIAAAHIhWAAQABAKAEAJQADAHAHAGQAFAFAIADQAIADAIAAQAJAAAJgDQAIgDAIgFIADAHQgHAFgJADQgJAEgMAAQgLAAgJgEgAAogFQgBgKgDgHQgDgIgFgEQgEgFgHgCQgHgDgHAAQgGAAgIADQgGADgGAEQgGAFgDAHQgEAHgBAKIBNAAIAAAAg");
	this.shape_800.setTransform(390.1,238.2);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#000000").s().p("AgOAxQgKgDgHgHQgHgHgEgKIgEgKIgBgMQAAgLAFgKQADgKAIgGQAGgIAKgDQAIgEAKAAQAKAAAJADQAHAEAGAFQAHAGACAJQAEAJAAALIAAAGIhWAAQABALAEAIQADAIAHAGQAFAGAIACQAIADAIAAQAJAAAJgDQAIgCAIgGIADAHQgHAFgJADQgJAEgMAAQgLAAgJgEgAAogGQgBgJgDgIQgDgHgFgEQgFgFgGgDQgHgCgHAAQgGAAgIACQgGADgGAFQgGAFgDAHQgEAIgBAIIBNAAIAAAAg");
	this.shape_801.setTransform(528.7,201.1);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#000000").s().p("AgsBKIAAiRIAIAAIABAOIABAAQAIgHAJgFQALgEAIAAQAKAAAJADQAIAEAFAGQAFAIADAJQADAJAAAMQAAANgEAJQgDAKgIAHQgFAHgKAEQgIAEgJgBQgHABgJgEQgKgEgGgHIgBAAIABAVIAAAkgAgPg9QgLAFgIAKIAAA3QAHAHALAEQAHADAHAAQAIAAAGgDQAIgEAEgFQAGgGACgIQADgIAAgLQAAgKgCgHQgCgIgEgFQgEgHgGgDQgIgDgIAAQgHAAgJAEg");
	this.shape_802.setTransform(503.8,203.3);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#000000").s().p("AgSAxQgIgDgIgHQgGgHgEgKQgEgJAAgNQAAgLAEgLQAEgJAGgHQAIgGAIgFQAJgDAJAAQAKAAAJADQAJAFAGAGQAIAHADAJQAEALAAALQAAANgEAJQgDAKgIAHQgGAHgJADQgJAEgKAAQgJAAgJgEgAgOgpQgIAEgFAGQgGAGgCAIQgDAIAAAJQAAAKADAIQACAJAGAGQAFAFAIAEQAGADAIAAQAIAAAHgDQAIgEAFgFQAFgGADgJQADgIAAgKQAAgJgDgIQgDgIgFgGQgFgGgIgEQgHgDgIAAQgIAAgGADg");
	this.shape_803.setTransform(490.8,201.1);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#000000").s().p("AgOAxQgKgDgHgHQgHgHgEgKIgEgKIgBgMQAAgLAFgKQADgKAIgGQAGgIAKgDQAIgEAKAAQAKAAAJADQAHAEAGAFQAHAGACAJQAEAJAAALIAAAGIhWAAQABALAEAIQADAIAHAGQAFAGAIACQAIADAIAAQAJAAAJgDQAIgCAIgGIADAHQgHAFgJADQgJAEgNAAQgKAAgJgEgAAogGQgBgJgDgIQgDgHgFgEQgFgFgGgDQgHgCgHAAQgGAAgIACQgGADgGAFQgGAFgDAHQgEAIgBAIIBNAAIAAAAg");
	this.shape_804.setTransform(465.7,201.1);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#000000").s().p("AgDAzIguhlIAKAAIAcA/IALAdIABAAIAMgdIAcg/IAJAAIgsBlg");
	this.shape_805.setTransform(453,201.1);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#000000").s().p("AgOAxQgKgDgHgHQgHgHgEgKIgEgKIgBgMQAAgLAFgKQADgKAIgGQAGgIAKgDQAIgEAKAAQAKAAAJADQAHAEAGAFQAHAGACAJQAEAJAAALIAAAGIhWAAQABALAEAIQADAIAHAGQAFAGAIACQAIADAIAAQAJAAAJgDQAIgCAIgGIADAHQgHAFgJADQgJAEgMAAQgLAAgJgEgAAogGQgBgJgDgIQgDgHgFgEQgFgFgGgDQgHgCgHAAQgGAAgIACQgGADgGAFQgGAFgDAHQgEAIgBAIIBNAAIAAAAg");
	this.shape_806.setTransform(440.5,201.1);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#000000").s().p("AguBFIAAiJIAgAAQAIAAAGABQAHABAGADIAKAGQAFADAEAEIAHAKIAFAMQADASAAAKQgBAUgCAIIgFAMQgDAGgEAEIgJAIIgKAGIgNAEIgOABgAgkA9IAVAAQAHAAAGgBIAKgDIAJgGIAIgHQAGgIADgMQADgLAAgNQAAgNgDgLQgDgLgGgIIgIgHIgJgGIgKgDIgNgBIgVAAg");
	this.shape_807.setTransform(428.2,199.2);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#000000").s().p("AgSBJQgJgEgHgGIgBAAIgBALIgIAAIAAiWIAKAAIAAAsIgBAWIABAAQAHgIAKgFQALgFAIAAQAKAAAJAEQAIADAFAHQAFAHADAIQADAKAAALQAAANgEAKQgDAKgHAHQgGAHgJAEQgJAEgIAAQgIAAgJgEgAgPgPQgLAEgIAKIAAA3QAHAHALAEQAHAEAHAAQAIAAAGgEQAIgDAEgGQAGgGACgJQADgJAAgKQAAgJgCgIQgCgHgEgFQgEgHgGgDQgIgDgIAAQgHAAgJAFg");
	this.shape_808.setTransform(403,198.7);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#000000").s().p("AgOAxQgKgDgHgHQgHgHgEgKIgEgKIgBgMQAAgLAFgKQADgKAIgGQAGgIAKgDQAIgEAKAAQAKAAAJADQAHAEAGAFQAHAGACAJQAEAJAAALIAAAGIhWAAQABALAEAIQADAIAHAGQAFAGAIACQAIADAIAAQAJAAAJgDQAIgCAIgGIADAHQgHAFgJADQgJAEgMAAQgLAAgJgEgAAogGQgBgJgDgIQgDgHgFgEQgEgFgHgDQgHgCgHAAQgGAAgIACQgGADgGAFQgGAFgDAHQgEAIgBAIIBNAAIAAAAg");
	this.shape_809.setTransform(390.1,201.1);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#000000").s().p("AAZBFIgThBIgGgYIAAAAIgFAYIgTBBIgNAAIgWiJIAKAAIAOBdIAFAhIAAAAIAJghIASg5IAJAAIARA5IAJAhIABAAIADghIAPhdIAJAAIgWCJg");
	this.shape_810.setTransform(377.4,199.2);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#000000").s().p("AgXBKQgIgCgGgEQgGgEgDgFQgDgGAAgGQAAgHAEgFQAFgHAIgFIAAAAQgFgDgCgDQgEgFAAgGQAAgFAEgEQADgFAGgEIAAgBQgGgEgDgHQgDgGAAgJQAAgHADgIQACgGAGgEQAFgFAHgDQAHgDAHAAQAHAAAGADIAqAAIAAAIIgeAAQAFAFADAGQADAHAAAIQAAAHgDAGQgCAHgFAEQgGAGgGABQgHADgHABQgKAAgJgFQgFADgCADQgDADAAAEQAAAHAHAEQAGADALAAIAYAAIAQABQAHACAEACQAFADACAEQACAEAAAHQAAAGgEAGQgDAHgHAEQgHAFgKADQgKADgLAAQgMAAgJgCgAglAkQgDAFAAAGQAAAEACAEQACAFAFACIAMAFQAHACAJAAQAJAAAJgDQAIgCAGgEQAFgDAEgFQADgFAAgEQAAgFgCgDQgCgCgDgCQgGgDgOgBIgXAAQgJABgGgCQgJAFgEAFgAgQhBQgFACgEAEQgEADgCAGQgCAFAAAGQAAAGACAGQACAEAEAEQAEAEAFACQAFACAGAAQAFAAAFgCQAFgCAEgEQAEgEACgEQACgGAAgGQAAgGgCgFQgCgGgEgDQgEgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_811.setTransform(529,275.5);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#000000").s().p("AgKAzIgNgDQgLgEgLgHIAFgGQAKAGAJAEIANADIANABQAIAAAGgCQAFgBAEgDQAEgDACgDQACgEAAgEQgBgJgFgDIgKgGIgTgFQgJgCgHgBQgIgDgFgDQgFgDgDgFQgDgFAAgFQAAgFADgGQACgFAFgDQAFgDAHgCQAIgDAJAAQAKAAALADQAKAEAHAGIgFAHQgHgGgIgDQgJgDgJAAQgIAAgGACQgFABgEADQgDACgCAEQgBACAAAFQAAADACADQACAEAEACQAGAEASAEIAWAFQAIADAFADQAEAEACAEQACAEAAAGQAAAHgDAEQgDAGgFADQgGAFgHABQgIADgKAAIgOgCg");
	this.shape_812.setTransform(503.3,273.2);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#000000").s().p("AgOAyQgKgEgHgHQgHgHgEgKIgEgKIgBgMQAAgLAFgKQADgJAIgIQAGgGAKgEQAIgEAKAAQAKAAAJADQAHAEAGAGQAHAFACAKQAEAIAAALIAAAHIhWAAQABAKAEAJQADAHAHAGQAFAFAIADQAIADAIAAQAJAAAJgDQAIgDAIgFIADAHQgHAGgJADQgJADgNAAQgKAAgJgDgAAogFQgBgKgDgHQgDgIgFgEQgEgFgHgCQgHgDgHAAQgGAAgIADQgGADgGAEQgGAFgDAHQgEAHgBAKIBNAAIAAAAg");
	this.shape_813.setTransform(490.9,273.2);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#000000").s().p("AgNAyQgKgEgHgHQgIgHgEgKQgDgGgBgPQAAgIAEgPQAFgJAHgHQAIgHAKgEQAKgDAKAAQAIAAANAFQAIAEAHAGIgFAHQgHgGgHgEQgIgDgJAAQgJAAgIADQgIADgHAGQgGAGgDAIQgDAJAAAJQAAAJADAJQADAIAGAFQAGAHAJACQAIAEAJAAQAKAAAJgEQAIgEAHgGIAFAGQgIAIgKAEQgOAEgHAAQgLAAgKgDg");
	this.shape_814.setTransform(453.2,273.2);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#000000").s().p("AATBJIAAhcIgxAAIAAgIIA6AAIAABkgAAPg2QgDgDAAgFQAAgEADgDQACgDAFAAQAEAAADADQACADAAAEQAAAFgCADQgDACgEAAQgFAAgCgCg");
	this.shape_815.setTransform(439.2,270.9);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#000000").s().p("AAhBLIAAg9QABgIgCgGQgCgGgDgEQgEgEgFgCQgFgCgIAAIgJABIgJAEQgIAFgLALIAABIIgKAAIAAiWIAKAAIAAAsIgBAaIABAAQAKgKAIgGQAFgDAGgBQAEgCAFAAQAKAAAGADQAHACAFAFQAEAFADAIQACAGAAAKIAAA/g");
	this.shape_816.setTransform(428,270.7);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#000000").s().p("AgsBLIAAiSIAIAAIABAOIABAAQAIgHAJgEQALgGAIAAQAKAAAJAFQAIADAFAHQAFAGADAKQADAJAAAMQAAAMgEAKQgEAKgHAHQgFAHgKAEQgIADgJABQgHgBgJgDQgKgEgGgHIgBAAIABAVIAAAlgAgPg8QgLAEgIAJIAAA3QAHAIALAEQAHADAHAAQAIAAAGgDQAIgDAEgGQAGgHACgHQADgIAAgLQAAgJgCgIQgCgIgEgGQgEgGgGgDQgIgDgIAAQgHAAgJAFg");
	this.shape_817.setTransform(415.6,275.3);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#000000").s().p("AgUAzQgHgCgFgCQgFgEgCgFQgDgGAAgHQAAgIAEgGQAEgGAKgFQAJgEAPgDQANgDAVgCQAAgGgCgFQgBgHgEgEQgDgEgGgDQgGgCgIAAIgKABIgLADQgJADgHAGIgFgHQAIgGAKgEIANgDIAMgCQAKAAAHADQAHADAFAGQAFAEACAIQACAHAAAIIAAA/IgIAAIgBgPIAAAAQgKAIgKAFQgOAFgHAAQgHAAgGgCgAACAAQgMACgIADQgIAEgEAFQgDAEAAAHQAAAFACAEQACAEAFACQAFADANACQAJAAAKgFQAKgEALgJIAAgfQgTABgNADg");
	this.shape_818.setTransform(402.5,273.2);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#000000").s().p("AgmA0IAAhkIAIAAIACAZIAJgLQAFgFAGgEQAGgEAGgCQAHgCAHAAIALABQAFABAFADIgDAIQgKgEgJAAIgMACQgGACgFADQgGAEgFAGQgGAGgFAJIAAA+g");
	this.shape_819.setTransform(390.9,273);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#000000").s().p("AgDBGIgLgDIgKgGIgIgJQgEgEgDgGIgFgMQgCgJgCgVQAAgKAEgTIAGgMIAHgKQADgFAFgEIAKgGQAGgCAGgBQAFgCAHAAQAJAAANAGQAIAEAHAHIgGAGQgGgGgHgEQgIgEgKAAQgLAAgJAEQgJAFgGAIQgHAIgDAMQgEALAAAOQAAAOADAMQAEALAGAJQAGAIAJAEQAJAFALAAQAJAAAIgDQAIgDAFgFIAAgrIggAAIAAgIIApAAIAAA3QgHAHgKAEQgOAFgJAAQgHAAgFgCg");
	this.shape_820.setTransform(377.2,271.3);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#000000").s().p("AATBJIAAhcIgxAAIAAgIIA6AAIAABkgAAPg2QgDgDAAgFQAAgEADgDQACgDAFAAQAEAAADADQACADAAAEQAAAFgCADQgDACgEAAQgFAAgCgCg");
	this.shape_821.setTransform(464.4,235.9);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#000000").s().p("AAhA0IAAg9QAAgIgBgHQgCgGgDgEQgEgEgFgCQgFgCgIAAIgJABIgJAEQgIAFgLAMIAABIIgKAAIAAhkIAIAAIABATIABAAQAKgKAIgFIAKgFQAFgCAFAAQAKAAAGADQAHACAFAFQAEAFACAIQADAIAAAKIAAA+g");
	this.shape_822.setTransform(541.4,201);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#000000").s().p("AguBFIAAiJIAgAAQAIAAAGABQAHABAGADIAKAGQAFADAEAEIAHAKIAFAMQADASAAAKQgBAUgCAIIgFAMQgDAGgEAEIgJAIIgKAGIgNAEIgOABgAgkA9IAVAAQAHAAAGgBIAKgDIAJgGIAIgHQAGgIADgMQADgLAAgNQAAgNgDgLQgDgLgGgIIgIgHIgJgGIgKgDIgNgBIgVAAg");
	this.shape_823.setTransform(428.2,199.2);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#000000").s().p("AAhA0IAAg9QABgIgCgHQgCgGgDgEQgEgEgFgCQgFgCgIAAIgJABIgJAEQgIAFgLAMIAABIIgKAAIAAhkIAIAAIABATIABAAQAKgKAIgFIAKgFQAFgCAFAAQAKAAAHADQAGACAFAFQAEAFACAIQADAIAAAKIAAA+g");
	this.shape_824.setTransform(591.8,307.3);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#000000").s().p("AgSAxQgJgDgHgHQgGgHgEgKQgEgKAAgLQAAgMAEgLQAEgJAGgHQAHgHAJgEQAJgDAJAAQAKAAAJADQAJAEAGAHQAIAHADAJQAEALAAAMQAAALgEAKQgDAKgIAHQgGAHgJADQgJAEgKAAQgJAAgJgEgAgOgpQgIAEgFAGQgGAGgCAIQgDAJAAAJQAAAJADAJQACAHAGAGQAFAHAIACQAGAEAIAAQAIAAAHgEQAIgCAFgHQAFgGADgHQADgJAAgJQAAgJgDgJQgDgIgFgGQgFgGgIgEQgHgCgIAAQgIAAgGACg");
	this.shape_825.setTransform(579,307.5);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#000000").s().p("AgUAzQgHgCgFgCQgFgEgCgFQgDgGAAgHQAAgIAEgGQAEgHAKgEQAJgEAPgDQANgDAVgCQAAgGgCgFQgBgGgEgFQgDgEgGgDQgGgCgIAAIgKABIgLADQgJADgHAGIgFgHQAIgGAKgEIANgDIAMgCQAKAAAHADQAHADAFAFQAFAFACAIQACAGAAAJIAAA/IgIAAIgBgOIAAAAQgKAHgKAFQgOAFgHAAQgHAAgGgCgAACAAQgMABgIAEQgIAEgEAFQgDAEAAAHQAAAFACAEQACAEAFACQAFADANACQAJAAAKgFQAKgEALgJIAAggQgTACgNADg");
	this.shape_826.setTransform(541.1,307.5);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#000000").s().p("AAoA0IAAhHQAAgMgDgFQgEgGgHAAQgHAAgFAFQgEAEgFAKIAABLIgJAAIAAhHQAAgMgDgFQgDgGgIAAQgHAAgFAFQgEAEgFAKIAABLIgKAAIAAhkIAJAAIABAOIAAAAQAFgJAEgDQAGgFAIAAQAIAAAFAFQAEAEACAJQAGgJAFgEQAGgFAIAAQAFAAAEACQAEACADAEQADAEABAFQABAGABAIIAABIg");
	this.shape_827.setTransform(528.8,307.3);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#000000").s().p("AArBFIgQgvIg2AAIgQAvIgKAAIAxiJIAJAAIAwCJgAAYAOIgIgZQgKgcgGgUIAAAAIgOAwIgJAZIAvAAg");
	this.shape_828.setTransform(490.8,305.6);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#000000").s().p("AgmA0IAAhkIAIAAIACAZIAJgLQAFgFAGgEQAGgEAGgCQAHgCAHAAIALABQAFABAFADIgDAIQgKgEgJAAIgMACQgGACgFADQgGAEgFAGIgLAPIAAA+g");
	this.shape_829.setTransform(466.5,307.3);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#000000").s().p("AgOAxQgKgDgHgHQgHgHgEgKIgEgKIgBgMQAAgLAFgKQADgJAIgIQAGgGAKgEQAIgEAKAAQAKAAAJADQAHAEAGAFQAHAHACAJQAEAIAAALIAAAHIhWAAQABAKAEAJQADAHAHAGQAFAGAIACQAIADAIAAQAJAAAJgDQAIgCAIgGIADAHQgHAFgJADQgJAEgMAAQgLAAgJgEgAAogFQgBgKgDgHQgDgIgFgEQgEgFgHgCQgHgDgHAAQgGAAgIADQgGADgGAEQgGAFgDAHQgEAHgBAKIBNAAIAAAAg");
	this.shape_830.setTransform(453.1,307.5);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#000000").s().p("AAABBQgFgCgEgGQgEgFgDgIQgBgHAAgJIAAg2IgeAAIAAgHIAegBIABghIAIAAIAAAhIA0AAIAAAIIg0AAIAAA3IABANQABAGAEAEQACAEAGACQAFACAIAAQAHAAAIgBIAMgEIACAHQgHADgGACQgJABgIAAQgKAAgIgDg");
	this.shape_831.setTransform(440.6,305.9);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#000000").s().p("AgWAxQgHgCgEgFQgEgFgDgIQgCgIAAgKIAAg+IAJAAIAAA9QAAAIACAHQACAGADAEQADAEAGACQAFACAIAAIAJgBQAFgBAEgDQAGgEANgOIAAhHIAKAAIAABkIgIAAIgBgTIgBAAQgJAKgJAGIgKAEQgFACgGAAQgJAAgHgDg");
	this.shape_832.setTransform(427.6,307.6);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#000000").s().p("AgsBLIAAiSIAIAAIABAOIABAAQAIgHAJgEQALgGAIAAQAKAAAJAFQAIADAFAHQAFAGADAKQADAKAAALQAAAMgEAKQgEAKgHAHQgFAHgKAEQgIADgJAAQgHAAgJgDQgKgEgGgHIgBAAIABAVIAAAlgAgPg8QgLAEgIAJIAAA3QAHAIALAEQAHADAHAAQAIAAAGgDQAIgEAEgFQAGgHACgHQADgJAAgKQAAgJgCgIQgCgIgEgFQgEgHgGgDQgIgDgIAAQgHAAgJAFg");
	this.shape_833.setTransform(415.6,309.6);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#000000").s().p("AAoA0IAAhHQAAgMgDgFQgEgGgHAAQgHAAgFAFQgEAEgGAKIAABLIgIAAIAAhHQAAgMgDgFQgDgGgIAAQgHAAgFAFQgEAEgFAKIAABLIgKAAIAAhkIAJAAIAAAOIABAAQAFgJAEgDQAGgFAIAAQAIAAAFAFQAEAEACAJQAGgJAFgEQAGgFAIAAQAFAAAEACQAEACADAEQADAEABAFQABAGAAAIIAABIg");
	this.shape_834.setTransform(402.8,307.3);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#000000").s().p("AgSAxQgIgDgIgHQgGgHgEgKQgEgKAAgLQAAgMAEgLQAEgJAGgHQAIgHAIgEQAJgDAJAAQAKAAAJADQAIAEAHAHQAIAHADAJQAEALAAAMQAAALgEAKQgDAKgIAHQgHAHgIADQgJAEgKAAQgJAAgJgEgAgOgpQgIAEgFAGQgGAGgCAIQgDAJAAAJQAAAJADAJQACAHAGAGQAFAHAIACQAGAEAIAAQAIAAAHgEQAIgCAFgHQAFgGADgHQADgJAAgJQAAgJgDgJQgDgIgFgGQgFgGgIgEQgHgCgIAAQgIAAgGACg");
	this.shape_835.setTransform(390,307.5);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#000000").s().p("AgDBGQgGgBgFgCIgKgGIgIgJQgEgEgDgGIgFgMIgEgOIgBgQQAAgKAFgTIAFgMIAHgKIAIgJIAKgGIAMgDQAFgCAHAAQAIAAANAFQAJAFAGAHIgGAGQgGgGgHgEQgIgEgJAAQgKAAgKAEQgJAFgGAIQgHAIgDAMQgEALAAAOQAAAOAEAMQADALAHAJQAGAIAJAEQAJAFAKAAQALAAAIgEQAIgEAIgJIAGAGQgLALgHADQgFADgGABQgGACgHAAIgLgCg");
	this.shape_836.setTransform(377.5,305.6);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#000000").s().p("AATBJIAAhcIgxAAIAAgIIA6AAIAABkgAAPg2QgDgDAAgFQAAgEADgDQACgDAFAAQAEAAADADQACADAAAEQAAAFgCADQgDACgEAAQgFAAgCgCg");
	this.shape_837.setTransform(439.2,270.9);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#000000").s().p("AAhA0IAAg9QABgIgCgHQgCgGgDgEQgEgEgFgCQgFgCgIAAIgJABIgJAEQgIAFgLAMIAABIIgKAAIAAhkIAIAAIABATIABAAQAKgKAIgFIAKgFQAFgCAFAAQAKAAAGADQAHACAFAFQAEAFADAIQACAIAAAKIAAA+g");
	this.shape_838.setTransform(491,238);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#000000").s().p("AATBJIAAhcIgxAAIAAgIIA6AAIAABkgAAPg2QgDgDAAgFQAAgEADgDQACgDAFAAQAEAAADADQACADAAAEQAAAFgCADQgDACgEAAQgFAAgCgCg");
	this.shape_839.setTransform(464.4,235.9);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#000000").s().p("AAABBQgFgCgEgGQgEgFgDgIQgBgHAAgJIAAg2IgeAAIAAgHIAegBIABghIAIAAIAAAhIA1AAIAAAIIg1AAIAAA3IABANQABAGAEAEQACAEAGACQAFACAIAAQAHAAAIgBIAMgEIACAHQgHADgGACQgJABgIAAQgKAAgIgDg");
	this.shape_840.setTransform(554,199.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_794,p:{y:198.7}},{t:this.shape_793},{t:this.shape_792,p:{y:198.2}},{t:this.shape_791,p:{y:198.7,x:428.2}},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787,p:{y:198.2}},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784,p:{y:200.5}},{t:this.shape_783},{t:this.shape_782,p:{y:200.5}},{t:this.shape_781,p:{y:199.1}}]},518).to({state:[{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807,p:{y:199.2}},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_787,p:{y:198.7}},{t:this.shape_803},{t:this.shape_802},{t:this.shape_784,p:{y:201}},{t:this.shape_801},{t:this.shape_782,p:{y:201}},{t:this.shape_781,p:{y:199.6}},{t:this.shape_794,p:{y:236.3}},{t:this.shape_800},{t:this.shape_792,p:{y:235.8}},{t:this.shape_791,p:{y:236.3,x:428.2}},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797,p:{x:464.4,y:235.9}},{t:this.shape_796},{t:this.shape_795,p:{x:491,y:238}}]},6).to({state:[{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_823},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_787,p:{y:198.7}},{t:this.shape_803},{t:this.shape_802},{t:this.shape_784,p:{y:201}},{t:this.shape_801},{t:this.shape_822},{t:this.shape_781,p:{y:199.6}},{t:this.shape_794,p:{y:236.3}},{t:this.shape_800},{t:this.shape_792,p:{y:235.8}},{t:this.shape_807,p:{y:236.3}},{t:this.shape_799},{t:this.shape_798},{t:this.shape_821,p:{x:464.4,y:235.9}},{t:this.shape_796},{t:this.shape_795,p:{x:491,y:238}},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815,p:{x:439.2,y:270.9}},{t:this.shape_814},{t:this.shape_791,p:{y:271.3,x:478.6}},{t:this.shape_813},{t:this.shape_812},{t:this.shape_797,p:{x:514.8,y:270.9}},{t:this.shape_811},{t:this.shape_782,p:{y:273}}]},6).to({state:[{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_823},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_787,p:{y:198.7}},{t:this.shape_803},{t:this.shape_802},{t:this.shape_784,p:{y:201}},{t:this.shape_801},{t:this.shape_822},{t:this.shape_840},{t:this.shape_794,p:{y:236.3}},{t:this.shape_800},{t:this.shape_792,p:{y:235.8}},{t:this.shape_807,p:{y:236.3}},{t:this.shape_799},{t:this.shape_798},{t:this.shape_839},{t:this.shape_796},{t:this.shape_838},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_837},{t:this.shape_814},{t:this.shape_791,p:{y:271.3,x:478.6}},{t:this.shape_813},{t:this.shape_812},{t:this.shape_821,p:{x:514.8,y:270.9}},{t:this.shape_811},{t:this.shape_782,p:{y:273}},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_795,p:{x:503.6,y:307.3}},{t:this.shape_815,p:{x:514.8,y:305.2}},{t:this.shape_827},{t:this.shape_826},{t:this.shape_781,p:{y:305.9}},{t:this.shape_797,p:{x:565.2,y:305.2}},{t:this.shape_825},{t:this.shape_824}]},6).to({state:[]},114).wait(694));

	// Curs_highlight
	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#FFFFFF").s().p("AvtCGIAAkLIfbAAIAAELg");
	this.shape_841.setTransform(461.7,200.5);
	this.shape_841._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_841).wait(544).to({_off:false},0).wait(8).to({y:238.5},0).wait(16).to({y:272.5},0).wait(8).to({scaleX:1.21,x:483.1,y:307.5},0).wait(5).to({scaleX:1,x:461.7,y:200.5},0).to({_off:true},69).wait(694));

	// Lines2
	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#000000").ss(1,1,1).p("ABkAAIjHAA");
	this.shape_842.setTransform(351,136);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f().s("#000000").ss(1,1,1).p("AAAlgIAALB");
	this.shape_843.setTransform(341,171.3);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("#000000").ss(1,1,1).p("AhjAAIDHAA");
	this.shape_844.setTransform(351.1,206.1);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f().s("#000000").ss(1,1,1).p("AAAiuIAAFd");
	this.shape_845.setTransform(341.1,223.6);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("#000000").ss(1,1,1).p("AAAi4IAAFx");
	this.shape_846.setTransform(341.1,224.6);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f().s("#000000").ss(1,1,1).p("AhjAAIDHAA");
	this.shape_847.setTransform(351.1,206.1);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("#000000").ss(1,1,1).p("AAAizIAAFn");
	this.shape_848.setTransform(341.1,261.1);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f().s("#000000").ss(1,1,1).p("AhjAAIDHAA");
	this.shape_849.setTransform(351.1,206.1);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("#000000").ss(1,1,1).p("AAAiaIAAE1");
	this.shape_850.setTransform(341.1,294.6);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f().s("#000000").ss(1,1,1).p("AAAinIAAFP");
	this.shape_851.setTransform(341.1,295.8);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#000000").ss(1,1,1).p("AhjAAIDHAA");
	this.shape_852.setTransform(351.1,206.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_842}]},509).to({state:[{t:this.shape_842},{t:this.shape_843}]},3).to({state:[{t:this.shape_842},{t:this.shape_843},{t:this.shape_844,p:{y:206.1,x:351.1}}]},3).to({state:[{t:this.shape_842},{t:this.shape_843},{t:this.shape_844,p:{y:206.1,x:351.1}},{t:this.shape_845}]},3).to({state:[{t:this.shape_842},{t:this.shape_843},{t:this.shape_847,p:{y:206.1}},{t:this.shape_846},{t:this.shape_844,p:{y:243.1,x:351.1}}]},3).to({state:[{t:this.shape_842},{t:this.shape_843},{t:this.shape_847,p:{y:206.1}},{t:this.shape_846},{t:this.shape_844,p:{y:243.1,x:351.1}},{t:this.shape_848}]},3).to({state:[{t:this.shape_842},{t:this.shape_843},{t:this.shape_849,p:{y:206.1}},{t:this.shape_846},{t:this.shape_847,p:{y:243.1}},{t:this.shape_848},{t:this.shape_844,p:{y:279.1,x:351.1}}]},3).to({state:[{t:this.shape_842},{t:this.shape_843},{t:this.shape_849,p:{y:206.1}},{t:this.shape_846},{t:this.shape_847,p:{y:243.1}},{t:this.shape_848},{t:this.shape_850},{t:this.shape_844,p:{y:279.1,x:351}}]},3).to({state:[{t:this.shape_842},{t:this.shape_843},{t:this.shape_852},{t:this.shape_846},{t:this.shape_849,p:{y:243.1}},{t:this.shape_848},{t:this.shape_851},{t:this.shape_847,p:{y:313.1}},{t:this.shape_844,p:{y:279.1,x:351.1}}]},3).to({state:[]},117).wait(694));

	// Lines
	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f().s("#000000").ss(1,1,1).p("AHMABIqngBIjwAB");
	this.shape_853.setTransform(836.2,254);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("#000000").ss(1,1,1).p("AHMABIjiAAInFgBIjwAB");
	this.shape_854.setTransform(836.2,254);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f().s("#000000").ss(1,1,1).p("AnJgrIDtgBIHEBZIDjAA");
	this.shape_855.setTransform(836.3,249.6);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("#000000").ss(1,1,1).p("AnIhXIDqgBIHECxIDjAA");
	this.shape_856.setTransform(836.5,245.2);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f().s("#000000").ss(1,1,1).p("AnGiDIDngBIHEEJIDjAA");
	this.shape_857.setTransform(836.6,240.7);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("#000000").ss(1,1,1).p("AnFiwIDkAAIHFFhIDiAA");
	this.shape_858.setTransform(836.8,236.3);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f().s("#000000").ss(1,1,1).p("AnEjcIDhgBIHFG7IDjAA");
	this.shape_859.setTransform(836.9,231.9);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#000000").ss(1,1,1).p("AnCkIIDegBIHFITIDiAA");
	this.shape_860.setTransform(837.1,227.5);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f().s("#000000").ss(1,1,1).p("AnAk1IDaAAIHFJrIDiAA");
	this.shape_861.setTransform(837.2,223.1);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("#000000").ss(1,1,1).p("Am/lhIDXAAIHFLDIDjAA");
	this.shape_862.setTransform(837.4,218.6);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f().s("#000000").ss(1,1,1).p("Am9mNIDUAAIHFMcIDiAA");
	this.shape_863.setTransform(837.5,214.2);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("#000000").ss(1,1,1).p("Am8m6IDRAAIHFN1IDjAA");
	this.shape_864.setTransform(837.7,209.8);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f().s("#000000").ss(1,1,1).p("Am6nmIDOAAIHFPNIDiAA");
	this.shape_865.setTransform(837.8,205.4);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("#000000").ss(1,1,1).p("Am5oSIDLAAIHFQlIDjAA");
	this.shape_866.setTransform(838,201);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f().s("#000000").ss(1,1,1).p("AG4I/IjiAAInFx9IjIAA");
	this.shape_867.setTransform(838.1,196.5);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("#000000").ss(1,1,1).p("Anuo+IDIAAIIyR9IDiAA");
	this.shape_868.setTransform(832.7,196.5);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f().s("#000000").ss(1,1,1).p("Aoko+IDIAAIKfR9IDiAA");
	this.shape_869.setTransform(827.3,196.5);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("#000000").ss(1,1,1).p("Apao+IDIAAIMLR9IDiAA");
	this.shape_870.setTransform(821.8,196.5);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f().s("#000000").ss(1,1,1).p("AqRo+IDIAAIN4R9IDjAA");
	this.shape_871.setTransform(816.4,196.5);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("#000000").ss(1,1,1).p("ArHo+IDIAAIPkR9IDjAA");
	this.shape_872.setTransform(811,196.5);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f().s("#000000").ss(1,1,1).p("Ar9o+IDIAAIRRR9IDiAA");
	this.shape_873.setTransform(805.5,196.5);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("#000000").ss(1,1,1).p("As0o+IDIAAIS+R9IDjAA");
	this.shape_874.setTransform(800.1,196.5);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f().s("#000000").ss(1,1,1).p("ANrI/IjiAAI0rx9IjIAA");
	this.shape_875.setTransform(794.6,196.5);
	this.shape_875._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_853}]},485).to({state:[{t:this.shape_854}]},3).to({state:[{t:this.shape_855}]},1).to({state:[{t:this.shape_856}]},1).to({state:[{t:this.shape_857}]},1).to({state:[{t:this.shape_858}]},1).to({state:[{t:this.shape_859}]},1).to({state:[{t:this.shape_860}]},1).to({state:[{t:this.shape_861}]},1).to({state:[{t:this.shape_862}]},1).to({state:[{t:this.shape_863}]},1).to({state:[{t:this.shape_864}]},1).to({state:[{t:this.shape_865}]},1).to({state:[{t:this.shape_866}]},1).to({state:[{t:this.shape_867}]},1).to({state:[{t:this.shape_868}]},1).to({state:[{t:this.shape_869}]},1).to({state:[{t:this.shape_870}]},1).to({state:[{t:this.shape_871}]},1).to({state:[{t:this.shape_872}]},1).to({state:[{t:this.shape_873}]},1).to({state:[{t:this.shape_874}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_875}]},1).to({state:[]},1).wait(694));
	this.timeline.addTween(cjs.Tween.get(this.shape_875).wait(509).to({_off:false},0).wait(140).to({_off:true},1).wait(694));

	// Text AreasOfExp
	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#000000").s().p("AA+BjIgXhEIhNAAIgYBEIgOAAIBGjFIANAAIBFDFgAAjATIgNgkQgNgogIgcIgBAAIgWBEIgMAkIBFAAg");
	this.shape_876.setTransform(467.1,253.2);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#000000").s().p("AgVBGQgOgEgKgLQgKgJgGgOIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgGQANgEANAAQAPAAAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAGgRAAQgPgBgOgFgAA4gJQAAgNgFgKQgEgKgHgIQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_877.setTransform(773.2,255.9);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#000000").s().p("Ag2BKIAAiPIAMAAIABAjIABAAQAFgJAHgHQAIgHAIgFQAJgFAIgDQALgDAKAAIAPABQAIACAGADIgEAMQgOgFgNAAQgJAAgJACQgHADgJAFQgHAGgIAIQgJAJgGAMIAABZg");
	this.shape_878.setTransform(486.5,255.7);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#000000").s().p("AgVBGQgOgEgKgLQgKgJgGgOIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgGQANgEANAAQAPAAAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAGgRAAQgPgBgOgFgAA4gJQAAgNgFgKQgEgKgHgIQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_879.setTransform(629.2,255.9);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#000000").s().p("AgdBJQgJgCgHgFQgIgFgDgIQgFgHAAgKQAAgMAHgJQAGgJANgGQAOgGAVgFQATgDAegDQAAgKgCgIQgDgIgEgGQgGgHgIgDQgIgEgMAAQgHAAgIACIgPAFQgNAFgLAHIgGgKQALgHAPgGIASgGQAJgBAIAAQAOAAALADQAKAFAHAIQAHAHADAKQADAKAAAMIAABbIgLAAIgCgVIAAAAQgOALgPAGQgUAIgLAAQgJAAgJgDgAADgBQgSADgLAFQgLAFgFAIQgFAHAAAIQAAAIADAGQADAFAGAEQAHAEAUACQANAAAOgGQAPgHAPgNIAAgtQgcACgSAEg");
	this.shape_880.setTransform(521,255.9);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#000000").s().p("AAzBIIgfgnIgUgbIAAAAIgUAbIgfAnIgOAAIA6hJIg1hGIAPAAIAcAkIARAZIABAAIATgZIAbgkIAPAAIg2BGIA6BJg");
	this.shape_881.setTransform(647.1,255.9);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#000000").s().p("AAbBoIAAiDIhHAAIAAgMIBVAAIAACPgAAVhOQgEgEgBgGQABgHAEgEQADgEAHAAQAFAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgFAAQgHAAgDgEg");
	this.shape_882.setTransform(735.5,252.7);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#000000").s().p("AgaBGQgNgEgJgKQgKgKgFgOQgGgOAAgSQAAgRAGgOQAFgOAKgKQAJgKANgFQAMgEAOAAQAPAAAMAEQAMAFAKAKQAKAKAFAOQAGAOAAARQAAASgGAOQgFAOgKAKQgKAKgMAEQgMAFgPABQgOgBgMgFgAgWg6QgJAFgIAIQgHAIgFAMQgEAMAAANQAAAOAEAMQAFAMAHAIQAIAJAJAFQALAEALAAQAMAAAKgEQAKgFAIgJQAHgIAFgMQAEgMAAgOQAAgNgEgMQgFgMgHgIQgIgIgKgFQgKgFgMAAQgLAAgLAFg");
	this.shape_883.setTransform(575.1,255.9);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#000000").s().p("AgOBKIgTgFQgRgGgOgKIAHgKQANAKAOAGIARADIAUACQALAAAJgCQAIgDAFgEQAGgDADgGQADgEAAgHQgCgMgHgFQgFgEgKgEIgbgHIgYgFQgLgEgHgFQgHgFgEgGQgEgHAAgHQAAgIAEgHQADgHAHgFQAHgGALgDQALgCANAAQAOAAAPAEQAPAGALAHIgHAKQgKgIgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFAEgCAEQgCAFAAAFQAAAFADAFQADAEAGAEQAHAFAbAGQATAEAMAEQAMAEAHAFQAGAFADAHQACAFAAAJQAAAIgEAIQgEAHgHAFQgIAGgLADQgLAEgOAAIgUgCg");
	this.shape_884.setTransform(539,255.9);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#000000").s().p("AgVBGQgOgEgKgLQgKgJgGgOIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgGQANgEANAAQAPAAAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAGgRAAQgPgBgOgFgAA4gJQAAgNgFgKQgEgKgHgIQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_885.setTransform(629.2,255.9);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#000000").s().p("AgVBGQgOgEgKgLQgKgJgGgOIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgGQANgEANAAQAPAAAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAGgRAAQgPgBgOgFgAA4gJQAAgNgFgKQgEgKgHgIQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_886.setTransform(503.2,255.9);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#000000").s().p("Ag2BKIAAiPIAMAAIABAjIABAAQAFgJAHgHQAIgHAIgFQAJgFAIgDQALgDAKAAIAPABQAIACAGADIgEAMQgOgFgNAAQgJAAgJACQgHADgJAFQgHAGgIAIQgJAJgGAMIAABZg");
	this.shape_887.setTransform(486.5,255.7);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#000000").s().p("AgZBuIAAiEIgrAAIAAgKIArgBIAAgSQABgNADgLQADgLAHgHQAHgIAIgEQALgEANAAQAKAAAKACQALACAKAFIgFAKQgKgEgHgCQgIgBgKAAQgLAAgJADQgHADgEAGQgFAGgCAJQgDAIAAAKIAAATIBCAAIAAALIhCAAIAACEg");
	this.shape_888.setTransform(594.4,252.1);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#000000").s().p("Ag/BqIAAjQIALAAIACAVIAAAAQAMgLAOgGQAPgHAMAAQAPAAAMAFQALAFAIAKQAHAJAEAOQAEANAAARQAAASgFAOQgFAOgKAKQgJAKgNAGQgMAFgMAAQgLAAgNgGQgOgFgKgKIgBAAIABAeIAAA0gAgXhXQgOAHgNANIAABPQAMALAOAFQALAFAKAAQALAAAKgFQAKgEAHgJQAHgJAEgLQAEgMAAgPQAAgNgDgLQgDgMgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAHg");
	this.shape_889.setTransform(665.6,258.9);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#000000").s().p("AgOBKIgTgFQgRgGgOgKIAHgKQANAKAOAGIARADIAUACQALAAAJgCQAIgDAFgEQAGgDADgGQADgEAAgHQgCgMgHgFQgFgEgKgEIgbgHIgYgFQgLgEgHgFQgHgFgEgGQgEgHAAgHQAAgIAEgHQADgHAHgFQAHgGALgDQALgCANAAQAOAAAPAEQAPAGALAHIgHAKQgKgIgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFAEgCAEQgCAFAAAFQAAAFADAFQADAEAGAEQAHAFAbAGQATAEAMAEQAMAEAHAFQAGAFADAHQACAFAAAJQAAAIgEAIQgEAHgHAFQgIAGgLADQgLAEgOAAIgUgCg");
	this.shape_890.setTransform(539,255.9);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#000000").s().p("AABBdQgJgEgGgHQgGgIgDgKQgCgLAAgNIAAhNIgsAAIAAgLIAsgBIACgwIALAAIAAAwIBMAAIAAAMIhMAAIAABOQAAALACAIQACAJAEAFQAEAGAIADQAHADANAAQAKAAAKgCIARgFIAFAKQgMAEgJACQgLADgMAAQgPAAgKgFg");
	this.shape_891.setTransform(719.4,253.7);

	this.instance_23 = new lib.Tween3("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(620.2,252.4);
	this.instance_23._off = true;

	this.instance_24 = new lib.Tween4("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(620.2,133.4);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_876}]},440).to({state:[{t:this.shape_876},{t:this.shape_877}]},2).to({state:[{t:this.shape_876},{t:this.shape_878,p:{x:486.5}},{t:this.shape_877}]},3).to({state:[{t:this.shape_876},{t:this.shape_878,p:{x:486.5}},{t:this.shape_879,p:{x:629.2}},{t:this.shape_877}]},3).to({state:[{t:this.shape_876},{t:this.shape_878,p:{x:486.5}},{t:this.shape_880},{t:this.shape_879,p:{x:629.2}},{t:this.shape_877}]},3).to({state:[{t:this.shape_876},{t:this.shape_878,p:{x:486.5}},{t:this.shape_880},{t:this.shape_879,p:{x:629.2}},{t:this.shape_881},{t:this.shape_877}]},3).to({state:[{t:this.shape_876},{t:this.shape_878,p:{x:486.5}},{t:this.shape_880},{t:this.shape_879,p:{x:629.2}},{t:this.shape_881},{t:this.shape_882},{t:this.shape_877}]},3).to({state:[{t:this.shape_876},{t:this.shape_878,p:{x:486.5}},{t:this.shape_880},{t:this.shape_883},{t:this.shape_879,p:{x:629.2}},{t:this.shape_881},{t:this.shape_882},{t:this.shape_877}]},3).to({state:[{t:this.shape_876},{t:this.shape_878,p:{x:486.5}},{t:this.shape_880},{t:this.shape_884,p:{x:539}},{t:this.shape_883},{t:this.shape_879,p:{x:629.2}},{t:this.shape_881},{t:this.shape_882},{t:this.shape_877}]},3).to({state:[{t:this.shape_876},{t:this.shape_878,p:{x:486.5}},{t:this.shape_880},{t:this.shape_884,p:{x:539}},{t:this.shape_883},{t:this.shape_885},{t:this.shape_881},{t:this.shape_879,p:{x:683.2}},{t:this.shape_882},{t:this.shape_877}]},3).to({state:[{t:this.shape_876},{t:this.shape_887},{t:this.shape_886},{t:this.shape_880},{t:this.shape_884,p:{x:539}},{t:this.shape_883},{t:this.shape_885},{t:this.shape_881},{t:this.shape_879,p:{x:683.2}},{t:this.shape_878,p:{x:702.5}},{t:this.shape_882},{t:this.shape_877}]},3).to({state:[{t:this.shape_876},{t:this.shape_887},{t:this.shape_886},{t:this.shape_880},{t:this.shape_884,p:{x:539}},{t:this.shape_883},{t:this.shape_888},{t:this.shape_885},{t:this.shape_881},{t:this.shape_879,p:{x:683.2}},{t:this.shape_878,p:{x:702.5}},{t:this.shape_882},{t:this.shape_877}]},3).to({state:[{t:this.shape_876},{t:this.shape_887},{t:this.shape_886},{t:this.shape_880},{t:this.shape_890},{t:this.shape_883},{t:this.shape_888},{t:this.shape_885},{t:this.shape_881},{t:this.shape_889},{t:this.shape_879,p:{x:683.2}},{t:this.shape_878,p:{x:702.5}},{t:this.shape_882},{t:this.shape_884,p:{x:755}},{t:this.shape_877}]},3).to({state:[{t:this.shape_876},{t:this.shape_887},{t:this.shape_886},{t:this.shape_880},{t:this.shape_890},{t:this.shape_883},{t:this.shape_888},{t:this.shape_885},{t:this.shape_881},{t:this.shape_889},{t:this.shape_879,p:{x:683.2}},{t:this.shape_878,p:{x:702.5}},{t:this.shape_891},{t:this.shape_882},{t:this.shape_884,p:{x:755}},{t:this.shape_877}]},3).to({state:[{t:this.instance_23}]},10).to({state:[{t:this.instance_24}]},13).to({state:[{t:this.instance_24}]},8).to({state:[]},141).wait(694));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(488).to({_off:false},0).to({_off:true,y:133.4},13).wait(843));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(488).to({_off:false},13).to({x:531.2},8).to({_off:true},141).wait(694));

	// Text
	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#FFFFFF").s().p("Ag2BEIBghDIAAgBIhghDIAAgOIBtBMIAAALIhtBMg");
	this.shape_892.setTransform(684.2,186.1);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#FFFFFF").s().p("AgEBlQgJgCgHgDQgHgEgHgGQgHgEgFgHQgGgHgEgIIgHgSQgEgMgCgeQAAgPAHgaIAGgSIAKgPQAGgHAHgEQAHgFAHgEQAIgEAJgCQAIgBAJgBQANAAAUAJQALAFAJALIgIAJQgJgKgKgFQgLgGgPAAQgPABgNAFQgNAHgJALQgKAMgFAQQgEARgBAUQABAUAEARQAFAQAJANQAJAMANAGQANAGAOAAQAOAAALgEQALgEAIgHIAAg9IguAAIAAgMIA7AAIAABOQgKALgNAFQgWAHgNAAQgJgBgHgBg");
	this.shape_893.setTransform(720.1,186.2);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#FFFFFF").s().p("Ag2BKIAAiPIALAAIACAjIAAAAQAGgJAIgHQAHgHAJgFQAIgFAJgDQAJgDALAAIAPABQAIACAGADIgDAMQgPgFgNAAQgJAAgIACQgJADgHAFQgIAGgJAIQgIAJgHAMIAABZg");
	this.shape_894.setTransform(739.8,188.7);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_895.setTransform(756.5,188.9);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_896.setTransform(756.5,188.9);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#FFFFFF").s().p("AABBdQgJgDgGgJQgGgHgCgKQgDgLAAgNIAAhNIgrAAIAAgLIArgBIACgwIALAAIAAAwIBMAAIAAAMIhMAAIAABPQAAAKACAIQACAIAFAGQADAGAHADQAIADAMAAQALAAAKgCIASgFIADAKQgLAEgJACQgLACgNABQgOAAgKgFg");
	this.shape_897.setTransform(792.7,186.7);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#FFFFFF").s().p("AAcBoIAAiDIhIAAIAAgMIBUAAIAACPgAAVhOQgFgEAAgGQAAgHAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_898.setTransform(808.8,185.7);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#FFFFFF").s().p("AAwBKIAAhXQAAgMgCgJQgDgJgFgGQgEgGgIgDQgIgDgLAAQgHAAgGACQgHACgGAEQgLAHgRARIAABnIgNAAIAAiPIALAAIACAbIABAAQAOgPAMgHQAHgEAHgCQAHgDAIAAQAOAAAJAEQAKADAHAHQAGAIADALQADAKAAAPIAABZg");
	this.shape_899.setTransform(828.6,188.7);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#FFFFFF").s().p("AghBqQgMgDgJgGQgIgFgEgJQgFgHAAgKQAAgIAHgJQAGgKAMgGIAAgBQgHgDgDgGQgFgGAAgIQAAgIAEgGQAFgHAIgGIAAgBQgIgHgEgIQgFgKAAgMQAAgLAEgKQAEgJAIgHQAHgHAKgEQAKgEALAAQAKABAJADIA8AAIAAAMIgsAAQAHAHAFAIQAFAKAAALQAAAKgEALQgEAJgIAGQgHAHgKAEQgJADgKAAQgPAAgNgGQgGADgEAGQgEAEAAAGQAAAKAKAFQAIAEAQAAIAiAAQAOAAAKACQAKACAGAEQAHAEADAGQADAGAAAJQAAAJgGAJQgFAJgKAHQgKAHgOAEQgOAEgQAAQgRAAgNgCgAg1A0QgFAGAAAJQAAAGADAGQAEAGAGAEQAHAEAKACQALACANABQANgBAMgDQAMgCAIgGQAIgGAFgGQAEgHAAgGQAAgHgCgDQgDgEgEgDQgJgFgTAAIgiAAQgNAAgJgDQgMAHgGAJgAgXhdQgHADgGAFQgFAFgDAIQgDAHAAAJQAAAIADAIQADAHAFAGQAGAFAHADQAIACAIAAQAHAAAHgCQAHgDAGgFQAFgGADgHQAEgIAAgIQAAgJgEgHQgDgIgFgFQgGgFgHgDQgHgEgHAAQgIAAgIAEg");
	this.shape_900.setTransform(847,192.2);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#FFFFFF").s().p("AgOBKIgTgFQgRgGgOgKIAHgKQANAKAOAGIARADIAUACQALAAAJgCQAIgCAFgEQAGgEADgFQADgGAAgGQgCgMgHgFQgFgEgKgEIgbgHIgYgFQgLgEgHgFQgHgFgEgGQgEgHAAgHQAAgIAEgHQADgHAHgFQAHgFALgEQALgDANAAQAOAAAPAGQAPAFALAHIgHAKQgKgIgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFADgCAFQgCAEAAAGQAAAFADAFQADAEAGAEQAHAFAbAGQATAFAMADQAMAEAHAFQAGAFADAHQACAFAAAJQAAAIgEAHQgEAIgHAFQgIAGgLADQgLAEgOAAIgUgCg");
	this.shape_901.setTransform(864.3,188.9);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#FFFFFF").s().p("AgLBhQgGgFAAgIQAAgJAGgGQAFgEAGAAQAHAAAFAEQAGAGgBAJQABAIgGAFQgFAFgHAAQgGAAgFgFgAgDAhIgChxIAAgVIALAAIAAAVIgBBxg");
	this.shape_902.setTransform(882.4,186.2);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#FFFFFF").s().p("AgOBKIgTgGQgRgFgOgKIAHgKQANALAOAEIARAEIAUACQALAAAJgCQAIgCAFgEQAGgEADgFQADgGAAgGQgCgLgHgGQgFgEgKgEIgbgHIgYgGQgLgDgHgFQgHgFgEgGQgEgHAAgHQAAgIAEgHQADgHAHgFQAHgGALgDQALgDANAAQAOAAAPAGQAPAEALAIIgHAJQgKgHgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFADgCAFQgCAEAAAGQAAAGADAEQADAFAGADQAHAEAbAIQATAEAMADQAMAEAHAFQAGAFADAHQACAFAAAJQAAAJgEAGQgEAIgHAGQgIAFgLAEQgLADgOAAIgUgCg");
	this.shape_903.setTransform(864.3,228.6);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#FFFFFF").s().p("AghBqQgMgDgJgGQgIgFgEgJQgFgHAAgJQAAgJAHgJQAGgKAMgGIAAgBQgHgEgDgFQgFgGAAgJQAAgHAEgGQAFgHAIgGIAAgBQgIgHgEgIQgFgKAAgMQAAgLAEgKQAEgJAIgHQAHgHAKgDQAKgFALAAQAKABAJADIA8AAIAAAMIgsAAQAHAHAFAJQAFAKAAAKQAAAKgEAKQgEAKgIAGQgHAHgKADQgJAEgKAAQgPAAgNgGQgGADgEAGQgEAEAAAGQAAAKAKAFQAIAEAQAAIAiAAQAOAAAKACQAKACAGAEQAHAEADAGQADAHAAAIQAAAKgGAIQgFAJgKAHQgKAHgOAEQgOAFgQgBQgRAAgNgCgAg1A0QgFAGAAAJQAAAHADAFQAEAGAGADQAHAFAKACQALACANAAQANAAAMgDQAMgDAIgFQAIgGAFgGQAEgHAAgGQAAgHgCgDQgDgFgEgCQgJgFgTABIgiAAQgNgBgJgDQgMAHgGAJgAgXhdQgHADgGAFQgFAGgDAHQgDAHAAAJQAAAJADAHQADAHAFAGQAGAFAHADQAIACAIAAQAHAAAHgCQAHgDAGgFQAFgGADgHQAEgHAAgJQAAgJgEgHQgDgHgFgGQgGgFgHgDQgHgEgHAAQgIAAgIAEg");
	this.shape_904.setTransform(847,231.9);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#FFFFFF").s().p("AAcBoIAAiDIhIAAIAAgMIBUAAIAACPgAAVhOQgFgEAAgHQAAgGAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAGQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_905.setTransform(808.8,225.4);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#FFFFFF").s().p("AABBdQgJgDgGgJQgGgGgCgMQgDgKAAgNIAAhNIgrAAIAAgLIArgBIACgwIALAAIAAAwIBMAAIAAAMIhMAAIAABPQAAAKACAIQACAIAFAGQADAGAHADQAIADAMAAQALAAAKgCIASgFIADAKQgLAEgJACQgLACgNABQgOAAgKgFg");
	this.shape_906.setTransform(792.7,226.4);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFALQgGAKgBAMIBtAAIAAAAg");
	this.shape_907.setTransform(774.5,228.6);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFALQgGAKgBAMIBtAAIAAAAg");
	this.shape_908.setTransform(756.5,228.6);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#FFFFFF").s().p("AgEBlQgJgCgHgEQgHgDgHgGQgHgEgFgHQgGgHgEgIIgHgSQgEgMgCgeQAAgPAHgaIAGgSIAKgPQAGgHAHgEQAHgFAHgEQAIgEAJgCQAIgCAJAAQANAAAUAIQALAGAJALIgIAJQgJgKgKgFQgLgGgPABQgPAAgNAFQgNAHgJALQgKAMgFAQQgEASgBATQABAUAEARQAFAQAJANQAJALANAHQANAGAOAAQAOAAALgEQALgEAIgHIAAg+IguAAIAAgLIA7AAIAABOQgKALgNAFQgWAHgNAAQgJgBgHgBg");
	this.shape_909.setTransform(720.1,225.9);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#FFFFFF").s().p("Ag2BEIBghDIAAgBIhghDIAAgOIBtBMIAAALIhtBMg");
	this.shape_910.setTransform(684.2,186.1);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#FFFFFF").s().p("AAwBjIhNiKIgUgoIgBAAIACA4IAAB6IgOAAIAAjFIAPAAIBNCLIAUAnIABAAIgCg5IAAh5IANAAIAADFg");
	this.shape_911.setTransform(720.4,186.2);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgKgEgOQgFgOAAgSQAAgQAFgPQAGgNAJgKQAKgKAMgFQAMgFANgBQANABAMAFQALAEALALIABAAIgBgeIAAg7IANAAIAADXIgLAAIgCgVIAAAAQgLAKgMAHQgSAIgKAAQgOAAgLgGgAgQgYQgKAFgHAIQgIAJgEALQgEAMAAANQAAAOADAMQAEAMAHAJQAGAIAKAEQAJAFALAAQANAAAMgHQANgGAMgNIAAhPQgMgMgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_912.setTransform(773.8,185.5);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#FFFFFF").s().p("AgdBKQgJgDgHgFQgIgFgDgIQgFgHAAgKQAAgMAHgJQAGgJANgGQAOgGAVgFQATgDAegDQAAgKgCgIQgDgIgEgGQgGgHgIgDQgIgEgMAAQgHAAgIACIgPAEQgNAGgLAHIgGgKQALgHAPgGIASgGQAJgCAIAAQAOAAALAEQAKAFAHAIQAHAHADAKQADAKAAAMIAABbIgLAAIgCgWIAAAAQgOAMgPAGQgUAIgLAAQgJAAgJgCgAADgBQgSADgLAFQgLAGgFAHQgFAHAAAIQAAAIADAGQADAFAGAEQAHAEAUACQANAAAOgGQAPgHAPgNIAAgtQgcACgSAEg");
	this.shape_913.setTransform(810.3,188.9);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FFFFFF").s().p("AAgBIIgWhWIgKgqIAAAAIgJArIgWBVIgSAAIgkiPIANAAIAXBdIAJAlIABAAIAJglIAYhaIAOAAIAXBaIAKAlIABAAIAJglIAXhdIAMAAIgkCPg");
	this.shape_914.setTransform(846.4,188.9);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_915.setTransform(738.5,188.9);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#FFFFFF").s().p("AgaBoQgNgFgLgJIgBAAIgBAQIgLAAIAAjXIANAAIAAA+IgBAgIABAAQALgMAOgGQAPgIANAAQAPAAAMAGQALAEAIAKQAHAKAEANQAEANAAARQAAASgFAPQgFAOgKAKQgJAKgMAFQgMAGgNAAQgLgBgNgFgAgXgXQgOAIgNAMIAABPQAMAMAOAFQAMAFAKAAQAKAAAKgFQAKgEAHgKQAHgIAEgNQAEgMAAgOQAAgNgDgMQgDgKgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAGg");
	this.shape_916.setTransform(882.9,185.5);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgKgEgOQgFgOAAgSQAAgQAFgPQAGgNAJgKQAKgKAMgFQAMgFANgBQANABAMAFQALAEALALIABAAIgBgeIAAg7IANAAIAADXIgLAAIgCgVIAAAAQgLAKgMAHQgSAIgKAAQgOAAgLgGgAgQgYQgKAFgHAIQgIAJgEALQgEAMAAANQAAAOADAMQAEAMAHAJQAGAIAKAEQAJAFALAAQANAAAMgHQANgGAMgNIAAhPQgMgMgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_917.setTransform(773.8,185.5);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_918.setTransform(738.5,188.9);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#FFFFFF").s().p("AAwBKIAAhXQAAgMgCgJQgDgJgFgGQgEgGgIgDQgIgDgLAAQgHAAgGACQgHACgGAEQgLAHgRARIAABnIgNAAIAAiPIALAAIACAbIABAAQAOgPAMgHQAHgEAHgCQAHgDAIAAQAOAAAJAEQAKADAHAHQAGAIADALQADAKAAAPIAABZg");
	this.shape_919.setTransform(1008.6,188.7);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_920.setTransform(738.5,188.9);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#FFFFFF").s().p("Ag2BKIAAiPIALAAIACAjIAAAAQAGgJAIgHQAHgHAJgFQAIgFAJgDQAKgDAKAAIAPABQAIACAGADIgDAMQgPgFgNAAQgJAAgIACQgJADgHAFQgIAGgJAIQgIAJgHAMIAABZg");
	this.shape_921.setTransform(1045.8,188.7);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FFFFFF").s().p("AgNBjQgFgFAAgJQAAgIAFgGQAFgEAHgBQAGABAFAEQAGAGAAAIQAAAJgGAFQgFAFgGAAQgHAAgFgFgAgKAjQgBgIABgHQABgHAEgHQAFgHALgNQAQgPADgEQAFgFACgGQACgGAAgHQAAgHgCgFQgDgHgEgFQgFgFgIgCQgHgDgKgBQgMABgLAFQgLAEgJAKIgJgIQAKgLANgFIAOgGIAPgBQAMAAAKAEQAKADAHAGQAHAGADAIQAEAJAAAJQAAAIgDAHQgCAGgEAGQgFAHgOANQgOALgEAJQgEAGgBAFQgCAIABAHg");
	this.shape_922.setTransform(1062.1,186.1);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#FFFFFF").s().p("AgOBKIgTgGQgRgFgOgKIAHgKQANALAOAEIARAFIAUABQALAAAJgCQAIgCAFgEQAGgEADgFQADgGAAgFQgCgMgHgGQgFgEgKgEIgbgHIgYgGQgLgDgHgFQgHgFgEgGQgEgGAAgIQAAgIAEgHQADgHAHgFQAHgFALgDQALgEANAAQAOAAAPAGQAPAEALAIIgHAJQgKgHgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFADgCAFQgCAEAAAGQAAAFADAFQADAEAGAEQAHAEAbAIQATAEAMADQAMAEAHAFQAGAFADAHQACAFAAAJQAAAJgEAGQgEAIgHAGQgIAFgLAEQgLACgOABQgKgBgKgBg");
	this.shape_923.setTransform(864.3,268.3);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FFFFFF").s().p("AghBpQgMgCgJgGQgIgGgEgHQgFgIAAgJQAAgJAHgJQAGgJAMgHIAAgBQgHgDgDgGQgFgGAAgJQAAgHAEgGQAFgHAIgGIAAgBQgIgHgEgIQgFgKAAgMQAAgLAEgKQAEgJAIgHQAHgHAKgDQAKgFALAAQAKABAJADIA8AAIAAAMIgsAAQAHAHAFAJQAFAJAAALQAAAKgEAKQgEAKgIAGQgHAHgKADQgJAEgKAAQgPAAgNgGQgGADgEAGQgEAEAAAFQAAALAKAFQAIAFAQgBIAiAAQAOAAAKACQAKADAGADQAHAEADAGQADAHAAAIQAAAKgGAIQgFAJgKAHQgKAHgOAEQgOAFgQgBQgRAAgNgDgAg1AzQgFAIAAAIQAAAHADAFQAEAGAGADQAHAFAKACQALADANgBQANAAAMgDQAMgDAIgFQAIgGAFgGQAEgGAAgIQAAgFgCgEQgDgEgEgDQgJgFgTABIgiAAQgNAAgJgEQgMAHgGAIgAgXhdQgHADgGAFQgFAGgDAGQgDAIAAAJQAAAJADAHQADAHAFAFQAGAGAHACQAIADAIAAQAHAAAHgDQAHgCAGgGQAFgFADgHQAEgHAAgJQAAgJgEgIQgDgGgFgGQgGgFgHgDQgHgDgHgBQgIABgIADg");
	this.shape_924.setTransform(847,271.6);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#FFFFFF").s().p("AABBeQgJgFgGgIQgGgGgCgMQgDgKAAgNIAAhNIgrAAIAAgLIArgBIACgwIALAAIAAAwIBMAAIAAAMIhMAAIAABPQAAALACAHQACAIAFAGQADAGAHADQAIADAMAAQALAAAKgCIASgFIADAJQgLAFgJACQgLACgNABQgOAAgKgEg");
	this.shape_925.setTransform(792.7,266.1);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgKQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gIQAAgOgFgKQgEgLgHgHQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_926.setTransform(774.5,268.3);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgKQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gIQAAgOgFgKQgEgLgHgHQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_927.setTransform(756.5,268.3);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#FFFFFF").s().p("AgEBlQgJgCgHgEQgHgDgHgGQgHgEgFgHQgGgHgEgIIgHgSQgEgNgCgdQAAgPAHgaIAGgSIAKgPQAGgHAHgFQAHgEAHgEQAIgEAJgCQAIgCAJAAQANABAUAHQALAGAJALIgIAJQgJgKgKgFQgLgGgPABQgPAAgNAFQgNAGgJAMQgKAMgFAQQgEASgBATQABAUAEARQAFAQAJANQAJALANAHQANAGAOAAQAOAAALgEQALgEAIgHIAAg+IguAAIAAgLIA7AAIAABOQgKALgNAFQgWAHgNAAQgJgBgHgBg");
	this.shape_928.setTransform(720.1,265.6);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#FFFFFF").s().p("AgNBjQgFgFAAgJQAAgIAFgGQAFgEAHgBQAGABAFAEQAGAGAAAIQAAAJgGAFQgFAFgGAAQgHAAgFgFgAgKAjQgBgIABgIQABgGAEgGQAFgJALgMQAQgPADgEQAFgFACgGQACgGAAgHQAAgHgCgGQgDgGgEgFQgFgFgIgCQgHgDgKAAQgMAAgLAEQgLAGgJAJIgJgIQAKgLANgGIAOgFIAPgBQAMAAAKAEQAKADAHAGQAHAGADAIQAEAJAAAJQAAAIgDAHQgCAGgEAGQgFAHgOAOQgOAKgEAJQgEAGgBAFQgCAIABAHg");
	this.shape_929.setTransform(1062.1,225.8);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#FFFFFF").s().p("AAcBoIAAiDIhIAAIAAgMIBUAAIAACPgAAVhOQgFgEAAgHQAAgGAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAGQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_930.setTransform(970.8,225.4);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgJgEgPQgFgOAAgRQAAgSAFgOQAGgNAJgKQAKgKAMgFQAMgFANgBQANABAMAFQALAFALAKIABAAIgBgeIAAg6IANAAIAADWIgLAAIgCgVIAAAAQgLAKgMAHQgSAHgKABQgOAAgLgGgAgQgYQgKAFgHAIQgIAJgEALQgEAMAAAOQAAAOADALQAEAMAHAJQAGAIAKAEQAJAFALAAQANAAAMgHQANgGAMgNIAAhPQgMgMgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_931.setTransform(917.8,225.2);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#FFFFFF").s().p("AgaBoQgNgFgLgJIgBAAIgBAQIgLAAIAAjWIANAAIAAA9IgBAgIABAAQALgMAOgGQAPgIANAAQAPAAAMAGQALAFAIAJQAHAKAEANQAEANAAARQAAASgFAPQgFAOgKAKQgJAKgMAFQgMAGgNAAQgLgBgNgFgAgXgXQgOAIgNAMIAABPQAMALAOAGQAMAFAKAAQAKAAAKgFQAKgFAHgIQAHgKAEgMQAEgMAAgOQAAgOgDgKQgDgLgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAGg");
	this.shape_932.setTransform(882.9,225.2);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFALQgGAKgBAMIBtAAIAAAAg");
	this.shape_933.setTransform(864.5,228.6);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#FFFFFF").s().p("AgdBKQgJgDgHgFQgIgFgDgIQgFgHAAgKQAAgMAHgJQAGgJANgGQAOgGAVgFQATgEAegCQAAgKgCgHQgDgJgEgGQgGgGgIgEQgIgEgMAAQgHAAgIACIgPAEQgNAGgLAIIgGgLQALgHAPgGIASgGQAJgCAIAAQAOAAALAFQAKAEAHAIQAHAHADAKQADAKAAAMIAABbIgLAAIgCgWIAAAAQgOALgPAHQgUAHgLABQgJAAgJgCgAADgBQgSADgLAFQgLAGgFAHQgFAHAAAIQAAAIADAGQADAFAGAEQAHAEAUACQANAAAOgGQAPgHAPgNIAAgtQgcADgSADg");
	this.shape_934.setTransform(810.3,228.6);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgJgEgPQgFgOAAgRQAAgSAFgOQAGgNAJgKQAKgKAMgFQAMgFANgBQANABAMAFQALAFALAKIABAAIgBgeIAAg6IANAAIAADWIgLAAIgCgVIAAAAQgLAKgMAHQgSAHgKABQgOAAgLgGgAgQgYQgKAFgHAIQgIAJgEALQgEAMAAAOQAAAOADALQAEAMAHAJQAGAIAKAEQAJAFALAAQANAAAMgHQANgGAMgNIAAhPQgMgMgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_935.setTransform(773.8,225.2);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFALQgGAKgBAMIBtAAIAAAAg");
	this.shape_936.setTransform(756.5,228.6);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFALQgGAKgBAMIBtAAIAAAAg");
	this.shape_937.setTransform(738.5,228.6);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FFFFFF").s().p("AAwBjIhNiLIgUgnIgBAAIACA4IAAB6IgOAAIAAjFIAPAAIBNCLIAUAnIABAAIgCg5IAAh5IANAAIAADFg");
	this.shape_938.setTransform(720.4,225.9);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#FFFFFF").s().p("AAkBjIgbheIgJgiIAAAAIgJAiIgaBeIgSAAIggjFIAOAAIAVCGIAGAvIABAAIANgvIAZhTIAMAAIAZBTIANAvIABAAIAGgvIAUiGIAOAAIggDFg");
	this.shape_939.setTransform(720.4,186.2);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#FFFFFF").s().p("Ag2BEIBghDIAAgBIhghDIAAgOIBtBMIAAALIhtBMg");
	this.shape_940.setTransform(684.2,186.1);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#FFFFFF").s().p("AhDBjIAAjFIAuAAQALAAAKACQAJACAJADQAIADAHAFQAHAFAGAHQAFAGAEAIIAHARQAFAZAAAPQgCAcgDANIgHARQgEAHgFAHQgGAGgHAGQgHAFgIADQgJADgJACQgKACgLAAgAg1BXIAeAAQALAAAIgBQAHgCAIgDQAHgDAGgFQAGgEAFgHQAJgLAEgQQAFgQAAgTQAAgTgFgQQgEgQgJgLIgLgKQgGgFgHgDQgIgDgHgBIgTgCIgeAAg");
	this.shape_941.setTransform(793,186.2);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#FFFFFF").s().p("AgFBIIhCiPIAOAAIAoBZIARApIACAAIAQgpIAphZIAMAAIhACPg");
	this.shape_942.setTransform(828.4,188.9);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#FFFFFF").s().p("AAMBrQgIgDgEgFQgGgGgDgJQgCgKAAgLIAAigIg2AAIAAgMIBCAAIAACuQAAAHACAHQACAGAEAFQAEAEAGACQAGACAHAAQAHAAAIgCIAPgFIAEAKQgKAEgHADQgIACgLAAQgKgBgIgCg");
	this.shape_943.setTransform(864.7,185.5);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#FFFFFF").s().p("AgaBGQgMgEgKgKQgKgKgGgOQgFgOAAgSQAAgRAFgOQAGgOAKgKQAKgKAMgEQANgGANAAQAOAAANAGQANAEAJAKQAKAKAFAOQAGAOAAARQAAASgGAOQgFAOgKAKQgJAKgNAEQgNAGgOAAQgNAAgNgGgAgVg6QgLAFgHAIQgHAIgEAMQgFAMAAANQAAAOAFAMQAEALAHAJQAHAJALAEQAKAFALAAQAMAAALgFQAKgEAHgJQAIgJADgLQAFgMAAgOQAAgNgFgMQgDgMgIgIQgHgIgKgFQgLgFgMAAQgLAAgKAFg");
	this.shape_944.setTransform(882.4,188.9);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FFFFFF").s().p("Ag/BqIAAjQIALAAIACAVIAAAAQAMgLAOgGQAPgHAMAAQAPAAAMAFQALAFAIAKQAHAJAEAOQAEANAAARQAAASgFAOQgFAOgKAKQgJAKgNAGQgMAFgMAAQgLAAgNgGQgOgFgKgKIgBAAIABAeIAAA0gAgXhXQgOAHgNANIAABPQAMALAOAFQALAFAKAAQALAAAKgFQAKgEAHgJQAHgJAEgLQAEgMAAgPQAAgNgDgLQgDgMgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAHg");
	this.shape_945.setTransform(900.9,192);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#FFFFFF").s().p("Ag2BKIAAiPIALAAIACAjIAAAAQAGgJAIgHQAHgHAJgFQAIgFAJgDQAJgDALAAIAPABQAIACAGADIgDAMQgPgFgNAAQgJAAgIACQgJADgHAFQgIAGgJAIQgIAJgHAMIAABZg");
	this.shape_946.setTransform(937.8,188.7);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#FFFFFF").s().p("AgOBKIgTgGQgRgFgOgKIAHgKQANALAOAEIARAFIAUABQALAAAJgCQAIgDAFgDQAGgEADgFQADgFAAgGQgCgMgHgGQgFgEgKgEIgbgHIgYgGQgLgDgHgFQgHgFgEgGQgEgGAAgIQAAgIAEgHQADgHAHgFQAHgFALgDQALgEANAAQAOABAPAFQAPAEALAIIgHAJQgKgHgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFAEgCAEQgCAFAAAFQAAAFADAFQADAEAGAEQAHAEAbAIQATAEAMADQAMAEAHAFQAGAFADAGQACAGAAAJQAAAJgEAGQgEAIgHAGQgIAFgLAEQgLACgOAAQgKABgKgCg");
	this.shape_947.setTransform(864.3,308);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#FFFFFF").s().p("AghBpQgMgDgJgFQgIgGgEgHQgFgIAAgJQAAgJAHgJQAGgJAMgIIAAAAQgHgDgDgGQgFgGAAgJQAAgHAEgGQAFgHAIgGIAAgBQgIgGgEgJQgFgKAAgMQAAgLAEgKQAEgJAIgHQAHgHAKgDQAKgFALAAQAKAAAJAEIA8AAIAAALIgsAAQAHAIAFAJQAFAKAAAKQAAALgEAJQgEAJgIAHQgHAHgKADQgJAEgKAAQgPAAgNgGQgGAEgEAFQgEAEAAAFQAAALAKAFQAIAFAQgBIAiAAQAOAAAKADQAKABAGAEQAHAEADAGQADAGAAAJQAAAKgGAIQgFAJgKAHQgKAHgOAEQgOAFgQgBQgRAAgNgDgAg1AzQgFAIAAAIQAAAGADAGQAEAFAGAEQAHAFAKACQALADANgBQANABAMgEQAMgDAIgFQAIgFAFgHQAEgGAAgIQAAgFgCgEQgDgEgEgDQgJgFgTABIgiAAQgNAAgJgEQgMAHgGAIgAgXhdQgHADgGAFQgFAGgDAGQgDAIAAAJQAAAIADAIQADAHAFAFQAGAGAHACQAIADAIAAQAHAAAHgDQAHgCAGgGQAFgFADgHQAEgIAAgIQAAgJgEgIQgDgGgFgGQgGgFgHgDQgHgDgHAAQgIAAgIADg");
	this.shape_948.setTransform(847,311.3);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#FFFFFF").s().p("AAcBoIAAiEIhIAAIAAgLIBUAAIAACPgAAVhOQgFgEAAgHQAAgGAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAGQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_949.setTransform(808.8,304.8);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#FFFFFF").s().p("AABBeQgJgFgGgIQgGgGgCgMQgDgJAAgOIAAhOIgrAAIAAgKIArgBIACgwIALAAIAAAwIBMAAIAAALIhMAAIAABQQAAALACAHQACAJAFAFQADAGAHADQAIADAMAAQALAAAKgCIASgGIADAKQgLAFgJACQgLADgNgBQgOAAgKgDg");
	this.shape_950.setTransform(792.7,305.8);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#FFFFFF").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgFQANgFANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAFgRAAQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgGgKgEQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_951.setTransform(774.5,308);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#FFFFFF").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgFQANgFANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAFgRAAQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgGgKgEQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_952.setTransform(756.5,308);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FFFFFF").s().p("AgEBlQgJgCgHgEQgHgDgHgGQgHgFgFgGQgGgHgEgIIgHgSQgEgNgCgdQAAgPAHgbIAGgRIAKgPQAGgHAHgFQAHgEAHgEQAIgEAJgBQAIgDAJAAQANABAUAHQALAGAJAKIgIAKQgJgKgKgFQgLgGgPABQgPAAgNAFQgNAHgJALQgKAMgFARQgEAQgBAUQABAUAEARQAFARAJAMQAJAMANAFQANAHAOAAQAOAAALgEQALgEAIgHIAAg+IguAAIAAgLIA7AAIAABOQgKALgNAFQgWAHgNgBQgJABgHgCg");
	this.shape_953.setTransform(720.1,305.3);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#FFFFFF").s().p("AgNBjQgFgFAAgJQAAgIAFgGQAFgFAHAAQAGAAAFAFQAGAGAAAIQAAAJgGAFQgFAFgGAAQgHAAgFgFgAgKAjQgBgIABgIQABgGAEgGQAFgJALgMQAQgPADgFQAFgEACgGQACgGAAgGQAAgHgCgHQgDgGgEgFQgFgFgIgDQgHgCgKAAQgMAAgLAEQgLAGgJAJIgJgIQAKgLANgGIAOgEQAIgCAHAAQAMAAAKAEQAKADAHAGQAHAGADAIQAEAJAAAJQAAAIgDAHQgCAGgEAGQgFAHgOAOQgOAKgEAJQgEAFgBAGQgCAIABAHg");
	this.shape_954.setTransform(1062.1,265.5);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgJgEgPQgFgOAAgRQAAgSAFgOQAGgNAJgKQAKgKAMgFQAMgFANgBQANABAMAFQALAFALAKIABAAIgBgeIAAg6IANAAIAADWIgLAAIgCgVIAAAAQgLALgMAGQgSAHgKABQgOAAgLgGgAgQgYQgKAFgHAJQgIAIgEALQgEAMAAAOQAAAOADAMQAEALAHAJQAGAIAKAEQAJAFALAAQANAAAMgHQANgGAMgNIAAhPQgMgMgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_955.setTransform(917.8,264.9);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FFFFFF").s().p("AgaBoQgNgFgLgJIgBAAIgBAQIgLAAIAAjWIANAAIAAA+IgBAfIABAAQALgMAOgHQAPgHANAAQAPAAAMAGQALAFAIAJQAHAKAEAMQAEAOAAARQAAASgFAPQgFAOgKAKQgJAKgMAFQgMAGgNAAQgLgBgNgFgAgXgXQgOAHgNANIAABPQAMALAOAGQAMAFAKAAQAKAAAKgFQAKgFAHgIQAHgKAEgMQAEgMAAgOQAAgOgDgKQgDgLgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAGg");
	this.shape_956.setTransform(882.9,264.9);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgKQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gIQAAgOgFgKQgEgLgHgHQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_957.setTransform(864.5,268.3);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FFFFFF").s().p("AAgBIIgWhWIgKgqIAAAAIgJArIgWBVIgSAAIgkiPIANAAIAXBcIAJAmIABAAIAJgmIAYhZIAOAAIAXBZIAKAmIABAAIAJgmIAXhcIAMAAIgkCPg");
	this.shape_958.setTransform(846.4,268.3);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#FFFFFF").s().p("AgdBKQgJgDgHgFQgIgFgDgHQgFgIAAgKQAAgMAHgJQAGgJANgGQAOgGAVgFQATgEAegCQAAgKgCgHQgDgJgEgGQgGgGgIgEQgIgEgMAAQgHAAgIACIgPAEQgNAGgLAIIgGgKQALgIAPgGIASgGQAJgCAIAAQAOAAALAFQAKAEAHAIQAHAHADAKQADAKAAAMIAABbIgLAAIgCgWIAAAAQgOALgPAHQgUAHgLABQgJgBgJgBgAADgBQgSADgLAFQgLAGgFAHQgFAHAAAJQAAAHADAFQADAGAGADQAHAFAUACQANAAAOgHQAPgGAPgNIAAgtQgcACgSAEg");
	this.shape_959.setTransform(810.3,268.3);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgJgEgPQgFgOAAgRQAAgSAFgOQAGgNAJgKQAKgKAMgFQAMgFANgBQANABAMAFQALAFALAKIABAAIgBgeIAAg6IANAAIAADWIgLAAIgCgVIAAAAQgLALgMAGQgSAHgKABQgOAAgLgGgAgQgYQgKAFgHAJQgIAIgEALQgEAMAAAOQAAAOADAMQAEALAHAJQAGAIAKAEQAJAFALAAQANAAAMgHQANgGAMgNIAAhPQgMgMgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_960.setTransform(773.8,264.9);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgKQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gIQAAgOgFgKQgEgLgHgHQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_961.setTransform(756.5,268.3);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgKQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gIQAAgOgFgKQgEgLgHgHQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_962.setTransform(738.5,268.3);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FFFFFF").s().p("AgaBGQgMgEgKgKQgKgKgGgOQgFgPAAgQQAAgRAFgPQAGgOAKgKQAKgJAMgFQANgGANAAQAOAAANAGQANAFAJAJQAKAKAFAOQAGAPAAARQAAAQgGAPQgFAOgKAKQgJAKgNAEQgNAGgOAAQgNAAgNgGgAgVg6QgLAFgHAIQgHAJgEALQgFAMAAAOQAAAOAFALQAEALAHAJQAHAJALAEQAKAFALAAQAMAAALgFQAKgEAHgJQAIgJADgLQAFgLAAgOQAAgOgFgMQgDgLgIgJQgHgIgKgFQgLgFgMAAQgLAAgKAFg");
	this.shape_963.setTransform(882.4,228.6);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#FFFFFF").s().p("AAMBrQgIgDgEgFQgGgHgDgIQgCgKAAgLIAAigIg2AAIAAgLIBCAAIAACtQAAAHACAHQACAGAEAFQAEAEAGACQAGACAHAAQAHAAAIgCIAPgFIAEAKQgKAFgHACQgIACgLAAQgKgBgIgCg");
	this.shape_964.setTransform(864.7,225.2);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#FFFFFF").s().p("AhDBjIAAjFIAuAAQALAAAKACQAJACAJADQAIAEAHAEQAHAGAGAGQAFAGAEAIIAHARQAFAZAAAPQgCAcgDAMIgHASQgEAHgFAHQgGAGgHAGQgHAEgIAEQgJADgJACQgKACgLAAgAg1BXIAeAAQALAAAIgCQAHgBAIgDQAHgDAGgFQAGgEAFgHQAJgLAEgQQAFgQAAgTQAAgTgFgQQgEgQgJgLIgLgKQgGgEgHgDQgIgEgHgCIgTgBIgeAAg");
	this.shape_965.setTransform(793,225.9);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#FFFFFF").s().p("AAkBjIgbheIgJgiIAAAAIgJAiIgaBeIgSAAIggjFIAOAAIAVCHIAGAuIABAAIANguIAZhUIAMAAIAZBUIANAuIABAAIAGguIAUiHIAOAAIggDFg");
	this.shape_966.setTransform(720.4,225.9);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#FFFFFF").s().p("AA+BjIgXhEIhOAAIgXBEIgNAAIBFjFIANAAIBGDFgAAjAUIgMglQgOgogJgcIAAAAIgVBEIgNAlIBFAAg");
	this.shape_967.setTransform(720.4,186.2);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#FFFFFF").s().p("Ag2BEIBghDIAAgBIhghDIAAgOIBtBMIAAALIhtBMg");
	this.shape_968.setTransform(684.2,186.1);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#FFFFFF").s().p("AAwBKIAAhXQAAgMgCgJQgDgJgFgGQgEgGgIgDQgIgDgLAAQgHAAgGACQgHACgGAEQgLAHgRARIAABnIgNAAIAAiPIALAAIACAbIABAAQAOgPAMgHQAHgEAHgCQAHgDAIAAQAOAAAJAEQAKADAHAHQAGAIADALQADAKAAAPIAABZg");
	this.shape_969.setTransform(738.6,188.7);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#FFFFFF").s().p("AA5BKIAAhmQAAgQgFgJQgFgIgKAAQgKAAgHAHQgGAGgIAOIAABsIgMAAIAAhmQAAgQgFgJQgFgIgKAAQgKAAgHAHQgHAGgHAOIAABsIgNAAIAAiPIALAAIACATIAAAAQAHgLAHgGQAIgGALAAQAMAAAHAHQAGAGADANQAJgOAHgFQAIgHALAAQAIAAAGADQAGADADAFQAEAFACAIQADAJAAAKIAABog");
	this.shape_970.setTransform(774.7,188.7);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#FFFFFF").s().p("Ag2BKIAAiPIALAAIACAjIAAAAQAGgJAIgHQAHgHAJgFQAIgFAJgDQAJgDALAAIAPABQAIACAGADIgDAMQgPgFgNAAQgJAAgIACQgJADgHAFQgIAGgJAIQgIAJgHAMIAABZg");
	this.shape_971.setTransform(847.8,188.7);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#FFFFFF").s().p("AgOBKIgTgGQgRgFgOgKIAHgKQANALAOAEIARAFIAUABQALAAAJgCQAIgDAFgDQAGgEADgFQADgFAAgGQgCgMgHgGQgFgEgKgEIgbgHIgYgGQgLgDgHgFQgHgFgEgGQgEgHAAgHQAAgIAEgHQADgHAHgFQAHgFALgDQALgDANgBQAOABAPAEQAPAFALAIIgHAJQgKgHgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFADgCAFQgCAFAAAFQAAAGADAEQADAFAGADQAHAEAbAIQATADAMAEQAMAEAHAFQAGAFADAGQACAHAAAIQAAAJgEAGQgEAIgHAGQgIAFgLAEQgLACgOAAQgKABgKgCg");
	this.shape_972.setTransform(864.3,347.7);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#FFFFFF").s().p("AghBpQgMgDgJgFQgIgGgEgHQgFgIAAgJQAAgJAHgJQAGgJAMgIIAAgBQgHgCgDgGQgFgHAAgIQAAgHAEgGQAFgHAIgGIAAgBQgIgHgEgIQgFgKAAgMQAAgLAEgKQAEgJAIgHQAHgHAKgDQAKgEALgBQAKAAAJAEIA8AAIAAALIgsAAQAHAIAFAJQAFAKAAAKQAAAKgEAKQgEAJgIAHQgHAHgKADQgJAEgKAAQgPAAgNgHQgGAFgEAEQgEAFAAAFQAAALAKAFQAIAFAQgBIAiAAQAOABAKACQAKABAGAEQAHAEADAGQADAGAAAJQAAAJgGAJQgFAJgKAHQgKAHgOAEQgOAFgQAAQgRgBgNgDgAg1AzQgFAIAAAIQAAAGADAGQAEAFAGAEQAHAFAKACQALACANAAQANABAMgEQAMgDAIgGQAIgEAFgHQAEgGAAgIQAAgGgCgEQgDgDgEgDQgJgEgTAAIgiAAQgNAAgJgDQgMAGgGAIgAgXheQgHADgGAGQgFAGgDAGQgDAIAAAJQAAAIADAIQADAHAFAFQAGAGAHACQAIADAIABQAHgBAHgDQAHgCAGgGQAFgFADgHQAEgIAAgIQAAgJgEgIQgDgGgFgGQgGgGgHgDQgHgCgHAAQgIAAgIACg");
	this.shape_973.setTransform(847,351);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#FFFFFF").s().p("AABBeQgJgFgGgIQgGgGgCgMQgDgJAAgOIAAhOIgrAAIAAgKIArgBIACgvIALAAIAAAvIBMAAIAAALIhMAAIAABPQAAAMACAHQACAIAFAGQADAGAHADQAIADAMAAQALAAAKgCIASgGIADAKQgLAFgJACQgLADgNgBQgOAAgKgDg");
	this.shape_974.setTransform(792.7,345.5);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#FFFFFF").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_975.setTransform(774.5,347.7);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#FFFFFF").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_976.setTransform(756.5,347.7);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#FFFFFF").s().p("AgEBlQgJgCgHgEQgHgDgHgGQgHgFgFgGQgGgHgEgIIgHgRQgEgNgCgeQAAgPAHgbIAGgRIAKgPQAGgGAHgGQAHgEAHgEQAIgEAJgBQAIgCAJgBQANABAUAHQALAGAJAKIgIAJQgJgJgKgFQgLgFgPAAQgPgBgNAHQgNAGgJAMQgKALgFARQgEAQgBAUQABAUAEARQAFARAJALQAJANANAFQANAHAOAAQAOAAALgEQALgEAIgHIAAg+IguAAIAAgMIA7AAIAABPQgKAKgNAHQgWAFgNAAQgJABgHgCg");
	this.shape_977.setTransform(720.1,345);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#FFFFFF").s().p("AgNBjQgFgFAAgIQAAgJAFgGQAFgFAHAAQAGAAAFAFQAGAGAAAJQAAAIgGAFQgFAFgGAAQgHAAgFgFgAgKAjQgBgIABgIQABgGAEgGQAFgJALgMQAQgOADgGQAFgEACgGQACgGAAgGQAAgHgCgHQgDgGgEgFQgFgFgIgDQgHgCgKAAQgMAAgLAEQgLAGgJAJIgJgIQAKgLANgGIAOgEIAPgCQAMAAAKAEQAKADAHAGQAHAGADAJQAEAIAAAKQAAAHgDAHQgCAGgEAGQgFAHgOAOQgOAKgEAJQgEAFgBAGQgCAHABAIg");
	this.shape_978.setTransform(1062.1,305.2);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#FFFFFF").s().p("AAcBoIAAiEIhIAAIAAgLIBUAAIAACPgAAVhOQgFgEAAgHQAAgGAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAGQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_979.setTransform(970.8,304.8);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#FFFFFF").s().p("AgZBpQgMgGgIgJQgJgJgEgPQgFgOAAgRQAAgSAFgOQAGgNAJgKQAKgKAMgFQAMgGANAAQANAAAMAGQALAFALAKIABAAIgBgeIAAg6IANAAIAADWIgLAAIgCgVIAAAAQgLAKgMAHQgSAHgKAAQgOAAgLgEgAgQgYQgKAFgHAJQgIAJgEAKQgEAMAAAOQAAAOADAMQAEALAHAJQAGAIAKAEQAJAFALAAQANAAAMgHQANgHAMgMIAAhQQgMgLgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_980.setTransform(917.8,304.6);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#FFFFFF").s().p("AgaBoQgNgFgLgJIgBAAIgBAQIgLAAIAAjWIANAAIAAA+IgBAeIABAAQALgLAOgHQAPgGANgBQAPABAMAFQALAEAIALQAHAJAEAMQAEAOAAARQAAASgFAOQgFAPgKAKQgJAKgMAGQgMAEgNAAQgLAAgNgFgAgXgXQgOAIgNANIAABOQAMALAOAGQAMAFAKAAQAKAAAKgFQAKgFAHgIQAHgKAEgMQAEgMAAgOQAAgNgDgLQgDgLgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAGg");
	this.shape_981.setTransform(882.9,304.6);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#FFFFFF").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgFQANgFANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAFgRAAQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgGgKgEQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_982.setTransform(864.5,308);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#FFFFFF").s().p("AAgBIIgWhWIgKgqIAAAAIgJAqIgWBWIgSAAIgkiPIANAAIAXBcIAJAmIABAAIAJgmIAYhaIAOAAIAXBaIAKAmIABAAIAJgmIAXhcIAMAAIgkCPg");
	this.shape_983.setTransform(846.4,308);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#FFFFFF").s().p("AgdBKQgJgDgHgFQgIgFgDgHQgFgIAAgKQAAgMAHgJQAGgJANgGQAOgGAVgFQATgEAegCQAAgKgCgHQgDgJgEgGQgGgHgIgDQgIgEgMAAQgHAAgIACIgPAEQgNAGgLAIIgGgKQALgIAPgGIASgFQAJgDAIAAQAOAAALAFQAKAEAHAHQAHAIADAKQADAKAAAMIAABbIgLAAIgCgWIAAAAQgOALgPAHQgUAHgLAAQgJAAgJgBgAADgBQgSADgLAGQgLAFgFAHQgFAHAAAJQAAAHADAFQADAGAGADQAHAFAUACQANAAAOgHQAPgGAPgNIAAgtQgcADgSADg");
	this.shape_984.setTransform(810.3,308);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#FFFFFF").s().p("AgZBpQgMgGgIgJQgJgJgEgPQgFgOAAgRQAAgSAFgOQAGgNAJgKQAKgKAMgFQAMgGANAAQANAAAMAGQALAFALAKIABAAIgBgeIAAg6IANAAIAADWIgLAAIgCgVIAAAAQgLAKgMAHQgSAHgKAAQgOAAgLgEgAgQgYQgKAFgHAJQgIAJgEAKQgEAMAAAOQAAAOADAMQAEALAHAJQAGAIAKAEQAJAFALAAQANAAAMgHQANgHAMgMIAAhQQgMgLgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_985.setTransform(773.8,304.6);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#FFFFFF").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgFQANgFANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAFgRAAQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgGgKgEQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_986.setTransform(756.5,308);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FFFFFF").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgFQANgFANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAFgRAAQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgGgKgEQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_987.setTransform(738.5,308);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#FFFFFF").s().p("AgaBGQgMgEgKgKQgKgKgGgOQgFgOAAgRQAAgSAFgOQAGgOAKgKQAKgJAMgFQANgGANAAQAOAAANAGQANAFAJAJQAKAKAFAOQAGAOAAASQAAARgGAOQgFAOgKAKQgJAKgNAEQgNAGgOAAQgNAAgNgGgAgVg6QgLAEgHAJQgHAJgEALQgFAMAAAOQAAAOAFALQAEAMAHAIQAHAJALAEQAKAFALAAQAMAAALgFQAKgEAHgJQAIgIADgMQAFgLAAgOQAAgOgFgMQgDgLgIgJQgHgJgKgEQgLgFgMAAQgLAAgKAFg");
	this.shape_988.setTransform(882.4,268.3);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#FFFFFF").s().p("AAMBrQgIgDgEgFQgGgHgDgJQgCgJAAgLIAAigIg2AAIAAgLIBCAAIAACtQAAAIACAGQACAGAEAFQAEAEAGACQAGACAHAAQAHAAAIgCIAPgFIAEAJQgKAFgHADQgIABgLABQgKgBgIgCg");
	this.shape_989.setTransform(864.7,264.9);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#FFFFFF").s().p("AhDBjIAAjFIAuAAQALAAAKACQAJACAJADQAIAEAHAEQAHAGAGAGQAFAHAEAHIAHARQAFAZAAAPQgCAcgDAMIgHASQgEAHgFAHQgGAHgHAFQgHAEgIAEQgJAEgJABQgKACgLAAgAg1BXIAeAAQALAAAIgCQAHgBAIgDQAHgDAGgFQAGgEAFgGQAJgMAEgQQAFgQAAgTQAAgTgFgQQgEgQgJgLIgLgKQgGgEgHgDQgIgEgHgCIgTgBIgeAAg");
	this.shape_990.setTransform(793,265.6);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#FFFFFF").s().p("AA+BjIgXhEIhOAAIgXBEIgNAAIBFjFIANAAIBGDFgAAjAUIgMgkQgOgogJgdIAAAAIgVBFIgNAkIBFAAg");
	this.shape_991.setTransform(720.4,225.9);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#FFFFFF").s().p("Ag2BEIBghDIAAgBIhghDIAAgOIBtBMIAAALIhtBMg");
	this.shape_992.setTransform(684.2,186.1);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#FFFFFF").s().p("Ag2BKIAAiPIALAAIACAjIAAAAQAGgJAIgHQAHgHAJgFQAIgFAJgDQAJgDALAAIAPABQAIACAGADIgDAMQgPgFgNAAQgJAAgIACQgJADgHAFQgIAGgJAIQgIAJgHAMIAABZg");
	this.shape_993.setTransform(739.8,188.7);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#FFFFFF").s().p("Ag/BqIAAjQIALAAIACAVIAAAAQAMgLAOgGQAPgHAMAAQAPAAAMAFQALAFAIAKQAHAJAEAOQAEANAAARQAAASgFAOQgFAOgKAKQgJAKgNAGQgMAFgMAAQgLAAgNgGQgOgFgKgKIgBAAIABAeIAAA0gAgXhXQgOAHgNANIAABPQAMALAOAFQALAFAKAAQALAAAKgFQAKgEAHgJQAHgJAEgLQAEgMAAgPQAAgNgDgLQgDgMgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAHg");
	this.shape_994.setTransform(774.9,192);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FFFFFF").s().p("AAwBsIAAhYQAAgMgCgIQgDgJgFgGQgEgGgIgDQgIgDgLAAQgHAAgGACQgHACgGAEQgLAHgRAQIAABoIgNAAIAAjXIANAAIAAA+IgBAmIABAAQAOgPANgIQAHgEAHgCQAHgDAIAAQAOAAAJAEQAKADAHAHQAGAIADALQADAJAAAPIAABag");
	this.shape_995.setTransform(792.6,185.3);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#FFFFFF").s().p("AgTBGQgPgEgKgKQgLgKgFgOQgEgJgCgXQAAgLAGgUQAGgOALgKQALgKAOgEQAOgGAPAAQAMABATAGQALAGAKAJIgHAJQgKgJgKgEQgMgGgMAAQgNAAgNAFQgLAFgJAIQgJAIgEAMQgFAMAAANQAAAOAFAMQAEAMAJAIQAIAJAMAEQAMAFANAAQAOAAANgGQAMgFAKgKIAHAJQgMALgNAGQgUAGgLABQgQAAgOgGg");
	this.shape_996.setTransform(828.7,188.9);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#FFFFFF").s().p("AhDBjIAAjFIAuAAQALAAAKACQAJACAJADQAIADAHAFQAHAFAGAHQAFAGAEAIIAHARQAFAZAAAPQgCAcgDANIgHARQgEAHgFAHQgGAGgHAGQgHAFgIADQgJADgJACQgKACgLAAgAg1BXIAeAAQALAAAIgBQAIgCAHgDQAHgDAGgFQAGgEAFgHQAJgLAEgQQAFgQAAgTQAAgTgFgQQgEgQgJgLIgLgKQgGgFgHgDQgHgDgIgBIgTgCIgeAAg");
	this.shape_997.setTransform(865,186.2);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FFFFFF").s().p("AAcBoIAAiDIhIAAIAAgMIBUAAIAACPgAAVhOQgFgEAAgGQAAgHAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_998.setTransform(808.8,185.7);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#FFFFFF").s().p("AAwBKIAAhXQAAgMgCgJQgDgJgFgGQgEgGgIgDQgIgDgLAAQgHAAgGACQgHACgGAEQgLAHgRARIAABnIgNAAIAAiPIALAAIACAbIABAAQAOgPAMgHQAHgEAHgCQAHgDAIAAQAOAAAJAEQAKADAHAHQAGAIADALQADAKAAAPIAABZg");
	this.shape_999.setTransform(954.6,188.7);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FFFFFF").s().p("Ag2BKIAAiPIALAAIACAjIAAAAQAGgJAIgHQAHgHAJgFQAIgFAJgDQAJgDALAAIAPABQAIACAGADIgDAMQgPgFgNAAQgJAAgIACQgJADgHAFQgIAGgJAIQgIAJgHAMIAABZg");
	this.shape_1000.setTransform(739.8,188.7);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#FFFFFF").s().p("AgOBKIgTgFQgRgGgOgKIAHgKQANALAOAEIARAFIAUABQALAAAJgCQAIgDAFgEQAGgDADgGQADgFAAgFQgCgMgHgGQgFgEgKgEIgbgHIgYgFQgLgEgHgFQgHgFgEgGQgEgHAAgHQAAgIAEgHQADgHAHgFQAHgFALgDQALgDANAAQAOAAAPAEQAPAFALAIIgHAKQgKgIgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFADgCAFQgCAEAAAGQAAAGADAEQADAFAGADQAHAFAbAGQATAEAMAEQAMAEAHAFQAGAFADAGQACAHAAAIQAAAIgEAIQgEAHgHAGQgIAFgLADQgLADgOAAQgKAAgKgBg");
	this.shape_1001.setTransform(864.3,387.4);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FFFFFF").s().p("AghBpQgMgDgJgFQgIgGgEgHQgFgIAAgJQAAgJAHgJQAGgJAMgIIAAgBQgHgDgDgFQgFgHAAgHQAAgIAEgGQAFgHAIgGIAAgBQgIgHgEgIQgFgKAAgMQAAgLAEgKQAEgJAIgHQAHgHAKgEQAKgDALAAQAKAAAJADIA8AAIAAALIgsAAQAHAIAFAIQAFALAAAKQAAALgEAKQgEAIgIAHQgHAHgKADQgJAEgKAAQgPAAgNgHQgGAEgEAFQgEAFAAAFQAAAKAKAGQAIAFAQAAIAiAAQAOAAAKACQAKACAGADQAHAEADAGQADAGAAAJQAAAJgGAJQgFAJgKAHQgKAHgOAEQgOAFgQAAQgRAAgNgEgAg1AzQgFAIAAAIQAAAGADAGQAEAFAGAEQAHAFAKACQALACANAAQANAAAMgDQAMgDAIgGQAIgEAFgHQAEgGAAgIQAAgFgCgFQgDgEgEgCQgJgEgTgBIgiAAQgNAAgJgCQgMAGgGAIgAgXheQgHADgGAGQgFAGgDAGQgDAIAAAJQAAAIADAIQADAHAFAFQAGAGAHACQAIAEAIAAQAHAAAHgEQAHgCAGgGQAFgFADgHQAEgIAAgIQAAgJgEgIQgDgGgFgGQgGgGgHgDQgHgCgHAAQgIAAgIACg");
	this.shape_1002.setTransform(847,390.7);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#FFFFFF").s().p("AABBeQgJgEgGgIQgGgIgCgKQgDgLAAgNIAAhOIgrAAIAAgKIArgBIACgvIALAAIAAAvIBMAAIAAALIhMAAIAABPQAAALACAIQACAIAFAGQADAGAHADQAIADAMAAQALAAAKgCIASgGIADAKQgLAFgJACQgLACgNAAQgOAAgKgDg");
	this.shape_1003.setTransform(792.7,385.2);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FFFFFF").s().p("AgVBHQgOgGgKgKQgKgKgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANAAQAPgBAMAFQALAEAJAJQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAIgFAJQgGALgBANIBtAAIAAAAg");
	this.shape_1004.setTransform(774.5,387.4);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#FFFFFF").s().p("AgVBHQgOgGgKgKQgKgKgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANAAQAPgBAMAFQALAEAJAJQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAIgFAJQgGALgBANIBtAAIAAAAg");
	this.shape_1005.setTransform(756.5,387.4);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#FFFFFF").s().p("AgEBlQgJgCgHgDQgHgEgHgFQgHgGgFgGQgGgHgEgIIgHgRQgEgNgCgeQAAgPAHgbIAGgRIAKgPQAGgGAHgGQAHgFAHgDQAIgEAJgBQAIgCAJAAQANAAAUAHQALAGAJAKIgIAJQgJgJgKgFQgLgFgPAAQgPgBgNAHQgNAFgJANQgKALgFARQgEAQgBAUQABAUAEARQAFAQAJAMQAJANANAFQANAHAOAAQAOAAALgEQALgEAIgHIAAg+IguAAIAAgMIA7AAIAABPQgKAKgNAHQgWAFgNAAQgJAAgHgBg");
	this.shape_1006.setTransform(720.1,384.7);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#FFFFFF").s().p("AgNBjQgFgFAAgIQAAgKAFgFQAFgFAHABQAGgBAFAFQAGAFAAAKQAAAIgGAFQgFAFgGAAQgHAAgFgFgAgKAiQgBgHABgIQABgGAEgGQAFgJALgLQAQgQADgFQAFgFACgFQACgGAAgGQAAgIgCgGQgDgGgEgFQgFgFgIgDQgHgCgKAAQgMAAgLAEQgLAGgJAJIgJgJQAKgKANgGIAOgEIAPgCQAMAAAKADQAKADAHAHQAHAGADAJQAEAIAAAKQAAAHgDAHQgCAGgEAGQgFAHgOAOQgOAKgEAIQgEAHgBAFQgCAHABAHg");
	this.shape_1007.setTransform(1062.1,344.9);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FFFFFF").s().p("AgZBpQgMgGgIgJQgJgKgEgOQgFgOAAgRQAAgRAFgPQAGgNAJgKQAKgKAMgFQAMgGANAAQANAAAMAGQALAEALALIABAAIgBgeIAAg6IANAAIAADWIgLAAIgCgVIAAAAQgLAKgMAHQgSAHgKAAQgOAAgLgEgAgQgYQgKAFgHAJQgIAIgEALQgEAMAAAOQAAAOADAMQAEALAHAJQAGAIAKAEQAJAFALAAQANAAAMgHQANgHAMgNIAAhPQgMgLgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_1008.setTransform(917.8,344.3);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FFFFFF").s().p("AgaBoQgNgFgLgKIgBAAIgBARIgLAAIAAjWIANAAIAAA+IgBAeIABAAQALgLAOgHQAPgGANgBQAPABAMAEQALAFAIALQAHAJAEAMQAEAOAAARQAAASgFAOQgFAPgKAKQgJAKgMAGQgMAEgNAAQgLABgNgGgAgXgXQgOAIgNANIAABPQAMAKAOAGQAMAFAKAAQAKAAAKgFQAKgEAHgJQAHgKAEgLQAEgNAAgOQAAgNgDgLQgDgLgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAGg");
	this.shape_1009.setTransform(882.9,344.3);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#FFFFFF").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_1010.setTransform(864.5,347.7);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FFFFFF").s().p("AAgBIIgWhWIgKgpIAAAAIgJApIgWBWIgSAAIgkiPIANAAIAXBcIAJAmIABAAIAJgmIAYhaIAOAAIAXBaIAKAmIABAAIAJgmIAXhcIAMAAIgkCPg");
	this.shape_1011.setTransform(846.4,347.7);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FFFFFF").s().p("AgdBJQgJgCgHgFQgIgFgDgHQgFgIAAgKQAAgMAHgJQAGgJANgGQAOgGAVgEQATgFAegCQAAgKgCgHQgDgJgEgGQgGgHgIgDQgIgEgMAAQgHAAgIACIgPAEQgNAGgLAIIgGgKQALgIAPgGIASgFQAJgCAIgBQAOABALAEQAKAEAHAHQAHAIADAKQADAKAAAMIAABbIgLAAIgCgWIAAAAQgOALgPAHQgUAHgLAAQgJAAgJgCgAADgBQgSADgLAGQgLAEgFAIQgFAGAAAKQAAAHADAFQADAGAGADQAHAFAUACQANAAAOgHQAPgGAPgNIAAgtQgcADgSADg");
	this.shape_1012.setTransform(810.3,347.7);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#FFFFFF").s().p("AgZBpQgMgGgIgJQgJgKgEgOQgFgOAAgRQAAgRAFgPQAGgNAJgKQAKgKAMgFQAMgGANAAQANAAAMAGQALAEALALIABAAIgBgeIAAg6IANAAIAADWIgLAAIgCgVIAAAAQgLAKgMAHQgSAHgKAAQgOAAgLgEgAgQgYQgKAFgHAJQgIAIgEALQgEAMAAAOQAAAOADAMQAEALAHAJQAGAIAKAEQAJAFALAAQANAAAMgHQANgHAMgNIAAhPQgMgLgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_1013.setTransform(773.8,344.3);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#FFFFFF").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_1014.setTransform(756.5,347.7);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FFFFFF").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgGQANgEANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAGgRgBQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_1015.setTransform(738.5,347.7);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#FFFFFF").s().p("AgaBHQgMgGgKgJQgKgKgGgOQgFgOAAgRQAAgSAFgOQAGgOAKgJQAKgLAMgEQANgFANgBQAOABANAFQANAEAJALQAKAJAFAOQAGAOAAASQAAARgGAOQgFAOgKAKQgJAJgNAGQgNAEgOAAQgNAAgNgEgAgVg6QgLAEgHAJQgHAIgEAMQgFAMAAAOQAAANAFAMQAEAMAHAIQAHAJALAEQAKAFALAAQAMAAALgFQAKgEAHgJQAIgIADgMQAFgMAAgNQAAgOgFgMQgDgMgIgIQgHgJgKgEQgLgFgMAAQgLAAgKAFg");
	this.shape_1016.setTransform(882.4,308);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#FFFFFF").s().p("AAMBrQgIgDgEgFQgGgHgDgJQgCgIAAgMIAAihIg2AAIAAgKIBCAAIAACsQAAAJACAGQACAHAEAEQAEAEAGACQAGACAHAAQAHAAAIgCIAPgGIAEAKQgKAFgHADQgIABgLAAQgKABgIgDg");
	this.shape_1017.setTransform(864.7,304.6);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#FFFFFF").s().p("AhDBjIAAjFIAuAAQALAAAKACQAJACAJAEQAIADAHAEQAHAGAGAGQAFAHAEAHIAHARQAFAaAAAOQgCAcgDAMIgHARQgEAIgFAHQgGAHgHAEQgHAFgIAEQgJAEgJABQgKACgLAAgAg1BXIAeAAQALAAAIgCQAHgBAIgDQAHgDAGgFQAGgFAFgFQAJgMAEgQQAFgQAAgTQAAgTgFgQQgEgQgJgLIgLgKQgGgEgHgDQgIgEgHgCIgTgBIgeAAg");
	this.shape_1018.setTransform(793,305.3);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FFFFFF").s().p("AhDBjIAAjFIAuAAQALAAAKACQAJACAJADQAIAEAHAEQAHAGAGAGQAFAGAEAIIAHARQAFAZAAAPQgCAcgDAMIgHASQgEAHgFAHQgGAGgHAGQgHAEgIAEQgJADgJACQgKACgLAAgAg1BXIAeAAQALAAAIgCQAIgBAHgDQAHgDAGgFQAGgEAFgHQAJgLAEgQQAFgQAAgTQAAgTgFgQQgEgQgJgLIgLgKQgGgEgHgDQgHgEgIgCIgTgBIgeAAg");
	this.shape_1019.setTransform(865,225.9);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#FFFFFF").s().p("AgTBGQgPgEgKgKQgLgKgFgOQgEgJgCgWQAAgMAGgUQAGgOALgKQALgJAOgFQAOgGAPAAQAMABATAGQALAGAKAKIgHAJQgKgKgKgFQgMgFgMAAQgNAAgNAFQgLAFgJAIQgJAJgEALQgFAMAAAOQAAAOAFALQAEAMAJAIQAIAJAMAEQAMAFANAAQAOAAANgGQAMgFAKgKIAHAJQgMALgNAGQgUAGgLABQgQAAgOgGg");
	this.shape_1020.setTransform(828.7,228.6);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FFFFFF").s().p("AAcBoIAAiDIhIAAIAAgMIBUAAIAACPgAAVhOQgFgEAAgHQAAgGAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAGQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1021.setTransform(808.8,225.4);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#FFFFFF").s().p("AgGBjIAAhJIhEh8IAPAAIAjBCIAYAtIACAAIAZgtIAihCIAOAAIhEB8IAABJg");
	this.shape_1022.setTransform(720.3,186.2);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FFFFFF").s().p("Ag2BEIBghDIAAgBIhghDIAAgOIBtBMIAAALIhtBMg");
	this.shape_1023.setTransform(684.2,186.1);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#FFFFFF").s().p("AgfBGQgJgDgHgHQgGgIgDgLQgEgKAAgPIAAhZIAOAAIAABXQAAAMACAJQACAJAFAGQAFAGAHADQAIADALAAQAGAAAHgCQAHgCAGgEQAJgFATgUIAAhmIANAAIAACPIgLAAIgCgcIgBAAQgNAPgMAIQgIAEgHADQgHACgJAAQgMAAgKgEg");
	this.shape_1024.setTransform(756.1,189.1);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#FFFFFF").s().p("AgeCIQgKgDgJgEIAFgLQAIAEAJADQAKACAIAAQALAAAJgDQAIgDAFgGQAFgGABgIQADgIAAgKIAAiRIhIAAIAAgLIBUAAIAACaQABAOgDAKQgDALgGAHQgHAIgLADQgLAEgPAAQgKAAgKgCgAAahwQgFgEAAgHQAAgGAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAGQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1025.setTransform(790.3,189.1);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#FFFFFF").s().p("AgfBGQgJgDgHgHQgGgIgDgLQgEgKAAgPIAAhZIAOAAIAABXQAAAMACAJQACAJAFAGQAFAGAHADQAIADALAAQAGAAAHgCQAHgCAGgEQAJgFATgUIAAhmIANAAIAACPIgLAAIgCgcIgBAAQgNAPgMAIQgIAEgHADQgHACgJAAQgMAAgKgEg");
	this.shape_1026.setTransform(756.1,189.1);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#FFFFFF").s().p("AAwBsIAAhYQAAgMgCgIQgDgJgFgGQgEgGgIgDQgIgDgLAAQgHAAgGACQgHACgGAEQgLAHgRAQIAABoIgNAAIAAjXIANAAIAAA+IgBAmIABAAQAOgPANgIQAHgEAHgCQAHgDAIAAQAOAAAJAEQAKADAHAHQAGAIADALQADAJAAAPIAABag");
	this.shape_1027.setTransform(882.6,185.3);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#FFFFFF").s().p("AgFBIIhCiPIAOAAIAoBZIARApIACAAIAQgpIAphZIAMAAIhACPg");
	this.shape_1028.setTransform(918.4,188.9);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#FFFFFF").s().p("AgYBuIAAiEIgsAAIAAgKIAsgBIAAgSQAAgNADgLQADgLAHgHQAGgIAKgEQAKgEANAAQAKAAAKACQALACAKAFIgEAKQgKgEgIgCQgHgBgLAAQgLAAgJADQgHADgFAGQgEAGgDAJQgCAIAAAKIAAATIBCAAIAAALIhCAAIAACEg");
	this.shape_1029.setTransform(973.7,185.1);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#FFFFFF").s().p("AgaBGQgMgEgKgKQgKgKgGgOQgFgOAAgSQAAgRAFgOQAGgOAKgKQAKgKAMgEQANgGANAAQAOAAANAGQANAEAJAKQAKAKAFAOQAGAOAAARQAAASgGAOQgFAOgKAKQgJAKgNAEQgNAGgOAAQgNAAgNgGgAgVg6QgLAFgHAIQgHAIgEAMQgFAMAAANQAAAOAFAMQAEALAHAJQAHAJALAEQAKAFALAAQAMAAALgFQAKgEAHgJQAIgJADgLQAFgMAAgOQAAgNgFgMQgDgMgIgIQgHgIgKgFQgLgFgMAAQgLAAgKAFg");
	this.shape_1030.setTransform(738.4,188.9);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#FFFFFF").s().p("AgfBGQgJgDgHgHQgGgIgDgLQgEgKAAgPIAAhZIAOAAIAABXQAAAMACAJQACAJAFAGQAFAGAHADQAIADALAAQAGAAAHgCQAHgCAGgEQAJgFATgUIAAhmIANAAIAACPIgLAAIgCgcIgBAAQgNAPgMAIQgIAEgHADQgHACgJAAQgMAAgKgEg");
	this.shape_1031.setTransform(756.1,189.1);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#FFFFFF").s().p("AAwBKIAAhXQAAgMgCgJQgDgJgFgGQgEgGgIgDQgIgDgLAAQgHAAgGACQgHACgGAEQgLAHgRARIAABnIgNAAIAAiPIALAAIACAbIABAAQAOgPAMgHQAHgEAHgCQAHgDAIAAQAOAAAJAEQAKADAHAHQAGAIADALQADAKAAAPIAABZg");
	this.shape_1032.setTransform(1026.6,188.7);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#FFFFFF").s().p("AgLBhQgGgFAAgIQAAgJAGgGQAFgEAGAAQAHAAAFAEQAGAGgBAJQABAIgGAFQgFAFgHAAQgGAAgFgFgAgDAhIgChxIAAgVIALAAIAAAVIgBBxg");
	this.shape_1033.setTransform(1062.4,186.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_892,p:{y:186.1}}]},24).to({state:[{t:this.shape_892,p:{y:186.1}}]},23).to({state:[{t:this.shape_892,p:{y:186.1}}]},13).to({state:[{t:this.shape_892,p:{y:186.1}},{t:this.shape_893}]},1).to({state:[{t:this.shape_892,p:{y:186.1}},{t:this.shape_893},{t:this.shape_894,p:{y:188.7}}]},2).to({state:[{t:this.shape_892,p:{y:186.1}},{t:this.shape_893},{t:this.shape_894,p:{y:188.7}},{t:this.shape_895,p:{x:756.5}}]},3).to({state:[{t:this.shape_892,p:{y:186.1}},{t:this.shape_893},{t:this.shape_894,p:{y:188.7}},{t:this.shape_896,p:{x:756.5}},{t:this.shape_895,p:{x:774.5}}]},2).to({state:[{t:this.shape_892,p:{y:186.1}},{t:this.shape_893},{t:this.shape_894,p:{y:188.7}},{t:this.shape_896,p:{x:756.5}},{t:this.shape_895,p:{x:774.5}},{t:this.shape_897,p:{x:792.7}}]},3).to({state:[{t:this.shape_892,p:{y:186.1}},{t:this.shape_893},{t:this.shape_894,p:{y:188.7}},{t:this.shape_896,p:{x:756.5}},{t:this.shape_895,p:{x:774.5}},{t:this.shape_897,p:{x:792.7}},{t:this.shape_898,p:{x:808.8}}]},2).to({state:[{t:this.shape_892,p:{y:186.1}},{t:this.shape_893},{t:this.shape_894,p:{y:188.7}},{t:this.shape_896,p:{x:756.5}},{t:this.shape_895,p:{x:774.5}},{t:this.shape_897,p:{x:792.7}},{t:this.shape_898,p:{x:808.8}},{t:this.shape_899,p:{y:188.7}}]},3).to({state:[{t:this.shape_892,p:{y:186.1}},{t:this.shape_893},{t:this.shape_894,p:{y:188.7}},{t:this.shape_896,p:{x:756.5}},{t:this.shape_895,p:{x:774.5}},{t:this.shape_897,p:{x:792.7}},{t:this.shape_898,p:{x:808.8}},{t:this.shape_899,p:{y:188.7}},{t:this.shape_900,p:{x:847}}]},2).to({state:[{t:this.shape_892,p:{y:186.1}},{t:this.shape_893},{t:this.shape_894,p:{y:188.7}},{t:this.shape_896,p:{x:756.5}},{t:this.shape_895,p:{x:774.5}},{t:this.shape_897,p:{x:792.7}},{t:this.shape_898,p:{x:808.8}},{t:this.shape_899,p:{y:188.7}},{t:this.shape_900,p:{x:847}},{t:this.shape_901,p:{x:864.3}}]},3).to({state:[{t:this.shape_892,p:{y:186.1}},{t:this.shape_893},{t:this.shape_894,p:{y:188.7}},{t:this.shape_896,p:{x:756.5}},{t:this.shape_895,p:{x:774.5}},{t:this.shape_897,p:{x:792.7}},{t:this.shape_898,p:{x:808.8}},{t:this.shape_899,p:{y:188.7}},{t:this.shape_900,p:{x:847}},{t:this.shape_901,p:{x:864.3}},{t:this.shape_902,p:{y:186.2}}]},2).to({state:[{t:this.shape_892,p:{y:186.1}},{t:this.shape_893},{t:this.shape_894,p:{y:188.7}},{t:this.shape_896,p:{x:756.5}},{t:this.shape_895,p:{x:774.5}},{t:this.shape_897,p:{x:792.7}},{t:this.shape_898,p:{x:808.8}},{t:this.shape_899,p:{y:188.7}},{t:this.shape_900,p:{x:847}},{t:this.shape_901,p:{x:864.3}},{t:this.shape_902,p:{y:186.2}}]},21).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},10).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},1).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_895,p:{x:738.5}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},2).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_896,p:{x:738.5}},{t:this.shape_895,p:{x:756.5}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},3).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_896,p:{x:738.5}},{t:this.shape_895,p:{x:756.5}},{t:this.shape_912,p:{x:773.8}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},2).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_896,p:{x:738.5}},{t:this.shape_895,p:{x:756.5}},{t:this.shape_912,p:{x:773.8}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},3).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_896,p:{x:738.5}},{t:this.shape_895,p:{x:756.5}},{t:this.shape_912,p:{x:773.8}},{t:this.shape_913,p:{x:810.3}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},2).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_896,p:{x:738.5}},{t:this.shape_895,p:{x:756.5}},{t:this.shape_912,p:{x:773.8}},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},3).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_896,p:{x:738.5}},{t:this.shape_895,p:{x:756.5}},{t:this.shape_912,p:{x:773.8}},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},2).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_915,p:{x:738.5}},{t:this.shape_896,p:{x:756.5}},{t:this.shape_912,p:{x:773.8}},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_895,p:{x:864.5}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},3).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_915,p:{x:738.5}},{t:this.shape_896,p:{x:756.5}},{t:this.shape_912,p:{x:773.8}},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_895,p:{x:864.5}},{t:this.shape_916,p:{x:882.9}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},2).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_915,p:{x:738.5}},{t:this.shape_896,p:{x:756.5}},{t:this.shape_912,p:{x:773.8}},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_895,p:{x:864.5}},{t:this.shape_916,p:{x:882.9}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},3).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_915,p:{x:738.5}},{t:this.shape_896,p:{x:756.5}},{t:this.shape_917},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_895,p:{x:864.5}},{t:this.shape_916,p:{x:882.9}},{t:this.shape_912,p:{x:917.8}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},2).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_918,p:{x:738.5}},{t:this.shape_915,p:{x:756.5}},{t:this.shape_917},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_896,p:{x:864.5}},{t:this.shape_916,p:{x:882.9}},{t:this.shape_912,p:{x:917.8}},{t:this.shape_895,p:{x:936.5}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},3).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_918,p:{x:738.5}},{t:this.shape_915,p:{x:756.5}},{t:this.shape_917},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_896,p:{x:864.5}},{t:this.shape_916,p:{x:882.9}},{t:this.shape_912,p:{x:917.8}},{t:this.shape_895,p:{x:936.5}},{t:this.shape_901,p:{x:954.3}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},2).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_918,p:{x:738.5}},{t:this.shape_915,p:{x:756.5}},{t:this.shape_917},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_896,p:{x:864.5}},{t:this.shape_916,p:{x:882.9}},{t:this.shape_912,p:{x:917.8}},{t:this.shape_895,p:{x:936.5}},{t:this.shape_901,p:{x:954.3}},{t:this.shape_898,p:{x:970.8}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},2).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_918,p:{x:738.5}},{t:this.shape_915,p:{x:756.5}},{t:this.shape_917},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_896,p:{x:864.5}},{t:this.shape_916,p:{x:882.9}},{t:this.shape_912,p:{x:917.8}},{t:this.shape_895,p:{x:936.5}},{t:this.shape_901,p:{x:954.3}},{t:this.shape_898,p:{x:970.8}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},2).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_918,p:{x:738.5}},{t:this.shape_915,p:{x:756.5}},{t:this.shape_917},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_896,p:{x:864.5}},{t:this.shape_916,p:{x:882.9}},{t:this.shape_912,p:{x:917.8}},{t:this.shape_895,p:{x:936.5}},{t:this.shape_901,p:{x:954.3}},{t:this.shape_898,p:{x:970.8}},{t:this.shape_900,p:{x:991}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},3).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_918,p:{x:738.5}},{t:this.shape_915,p:{x:756.5}},{t:this.shape_917},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_896,p:{x:864.5}},{t:this.shape_916,p:{x:882.9}},{t:this.shape_912,p:{x:917.8}},{t:this.shape_895,p:{x:936.5}},{t:this.shape_901,p:{x:954.3}},{t:this.shape_898,p:{x:970.8}},{t:this.shape_900,p:{x:991}},{t:this.shape_919,p:{y:188.7}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},3).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_920},{t:this.shape_918,p:{x:756.5}},{t:this.shape_917},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_915,p:{x:864.5}},{t:this.shape_916,p:{x:882.9}},{t:this.shape_912,p:{x:917.8}},{t:this.shape_896,p:{x:936.5}},{t:this.shape_901,p:{x:954.3}},{t:this.shape_898,p:{x:970.8}},{t:this.shape_900,p:{x:991}},{t:this.shape_919,p:{y:188.7}},{t:this.shape_895,p:{x:1026.5}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},2).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_920},{t:this.shape_918,p:{x:756.5}},{t:this.shape_917},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_915,p:{x:864.5}},{t:this.shape_916,p:{x:882.9}},{t:this.shape_912,p:{x:917.8}},{t:this.shape_896,p:{x:936.5}},{t:this.shape_901,p:{x:954.3}},{t:this.shape_898,p:{x:970.8}},{t:this.shape_900,p:{x:991}},{t:this.shape_919,p:{y:188.7}},{t:this.shape_895,p:{x:1026.5}},{t:this.shape_921,p:{y:188.7}},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},3).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_920},{t:this.shape_918,p:{x:756.5}},{t:this.shape_917},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_915,p:{x:864.5}},{t:this.shape_916,p:{x:882.9}},{t:this.shape_912,p:{x:917.8}},{t:this.shape_896,p:{x:936.5}},{t:this.shape_901,p:{x:954.3}},{t:this.shape_898,p:{x:970.8}},{t:this.shape_900,p:{x:991}},{t:this.shape_919,p:{y:188.7}},{t:this.shape_895,p:{x:1026.5}},{t:this.shape_921,p:{y:188.7}},{t:this.shape_922},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},2).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_920},{t:this.shape_918,p:{x:756.5}},{t:this.shape_917},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_915,p:{x:864.5}},{t:this.shape_916,p:{x:882.9}},{t:this.shape_912,p:{x:917.8}},{t:this.shape_896,p:{x:936.5}},{t:this.shape_901,p:{x:954.3}},{t:this.shape_898,p:{x:970.8}},{t:this.shape_900,p:{x:991}},{t:this.shape_919,p:{y:188.7}},{t:this.shape_895,p:{x:1026.5}},{t:this.shape_921,p:{y:188.7}},{t:this.shape_922},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},3).to({state:[{t:this.shape_910,p:{y:186.1}},{t:this.shape_911},{t:this.shape_920},{t:this.shape_918,p:{x:756.5}},{t:this.shape_917},{t:this.shape_913,p:{x:810.3}},{t:this.shape_914,p:{y:188.9}},{t:this.shape_915,p:{x:864.5}},{t:this.shape_916,p:{x:882.9}},{t:this.shape_912,p:{x:917.8}},{t:this.shape_896,p:{x:936.5}},{t:this.shape_901,p:{x:954.3}},{t:this.shape_898,p:{x:970.8}},{t:this.shape_900,p:{x:991}},{t:this.shape_919,p:{y:188.7}},{t:this.shape_895,p:{x:1026.5}},{t:this.shape_921,p:{y:188.7}},{t:this.shape_922},{t:this.shape_892,p:{y:225.8}},{t:this.shape_909},{t:this.shape_894,p:{y:228.4}},{t:this.shape_908,p:{x:756.5}},{t:this.shape_907,p:{x:774.5}},{t:this.shape_906,p:{x:792.7}},{t:this.shape_905,p:{y:225.4,x:808.8}},{t:this.shape_899,p:{y:228.4}},{t:this.shape_904,p:{x:847}},{t:this.shape_903,p:{x:864.3}},{t:this.shape_902,p:{y:225.9}}]},18).to({state:[{t:this.shape_940,p:{y:186.1}},{t:this.shape_939},{t:this.shape_910,p:{y:225.8}},{t:this.shape_938,p:{y:225.9}},{t:this.shape_937},{t:this.shape_936,p:{x:756.5}},{t:this.shape_935},{t:this.shape_934,p:{x:810.3}},{t:this.shape_914,p:{y:228.6}},{t:this.shape_933,p:{x:864.5}},{t:this.shape_932,p:{x:882.9}},{t:this.shape_931},{t:this.shape_908,p:{x:936.5}},{t:this.shape_903,p:{x:954.3}},{t:this.shape_930,p:{x:970.8}},{t:this.shape_904,p:{x:991}},{t:this.shape_919,p:{y:228.4}},{t:this.shape_907,p:{x:1026.5}},{t:this.shape_921,p:{y:228.4}},{t:this.shape_929},{t:this.shape_892,p:{y:265.5}},{t:this.shape_928},{t:this.shape_894,p:{y:268.1}},{t:this.shape_927,p:{x:756.5}},{t:this.shape_926,p:{x:774.5}},{t:this.shape_925,p:{x:792.7}},{t:this.shape_905,p:{y:265.1,x:808.8}},{t:this.shape_899,p:{y:268.1}},{t:this.shape_924,p:{x:847}},{t:this.shape_923,p:{x:864.3}},{t:this.shape_902,p:{y:265.6}}]},1).to({state:[{t:this.shape_940,p:{y:186.1}},{t:this.shape_939},{t:this.shape_895,p:{x:738.5}},{t:this.shape_910,p:{y:225.8}},{t:this.shape_938,p:{y:225.9}},{t:this.shape_937},{t:this.shape_936,p:{x:756.5}},{t:this.shape_935},{t:this.shape_934,p:{x:810.3}},{t:this.shape_914,p:{y:228.6}},{t:this.shape_933,p:{x:864.5}},{t:this.shape_932,p:{x:882.9}},{t:this.shape_931},{t:this.shape_908,p:{x:936.5}},{t:this.shape_903,p:{x:954.3}},{t:this.shape_930,p:{x:970.8}},{t:this.shape_904,p:{x:991}},{t:this.shape_919,p:{y:228.4}},{t:this.shape_907,p:{x:1026.5}},{t:this.shape_921,p:{y:228.4}},{t:this.shape_929},{t:this.shape_892,p:{y:265.5}},{t:this.shape_928},{t:this.shape_894,p:{y:268.1}},{t:this.shape_927,p:{x:756.5}},{t:this.shape_926,p:{x:774.5}},{t:this.shape_925,p:{x:792.7}},{t:this.shape_905,p:{y:265.1,x:808.8}},{t:this.shape_899,p:{y:268.1}},{t:this.shape_924,p:{x:847}},{t:this.shape_923,p:{x:864.3}},{t:this.shape_902,p:{y:265.6}}]},2).to({state:[{t:this.shape_940,p:{y:186.1}},{t:this.shape_939},{t:this.shape_895,p:{x:738.5}},{t:this.shape_916,p:{x:756.9}},{t:this.shape_910,p:{y:225.8}},{t:this.shape_938,p:{y:225.9}},{t:this.shape_937},{t:this.shape_936,p:{x:756.5}},{t:this.shape_935},{t:this.shape_934,p:{x:810.3}},{t:this.shape_914,p:{y:228.6}},{t:this.shape_933,p:{x:864.5}},{t:this.shape_932,p:{x:882.9}},{t:this.shape_931},{t:this.shape_908,p:{x:936.5}},{t:this.shape_903,p:{x:954.3}},{t:this.shape_930,p:{x:970.8}},{t:this.shape_904,p:{x:991}},{t:this.shape_919,p:{y:228.4}},{t:this.shape_907,p:{x:1026.5}},{t:this.shape_921,p:{y:228.4}},{t:this.shape_929},{t:this.shape_892,p:{y:265.5}},{t:this.shape_928},{t:this.shape_894,p:{y:268.1}},{t:this.shape_927,p:{x:756.5}},{t:this.shape_926,p:{x:774.5}},{t:this.shape_925,p:{x:792.7}},{t:this.shape_905,p:{y:265.1,x:808.8}},{t:this.shape_899,p:{y:268.1}},{t:this.shape_924,p:{x:847}},{t:this.shape_923,p:{x:864.3}},{t:this.shape_902,p:{y:265.6}}]},3).to({state:[{t:this.shape_940,p:{y:186.1}},{t:this.shape_939},{t:this.shape_895,p:{x:738.5}},{t:this.shape_916,p:{x:756.9}},{t:this.shape_910,p:{y:225.8}},{t:this.shape_938,p:{y:225.9}},{t:this.shape_937},{t:this.shape_936,p:{x:756.5}},{t:this.shape_935},{t:this.shape_934,p:{x:810.3}},{t:this.shape_914,p:{y:228.6}},{t:this.shape_933,p:{x:864.5}},{t:this.shape_932,p:{x:882.9}},{t:this.shape_931},{t:this.shape_908,p:{x:936.5}},{t:this.shape_903,p:{x:954.3}},{t:this.shape_930,p:{x:970.8}},{t:this.shape_904,p:{x:991}},{t:this.shape_919,p:{y:228.4}},{t:this.shape_907,p:{x:1026.5}},{t:this.shape_921,p:{y:228.4}},{t:this.shape_929},{t:this.shape_892,p:{y:265.5}},{t:this.shape_928},{t:this.shape_894,p:{y:268.1}},{t:this.shape_927,p:{x:756.5}},{t:this.shape_926,p:{x:774.5}},{t:this.shape_925,p:{x:792.7}},{t:this.shape_905,p:{y:265.1,x:808.8}},{t:this.shape_899,p:{y:268.1}},{t:this.shape_924,p:{x:847}},{t:this.shape_923,p:{x:864.3}},{t:this.shape_902,p:{y:265.6}}]},2).to({state:[{t:this.shape_940,p:{y:186.1}},{t:this.shape_939},{t:this.shape_895,p:{x:738.5}},{t:this.shape_916,p:{x:756.9}},{t:this.shape_941},{t:this.shape_910,p:{y:225.8}},{t:this.shape_938,p:{y:225.9}},{t:this.shape_937},{t:this.shape_936,p:{x:756.5}},{t:this.shape_935},{t:this.shape_934,p:{x:810.3}},{t:this.shape_914,p:{y:228.6}},{t:this.shape_933,p:{x:864.5}},{t:this.shape_932,p:{x:882.9}},{t:this.shape_931},{t:this.shape_908,p:{x:936.5}},{t:this.shape_903,p:{x:954.3}},{t:this.shape_930,p:{x:970.8}},{t:this.shape_904,p:{x:991}},{t:this.shape_919,p:{y:228.4}},{t:this.shape_907,p:{x:1026.5}},{t:this.shape_921,p:{y:228.4}},{t:this.shape_929},{t:this.shape_892,p:{y:265.5}},{t:this.shape_928},{t:this.shape_894,p:{y:268.1}},{t:this.shape_927,p:{x:756.5}},{t:this.shape_926,p:{x:774.5}},{t:this.shape_925,p:{x:792.7}},{t:this.shape_905,p:{y:265.1,x:808.8}},{t:this.shape_899,p:{y:268.1}},{t:this.shape_924,p:{x:847}},{t:this.shape_923,p:{x:864.3}},{t:this.shape_902,p:{y:265.6}}]},3).to({state:[{t:this.shape_940,p:{y:186.1}},{t:this.shape_939},{t:this.shape_896,p:{x:738.5}},{t:this.shape_916,p:{x:756.9}},{t:this.shape_941},{t:this.shape_895,p:{x:810.5}},{t:this.shape_910,p:{y:225.8}},{t:this.shape_938,p:{y:225.9}},{t:this.shape_937},{t:this.shape_936,p:{x:756.5}},{t:this.shape_935},{t:this.shape_934,p:{x:810.3}},{t:this.shape_914,p:{y:228.6}},{t:this.shape_933,p:{x:864.5}},{t:this.shape_932,p:{x:882.9}},{t:this.shape_931},{t:this.shape_908,p:{x:936.5}},{t:this.shape_903,p:{x:954.3}},{t:this.shape_930,p:{x:970.8}},{t:this.shape_904,p:{x:991}},{t:this.shape_919,p:{y:228.4}},{t:this.shape_907,p:{x:1026.5}},{t:this.shape_921,p:{y:228.4}},{t:this.shape_929},{t:this.shape_892,p:{y:265.5}},{t:this.shape_928},{t:this.shape_894,p:{y:268.1}},{t:this.shape_927,p:{x:756.5}},{t:this.shape_926,p:{x:774.5}},{t:this.shape_925,p:{x:792.7}},{t:this.shape_905,p:{y:265.1,x:808.8}},{t:this.shape_899,p:{y:268.1}},{t:this.shape_924,p:{x:847}},{t:this.shape_923,p:{x:864.3}},{t:this.shape_902,p:{y:265.6}}]},2).to({state:[{t:this.shape_940,p:{y:186.1}},{t:this.shape_939},{t:this.shape_896,p:{x:738.5}},{t:this.shape_916,p:{x:756.9}},{t:this.shape_941},{t:this.shape_895,p:{x:810.5}},{t:this.shape_942,p:{y:188.9}},{t:this.shape_910,p:{y:225.8}},{t:this.shape_938,p:{y:225.9}},{t:this.shape_937},{t:this.shape_936,p:{x:756.5}},{t:this.shape_935},{t:this.shape_934,p:{x:810.3}},{t:this.shape_914,p:{y:228.6}},{t:this.shape_933,p:{x:864.5}},{t:this.shape_932,p:{x:882.9}},{t:this.shape_931},{t:this.shape_908,p:{x:936.5}},{t:this.shape_903,p:{x:954.3}},{t:this.shape_930,p:{x:970.8}},{t:this.shape_904,p:{x:991}},{t:this.shape_919,p:{y:228.4}},{t:this.shape_907,p:{x:1026.5}},{t:this.shape_921,p:{y:228.4}},{t:this.shape_929},{t:this.shape_892,p:{y:265.5}},{t:this.shape_928},{t:this.shape_894,p:{y:268.1}},{t:this.shape_927,p:{x:756.5}},{t:this.shape_926,p:{x:774.5}},{t:this.shape_925,p:{x:792.7}},{t:this.shape_905,p:{y:265.1,x:808.8}},{t:this.shape_899,p:{y:268.1}},{t:this.shape_924,p:{x:847}},{t:this.shape_923,p:{x:864.3}},{t:this.shape_902,p:{y:265.6}}]},3).to({state:[{t:this.shape_940,p:{y:186.1}},{t:this.shape_939},{t:this.shape_915,p:{x:738.5}},{t:this.shape_916,p:{x:756.9}},{t:this.shape_941},{t:this.shape_896,p:{x:810.5}},{t:this.shape_942,p:{y:188.9}},{t:this.shape_895,p:{x:846.5}},{t:this.shape_910,p:{y:225.8}},{t:this.shape_938,p:{y:225.9}},{t:this.shape_937},{t:this.shape_936,p:{x:756.5}},{t:this.shape_935},{t:this.shape_934,p:{x:810.3}},{t:this.shape_914,p:{y:228.6}},{t:this.shape_933,p:{x:864.5}},{t:this.shape_932,p:{x:882.9}},{t:this.shape_931},{t:this.shape_908,p:{x:936.5}},{t:this.shape_903,p:{x:954.3}},{t:this.shape_930,p:{x:970.8}},{t:this.shape_904,p:{x:991}},{t:this.shape_919,p:{y:228.4}},{t:this.shape_907,p:{x:1026.5}},{t:this.shape_921,p:{y:228.4}},{t:this.shape_929},{t:this.shape_892,p:{y:265.5}},{t:this.shape_928},{t:this.shape_894,p:{y:268.1}},{t:this.shape_927,p:{x:756.5}},{t:this.shape_926,p:{x:774.5}},{t:this.shape_925,p:{x:792.7}},{t:this.shape_905,p:{y:265.1,x:808.8}},{t:this.shape_899,p:{y:268.1}},{t:this.shape_924,p:{x:847}},{t:this.shape_923,p:{x:864.3}},{t:this.shape_902,p:{y:265.6}}]},2).to({state:[{t:this.shape_940,p:{y:186.1}},{t:this.shape_939},{t:this.shape_915,p:{x:738.5}},{t:this.shape_916,p:{x:756.9}},{t:this.shape_941},{t:this.shape_896,p:{x:810.5}},{t:this.shape_942,p:{y:188.9}},{t:this.shape_895,p:{x:846.5}},{t:this.shape_943},{t:this.shape_910,p:{y:225.8}},{t:this.shape_938,p:{y:225.9}},{t:this.shape_937},{t:this.shape_936,p:{x:756.5}},{t:this.shape_935},{t:this.shape_934,p:{x:810.3}},{t:this.shape_914,p:{y:228.6}},{t:this.shape_933,p:{x:864.5}},{t:this.shape_932,p:{x:882.9}},{t:this.shape_931},{t:this.shape_908,p:{x:936.5}},{t:this.shape_903,p:{x:954.3}},{t:this.shape_930,p:{x:970.8}},{t:this.shape_904,p:{x:991}},{t:this.shape_919,p:{y:228.4}},{t:this.shape_907,p:{x:1026.5}},{t:this.shape_921,p:{y:228.4}},{t:this.shape_929},{t:this.shape_892,p:{y:265.5}},{t:this.shape_928},{t:this.shape_894,p:{y:268.1}},{t:this.shape_927,p:{x:756.5}},{t:this.shape_926,p:{x:774.5}},{t:this.shape_925,p:{x:792.7}},{t:this.shape_905,p:{y:265.1,x:808.8}},{t:this.shape_899,p:{y:268.1}},{t:this.shape_924,p:{x:847}},{t:this.shape_923,p:{x:864.3}},{t:this.shape_902,p:{y:265.6}}]},3).to({state:[{t:this.shape_940,p:{y:186.1}},{t:this.shape_939},{t:this.shape_915,p:{x:738.5}},{t:this.shape_916,p:{x:756.9}},{t:this.shape_941},{t:this.shape_896,p:{x:810.5}},{t:this.shape_942,p:{y:188.9}},{t:this.shape_895,p:{x:846.5}},{t:this.shape_943},{t:this.shape_944,p:{x:882.4}},{t:this.shape_910,p:{y:225.8}},{t:this.shape_938,p:{y:225.9}},{t:this.shape_937},{t:this.shape_936,p:{x:756.5}},{t:this.shape_935},{t:this.shape_934,p:{x:810.3}},{t:this.shape_914,p:{y:228.6}},{t:this.shape_933,p:{x:864.5}},{t:this.shape_932,p:{x:882.9}},{t:this.shape_931},{t:this.shape_908,p:{x:936.5}},{t:this.shape_903,p:{x:954.3}},{t:this.shape_930,p:{x:970.8}},{t:this.shape_904,p:{x:991}},{t:this.shape_919,p:{y:228.4}},{t:this.shape_907,p:{x:1026.5}},{t:this.shape_921,p:{y:228.4}},{t:this.shape_929},{t:this.shape_892,p:{y:265.5}},{t:this.shape_928},{t:this.shape_894,p:{y:268.1}},{t:this.shape_927,p:{x:756.5}},{t:this.shape_926,p:{x:774.5}},{t:this.shape_925,p:{x:792.7}},{t:this.shape_905,p:{y:265.1,x:808.8}},{t:this.shape_899,p:{y:268.1}},{t:this.shape_924,p:{x:847}},{t:this.shape_923,p:{x:864.3}},{t:this.shape_902,p:{y:265.6}}]},2).to({state:[{t:this.shape_940,p:{y:186.1}},{t:this.shape_939},{t:this.shape_915,p:{x:738.5}},{t:this.shape_916,p:{x:756.9}},{t:this.shape_941},{t:this.shape_896,p:{x:810.5}},{t:this.shape_942,p:{y:188.9}},{t:this.shape_895,p:{x:846.5}},{t:this.shape_943},{t:this.shape_944,p:{x:882.4}},{t:this.shape_945,p:{y:192}},{t:this.shape_910,p:{y:225.8}},{t:this.shape_938,p:{y:225.9}},{t:this.shape_937},{t:this.shape_936,p:{x:756.5}},{t:this.shape_935},{t:this.shape_934,p:{x:810.3}},{t:this.shape_914,p:{y:228.6}},{t:this.shape_933,p:{x:864.5}},{t:this.shape_932,p:{x:882.9}},{t:this.shape_931},{t:this.shape_908,p:{x:936.5}},{t:this.shape_903,p:{x:954.3}},{t:this.shape_930,p:{x:970.8}},{t:this.shape_904,p:{x:991}},{t:this.shape_919,p:{y:228.4}},{t:this.shape_907,p:{x:1026.5}},{t:this.shape_921,p:{y:228.4}},{t:this.shape_929},{t:this.shape_892,p:{y:265.5}},{t:this.shape_928},{t:this.shape_894,p:{y:268.1}},{t:this.shape_927,p:{x:756.5}},{t:this.shape_926,p:{x:774.5}},{t:this.shape_925,p:{x:792.7}},{t:this.shape_905,p:{y:265.1,x:808.8}},{t:this.shape_899,p:{y:268.1}},{t:this.shape_924,p:{x:847}},{t:this.shape_923,p:{x:864.3}},{t:this.shape_902,p:{y:265.6}}]},3).to({state:[{t:this.shape_940,p:{y:186.1}},{t:this.shape_939},{t:this.shape_918,p:{x:738.5}},{t:this.shape_916,p:{x:756.9}},{t:this.shape_941},{t:this.shape_915,p:{x:810.5}},{t:this.shape_942,p:{y:188.9}},{t:this.shape_896,p:{x:846.5}},{t:this.shape_943},{t:this.shape_944,p:{x:882.4}},{t:this.shape_945,p:{y:192}},{t:this.shape_895,p:{x:918.5}},{t:this.shape_910,p:{y:225.8}},{t:this.shape_938,p:{y:225.9}},{t:this.shape_937},{t:this.shape_936,p:{x:756.5}},{t:this.shape_935},{t:this.shape_934,p:{x:810.3}},{t:this.shape_914,p:{y:228.6}},{t:this.shape_933,p:{x:864.5}},{t:this.shape_932,p:{x:882.9}},{t:this.shape_931},{t:this.shape_908,p:{x:936.5}},{t:this.shape_903,p:{x:954.3}},{t:this.shape_930,p:{x:970.8}},{t:this.shape_904,p:{x:991}},{t:this.shape_919,p:{y:228.4}},{t:this.shape_907,p:{x:1026.5}},{t:this.shape_921,p:{y:228.4}},{t:this.shape_929},{t:this.shape_892,p:{y:265.5}},{t:this.shape_928},{t:this.shape_894,p:{y:268.1}},{t:this.shape_927,p:{x:756.5}},{t:this.shape_926,p:{x:774.5}},{t:this.shape_925,p:{x:792.7}},{t:this.shape_905,p:{y:265.1,x:808.8}},{t:this.shape_899,p:{y:268.1}},{t:this.shape_924,p:{x:847}},{t:this.shape_923,p:{x:864.3}},{t:this.shape_902,p:{y:265.6}}]},2).to({state:[{t:this.shape_940,p:{y:186.1}},{t:this.shape_939},{t:this.shape_918,p:{x:738.5}},{t:this.shape_916,p:{x:756.9}},{t:this.shape_941},{t:this.shape_915,p:{x:810.5}},{t:this.shape_942,p:{y:188.9}},{t:this.shape_896,p:{x:846.5}},{t:this.shape_943},{t:this.shape_944,p:{x:882.4}},{t:this.shape_945,p:{y:192}},{t:this.shape_895,p:{x:918.5}},{t:this.shape_946,p:{y:188.7}},{t:this.shape_910,p:{y:225.8}},{t:this.shape_938,p:{y:225.9}},{t:this.shape_937},{t:this.shape_936,p:{x:756.5}},{t:this.shape_935},{t:this.shape_934,p:{x:810.3}},{t:this.shape_914,p:{y:228.6}},{t:this.shape_933,p:{x:864.5}},{t:this.shape_932,p:{x:882.9}},{t:this.shape_931},{t:this.shape_908,p:{x:936.5}},{t:this.shape_903,p:{x:954.3}},{t:this.shape_930,p:{x:970.8}},{t:this.shape_904,p:{x:991}},{t:this.shape_919,p:{y:228.4}},{t:this.shape_907,p:{x:1026.5}},{t:this.shape_921,p:{y:228.4}},{t:this.shape_929},{t:this.shape_892,p:{y:265.5}},{t:this.shape_928},{t:this.shape_894,p:{y:268.1}},{t:this.shape_927,p:{x:756.5}},{t:this.shape_926,p:{x:774.5}},{t:this.shape_925,p:{x:792.7}},{t:this.shape_905,p:{y:265.1,x:808.8}},{t:this.shape_899,p:{y:268.1}},{t:this.shape_924,p:{x:847}},{t:this.shape_923,p:{x:864.3}},{t:this.shape_902,p:{y:265.6}}]},3).to({state:[{t:this.shape_940,p:{y:186.1}},{t:this.shape_939},{t:this.shape_918,p:{x:738.5}},{t:this.shape_916,p:{x:756.9}},{t:this.shape_941},{t:this.shape_915,p:{x:810.5}},{t:this.shape_942,p:{y:188.9}},{t:this.shape_896,p:{x:846.5}},{t:this.shape_943},{t:this.shape_944,p:{x:882.4}},{t:this.shape_945,p:{y:192}},{t:this.shape_895,p:{x:918.5}},{t:this.shape_946,p:{y:188.7}},{t:this.shape_910,p:{y:225.8}},{t:this.shape_938,p:{y:225.9}},{t:this.shape_937},{t:this.shape_936,p:{x:756.5}},{t:this.shape_935},{t:this.shape_934,p:{x:810.3}},{t:this.shape_914,p:{y:228.6}},{t:this.shape_933,p:{x:864.5}},{t:this.shape_932,p:{x:882.9}},{t:this.shape_931},{t:this.shape_908,p:{x:936.5}},{t:this.shape_903,p:{x:954.3}},{t:this.shape_930,p:{x:970.8}},{t:this.shape_904,p:{x:991}},{t:this.shape_919,p:{y:228.4}},{t:this.shape_907,p:{x:1026.5}},{t:this.shape_921,p:{y:228.4}},{t:this.shape_929},{t:this.shape_892,p:{y:265.5}},{t:this.shape_928},{t:this.shape_894,p:{y:268.1}},{t:this.shape_927,p:{x:756.5}},{t:this.shape_926,p:{x:774.5}},{t:this.shape_925,p:{x:792.7}},{t:this.shape_905,p:{y:265.1,x:808.8}},{t:this.shape_899,p:{y:268.1}},{t:this.shape_924,p:{x:847}},{t:this.shape_923,p:{x:864.3}},{t:this.shape_902,p:{y:265.6}}]},5).to({state:[{t:this.shape_968,p:{y:186.1}},{t:this.shape_967},{t:this.shape_940,p:{y:225.8}},{t:this.shape_966,p:{y:225.9}},{t:this.shape_936,p:{x:738.5}},{t:this.shape_932,p:{x:756.9}},{t:this.shape_965},{t:this.shape_933,p:{x:810.5}},{t:this.shape_942,p:{y:228.6}},{t:this.shape_908,p:{x:846.5}},{t:this.shape_964},{t:this.shape_963,p:{x:882.4}},{t:this.shape_945,p:{y:231.7}},{t:this.shape_907,p:{x:918.5}},{t:this.shape_946,p:{y:228.4}},{t:this.shape_910,p:{y:265.5}},{t:this.shape_938,p:{y:265.6}},{t:this.shape_962},{t:this.shape_961,p:{x:756.5}},{t:this.shape_960},{t:this.shape_959,p:{x:810.3}},{t:this.shape_958},{t:this.shape_957,p:{x:864.5}},{t:this.shape_956,p:{x:882.9}},{t:this.shape_955},{t:this.shape_927,p:{x:936.5}},{t:this.shape_923,p:{x:954.3}},{t:this.shape_905,p:{y:265.1,x:970.8}},{t:this.shape_924,p:{x:991}},{t:this.shape_919,p:{y:268.1}},{t:this.shape_926,p:{x:1026.5}},{t:this.shape_921,p:{y:268.1}},{t:this.shape_954},{t:this.shape_892,p:{y:305.2}},{t:this.shape_953},{t:this.shape_894,p:{y:307.8}},{t:this.shape_952,p:{x:756.5}},{t:this.shape_951,p:{x:774.5}},{t:this.shape_950},{t:this.shape_949,p:{y:304.8}},{t:this.shape_899,p:{y:307.8}},{t:this.shape_948,p:{x:847}},{t:this.shape_947,p:{x:864.3}},{t:this.shape_902,p:{y:305.3}}]},18).to({state:[{t:this.shape_968,p:{y:186.1}},{t:this.shape_967},{t:this.shape_969,p:{y:188.7}},{t:this.shape_940,p:{y:225.8}},{t:this.shape_966,p:{y:225.9}},{t:this.shape_936,p:{x:738.5}},{t:this.shape_932,p:{x:756.9}},{t:this.shape_965},{t:this.shape_933,p:{x:810.5}},{t:this.shape_942,p:{y:228.6}},{t:this.shape_908,p:{x:846.5}},{t:this.shape_964},{t:this.shape_963,p:{x:882.4}},{t:this.shape_945,p:{y:231.7}},{t:this.shape_907,p:{x:918.5}},{t:this.shape_946,p:{y:228.4}},{t:this.shape_910,p:{y:265.5}},{t:this.shape_938,p:{y:265.6}},{t:this.shape_962},{t:this.shape_961,p:{x:756.5}},{t:this.shape_960},{t:this.shape_959,p:{x:810.3}},{t:this.shape_958},{t:this.shape_957,p:{x:864.5}},{t:this.shape_956,p:{x:882.9}},{t:this.shape_955},{t:this.shape_927,p:{x:936.5}},{t:this.shape_923,p:{x:954.3}},{t:this.shape_905,p:{y:265.1,x:970.8}},{t:this.shape_924,p:{x:991}},{t:this.shape_919,p:{y:268.1}},{t:this.shape_926,p:{x:1026.5}},{t:this.shape_921,p:{y:268.1}},{t:this.shape_954},{t:this.shape_892,p:{y:305.2}},{t:this.shape_953},{t:this.shape_894,p:{y:307.8}},{t:this.shape_952,p:{x:756.5}},{t:this.shape_951,p:{x:774.5}},{t:this.shape_950},{t:this.shape_949,p:{y:304.8}},{t:this.shape_899,p:{y:307.8}},{t:this.shape_948,p:{x:847}},{t:this.shape_947,p:{x:864.3}},{t:this.shape_902,p:{y:305.3}}]},2).to({state:[{t:this.shape_968,p:{y:186.1}},{t:this.shape_967},{t:this.shape_969,p:{y:188.7}},{t:this.shape_898,p:{x:754.8}},{t:this.shape_940,p:{y:225.8}},{t:this.shape_966,p:{y:225.9}},{t:this.shape_936,p:{x:738.5}},{t:this.shape_932,p:{x:756.9}},{t:this.shape_965},{t:this.shape_933,p:{x:810.5}},{t:this.shape_942,p:{y:228.6}},{t:this.shape_908,p:{x:846.5}},{t:this.shape_964},{t:this.shape_963,p:{x:882.4}},{t:this.shape_945,p:{y:231.7}},{t:this.shape_907,p:{x:918.5}},{t:this.shape_946,p:{y:228.4}},{t:this.shape_910,p:{y:265.5}},{t:this.shape_938,p:{y:265.6}},{t:this.shape_962},{t:this.shape_961,p:{x:756.5}},{t:this.shape_960},{t:this.shape_959,p:{x:810.3}},{t:this.shape_958},{t:this.shape_957,p:{x:864.5}},{t:this.shape_956,p:{x:882.9}},{t:this.shape_955},{t:this.shape_927,p:{x:936.5}},{t:this.shape_923,p:{x:954.3}},{t:this.shape_905,p:{y:265.1,x:970.8}},{t:this.shape_924,p:{x:991}},{t:this.shape_919,p:{y:268.1}},{t:this.shape_926,p:{x:1026.5}},{t:this.shape_921,p:{y:268.1}},{t:this.shape_954},{t:this.shape_892,p:{y:305.2}},{t:this.shape_953},{t:this.shape_894,p:{y:307.8}},{t:this.shape_952,p:{x:756.5}},{t:this.shape_951,p:{x:774.5}},{t:this.shape_950},{t:this.shape_949,p:{y:304.8}},{t:this.shape_899,p:{y:307.8}},{t:this.shape_948,p:{x:847}},{t:this.shape_947,p:{x:864.3}},{t:this.shape_902,p:{y:305.3}}]},3).to({state:[{t:this.shape_968,p:{y:186.1}},{t:this.shape_967},{t:this.shape_969,p:{y:188.7}},{t:this.shape_898,p:{x:754.8}},{t:this.shape_970,p:{y:188.7}},{t:this.shape_940,p:{y:225.8}},{t:this.shape_966,p:{y:225.9}},{t:this.shape_936,p:{x:738.5}},{t:this.shape_932,p:{x:756.9}},{t:this.shape_965},{t:this.shape_933,p:{x:810.5}},{t:this.shape_942,p:{y:228.6}},{t:this.shape_908,p:{x:846.5}},{t:this.shape_964},{t:this.shape_963,p:{x:882.4}},{t:this.shape_945,p:{y:231.7}},{t:this.shape_907,p:{x:918.5}},{t:this.shape_946,p:{y:228.4}},{t:this.shape_910,p:{y:265.5}},{t:this.shape_938,p:{y:265.6}},{t:this.shape_962},{t:this.shape_961,p:{x:756.5}},{t:this.shape_960},{t:this.shape_959,p:{x:810.3}},{t:this.shape_958},{t:this.shape_957,p:{x:864.5}},{t:this.shape_956,p:{x:882.9}},{t:this.shape_955},{t:this.shape_927,p:{x:936.5}},{t:this.shape_923,p:{x:954.3}},{t:this.shape_905,p:{y:265.1,x:970.8}},{t:this.shape_924,p:{x:991}},{t:this.shape_919,p:{y:268.1}},{t:this.shape_926,p:{x:1026.5}},{t:this.shape_921,p:{y:268.1}},{t:this.shape_954},{t:this.shape_892,p:{y:305.2}},{t:this.shape_953},{t:this.shape_894,p:{y:307.8}},{t:this.shape_952,p:{x:756.5}},{t:this.shape_951,p:{x:774.5}},{t:this.shape_950},{t:this.shape_949,p:{y:304.8}},{t:this.shape_899,p:{y:307.8}},{t:this.shape_948,p:{x:847}},{t:this.shape_947,p:{x:864.3}},{t:this.shape_902,p:{y:305.3}}]},2).to({state:[{t:this.shape_968,p:{y:186.1}},{t:this.shape_967},{t:this.shape_969,p:{y:188.7}},{t:this.shape_898,p:{x:754.8}},{t:this.shape_970,p:{y:188.7}},{t:this.shape_913,p:{x:792.3}},{t:this.shape_940,p:{y:225.8}},{t:this.shape_966,p:{y:225.9}},{t:this.shape_936,p:{x:738.5}},{t:this.shape_932,p:{x:756.9}},{t:this.shape_965},{t:this.shape_933,p:{x:810.5}},{t:this.shape_942,p:{y:228.6}},{t:this.shape_908,p:{x:846.5}},{t:this.shape_964},{t:this.shape_963,p:{x:882.4}},{t:this.shape_945,p:{y:231.7}},{t:this.shape_907,p:{x:918.5}},{t:this.shape_946,p:{y:228.4}},{t:this.shape_910,p:{y:265.5}},{t:this.shape_938,p:{y:265.6}},{t:this.shape_962},{t:this.shape_961,p:{x:756.5}},{t:this.shape_960},{t:this.shape_959,p:{x:810.3}},{t:this.shape_958},{t:this.shape_957,p:{x:864.5}},{t:this.shape_956,p:{x:882.9}},{t:this.shape_955},{t:this.shape_927,p:{x:936.5}},{t:this.shape_923,p:{x:954.3}},{t:this.shape_905,p:{y:265.1,x:970.8}},{t:this.shape_924,p:{x:991}},{t:this.shape_919,p:{y:268.1}},{t:this.shape_926,p:{x:1026.5}},{t:this.shape_921,p:{y:268.1}},{t:this.shape_954},{t:this.shape_892,p:{y:305.2}},{t:this.shape_953},{t:this.shape_894,p:{y:307.8}},{t:this.shape_952,p:{x:756.5}},{t:this.shape_951,p:{x:774.5}},{t:this.shape_950},{t:this.shape_949,p:{y:304.8}},{t:this.shape_899,p:{y:307.8}},{t:this.shape_948,p:{x:847}},{t:this.shape_947,p:{x:864.3}},{t:this.shape_902,p:{y:305.3}}]},3).to({state:[{t:this.shape_968,p:{y:186.1}},{t:this.shape_967},{t:this.shape_969,p:{y:188.7}},{t:this.shape_898,p:{x:754.8}},{t:this.shape_970,p:{y:188.7}},{t:this.shape_913,p:{x:792.3}},{t:this.shape_897,p:{x:810.7}},{t:this.shape_940,p:{y:225.8}},{t:this.shape_966,p:{y:225.9}},{t:this.shape_936,p:{x:738.5}},{t:this.shape_932,p:{x:756.9}},{t:this.shape_965},{t:this.shape_933,p:{x:810.5}},{t:this.shape_942,p:{y:228.6}},{t:this.shape_908,p:{x:846.5}},{t:this.shape_964},{t:this.shape_963,p:{x:882.4}},{t:this.shape_945,p:{y:231.7}},{t:this.shape_907,p:{x:918.5}},{t:this.shape_946,p:{y:228.4}},{t:this.shape_910,p:{y:265.5}},{t:this.shape_938,p:{y:265.6}},{t:this.shape_962},{t:this.shape_961,p:{x:756.5}},{t:this.shape_960},{t:this.shape_959,p:{x:810.3}},{t:this.shape_958},{t:this.shape_957,p:{x:864.5}},{t:this.shape_956,p:{x:882.9}},{t:this.shape_955},{t:this.shape_927,p:{x:936.5}},{t:this.shape_923,p:{x:954.3}},{t:this.shape_905,p:{y:265.1,x:970.8}},{t:this.shape_924,p:{x:991}},{t:this.shape_919,p:{y:268.1}},{t:this.shape_926,p:{x:1026.5}},{t:this.shape_921,p:{y:268.1}},{t:this.shape_954},{t:this.shape_892,p:{y:305.2}},{t:this.shape_953},{t:this.shape_894,p:{y:307.8}},{t:this.shape_952,p:{x:756.5}},{t:this.shape_951,p:{x:774.5}},{t:this.shape_950},{t:this.shape_949,p:{y:304.8}},{t:this.shape_899,p:{y:307.8}},{t:this.shape_948,p:{x:847}},{t:this.shape_947,p:{x:864.3}},{t:this.shape_902,p:{y:305.3}}]},2).to({state:[{t:this.shape_968,p:{y:186.1}},{t:this.shape_967},{t:this.shape_969,p:{y:188.7}},{t:this.shape_898,p:{x:754.8}},{t:this.shape_970,p:{y:188.7}},{t:this.shape_913,p:{x:792.3}},{t:this.shape_897,p:{x:810.7}},{t:this.shape_944,p:{x:828.4}},{t:this.shape_940,p:{y:225.8}},{t:this.shape_966,p:{y:225.9}},{t:this.shape_936,p:{x:738.5}},{t:this.shape_932,p:{x:756.9}},{t:this.shape_965},{t:this.shape_933,p:{x:810.5}},{t:this.shape_942,p:{y:228.6}},{t:this.shape_908,p:{x:846.5}},{t:this.shape_964},{t:this.shape_963,p:{x:882.4}},{t:this.shape_945,p:{y:231.7}},{t:this.shape_907,p:{x:918.5}},{t:this.shape_946,p:{y:228.4}},{t:this.shape_910,p:{y:265.5}},{t:this.shape_938,p:{y:265.6}},{t:this.shape_962},{t:this.shape_961,p:{x:756.5}},{t:this.shape_960},{t:this.shape_959,p:{x:810.3}},{t:this.shape_958},{t:this.shape_957,p:{x:864.5}},{t:this.shape_956,p:{x:882.9}},{t:this.shape_955},{t:this.shape_927,p:{x:936.5}},{t:this.shape_923,p:{x:954.3}},{t:this.shape_905,p:{y:265.1,x:970.8}},{t:this.shape_924,p:{x:991}},{t:this.shape_919,p:{y:268.1}},{t:this.shape_926,p:{x:1026.5}},{t:this.shape_921,p:{y:268.1}},{t:this.shape_954},{t:this.shape_892,p:{y:305.2}},{t:this.shape_953},{t:this.shape_894,p:{y:307.8}},{t:this.shape_952,p:{x:756.5}},{t:this.shape_951,p:{x:774.5}},{t:this.shape_950},{t:this.shape_949,p:{y:304.8}},{t:this.shape_899,p:{y:307.8}},{t:this.shape_948,p:{x:847}},{t:this.shape_947,p:{x:864.3}},{t:this.shape_902,p:{y:305.3}}]},3).to({state:[{t:this.shape_968,p:{y:186.1}},{t:this.shape_967},{t:this.shape_969,p:{y:188.7}},{t:this.shape_898,p:{x:754.8}},{t:this.shape_970,p:{y:188.7}},{t:this.shape_913,p:{x:792.3}},{t:this.shape_897,p:{x:810.7}},{t:this.shape_944,p:{x:828.4}},{t:this.shape_971,p:{y:188.7}},{t:this.shape_940,p:{y:225.8}},{t:this.shape_966,p:{y:225.9}},{t:this.shape_936,p:{x:738.5}},{t:this.shape_932,p:{x:756.9}},{t:this.shape_965},{t:this.shape_933,p:{x:810.5}},{t:this.shape_942,p:{y:228.6}},{t:this.shape_908,p:{x:846.5}},{t:this.shape_964},{t:this.shape_963,p:{x:882.4}},{t:this.shape_945,p:{y:231.7}},{t:this.shape_907,p:{x:918.5}},{t:this.shape_946,p:{y:228.4}},{t:this.shape_910,p:{y:265.5}},{t:this.shape_938,p:{y:265.6}},{t:this.shape_962},{t:this.shape_961,p:{x:756.5}},{t:this.shape_960},{t:this.shape_959,p:{x:810.3}},{t:this.shape_958},{t:this.shape_957,p:{x:864.5}},{t:this.shape_956,p:{x:882.9}},{t:this.shape_955},{t:this.shape_927,p:{x:936.5}},{t:this.shape_923,p:{x:954.3}},{t:this.shape_905,p:{y:265.1,x:970.8}},{t:this.shape_924,p:{x:991}},{t:this.shape_919,p:{y:268.1}},{t:this.shape_926,p:{x:1026.5}},{t:this.shape_921,p:{y:268.1}},{t:this.shape_954},{t:this.shape_892,p:{y:305.2}},{t:this.shape_953},{t:this.shape_894,p:{y:307.8}},{t:this.shape_952,p:{x:756.5}},{t:this.shape_951,p:{x:774.5}},{t:this.shape_950},{t:this.shape_949,p:{y:304.8}},{t:this.shape_899,p:{y:307.8}},{t:this.shape_948,p:{x:847}},{t:this.shape_947,p:{x:864.3}},{t:this.shape_902,p:{y:305.3}}]},2).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},19).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_993,p:{x:739.8,y:188.7}},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},2).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_993,p:{x:739.8,y:188.7}},{t:this.shape_913,p:{x:756.3}},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},3).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_993,p:{x:739.8,y:188.7}},{t:this.shape_913,p:{x:756.3}},{t:this.shape_994,p:{y:192}},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},2).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_993,p:{x:739.8,y:188.7}},{t:this.shape_913,p:{x:756.3}},{t:this.shape_994,p:{y:192}},{t:this.shape_995,p:{y:185.3}},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},3).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_993,p:{x:739.8,y:188.7}},{t:this.shape_913,p:{x:756.3}},{t:this.shape_994,p:{y:192}},{t:this.shape_995,p:{y:185.3}},{t:this.shape_898,p:{x:808.8}},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},2).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_993,p:{x:739.8,y:188.7}},{t:this.shape_913,p:{x:756.3}},{t:this.shape_994,p:{y:192}},{t:this.shape_995,p:{y:185.3}},{t:this.shape_898,p:{x:808.8}},{t:this.shape_996},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},3).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_993,p:{x:739.8,y:188.7}},{t:this.shape_913,p:{x:756.3}},{t:this.shape_994,p:{y:192}},{t:this.shape_995,p:{y:185.3}},{t:this.shape_898,p:{x:808.8}},{t:this.shape_996},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},2).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_993,p:{x:739.8,y:188.7}},{t:this.shape_913,p:{x:756.3}},{t:this.shape_994,p:{y:192}},{t:this.shape_995,p:{y:185.3}},{t:this.shape_898,p:{x:808.8}},{t:this.shape_996},{t:this.shape_997},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},3).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_993,p:{x:739.8,y:188.7}},{t:this.shape_913,p:{x:756.3}},{t:this.shape_994,p:{y:192}},{t:this.shape_995,p:{y:185.3}},{t:this.shape_898,p:{x:808.8}},{t:this.shape_996},{t:this.shape_997},{t:this.shape_895,p:{x:882.5}},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},2).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_993,p:{x:739.8,y:188.7}},{t:this.shape_913,p:{x:756.3}},{t:this.shape_994,p:{y:192}},{t:this.shape_995,p:{y:185.3}},{t:this.shape_898,p:{x:808.8}},{t:this.shape_996},{t:this.shape_997},{t:this.shape_895,p:{x:882.5}},{t:this.shape_901,p:{x:900.3}},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},3).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_993,p:{x:739.8,y:188.7}},{t:this.shape_913,p:{x:756.3}},{t:this.shape_994,p:{y:192}},{t:this.shape_995,p:{y:185.3}},{t:this.shape_998},{t:this.shape_996},{t:this.shape_997},{t:this.shape_895,p:{x:882.5}},{t:this.shape_901,p:{x:900.3}},{t:this.shape_898,p:{x:916.8}},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},2).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_993,p:{x:739.8,y:188.7}},{t:this.shape_913,p:{x:756.3}},{t:this.shape_994,p:{y:192}},{t:this.shape_995,p:{y:185.3}},{t:this.shape_998},{t:this.shape_996},{t:this.shape_997},{t:this.shape_895,p:{x:882.5}},{t:this.shape_901,p:{x:900.3}},{t:this.shape_898,p:{x:916.8}},{t:this.shape_900,p:{x:937}},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},3).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_993,p:{x:739.8,y:188.7}},{t:this.shape_913,p:{x:756.3}},{t:this.shape_994,p:{y:192}},{t:this.shape_995,p:{y:185.3}},{t:this.shape_998},{t:this.shape_996},{t:this.shape_997},{t:this.shape_895,p:{x:882.5}},{t:this.shape_901,p:{x:900.3}},{t:this.shape_898,p:{x:916.8}},{t:this.shape_900,p:{x:937}},{t:this.shape_999,p:{y:188.7}},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},2).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_993,p:{x:739.8,y:188.7}},{t:this.shape_913,p:{x:756.3}},{t:this.shape_994,p:{y:192}},{t:this.shape_995,p:{y:185.3}},{t:this.shape_998},{t:this.shape_996},{t:this.shape_997},{t:this.shape_896,p:{x:882.5}},{t:this.shape_901,p:{x:900.3}},{t:this.shape_898,p:{x:916.8}},{t:this.shape_900,p:{x:937}},{t:this.shape_999,p:{y:188.7}},{t:this.shape_895,p:{x:972.5}},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},3).to({state:[{t:this.shape_992,p:{y:186.1}},{t:this.shape_893},{t:this.shape_1000,p:{y:188.7}},{t:this.shape_913,p:{x:756.3}},{t:this.shape_994,p:{y:192}},{t:this.shape_995,p:{y:185.3}},{t:this.shape_998},{t:this.shape_996},{t:this.shape_997},{t:this.shape_896,p:{x:882.5}},{t:this.shape_901,p:{x:900.3}},{t:this.shape_898,p:{x:916.8}},{t:this.shape_900,p:{x:937}},{t:this.shape_999,p:{y:188.7}},{t:this.shape_895,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:188.7}},{t:this.shape_968,p:{y:225.8}},{t:this.shape_991,p:{y:225.9}},{t:this.shape_969,p:{y:228.4}},{t:this.shape_905,p:{y:225.4,x:754.8}},{t:this.shape_970,p:{y:228.4}},{t:this.shape_934,p:{x:792.3}},{t:this.shape_906,p:{x:810.7}},{t:this.shape_963,p:{x:828.4}},{t:this.shape_971,p:{y:228.4}},{t:this.shape_940,p:{y:265.5}},{t:this.shape_966,p:{y:265.6}},{t:this.shape_961,p:{x:738.5}},{t:this.shape_956,p:{x:756.9}},{t:this.shape_990},{t:this.shape_957,p:{x:810.5}},{t:this.shape_942,p:{y:268.3}},{t:this.shape_927,p:{x:846.5}},{t:this.shape_989},{t:this.shape_988,p:{x:882.4}},{t:this.shape_945,p:{y:271.4}},{t:this.shape_926,p:{x:918.5}},{t:this.shape_946,p:{y:268.1}},{t:this.shape_910,p:{y:305.2}},{t:this.shape_938,p:{y:305.3}},{t:this.shape_987},{t:this.shape_986,p:{x:756.5}},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982,p:{x:864.5}},{t:this.shape_981,p:{x:882.9}},{t:this.shape_980},{t:this.shape_952,p:{x:936.5}},{t:this.shape_947,p:{x:954.3}},{t:this.shape_979,p:{y:304.8}},{t:this.shape_948,p:{x:991}},{t:this.shape_919,p:{y:307.8}},{t:this.shape_951,p:{x:1026.5}},{t:this.shape_921,p:{y:307.8}},{t:this.shape_978},{t:this.shape_892,p:{y:344.9}},{t:this.shape_977},{t:this.shape_894,p:{y:347.5}},{t:this.shape_976,p:{x:756.5}},{t:this.shape_975,p:{x:774.5}},{t:this.shape_974},{t:this.shape_949,p:{y:344.5}},{t:this.shape_899,p:{y:347.5}},{t:this.shape_973,p:{x:847}},{t:this.shape_972,p:{x:864.3}},{t:this.shape_902,p:{y:345}}]},2).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},17).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_944,p:{x:738.4}},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},2).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_944,p:{x:738.4}},{t:this.shape_1024,p:{x:756.1}},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},3).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_944,p:{x:738.4}},{t:this.shape_1024,p:{x:756.1}},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},2).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_944,p:{x:738.4}},{t:this.shape_1024,p:{x:756.1}},{t:this.shape_1025},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},3).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_944,p:{x:738.4}},{t:this.shape_1026,p:{x:756.1}},{t:this.shape_1025},{t:this.shape_1024,p:{x:810.1}},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},2).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_944,p:{x:738.4}},{t:this.shape_1026,p:{x:756.1}},{t:this.shape_1025},{t:this.shape_1024,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},3).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_944,p:{x:738.4}},{t:this.shape_1026,p:{x:756.1}},{t:this.shape_1025},{t:this.shape_1024,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},2).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_944,p:{x:738.4}},{t:this.shape_1026,p:{x:756.1}},{t:this.shape_1025},{t:this.shape_1024,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},3).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_944,p:{x:738.4}},{t:this.shape_1026,p:{x:756.1}},{t:this.shape_1025},{t:this.shape_1024,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_1027},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},2).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_944,p:{x:738.4}},{t:this.shape_1026,p:{x:756.1}},{t:this.shape_1025},{t:this.shape_1024,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_1027},{t:this.shape_913,p:{x:900.3}},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},3).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_944,p:{x:738.4}},{t:this.shape_1026,p:{x:756.1}},{t:this.shape_1025},{t:this.shape_1024,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_1027},{t:this.shape_913,p:{x:900.3}},{t:this.shape_1028},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},2).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_944,p:{x:738.4}},{t:this.shape_1026,p:{x:756.1}},{t:this.shape_1025},{t:this.shape_1024,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_1027},{t:this.shape_913,p:{x:900.3}},{t:this.shape_1028},{t:this.shape_895,p:{x:936.5}},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},3).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_944,p:{x:738.4}},{t:this.shape_1026,p:{x:756.1}},{t:this.shape_1025},{t:this.shape_1024,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_1027},{t:this.shape_913,p:{x:900.3}},{t:this.shape_1028},{t:this.shape_895,p:{x:936.5}},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},2).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_944,p:{x:738.4}},{t:this.shape_1026,p:{x:756.1}},{t:this.shape_1025},{t:this.shape_1024,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_1027},{t:this.shape_913,p:{x:900.3}},{t:this.shape_1028},{t:this.shape_895,p:{x:936.5}},{t:this.shape_1029},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},3).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1030},{t:this.shape_1026,p:{x:756.1}},{t:this.shape_1025},{t:this.shape_1024,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_1027},{t:this.shape_913,p:{x:900.3}},{t:this.shape_1028},{t:this.shape_895,p:{x:936.5}},{t:this.shape_1029},{t:this.shape_944,p:{x:990.4}},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},2).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1030},{t:this.shape_1031},{t:this.shape_1025},{t:this.shape_1026,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_1027},{t:this.shape_913,p:{x:900.3}},{t:this.shape_1028},{t:this.shape_895,p:{x:936.5}},{t:this.shape_1029},{t:this.shape_944,p:{x:990.4}},{t:this.shape_1024,p:{x:1008.1}},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},3).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1030},{t:this.shape_1031},{t:this.shape_1025},{t:this.shape_1026,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_1027},{t:this.shape_913,p:{x:900.3}},{t:this.shape_1028},{t:this.shape_895,p:{x:936.5}},{t:this.shape_1029},{t:this.shape_944,p:{x:990.4}},{t:this.shape_1024,p:{x:1008.1}},{t:this.shape_1032},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},2).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1030},{t:this.shape_1031},{t:this.shape_1025},{t:this.shape_1026,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_1027},{t:this.shape_913,p:{x:900.3}},{t:this.shape_1028},{t:this.shape_895,p:{x:936.5}},{t:this.shape_1029},{t:this.shape_944,p:{x:990.4}},{t:this.shape_1024,p:{x:1008.1}},{t:this.shape_1032},{t:this.shape_912,p:{x:1043.8}},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},3).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1030},{t:this.shape_1031},{t:this.shape_1025},{t:this.shape_1026,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_1027},{t:this.shape_913,p:{x:900.3}},{t:this.shape_1028},{t:this.shape_895,p:{x:936.5}},{t:this.shape_1029},{t:this.shape_944,p:{x:990.4}},{t:this.shape_1024,p:{x:1008.1}},{t:this.shape_1032},{t:this.shape_912,p:{x:1043.8}},{t:this.shape_1033},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},2).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1030},{t:this.shape_1031},{t:this.shape_1025},{t:this.shape_1026,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_1027},{t:this.shape_913,p:{x:900.3}},{t:this.shape_1028},{t:this.shape_895,p:{x:936.5}},{t:this.shape_1029},{t:this.shape_944,p:{x:990.4}},{t:this.shape_1024,p:{x:1008.1}},{t:this.shape_1032},{t:this.shape_912,p:{x:1043.8}},{t:this.shape_1033},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},7).to({state:[{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1030},{t:this.shape_1031},{t:this.shape_1025},{t:this.shape_1026,p:{x:810.1}},{t:this.shape_901,p:{x:828.3}},{t:this.shape_897,p:{x:846.7}},{t:this.shape_1027},{t:this.shape_913,p:{x:900.3}},{t:this.shape_1028},{t:this.shape_895,p:{x:936.5}},{t:this.shape_1029},{t:this.shape_944,p:{x:990.4}},{t:this.shape_1024,p:{x:1008.1}},{t:this.shape_1032},{t:this.shape_912,p:{x:1043.8}},{t:this.shape_1033},{t:this.shape_992,p:{y:225.8}},{t:this.shape_909},{t:this.shape_1000,p:{y:228.4}},{t:this.shape_934,p:{x:756.3}},{t:this.shape_994,p:{y:231.7}},{t:this.shape_995,p:{y:225}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_908,p:{x:882.5}},{t:this.shape_903,p:{x:900.3}},{t:this.shape_930,p:{x:916.8}},{t:this.shape_904,p:{x:937}},{t:this.shape_999,p:{y:228.4}},{t:this.shape_907,p:{x:972.5}},{t:this.shape_993,p:{x:991.8,y:228.4}},{t:this.shape_968,p:{y:265.5}},{t:this.shape_991,p:{y:265.6}},{t:this.shape_969,p:{y:268.1}},{t:this.shape_905,p:{y:265.1,x:754.8}},{t:this.shape_970,p:{y:268.1}},{t:this.shape_959,p:{x:792.3}},{t:this.shape_925,p:{x:810.7}},{t:this.shape_988,p:{x:828.4}},{t:this.shape_971,p:{y:268.1}},{t:this.shape_940,p:{y:305.2}},{t:this.shape_966,p:{y:305.3}},{t:this.shape_986,p:{x:738.5}},{t:this.shape_981,p:{x:756.9}},{t:this.shape_1018},{t:this.shape_982,p:{x:810.5}},{t:this.shape_942,p:{y:308}},{t:this.shape_952,p:{x:846.5}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_945,p:{y:311.1}},{t:this.shape_951,p:{x:918.5}},{t:this.shape_946,p:{y:307.8}},{t:this.shape_910,p:{y:344.9}},{t:this.shape_938,p:{y:345}},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_976,p:{x:936.5}},{t:this.shape_972,p:{x:954.3}},{t:this.shape_979,p:{y:344.5}},{t:this.shape_973,p:{x:991}},{t:this.shape_919,p:{y:347.5}},{t:this.shape_975,p:{x:1026.5}},{t:this.shape_921,p:{y:347.5}},{t:this.shape_1007},{t:this.shape_892,p:{y:384.6}},{t:this.shape_1006},{t:this.shape_894,p:{y:387.2}},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_949,p:{y:384.2}},{t:this.shape_899,p:{y:387.2}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_902,p:{y:384.7}}]},18).to({state:[]},18).wait(925));

	// Cursor
	this.instance_25 = new lib.BlinkingCursor();
	this.instance_25.parent = this;
	this.instance_25.setTransform(722.8,190,1,1,0,0,0,9.2,15.1);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(24).to({_off:false},0).wait(8).to({_off:true},1).wait(9).to({_off:false},0).wait(8).to({_off:true},1).wait(9).to({_off:false},0).wait(1).to({x:740.8},0).wait(2).to({x:758.8},0).wait(3).to({x:776.8},0).wait(2).to({x:794.8},0).to({_off:true},1).wait(9).to({_off:false,x:867.8},0).wait(3).to({x:883.8},0).wait(2).to({x:900.8},0).wait(3).to({_off:true},1).wait(9).to({_off:false},0).wait(8).to({_off:true},1).wait(9).to({_off:false,x:722.8},0).wait(1).to({x:740.8},0).wait(2).to({x:758.8},0).wait(3).to({x:776.8},0).wait(2).to({x:794.8},0).to({_off:true},1).wait(9).to({_off:false,x:867.8},0).wait(3).to({x:883.8},0).wait(2).to({x:901.8},0).wait(3).to({x:917.8},0).to({_off:true},1).wait(9).to({_off:false,x:990.8},0).wait(4).to({x:1012.8},0).wait(4).to({x:1029.8},0).to({_off:true},1).wait(9).to({_off:false,x:1082.8},0).wait(8).to({_off:true},1).wait(9).to({_off:false,x:744.8},0).wait(2).to({x:759.8},0).wait(3).to({x:777.8},0).wait(2).to({x:795.8},0).wait(1).to({x:1082.8},0).to({_off:true},1).wait(9).to({_off:false,x:868.8},0).wait(2).to({x:886.8},0).wait(2).to({x:903.8},0).wait(3).to({x:921.8},0).to({_off:true},1).wait(9).to({_off:false,x:958.8},0).wait(8).to({_off:true},1).wait(9).to({_off:false,x:742.8},0).wait(2).to({x:759.8},0).wait(3).to({x:775.8},0).wait(2).to({x:795.8},0).wait(1).to({_off:true},1).wait(9).to({_off:false,x:867.8},0).wait(8).to({_off:true},1).wait(9).to({_off:false,x:740.8,y:189},0).wait(2).to({x:759.8},0).wait(3).to({x:776.8},0).wait(2).to({x:794.8},0).wait(1).to({_off:true},1).wait(9).to({_off:false,x:848.8,y:190},0).wait(2).to({x:885.8,y:188},0).wait(2).to({x:903.8},0).wait(3).to({x:920.8},0).wait(1).to({_off:true},1).wait(9).to({_off:false,x:992.8,y:190},0).wait(1).to({x:1011.8},0).wait(7).to({_off:true},1).wait(9).to({_off:false,x:742.8,y:189},0).wait(2).to({x:758.8},0).wait(3).to({x:775.8},0).wait(2).to({x:792.8},0).wait(1).to({_off:true},1).wait(9).to({_off:false,x:867.8,y:190},0).wait(2).to({x:884.8},0).wait(2).to({x:902.8},0).wait(3).to({x:920.8},0).wait(1).to({x:921.8},0).to({_off:true},1).wait(9).to({_off:false,x:1010.8,y:186},0).wait(4).to({x:1028.8},0).wait(2).to({x:1048.8},0).wait(2).to({_off:true},1).wait(9).to({_off:false,x:1080.8},0).wait(8).to({_off:true},1).wait(9).to({_off:false},0).wait(8).to({_off:true},1).wait(934));

	// Back Gr
	this.instance_26 = new lib.green_background();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-727.7,309.5,1,1,0,0,0,399.6,200.6);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(418).to({_off:false},0).wait(1).to({regX:399.7,x:-655.2},0).wait(1).to({x:-582.9},0).wait(1).to({x:-510.5},0).wait(1).to({x:-438.1},0).wait(1).to({x:-365.8},0).wait(1).to({x:-293.4},0).wait(1).to({x:-221},0).wait(1).to({x:-148.7},0).wait(1).to({x:-76.3},0).wait(1).to({x:-3.9},0).wait(1).to({x:68.4},0).wait(1).to({x:140.8},0).wait(1).to({x:213.2},0).wait(1).to({x:285.5},0).wait(1).to({x:357.9},0).wait(1).to({x:430.2},0).wait(1).to({x:502.6},0).wait(1).to({x:575},0).wait(1).to({x:647.3},0).wait(1).to({x:719.7},0).wait(211).to({_off:true},1).wait(694));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1074.2,485,285.7,268.5);
// library properties:
lib.properties = {
	width: 1440,
	height: 620,
	fps: 24,
	color: "#353535",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;