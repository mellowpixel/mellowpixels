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
	this.shape.setTransform(399.6,200.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.green_background, new cjs.Rectangle(0,0,799.2,401.1), null);


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
	this.instance.setTransform(179,147,1,1,0,0,0,65,79.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(225).to({_off:false},0).wait(176).to({_off:true},1).wait(942));

	// Head R1
	this.instance_1 = new lib.HeadR1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(175,148,1,1,0,0,0,60.6,81.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(223).to({_off:false},0).wait(1).to({_off:true},1).wait(177).to({_off:false},0).to({_off:true},1).wait(941));

	// Head
	this.instance_2 = new lib.Head();
	this.instance_2.parent = this;
	this.instance_2.setTransform(176,149,1,1,0,0,0,63,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(185).to({regY:127,y:192},0).wait(1).to({regY:84,rotation:1.8,x:177.4,y:149},0).wait(1).to({rotation:3.7,x:178.7,y:149.1},0).wait(1).to({rotation:5.5,x:180.1,y:149.2},0).wait(1).to({rotation:7.3,x:181.5,y:149.3},0).wait(1).to({rotation:9.1,x:182.8,y:149.6},0).wait(1).to({rotation:11,x:184.2,y:149.7},0).wait(28).to({rotation:5.5,x:180.1,y:149.2},0).wait(1).to({rotation:0.1,x:176.1,y:149},0).wait(1).to({regY:127,rotation:0,x:176,y:192},0).wait(1).to({regY:84,y:149},0).to({_off:true},1).wait(180).to({_off:false},0).to({_off:true},16).wait(21).to({_off:false,x:641.2},0).to({_off:true},100).wait(75).to({_off:false},0).to({_off:true},189).wait(124).to({_off:false},0).to({_off:true},95).wait(190).to({_off:false},0).wait(114).to({x:613.8},0).wait(1).to({x:586.4},0).wait(1).to({x:559.1},0).wait(1).to({x:531.7},0).wait(1).to({x:504.4},0).wait(1).to({x:477},0).wait(1).to({x:449.7},0).wait(1).to({x:422.3},0).wait(1).to({x:395},0).wait(1).to({x:367.6},0).wait(1).to({x:340.3},0).wait(1).to({x:312.9},0).wait(1).to({x:285.6},0).wait(1).to({x:258.2},0).wait(1).to({x:230.9},0).wait(1).to({x:203.5},0).wait(1).to({x:176.2},0).wait(1));

	// Head L1
	this.instance_3 = new lib.HeadL1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(203,146,1,1,0,0,0,60.6,81.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(419).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false,x:644.1},0).to({_off:true},1).wait(100).to({_off:false},0).to({_off:true},1).wait(73).to({_off:false},0).to({_off:true},1).wait(189).to({_off:false},0).to({_off:true},1).wait(122).to({_off:false},0).to({_off:true},1).wait(95).to({_off:false},0).to({_off:true},1).wait(188).to({_off:false},0).to({_off:true},1).wait(131));

	// Head L2
	this.instance_4 = new lib.HeadL2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(222,144,1,1,0,0,0,65,79.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(420).to({_off:false},0).wait(1).to({x:245.3},0).wait(1).to({x:268.6},0).wait(1).to({x:291.8},0).wait(1).to({x:315.1},0).wait(1).to({x:338.4},0).wait(1).to({x:361.7},0).wait(1).to({x:384.9},0).wait(1).to({x:408.2},0).wait(1).to({x:431.5},0).wait(1).to({x:454.8},0).wait(1).to({x:478.1},0).wait(1).to({x:501.3},0).wait(1).to({x:524.6},0).wait(1).to({x:547.9},0).wait(1).to({x:571.2},0).wait(1).to({x:594.4},0).wait(1).to({x:617.7},0).wait(1).to({x:641},0).to({_off:true},1).wait(102).to({_off:false},0).to({_off:true},73).wait(191).to({_off:false},0).wait(121).to({_off:true},1).wait(97).to({_off:false,regY:134.6,y:198.7},0).wait(1).to({regY:79.9,rotation:-0.7,x:640.3,y:144},0).wait(1).to({rotation:-1.5,x:639.6},0).wait(1).to({rotation:-2.2,x:638.9,y:144.1},0).wait(1).to({rotation:-3,x:638.1},0).wait(1).to({rotation:-3.7,x:637.4},0).wait(1).to({rotation:-4.5,x:636.7,y:144.2},0).wait(1).to({rotation:-5.2,x:636},0).wait(1).to({rotation:-6,x:635.3,y:144.3},0).wait(1).to({rotation:-6.7,x:634.6,y:144.4},0).wait(1).to({rotation:-7.5,x:633.9},0).wait(1).to({rotation:-8.2,x:633.2,y:144.5},0).wait(1).to({rotation:-9,x:632.4,y:144.7},0).wait(1).to({rotation:-9.7,x:631.7,y:144.8},0).wait(1).to({rotation:-10.5,x:631,y:144.9},0).wait(1).to({rotation:-11.2,x:630.3,y:145},0).wait(1).to({rotation:-12,x:629.6,y:145.2},0).wait(1).to({rotation:-12.7,x:628.9,y:145.4},0).wait(1).to({rotation:-13.5,x:628.2,y:145.5},0).wait(1).to({rotation:-14.2,x:627.5,y:145.7},0).wait(1).to({rotation:-15,x:626.9,y:145.9},0).wait(1).to({rotation:-14.3,x:627.4,y:145.7},0).wait(1).to({rotation:-13.7,x:628.1,y:145.6},0).wait(1).to({rotation:-13,x:628.7,y:145.4},0).wait(1).to({rotation:-12.4,x:629.3,y:145.3},0).wait(1).to({rotation:-11.7,x:629.9,y:145.1},0).wait(1).to({rotation:-11,x:630.5,y:145},0).wait(1).to({rotation:-10.4,x:631.2,y:144.9},0).wait(1).to({rotation:-9.7,x:631.8,y:144.8},0).wait(1).to({rotation:-9.1,x:632.4,y:144.7},0).wait(1).to({rotation:-8.4,x:633,y:144.6},0).wait(1).to({rotation:-7.7,x:633.6,y:144.5},0).wait(1).to({rotation:-7.1,x:634.3,y:144.4},0).wait(1).to({rotation:-6.4,x:634.9},0).wait(1).to({rotation:-5.8,x:635.5,y:144.3},0).wait(1).to({rotation:-5.1,x:636.1,y:144.2},0).wait(1).to({rotation:-4.4,x:636.8,y:144.1},0).wait(1).to({rotation:-3.8,x:637.4},0).wait(1).to({rotation:-3.1,x:638},0).wait(1).to({rotation:-2.5,x:638.7},0).wait(1).to({rotation:-1.8,x:639.2,y:144},0).wait(1).to({rotation:-1.1,x:639.9},0).wait(1).to({rotation:-0.5,x:640.5},0).wait(1).to({rotation:0.2,x:641.2},0).wait(1).to({regY:131.9,rotation:0,x:641,y:196},0).to({_off:true},144).wait(132));

	// Body
	this.instance_5 = new lib.Body();
	this.instance_5.parent = this;
	this.instance_5.setTransform(177,265.1,1,1,0,0,0,142.8,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(419).to({regX:142.9,x:200.2},0).wait(1).to({x:223.4},0).wait(1).to({x:246.6},0).wait(1).to({x:269.8},0).wait(1).to({x:293},0).wait(1).to({x:316.2},0).wait(1).to({x:339.4},0).wait(1).to({x:362.6},0).wait(1).to({x:385.8},0).wait(1).to({x:409},0).wait(1).to({x:432.2},0).wait(1).to({x:455.4},0).wait(1).to({x:478.6},0).wait(1).to({x:501.8},0).wait(1).to({x:525},0).wait(1).to({x:548.2},0).wait(1).to({x:571.4},0).wait(1).to({x:594.6},0).wait(1).to({x:617.8},0).wait(1).to({x:641},0).wait(889).to({x:613.7},0).wait(1).to({x:586.4},0).wait(1).to({x:559.1},0).wait(1).to({x:531.8},0).wait(1).to({x:504.4},0).wait(1).to({x:477.1},0).wait(1).to({x:449.8},0).wait(1).to({x:422.5},0).wait(1).to({x:395.2},0).wait(1).to({x:367.9},0).wait(1).to({x:340.6},0).wait(1).to({x:313.3},0).wait(1).to({x:285.9},0).wait(1).to({x:258.6},0).wait(1).to({x:231.3},0).wait(1).to({x:204},0).wait(1).to({x:176.7},0).wait(1));

	// circle flash
	this.instance_6 = new lib.Circle_Flash("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(118.7,218.4,1,1,0,0,0,7.5,7.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1311).to({_off:false},0).to({scaleX:53.33,scaleY:53.33,x:400,y:198.6},24).to({_off:true},1).wait(8));

	// pointer line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("AF2AAIicAAImeAAIiwAA");
	this.shape.setTransform(241.8,120.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2).p("Al0AqICwAAIGehTICbAA");
	this.shape_1.setTransform(241.8,124.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2).p("Al0BUICwAAIGeinICbAA");
	this.shape_2.setTransform(241.8,128.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2).p("Al0B+ICxAAIGcj7ICcAA");
	this.shape_3.setTransform(241.8,132.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2).p("Al0CoICxAAIGclPICcAA");
	this.shape_4.setTransform(241.9,136.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2).p("AlzDSICwAAIGcmjICbAA");
	this.shape_5.setTransform(241.9,141.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2).p("AlzD8ICwAAIGcn3ICbAA");
	this.shape_6.setTransform(241.9,145.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2).p("AlzEmICxAAIGapLICcAA");
	this.shape_7.setTransform(241.9,149.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2).p("AlzFQICxAAIGaqfICcAA");
	this.shape_8.setTransform(242,153.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2).p("AlyF6ICwAAIGarzICbAA");
	this.shape_9.setTransform(242,157.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2).p("AFzmjIibAAImZNHIixAA");
	this.shape_10.setTransform(242,162.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2).p("AlyGqICxAAIGZtTICbAA");
	this.shape_11.setTransform(242,162.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2).p("AlyGwICxAAIGZtfICbAA");
	this.shape_12.setTransform(242,163.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(2).p("AlyG2ICxAAIGZtrICbAA");
	this.shape_13.setTransform(242,163.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2).p("AlyG7ICxAAIGZt2ICbAA");
	this.shape_14.setTransform(242,164.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2).p("AlyHBICxAAIGZuCICbAA");
	this.shape_15.setTransform(242,165);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2).p("AlyHIICxAAIGZuPICbAA");
	this.shape_16.setTransform(242,165.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2).p("AlyHNICxAAIGZuZICbAA");
	this.shape_17.setTransform(242,166.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(2).p("AlyHTICxAAIGZulICbAA");
	this.shape_18.setTransform(242,166.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(2).p("AlyHZICxAAIGZuxICbAA");
	this.shape_19.setTransform(242,167.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(2).p("AlyHfICxAAIGZu9ICbAA");
	this.shape_20.setTransform(242,168);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(2).p("AlyHlICxAAIGZvJICbAA");
	this.shape_21.setTransform(242,168.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(2).p("AlyHrICxAAIGZvVICbAA");
	this.shape_22.setTransform(242,169.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(2).p("AlyHxICxAAIGZvhICbAA");
	this.shape_23.setTransform(242,169.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(2).p("AlyH3ICxAAIGZvtICbAA");
	this.shape_24.setTransform(242,170.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(2).p("AlyH8ICxAAIGZv4ICbAA");
	this.shape_25.setTransform(242,170.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(2).p("AlyICICxAAIGZwEICbAA");
	this.shape_26.setTransform(242,171.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(2).p("AlyIIICxAAIGZwPICbAA");
	this.shape_27.setTransform(242,172.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(2).p("AlyIOICxAAIGZwbICbAA");
	this.shape_28.setTransform(242,172.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(2).p("AlyIUICxAAIGZwnICbAA");
	this.shape_29.setTransform(242,173.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(2).p("AlyIaICxAAIGZwzICbAA");
	this.shape_30.setTransform(242,173.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(2).p("AlyIgICxAAIGZw/ICbAA");
	this.shape_31.setTransform(242,174.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(2).p("AlyImICxAAIGZxLICbAA");
	this.shape_32.setTransform(242,175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(2).p("AlyIsICxAAIGZxXICbAA");
	this.shape_33.setTransform(242,175.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(2).p("AlyIyICxAAIGZxiICbAA");
	this.shape_34.setTransform(242,176.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(2).p("AFzo3IibAAImZRvIixAA");
	this.shape_35.setTransform(242,176.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(2).p("AlyIvICxAAIGZxdICbAA");
	this.shape_36.setTransform(242,176);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(2).p("AlyInICwAAIGaxNICbAA");
	this.shape_37.setTransform(242,175.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(2).p("AlyIfICwAAIGaw9ICbAA");
	this.shape_38.setTransform(242,174.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(2).p("AlzIXICxAAIGawtICcAA");
	this.shape_39.setTransform(242,173.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(2).p("AlzIPICxAAIGawcICcAA");
	this.shape_40.setTransform(242,172.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(2).p("AlzIGICxAAIGawLICcAA");
	this.shape_41.setTransform(241.9,171.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(2).p("AlzH+ICxAAIGav7ICcAA");
	this.shape_42.setTransform(241.9,171.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(2).p("AlzH2ICwAAIGcvrICbAA");
	this.shape_43.setTransform(241.9,170.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(2).p("AlzHtICwAAIGcvaICbAA");
	this.shape_44.setTransform(241.9,169.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(2).p("AlzHlICwAAIGcvJICbAA");
	this.shape_45.setTransform(241.9,168.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(2).p("AlzHdICwAAIGcu5ICbAA");
	this.shape_46.setTransform(241.9,167.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(2).p("Al0HVICxAAIGcupICcAA");
	this.shape_47.setTransform(241.9,167);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(2).p("Al0HNICxAAIGcuZICcAA");
	this.shape_48.setTransform(241.9,166.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(2).p("Al0HFICxAAIGcuJICcAA");
	this.shape_49.setTransform(241.8,165.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(2).p("Al0G8ICxAAIGct3ICcAA");
	this.shape_50.setTransform(241.8,164.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(2).p("Al0G0ICwAAIGetnICbAA");
	this.shape_51.setTransform(241.8,163.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(2).p("Al0GsICwAAIGetXICbAA");
	this.shape_52.setTransform(241.8,162.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(2).p("Al0GkICwAAIGetHICbAA");
	this.shape_53.setTransform(241.8,162);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(2).p("Al0GcICwAAIGes2ICbAA");
	this.shape_54.setTransform(241.8,161.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(2).p("Al0GTICwAAIGeslICcAA");
	this.shape_55.setTransform(241.8,160.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(2).p("AF2mKIicAAImeMVIiwAA");
	this.shape_56.setTransform(241.8,159.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(2).p("AF2khIicAAImeJDIiwAA");
	this.shape_57.setTransform(241.8,170.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(2).p("Al0EqICwAAIGepTICcAA");
	this.shape_58.setTransform(241.8,170.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(2).p("Al0ExICwAAIGephICcAA");
	this.shape_59.setTransform(241.8,171.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(2).p("Al0E5ICwAAIGepxICcAA");
	this.shape_60.setTransform(241.8,172.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(2).p("Al0FAICwAAIGeqAICcAA");
	this.shape_61.setTransform(241.8,173.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(2).p("Al0FIICwAAIGeqPICcAA");
	this.shape_62.setTransform(241.8,173.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(2).p("Al0FQICwAAIGeqfICcAA");
	this.shape_63.setTransform(241.8,174.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(2).p("Al0FXICwAAIGeqtICcAA");
	this.shape_64.setTransform(241.8,175.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(2).p("Al0FfICwAAIGeq9ICcAA");
	this.shape_65.setTransform(241.8,176.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(2).p("Al0FmICwAAIGerLICcAA");
	this.shape_66.setTransform(241.8,176.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(2).p("Al0FuICwAAIGerbICcAA");
	this.shape_67.setTransform(241.8,177.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(2).p("Al0F2ICwAAIGerrICcAA");
	this.shape_68.setTransform(241.8,178.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(2).p("Al0F9ICwAAIGer5ICcAA");
	this.shape_69.setTransform(241.8,179.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(2).p("Al0GFICwAAIGesJICcAA");
	this.shape_70.setTransform(241.8,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(2).p("Al0GNICwAAIGesYICcAA");
	this.shape_71.setTransform(241.8,180.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(2).p("Al0GUICwAAIGesnICcAA");
	this.shape_72.setTransform(241.8,181.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(2).p("Al0GcICwAAIGes3ICcAA");
	this.shape_73.setTransform(241.8,182.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(2).p("Al0GjICwAAIGetFICcAA");
	this.shape_74.setTransform(241.8,183);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(2).p("Al0GrICwAAIGetVICcAA");
	this.shape_75.setTransform(241.8,183.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(2).p("Al0GyICwAAIGetjICcAA");
	this.shape_76.setTransform(241.8,184.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(2).p("Al0G6ICwAAIGetzICcAA");
	this.shape_77.setTransform(241.8,185.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(2).p("Al0HCICwAAIGeuDICcAA");
	this.shape_78.setTransform(241.8,186);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(2).p("Al0HKICwAAIGeuTICcAA");
	this.shape_79.setTransform(241.8,186.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(2).p("Al0HRICwAAIGeuhICcAA");
	this.shape_80.setTransform(241.8,187.6);
	this.shape_80._off = true;

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(2).p("AF2jAIicAAImeGBIiwAA");
	this.shape_81.setTransform(241.8,179.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(2).p("Al0DIICwAAIGemPICcAA");
	this.shape_82.setTransform(241.8,180.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(2).p("Al0DPICwAAIGemdICcAA");
	this.shape_83.setTransform(241.8,181.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(2).p("Al0DXICwAAIGemsICcAA");
	this.shape_84.setTransform(241.8,181.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(2).p("Al0DeICwAAIGem7ICcAA");
	this.shape_85.setTransform(241.8,182.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(2).p("Al0DlICwAAIGenJICcAA");
	this.shape_86.setTransform(241.8,183.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(2).p("Al0DsICwAAIGenXICcAA");
	this.shape_87.setTransform(241.8,184.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(2).p("Al0DzICwAAIGenlICcAA");
	this.shape_88.setTransform(241.8,184.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(2).p("Al0D7ICwAAIGen1ICcAA");
	this.shape_89.setTransform(241.8,185.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(2).p("Al0ECICwAAIGeoDICcAA");
	this.shape_90.setTransform(241.8,186.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(2).p("Al0EJICwAAIGeoRICcAA");
	this.shape_91.setTransform(241.8,186.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(2).p("Al0EQICwAAIGeofICcAA");
	this.shape_92.setTransform(241.8,187.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(2).p("Al0EXICwAAIGeotICcAA");
	this.shape_93.setTransform(241.8,188.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(2).p("Al0EeICwAAIGeo7ICcAA");
	this.shape_94.setTransform(241.8,189.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFFFF").ss(2).p("Al0ElICwAAIGepKICcAA");
	this.shape_95.setTransform(241.8,189.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(2).p("Al0EtICwAAIGepZICcAA");
	this.shape_96.setTransform(241.8,190.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(2).p("Al0E0ICwAAIGepnICcAA");
	this.shape_97.setTransform(241.8,191.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(2).p("Al0E7ICwAAIGep1ICcAA");
	this.shape_98.setTransform(241.8,192);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFFFFF").ss(2).p("Al0FCICwAAIGeqDICcAA");
	this.shape_99.setTransform(241.8,192.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(2).p("Al0FJICwAAIGeqRICcAA");
	this.shape_100.setTransform(241.8,193.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(2).p("Al0FRICwAAIGeqhICcAA");
	this.shape_101.setTransform(241.8,194.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(2).p("Al0FYICwAAIGeqvICcAA");
	this.shape_102.setTransform(241.8,194.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FFFFFF").ss(2).p("Al0FgICwAAIGeq/ICcAA");
	this.shape_103.setTransform(241.8,195.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(2).p("Al0FZICwAAIGeqxICcAA");
	this.shape_104.setTransform(241.8,195);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FFFFFF").ss(2).p("Al0FTICwAAIGeqlICcAA");
	this.shape_105.setTransform(241.8,194.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(2).p("Al0FNICwAAIGeqZICcAA");
	this.shape_106.setTransform(241.8,193.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FFFFFF").ss(2).p("Al0FGICwAAIGeqLICcAA");
	this.shape_107.setTransform(241.8,193.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").ss(2).p("Al0FAICwAAIGep/ICcAA");
	this.shape_108.setTransform(241.8,192.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFFFFF").ss(2).p("Al0E5ICwAAIGepyICcAA");
	this.shape_109.setTransform(241.8,191.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(2).p("Al0EzICwAAIGeplICcAA");
	this.shape_110.setTransform(241.8,191.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFFFFF").ss(2).p("Al0EnICwAAIGepMICcAA");
	this.shape_111.setTransform(241.8,189.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(2).p("Al0EgICwAAIGeo/ICcAA");
	this.shape_112.setTransform(241.8,189.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFFFFF").ss(2).p("Al0EaICwAAIGeozICcAA");
	this.shape_113.setTransform(241.8,188.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FFFFFF").ss(2).p("Al0EUICwAAIGeonICcAA");
	this.shape_114.setTransform(241.8,188);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FFFFFF").ss(2).p("Al0ENICwAAIGeoZICcAA");
	this.shape_115.setTransform(241.8,187.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#FFFFFF").ss(2).p("Al0EHICwAAIGeoNICcAA");
	this.shape_116.setTransform(241.8,186.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFFFFF").ss(2).p("Al0EBICwAAIGeoBICcAA");
	this.shape_117.setTransform(241.8,186.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(2).p("Al0D6ICwAAIGenzICcAA");
	this.shape_118.setTransform(241.8,185.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FFFFFF").ss(2).p("Al0D0ICwAAIGennICcAA");
	this.shape_119.setTransform(241.8,184.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(2).p("Al0DuICwAAIGenbICcAA");
	this.shape_120.setTransform(241.8,184.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FFFFFF").ss(2).p("Al0DnICwAAIGenNICcAA");
	this.shape_121.setTransform(241.8,183.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(2).p("Al0DhICwAAIGenBICcAA");
	this.shape_122.setTransform(241.8,182.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FFFFFF").ss(2).p("Al0DaICwAAIGem0ICcAA");
	this.shape_123.setTransform(241.8,182.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFFFFF").ss(2).p("Al0DUICwAAIGemnICcAA");
	this.shape_124.setTransform(241.8,181.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#FFFFFF").ss(2).p("Al0DOICwAAIGembICcAA");
	this.shape_125.setTransform(241.8,181);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FFFFFF").ss(2).p("Al0DHICwAAIGemNICcAA");
	this.shape_126.setTransform(241.8,180.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#FFFFFF").ss(2).p("AF2hcIicAAImeC5IiwAA");
	this.shape_127.setTransform(241.8,189.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FFFFFF").ss(2).p("Al0BlICwAAIGejJICcAA");
	this.shape_128.setTransform(241.8,190.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#FFFFFF").ss(2).p("Al0BuICwAAIGejaICcAA");
	this.shape_129.setTransform(241.8,191.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FFFFFF").ss(2).p("Al0B2ICwAAIGejrICcAA");
	this.shape_130.setTransform(241.8,192.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FFFFFF").ss(2).p("Al0B+ICwAAIGej7ICcAA");
	this.shape_131.setTransform(241.8,193.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FFFFFF").ss(2).p("Al0CGICwAAIGekLICcAA");
	this.shape_132.setTransform(241.8,193.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#FFFFFF").ss(2).p("Al0CPICwAAIGekdICcAA");
	this.shape_133.setTransform(241.8,194.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#FFFFFF").ss(2).p("Al0CXICwAAIGektICcAA");
	this.shape_134.setTransform(241.8,195.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#FFFFFF").ss(2).p("Al0CfICwAAIGek9ICcAA");
	this.shape_135.setTransform(241.8,196.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FFFFFF").ss(2).p("Al0CnICwAAIGelNICcAA");
	this.shape_136.setTransform(241.8,197.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FFFFFF").ss(2).p("Al0CwICwAAIGelfICcAA");
	this.shape_137.setTransform(241.8,198);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#FFFFFF").ss(2).p("Al0C4ICwAAIGelvICcAA");
	this.shape_138.setTransform(241.8,198.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FFFFFF").ss(2).p("Al0DAICwAAIGel/ICcAA");
	this.shape_139.setTransform(241.8,199.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#FFFFFF").ss(2).p("Al0DQICwAAIGemgICcAA");
	this.shape_140.setTransform(241.8,201.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FFFFFF").ss(2).p("Al0DZICwAAIGemxICcAA");
	this.shape_141.setTransform(241.8,202.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FFFFFF").ss(2).p("Al0DpICwAAIGenRICcAA");
	this.shape_142.setTransform(241.8,203.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#FFFFFF").ss(2).p("Al0DyICwAAIGenjICcAA");
	this.shape_143.setTransform(241.8,204.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FFFFFF").ss(2).p("Al0EKICwAAIGeoTICcAA");
	this.shape_144.setTransform(241.8,207.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#FFFFFF").ss(2).p("Al0ETICwAAIGeokICcAA");
	this.shape_145.setTransform(241.8,207.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#FFFFFF").ss(2).p("Al0EbICwAAIGeo1ICcAA");
	this.shape_146.setTransform(241.8,208.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#FFFFFF").ss(2).p("Al0ETICwAAIGeolICcAA");
	this.shape_147.setTransform(241.8,207.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FFFFFF").ss(2).p("Al0ELICwAAIGeoVICcAA");
	this.shape_148.setTransform(241.8,207.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#FFFFFF").ss(2).p("Al0EDICwAAIGeoFICcAA");
	this.shape_149.setTransform(241.8,206.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FFFFFF").ss(2).p("Al0DrICwAAIGenVICcAA");
	this.shape_150.setTransform(241.8,204);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#FFFFFF").ss(2).p("Al0DkICwAAIGenHICcAA");
	this.shape_151.setTransform(241.8,203.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#FFFFFF").ss(2).p("Al0DcICwAAIGem2ICcAA");
	this.shape_152.setTransform(241.8,202.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#FFFFFF").ss(2).p("Al0DMICwAAIGemXICcAA");
	this.shape_153.setTransform(241.8,200.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FFFFFF").ss(2).p("Al0DEICwAAIGemHICcAA");
	this.shape_154.setTransform(241.8,200);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#FFFFFF").ss(2).p("Al0C8ICwAAIGel3ICcAA");
	this.shape_155.setTransform(241.8,199.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#FFFFFF").ss(2).p("Al0C0ICwAAIGelnICcAA");
	this.shape_156.setTransform(241.8,198.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#FFFFFF").ss(2).p("Al0CsICwAAIGelXICcAA");
	this.shape_157.setTransform(241.8,197.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#FFFFFF").ss(2).p("Al0CkICwAAIGelHICcAA");
	this.shape_158.setTransform(241.8,196.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#FFFFFF").ss(2).p("Al0CcICwAAIGek3ICcAA");
	this.shape_159.setTransform(241.8,196.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#FFFFFF").ss(2).p("Al0CUICwAAIGeknICcAA");
	this.shape_160.setTransform(241.8,195.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#FFFFFF").ss(2).p("Al0CNICwAAIGekZICcAA");
	this.shape_161.setTransform(241.8,194.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#FFFFFF").ss(2).p("Al0CFICwAAIGekJICcAA");
	this.shape_162.setTransform(241.8,193.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#FFFFFF").ss(2).p("Al0B9ICwAAIGej5ICcAA");
	this.shape_163.setTransform(241.8,192.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#FFFFFF").ss(2).p("Al0B1ICwAAIGejpICcAA");
	this.shape_164.setTransform(241.8,192.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#FFFFFF").ss(2).p("Al0BtICwAAIGejZICcAA");
	this.shape_165.setTransform(241.8,191.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#FFFFFF").ss(2).p("AF2gCIicAAImeAFIiwAA");
	this.shape_166.setTransform(241.8,198.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#FFFFFF").ss(2).p("Al0ALICwAAIGegVICcAA");
	this.shape_167.setTransform(241.8,199.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#FFFFFF").ss(2).p("Al0ASICwAAIGegjICcAA");
	this.shape_168.setTransform(241.8,200.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#FFFFFF").ss(2).p("Al0AaICwAAIGegzICcAA");
	this.shape_169.setTransform(241.8,201.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#FFFFFF").ss(2).p("Al0AhICwAAIGehCICcAA");
	this.shape_170.setTransform(241.8,202.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#FFFFFF").ss(2).p("Al0ApICwAAIGehRICcAA");
	this.shape_171.setTransform(241.8,202.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#FFFFFF").ss(2).p("Al0AxICwAAIGehgICcAA");
	this.shape_172.setTransform(241.8,203.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#FFFFFF").ss(2).p("Al0A4ICwAAIGehvICcAA");
	this.shape_173.setTransform(241.8,204.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#FFFFFF").ss(2).p("Al0BAICwAAIGeh/ICcAA");
	this.shape_174.setTransform(241.8,205.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#FFFFFF").ss(2).p("Al0BIICwAAIGeiPICcAA");
	this.shape_175.setTransform(241.8,206.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#FFFFFF").ss(2).p("Al0BPICwAAIGeidICcAA");
	this.shape_176.setTransform(241.8,207);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#FFFFFF").ss(2).p("Al0BWICwAAIGeisICcAA");
	this.shape_177.setTransform(241.8,207.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#FFFFFF").ss(2).p("Al0BeICwAAIGei7ICcAA");
	this.shape_178.setTransform(241.8,208.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#FFFFFF").ss(2).p("Al0BmICwAAIGejLICcAA");
	this.shape_179.setTransform(241.8,209.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#FFFFFF").ss(2).p("Al0B9ICwAAIGej4ICcAA");
	this.shape_180.setTransform(241.8,211.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#FFFFFF").ss(2).p("Al0CEICwAAIGekHICcAA");
	this.shape_181.setTransform(241.8,212.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#FFFFFF").ss(2).p("Al0CLICwAAIGekWICcAA");
	this.shape_182.setTransform(241.8,213.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#FFFFFF").ss(2).p("Al0CTICwAAIGeklICcAA");
	this.shape_183.setTransform(241.8,214.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#FFFFFF").ss(2).p("Al0CbICwAAIGek1ICcAA");
	this.shape_184.setTransform(241.8,215.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#FFFFFF").ss(2).p("Al0CjICwAAIGelFICcAA");
	this.shape_185.setTransform(241.8,216);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#FFFFFF").ss(2).p("Al0CqICwAAIGelTICcAA");
	this.shape_186.setTransform(241.8,216.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#FFFFFF").ss(2).p("Al0CyICwAAIGeljICcAA");
	this.shape_187.setTransform(241.8,217.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#FFFFFF").ss(2).p("Al0C5ICwAAIGelxICcAA");
	this.shape_188.setTransform(241.8,218.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#FFFFFF").ss(2).p("AFwBkIibAAImTjHIixAA");
	this.shape_189.setTransform(241.2,209);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#FFFFFF").ss(2).p("AlvhUICxAAIGTCpICbAA");
	this.shape_190.setTransform(241.2,210.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#FFFFFF").ss(2).p("AlvhGICwAAIGUCNICbAA");
	this.shape_191.setTransform(241.2,211.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#FFFFFF").ss(2).p("Alvg3ICwAAIGUBvICbAA");
	this.shape_192.setTransform(241.2,213.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#FFFFFF").ss(2).p("AlvgpICwAAIGUBTICbAA");
	this.shape_193.setTransform(241.2,214.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#FFFFFF").ss(2).p("AlvgbICwAAIGUA3ICbAA");
	this.shape_194.setTransform(241.2,216.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#FFFFFF").ss(2).p("AlwgMICxAAIGUAZICcAA");
	this.shape_195.setTransform(241.1,217.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#FFFFFF").ss(2).p("AlwACILhgD");
	this.shape_196.setTransform(241.1,219.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#FFFFFF").ss(2).p("AlwAQICwAAIGVgfICcAA");
	this.shape_197.setTransform(241.1,220.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#FFFFFF").ss(2).p("AlwAeICwAAIGVg8ICcAA");
	this.shape_198.setTransform(241.1,222.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#FFFFFF").ss(2).p("AlwAtICwAAIGWhZICbAA");
	this.shape_199.setTransform(241.1,223.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#FFFFFF").ss(2).p("AlwA8ICwAAIGWh2ICbAA");
	this.shape_200.setTransform(241.1,225);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#FFFFFF").ss(2).p("AlwBKICwAAIGWiTICbAA");
	this.shape_201.setTransform(241.1,226.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#FFFFFF").ss(2).p("AlxBYICxAAIGWivICbAA");
	this.shape_202.setTransform(241.1,227.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#FFFFFF").ss(2).p("AlxBnICxAAIGWjNICbAA");
	this.shape_203.setTransform(241.1,229.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#FFFFFF").ss(2).p("AlxB1ICxAAIGWjpICcAA");
	this.shape_204.setTransform(241,230.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#FFFFFF").ss(2).p("AlxCEICxAAIGWkHICcAA");
	this.shape_205.setTransform(241,232.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#FFFFFF").ss(2).p("AlxCSICxAAIGWkjICcAA");
	this.shape_206.setTransform(241,233.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#FFFFFF").ss(2).p("AlxChICxAAIGWlBICcAA");
	this.shape_207.setTransform(241,235.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#FFFFFF").ss(2).p("AlxCvICwAAIGYldICbAA");
	this.shape_208.setTransform(241,236.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#FFFFFF").ss(2).p("AlxC9ICwAAIGYl5ICbAA");
	this.shape_209.setTransform(241,238);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FFFFFF").ss(2).p("AlxDMICwAAIGYmXICcAA");
	this.shape_210.setTransform(241,239.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#FFFFFF").ss(2).p("AlxDaICwAAIGYmzICcAA");
	this.shape_211.setTransform(241,240.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#FFFFFF").ss(2).p("AlyDpICxAAIGYnRICcAA");
	this.shape_212.setTransform(240.9,242.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#FFFFFF").ss(2).p("AlyD4ICxAAIGYnvICcAA");
	this.shape_213.setTransform(240.9,243.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#FFFFFF").ss(2).p("AFwDFIibAAImTmJIixAA");
	this.shape_214.setTransform(241.2,218.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#FFFFFF").ss(2).p("Alvi5ICxAAIGTFzICbAA");
	this.shape_215.setTransform(241.2,219.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#FFFFFF").ss(2).p("AlviuICwAAIGUFcICbAA");
	this.shape_216.setTransform(241.2,221.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#FFFFFF").ss(2).p("AlviiICwAAIGUFFICbAA");
	this.shape_217.setTransform(241.2,222.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#FFFFFF").ss(2).p("AlviXICwAAIGUEvICbAA");
	this.shape_218.setTransform(241.2,223.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#FFFFFF").ss(2).p("AlviLICwAAIGUEXICbAA");
	this.shape_219.setTransform(241.2,224.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#FFFFFF").ss(2).p("AlwiAICxAAIGUEBICcAA");
	this.shape_220.setTransform(241.1,225.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#FFFFFF").ss(2).p("Alwh1ICxAAIGUDrICcAA");
	this.shape_221.setTransform(241.1,226.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#FFFFFF").ss(2).p("AlwhpICwAAIGVDTICcAA");
	this.shape_222.setTransform(241.1,227.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#FFFFFF").ss(2).p("AlwheICwAAIGVC9ICcAA");
	this.shape_223.setTransform(241.1,229);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#FFFFFF").ss(2).p("AlwhSICwAAIGWClICbAA");
	this.shape_224.setTransform(241.1,230.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#FFFFFF").ss(2).p("AlwhHICwAAIGWCPICbAA");
	this.shape_225.setTransform(241.1,231.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#FFFFFF").ss(2).p("Alxg7ICxAAIGWB4ICbAA");
	this.shape_226.setTransform(241.1,232.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#FFFFFF").ss(2).p("AlxgwICxAAIGWBhICbAA");
	this.shape_227.setTransform(241.1,233.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#FFFFFF").ss(2).p("AlxglICxAAIGWBLICcAA");
	this.shape_228.setTransform(241,234.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#FFFFFF").ss(2).p("AlxgZICxAAIGWAzICcAA");
	this.shape_229.setTransform(241,235.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#FFFFFF").ss(2).p("AlxgOICxAAIGWAdICcAA");
	this.shape_230.setTransform(241,237);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#FFFFFF").ss(2).p("AlxgCILjAF");
	this.shape_231.setTransform(241,238.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#FFFFFF").ss(2).p("AlxAIICwAAIGYgPICbAA");
	this.shape_232.setTransform(241,239.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#FFFFFF").ss(2).p("AlxAUICwAAIGYgmICbAA");
	this.shape_233.setTransform(241,240.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#FFFFFF").ss(2).p("AlxAfICwAAIGYg9ICcAA");
	this.shape_234.setTransform(241,241.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#FFFFFF").ss(2).p("AlxAqICwAAIGYhTICcAA");
	this.shape_235.setTransform(241,242.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#FFFFFF").ss(2).p("AlyA1ICxAAIGYhpICcAA");
	this.shape_236.setTransform(240.9,243.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#FFFFFF").ss(2).p("AlyBBICxAAIGYiBICcAA");
	this.shape_237.setTransform(240.9,245);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#FFFFFF").ss(2).p("AlyA3ICxAAIGYhsICcAA");
	this.shape_238.setTransform(240.9,244);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#FFFFFF").ss(2).p("AlxAsICwAAIGYhXICcAA");
	this.shape_239.setTransform(241,242.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#FFFFFF").ss(2).p("AlxAhICwAAIGYhBICcAA");
	this.shape_240.setTransform(241,241.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#FFFFFF").ss(2).p("AlxAXICwAAIGYgtICbAA");
	this.shape_241.setTransform(241,240.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#FFFFFF").ss(2).p("AlxANICwAAIGYgZICbAA");
	this.shape_242.setTransform(241,239.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#FFFFFF").ss(2).p("AlxACILjgD");
	this.shape_243.setTransform(241,238.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#FFFFFF").ss(2).p("AlxgHICxAAIGWAPICcAA");
	this.shape_244.setTransform(241,237.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#FFFFFF").ss(2).p("AlxgSICxAAIGWAlICcAA");
	this.shape_245.setTransform(241,236.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#FFFFFF").ss(2).p("AlxgdICxAAIGWA6ICcAA");
	this.shape_246.setTransform(241,235.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#FFFFFF").ss(2).p("AlxgnICxAAIGWBPICcAA");
	this.shape_247.setTransform(241,234.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#FFFFFF").ss(2).p("AlxgxICxAAIGWBkICbAA");
	this.shape_248.setTransform(241.1,233.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#FFFFFF").ss(2).p("Alxg8ICxAAIGWB5ICbAA");
	this.shape_249.setTransform(241.1,232.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#FFFFFF").ss(2).p("AlwhGICwAAIGWCNICbAA");
	this.shape_250.setTransform(241.1,231.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#FFFFFF").ss(2).p("AlwhRICwAAIGWCjICbAA");
	this.shape_251.setTransform(241.1,230.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#FFFFFF").ss(2).p("AlwhbICwAAIGVC3ICcAA");
	this.shape_252.setTransform(241.1,229.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#FFFFFF").ss(2).p("AlwhmICwAAIGVDNICcAA");
	this.shape_253.setTransform(241.1,228.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#FFFFFF").ss(2).p("AlwhwICwAAIGVDhICcAA");
	this.shape_254.setTransform(241.1,227.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#FFFFFF").ss(2).p("Alwh7ICxAAIGUD3ICcAA");
	this.shape_255.setTransform(241.1,226.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#FFFFFF").ss(2).p("AlwiFICxAAIGUELICcAA");
	this.shape_256.setTransform(241.1,225.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#FFFFFF").ss(2).p("AlviQICwAAIGUEhICbAA");
	this.shape_257.setTransform(241.2,224);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#FFFFFF").ss(2).p("AlviaICwAAIGUE1ICbAA");
	this.shape_258.setTransform(241.2,223);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#FFFFFF").ss(2).p("AlvilICwAAIGUFLICbAA");
	this.shape_259.setTransform(241.2,221.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#FFFFFF").ss(2).p("AlvivICwAAIGUFfICbAA");
	this.shape_260.setTransform(241.2,220.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#FFFFFF").ss(2).p("Alvi6ICxAAIGTF1ICbAA");
	this.shape_261.setTransform(241.2,219.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#FFFFFF").ss(2).p("AFuEpIicAAImOpRIiwAA");
	this.shape_262.setTransform(241,228.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#FFFFFF").ss(2).p("AlskeICwAAIGOI9ICcAA");
	this.shape_263.setTransform(241,229.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#FFFFFF").ss(2).p("AlskUICwAAIGOIpICcAA");
	this.shape_264.setTransform(241,230.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#FFFFFF").ss(2).p("AlskKICwAAIGOIVICcAA");
	this.shape_265.setTransform(241,231.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#FFFFFF").ss(2).p("AlskAICwAAIGOIBICcAA");
	this.shape_266.setTransform(241,232.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#FFFFFF").ss(2).p("Alsj2ICwAAIGOHtICcAA");
	this.shape_267.setTransform(241,233.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#FFFFFF").ss(2).p("AlsjsICwAAIGOHZICcAA");
	this.shape_268.setTransform(241,234.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#FFFFFF").ss(2).p("AlsjiICwAAIGOHFICcAA");
	this.shape_269.setTransform(241,235.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#FFFFFF").ss(2).p("AlsjYICwAAIGOGxICcAA");
	this.shape_270.setTransform(241,236.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#FFFFFF").ss(2).p("AlsjOICwAAIGOGdICcAA");
	this.shape_271.setTransform(241,237.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#FFFFFF").ss(2).p("AlsjEICwAAIGOGJICcAA");
	this.shape_272.setTransform(241,238.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#FFFFFF").ss(2).p("Alsi6ICwAAIGOF1ICcAA");
	this.shape_273.setTransform(241,239.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#FFFFFF").ss(2).p("AlsiwICwAAIGOFhICcAA");
	this.shape_274.setTransform(241,240.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#FFFFFF").ss(2).p("AlsimICwAAIGOFNICcAA");
	this.shape_275.setTransform(241,241.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#FFFFFF").ss(2).p("AlsicICwAAIGOE5ICcAA");
	this.shape_276.setTransform(241,242.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#FFFFFF").ss(2).p("AlsiSICwAAIGOElICcAA");
	this.shape_277.setTransform(241,243.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#FFFFFF").ss(2).p("AlsiIICwAAIGOERICcAA");
	this.shape_278.setTransform(241,244.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#FFFFFF").ss(2).p("Alsh+ICwAAIGOD9ICcAA");
	this.shape_279.setTransform(241,245.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#FFFFFF").ss(2).p("Alsh0ICwAAIGODpICcAA");
	this.shape_280.setTransform(241,246.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#FFFFFF").ss(2).p("AlshqICwAAIGODVICcAA");
	this.shape_281.setTransform(241,247.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#FFFFFF").ss(2).p("AlshgICwAAIGODBICcAA");
	this.shape_282.setTransform(241,248.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#FFFFFF").ss(2).p("AlshWICwAAIGOCtICcAA");
	this.shape_283.setTransform(241,249.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#FFFFFF").ss(2).p("AlshMICwAAIGOCZICcAA");
	this.shape_284.setTransform(241,250.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#FFFFFF").ss(2).p("AlshCICwAAIGOCFICcAA");
	this.shape_285.setTransform(241,251.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#FFFFFF").ss(2).p("Alsg4ICwAAIGOBxICcAA");
	this.shape_286.setTransform(241,252.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#FFFFFF").ss(2).p("AlshDICwAAIGOCHICcAA");
	this.shape_287.setTransform(241,251.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#FFFFFF").ss(2).p("AlshNICwAAIGOCbICcAA");
	this.shape_288.setTransform(241,250.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#FFFFFF").ss(2).p("AlshXICwAAIGOCvICcAA");
	this.shape_289.setTransform(241,249.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#FFFFFF").ss(2).p("AlshiICwAAIGODFICcAA");
	this.shape_290.setTransform(241,248.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#FFFFFF").ss(2).p("AlshtICwAAIGODaICcAA");
	this.shape_291.setTransform(241,247.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#FFFFFF").ss(2).p("Alsh3ICwAAIGODvICcAA");
	this.shape_292.setTransform(241,246.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#FFFFFF").ss(2).p("AlsiBICwAAIGOEDICcAA");
	this.shape_293.setTransform(241,245.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#FFFFFF").ss(2).p("AlsiMICwAAIGOEZICcAA");
	this.shape_294.setTransform(241,244.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#FFFFFF").ss(2).p("AlsiWICwAAIGOEtICcAA");
	this.shape_295.setTransform(241,243.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#FFFFFF").ss(2).p("AlsihICwAAIGOFDICcAA");
	this.shape_296.setTransform(241,242.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#FFFFFF").ss(2).p("AlsirICwAAIGOFXICcAA");
	this.shape_297.setTransform(241,241.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#FFFFFF").ss(2).p("Alsi2ICwAAIGOFtICcAA");
	this.shape_298.setTransform(241,240.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#FFFFFF").ss(2).p("AlsjAICwAAIGOGBICcAA");
	this.shape_299.setTransform(241,239.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#FFFFFF").ss(2).p("AlsjKICwAAIGOGVICcAA");
	this.shape_300.setTransform(241,238.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#FFFFFF").ss(2).p("AlsjVICwAAIGOGrICcAA");
	this.shape_301.setTransform(241,237.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#FFFFFF").ss(2).p("AlsjfICwAAIGOG/ICcAA");
	this.shape_302.setTransform(241,236.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#FFFFFF").ss(2).p("AlsjqICwAAIGOHVICcAA");
	this.shape_303.setTransform(241,235);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#FFFFFF").ss(2).p("Alsj0ICwAAIGOHpICcAA");
	this.shape_304.setTransform(241,234);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#FFFFFF").ss(2).p("Alsj+ICwAAIGOH+ICcAA");
	this.shape_305.setTransform(241,233);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#FFFFFF").ss(2).p("AlskJICwAAIGOITICcAA");
	this.shape_306.setTransform(241,231.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#FFFFFF").ss(2).p("AFpGGIicAAImEsLIiwAA");
	this.shape_307.setTransform(240.5,238);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#FFFFFF").ss(2).p("Alnl7ICwAAIGEL3ICcAA");
	this.shape_308.setTransform(240.5,239);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#FFFFFF").ss(2).p("AlnlxICwAAIGELjICcAA");
	this.shape_309.setTransform(240.5,240);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#FFFFFF").ss(2).p("AlnlnICwAAIGELPICcAA");
	this.shape_310.setTransform(240.5,241);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#FFFFFF").ss(2).p("AlnldICwAAIGEK7ICcAA");
	this.shape_311.setTransform(240.5,242);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#FFFFFF").ss(2).p("AlnlTICwAAIGEKnICcAA");
	this.shape_312.setTransform(240.5,243);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#FFFFFF").ss(2).p("AlnlJICwAAIGEKTICcAA");
	this.shape_313.setTransform(240.5,244);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#FFFFFF").ss(2).p("Alnk/ICwAAIGEJ/ICcAA");
	this.shape_314.setTransform(240.5,245);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#FFFFFF").ss(2).p("Alnk1ICwAAIGEJrICcAA");
	this.shape_315.setTransform(240.5,246);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#FFFFFF").ss(2).p("AlnkrICwAAIGEJXICcAA");
	this.shape_316.setTransform(240.5,247);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#FFFFFF").ss(2).p("AlnkhICwAAIGEJDICcAA");
	this.shape_317.setTransform(240.5,248);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#FFFFFF").ss(2).p("AlnkXICwAAIGEIvICcAA");
	this.shape_318.setTransform(240.5,249);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#FFFFFF").ss(2).p("AlnkNICwAAIGEIbICcAA");
	this.shape_319.setTransform(240.5,250);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#FFFFFF").ss(2).p("AlnkDICwAAIGEIHICcAA");
	this.shape_320.setTransform(240.5,251);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#FFFFFF").ss(2).p("Alnj5ICwAAIGEHzICcAA");
	this.shape_321.setTransform(240.5,252);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#FFFFFF").ss(2).p("AlnjvICwAAIGEHfICcAA");
	this.shape_322.setTransform(240.5,253);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#FFFFFF").ss(2).p("AlnjlICwAAIGEHLICcAA");
	this.shape_323.setTransform(240.5,254);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#FFFFFF").ss(2).p("AlnjbICwAAIGEG3ICcAA");
	this.shape_324.setTransform(240.5,255);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#FFFFFF").ss(2).p("AlnjRICwAAIGEGjICcAA");
	this.shape_325.setTransform(240.5,256);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#FFFFFF").ss(2).p("AlnjHICwAAIGEGPICcAA");
	this.shape_326.setTransform(240.5,257);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#FFFFFF").ss(2).p("Alni9ICwAAIGEF7ICcAA");
	this.shape_327.setTransform(240.5,258);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#FFFFFF").ss(2).p("AlnizICwAAIGEFnICcAA");
	this.shape_328.setTransform(240.5,259);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#FFFFFF").ss(2).p("AlnipICwAAIGEFTICcAA");
	this.shape_329.setTransform(240.5,260);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#FFFFFF").ss(2).p("AlnifICwAAIGEE/ICcAA");
	this.shape_330.setTransform(240.5,261);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#FFFFFF").ss(2).p("AlniVICwAAIGEErICcAA");
	this.shape_331.setTransform(240.5,262);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#FFFFFF").ss(2).p("AFuH5IicAAImOvxIiwAA");
	this.shape_332.setTransform(241.5,249);
	this.shape_332._off = true;

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#FFFFFF").ss(2).p("AlsnvICwAAIGOPfICcAA");
	this.shape_333.setTransform(241.5,249.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#FFFFFF").ss(2).p("AlsnmICwAAIGOPNICcAA");
	this.shape_334.setTransform(241.5,250.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#FFFFFF").ss(2).p("AlsndICwAAIGOO7ICcAA");
	this.shape_335.setTransform(241.5,251.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#FFFFFF").ss(2).p("AlsnVICwAAIGOOqICcAA");
	this.shape_336.setTransform(241.5,252.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#FFFFFF").ss(2).p("AlsnMICwAAIGOOZICcAA");
	this.shape_337.setTransform(241.5,253.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#FFFFFF").ss(2).p("AlsnDICwAAIGOOHICcAA");
	this.shape_338.setTransform(241.5,254.3);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#FFFFFF").ss(2).p("Alsm6ICwAAIGON1ICcAA");
	this.shape_339.setTransform(241.5,255.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#FFFFFF").ss(2).p("AlsmxICwAAIGONjICcAA");
	this.shape_340.setTransform(241.5,256.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#FFFFFF").ss(2).p("AlsmoICwAAIGONSICcAA");
	this.shape_341.setTransform(241.5,257);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#FFFFFF").ss(2).p("AlsmgICwAAIGONBICcAA");
	this.shape_342.setTransform(241.5,257.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#FFFFFF").ss(2).p("AlsmXICwAAIGOMvICcAA");
	this.shape_343.setTransform(241.5,258.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#FFFFFF").ss(2).p("AlsmOICwAAIGOMdICcAA");
	this.shape_344.setTransform(241.5,259.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#FFFFFF").ss(2).p("AlsmFICwAAIGOMLICcAA");
	this.shape_345.setTransform(241.5,260.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#FFFFFF").ss(2).p("Alsl9ICwAAIGOL6ICcAA");
	this.shape_346.setTransform(241.5,261.4);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#FFFFFF").ss(2).p("Alsl0ICwAAIGOLpICcAA");
	this.shape_347.setTransform(241.5,262.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#FFFFFF").ss(2).p("AlslrICwAAIGOLXICcAA");
	this.shape_348.setTransform(241.5,263.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#FFFFFF").ss(2).p("AlsliICwAAIGOLFICcAA");
	this.shape_349.setTransform(241.5,264);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#FFFFFF").ss(2).p("AlslZICwAAIGOKzICcAA");
	this.shape_350.setTransform(241.5,264.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#FFFFFF").ss(2).p("AlslRICwAAIGOKjICcAA");
	this.shape_351.setTransform(241.5,265.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#FFFFFF").ss(2).p("AlslIICwAAIGOKRICcAA");
	this.shape_352.setTransform(241.5,266.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#FFFFFF").ss(2).p("Alsk/ICwAAIGOJ/ICcAA");
	this.shape_353.setTransform(241.5,267.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#FFFFFF").ss(2).p("Alsk2ICwAAIGOJtICcAA");
	this.shape_354.setTransform(241.5,268.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#FFFFFF").ss(2).p("AlsktICwAAIGOJbICcAA");
	this.shape_355.setTransform(241.5,269.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#FFFFFF").ss(2).p("Alsk1ICwAAIGOJrICcAA");
	this.shape_356.setTransform(241.5,268.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#FFFFFF").ss(2).p("Alsk9ICwAAIGOJ8ICcAA");
	this.shape_357.setTransform(241.5,267.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#FFFFFF").ss(2).p("AlslGICwAAIGOKMICcAA");
	this.shape_358.setTransform(241.5,266.9);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#FFFFFF").ss(2).p("AlslOICwAAIGOKdICcAA");
	this.shape_359.setTransform(241.5,266);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#FFFFFF").ss(2).p("AlslWICwAAIGOKtICcAA");
	this.shape_360.setTransform(241.5,265.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#FFFFFF").ss(2).p("AlsleICwAAIGOK9ICcAA");
	this.shape_361.setTransform(241.5,264.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#FFFFFF").ss(2).p("AlslmICwAAIGOLNICcAA");
	this.shape_362.setTransform(241.5,263.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#FFFFFF").ss(2).p("AlsluICwAAIGOLdICcAA");
	this.shape_363.setTransform(241.5,262.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#FFFFFF").ss(2).p("Alsl2ICwAAIGOLtICcAA");
	this.shape_364.setTransform(241.5,262);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#FFFFFF").ss(2).p("Alsl+ICwAAIGOL9ICcAA");
	this.shape_365.setTransform(241.5,261.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#FFFFFF").ss(2).p("AlsmGICwAAIGOMNICcAA");
	this.shape_366.setTransform(241.5,260.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#FFFFFF").ss(2).p("AlsmPICwAAIGOMeICcAA");
	this.shape_367.setTransform(241.5,259.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#FFFFFF").ss(2).p("AlsmfICwAAIGOM/ICcAA");
	this.shape_368.setTransform(241.5,257.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#FFFFFF").ss(2).p("AlsmnICwAAIGONPICcAA");
	this.shape_369.setTransform(241.5,257.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#FFFFFF").ss(2).p("AlsmvICwAAIGONfICcAA");
	this.shape_370.setTransform(241.5,256.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#FFFFFF").ss(2).p("Alsm3ICwAAIGONvICcAA");
	this.shape_371.setTransform(241.5,255.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#FFFFFF").ss(2).p("Alsm/ICwAAIGON/ICcAA");
	this.shape_372.setTransform(241.5,254.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#FFFFFF").ss(2).p("AlsnHICwAAIGOOPICcAA");
	this.shape_373.setTransform(241.5,253.9);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#FFFFFF").ss(2).p("AlsnPICwAAIGOOfICcAA");
	this.shape_374.setTransform(241.5,253.1);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#FFFFFF").ss(2).p("AlsnXICwAAIGOOvICcAA");
	this.shape_375.setTransform(241.5,252.3);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#FFFFFF").ss(2).p("AlsnfICwAAIGOPAICcAA");
	this.shape_376.setTransform(241.5,251.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#FFFFFF").ss(2).p("AlsnnICwAAIGOPPICcAA");
	this.shape_377.setTransform(241.5,250.7);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#FFFFFF").ss(2).p("AlsnwICwAAIGOPhICcAA");
	this.shape_378.setTransform(241.5,249.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#FFFFFF").ss(2).p("AlsneICwAAIGOO9ICcAA");
	this.shape_379.setTransform(241.5,251.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#FFFFFF").ss(2).p("AlsnWICwAAIGOOtICcAA");
	this.shape_380.setTransform(241.5,252.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#FFFFFF").ss(2).p("AlsnNICwAAIGOObICcAA");
	this.shape_381.setTransform(241.5,253.3);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#FFFFFF").ss(2).p("AlsnFICwAAIGOOLICcAA");
	this.shape_382.setTransform(241.5,254.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#FFFFFF").ss(2).p("Alsm8ICwAAIGON6ICcAA");
	this.shape_383.setTransform(241.5,255);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#FFFFFF").ss(2).p("Alsm0ICwAAIGONpICcAA");
	this.shape_384.setTransform(241.5,255.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#FFFFFF").ss(2).p("AlsmrICwAAIGONYICcAA");
	this.shape_385.setTransform(241.5,256.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#FFFFFF").ss(2).p("AlsmjICwAAIGONHICcAA");
	this.shape_386.setTransform(241.5,257.5);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#FFFFFF").ss(2).p("AlsmbICwAAIGOM2ICcAA");
	this.shape_387.setTransform(241.5,258.4);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#FFFFFF").ss(2).p("AlsmSICwAAIGOMlICcAA");
	this.shape_388.setTransform(241.5,259.2);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#FFFFFF").ss(2).p("AlsmKICwAAIGOMUICcAA");
	this.shape_389.setTransform(241.5,260.1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#FFFFFF").ss(2).p("AlsmBICwAAIGOMDICcAA");
	this.shape_390.setTransform(241.5,260.9);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#FFFFFF").ss(2).p("Alsl5ICwAAIGOLzICcAA");
	this.shape_391.setTransform(241.5,261.8);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#FFFFFF").ss(2).p("AlslwICwAAIGOLhICcAA");
	this.shape_392.setTransform(241.5,262.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#FFFFFF").ss(2).p("AlslnICwAAIGOLQICcAA");
	this.shape_393.setTransform(241.5,263.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#FFFFFF").ss(2).p("AlslfICwAAIGOK/ICcAA");
	this.shape_394.setTransform(241.5,264.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#FFFFFF").ss(2).p("AlslXICwAAIGOKvICcAA");
	this.shape_395.setTransform(241.5,265.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#FFFFFF").ss(2).p("AlslGICwAAIGOKNICcAA");
	this.shape_396.setTransform(241.5,266.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#FFFFFF").ss(2).p("Alsk9ICwAAIGOJ7ICcAA");
	this.shape_397.setTransform(241.5,267.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#FFFFFF").ss(2).p("AlslEICwAAIGOKJICcAA");
	this.shape_398.setTransform(241.5,267);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#FFFFFF").ss(2).p("AlslMICwAAIGOKZICcAA");
	this.shape_399.setTransform(241.5,266.2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#FFFFFF").ss(2).p("AlslUICwAAIGOKpICcAA");
	this.shape_400.setTransform(241.5,265.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#FFFFFF").ss(2).p("AlslcICwAAIGOK5ICcAA");
	this.shape_401.setTransform(241.5,264.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#FFFFFF").ss(2).p("AlslkICwAAIGOLIICcAA");
	this.shape_402.setTransform(241.5,263.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#FFFFFF").ss(2).p("AlslzICwAAIGOLnICcAA");
	this.shape_403.setTransform(241.5,262.3);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#FFFFFF").ss(2).p("Alsl7ICwAAIGOL3ICcAA");
	this.shape_404.setTransform(241.5,261.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#FFFFFF").ss(2).p("AlsmDICwAAIGOMHICcAA");
	this.shape_405.setTransform(241.5,260.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#FFFFFF").ss(2).p("AlsmKICwAAIGOMWICcAA");
	this.shape_406.setTransform(241.5,260);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#FFFFFF").ss(2).p("AlsmaICwAAIGOM1ICcAA");
	this.shape_407.setTransform(241.5,258.4);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#FFFFFF").ss(2).p("AlsmiICwAAIGONFICcAA");
	this.shape_408.setTransform(241.5,257.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#FFFFFF").ss(2).p("AlsmqICwAAIGONVICcAA");
	this.shape_409.setTransform(241.5,256.8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#FFFFFF").ss(2).p("AlsmyICwAAIGONkICcAA");
	this.shape_410.setTransform(241.5,256.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#FFFFFF").ss(2).p("Alsm5ICwAAIGONzICcAA");
	this.shape_411.setTransform(241.5,255.3);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#FFFFFF").ss(2).p("AlsnBICwAAIGOODICcAA");
	this.shape_412.setTransform(241.5,254.5);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#FFFFFF").ss(2).p("AlsnJICwAAIGOOTICcAA");
	this.shape_413.setTransform(241.5,253.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#FFFFFF").ss(2).p("AlsnRICwAAIGOOjICcAA");
	this.shape_414.setTransform(241.5,252.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#FFFFFF").ss(2).p("AlsnYICwAAIGOOxICcAA");
	this.shape_415.setTransform(241.5,252.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#FFFFFF").ss(2).p("AlsngICwAAIGOPBICcAA");
	this.shape_416.setTransform(241.5,251.4);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#FFFFFF").ss(2).p("AlsnoICwAAIGOPRICcAA");
	this.shape_417.setTransform(241.5,250.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},769).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65,p:{y:176.1}}]},1).to({state:[{t:this.shape_66,p:{y:176.9}}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82,p:{y:180.5}}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88,p:{y:184.8}}]},1).to({state:[{t:this.shape_89,p:{y:185.5}}]},1).to({state:[{t:this.shape_90,p:{y:186.2}}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96,p:{y:190.5}}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_65,p:{y:195.5}}]},1).to({state:[{t:this.shape_66,p:{y:196.3}}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_96,p:{y:190.6}}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118,p:{y:185.5}}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122,p:{y:182.9}}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124,p:{y:181.7}}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_82,p:{y:200.5}}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_122,p:{y:203}}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_118,p:{y:205.4}}]},1).to({state:[{t:this.shape_90,p:{y:206.3}}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_89,p:{y:205.6}}]},1).to({state:[{t:this.shape_88,p:{y:204.8}}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_124,p:{y:201.6}}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164,p:{y:192.1}}]},1).to({state:[{t:this.shape_165,p:{y:191.3}}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_165,p:{y:210.3}}]},1).to({state:[{t:this.shape_164,p:{y:211.1}}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_164,p:{y:211.1}}]},1).to({state:[{t:this.shape_165,p:{y:210.3}}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264,p:{y:230.8}}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_264,p:{y:230.9}}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343,p:{y:258.7}}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_343,p:{y:258.8}}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397,p:{y:267.7}}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_397,p:{y:267.8}}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_332}]},1).to({state:[]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(849).to({_off:false},0).wait(23).to({_off:true},1).wait(471));
	this.timeline.addTween(cjs.Tween.get(this.shape_332).wait(1215).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).wait(24).to({_off:true},1).wait(8));

	// Icons copy 9
	this.instance_7 = new lib.endlessness_icon("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(113.8,211.7,1,1,0,0,0,90.5,92.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1212).to({_off:false},0).to({alpha:1,startPosition:6},6).to({_off:true},118).wait(8));

	// Icons copy 8
	this.instance_8 = new lib.Tween17("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(113.8,209.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween18("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(113.8,209.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1163).to({_off:false},0).to({_off:true,alpha:1},6).wait(175));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1163).to({_off:false},6).wait(43).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(125));

	// Icons copy 7
	this.instance_10 = new lib.Tween15("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(113.9,209.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween16("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(113.9,209.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1114).to({_off:false},0).to({_off:true,alpha:1},7).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1114).to({_off:false},7).wait(42).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(174));

	// Icons copy 6
	this.instance_12 = new lib.Tween13("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(113.7,209.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween14("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(113.7,209.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1065).to({_off:false},0).to({_off:true,alpha:1},7).wait(272));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1065).to({_off:false},7).wait(42).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(222));

	// Icons copy 5
	this.instance_14 = new lib.Tween11("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(113.8,210.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween12("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(113.8,210.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1017).to({_off:false},0).to({_off:true,alpha:1},6).wait(321));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1017).to({_off:false},6).wait(42).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(271));

	// Icons copy 4
	this.instance_16 = new lib.Tween9("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(113.8,210.1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween10("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(113.8,210.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(968).to({_off:false},0).to({_off:true,alpha:1},6).wait(370));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(968).to({_off:false},6).wait(43).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(320));

	// Icons copy 3
	this.instance_18 = new lib.cms_icon("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(113.8,210.1,1,1,0,0,0,90.5,90.5);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(919).to({_off:false},0).to({alpha:1,startPosition:7},7).wait(42).to({startPosition:4},0).to({alpha:0,startPosition:7},6).to({_off:true},1).wait(369));

	// Icons copy 2
	this.instance_19 = new lib.UX_icon("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(113.8,210.1,1,1,0,0,0,90.5,90.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(869).to({_off:false},0).to({alpha:1,startPosition:7},7).wait(43).to({startPosition:50},0).to({alpha:0,startPosition:7},7).to({_off:true},1).wait(417));

	// Icons copy
	this.instance_20 = new lib.bacendicon("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(113.5,211.5,1,1,0,0,0,90.5,92.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(822).to({_off:false},0).to({alpha:1,startPosition:7},7).wait(40).to({startPosition:2},0).to({alpha:0,startPosition:7},7).to({_off:true},1).wait(467));

	// UX_Icon
	this.instance_21 = new lib.frontendicon("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(113.5,211.4,1,1,0,0,0,90.5,92.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(777).to({_off:false},0).wait(45).to({startPosition:1},0).to({alpha:0,startPosition:4},7).to({_off:true},1).wait(514));

	// category text
	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AAAA/QgHgDgFgGQgEgFgDgIQgCgHAAgJIAAgrIgaAAIAAgPIAbgBIADgfIAQAAIAAAfIAtAAIAAAQIgtAAIAAArIABALQABAEACADQADAEAFABQAEACAHAAQAIAAAOgFIAEAPQgSAGgNAAQgKAAgHgDg");
	this.shape_418.setTransform(267.1,352.4);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgCgDQgDgDgEgCQgEgBgFAAQgHAAgHAEQgFADgIAJIAABCIgUAAIAAhhIAQAAIACAQIABAAQAIgIAHgFIAJgEIALgBQAIAAAGACQAHADAEAFQAEAFACAHQACAIAAAJIAAA8g");
	this.shape_419.setTransform(255.2,353.7);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AgPAwQgJgEgHgGQgHgHgFgJIgCgLIgBgLQAAgHADgOQAFgJAGgHQAIgGAIgEQAKgDAIAAQALAAAIADQAJADAGAGQAGAHACAIQADAJAAAKIgBAKIhIAAQAAAHADAGQADAFAFAEQAEAEAGACQAGACAHAAQAIAAAHgDQAHgCAGgEIAIANQgJAFgJADQgKADgKAAQgKAAgLgDgAAdgIQAAgHgCgFQgCgFgEgDIgHgFQgFgCgGAAQgFAAgFACQgEACgFADIgHAIIgDAMIA3AAIAAAAg");
	this.shape_420.setTransform(243.1,353.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AAfAyIAAhDQAAgHgCgFQgCgDgFAAQgEAAgDADQgDADgDAHIAABFIgQAAIAAhDQgBgHgCgFQgCgDgEAAQgFAAgEADQgCAEgEAGIAABFIgTAAIAAhhIAQAAIABANIAAAAQAEgHAFgEQAFgEAJAAQAMAAAFARQAEgIAFgFQAFgEAIAAQAGAAADACQAEACADAEQADADABAHQACAFAAAHIAABFg");
	this.shape_421.setTransform(231.2,353.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AgtBGIAAiJIARAAIABAMIABAAQAHgHAIgDQAJgEAHAAQAKAAAHADQAIAEAFAGQAFAHADAJQADAKAAAKQAAANgEAJQgDAJgHAIQgGAGgIAEQgIAEgIgBQgGABgIgEQgHgDgGgFIgBAAIABARIAAAggAgMgyQgGAEgHAGIAAAuQAGAFAHACQAGADAFAAQAFAAAFgDQAFgCADgFQAEgEACgGQACgGAAgJQAAgIgBgGQgCgGgDgEQgDgFgFgCQgFgDgGABQgFAAgHACg");
	this.shape_422.setTransform(219.3,355.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AgSAwQgIgEgHgGQgHgHgEgJIgDgLIgBgLQAAgHAEgOQAEgJAHgHQAHgHAIgDQAJgDAJAAQAKAAAJADQAIADAHAHQAHAHAEAJQAEAOAAAHIgBALIgDALQgEAJgHAHQgHAGgIAEQgJADgKAAQgJAAgJgDgAgLgfQgFACgEAFQgDAEgCAHQgDAGAAAHQAAAIADAGQACAHADAEQAEAFAFACQAGADAFAAQAGAAAGgDQAFgCAEgFQAEgEABgHQADgGAAgIQAAgHgDgGQgBgHgEgEQgEgFgFgCQgGgDgGAAQgFAAgGADg");
	this.shape_423.setTransform(207,353.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AAFBGQgFgDgFgEQgEgFgCgHQgCgHgBgIIAAhbIgfAAIAAgQIAyAAIAABsQAAAFACAEQABADACACQAFAFAJAAQAIAAAJgEIAGAPQgQAFgMAAQgIAAgGgCg");
	this.shape_424.setTransform(195.2,351.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AgOAwQgKgEgHgGQgHgHgEgJIgEgLIgBgLQAAgHAFgOQADgJAIgHQAGgGAKgEQAIgDAKAAQAKAAAJADQAIADAGAGQAFAHADAIQAEAJAAAKIgBAKIhKAAQABAHADAGQADAFAFAEQAEAEAHACQAFACAHAAQAIAAAHgDQAHgCAGgEIAHANQgHAFgKADQgKADgLAAQgKAAgJgDgAAegIQgBgHgCgFQgCgFgDgDIgIgFQgFgCgGAAQgEAAgFACQgGACgDADIgHAIIgFAMIA5AAIAAAAg");
	this.shape_425.setTransform(183.1,353.8);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AgKAxIgohhIAUAAIAVA0IAJAdIABAAIAKgdIAVg0IATAAIgnBhg");
	this.shape_426.setTransform(171,353.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AgPAwQgJgEgHgGQgIgHgDgJIgDgLIgCgLQABgHAEgOQAEgJAGgHQAIgGAJgEQAJgDAJAAQAKAAAIADQAJADAGAGQAFAHAEAIQADAJAAAKIgBAKIhJAAQAAAHADAGQADAFAFAEQAFAEAFACQAGACAHAAQAIAAAHgDQAGgCAIgEIAHANQgJAFgIADQgLADgLAAQgJAAgLgDgAAdgIQAAgHgCgFQgCgFgEgDIgIgFQgEgCgGAAQgFAAgEACQgFACgEADIgIAIIgDAMIA3AAIAAAAg");
	this.shape_427.setTransform(159.1,353.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AgUBFQgHgEgGgGQgGgHgCgJQgEgKAAgMQAAgMAEgJQAEgJAGgHQAGgGAIgEQAIgDAIAAQAIAAAHADQAGADAGAGIABAAIgBgSIAAgkIAUAAIAACNIgRAAIgBgMIgBAAQgGAGgIAEQgIAEgHAAQgKAAgIgDgAgHgKQgFACgEAFQgEADgCAGQgCAHAAAIQAAAIACAHQABAGAEAFQADAEAFACQAFADAFAAQANAAAMgNIAAguQgGgFgGgDQgFgCgGAAQgFAAgFADg");
	this.shape_428.setTransform(146.7,351.7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AgUBFQgHgEgGgGQgGgHgCgJQgEgKAAgMQAAgMAEgJQAEgJAGgHQAGgGAIgEQAIgDAIAAQAIAAAHADQAGADAGAGIABAAIgBgSIAAgkIAUAAIAACNIgRAAIgBgMIgBAAQgGAGgIAEQgIAEgHAAQgKAAgIgDgAgHgKQgFACgEAFQgEADgCAGQgCAHAAAIQAAAIACAHQABAGAEAFQADAEAFACQAFADAFAAQANAAAMgNIAAguQgGgFgGgDQgFgCgGAAQgFAAgFADg");
	this.shape_429.setTransform(122.7,351.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgCgDQgDgDgEgCQgEgBgFAAQgHAAgHAEQgFADgIAJIAABCIgUAAIAAhhIAQAAIACAQIABAAQAIgIAHgFIAJgEIALgBQAIAAAGACQAHADAEAFQAEAFACAHQACAIAAAJIAAA8g");
	this.shape_430.setTransform(111.2,353.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AgPAwQgJgEgHgGQgHgHgFgJIgCgLIgBgLQAAgHADgOQAFgJAGgHQAIgGAIgEQAKgDAIAAQALAAAIADQAJADAGAGQAGAHADAIQACAJAAAKIgBAKIhJAAQABAHADAGQADAFAFAEQAEAEAGACQAGACAHAAQAIAAAHgDQAHgCAGgEIAIANQgIAFgKADQgKADgKAAQgKAAgLgDgAAdgIQAAgHgCgFQgCgFgEgDIgHgFQgFgCgGAAQgFAAgFACQgEACgFADIgHAIIgEAMIA4AAIAAAAg");
	this.shape_431.setTransform(99.1,353.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgrAHIAAgNIBXAAIAAANg");
	this.shape_432.setTransform(87,352.1);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AAAA/QgHgDgFgGQgEgFgDgIQgCgHAAgJIAAgrIgaAAIAAgPIAbgBIADgfIAQAAIAAAfIAtAAIAAAQIgtAAIAAArIABALQABAEACADQADAEAFABQAEACAHAAQAIAAAOgFIAEAPQgSAGgNAAQgKAAgHgDg");
	this.shape_433.setTransform(75.1,352.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgDgDQgCgDgEgCQgEgBgFAAQgHAAgHAEQgFADgIAJIAABCIgUAAIAAhhIAQAAIACAQIAAAAQAJgIAHgFIAJgEIAKgBQAJAAAGACQAHADAEAFQAEAFACAHQACAIAAAJIAAA8g");
	this.shape_434.setTransform(63.2,353.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AgSAwQgJgEgGgGQgHgHgEgJIgDgLIgBgLQAAgHAEgOQAEgJAHgHQAGgHAJgDQAKgDAIAAQAKAAAIADQAKADAGAHQAHAHAEAJQAEAOAAAHIgCALIgCALQgEAJgHAHQgGAGgKAEQgIADgKAAQgIAAgKgDgAgLgfQgFACgDAFQgEAEgDAHQgCAGAAAHQAAAIACAGQADAHAEAEQADAFAFACQAGADAFAAQAHAAAFgDQAFgCAEgFQADgEACgHQACgGAAgIQAAgHgCgGQgCgHgDgEQgEgFgFgCQgFgDgHAAQgFAAgGADg");
	this.shape_435.setTransform(51,353.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AgnAyIAAhhIAQAAIACAXIAAAAIAJgKIAKgIQAEgEAGgCIANgBQALAAAIAEIgEARQgKgDgIAAQgFgBgFACQgGABgDAEIgKAIQgEAFgEAIIAAA2g");
	this.shape_436.setTransform(39.8,353.7);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AgUBIIAAhRIgbAAIAAgPIAbgBIAAgHQAAgIADgHQACgIAFgFQAFgFAHgEQAHgCALAAIAOABIAOAFIgEAOIgLgDIgLgBQgGgBgFACQgEACgDACQgDADgBAFQAAAEAAAGIAAAHIAmAAIAAAQIgmAAIAABRg");
	this.shape_437.setTransform(27.8,351.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AAgAyIAAhDQgBgHgBgFQgDgDgFAAQgDAAgEADQgDADgEAHIAABFIgPAAIAAhDQAAgHgDgFQgCgDgEAAQgFAAgDADQgEAEgDAGIAABFIgTAAIAAhhIAQAAIABANIABAAQAEgHAEgEQAGgEAHAAQANAAAEARQAFgIAEgFQAGgEAIAAQAFAAAFACQAEACACAEQADADABAHQACAFAAAHIAABFg");
	this.shape_438.setTransform(219.2,353.7);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AAFBGQgGgDgDgEQgFgFgCgHQgDgHABgIIAAhbIghAAIAAgQIAzAAIAABsQABAFABAEQABADADACQAEAFAJAAQAHAAAKgEIAGAPQgRAFgKAAQgJAAgGgCg");
	this.shape_439.setTransform(183.2,351.7);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AgKAxIgohhIAUAAIAVA0IAJAdIABAAIAKgdIAVg0IATAAIgoBhg");
	this.shape_440.setTransform(159,353.8);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgDgDQgCgDgEgCQgEgBgFAAQgHAAgHAEQgFADgIAJIAABCIgUAAIAAhhIAQAAIACAQIAAAAQAJgIAHgFIAJgEIAKgBQAJAAAGACQAHADAEAFQAEAFACAHQACAIAAAJIAAA8g");
	this.shape_441.setTransform(99.2,353.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AgOAwQgKgEgHgGQgIgHgDgJIgDgLIgCgLQABgHAEgOQAEgJAGgHQAIgGAJgEQAJgDAIAAQALAAAIADQAJADAGAGQAFAHAEAIQACAJAAAKIAAAKIhJAAQAAAHADAGQADAFAFAEQAFAEAFACQAGACAHAAQAIAAAHgDQAGgCAIgEIAHANQgJAFgIADQgLADgLAAQgJAAgKgDgAAegIQgBgHgCgFQgCgFgEgDIgIgFQgEgCgGAAQgFAAgEACQgFACgEADIgIAIIgDAMIA4AAIAAAAg");
	this.shape_442.setTransform(87.1,353.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("AAaBHIghgvIgUAVIAAAaIgUAAIAAiNIAUAAIAABcIABAAIAvgwIAWAAIgnAmIAsA7g");
	this.shape_443.setTransform(63.8,351.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AgNAwQgKgEgHgGQgIgHgDgJIgDgLIgBgLQAAgFABgGIADgKQAEgJAIgHQAIgHAJgDQAKgDALAAQAHAAANAEQAJADAHAHIgKAMQgGgFgGgCQgHgDgGAAQgIAAgGADQgGACgFAFQgFAEgDAHQgCAGAAAHQAAAIACAGQADAHAFAEQAEAFAHACQAFADAIAAQAJAAAHgDQAHgDAGgGIAIANQgIAHgJAEQgLAEgKAAQgLAAgKgDg");
	this.shape_444.setTransform(51.2,353.8);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AgXAxQgHgCgEgEQgEgDgDgFQgDgGAAgGQAAgIAFgGQADgHAJgDQAIgEANgDQAMgDASgBQAAgFgBgEIgEgHQgDgDgEgCQgGgBgGAAQgHAAgJADQgIADgIAFIgHgOQAKgGAJgDIAMgDIAMgBQAJAAAJACQAHADAFAGQAFAFADAIQADAHgBAKIAAA6IgQAAIgCgNIAAAAQgIAHgKAEQgJAEgKAAQgHAAgFgCgAABACQgJACgFADQgGADgCADQgDAEAAAFQAAAHAFADQAFADAKAAQAGAAAHgDQAIgDAHgHIAAgWQgNAAgKACg");
	this.shape_445.setTransform(39,353.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgMBFQgIgEgHgGIAAAAIgCALIgQAAIAAiNIAUAAIAAAmIgBASIABAAQAGgHAJgEQAIgDAHAAQAKAAAHADQAIADAFAHQAFAHADAJQADAIAAALQAAAMgEALQgDAJgHAHQgGAHgIAEQgIADgIAAQgGAAgIgDgAgMgKQgGAEgHAGIAAAuQAGAFAHACQAGADAFAAQAFAAAFgDQAFgCADgFQAEgEACgHQACgHAAgIQAAgIgBgGQgCgGgDgEQgDgEgFgCQgFgDgGAAQgFAAgHADg");
	this.shape_446.setTransform(27.3,351.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgNAwQgJgEgIgGQgHgHgEgJIgEgLIgBgLQAAgFACgGIADgKQAFgJAHgHQAHgHAKgDQALgDAJAAQAJAAANAEQAIADAGAHIgJAMQgGgFgGgCQgHgDgGAAQgIAAgGADQgGACgFAFQgFAEgCAHQgDAGAAAHQAAAIADAGQACAHAFAEQAFAFAGACQAFADAIAAQAJAAAHgDQAGgDAHgGIAJANQgJAHgJAEQgLAEgLAAQgKAAgKgDg");
	this.shape_447.setTransform(183.2,353.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AgPAwQgJgEgHgGQgIgHgDgJIgDgLIgCgLQABgHAEgOQAEgJAGgHQAIgGAJgEQAJgDAJAAQAKAAAIADQAJADAGAGQAFAHAEAIQADAJAAAKIgBAKIhJAAQAAAHADAGQADAFAFAEQAFAEAFACQAGACAHAAQAIAAAHgDQAGgCAIgEIAHANQgJAFgIADQgLADgLAAQgJAAgLgDgAAdgIQAAgHgCgFQgCgFgEgDIgIgFQgEgCgGAAQgFAAgEACQgFACgEADIgIAIIgDAMIA3AAIAAAAg");
	this.shape_448.setTransform(159.1,353.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AAKBJIAAhSIgqAAIAAgPIA+AAIAABhgAAIgvQgEgEAAgGQAAgGAEgEQAEgEAHgBQAGABAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_449.setTransform(146.1,351.5);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AgOAwQgKgEgHgGQgIgHgDgJIgDgLIgCgLQABgHAEgOQAEgJAGgHQAIgGAJgEQAJgDAIAAQALAAAIADQAJADAGAGQAFAHAEAIQACAJABAKIgBAKIhJAAQAAAHADAGQADAFAFAEQAFAEAFACQAGACAHAAQAIAAAHgDQAGgCAIgEIAHANQgJAFgIADQgLADgLAAQgJAAgKgDgAAegIQgBgHgCgFQgCgFgEgDIgIgFQgEgCgGAAQgFAAgEACQgFACgEADIgIAIIgDAMIA4AAIAAAAg");
	this.shape_450.setTransform(123.1,353.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AAbAxIgQgVIgLgRIgBAAIgLARIgPAVIgVAAIAlgyIgigvIAWAAIAOAUIAKARIABAAIAKgRIANgUIAVAAIgiAwIAlAxg");
	this.shape_451.setTransform(99,353.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AgnAyIAAhhIAQAAIACAXIAAAAIAJgKIAKgIQAEgEAGgCIANgBQALAAAIAEIgEARQgKgDgIAAQgFgBgFACQgGABgDAEIgKAIQgEAFgEAIIAAA2g");
	this.shape_452.setTransform(63.8,353.7);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AgOAwQgKgEgHgGQgIgHgDgJIgDgLIgCgLQABgHAEgOQAEgJAGgHQAIgGAJgEQAJgDAIAAQALAAAIADQAJADAGAGQAFAHAEAIQADAJgBAKIAAAKIhJAAQAAAHADAGQADAFAFAEQAFAEAFACQAGACAHAAQAIAAAHgDQAGgCAIgEIAHANQgJAFgIADQgLADgLAAQgJAAgKgDgAAegIQgBgHgCgFQgCgFgEgDIgIgFQgEgCgGAAQgFAAgEACQgFACgEADIgIAIIgDAMIA4AAIAAAAg");
	this.shape_453.setTransform(51.1,353.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AgLAyIgNgDQgMgEgJgHIAIgNQAJAGAKAEQALADALAAQALAAAGgEQAFgEAAgFQAAgGgFgDQgLgFgLgDQgKgCgHgDQgHgBgFgEQgFgDgCgFQgCgEAAgGQAAgGACgFQADgGAFgDQAGgEAHgCQAIgCAJAAQALAAAMADQAJAEAIAFIgJANQgHgFgIgDQgJgCgIAAQgKAAgFADQgFAEAAAFQAAAGAHADQAFADAOADIAUAGQAIACAEADQAFAEACAEQABAEAAAGQAAAHgDAFQgDAFgFAEQgGAFgIACQgJACgLAAIgMgBg");
	this.shape_454.setTransform(39,353.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AgYAwQgGgDgFgFQgEgFgCgHQgCgIAAgJIAAg8IAUAAIAAA5IABALQABAFADADQACADAEACQAEABAGAAQAGAAAHgEQAGgDAHgJIAAhCIAUAAIAABhIgQAAIgCgQIgBAAQgIAJgIAEIgJAEQgEABgFAAQgJAAgGgCg");
	this.shape_455.setTransform(26.8,353.9);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgCgDQgDgDgEgCQgEgBgGAAQgGAAgGAEQgGADgIAJIAABCIgUAAIAAhhIARAAIABAQIABAAQAIgIAIgFIAIgEIAKgBQAJAAAHACQAGADAEAFQAEAFACAHQACAIAAAJIAAA8g");
	this.shape_456.setTransform(267.2,353.7);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AgOAwQgKgEgHgGQgHgHgEgJIgEgLIgBgLQAAgHAFgOQADgJAIgHQAGgGAKgEQAIgDAKAAQAKAAAJADQAIADAGAGQAFAHADAIQAEAJAAAKIgBAKIhKAAQABAHADAGQADAFAFAEQAEAEAHACQAFACAHAAQAIAAAHgDQAHgCAGgEIAHANQgHAFgKADQgKADgKAAQgLAAgJgDgAAegIQgBgHgCgFQgCgFgDgDIgIgFQgFgCgGAAQgEAAgFACQgGACgDADIgHAIIgFAMIA5AAIAAAAg");
	this.shape_457.setTransform(255.1,353.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("AAgAyIAAhDQAAgHgDgFQgCgDgEAAQgEAAgEADQgDADgEAHIAABFIgQAAIAAhDQABgHgDgFQgCgDgFAAQgEAAgEADQgCAEgDAGIAABFIgUAAIAAhhIAPAAIACANIAAAAQAFgHAEgEQAFgEAJAAQANAAAEARQAEgIAFgFQAFgEAIAAQAFAAAEACQAEACADAEQADADACAHQABAFAAAHIAABFg");
	this.shape_458.setTransform(243.2,353.7);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AgRAwQgKgEgGgGQgHgHgEgJIgDgLIgBgLQAAgHAEgOQAEgJAHgHQAGgHAKgDQAIgDAJAAQAJAAAKADQAJADAGAHQAHAHAEAJQAEAOAAAHIgCALIgCALQgEAJgHAHQgGAGgJAEQgKADgJAAQgJAAgIgDgAgLgfQgFACgDAFQgFAEgBAHQgCAGAAAHQAAAIACAGQABAHAFAEQADAFAFACQAFADAGAAQAGAAAGgDQAFgCAEgFQAEgEACgHQABgGAAgIQAAgHgBgGQgCgHgEgEQgEgFgFgCQgGgDgGAAQgGAAgFADg");
	this.shape_459.setTransform(219,353.8);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("AAFBGQgFgDgEgEQgFgFgCgHQgCgHAAgIIAAhbIghAAIAAgQIA0AAIAABsQgBAFACAEQABADACACQAGAFAIAAQAIAAAKgEIAEAPQgQAFgLAAQgIAAgGgCg");
	this.shape_460.setTransform(207.2,351.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AgMBDIgNgEQgGgCgGgEIgKgIIAMgOQAIAHAJAEQAKAFAKAAQAGgBAFgBQAEgBAEgDQADgCACgDQACgEAAgEQAAgEgCgEIgFgGQgEgCgMgGIgSgIIgKgEIgJgHQgEgEgCgGQgDgFAAgHQAAgHAEgIQADgGAGgEQAGgFAIgDQAIgDAJAAQAIAAAOAEQALAFAIAIIgLAMQgHgFgHgEQgIgCgJAAIgJABIgHADIgFAGIgBAHQAAAEABADIAGAGQAEACAKAFIASAIIAMAEQAFAEAEADQAEAEACAGQACAFAAAIQAAAIgDAGQgEAHgGAGQgGAFgJADQgJADgLAAQgGAAgGgBg");
	this.shape_461.setTransform(135,352.2);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AAcBCIAAg8QAAgMADglIAAAAIgIAdIgRAtIgMAAIgQgtIgIgdIAAAAQADAlAAAMIAAA8IgTAAIAAiCIAYAAIARA1IAFATIAAAAIAGgTIARg1IAXAAIAACCg");
	this.shape_462.setTransform(123,352.2);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AgCBDIgMgEIgJgFIgJgHIgHgKIgFgMQgDgHAAgHIgBgPIABgOQAAgHADgHIAFgLIAHgJIAJgIIAKgGQAFgCAHgBQAEgCAHAAQAIAAAOAFQAIAEAHAIIgMAMQgEgGgGgDQgHgCgIAAQgJgBgGAEQgHADgFAHQgGAHgCAJQgDAJAAALQAAALADAKQACAJAGAHQAFAGAHAEQAHADAIABQAJgBAHgDQAHgDAFgIIAMANIgJAIIgJAGQgFADgHABQgFABgHAAg");
	this.shape_463.setTransform(111.2,352.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("AgRAwQgKgEgGgGQgHgHgEgJIgDgLIgBgLQAAgHAEgOQAEgJAHgHQAGgHAKgDQAIgDAJAAQAJAAAKADQAJADAGAHQAHAHAEAJQAEAOAAAHIgCALIgCALQgEAJgHAHQgGAGgJAEQgKADgJAAQgJAAgIgDgAgLgfQgFACgDAFQgFAEgBAHQgCAGAAAHQAAAIACAGQABAHAFAEQADAFAFACQAFADAGAAQAGAAAGgDQAFgCAEgFQAEgEACgHQACgGgBgIQABgHgCgGQgCgHgEgEQgEgFgFgCQgGgDgGAAQgGAAgFADg");
	this.shape_464.setTransform(75,353.8);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AgNAwQgKgEgHgGQgHgHgEgJIgEgLIAAgLQAAgFABgGIADgKQAFgJAHgHQAIgHAKgDQAKgDAJAAQAJAAAMAEQAJADAGAHIgJAMQgGgFgGgCQgGgDgIAAQgHAAgGADQgGACgFAFQgFAEgCAHQgDAGAAAHQAAAIADAGQACAHAFAEQAFAFAGACQAGADAHAAQAIAAAIgDQAGgDAHgGIAIANQgHAHgLAEQgKAEgLAAQgKAAgKgDg");
	this.shape_465.setTransform(27.2,353.8);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AgRAwQgKgEgGgGQgHgHgEgJIgDgLIgBgLQAAgHAEgOQAEgJAHgHQAGgHAKgDQAIgDAJAAQAJAAAKADQAJADAGAHQAHAHAEAJQAEAOAAAHIgCALIgCALQgEAJgHAHQgGAGgJAEQgKADgJAAQgJAAgIgDgAgLgfQgFACgDAFQgFAEgBAHQgCAGAAAHQAAAIACAGQABAHAFAEQADAFAFACQAFADAGAAQAGAAAGgDQAFgCAEgFQAEgEACgHQABgGABgIQgBgHgBgGQgCgHgEgEQgEgFgFgCQgGgDgGAAQgGAAgFADg");
	this.shape_466.setTransform(291,353.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("AAFBGQgFgDgEgEQgFgFgCgHQgCgHAAgIIAAhbIggAAIAAgQIAzAAIAABsQgBAFACAEQABADACACQAGAFAIAAQAIAAAKgEIAEAPQgQAFgLAAQgIAAgGgCg");
	this.shape_467.setTransform(279.2,351.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AgPAwQgJgEgHgGQgIgHgDgJIgDgLIgCgLQABgHAEgOQAEgJAGgHQAIgGAJgEQAJgDAIAAQALAAAIADQAJADAGAGQAFAHAEAIQACAJAAAKIAAAKIhJAAQAAAHADAGQADAFAFAEQAFAEAFACQAGACAHAAQAIAAAHgDQAGgCAIgEIAHANQgJAFgIADQgLADgLAAQgJAAgLgDgAAdgIQAAgHgCgFQgCgFgEgDIgIgFQgEgCgGAAQgFAAgEACQgFACgEADIgIAIIgDAMIA3AAIAAAAg");
	this.shape_468.setTransform(267.1,353.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AgPAwQgJgEgHgGQgHgHgFgJIgCgLIgBgLQAAgHADgOQAFgJAGgHQAIgGAIgEQAKgDAIAAQALAAAIADQAJADAGAGQAGAHACAIQADAJAAAKIgBAKIhIAAQAAAHADAGQADAFAFAEQAEAEAGACQAGACAHAAQAIAAAHgDQAHgCAGgEIAIANQgJAFgJADQgKADgKAAQgKAAgLgDgAAdgIQAAgHgCgFQgCgFgEgDIgHgFQgFgCgGAAQgFAAgFACQgEACgFADIgHAIIgDAMIA3AAIAAAAg");
	this.shape_469.setTransform(171.1,353.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AAYBHIAAg6IgBgLQgBgEgDgDQgCgDgEgCQgEgBgGAAQgGAAgGAEQgGADgIAIIAABDIgUAAIAAiNIAUAAIAAAmIgCAWIABAAQAIgIAIgFIAIgEIAKgBQAJAAAHACQAGADAEAFQAEAFACAHQACAHAAAJIAAA9g");
	this.shape_470.setTransform(159.2,351.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("AgJBCIAAhxIgqAAIAAgRIBnAAIAAARIgqAAIAABxg");
	this.shape_471.setTransform(147,352.2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AgLAyIgNgDQgMgEgJgHIAIgNQAJAGAKAEQALADALAAQALAAAGgEQAFgEAAgFQAAgGgFgDQgLgFgLgDQgKgCgHgDQgHgBgFgEQgFgDgCgFQgCgEAAgGQAAgGACgFQADgGAFgDQAGgEAHgCQAIgCAJAAQALAAAMADQAJAEAIAFIgJANQgHgFgIgDQgJgCgIAAQgKAAgFADQgFAEAAAFQAAAGAHADQAFADAOADIAUAGQAIACAEADQAFAEACAEQABAEAAAGQAAAHgDAFQgDAFgFAEQgGAFgIACQgJACgLAAIgMgBg");
	this.shape_472.setTransform(123,353.8);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("AgLAyIgNgDQgMgEgJgHIAIgNQAJAGAKAEQALADALAAQALAAAGgEQAFgEAAgFQAAgGgFgDQgLgFgLgDQgKgCgHgDQgHgBgFgEQgFgDgCgFQgCgEAAgGQAAgGACgFQADgGAFgDQAGgEAHgCQAIgCAJAAQALAAAMADQAJAEAIAFIgJANQgHgFgIgDQgJgCgIAAQgKAAgFADQgFAEAAAFQAAAGAHADQAFADAOADIAUAGQAIACAEADQAFAEACAEQABAEAAAGQAAAHgDAFQgDAFgFAEQgGAFgIACQgJACgLAAIgMgBg");
	this.shape_473.setTransform(111,353.8);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AgtBGIAAiJIARAAIABAMIABAAQAHgHAIgDQAJgEAHAAQAKAAAHADQAIAEAFAGQAFAHADAJQADAKAAAKQAAANgEAJQgDAJgHAIQgGAGgIAEQgIAEgIgBQgGABgIgEQgHgDgGgFIgBAAIABARIAAAggAgMgyQgGAEgHAGIAAAuQAGAFAHACQAGADAFAAQAFAAAFgDQAFgCADgFQAEgEACgGQACgGAAgJQAAgIgBgGQgCgGgDgEQgDgFgFgCQgFgDgGABQgFAAgHACg");
	this.shape_474.setTransform(75.3,355.7);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AAQBCIgLgyQgEgOgBgJIAAAAIgEAXIgLAyIgXAAIgTiCIAVAAIAIBOIADAeIAAAAIAHgeIALgtIAQAAIALAtIAHAeIABAAIACgeIAHhOIAVAAIgSCCg");
	this.shape_475.setTransform(27,352.2);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgDgDQgCgDgEgCQgEgBgFAAQgHAAgGAEQgGADgIAJIAABCIgUAAIAAhhIAQAAIACAQIAAAAQAJgIAHgFIAJgEIAKgBQAJAAAGACQAHADAEAFQAEAFACAHQACAIAAAJIAAA8g");
	this.shape_476.setTransform(351.2,353.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("AAfAyIAAhDQAAgHgBgFQgDgDgFAAQgDAAgEADQgDADgEAHIAABFIgPAAIAAhDQAAgHgDgFQgCgDgEAAQgFAAgDADQgEAEgCAGIAABFIgUAAIAAhhIAQAAIABANIABAAQAEgHAEgEQAGgEAHAAQANAAAEARQAFgIAEgFQAGgEAIAAQAFAAAFACQAEACACAEQADADACAHQABAFAAAHIAABFg");
	this.shape_477.setTransform(327.2,353.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AgPAwQgJgEgHgGQgHgHgFgJIgCgLIgBgLQAAgHADgOQAFgJAGgHQAIgGAIgEQAKgDAIAAQALAAAIADQAJADAGAGQAGAHACAIQADAJAAAKIgBAKIhJAAQABAHADAGQADAFAFAEQAEAEAGACQAGACAHAAQAIAAAHgDQAHgCAGgEIAIANQgJAFgJADQgKADgKAAQgKAAgLgDgAAdgIQAAgHgCgFQgCgFgEgDIgHgFQgFgCgGAAQgFAAgFACQgFACgEADIgHAIIgEAMIA4AAIAAAAg");
	this.shape_478.setTransform(279.1,353.8);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AgXBHQgJgDgFgDQgGgDgDgFQgDgFAAgHQAAgFAEgGQAEgFAIgEIAAgBQgFgDgCgDQgEgFABgFQgBgGAEgDQADgGAFgDIAAgBQgFgEgEgGQgDgGAAgJQAAgIADgHQADgGAGgFQAFgEAHgDQAIgCAHAAQAIAAAHACIAnAAIAAAQIgXAAQADADABAFQADAEAAAGQAAAHgDAHQgDAGgFAFQgGAEgGACQgHACgIAAQgHAAgJgDQgGAEAAAFQAAAFAFACQAEADALAAIATAAQAKAAAHACQAHABAEACQAGADABAFQADAFAAAFQAAAIgEAGQgDAHgIAEQgIAFgJADQgLACgMAAQgKAAgIgBgAgeAkQgCADAAAEQgBAEACACQADAEAEACQADABAGABIAMABQAIAAAGgBIAKgEQAFgDADgDQABgDAAgDQAAgGgEgCQgFgDgLAAIgQAAQgKAAgGgCQgFAEgDAEgAgNg3IgGADQgDAEgCAEQgBADAAAFQAAAFABAEQACAEADADQADACADACIAIABIAHgBQAEgCADgCQADgDABgEQACgEAAgFQAAgFgCgDQgBgEgDgEIgHgDIgHgCIgIACg");
	this.shape_479.setTransform(183.4,355.9);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AgtBGIAAiJIARAAIABAMIABAAQAHgHAIgDQAJgEAHAAQAKAAAHADQAIAEAFAGQAFAHADAJQADAKAAAKQAAANgEAJQgDAJgHAIQgGAGgIAEQgIAEgIgBQgGABgIgEQgHgDgGgFIgBAAIABARIAAAggAgMgyQgGAEgHAGIAAAuQAGAFAHACQAGADAFAAQAFAAAFgDQAFgCADgFQAEgEACgGQACgGAAgJQAAgIgBgGQgCgGgDgEQgDgFgFgCQgFgDgGABQgFAAgHACg");
	this.shape_480.setTransform(75.3,355.7);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("AgXBHQgIgDgGgDQgGgDgDgFQgDgFAAgHQAAgFAEgGQAEgFAHgEIAAgBQgEgDgCgDQgDgFgBgFQABgGADgDQADgGAFgDIAAgBQgFgEgEgGQgDgGAAgJQAAgIADgHQADgGAGgFQAFgEAIgDQAGgCAIAAQAIAAAGACIApAAIAAAQIgYAAQADADABAFQADAEAAAGQAAAHgDAHQgDAGgFAFQgFAEgIACQgGACgIAAQgIAAgHgDQgHAEAAAFQAAAFAFACQAEADAKAAIAUAAQAKAAAHACQAHABAFACQAEADACAFQADAFAAAFQAAAIgEAGQgEAHgHAEQgHAFgKADQgLACgMAAQgJAAgJgBgAgeAkQgDADAAAEQAAAEADACQACAEADACQAEABAGABIANABQAGAAAHgBIAKgEQAFgDACgDQACgDAAgDQAAgGgEgCQgFgDgLAAIgRAAQgJAAgFgCQgGAEgDAEgAgMg3IgHADQgDAEgCAEQgBADAAAFQAAAFABAEQACAEADADQADACAEACIAHABIAHgBQAEgCADgCQADgDACgEQABgEAAgFQAAgFgBgDQgCgEgDgEIgHgDIgHgCIgHACg");
	this.shape_481.setTransform(267.4,355.9);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgDgDQgCgDgEgCQgEgBgGAAQgGAAgGAEQgGADgIAJIAABCIgUAAIAAhhIARAAIABAQIAAAAQAJgIAIgFIAIgEIAKgBQAJAAAHACQAGADAEAFQAEAFACAHQACAIAAAJIAAA8g");
	this.shape_482.setTransform(231.2,353.7);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AAKBJIAAhSIgqAAIAAgPIA+AAIAABhgAAIgvQgEgEAAgGQAAgGAEgEQAEgEAHgBQAGABAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_483.setTransform(218.1,351.5);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AAAA/QgHgDgFgGQgEgFgDgIQgCgHAAgJIAAgrIgaAAIAAgPIAbgBIADgfIAQAAIAAAfIAtAAIAAAQIgtAAIAAArIABALQABAEACADQADAEAFABQAEACAHAAQAIAAAOgFIAEAPQgSAGgNAAQgKAAgHgDg");
	this.shape_484.setTransform(159.1,352.4);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AguBEIAFgQQAEABAEAAQAFAAAEgBQADgBADgDQAHgEADgKIADgGIgthgIAUAAIAWAyIAKAdIABAAIAKgdIATgyIATAAIgpBmQgEAJgDAGQgEAGgEAFQgGAEgGADQgHADgIgBQgHAAgHgBg");
	this.shape_485.setTransform(135,355.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AAAA/QgHgDgFgGQgEgFgDgIQgCgHAAgJIAAgrIgaAAIAAgPIAbgBIADgfIAQAAIAAAfIAtAAIAAAQIgtAAIAAArIABALQABAEACADQADAEAFABQAEACAHAAQAIAAAOgFIAEAPQgSAGgNAAQgKAAgHgDg");
	this.shape_486.setTransform(99.1,352.4);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgDgDQgCgDgEgCQgEgBgGAAQgGAAgGAEQgGADgIAJIAABCIgUAAIAAhhIARAAIABAQIAAAAQAJgIAIgFIAIgEIAKgBQAJAAAHACQAGADAEAFQAEAFACAHQACAIAAAJIAAA8g");
	this.shape_487.setTransform(87.2,353.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AAgAyIAAhDQAAgHgDgFQgCgDgEAAQgEAAgEADQgDADgEAHIAABFIgQAAIAAhDQABgHgDgFQgCgDgFAAQgEAAgEADQgDAEgCAGIAABFIgUAAIAAhhIAPAAIACANIAAAAQAFgHAEgEQAFgEAJAAQANAAAEARQAEgIAFgFQAFgEAIAAQAFAAAEACQAEACADAEQADADACAHQABAFAAAHIAABFg");
	this.shape_488.setTransform(63.2,353.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AAKBJIAAhSIgqAAIAAgPIA+AAIAABhgAAIgvQgEgEAAgGQAAgGAEgEQAEgEAHgBQAGABAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_489.setTransform(50.1,351.5);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AgXAxQgHgCgEgEQgEgDgDgFQgDgGAAgGQAAgIAFgGQADgHAJgDQAIgEANgDQAMgDASgBQAAgFgBgEIgEgHQgDgDgEgCQgGgBgGAAQgHAAgJADQgIADgIAFIgHgOQAKgGAJgDIAMgDIAMgBQAJAAAJACQAHADAFAGQAFAFADAIQADAHgBAKIAAA6IgQAAIgCgNIAAAAQgIAHgKAEQgJAEgKAAQgHAAgFgCgAABACQgJACgFADQgGADgCADQgDAEAAAFQAAAHAFADQAFADAKAAQAGAAAHgDQAIgDAHgHIAAgWQgNAAgKACg");
	this.shape_490.setTransform(39,353.8);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AAaBHIghgvIgUAVIAAAaIgUAAIAAiNIAUAAIAABcIAAAAIAwgwIAWAAIgmAmIArA7g");
	this.shape_491.setTransform(183.8,351.6);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AAOAxIgJgrIgEgcIgBAAIgEAcIgJArIgYAAIgVhhIAUAAIAKA1IAEAbIABAAIAFgbIALgtIARAAIAKAtIAGAbIAAAAIAEgbIAKg1IASAAIgTBhg");
	this.shape_492.setTransform(147,353.8);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AAFBGQgFgDgFgEQgEgFgCgHQgCgHgBgIIAAhbIgfAAIAAgQIAyAAIAABsQAAAFACAEQABADACACQAFAFAJAAQAIAAAJgEIAFAPQgPAFgMAAQgIAAgGgCg");
	this.shape_493.setTransform(87.2,351.7);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AgXAxQgHgCgEgEQgEgDgDgFQgDgGAAgGQAAgIAFgGQADgHAJgDQAIgEANgDQAMgDATgBQgBgFgBgEIgEgHQgDgDgEgCQgGgBgGAAQgHAAgJADQgIADgIAFIgHgOQAKgGAKgDIALgDIAMgBQAJAAAJACQAHADAFAGQAFAFADAIQADAHgBAKIAAA6IgQAAIgCgNIAAAAQgIAHgKAEQgJAEgKAAQgHAAgFgCgAABACQgJACgFADQgGADgCADQgDAEAAAFQAAAHAFADQAFADAKAAQAGAAAHgDQAIgDAIgHIAAgWQgOAAgKACg");
	this.shape_494.setTransform(75,353.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AgXBHQgIgDgGgDQgGgDgDgFQgDgFAAgHQAAgFAEgGQAEgFAIgEIAAgBQgFgDgCgDQgEgFAAgFQAAgGAEgDQADgGAGgDIAAgBQgGgEgDgGQgEgGAAgJQAAgIAEgHQADgGAFgFQAFgEAHgDQAIgCAIAAQAGAAAHACIApAAIAAAQIgZAAQAEADACAFQACAEAAAGQAAAHgDAHQgDAGgFAFQgFAEgIACQgHACgGAAQgIAAgJgDQgGAEAAAFQAAAFAFACQAFADAJAAIAUAAQAKAAAHACQAHABAFACQAFADACAFQACAFAAAFQAAAIgEAGQgEAHgHAEQgIAFgKADQgKACgLAAQgKAAgJgBgAgeAkQgCADAAAEQAAAEACACQABAEAFACQADABAGABIANABQAHAAAGgBIALgEQAEgDADgDQACgDAAgDQAAgGgGgCQgEgDgLAAIgQAAQgKAAgFgCQgGAEgDAEgAgMg3IgHADQgDAEgBAEQgCADAAAFQAAAFACAEQABAEADADQADACAEACIAIABIAHgBQADgCADgCQADgDACgEQABgEAAgFQAAgFgBgDQgCgEgDgEIgGgDIgHgCIgIACg");
	this.shape_495.setTransform(171.4,355.9);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AAYAyIAAg5IgBgLQgBgFgDgDQgCgDgEgCQgEgBgGAAQgGAAgGAEQgGADgIAJIAABCIgUAAIAAhhIARAAIABAQIAAAAQAJgIAIgFIAIgEIALgBQAIAAAHACQAGADAEAFQAEAFACAHQACAIAAAJIAAA8g");
	this.shape_496.setTransform(51.2,353.7);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AAKBJIAAhSIgqAAIAAgPIA+AAIAABhgAAIgvQgEgEAAgGQAAgGAEgEQAEgEAHgBQAGABAEAEQAEAEAAAGQAAAGgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_497.setTransform(170.1,351.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AgLAyIgNgDQgMgEgJgHIAIgNQAJAGAKAEQALADALAAQALAAAGgEQAFgEAAgFQAAgGgFgDQgLgFgLgDQgKgCgHgDQgHgBgFgEQgFgDgCgFQgCgEAAgGQAAgGACgFQADgGAFgDQAGgEAHgCQAIgCAJAAQALAAAMADQAJAEAIAFIgJANQgHgFgIgDQgJgCgIAAQgKAAgFADQgFAEAAAFQAAAGAHADQAFADAOADIAUAGQAIACAEADQAFAEACAEQABAEAAAGQAAAHgDAFQgDAFgFAEQgGAFgIACQgJACgLAAIgMgBg");
	this.shape_498.setTransform(99,353.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AgLAyIgNgDQgMgEgJgHIAIgNQAJAGAKAEQALADALAAQALAAAGgEQAFgEAAgFQAAgGgFgDQgLgFgLgDQgKgCgHgDQgHgBgFgEQgFgDgCgFQgCgEAAgGQAAgGACgFQADgGAFgDQAGgEAHgCQAIgCAJAAQALAAAMADQAJAEAIAFIgJANQgHgFgIgDQgJgCgIAAQgKAAgFADQgFAEAAAFQAAAGAHADQAFADAOADIAUAGQAIACAEADQAFAEACAEQABAEAAAGQAAAHgDAFQgDAFgFAEQgGAFgIACQgJACgLAAIgMgBg");
	this.shape_499.setTransform(87,353.8);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AgPAwQgJgEgHgGQgHgHgFgJIgCgLIgBgLQAAgHADgOQAFgJAGgHQAIgGAIgEQAKgDAIAAQALAAAIADQAJADAGAGQAGAHACAIQADAJAAAKIgBAKIhJAAQABAHADAGQADAFAFAEQAEAEAGACQAGACAHAAQAIAAAHgDQAHgCAGgEIAIANQgIAFgKADQgKADgKAAQgKAAgLgDgAAdgIQAAgHgCgFQgCgFgEgDIgHgFQgFgCgGAAQgFAAgFACQgEACgFADIgHAIIgEAMIA4AAIAAAAg");
	this.shape_500.setTransform(27.1,353.8);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_501.setTransform(279,357.1);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_502.setTransform(291,357.1);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_503.setTransform(303,357.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_504.setTransform(279,357.1);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_505.setTransform(291,357.1);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_506.setTransform(303,357.1);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_507.setTransform(279,357.1);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_508.setTransform(291,357.1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_509.setTransform(303,357.1);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_510.setTransform(279,357.1);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_511.setTransform(291,357.1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_512.setTransform(303,357.1);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_513.setTransform(279,357.1);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_514.setTransform(291,357.1);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_515.setTransform(303,357.1);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_516.setTransform(279,357.1);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_517.setTransform(291,357.1);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_518.setTransform(303,357.1);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_519.setTransform(279,357.1);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_520.setTransform(291,357.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_521.setTransform(303,357.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_522.setTransform(279,357.1);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_523.setTransform(291,357.1);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_524.setTransform(303,357.1);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_525.setTransform(279,357.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_526.setTransform(291,357.1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_527.setTransform(303,357.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_528.setTransform(279,357.1);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_529.setTransform(291,357.1);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_530.setTransform(303,357.1);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_531.setTransform(279,357.1);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_532.setTransform(291,357.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_533.setTransform(303,357.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_534.setTransform(279,357.1);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_535.setTransform(291,357.1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_536.setTransform(699,357.1);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_537.setTransform(279,357.1);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_538.setTransform(291,357.1);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_539.setTransform(699,357.1);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_540.setTransform(279,357.1);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_541.setTransform(291,357.1);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgIQAAgHAFgFQAGgGAGAAQAIAAAFAGQAFAFAAAHQAAAIgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_542.setTransform(699,357.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_437},{t:this.shape_436,p:{x:39.8}},{t:this.shape_435,p:{x:51}},{t:this.shape_434,p:{x:63.2}},{t:this.shape_433,p:{x:75.1}},{t:this.shape_432,p:{x:87}},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429,p:{x:122.7}},{t:this.shape_428,p:{x:146.7}},{t:this.shape_427,p:{x:159.1}},{t:this.shape_426},{t:this.shape_425,p:{x:183.1}},{t:this.shape_424,p:{x:195.2}},{t:this.shape_423,p:{x:207}},{t:this.shape_422,p:{x:219.3}},{t:this.shape_421,p:{x:231.2}},{t:this.shape_420,p:{x:243.1}},{t:this.shape_419,p:{x:255.2}},{t:this.shape_418,p:{x:267.1}}]},777).to({state:[{t:this.shape_437},{t:this.shape_436,p:{x:39.8}},{t:this.shape_435,p:{x:51}},{t:this.shape_434,p:{x:63.2}},{t:this.shape_433,p:{x:75.1}},{t:this.shape_432,p:{x:87}},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429,p:{x:122.7}},{t:this.shape_428,p:{x:146.7}},{t:this.shape_427,p:{x:159.1}},{t:this.shape_426},{t:this.shape_425,p:{x:183.1}},{t:this.shape_424,p:{x:195.2}},{t:this.shape_423,p:{x:207}},{t:this.shape_422,p:{x:219.3}},{t:this.shape_421,p:{x:231.2}},{t:this.shape_420,p:{x:243.1}},{t:this.shape_419,p:{x:255.2}},{t:this.shape_418,p:{x:267.1}}]},48).to({state:[{t:this.shape_446,p:{x:27.3}},{t:this.shape_445,p:{x:39}},{t:this.shape_444},{t:this.shape_443},{t:this.shape_432,p:{x:75}},{t:this.shape_442},{t:this.shape_441},{t:this.shape_429,p:{x:110.7}},{t:this.shape_428,p:{x:134.7}},{t:this.shape_425,p:{x:147.1}},{t:this.shape_440,p:{x:159}},{t:this.shape_420,p:{x:171.1}},{t:this.shape_439,p:{x:183.2}},{t:this.shape_435,p:{x:195}},{t:this.shape_422,p:{x:207.3}},{t:this.shape_438,p:{x:219.2}},{t:this.shape_427,p:{x:231.1}},{t:this.shape_434,p:{x:243.2}},{t:this.shape_418,p:{x:255.1}}]},1).to({state:[{t:this.shape_455,p:{x:26.8}},{t:this.shape_454,p:{x:39}},{t:this.shape_453},{t:this.shape_452,p:{x:63.8}},{t:this.shape_442},{t:this.shape_451},{t:this.shape_422,p:{x:111.3}},{t:this.shape_450},{t:this.shape_436,p:{x:135.8}},{t:this.shape_449,p:{x:146.1}},{t:this.shape_448},{t:this.shape_434,p:{x:171.2}},{t:this.shape_447},{t:this.shape_427,p:{x:195.1}}]},47).to({state:[{t:this.shape_465},{t:this.shape_455,p:{x:38.8}},{t:this.shape_454,p:{x:51}},{t:this.shape_433,p:{x:63.1}},{t:this.shape_464},{t:this.shape_421,p:{x:87.2}},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_428,p:{x:158.7}},{t:this.shape_420,p:{x:171.1}},{t:this.shape_440,p:{x:183}},{t:this.shape_427,p:{x:195.1}},{t:this.shape_460},{t:this.shape_459,p:{x:219}},{t:this.shape_422,p:{x:231.3}},{t:this.shape_458,p:{x:243.2}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_456,p:{x:267.2}},{t:this.shape_418,p:{x:279.1}}]},50).to({state:[{t:this.shape_475},{t:this.shape_459,p:{x:39}},{t:this.shape_452,p:{x:51.8}},{t:this.shape_429,p:{x:62.7}},{t:this.shape_474,p:{x:75.3}},{t:this.shape_436,p:{x:87.8}},{t:this.shape_431},{t:this.shape_473,p:{x:111}},{t:this.shape_472,p:{x:123}},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_438,p:{x:183.2}},{t:this.shape_427,p:{x:195.1}},{t:this.shape_454,p:{x:207}},{t:this.shape_428,p:{x:230.7}},{t:this.shape_420,p:{x:243.1}},{t:this.shape_440,p:{x:255}},{t:this.shape_468,p:{x:267.1}},{t:this.shape_467,p:{x:279.2}},{t:this.shape_466,p:{x:291}},{t:this.shape_422,p:{x:303.3}},{t:this.shape_458,p:{x:315.2}},{t:this.shape_457,p:{x:327.1}},{t:this.shape_456,p:{x:339.2}},{t:this.shape_418,p:{x:351.1}}]},48).to({state:[{t:this.shape_475},{t:this.shape_459,p:{x:39}},{t:this.shape_452,p:{x:51.8}},{t:this.shape_429,p:{x:62.7}},{t:this.shape_480},{t:this.shape_436,p:{x:87.8}},{t:this.shape_431},{t:this.shape_473,p:{x:111}},{t:this.shape_472,p:{x:123}},{t:this.shape_474,p:{x:147.3}},{t:this.shape_424,p:{x:159.2}},{t:this.shape_455,p:{x:170.8}},{t:this.shape_479},{t:this.shape_449,p:{x:194.1}},{t:this.shape_434,p:{x:207.2}},{t:this.shape_454,p:{x:219}},{t:this.shape_428,p:{x:242.7}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_440,p:{x:267}},{t:this.shape_478},{t:this.shape_439,p:{x:291.2}},{t:this.shape_435,p:{x:303}},{t:this.shape_422,p:{x:315.3}},{t:this.shape_477},{t:this.shape_468,p:{x:339.1}},{t:this.shape_476},{t:this.shape_418,p:{x:363.1}}]},49).to({state:[{t:this.shape_422,p:{x:27.3}},{t:this.shape_490},{t:this.shape_489,p:{x:50.1}},{t:this.shape_488},{t:this.shape_425,p:{x:75.1}},{t:this.shape_487},{t:this.shape_486},{t:this.shape_473,p:{x:123}},{t:this.shape_485},{t:this.shape_472,p:{x:147}},{t:this.shape_484,p:{x:159.1}},{t:this.shape_420,p:{x:171.1}},{t:this.shape_438,p:{x:183.2}},{t:this.shape_454,p:{x:195}},{t:this.shape_483},{t:this.shape_482},{t:this.shape_433,p:{x:243.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_481},{t:this.shape_436,p:{x:279.8}},{t:this.shape_445,p:{x:291}},{t:this.shape_418,p:{x:303.1}},{t:this.shape_449,p:{x:314.1}},{t:this.shape_466,p:{x:327}},{t:this.shape_456,p:{x:339.2}}]},49).to({state:[{t:this.shape_472,p:{x:27}},{t:this.shape_459,p:{x:39}},{t:this.shape_444},{t:this.shape_489,p:{x:62.1}},{t:this.shape_494},{t:this.shape_493},{t:this.shape_419,p:{x:111.2}},{t:this.shape_450},{t:this.shape_484,p:{x:135.1}},{t:this.shape_492},{t:this.shape_435,p:{x:159}},{t:this.shape_452,p:{x:171.8}},{t:this.shape_491},{t:this.shape_454,p:{x:195}},{t:this.shape_483},{t:this.shape_482},{t:this.shape_433,p:{x:243.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_481},{t:this.shape_436,p:{x:279.8}},{t:this.shape_445,p:{x:291}},{t:this.shape_418,p:{x:303.1}},{t:this.shape_449,p:{x:314.1}},{t:this.shape_466,p:{x:327}},{t:this.shape_456,p:{x:339.2}}]},49).to({state:[{t:this.shape_446,p:{x:27.3}},{t:this.shape_445,p:{x:39}},{t:this.shape_496},{t:this.shape_434,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_436,p:{x:87.8}},{t:this.shape_472,p:{x:99}},{t:this.shape_428,p:{x:122.7}},{t:this.shape_420,p:{x:135.1}},{t:this.shape_454,p:{x:147}},{t:this.shape_449,p:{x:158.1}},{t:this.shape_495},{t:this.shape_419,p:{x:183.2}}]},48).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}}]},49).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_501,p:{x:279}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_501,p:{x:279}},{t:this.shape_502,p:{x:291}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_501,p:{x:279}},{t:this.shape_502,p:{x:291}},{t:this.shape_503,p:{x:303}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_504,p:{x:279}},{t:this.shape_502,p:{x:291}},{t:this.shape_503,p:{x:303}},{t:this.shape_501,p:{x:315}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_504,p:{x:279}},{t:this.shape_505,p:{x:291}},{t:this.shape_503,p:{x:303}},{t:this.shape_501,p:{x:315}},{t:this.shape_502,p:{x:327}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_504,p:{x:279}},{t:this.shape_505,p:{x:291}},{t:this.shape_506,p:{x:303}},{t:this.shape_501,p:{x:315}},{t:this.shape_502,p:{x:327}},{t:this.shape_503,p:{x:339}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_507,p:{x:279}},{t:this.shape_505,p:{x:291}},{t:this.shape_506,p:{x:303}},{t:this.shape_504,p:{x:315}},{t:this.shape_502,p:{x:327}},{t:this.shape_503,p:{x:339}},{t:this.shape_501,p:{x:351}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_507,p:{x:279}},{t:this.shape_508,p:{x:291}},{t:this.shape_506,p:{x:303}},{t:this.shape_504,p:{x:315}},{t:this.shape_505,p:{x:327}},{t:this.shape_503,p:{x:339}},{t:this.shape_501,p:{x:351}},{t:this.shape_502,p:{x:363}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_507,p:{x:279}},{t:this.shape_508,p:{x:291}},{t:this.shape_509,p:{x:303}},{t:this.shape_504,p:{x:315}},{t:this.shape_505,p:{x:327}},{t:this.shape_506,p:{x:339}},{t:this.shape_501,p:{x:351}},{t:this.shape_502,p:{x:363}},{t:this.shape_503,p:{x:375}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_510,p:{x:279}},{t:this.shape_508,p:{x:291}},{t:this.shape_509,p:{x:303}},{t:this.shape_507,p:{x:315}},{t:this.shape_505,p:{x:327}},{t:this.shape_506,p:{x:339}},{t:this.shape_504,p:{x:351}},{t:this.shape_502,p:{x:363}},{t:this.shape_503,p:{x:375}},{t:this.shape_501,p:{x:387}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_510,p:{x:279}},{t:this.shape_511,p:{x:291}},{t:this.shape_509,p:{x:303}},{t:this.shape_507,p:{x:315}},{t:this.shape_508,p:{x:327}},{t:this.shape_506,p:{x:339}},{t:this.shape_504,p:{x:351}},{t:this.shape_505,p:{x:363}},{t:this.shape_503,p:{x:375}},{t:this.shape_501,p:{x:387}},{t:this.shape_502,p:{x:399}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_510,p:{x:279}},{t:this.shape_511,p:{x:291}},{t:this.shape_512,p:{x:303}},{t:this.shape_507,p:{x:315}},{t:this.shape_508,p:{x:327}},{t:this.shape_509,p:{x:339}},{t:this.shape_504,p:{x:351}},{t:this.shape_505,p:{x:363}},{t:this.shape_506,p:{x:375}},{t:this.shape_501,p:{x:387}},{t:this.shape_502,p:{x:399}},{t:this.shape_503,p:{x:411}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_513,p:{x:279}},{t:this.shape_511,p:{x:291}},{t:this.shape_512,p:{x:303}},{t:this.shape_510,p:{x:315}},{t:this.shape_508,p:{x:327}},{t:this.shape_509,p:{x:339}},{t:this.shape_507,p:{x:351}},{t:this.shape_505,p:{x:363}},{t:this.shape_506,p:{x:375}},{t:this.shape_504,p:{x:387}},{t:this.shape_502,p:{x:399}},{t:this.shape_503,p:{x:411}},{t:this.shape_501,p:{x:423}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_513,p:{x:279}},{t:this.shape_514,p:{x:291}},{t:this.shape_512,p:{x:303}},{t:this.shape_510,p:{x:315}},{t:this.shape_511,p:{x:327}},{t:this.shape_509,p:{x:339}},{t:this.shape_507,p:{x:351}},{t:this.shape_508,p:{x:363}},{t:this.shape_506,p:{x:375}},{t:this.shape_504,p:{x:387}},{t:this.shape_505,p:{x:399}},{t:this.shape_503,p:{x:411}},{t:this.shape_501,p:{x:423}},{t:this.shape_502,p:{x:435}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_513,p:{x:279}},{t:this.shape_514,p:{x:291}},{t:this.shape_515,p:{x:303}},{t:this.shape_510,p:{x:315}},{t:this.shape_511,p:{x:327}},{t:this.shape_512,p:{x:339}},{t:this.shape_507,p:{x:351}},{t:this.shape_508,p:{x:363}},{t:this.shape_509,p:{x:375}},{t:this.shape_504,p:{x:387}},{t:this.shape_505,p:{x:399}},{t:this.shape_506,p:{x:411}},{t:this.shape_501,p:{x:423}},{t:this.shape_502,p:{x:435}},{t:this.shape_503,p:{x:447}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_516,p:{x:279}},{t:this.shape_514,p:{x:291}},{t:this.shape_515,p:{x:303}},{t:this.shape_513,p:{x:315}},{t:this.shape_511,p:{x:327}},{t:this.shape_512,p:{x:339}},{t:this.shape_510,p:{x:351}},{t:this.shape_508,p:{x:363}},{t:this.shape_509,p:{x:375}},{t:this.shape_507,p:{x:387}},{t:this.shape_505,p:{x:399}},{t:this.shape_506,p:{x:411}},{t:this.shape_504,p:{x:423}},{t:this.shape_502,p:{x:435}},{t:this.shape_503,p:{x:447}},{t:this.shape_501,p:{x:459}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_516,p:{x:279}},{t:this.shape_517,p:{x:291}},{t:this.shape_515,p:{x:303}},{t:this.shape_513,p:{x:315}},{t:this.shape_514,p:{x:327}},{t:this.shape_512,p:{x:339}},{t:this.shape_510,p:{x:351}},{t:this.shape_511,p:{x:363}},{t:this.shape_509,p:{x:375}},{t:this.shape_507,p:{x:387}},{t:this.shape_508,p:{x:399}},{t:this.shape_506,p:{x:411}},{t:this.shape_504,p:{x:423}},{t:this.shape_505,p:{x:435}},{t:this.shape_503,p:{x:447}},{t:this.shape_501,p:{x:459}},{t:this.shape_502,p:{x:471}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_516,p:{x:279}},{t:this.shape_517,p:{x:291}},{t:this.shape_518,p:{x:303}},{t:this.shape_513,p:{x:315}},{t:this.shape_514,p:{x:327}},{t:this.shape_515,p:{x:339}},{t:this.shape_510,p:{x:351}},{t:this.shape_511,p:{x:363}},{t:this.shape_512,p:{x:375}},{t:this.shape_507,p:{x:387}},{t:this.shape_508,p:{x:399}},{t:this.shape_509,p:{x:411}},{t:this.shape_504,p:{x:423}},{t:this.shape_505,p:{x:435}},{t:this.shape_506,p:{x:447}},{t:this.shape_501,p:{x:459}},{t:this.shape_502,p:{x:471}},{t:this.shape_503,p:{x:483}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_519,p:{x:279}},{t:this.shape_517,p:{x:291}},{t:this.shape_518,p:{x:303}},{t:this.shape_516,p:{x:315}},{t:this.shape_514,p:{x:327}},{t:this.shape_515,p:{x:339}},{t:this.shape_513,p:{x:351}},{t:this.shape_511,p:{x:363}},{t:this.shape_512,p:{x:375}},{t:this.shape_510,p:{x:387}},{t:this.shape_508,p:{x:399}},{t:this.shape_509,p:{x:411}},{t:this.shape_507,p:{x:423}},{t:this.shape_505,p:{x:435}},{t:this.shape_506,p:{x:447}},{t:this.shape_504,p:{x:459}},{t:this.shape_502,p:{x:471}},{t:this.shape_503,p:{x:483}},{t:this.shape_501,p:{x:495}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_519,p:{x:279}},{t:this.shape_520,p:{x:291}},{t:this.shape_518,p:{x:303}},{t:this.shape_516,p:{x:315}},{t:this.shape_517,p:{x:327}},{t:this.shape_515,p:{x:339}},{t:this.shape_513,p:{x:351}},{t:this.shape_514,p:{x:363}},{t:this.shape_512,p:{x:375}},{t:this.shape_510,p:{x:387}},{t:this.shape_511,p:{x:399}},{t:this.shape_509,p:{x:411}},{t:this.shape_507,p:{x:423}},{t:this.shape_508,p:{x:435}},{t:this.shape_506,p:{x:447}},{t:this.shape_504,p:{x:459}},{t:this.shape_505,p:{x:471}},{t:this.shape_503,p:{x:483}},{t:this.shape_501,p:{x:495}},{t:this.shape_502,p:{x:507}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_519,p:{x:279}},{t:this.shape_520,p:{x:291}},{t:this.shape_521,p:{x:303}},{t:this.shape_516,p:{x:315}},{t:this.shape_517,p:{x:327}},{t:this.shape_518,p:{x:339}},{t:this.shape_513,p:{x:351}},{t:this.shape_514,p:{x:363}},{t:this.shape_515,p:{x:375}},{t:this.shape_510,p:{x:387}},{t:this.shape_511,p:{x:399}},{t:this.shape_512,p:{x:411}},{t:this.shape_507,p:{x:423}},{t:this.shape_508,p:{x:435}},{t:this.shape_509,p:{x:447}},{t:this.shape_504,p:{x:459}},{t:this.shape_505,p:{x:471}},{t:this.shape_506,p:{x:483}},{t:this.shape_501,p:{x:495}},{t:this.shape_502,p:{x:507}},{t:this.shape_503,p:{x:519}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_522,p:{x:279}},{t:this.shape_520,p:{x:291}},{t:this.shape_521,p:{x:303}},{t:this.shape_519,p:{x:315}},{t:this.shape_517,p:{x:327}},{t:this.shape_518,p:{x:339}},{t:this.shape_516,p:{x:351}},{t:this.shape_514,p:{x:363}},{t:this.shape_515,p:{x:375}},{t:this.shape_513,p:{x:387}},{t:this.shape_511,p:{x:399}},{t:this.shape_512,p:{x:411}},{t:this.shape_510,p:{x:423}},{t:this.shape_508,p:{x:435}},{t:this.shape_509,p:{x:447}},{t:this.shape_507,p:{x:459}},{t:this.shape_505,p:{x:471}},{t:this.shape_506,p:{x:483}},{t:this.shape_504,p:{x:495}},{t:this.shape_502,p:{x:507}},{t:this.shape_503,p:{x:519}},{t:this.shape_501,p:{x:531}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_522,p:{x:279}},{t:this.shape_523,p:{x:291}},{t:this.shape_521,p:{x:303}},{t:this.shape_519,p:{x:315}},{t:this.shape_520,p:{x:327}},{t:this.shape_518,p:{x:339}},{t:this.shape_516,p:{x:351}},{t:this.shape_517,p:{x:363}},{t:this.shape_515,p:{x:375}},{t:this.shape_513,p:{x:387}},{t:this.shape_514,p:{x:399}},{t:this.shape_512,p:{x:411}},{t:this.shape_510,p:{x:423}},{t:this.shape_511,p:{x:435}},{t:this.shape_509,p:{x:447}},{t:this.shape_507,p:{x:459}},{t:this.shape_508,p:{x:471}},{t:this.shape_506,p:{x:483}},{t:this.shape_504,p:{x:495}},{t:this.shape_505,p:{x:507}},{t:this.shape_503,p:{x:519}},{t:this.shape_501,p:{x:531}},{t:this.shape_502,p:{x:543}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_522,p:{x:279}},{t:this.shape_523,p:{x:291}},{t:this.shape_524,p:{x:303}},{t:this.shape_519,p:{x:315}},{t:this.shape_520,p:{x:327}},{t:this.shape_521,p:{x:339}},{t:this.shape_516,p:{x:351}},{t:this.shape_517,p:{x:363}},{t:this.shape_518,p:{x:375}},{t:this.shape_513,p:{x:387}},{t:this.shape_514,p:{x:399}},{t:this.shape_515,p:{x:411}},{t:this.shape_510,p:{x:423}},{t:this.shape_511,p:{x:435}},{t:this.shape_512,p:{x:447}},{t:this.shape_507,p:{x:459}},{t:this.shape_508,p:{x:471}},{t:this.shape_509,p:{x:483}},{t:this.shape_504,p:{x:495}},{t:this.shape_505,p:{x:507}},{t:this.shape_506,p:{x:519}},{t:this.shape_501,p:{x:531}},{t:this.shape_502,p:{x:543}},{t:this.shape_503,p:{x:555}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_525,p:{x:279}},{t:this.shape_523,p:{x:291}},{t:this.shape_524,p:{x:303}},{t:this.shape_522,p:{x:315}},{t:this.shape_520,p:{x:327}},{t:this.shape_521,p:{x:339}},{t:this.shape_519,p:{x:351}},{t:this.shape_517,p:{x:363}},{t:this.shape_518,p:{x:375}},{t:this.shape_516,p:{x:387}},{t:this.shape_514,p:{x:399}},{t:this.shape_515,p:{x:411}},{t:this.shape_513,p:{x:423}},{t:this.shape_511,p:{x:435}},{t:this.shape_512,p:{x:447}},{t:this.shape_510,p:{x:459}},{t:this.shape_508,p:{x:471}},{t:this.shape_509,p:{x:483}},{t:this.shape_507,p:{x:495}},{t:this.shape_505,p:{x:507}},{t:this.shape_506,p:{x:519}},{t:this.shape_504,p:{x:531}},{t:this.shape_502,p:{x:543}},{t:this.shape_503,p:{x:555}},{t:this.shape_501,p:{x:567}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_525,p:{x:279}},{t:this.shape_526,p:{x:291}},{t:this.shape_524,p:{x:303}},{t:this.shape_522,p:{x:315}},{t:this.shape_523,p:{x:327}},{t:this.shape_521,p:{x:339}},{t:this.shape_519,p:{x:351}},{t:this.shape_520,p:{x:363}},{t:this.shape_518,p:{x:375}},{t:this.shape_516,p:{x:387}},{t:this.shape_517,p:{x:399}},{t:this.shape_515,p:{x:411}},{t:this.shape_513,p:{x:423}},{t:this.shape_514,p:{x:435}},{t:this.shape_512,p:{x:447}},{t:this.shape_510,p:{x:459}},{t:this.shape_511,p:{x:471}},{t:this.shape_509,p:{x:483}},{t:this.shape_507,p:{x:495}},{t:this.shape_508,p:{x:507}},{t:this.shape_506,p:{x:519}},{t:this.shape_504,p:{x:531}},{t:this.shape_505,p:{x:543}},{t:this.shape_503,p:{x:555}},{t:this.shape_501,p:{x:567}},{t:this.shape_502,p:{x:579}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_525,p:{x:279}},{t:this.shape_526,p:{x:291}},{t:this.shape_527,p:{x:303}},{t:this.shape_522,p:{x:315}},{t:this.shape_523,p:{x:327}},{t:this.shape_524,p:{x:339}},{t:this.shape_519,p:{x:351}},{t:this.shape_520,p:{x:363}},{t:this.shape_521,p:{x:375}},{t:this.shape_516,p:{x:387}},{t:this.shape_517,p:{x:399}},{t:this.shape_518,p:{x:411}},{t:this.shape_513,p:{x:423}},{t:this.shape_514,p:{x:435}},{t:this.shape_515,p:{x:447}},{t:this.shape_510,p:{x:459}},{t:this.shape_511,p:{x:471}},{t:this.shape_512,p:{x:483}},{t:this.shape_507,p:{x:495}},{t:this.shape_508,p:{x:507}},{t:this.shape_509,p:{x:519}},{t:this.shape_504,p:{x:531}},{t:this.shape_505,p:{x:543}},{t:this.shape_506,p:{x:555}},{t:this.shape_501,p:{x:567}},{t:this.shape_502,p:{x:579}},{t:this.shape_503,p:{x:591}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_528,p:{x:279}},{t:this.shape_526,p:{x:291}},{t:this.shape_527,p:{x:303}},{t:this.shape_525,p:{x:315}},{t:this.shape_523,p:{x:327}},{t:this.shape_524,p:{x:339}},{t:this.shape_522,p:{x:351}},{t:this.shape_520,p:{x:363}},{t:this.shape_521,p:{x:375}},{t:this.shape_519,p:{x:387}},{t:this.shape_517,p:{x:399}},{t:this.shape_518,p:{x:411}},{t:this.shape_516,p:{x:423}},{t:this.shape_514,p:{x:435}},{t:this.shape_515,p:{x:447}},{t:this.shape_513,p:{x:459}},{t:this.shape_511,p:{x:471}},{t:this.shape_512,p:{x:483}},{t:this.shape_510,p:{x:495}},{t:this.shape_508,p:{x:507}},{t:this.shape_509,p:{x:519}},{t:this.shape_507,p:{x:531}},{t:this.shape_505,p:{x:543}},{t:this.shape_506,p:{x:555}},{t:this.shape_504,p:{x:567}},{t:this.shape_502,p:{x:579}},{t:this.shape_503,p:{x:591}},{t:this.shape_501,p:{x:603}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_528,p:{x:279}},{t:this.shape_529,p:{x:291}},{t:this.shape_527,p:{x:303}},{t:this.shape_525,p:{x:315}},{t:this.shape_526,p:{x:327}},{t:this.shape_524,p:{x:339}},{t:this.shape_522,p:{x:351}},{t:this.shape_523,p:{x:363}},{t:this.shape_521,p:{x:375}},{t:this.shape_519,p:{x:387}},{t:this.shape_520,p:{x:399}},{t:this.shape_518,p:{x:411}},{t:this.shape_516,p:{x:423}},{t:this.shape_517,p:{x:435}},{t:this.shape_515,p:{x:447}},{t:this.shape_513,p:{x:459}},{t:this.shape_514,p:{x:471}},{t:this.shape_512,p:{x:483}},{t:this.shape_510,p:{x:495}},{t:this.shape_511,p:{x:507}},{t:this.shape_509,p:{x:519}},{t:this.shape_507,p:{x:531}},{t:this.shape_508,p:{x:543}},{t:this.shape_506,p:{x:555}},{t:this.shape_504,p:{x:567}},{t:this.shape_505,p:{x:579}},{t:this.shape_503,p:{x:591}},{t:this.shape_501,p:{x:603}},{t:this.shape_502,p:{x:615}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_528,p:{x:279}},{t:this.shape_529,p:{x:291}},{t:this.shape_530,p:{x:303}},{t:this.shape_525,p:{x:315}},{t:this.shape_526,p:{x:327}},{t:this.shape_527,p:{x:339}},{t:this.shape_522,p:{x:351}},{t:this.shape_523,p:{x:363}},{t:this.shape_524,p:{x:375}},{t:this.shape_519,p:{x:387}},{t:this.shape_520,p:{x:399}},{t:this.shape_521,p:{x:411}},{t:this.shape_516,p:{x:423}},{t:this.shape_517,p:{x:435}},{t:this.shape_518,p:{x:447}},{t:this.shape_513,p:{x:459}},{t:this.shape_514,p:{x:471}},{t:this.shape_515,p:{x:483}},{t:this.shape_510,p:{x:495}},{t:this.shape_511,p:{x:507}},{t:this.shape_512,p:{x:519}},{t:this.shape_507,p:{x:531}},{t:this.shape_508,p:{x:543}},{t:this.shape_509,p:{x:555}},{t:this.shape_504,p:{x:567}},{t:this.shape_505,p:{x:579}},{t:this.shape_506,p:{x:591}},{t:this.shape_501,p:{x:603}},{t:this.shape_502,p:{x:615}},{t:this.shape_503,p:{x:627}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_531,p:{x:279}},{t:this.shape_529,p:{x:291}},{t:this.shape_530,p:{x:303}},{t:this.shape_528,p:{x:315}},{t:this.shape_526,p:{x:327}},{t:this.shape_527,p:{x:339}},{t:this.shape_525,p:{x:351}},{t:this.shape_523,p:{x:363}},{t:this.shape_524,p:{x:375}},{t:this.shape_522,p:{x:387}},{t:this.shape_520,p:{x:399}},{t:this.shape_521,p:{x:411}},{t:this.shape_519,p:{x:423}},{t:this.shape_517,p:{x:435}},{t:this.shape_518,p:{x:447}},{t:this.shape_516,p:{x:459}},{t:this.shape_514,p:{x:471}},{t:this.shape_515,p:{x:483}},{t:this.shape_513,p:{x:495}},{t:this.shape_511,p:{x:507}},{t:this.shape_512,p:{x:519}},{t:this.shape_510,p:{x:531}},{t:this.shape_508,p:{x:543}},{t:this.shape_509,p:{x:555}},{t:this.shape_507,p:{x:567}},{t:this.shape_505,p:{x:579}},{t:this.shape_506,p:{x:591}},{t:this.shape_504,p:{x:603}},{t:this.shape_502,p:{x:615}},{t:this.shape_503,p:{x:627}},{t:this.shape_501,p:{x:639}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_531,p:{x:279}},{t:this.shape_532,p:{x:291}},{t:this.shape_530,p:{x:303}},{t:this.shape_528,p:{x:315}},{t:this.shape_529,p:{x:327}},{t:this.shape_527,p:{x:339}},{t:this.shape_525,p:{x:351}},{t:this.shape_526,p:{x:363}},{t:this.shape_524,p:{x:375}},{t:this.shape_522,p:{x:387}},{t:this.shape_523,p:{x:399}},{t:this.shape_521,p:{x:411}},{t:this.shape_519,p:{x:423}},{t:this.shape_520,p:{x:435}},{t:this.shape_518,p:{x:447}},{t:this.shape_516,p:{x:459}},{t:this.shape_517,p:{x:471}},{t:this.shape_515,p:{x:483}},{t:this.shape_513,p:{x:495}},{t:this.shape_514,p:{x:507}},{t:this.shape_512,p:{x:519}},{t:this.shape_510,p:{x:531}},{t:this.shape_511,p:{x:543}},{t:this.shape_509,p:{x:555}},{t:this.shape_507,p:{x:567}},{t:this.shape_508,p:{x:579}},{t:this.shape_506,p:{x:591}},{t:this.shape_504,p:{x:603}},{t:this.shape_505,p:{x:615}},{t:this.shape_503,p:{x:627}},{t:this.shape_501,p:{x:639}},{t:this.shape_502,p:{x:651}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_531,p:{x:279}},{t:this.shape_532,p:{x:291}},{t:this.shape_533},{t:this.shape_528,p:{x:315}},{t:this.shape_529,p:{x:327}},{t:this.shape_530,p:{x:339}},{t:this.shape_525,p:{x:351}},{t:this.shape_526,p:{x:363}},{t:this.shape_527,p:{x:375}},{t:this.shape_522,p:{x:387}},{t:this.shape_523,p:{x:399}},{t:this.shape_524,p:{x:411}},{t:this.shape_519,p:{x:423}},{t:this.shape_520,p:{x:435}},{t:this.shape_521,p:{x:447}},{t:this.shape_516,p:{x:459}},{t:this.shape_517,p:{x:471}},{t:this.shape_518,p:{x:483}},{t:this.shape_513,p:{x:495}},{t:this.shape_514,p:{x:507}},{t:this.shape_515,p:{x:519}},{t:this.shape_510,p:{x:531}},{t:this.shape_511,p:{x:543}},{t:this.shape_512,p:{x:555}},{t:this.shape_507,p:{x:567}},{t:this.shape_508,p:{x:579}},{t:this.shape_509,p:{x:591}},{t:this.shape_504,p:{x:603}},{t:this.shape_505,p:{x:615}},{t:this.shape_506,p:{x:627}},{t:this.shape_501,p:{x:639}},{t:this.shape_502,p:{x:651}},{t:this.shape_503,p:{x:663}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_534,p:{x:279}},{t:this.shape_532,p:{x:291}},{t:this.shape_533},{t:this.shape_531,p:{x:315}},{t:this.shape_529,p:{x:327}},{t:this.shape_530,p:{x:339}},{t:this.shape_528,p:{x:351}},{t:this.shape_526,p:{x:363}},{t:this.shape_527,p:{x:375}},{t:this.shape_525,p:{x:387}},{t:this.shape_523,p:{x:399}},{t:this.shape_524,p:{x:411}},{t:this.shape_522,p:{x:423}},{t:this.shape_520,p:{x:435}},{t:this.shape_521,p:{x:447}},{t:this.shape_519,p:{x:459}},{t:this.shape_517,p:{x:471}},{t:this.shape_518,p:{x:483}},{t:this.shape_516,p:{x:495}},{t:this.shape_514,p:{x:507}},{t:this.shape_515,p:{x:519}},{t:this.shape_513,p:{x:531}},{t:this.shape_511,p:{x:543}},{t:this.shape_512,p:{x:555}},{t:this.shape_510,p:{x:567}},{t:this.shape_508,p:{x:579}},{t:this.shape_509,p:{x:591}},{t:this.shape_507,p:{x:603}},{t:this.shape_505,p:{x:615}},{t:this.shape_506,p:{x:627}},{t:this.shape_504,p:{x:639}},{t:this.shape_502,p:{x:651}},{t:this.shape_503,p:{x:663}},{t:this.shape_501,p:{x:675}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_534,p:{x:279}},{t:this.shape_535,p:{x:291}},{t:this.shape_533},{t:this.shape_531,p:{x:315}},{t:this.shape_532,p:{x:327}},{t:this.shape_530,p:{x:339}},{t:this.shape_528,p:{x:351}},{t:this.shape_529,p:{x:363}},{t:this.shape_527,p:{x:375}},{t:this.shape_525,p:{x:387}},{t:this.shape_526,p:{x:399}},{t:this.shape_524,p:{x:411}},{t:this.shape_522,p:{x:423}},{t:this.shape_523,p:{x:435}},{t:this.shape_521,p:{x:447}},{t:this.shape_519,p:{x:459}},{t:this.shape_520,p:{x:471}},{t:this.shape_518,p:{x:483}},{t:this.shape_516,p:{x:495}},{t:this.shape_517,p:{x:507}},{t:this.shape_515,p:{x:519}},{t:this.shape_513,p:{x:531}},{t:this.shape_514,p:{x:543}},{t:this.shape_512,p:{x:555}},{t:this.shape_510,p:{x:567}},{t:this.shape_511,p:{x:579}},{t:this.shape_509,p:{x:591}},{t:this.shape_507,p:{x:603}},{t:this.shape_508,p:{x:615}},{t:this.shape_506,p:{x:627}},{t:this.shape_504,p:{x:639}},{t:this.shape_505,p:{x:651}},{t:this.shape_503,p:{x:663}},{t:this.shape_501,p:{x:675}},{t:this.shape_502,p:{x:687}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_534,p:{x:279}},{t:this.shape_535,p:{x:291}},{t:this.shape_533},{t:this.shape_531,p:{x:315}},{t:this.shape_532,p:{x:327}},{t:this.shape_530,p:{x:339}},{t:this.shape_528,p:{x:351}},{t:this.shape_529,p:{x:363}},{t:this.shape_527,p:{x:375}},{t:this.shape_525,p:{x:387}},{t:this.shape_526,p:{x:399}},{t:this.shape_524,p:{x:411}},{t:this.shape_522,p:{x:423}},{t:this.shape_523,p:{x:435}},{t:this.shape_521,p:{x:447}},{t:this.shape_519,p:{x:459}},{t:this.shape_520,p:{x:471}},{t:this.shape_518,p:{x:483}},{t:this.shape_516,p:{x:495}},{t:this.shape_517,p:{x:507}},{t:this.shape_515,p:{x:519}},{t:this.shape_513,p:{x:531}},{t:this.shape_514,p:{x:543}},{t:this.shape_512,p:{x:555}},{t:this.shape_510,p:{x:567}},{t:this.shape_511,p:{x:579}},{t:this.shape_509,p:{x:591}},{t:this.shape_507,p:{x:603}},{t:this.shape_508,p:{x:615}},{t:this.shape_506,p:{x:627}},{t:this.shape_504,p:{x:639}},{t:this.shape_505,p:{x:651}},{t:this.shape_503,p:{x:663}},{t:this.shape_501,p:{x:675}},{t:this.shape_502,p:{x:687}},{t:this.shape_536,p:{x:699}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_537,p:{x:279}},{t:this.shape_535,p:{x:291}},{t:this.shape_533},{t:this.shape_534,p:{x:315}},{t:this.shape_532,p:{x:327}},{t:this.shape_530,p:{x:339}},{t:this.shape_531,p:{x:351}},{t:this.shape_529,p:{x:363}},{t:this.shape_527,p:{x:375}},{t:this.shape_528,p:{x:387}},{t:this.shape_526,p:{x:399}},{t:this.shape_524,p:{x:411}},{t:this.shape_525,p:{x:423}},{t:this.shape_523,p:{x:435}},{t:this.shape_521,p:{x:447}},{t:this.shape_522,p:{x:459}},{t:this.shape_520,p:{x:471}},{t:this.shape_518,p:{x:483}},{t:this.shape_519,p:{x:495}},{t:this.shape_517,p:{x:507}},{t:this.shape_515,p:{x:519}},{t:this.shape_516,p:{x:531}},{t:this.shape_514,p:{x:543}},{t:this.shape_512,p:{x:555}},{t:this.shape_513,p:{x:567}},{t:this.shape_511,p:{x:579}},{t:this.shape_509,p:{x:591}},{t:this.shape_510,p:{x:603}},{t:this.shape_508,p:{x:615}},{t:this.shape_506,p:{x:627}},{t:this.shape_507,p:{x:639}},{t:this.shape_505,p:{x:651}},{t:this.shape_503,p:{x:663}},{t:this.shape_504,p:{x:675}},{t:this.shape_502,p:{x:687}},{t:this.shape_536,p:{x:699}},{t:this.shape_501,p:{x:711}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_537,p:{x:279}},{t:this.shape_538,p:{x:291}},{t:this.shape_533},{t:this.shape_534,p:{x:315}},{t:this.shape_535,p:{x:327}},{t:this.shape_530,p:{x:339}},{t:this.shape_531,p:{x:351}},{t:this.shape_532,p:{x:363}},{t:this.shape_527,p:{x:375}},{t:this.shape_528,p:{x:387}},{t:this.shape_529,p:{x:399}},{t:this.shape_524,p:{x:411}},{t:this.shape_525,p:{x:423}},{t:this.shape_526,p:{x:435}},{t:this.shape_521,p:{x:447}},{t:this.shape_522,p:{x:459}},{t:this.shape_523,p:{x:471}},{t:this.shape_518,p:{x:483}},{t:this.shape_519,p:{x:495}},{t:this.shape_520,p:{x:507}},{t:this.shape_515,p:{x:519}},{t:this.shape_516,p:{x:531}},{t:this.shape_517,p:{x:543}},{t:this.shape_512,p:{x:555}},{t:this.shape_513,p:{x:567}},{t:this.shape_514,p:{x:579}},{t:this.shape_509,p:{x:591}},{t:this.shape_510,p:{x:603}},{t:this.shape_511,p:{x:615}},{t:this.shape_506,p:{x:627}},{t:this.shape_507,p:{x:639}},{t:this.shape_508,p:{x:651}},{t:this.shape_503,p:{x:663}},{t:this.shape_504,p:{x:675}},{t:this.shape_505,p:{x:687}},{t:this.shape_536,p:{x:699}},{t:this.shape_501,p:{x:711}},{t:this.shape_502,p:{x:723}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_537,p:{x:279}},{t:this.shape_538,p:{x:291}},{t:this.shape_533},{t:this.shape_534,p:{x:315}},{t:this.shape_535,p:{x:327}},{t:this.shape_530,p:{x:339}},{t:this.shape_531,p:{x:351}},{t:this.shape_532,p:{x:363}},{t:this.shape_527,p:{x:375}},{t:this.shape_528,p:{x:387}},{t:this.shape_529,p:{x:399}},{t:this.shape_524,p:{x:411}},{t:this.shape_525,p:{x:423}},{t:this.shape_526,p:{x:435}},{t:this.shape_521,p:{x:447}},{t:this.shape_522,p:{x:459}},{t:this.shape_523,p:{x:471}},{t:this.shape_518,p:{x:483}},{t:this.shape_519,p:{x:495}},{t:this.shape_520,p:{x:507}},{t:this.shape_515,p:{x:519}},{t:this.shape_516,p:{x:531}},{t:this.shape_517,p:{x:543}},{t:this.shape_512,p:{x:555}},{t:this.shape_513,p:{x:567}},{t:this.shape_514,p:{x:579}},{t:this.shape_509,p:{x:591}},{t:this.shape_510,p:{x:603}},{t:this.shape_511,p:{x:615}},{t:this.shape_506,p:{x:627}},{t:this.shape_507,p:{x:639}},{t:this.shape_508,p:{x:651}},{t:this.shape_503,p:{x:663}},{t:this.shape_504,p:{x:675}},{t:this.shape_505,p:{x:687}},{t:this.shape_539,p:{x:699}},{t:this.shape_501,p:{x:711}},{t:this.shape_502,p:{x:723}},{t:this.shape_536,p:{x:735}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_540},{t:this.shape_538,p:{x:291}},{t:this.shape_533},{t:this.shape_537,p:{x:315}},{t:this.shape_535,p:{x:327}},{t:this.shape_530,p:{x:339}},{t:this.shape_534,p:{x:351}},{t:this.shape_532,p:{x:363}},{t:this.shape_527,p:{x:375}},{t:this.shape_531,p:{x:387}},{t:this.shape_529,p:{x:399}},{t:this.shape_524,p:{x:411}},{t:this.shape_528,p:{x:423}},{t:this.shape_526,p:{x:435}},{t:this.shape_521,p:{x:447}},{t:this.shape_525,p:{x:459}},{t:this.shape_523,p:{x:471}},{t:this.shape_518,p:{x:483}},{t:this.shape_522,p:{x:495}},{t:this.shape_520,p:{x:507}},{t:this.shape_515,p:{x:519}},{t:this.shape_519,p:{x:531}},{t:this.shape_517,p:{x:543}},{t:this.shape_512,p:{x:555}},{t:this.shape_516,p:{x:567}},{t:this.shape_514,p:{x:579}},{t:this.shape_509,p:{x:591}},{t:this.shape_513,p:{x:603}},{t:this.shape_511,p:{x:615}},{t:this.shape_506,p:{x:627}},{t:this.shape_510,p:{x:639}},{t:this.shape_508,p:{x:651}},{t:this.shape_503,p:{x:663}},{t:this.shape_507,p:{x:675}},{t:this.shape_505,p:{x:687}},{t:this.shape_539,p:{x:699}},{t:this.shape_504,p:{x:711}},{t:this.shape_502,p:{x:723}},{t:this.shape_536,p:{x:735}},{t:this.shape_501,p:{x:747}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_540},{t:this.shape_541},{t:this.shape_533},{t:this.shape_537,p:{x:315}},{t:this.shape_538,p:{x:327}},{t:this.shape_530,p:{x:339}},{t:this.shape_534,p:{x:351}},{t:this.shape_535,p:{x:363}},{t:this.shape_527,p:{x:375}},{t:this.shape_531,p:{x:387}},{t:this.shape_532,p:{x:399}},{t:this.shape_524,p:{x:411}},{t:this.shape_528,p:{x:423}},{t:this.shape_529,p:{x:435}},{t:this.shape_521,p:{x:447}},{t:this.shape_525,p:{x:459}},{t:this.shape_526,p:{x:471}},{t:this.shape_518,p:{x:483}},{t:this.shape_522,p:{x:495}},{t:this.shape_523,p:{x:507}},{t:this.shape_515,p:{x:519}},{t:this.shape_519,p:{x:531}},{t:this.shape_520,p:{x:543}},{t:this.shape_512,p:{x:555}},{t:this.shape_516,p:{x:567}},{t:this.shape_517,p:{x:579}},{t:this.shape_509,p:{x:591}},{t:this.shape_513,p:{x:603}},{t:this.shape_514,p:{x:615}},{t:this.shape_506,p:{x:627}},{t:this.shape_510,p:{x:639}},{t:this.shape_511,p:{x:651}},{t:this.shape_503,p:{x:663}},{t:this.shape_507,p:{x:675}},{t:this.shape_508,p:{x:687}},{t:this.shape_539,p:{x:699}},{t:this.shape_504,p:{x:711}},{t:this.shape_505,p:{x:723}},{t:this.shape_536,p:{x:735}},{t:this.shape_501,p:{x:747}},{t:this.shape_502,p:{x:759}}]},2).to({state:[{t:this.shape_500},{t:this.shape_419,p:{x:39.2}},{t:this.shape_428,p:{x:50.7}},{t:this.shape_467,p:{x:63.2}},{t:this.shape_425,p:{x:75.1}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_422,p:{x:123.3}},{t:this.shape_423,p:{x:135}},{t:this.shape_473,p:{x:147}},{t:this.shape_472,p:{x:159}},{t:this.shape_497},{t:this.shape_446,p:{x:183.3}},{t:this.shape_489,p:{x:194.1}},{t:this.shape_460},{t:this.shape_483},{t:this.shape_418,p:{x:231.1}},{t:this.shape_449,p:{x:242.1}},{t:this.shape_457,p:{x:255.1}},{t:this.shape_454,p:{x:267}},{t:this.shape_540},{t:this.shape_541},{t:this.shape_533},{t:this.shape_537,p:{x:315}},{t:this.shape_538,p:{x:327}},{t:this.shape_530,p:{x:339}},{t:this.shape_534,p:{x:351}},{t:this.shape_535,p:{x:363}},{t:this.shape_527,p:{x:375}},{t:this.shape_531,p:{x:387}},{t:this.shape_532,p:{x:399}},{t:this.shape_524,p:{x:411}},{t:this.shape_528,p:{x:423}},{t:this.shape_529,p:{x:435}},{t:this.shape_521,p:{x:447}},{t:this.shape_525,p:{x:459}},{t:this.shape_526,p:{x:471}},{t:this.shape_518,p:{x:483}},{t:this.shape_522,p:{x:495}},{t:this.shape_523,p:{x:507}},{t:this.shape_515,p:{x:519}},{t:this.shape_519,p:{x:531}},{t:this.shape_520,p:{x:543}},{t:this.shape_512,p:{x:555}},{t:this.shape_516,p:{x:567}},{t:this.shape_517,p:{x:579}},{t:this.shape_509,p:{x:591}},{t:this.shape_513,p:{x:603}},{t:this.shape_514,p:{x:615}},{t:this.shape_506,p:{x:627}},{t:this.shape_510,p:{x:639}},{t:this.shape_511,p:{x:651}},{t:this.shape_503,p:{x:663}},{t:this.shape_507,p:{x:675}},{t:this.shape_508,p:{x:687}},{t:this.shape_542},{t:this.shape_504,p:{x:711}},{t:this.shape_505,p:{x:723}},{t:this.shape_539,p:{x:735}},{t:this.shape_501,p:{x:747}},{t:this.shape_502,p:{x:759}},{t:this.shape_536,p:{x:771}}]},2).to({state:[]},37).wait(8));

	// Central text
	this.instance_22 = new lib.Tween5("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(399.2,197.8,0.06,0.06,0,180,0);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(629).to({_off:false},0).to({scaleX:1,scaleY:1,skewX:0},6).wait(14).to({startPosition:0},0).wait(10).to({startPosition:0},0).to({y:75.8},20).to({x:424.2},4).to({_off:true},653).wait(8));

	// small text block
	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AAAApQgFgBgDgEQgDgEgBgEIgBgLIAAgdIgSAAIAAgKIATAAIABgVIALAAIAAAVIAdAAIAAAKIgdAAIAAAdIAAAGQABAEABACQACACADABIAIABQAGAAAIgDIADAKQgMAEgJAAQgHAAgEgDg");
	this.shape_543.setTransform(452.4,121.8);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_544.setTransform(444.5,122.7);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgGIgCgHIgBgHQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEAEACAFQACAGAAAHIgBAGIgwAAQAAAEACAFQACAEADACQADACAEACIAIAAQAGAAAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgCgDAAIgHgBIgGABQgDABgDACIgFAGIgCAHIAlAAIAAAAg");
	this.shape_545.setTransform(436.5,122.8);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_546.setTransform(428.6,122.7);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AgeAuIAAhaIALAAIABAIIABAAQAEgFAGgCQAGgCAFgBQAGAAAFACQAFADADAEQAEAEACAHQACAGAAAIQgBAHgCAGQgDAGgDAGQgEAEgGACQgFADgGAAQgDAAgFgDQgGgCgDgDIgBAAIABALIAAAVgAgHggQgFACgEAEIAAAeQADADAFACIAHABQADAAAEgBIAGgEQACgDABgEQACgFAAgFIgBgJIgDgIIgGgEQgDgCgEAAQgDAAgEADg");
	this.shape_547.setTransform(420.8,124);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgFgEQgFgFgCgGIgCgHIgBgHQAAgFADgIQACgHAFgEQAFgEAGgDQAGgCAFAAQAGAAAGACQAGADAEAEQAFAEACAHQADAIABAFIgCAHIgCAHQgCAGgFAFQgEAEgGADQgGACgGAAQgFAAgGgCgAgHgVQgEACgCADQgCADgBAEQgCAFAAAEQAAAFACAEQABAFACADQACADAEACQAEACADgBQAEABAEgCQADgCACgDQADgDACgFQABgEAAgFQAAgEgBgFIgFgHQgCgDgDgCQgEgBgEAAQgDAAgEABg");
	this.shape_548.setTransform(412.6,122.8);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AADAvQgDgCgDgDIgEgIQgBgFAAgFIAAg8IgWAAIAAgLIAiAAIAABIIABAFIACAFQADACAGAAQAFAAAHgCIADAKQgLADgHAAQgFAAgFgBg");
	this.shape_549.setTransform(404.7,121.4);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgGIgCgHIgBgHQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEAEACAFQACAGAAAHIgBAGIgwAAQAAAEACAFQACAEADACQADACAEACIAIAAQAGAAAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgCgDAAIgHgBIgGABQgDABgDACIgFAGIgCAHIAlAAIAAAAg");
	this.shape_550.setTransform(396.7,122.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AgGAhIgbhAIAOAAIANAiIAGATIABAAIAHgTIANgiIANAAIgaBAg");
	this.shape_551.setTransform(388.7,122.8);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgGIgCgHIgBgHQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEAEACAFQACAGAAAHIgBAGIgwAAQAAAEACAFQACAEADACQADACAEACIAIAAQAGAAAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgCgDAAIgHgBIgGABQgDABgDACIgFAGIgCAHIAlAAIAAAAg");
	this.shape_552.setTransform(380.8,122.8);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFFFFF").s().p("AgeArIAAhWIAVAAIAJABIAIACIAHAEIAGAFIAFAFIACAIIADAIIABAKIgBAJIgDAJIgCAIIgFAGIgGAFIgHAEIgIACIgIAAgAgRAhIAIAAQAGAAAFgCQAFgDADgDQAEgFACgGQACgGAAgIQAAgHgCgGQgCgHgEgEQgDgEgFgCQgFgCgGAAIgIAAg");
	this.shape_553.setTransform(373.1,121.7);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("AgNAuQgFgDgEgEQgDgFgCgGQgCgGAAgIQAAgIACgGQACgGAFgEQAEgEAFgDQAFgCAGAAQAEAAAFACQAEACAEAEIABAAIgBgMIAAgYIANAAIAABeIgKAAIgCgJIgJAIQgGACgEAAQgHAAgFgCgAgEgHQgEACgCADQgDACgBAEQgCAFAAAFIABAKIAEAHIAFAFQAEABADAAQAJAAAHgJIAAgdQgEgEgEgCQgDgBgEAAQgDAAgDABg");
	this.shape_554.setTransform(356.7,121.4);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_555.setTransform(349.1,122.7);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFFFFF").s().p("AgbArIAAhWIA2AAIAAAMIgpAAIAAAYIAjAAIAAALIgjAAIAAAdIAqAAIAAAKg");
	this.shape_556.setTransform(341.3,121.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AgcAFIAAgJIA5AAIAAAJg");
	this.shape_557.setTransform(333.1,121.6);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("AAAApQgFgBgCgEQgDgEgCgEIgBgLIAAgdIgSAAIAAgKIASAAIACgVIALAAIAAAVIAdAAIAAAKIgdAAIAAAdIAAAGQAAAEACACQACACADABIAHABQAGAAAJgDIADAKQgMAEgJAAQgGAAgFgDg");
	this.shape_558.setTransform(325.2,121.8);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_559.setTransform(317.3,122.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AgMAgQgFgDgFgEQgEgFgDgGIgCgHIgBgHQABgFACgIQADgHAEgEQAFgEAFgDQAHgCAFAAQAHAAAFACQAGADAEAEQAFAEADAHQACAIAAAFIgBAHIgBAHQgDAGgFAFQgEAEgGADQgFACgHAAQgFAAgHgCgAgHgVQgDACgDADQgDADAAAEQgCAFAAAEQAAAFACAEQAAAFADADQADADADACQADACAEgBQAEABADgCQAEgCACgDQADgDACgFQABgEAAgFQAAgEgBgFIgFgHQgCgDgEgCQgDgBgEAAQgEAAgDABg");
	this.shape_560.setTransform(309.3,122.8);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_561.setTransform(301.8,122.7);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AgaArIAAhWIA1AAIAAAMIgoAAIAAAbIAiAAIAAAKIgiAAIAAAlg");
	this.shape_562.setTransform(293.8,121.7);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("AAAApQgFgCgCgDQgDgDgCgGIgBgLIAAgcIgSAAIAAgJIASgBIACgUIALAAIAAAUIAdAAIAAAKIgdAAIAAAcIAAAIQAAADACACQACACADABIAHABQAGAAAJgDIADAKQgMAEgJgBQgGAAgFgCg");
	this.shape_563.setTransform(444.5,141.2);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgEgDgGIgCgHIgBgIQAAgEADgKQADgFAFgFQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAEQACAEADADQADACAEABIAIACQAGAAAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgCgDgCIgHgBIgGABQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_564.setTransform(428.5,142.2);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AgdAvIAAhbIALAAIAAAIIABAAQAEgEAGgDQAGgCAFAAQAGAAAFACQAFACAEAFQADAEABAGQACAGABAHQAAAIgDAHQgCAFgEAFQgFAFgFACQgFADgGgBQgEAAgFgCQgFgBgEgFIAAAAIABANIAAAVgAgIghIgIAHIAAAeQADADAFACIAHABQADAAAEgBIAFgFQADgDACgDQABgEAAgHIgBgJIgDgGIgGgFQgCgCgFABQgDAAgFABg");
	this.shape_565.setTransform(412.8,143.4);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AgMAgQgFgCgFgFQgEgEgDgGIgCgHIgBgIQABgEACgKQADgFAEgFQAFgFAFgCQAHgCAFAAQAHAAAFACQAGACAEAFQAFAFADAFQACAKAAAEIgBAIIgBAHQgDAGgFAEQgEAFgGACQgFACgHAAQgFAAgHgCgAgHgUQgDABgDADQgDAEAAAEQgCAEAAAEQAAAFACAEQAAAFADADQADADADABQADACAEABQAEgBADgCQAEgBACgDQADgDACgFQABgEAAgFQAAgEgBgEIgFgIQgCgDgEgBQgDgCgEAAQgEAAgDACg");
	this.shape_566.setTransform(404.7,142.2);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFFFFF").s().p("AADAvQgDgCgDgDIgEgIQgBgFAAgFIAAg9IgWAAIAAgKIAiAAIAABHIABAHIACADQADADAGABQAFgBAHgDIADAKQgLAEgHAAQgFAAgFgBg");
	this.shape_567.setTransform(396.8,140.8);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgEgDgGIgCgHIgBgIQAAgEADgKQADgFAFgFQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAEQACAEADADQADACAEABIAIACQAGAAAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgCgDgCIgHgBIgGABQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_568.setTransform(388.8,142.2);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFFFFF").s().p("AgGAhIgbhBIAOAAIANAjIAGATIABAAIAHgTIANgjIANAAIgaBBg");
	this.shape_569.setTransform(380.8,142.2);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgEgDgGIgCgHIgBgIQAAgEADgKQADgFAFgFQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAEQACAEADADQADACAEABIAIACQAGAAAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgCgDgCIgHgBIgGABQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_570.setTransform(372.9,142.2);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("AgfAsIAAhWIAXAAIAIAAIAIACIAHAEIAGAEIAFAHIADAHIACAJIAAAJIAAAKIgCAJIgDAHIgFAGIgGAFIgGADIgIADIgIABgAgRAgIAIAAQAHAAAEgCQAFgBAEgFQADgEACgGQACgHAAgHQAAgHgCgHQgCgFgDgFQgEgEgFgCQgEgCgHAAIgIAAg");
	this.shape_571.setTransform(365.2,141.1);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("AgNAuQgFgCgEgFQgDgEgCgGQgCgHAAgIQAAgIACgGQACgGAFgEQAEgFAFgCQAFgCAGAAQAEAAAFACQAEACAEAEIABAAIgBgLIAAgZIANAAIAABeIgKAAIgCgIIgJAGQgGADgEAAQgHAAgFgCgAgEgGQgEABgCADQgDACgBAFQgCAEAAAFIABAKIAEAHIAFAEQAEACADAAQAJAAAHgIIAAgfQgEgDgEgBQgDgCgEAAQgDAAgDACg");
	this.shape_572.setTransform(348.8,140.8);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("AgbAsIAAhWIA2AAIAAAKIgoAAIAAAaIAiAAIAAAJIgiAAIAAAdIApAAIAAAMg");
	this.shape_573.setTransform(333.4,141.1);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("AARAvIgVgfIgOAOIAAARIgNAAIAAhdIANAAIAAA8IABAAIAfgfIAPAAIgaAZIAdAng");
	this.shape_574.setTransform(317.7,140.7);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFFFFF").s().p("AgIAgQgHgCgFgFQgFgEgCgGIgCgHIgBgIIABgHIACgHQADgFAFgFQAFgFAHgCQAGgCAGAAQAGAAAJACQAFADAEAEIgGAIQgEgDgEgBQgEgCgFAAQgFAAgEACQgDABgDADQgEAEgCAEQgBAEAAAEQAAAFABAEQACAFADADQADADAEABQAEACAFABQAFAAAGgDQAEgCAEgDIAGAIQgGAFgGACQgHADgHAAQgHAAgGgCg");
	this.shape_575.setTransform(309.4,142.2);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgDgBgDQgCgDgBgEQAAgGADgEQADgFAGgBIANgFQAIgCANgBIgCgGIgDgEIgEgDQgDgCgFAAQgEAAgHADIgKAFIgEgJQAGgEAGgCIAIgDIAIAAQAGAAAFACQAFABAEAEQADAEACAFQABAFAAAGIAAAnIgKAAIgBgJIAAAAIgMAHQgGADgGAAIgJgBgAABABIgJAEQgFABgBADQgCADABADQAAAEADACQAEACAFABQAFgBAEgCIALgGIAAgPIgQABg");
	this.shape_576.setTransform(301.3,142.2);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("AgeAsIAAhWIAaAAIAMABIAJADQAEADADAEQACAEAAAFIgBAHQgBADgCADIgFAEIgGACIAAABIAIACIAGAEIAEAGQACAEAAAEQAAAHgDAEQgCAFgFADQgEAEgGABQgGACgGAAgAgQAgIANAAIAIgBQAEAAADgCQADgCABgDQACgDAAgEQAAgDgCgDQgBgDgDgCIgHgCIgIgBIgNAAgAgQgGIALAAIAHgBQAEgBACgCQADgBABgDIABgGIgBgFIgEgEIgGgCIgHgBIgLAAg");
	this.shape_577.setTransform(293.6,141.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_578.setTransform(428.6,122.7);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_579.setTransform(349.1,122.7);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AgcAFIAAgJIA5AAIAAAJg");
	this.shape_580.setTransform(333.1,121.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_581.setTransform(317.3,122.7);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgGIgCgHIgBgHQAAgEADgJQADgGAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACAEQACADADADQADACAEACIAIAAQAGABAEgCQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDAAIgHgBIgGABQgDABgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_582.setTransform(404.7,161.6);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFFFFF").s().p("AgJAgQgGgDgFgEQgEgFgDgGIgCgHIgBgHIABgGIACgHQADgGAFgFQAFgEAGgDQAHgCAHAAQAFAAAJACQAFADAFAEIgHAJQgEgEgEgCQgEgBgFAAQgFAAgEABQgEACgDADQgDADgBAEQgCAFgBAEQABAFACAFQABAEADADQAEADADACQAEABAFAAQAGABAEgDQAFgCAEgEIAGAJQgFAFgIACQgGADgHAAQgGAAgIgCg");
	this.shape_583.setTransform(396.8,161.6);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgCgCgEQgBgDAAgFQgBgFADgFQADgDAFgDIAPgEQAHgCANgBIgBgFIgEgFIgEgDQgDgCgFABQgEgBgGADIgLAFIgFgJQAHgEAHgCIAHgCIAHgBQAHAAAGACQAFACADADQADAEACAFQABAFAAAHIAAAlIgKAAIgBgIIAAAAIgMAHQgGADgHAAIgIgBgAAAACIgJADQgDACgCACQgBACgBADQABAFADADQADABAHAAQADAAAGgBIAKgHIAAgPIgRACg");
	this.shape_584.setTransform(380.8,161.6);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFFFFF").s().p("AAHAwIAAg1IgcAAIAAgLIApAAIAABAgAAFgfQgCgDAAgEQAAgEACgDQADgCAEAAQAFAAACACQADADAAAEQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_585.setTransform(372.2,160);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgGIgCgHIgBgHQAAgEADgJQADgGAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACAEQACADADADQADACAEACIAIAAQAGABAEgCQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDAAIgHgBIgGABQgDABgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_586.setTransform(357,161.6);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("AgeAvIAAhbIALAAIABAIIABAAQAFgFAFgCQAGgCAFgBQAGAAAFACQAFADADAEQAEAFACAGQACAGAAAIQgBAHgCAHQgDAFgDAGQgEAEgGACQgFACgGABQgDAAgFgCQgGgDgDgDIgBAAIABALIAAAWgAgHggQgFACgEAEIAAAeQAEAEAEABIAHACQADAAAEgCIAGgEQACgDABgEQACgFAAgFIgBgJIgDgIIgGgEQgDgCgEAAQgDABgEACg");
	this.shape_587.setTransform(349.2,162.8);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("AASAgIgKgNIgIgMIAAAAIgIAMIgJANIgOAAIAYghIgWgeIAOAAIAJAMIAHAMIAAAAIAHgMIAJgMIAOAAIgXAfIAYAgg");
	this.shape_588.setTransform(341,161.6);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("AgbArIAAhWIA2AAIAAAMIgoAAIAAAYIAiAAIAAALIgiAAIAAAdIApAAIAAAKg");
	this.shape_589.setTransform(333.4,160.5);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_590.setTransform(317.7,161.5);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgGIgCgHIgBgHQAAgEADgJQADgGAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACAEQACADADADQADACAEACIAIAAQAGABAEgCQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDAAIgHgBIgGABQgDABgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_591.setTransform(309.3,161.6);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgDgHgEIAGgJQAGAFAGACQAHACAIAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgPgFIgLgDIgIgDIgEgFQgCgDAAgEQAAgEACgDQACgEADgDQAEgDAFAAQAFgCAGAAQAHAAAIACQAGACAGAFIgHAIQgEgEgGgBQgFgCgGAAQgGAAgEACQgDACAAAEQAAAEAFACQADACAJACIANAEQAFABADACIAFAFIABAHQAAAEgCAEIgGAHQgEACgFABQgGACgHAAIgIgBg");
	this.shape_592.setTransform(301.3,161.6);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("AgLAqQgGgCgEgEQgEgEgCgHQgCgGAAgJIAAg1IANAAIAAA1IABALIAEAHQACACADACIAGABIAHgBIAFgEQADgDABgEQABgFAAgGIAAg1IANAAIAAA1QAAAJgCAGQgCAHgFAEQgDAEgGACQgFACgHAAQgGAAgFgCg");
	this.shape_593.setTransform(293.4,160.5);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_594.setTransform(317.3,122.7);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_595.setTransform(301.8,122.7);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgCgHgFIAGgIQAGADAGACQAHADAIAAQAHAAAEgDQADgCAAgEQAAgDgDgDIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgCQAEgDAFgCQAFgBAGAAQAHAAAIADQAGACAGADIgHAIQgEgDgGgBQgFgCgGAAQgGAAgEADQgDACAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAHQAAAEgCADIgGAGQgEADgFACQgGABgHAAIgIAAg");
	this.shape_596.setTransform(547.7,181);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgFgDgFIgCgHIgBgIQAAgFADgJQADgGAFgEQAEgFAGgCQAGgCAGAAQAHAAAFACQAGACAEAEQAEAFACAFQACAGAAAHIgBAGIgwAAQAAAEACAEQACAEADADQADACAEACIAIABQAGAAAEgCQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgGQgCgCgDgBIgHgCIgGACQgDABgDACIgFAGIgCAHIAlAAIAAAAg");
	this.shape_597.setTransform(531.9,181);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("AAAApQgFgCgDgDQgDgDgBgFIgBgMIAAgcIgSAAIAAgKIATAAIABgUIALAAIAAAUIAdAAIAAAKIgdAAIAAAcIAAAHQABAEABACQACACADABIAIABQAGAAAIgDIADAKQgMAEgJgBQgHAAgEgCg");
	this.shape_598.setTransform(524,180);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgCgHgFIAGgIQAGADAGACQAHADAIAAQAHAAAEgDQADgCAAgEQAAgDgDgDIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgCQAEgDAFgCQAFgBAGAAQAHAAAIADQAGACAGADIgHAIQgEgDgGgBQgFgCgGAAQgGAAgEADQgDACAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAHQAAAEgCADIgGAGQgEADgFACQgGABgHAAIgIAAg");
	this.shape_599.setTransform(515.9,181);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("AgeAtIADgLIAFABIAGgBQACAAADgCQAEgDACgGIABgFIgdg/IANAAIAPAiIAGASIABAAIAHgSIAMgiIANAAIgcBEIgFAJQgBAFgEADQgDADgEABQgFACgFAAQgFAAgEgBg");
	this.shape_600.setTransform(508,182.3);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFFFFF").s().p("AgIAsIgJgDIgHgEIgHgFIAIgJQAFAFAGACQAHADAGABIAHgCIAGgCIADgEQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgBgFIgDgEIgLgFIgLgFIgHgDIgGgFQgDgDgBgDQgCgEAAgFQAAgFACgEQACgEAEgDQAEgEAGgBQAFgCAGAAQAFAAAKADQAHADAFAEIgHAJIgJgGQgGgCgGAAIgFABIgFACIgDAEIgBAFIABAFIADADIAKAFIAMAFIAHADIAGAFQADADABADQACAEAAAFQAAAFgCAEQgDAFgEADQgEAEgGACQgGACgHAAIgIgBg");
	this.shape_601.setTransform(500.1,179.9);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("AAAApQgEgCgDgDQgEgDgBgFIgBgMIAAgcIgSAAIAAgKIATAAIABgUIALAAIAAAUIAeAAIAAAKIgeAAIAAAcIAAAHQABAEACACQABACADABIAHABQAHAAAJgDIACAKQgMAEgIgBQgIAAgEgCg");
	this.shape_602.setTransform(484.2,180);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgFgDgFIgCgHIgBgIQAAgFADgJQADgGAFgEQAEgFAGgCQAGgCAGAAQAHAAAFACQAGACAEAEQAEAFACAFQACAGAAAHIgBAGIgwAAQAAAEACAEQACAEADADQADACAEACIAIABQAGAAAEgCQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgGQgCgCgDgBIgHgCIgGACQgDABgDACIgFAGIgCAHIAlAAIAAAAg");
	this.shape_603.setTransform(468.3,181);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_604.setTransform(460.4,180.9);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgFgDgFIgCgHIgBgIQAAgFADgJQADgGAFgEQAEgFAGgCQAGgCAGAAQAHAAAFACQAGACAEAEQAEAFACAFQACAGAAAHIgBAGIgwAAQAAAEACAEQACAEADADQADACAEACIAIABQAGAAAEgCQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgGQgCgCgDgBIgHgCIgGACQgDABgDACIgFAGIgCAHIAlAAIAAAAg");
	this.shape_605.setTransform(452.4,181);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFFFFF").s().p("AgPAvQgGgBgDgDQgEgCgCgDQgCgDAAgFQAAgEACgEQADgDAFgDIAAgBQgDgBgBgCQgCgDAAgEQAAgEACgCQACgDADgCIAAgBQgDgDgDgEQgCgEAAgGQAAgFACgEQACgFAEgDQAEgDAEgCIAKgBQAFAAAEABIAbAAIAAALIgQAAIADAFIACAHQAAAFgCAEQgCAEgEADQgDADgFABQgEACgFAAQgFAAgFgCQgFADAAADQAAADAEABQADADAGAAIANAAIALAAQAFABADACQADACACADQABADAAAEQAAAFgCAEQgDAEgFADQgFADgGACQgHACgIAAQgGAAgGgBgAgUAXIgBAGQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAIAEADIAGACIAJABIAIgBQAEgBADgCIAFgEQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgDgCQgDgBgHAAIgLAAIgKgBQgEACgCACgAgIglIgEADIgDAEIgBAGIABAGQABADACABIAEADIAFABIAFgBIAEgDQACgBABgDIABgGIgBgGIgDgEIgEgDIgFgBIgFABg");
	this.shape_606.setTransform(444.6,182.4);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgCgCgEQgCgDAAgEQABgGACgEQADgFAFgBIAPgFQAHgCAMgBIgBgGIgCgEIgGgDQgDgCgEAAQgEAAgHADIgKAFIgFgJQAGgEAIgCIAHgDIAIAAQAGAAAGACQAEABAEAEQADADACAGQACAFAAAGIAAAnIgLAAIgBgJIgBAAIgLAHQgGADgGAAIgJgBgAAAABIgJAEQgEABgBADQgBACAAAEQAAAEADACQAEADAFAAQAEAAAFgDIAKgGIAAgPIgQABg");
	this.shape_607.setTransform(436.4,181);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgCgBgEQgCgDgBgEQAAgGADgEQADgFAGgBIANgFQAIgCANgBIgCgGIgDgEIgEgDQgDgCgFAAQgEAAgHADIgKAFIgEgJQAGgEAGgCIAIgDIAIAAQAGAAAFACQAFABAEAEQADADACAGQABAFAAAGIAAAnIgKAAIgBgJIAAAAIgMAHQgGADgGAAIgJgBgAABABIgJAEQgFABgBADQgCACABAEQAAAEADACQAEADAFAAQAFAAAEgDIALgGIAAgPIgQABg");
	this.shape_608.setTransform(420.5,181);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFFFFF").s().p("AASAsIAAgoIACggIgFATIgLAdIgIAAIgLgdIgEgTIgBAAIACAgIAAAoIgMAAIAAhWIAPAAIAMAjIADAMIAAAAIAEgMIAMgjIAPAAIAABWg");
	this.shape_609.setTransform(412.6,179.9);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FFFFFF").s().p("AAAApQgFgCgCgDQgDgDgCgFIgBgMIAAgcIgSAAIAAgKIASAAIACgUIALAAIAAAUIAdAAIAAAKIgdAAIAAAcIAAAHQAAAEACACQACACADABIAHABQAGAAAJgDIADAKQgMAEgJgBQgGAAgFgCg");
	this.shape_610.setTransform(396.8,180);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgFgDgFIgCgHIgBgIQAAgFADgJQADgGAFgEQAEgFAGgCQAGgCAGAAQAHAAAFACQAGACAEAEQAEAFACAFQACAGAAAHIgBAGIgwAAQAAAEACAEQACAEADADQADACAEACIAIABQAGAAAEgCQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgGQgCgCgDgBIgHgCIgGACQgDABgDACIgFAGIgCAHIAlAAIAAAAg");
	this.shape_611.setTransform(380.8,181);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFFFF").s().p("AAAApQgFgCgCgDQgDgDgCgFIgBgMIAAgcIgSAAIAAgKIASAAIACgUIALAAIAAAUIAdAAIAAAKIgdAAIAAAcIAAAHQAAAEACACQACACADABIAHABQAGAAAJgDIADAKQgMAEgJgBQgGAAgFgCg");
	this.shape_612.setTransform(372.9,180);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFFFFF").s().p("AgMAgQgFgCgFgFQgEgFgDgFIgCgHIgBgIQABgFACgJQADgGAEgEQAFgFAFgCQAHgCAFAAQAHAAAFACQAGACAEAFQAFAEADAGQACAJAAAFIgBAIIgBAHQgDAFgFAFQgEAFgGACQgFACgHAAQgFAAgHgCgAgHgUQgDABgDADQgDAEAAAEQgCAEAAAEQAAAFACAEQAAAFADADQADADADABQADADAEAAQAEAAADgDQAEgBACgDQADgDACgFQABgEAAgFQAAgEgBgEIgFgIQgCgDgEgBQgDgCgEAAQgEAAgDACg");
	this.shape_613.setTransform(357,181);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFFFFF").s().p("AgBAtIgIgDIgGgEIgGgEIgFgHIgDgIIgCgJIgBgKIABgJIACgJIADgHIAFgHIAHgFIAGgEIAHgCIAIgBQAFAAAJADQAGADAFAEIgIAJQgDgEgFgCQgEgCgFAAQgGAAgEACQgEADgEAEQgEAEgBAHQgCAGAAAHQAAAHACAHQABAGAEAFQAEAEAEACQAEADAGAAQAFAAAFgDQAEgCAFgEIAHAHIgGAGIgFAEIgIADIgIAAg");
	this.shape_614.setTransform(349.1,179.9);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FFFFFF").s().p("AgLAgQgGgCgEgFQgFgFgDgFIgCgHIAAgIQAAgFACgJQADgGAFgEQAEgFAGgCQAFgCAGAAQAGAAAGACQAGACAFAFQAEAEADAGQADAJAAAFIgBAIIgCAHQgDAFgEAFQgFAFgGACQgGACgGAAQgGAAgFgCgAgHgUQgDABgDADQgDAEgBAEQgBAEAAAEQAAAFABAEQABAFADADQADADADABQADADAEAAQAEAAADgDQAEgBADgDQACgDABgFQACgEAAgFQAAgEgCgEIgDgIQgDgDgEgBQgDgCgEAAQgEAAgDACg");
	this.shape_615.setTransform(325.2,181);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFFFFF").s().p("AAAApQgEgCgDgDQgEgDgBgFIgBgMIAAgcIgSAAIAAgKIASAAIACgUIALAAIAAAUIAeAAIAAAKIgeAAIAAAcIAAAHQABAEACACQABACADABIAHABQAHAAAJgDIACAKQgMAEgIgBQgIAAgEgCg");
	this.shape_616.setTransform(317.3,180);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgCgHgFIAGgIQAGADAGACQAHADAIAAQAHAAAEgDQADgCAAgEQAAgDgDgDIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgCQAEgDAFgCQAFgBAGAAQAHAAAIADQAGACAGADIgHAIQgEgDgGgBQgFgCgGAAQgGAAgEADQgDACAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAHQAAAEgCADIgGAGQgEADgFACQgGABgHAAIgIAAg");
	this.shape_617.setTransform(309.2,181);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FFFFFF").s().p("AgQAgIgHgFQgCgEgCgFQgBgFAAgGIAAgnIANAAIAAAlIABAIIACAFIAEADIAHABQAEAAAEgCQAEgDAFgGIAAgrIANAAIAABAIgLAAIgBgLIAAAAQgFAGgGADIgGACIgGABQgGAAgEgBg");
	this.shape_618.setTransform(301.2,181);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FFFFFF").s().p("AgBAtIgHgDIgHgEIgFgEIgGgHIgDgIIgCgJIgBgKIABgJIACgJIADgHIAGgHIAFgFIAHgEIAIgCIAHgBQAFAAAJADQAGADAFAEIgIAJQgEgEgDgCQgFgCgFAAQgGAAgDACQgGADgDAEQgDAEgCAHQgCAGAAAHQAAAHACAHQACAGADAFQADAEAGACQAEADAFAAQAGAAAEgDQAEgCAFgEIAHAHIgGAGIgGAEIgHADIgIAAg");
	this.shape_619.setTransform(293.5,179.9);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_620.setTransform(420.6,142.1);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_621.setTransform(341.1,142.1);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_622.setTransform(444.5,122.7);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_623.setTransform(428.6,122.7);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_624.setTransform(349.1,122.7);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_625.setTransform(317.3,122.7);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FFFFFF").s().p("AAAAqQgEgCgDgEQgEgEgBgFIgBgKIAAgcIgSAAIAAgKIATgBIABgVIALAAIAAAVIAeAAIAAALIgeAAIAAAcIAAAHQABADACACQABACADABIAHABQAHAAAJgDIACAKQgMADgIABQgIAAgEgCg");
	this.shape_626.setTransform(508.1,199.4);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgHIgBgHQAAgEADgKQADgFAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAFQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACADQACAEADADQADACAEABIAIABQAGABAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDgBIgHAAIgGAAQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_627.setTransform(492.1,200.4);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FFFFFF").s().p("AgeAvIAAhbIAMAAIABAIIAAAAQAFgEAFgDQAGgDAEAAQAHAAAFADQAFACADAEQAEAFACAGQABAGAAAIQABAIgDAGQgDAGgEAFQgEAEgFACQgFACgGABQgEAAgEgCQgFgCgEgFIgBAAIABAMIAAAWgAgHggIgJAGIAAAeQAEAEAEABIAIACQADAAADgCIAFgEQADgDACgEQABgFAAgFIgBgKIgDgHIgFgEQgEgBgEAAQgDAAgEACg");
	this.shape_628.setTransform(476.4,201.6);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgEgEQgFgEgDgHIgCgHIAAgHQAAgEACgKQADgFAFgFQAEgEAGgDQAFgCAGAAQAHAAAFACQAGADAFAEQAEAFADAFQADAKAAAEIgBAHIgCAHQgDAHgEAEQgFAEgGADQgFACgHAAQgGAAgFgCgAgHgVQgDACgDADQgDADgBAFQgBAEAAAEQAAAFABAFQABAEADADQADADADACQADABAEAAQAEAAADgBQAEgCADgDQACgDABgEQACgFAAgFQAAgEgCgEIgDgIQgDgDgEgCQgDgBgEAAQgEAAgDABg");
	this.shape_629.setTransform(468.3,200.4);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FFFFFF").s().p("AADAuQgDgBgDgDIgEgIQgBgEAAgGIAAg8IgWAAIAAgLIAiAAIAABIIABAFIACAFQADACAGAAQAFAAAHgCIADAJQgLAEgHAAQgFAAgFgCg");
	this.shape_630.setTransform(460.4,199);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgHIgBgHQAAgEADgKQADgFAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAFQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACADQACAEADADQADACAEABIAIABQAGABAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDgBIgHAAIgGAAQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_631.setTransform(452.4,200.4);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FFFFFF").s().p("AgGAgIgbhAIAOAAIANAjIAGATIABAAIAHgTIANgjIANAAIgaBAg");
	this.shape_632.setTransform(444.4,200.4);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgHIgBgHQAAgEADgKQADgFAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAFQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACADQACAEADADQADACAEABIAIABQAGABAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDgBIgHAAIgGAAQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_633.setTransform(436.5,200.4);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FFFFFF").s().p("AgeArIAAhVIAVAAIAJAAIAIACIAHADIAGAGIAEAFIAEAIIACAIIABAKIgBAJIgCAJIgEAIIgEAGIgGAFIgHAEIgIACIgIAAgAgRAhIAIAAQAHgBAEgBQAFgDAEgEQADgEACgGQACgGAAgIQAAgHgCgGQgCgHgDgEQgEgEgFgCQgEgCgHAAIgIAAg");
	this.shape_634.setTransform(428.8,199.3);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgDgHgEIAGgJQAGAFAGACQAHACAIAAQAHAAAEgCQADgDAAgEQAAgDgDgDIgPgFIgLgDIgIgDIgEgFQgCgEAAgDQAAgEACgEQACgDADgDQAEgDAFgBQAFgBAGAAQAHAAAIACQAGACAGAFIgHAIQgEgEgGgBQgFgCgGAAQgGAAgEACQgDACAAAEQAAAEAFACQADACAJACIANAEQAFABADACIAFAFIABAHQAAAFgCADIgGAHQgEACgFABQgGACgHAAIgIgBg");
	this.shape_635.setTransform(412.6,200.4);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgHIgBgHQAAgEADgKQADgFAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAFQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACADQACAEADADQADACAEABIAIABQAGABAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDgBIgHAAIgGAAQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_636.setTransform(404.7,200.4);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgHIgBgHQAAgEADgKQADgFAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAFQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACADQACAEADADQADACAEABIAIABQAGABAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDgBIgHAAIgGAAQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_637.setTransform(388.8,200.4);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FFFFFF").s().p("AAQAvIAAgmIgBgIIgCgEIgEgDIgGgBQgEAAgFADQgEACgFAEIAAAtIgNAAIAAhdIANAAIAAAZIgBAPIABAAQAFgGAFgDIAFgCIAHgBQAGAAAEABQAEACADADQADAEABAFIABAKIAAAog");
	this.shape_638.setTransform(380.9,198.9);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FFFFFF").s().p("AgFArIAAhKIgdAAIAAgLIBFAAIAAALIgcAAIAABKg");
	this.shape_639.setTransform(372.8,199.3);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgDgHgEIAGgJQAGAFAGACQAHACAIAAQAHAAAEgCQADgDAAgEQAAgDgDgDIgPgFIgLgDIgIgDIgEgFQgCgEAAgDQAAgEACgEQACgDADgDQAEgDAFgBQAFgBAGAAQAHAAAIACQAGACAGAFIgHAIQgEgEgGgBQgFgCgGAAQgGAAgEACQgDACAAAEQAAAEAFACQADACAJACIANAEQAFABADACIAFAFIABAHQAAAFgCADIgGAHIgJADQgGACgHAAIgIgBg");
	this.shape_640.setTransform(356.9,200.4);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgDgHgEIAGgJQAGAFAGACQAHACAIAAQAHAAAEgCQADgDAAgEQAAgDgDgDIgPgFIgLgDIgIgDIgEgFQgCgEAAgDQAAgEACgEQACgDADgDQAEgDAFgBQAFgBAGAAQAHAAAIACQAGACAGAFIgHAIQgEgEgGgBQgFgCgGAAQgGAAgEACQgDACAAAEQAAAEAFACQADACAJACIANAEQAFABADACIAFAFIABAHQAAAFgCADIgGAHQgEACgFABQgGACgHAAIgIgBg");
	this.shape_641.setTransform(349,200.4);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgHIgBgHQAAgEADgKQADgFAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAFQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAFACADQACAEADADQADACAEABIAIABQAGABAEgCQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgGQgCgCgDgBIgHAAIgGAAQgDACgDACIgFAFIgCAIIAlAAIAAAAg");
	this.shape_642.setTransform(341.1,200.4);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FFFFFF").s().p("AgeAvIAAhbIALAAIABAIIABAAQAEgEAGgDQAGgDAFAAQAGAAAFADQAFACADAEQAEAFACAGQACAGAAAIQgBAIgCAGQgDAGgDAFQgEAEgGACQgFACgGABQgDAAgFgCQgGgCgDgFIgBAAIABAMIAAAWgAgHggQgFACgEAEIAAAeQADAEAFABIAHACQADAAAEgCIAGgEQACgDABgEQACgFAAgFIgBgKIgDgHIgGgEQgDgBgEAAQgDAAgEACg");
	this.shape_643.setTransform(325.4,201.6);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FFFFFF").s().p("AgNAuQgFgDgEgEQgDgEgCgHQgCgGAAgIQAAgHACgHQACgFAFgFQAEgEAFgDQAFgCAGAAQAEAAAFACQAEACAEAEIABAAIgBgMIAAgYIANAAIAABdIgKAAIgCgIIgJAHQgGADgEAAQgHAAgFgCgAgEgHQgEACgCADQgDACgBAFQgCAEAAAFIABAKIAEAHIAFAFQAEABADAAQAJAAAHgJIAAgdQgEgEgEgCQgDgBgEAAQgDAAgDABg");
	this.shape_644.setTransform(317,199);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgEgEQgGgEgCgHIgCgHIAAgHQAAgEACgKQACgFAGgFQAEgEAGgDQAFgCAGAAQAHAAAFACQAGADAFAEQAEAFADAFQADAKAAAEIgBAHIgCAHQgDAHgEAEQgFAEgGADQgFACgHAAQgGAAgFgCgAgHgVQgEACgCADQgDADgBAFQgBAEAAAEQAAAFABAFQABAEADADQACADAEACQADABAEAAQAEAAADgBQAEgCADgDQACgDABgEQACgFAAgFQAAgEgCgEIgDgIQgDgDgEgCQgDgBgEAAQgEAAgDABg");
	this.shape_645.setTransform(301.3,200.4);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FFFFFF").s().p("AALArIgIggIgDgPIAAAAIgCAPIgHAgIgQAAIgNhVIAPAAIAFAzIACAVIAAAAIAEgVIAIgeIAKAAIAIAeIAEAVIABAAIABgVIAFgzIAOAAIgMBVg");
	this.shape_646.setTransform(293.3,199.3);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_647.setTransform(460.4,180.9);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_648.setTransform(317.7,161.5);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_649.setTransform(428.6,122.7);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_650.setTransform(317.3,122.7);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_651.setTransform(301.8,122.7);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FFFFFF").s().p("AAAApQgFgCgCgDQgDgDgCgFIgBgMIAAgcIgSAAIAAgKIASAAIACgUIALAAIAAAUIAdAAIAAAKIgdAAIAAAcIAAAHQAAAEACACQACACADABIAHABQAGAAAJgDIADAKQgMADgJAAQgGAAgFgCg");
	this.shape_652.setTransform(516,218.8);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgFgDgFIgCgHIgBgIQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAEQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAFQACAEADACQADADAEABIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgGQgCgCgDgBIgHgBIgGABQgDAAgDADIgFAGIgCAHIAlAAIAAAAg");
	this.shape_653.setTransform(500.1,219.8);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FFFFFF").s().p("AgdAuIAAhaIAKAAIABAIIABAAQAEgEAGgDQAGgDAFABQAGAAAFABQAFADAEAFQADADABAHQACAGABAIQAAAIgDAFQgCAHgEAEQgFAFgFACQgFACgGAAQgEAAgFgCQgEgCgFgDIAAAAIABAMIAAAUgAgIghQgEADgEAEIAAAeQADADAFACIAHABQADABAEgCIAFgEQADgDACgEQABgEAAgGIgBgJIgDgHIgFgFQgDgBgFgBQgDAAgFACg");
	this.shape_654.setTransform(484.4,221);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FFFFFF").s().p("AgMAgQgFgCgFgFQgEgFgDgFIgCgHIgBgIQABgFACgIQADgHAEgEQAFgEAFgDQAHgCAFAAQAHAAAFACQAGADAEAEQAFAEADAHQACAIAAAFIgBAIIgBAHQgDAFgFAFQgEAFgGACQgFACgHAAQgFAAgHgCgAgHgUQgDABgDADQgDAEAAADQgCAFAAAEQAAAFACAEQAAAFADADQADADADACQADACAEAAQAEAAADgCQAEgCACgDQADgDACgFQABgEAAgFQAAgEgBgFIgFgHQgCgDgEgBQgDgCgEAAQgEAAgDACg");
	this.shape_655.setTransform(476.2,219.8);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FFFFFF").s().p("AADAvQgDgCgDgDIgEgIQgBgEAAgGIAAg9IgWAAIAAgKIAiAAIAABHIABAGIACAEQADAEAGAAQAFAAAHgEIADALQgLADgHAAQgFAAgFgBg");
	this.shape_656.setTransform(468.3,218.4);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgFgDgFIgCgHIgBgIQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAEQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAFQACAEADACQADADAEABIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgGQgCgCgDgBIgHgBIgGABQgDAAgDADIgFAGIgCAHIAlAAIAAAAg");
	this.shape_657.setTransform(460.3,219.8);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgFgDgFIgCgHIgBgIQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAEQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAFQACAEADACQADADAEABIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgGQgCgCgDgBIgHgBIgGABQgDAAgDADIgFAGIgCAHIAlAAIAAAAg");
	this.shape_658.setTransform(444.4,219.8);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FFFFFF").s().p("AgfAsIAAhXIAXAAIAIABIAIACIAHAEIAGAEIAFAGIADAIIACAJIAAAJIAAAJIgCAJIgDAIIgFAGIgGAFIgGADIgIADIgIABgAgRAhIAIAAQAHgBAEgCQAFgCAEgDQADgFACgGQACgHAAgHQAAgIgCgGQgCgFgDgFQgEgEgFgCQgEgCgHAAIgIAAg");
	this.shape_659.setTransform(436.7,218.7);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgCgHgFIAGgIQAGADAGADQAHACAIAAQAHAAAEgCQADgDAAgEQAAgDgDgDIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgDQAEgCAFgBQAFgCAGAAQAHAAAIADQAGACAGADIgHAIQgEgDgGgBQgFgCgGAAQgGAAgEADQgDACAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAHQAAAEgCADIgGAGQgEADgFACQgGABgHAAIgIAAg");
	this.shape_660.setTransform(420.5,219.8);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FFFFFF").s().p("AgPAvQgGgBgDgCQgEgDgCgDQgCgEAAgEQAAgEACgEQADgDAFgDIAAgBQgDgBgBgCQgCgDAAgEQAAgDACgCQACgEADgCIAAgBQgDgDgDgEQgCgEAAgGQAAgFACgEQACgEAEgEQAEgDAEgBQAFgCAFAAQAFAAAEACIAbAAIAAAKIgQAAIADAFIACAGQAAAGgCAEQgCAEgEADQgDADgFABQgEACgFAAQgFAAgFgCQgFADAAACQAAAEAEACQADACAGAAIANAAIALAAIAIADQADACACADQABADAAAEQAAAEgCAFQgDAEgFADQgFADgGACQgHACgIAAQgGAAgGgBgAgUAXIgBAGQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAIAEADIAGACIAJABIAIgBQAEgBADgCIAFgEQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgDgCQgDgBgHAAIgLAAIgKgBQgEACgCACgAgIglIgEADIgDAEIgBAGIABAGQABADACABIAEADIAFACIAFgCIAEgDQACgBABgDIABgGIgBgGIgDgEIgEgDIgFgBIgFABg");
	this.shape_661.setTransform(396.9,221.2);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FFFFFF").s().p("AADAvQgDgCgDgDIgEgIQgBgEAAgGIAAg9IgWAAIAAgKIAiAAIAABHIABAGIACAEQADAEAGAAQAFAAAHgEIADALQgLADgHAAQgFAAgFgBg");
	this.shape_662.setTransform(380.9,218.4);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIAcAAIAMABQAGACAEADQAEADADAFQACAGAAAGQAAAHgCAGQgDAEgEADQgEAEgGACQgGABgGAAIgPAAIAAAigAgQAAIAOAAIAIAAQAEgBACgDQACgBACgEIABgIIgBgHIgEgEQgCgCgEgBIgIgBIgOAAg");
	this.shape_663.setTransform(373.1,218.7);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgCgHgFIAGgIQAGADAGADQAHACAIAAQAHAAAEgCQADgDAAgEQAAgDgDgDIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgDQAEgCAFgBQAFgCAGAAQAHAAAIADQAGACAGADIgHAIQgEgDgGgBQgFgCgGAAQgGAAgEADQgDACAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAHQAAAEgCADIgGAGQgEADgFACQgGABgHAAIgIAAg");
	this.shape_664.setTransform(356.9,219.8);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgCgHgFIAGgIQAGADAGADQAHACAIAAQAHAAAEgCQADgDAAgEQAAgDgDgDIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgDQAEgCAFgBQAFgCAGAAQAHAAAIADQAGACAGADIgHAIQgEgDgGgBQgFgCgGAAQgGAAgEADQgDACAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAHQAAAEgCADIgGAGQgEADgFACQgGABgHAAIgIAAg");
	this.shape_665.setTransform(349,219.8);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FFFFFF").s().p("AgJAgQgHgCgEgFQgFgFgDgFIgCgHIgBgIQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAEQAEAEACAGQACAGAAAHIgBAGIgwAAQAAAEACAFQACAEADACQADADAEABIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgGQgCgCgDgBIgHgBIgGABQgDAAgDADIgFAGIgCAHIAlAAIAAAAg");
	this.shape_666.setTransform(341.1,219.8);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FFFFFF").s().p("AgeAuIAAhaIALAAIABAIIABAAQAEgEAGgDQAGgDAFABQAGAAAFABQAFADADAFQAEADACAHQACAGAAAIQgBAIgCAFQgDAHgDAEQgEAFgGACQgFACgGAAQgDAAgFgCQgGgCgDgDIgBAAIABAMIAAAUgAgHghQgFADgEAEIAAAeQADADAFACIAHABQADABAEgCIAGgEQACgDABgEQACgEAAgGIgBgJIgDgHIgGgFQgDgBgEgBQgDAAgEACg");
	this.shape_667.setTransform(325.4,221);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FFFFFF").s().p("AgNAuQgFgCgEgFQgDgFgCgFQgCgHAAgIQAAgHACgHQACgFAFgFQAEgEAFgDQAFgCAGAAQAEAAAFACQAEACAEAEIABAAIgBgMIAAgYIANAAIAABeIgKAAIgCgIIgJAHQgGACgEAAQgHAAgFgCgAgEgGQgEABgCADQgDACgBAEQgCAFAAAFIABAKIAEAHIAFAFQAEABADAAQAJAAAHgIIAAgfQgEgDgEgBQgDgCgEAAQgDAAgDACg");
	this.shape_668.setTransform(317,218.4);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FFFFFF").s().p("AgLAgQgGgCgEgFQgGgFgCgFIgCgHIAAgIQAAgFACgIQACgHAGgEQAEgEAGgDQAFgCAGAAQAHAAAFACQAGADAFAEQAEAEADAHQADAIAAAFIgBAIIgCAHQgDAFgEAFQgFAFgGACQgFACgHAAQgGAAgFgCgAgHgUQgEABgCADQgDAEgBADQgBAFAAAEQAAAFABAEQABAFADADQACADAEACQADACAEAAQAEAAADgCQAEgCADgDQACgDABgFQACgEAAgFQAAgEgCgFIgDgHQgDgDgEgBQgDgCgEAAQgEAAgDACg");
	this.shape_669.setTransform(301.3,219.8);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FFFFFF").s().p("AALAsIgIgiIgDgPIAAAAIgCAPIgHAiIgQAAIgNhXIAPAAIAFA0IACAUIAAAAIAEgUIAIgdIAKAAIAIAdIAEAUIABAAIABgUIAFg0IAOAAIgMBXg");
	this.shape_670.setTransform(293.3,218.7);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FFFFFF").s().p("AgQAgIgHgFQgCgEgCgFQgBgFAAgGIAAgnIANAAIAAAlIABAIIACAFIAEADIAHABQAEAAAEgCQAEgDAFgGIAAgrIANAAIAABAIgLAAIgBgLIAAAAQgFAGgGADIgGACIgGABQgGAAgEgBg");
	this.shape_671.setTransform(301.2,181);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FFFFFF").s().p("AAHAwIAAg1IgcAAIAAgLIApAAIAABAgAAFgfQgCgDAAgEQAAgEACgDQADgCAEAAQAFAAACACQADADAAAEQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_672.setTransform(372.2,160);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_673.setTransform(317.7,161.5);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_674.setTransform(428.6,122.7);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FFFFFF").s().p("AgGAhIgbhAIAOAAIANAiIAGATIABAAIAHgTIANgiIANAAIgaBAg");
	this.shape_675.setTransform(388.7,122.8);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_676.setTransform(349.1,122.7);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_677.setTransform(317.3,122.7);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_678.setTransform(301.8,122.7);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgEgEQgFgEgDgHIgCgGIAAgIQAAgEACgKQADgFAFgFQAEgEAGgDQAFgCAGAAQAHAAAFACQAGADAFAEQAEAFADAFQADAKAAAEIgBAIIgCAGQgDAHgEAEQgFAEgGADQgFACgHAAQgGAAgFgCgAgHgVQgEACgCADQgDAEgBAEQgBAEAAAEQAAAFABAFQABAEADADQACADAEABQADACAEAAQAEAAADgCQAEgBADgDQACgDABgEQACgFAAgFQAAgEgCgEIgDgIQgDgDgEgCQgDgBgEAAQgEAAgDABg");
	this.shape_679.setTransform(492.1,239.2);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FFFFFF").s().p("AAAAqQgFgCgDgEQgDgEgBgFIgBgLIAAgbIgSAAIAAgKIATgBIABgVIALAAIAAAVIAdAAIAAALIgdAAIAAAbIAAAIQABADABACQACACADABIAIABQAGAAAIgDIADAKQgMADgJABQgHgBgEgBg");
	this.shape_680.setTransform(476.3,238.2);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgDgBgDQgCgDgBgFQAAgFADgFQADgDAGgCIANgFQAIgCANgBIgCgGIgDgEIgEgDQgDgBgFgBQgEABgHACIgKAFIgEgJQAGgEAGgCIAIgCIAHgBQAHAAAFACQAGACADADQADADACAGQABAFAAAGIAAAmIgKAAIgBgIIAAAAIgMAHQgGADgGAAIgJgBgAABACIgJADQgFACgBACQgCACABADQgBAFAEACQAEACAFAAQAFAAAEgCIALgGIAAgPIgQACg");
	this.shape_681.setTransform(468.2,239.2);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FFFFFF").s().p("AgPAuQgGgBgDgCQgEgCgCgDQgCgEAAgEQAAgEACgDQADgEAFgDIAAgBQgDgBgBgCQgCgDAAgEQAAgEACgCQACgDADgDIAAAAQgDgCgDgEQgCgFAAgGQAAgFACgFQACgEAEgDQAEgDAEgCIAKgBQAFAAAEABIAbAAIAAALIgQAAIADAFIACAHQAAAFgCAEQgCAEgEADQgDADgFACQgEABgFAAQgFAAgFgCQgFADAAADQAAADAEABQADACAGAAIANAAIALABIAIADQADACACADQABADAAAEQAAAEgCAFQgDAEgFADQgFAEgGABQgHACgIAAQgGAAgGgCgAgUAYIgBAEQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIAEADIAGACIAJABIAIgCQAEAAADgCIAFgDQAAgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgDgBQgDgCgHAAIgLAAIgKgBQgEACgCADgAgIglIgEADIgDAFIgBAFIABAGQABADACACIAEACIAFABIAFgBIAEgCQACgCABgDIABgGIgBgFIgDgFIgEgDIgFgBIgFABg");
	this.shape_682.setTransform(452.6,240.6);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIQAAgEADgKQADgFAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEADACAGQACAGAAAGIgBAHIgwAAQAAAFACADQACAEADADQADADAEAAIAIABQAGAAAEgBQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgDgDgBIgHgBIgGABQgDABgDADIgFAFIgCAIIAlAAIAAAAg");
	this.shape_683.setTransform(444.4,239.2);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FFFFFF").s().p("AAAAqQgEgCgDgEQgEgEgBgFIgBgLIAAgbIgSAAIAAgKIASgBIACgVIALAAIAAAVIAeAAIAAALIgeAAIAAAbIAAAIQABADACACQABACADABIAHABQAHAAAJgDIACAKQgMADgIABQgHgBgFgBg");
	this.shape_684.setTransform(436.5,238.2);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FFFFFF").s().p("AgbArIAAgLIAWAAIAAg/IgWAAIAAgLIA3AAIAAALIgWAAIAAA/IAWAAIAAALg");
	this.shape_685.setTransform(420.6,238.1);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgDgHgEIAGgJQAGAFAGABQAHADAIAAQAHAAAEgDQADgCAAgEQAAgEgDgCIgPgFQgGgBgFgCIgIgDIgEgFQgCgDAAgEQAAgEACgEQACgDADgCQAEgEAFgBQAFgBAGAAQAHAAAIACQAGADAGAEIgHAIQgEgDgGgCQgFgCgGAAQgGAAgEACQgDACAAAEQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAGQAAAEgCAEIgGAHQgEACgFABQgGACgHAAIgIgBg");
	this.shape_686.setTransform(404.6,239.2);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIQAAgEADgKQADgFAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEADACAGQACAGAAAGIgBAHIgwAAQAAAFACADQACAEADADQADADAEAAIAIABQAGAAAEgBQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgDgDgBIgHgBIgGABQgDABgDADIgFAFIgCAIIAlAAIAAAAg");
	this.shape_687.setTransform(388.8,239.2);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FFFFFF").s().p("AAAAqQgFgCgDgEQgDgEgBgFIgBgLIAAgbIgSAAIAAgKIATgBIABgVIALAAIAAAVIAdAAIAAALIgdAAIAAAbIAAAIQABADABACQACACADABIAIABQAGAAAIgDIADAKQgMADgJABQgHgBgEgBg");
	this.shape_688.setTransform(380.9,238.2);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgDgHgEIAGgJQAGAFAGABQAHADAIAAQAHAAAEgDQADgCAAgEQAAgEgDgCIgPgFQgGgBgFgCIgIgDIgEgFQgCgDAAgEQAAgEACgEQACgDADgCQAEgEAFgBQAFgBAGAAQAHAAAIACQAGADAGAEIgHAIQgEgDgGgCQgFgCgGAAQgGAAgEACQgDACAAAEQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAGQAAAEgCAEIgGAHQgEACgFABQgGACgHAAIgIgBg");
	this.shape_689.setTransform(372.8,239.2);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FFFFFF").s().p("AgIAsIgJgDIgHgDIgHgGIAIgJQAFAFAGADQAHACAGAAIAHgBIAGgCIADgEQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAIgBgGIgDgEIgLgFIgLgFIgHgDIgGgEQgDgDgBgEQgCgEAAgFQAAgEACgFQACgEAEgEQAEgCAGgCQAFgCAGAAQAFAAAKADQAHADAFAFIgHAIIgJgGQgGgBgGAAIgFAAIgFACIgDAEIgBAFIABAFIADADIAKAFIAMAFIAHADIAGAFQADACABAFQACADAAAFQAAAFgCAFQgDAEgEAEQgEADgGACQgGACgHAAIgIgBg");
	this.shape_690.setTransform(357,238.1);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#FFFFFF").s().p("AAAAqQgEgCgDgEQgEgEgBgFIgBgLIAAgbIgSAAIAAgKIASgBIACgVIALAAIAAAVIAeAAIAAALIgeAAIAAAbIAAAIQABADACACQABACADABIAHABQAHAAAJgDIACAKQgMADgIABQgIgBgEgBg");
	this.shape_691.setTransform(341.1,238.2);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIQAAgEADgKQADgFAFgFQAEgEAGgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEADACAGQACAGAAAGIgBAHIgwAAQAAAFACADQACAEADADQADADAEAAIAIABQAGAAAEgBQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgDgDgBIgHgBIgGABQgDABgDADIgFAFIgCAIIAlAAIAAAAg");
	this.shape_692.setTransform(325.2,239.2);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FFFFFF").s().p("AgeAtIACgLIAGABIAGgBQACAAACgCQAFgDACgGIABgFIgdg/IANAAIAPAiIAHASIAAAAIAHgSIAMgiIANAAIgcBEIgEAJQgCAFgEADQgDADgEABQgFACgFAAQgFAAgEgBg");
	this.shape_693.setTransform(309.3,240.5);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgDgBgDQgCgDgBgFQAAgFADgFQADgDAGgCIANgFQAIgCANgBIgCgGIgDgEIgEgDQgDgBgFgBQgEABgHACIgKAFIgEgJQAGgEAGgCIAIgCIAIgBQAGAAAFACQAFACAEADQADADACAGQABAFAAAGIAAAmIgKAAIgBgIIAAAAIgMAHQgGADgGAAIgJgBgAABACIgJADQgFACgBACQgCACABADQAAAFADACQAEACAFAAQAFAAAEgCIALgGIAAgPIgQACg");
	this.shape_694.setTransform(301.3,239.2);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#FFFFFF").s().p("AgdArIAAhVIAbAAIANABQAGABAEADQAEADADAFQACAFAAAIQAAAGgCAGQgDAEgEAEQgFADgFABQgGADgHAAIgNAAIAAAggAgPAAIAMAAIAIgBQAEgBADgCQADgCABgDIABgHIgBgIIgEgFQgDgCgEAAIgIgBIgMAAg");
	this.shape_695.setTransform(293.6,238.1);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FFFFFF").s().p("AgeAtIADgLIAFABIAGgBQACAAADgCQAEgDACgGIABgFIgdg/IANAAIAPAiIAGASIABAAIAHgSIAMgiIANAAIgcBEIgFAJQgBAFgEADQgDADgEABQgFACgFAAQgFAAgEgBg");
	this.shape_696.setTransform(508,182.3);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_697.setTransform(460.4,180.9);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FFFFFF").s().p("AAHAwIAAg1IgcAAIAAgLIApAAIAABAgAAFgfQgCgDAAgEQAAgEACgDQADgCAEAAQAFAAACACQADADAAAEQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_698.setTransform(372.2,160);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_699.setTransform(444.5,122.7);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FFFFFF").s().p("AAVAhIAAgsQAAgFgBgDQgCgCgDAAQgDAAgCACIgEAHIAAAtIgLAAIAAgsQAAgFgBgDQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgDAAgDACIgEAHIAAAtIgNAAIAAhAIALAAIABAJQACgFAEgDQADgCAGAAQAIAAACALQADgGADgCQAEgDAGAAIAGABIAEAEIADAGIABAJIAAAtg");
	this.shape_700.setTransform(428.6,122.7);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_701.setTransform(349.1,122.7);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_702.setTransform(317.3,122.7);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_703.setTransform(301.8,122.7);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgEgEQgFgFgDgFIgCgIIAAgHQAAgFACgIQADgHAFgEQAEgEAGgDQAFgCAGAAQAHAAAFACQAGADAFAEQAEAEADAHQADAIAAAFIgBAHIgCAIQgDAFgEAFQgFAEgGADQgFACgHAAQgGAAgFgCgAgHgUQgEABgCADQgDADgBAEQgBAFAAAEQAAAFABAEQABAFADADQACADAEACQADACAEAAQAEAAADgCQAEgCADgDQACgDABgFQACgEAAgFQAAgEgCgFIgDgHQgDgDgEgBQgDgCgEAAQgEAAgDACg");
	this.shape_704.setTransform(492.1,258.6);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#FFFFFF").s().p("AAAApQgFgCgDgDQgDgEgBgEIgBgLIAAgdIgSAAIAAgKIATAAIABgUIALAAIAAAUIAdAAIAAAKIgdAAIAAAdIAAAGQABAEABACQACACADABIAIABQAGAAAIgDIADAKQgMAEgJAAQgHgBgEgCg");
	this.shape_705.setTransform(476.3,257.6);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgCgBgEQgCgEgBgDQAAgGADgEQADgEAGgDIANgEQAIgCANgBIgCgFIgDgFIgEgDQgDgBgFAAQgEAAgHACIgKAFIgEgJQAGgEAGgCIAIgCIAHgBQAHAAAFACQAGACADADQADADACAGQABAFAAAHIAAAmIgKAAIgBgJIAAAAIgMAHQgGADgGAAIgJgBgAABABIgJAEQgFABgBADQgCADABADQgBAEAEADQAEACAFAAQAFAAAEgCIALgHIAAgPIgQABg");
	this.shape_706.setTransform(468.2,258.6);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#FFFFFF").s().p("AgPAvQgGgBgDgCQgEgDgCgDQgCgEAAgEQAAgEACgEQADgDAFgDIAAAAQgDgCgBgDQgCgDAAgDQAAgDACgCQACgEADgDIAAAAQgDgCgDgFQgCgEAAgGQAAgFACgEQACgEAEgEQAEgDAEgBIAKgCQAFAAAEACIAbAAIAAAKIgQAAIADAFIACAGQAAAGgCAEQgCAEgEADQgDADgFABQgEACgFAAQgFAAgFgCQgFADAAACQAAAEAEACQADACAGAAIANAAIALAAIAIADQADACACADQABADAAAEQAAAEgCAFQgDAEgFADQgFADgGACQgHACgIAAQgGAAgGgBgAgUAXIgBAFQAAABAAABQAAAAAAABQAAAAABABQAAABAAAAIAEADIAGACIAJAAIAIgBQAEAAADgCIAFgEQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgDgCQgDgBgHAAIgLAAIgKgBQgEACgCACgAgIglIgEADIgDAEIgBAGIABAGQABADACABIAEAEIAFABIAFgBIAEgEQACgBABgDIABgGIgBgGIgDgEIgEgDIgFgBIgFABg");
	this.shape_707.setTransform(452.6,260);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgFIgCgIIgBgHQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAEQAEAFACAFQACAGAAAHIgBAGIgwAAQAAAFACAEQACAEADACQADADAEABIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgBgDgBIgHgBIgGABQgDAAgDADIgFAGIgCAHIAlAAIAAAAg");
	this.shape_708.setTransform(444.4,258.6);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#FFFFFF").s().p("AAAApQgEgCgDgDQgEgEgBgEIgBgLIAAgdIgSAAIAAgKIASAAIACgUIALAAIAAAUIAeAAIAAAKIgeAAIAAAdIAAAGQABAEACACQABACADABIAHABQAHAAAJgDIACAKQgMAEgIAAQgHgBgFgCg");
	this.shape_709.setTransform(436.5,257.6);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FFFFFF").s().p("AgbAsIAAgLIAWAAIAAhBIgWAAIAAgLIA3AAIAAALIgWAAIAABBIAWAAIAAALg");
	this.shape_710.setTransform(420.6,257.5);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#FFFFFF").s().p("AgHAhIgJgCQgHgCgHgFIAGgIQAGAEAGACQAHACAIAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgPgFIgLgDIgIgDIgEgGQgCgDAAgDQAAgEACgDQACgEADgDQAEgCAFgBQAFgCAGAAQAHAAAIADQAGACAGADIgHAIQgEgDgGgBQgFgCgGAAQgGAAgEADQgDACAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAFIABAIQAAADgCAEIgGAGQgEADgFACQgGABgHAAIgIgBg");
	this.shape_711.setTransform(404.6,258.6);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FFFFFF").s().p("AARAvIgVgfIgOAOIAAARIgNAAIAAhdIANAAIAAA8IABAAIAfgfIAOAAIgZAZIAdAng");
	this.shape_712.setTransform(397.2,257.1);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#FFFFFF").s().p("AgMAgQgFgDgFgEQgEgFgDgFIgCgIIgBgHQABgFACgIQADgHAEgEQAFgEAFgDQAHgCAFAAQAHAAAFACQAGADAEAEQAFAEADAHQACAIAAAFIgBAHIgBAIQgDAFgFAFQgEAEgGADQgFACgHAAQgFAAgHgCgAgHgUQgDABgDADQgDADAAAEQgCAFAAAEQAAAFACAEQAAAFADADQADADADACQADACAEAAQAEAAADgCQAEgCACgDQADgDACgFQABgEAAgFQAAgEgBgFIgFgHQgCgDgEgBQgDgCgEAAQgEAAgDACg");
	this.shape_713.setTransform(380.8,258.6);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#FFFFFF").s().p("AAJAhIgFgdIgEgSIAAAAIgCASIgHAdIgQAAIgNhAIANAAIAGAiIADATIABAAIAEgTIAHgdIAKAAIAHAdIAEATIAAAAIADgTIAGgiIANAAIgNBAg");
	this.shape_714.setTransform(372.9,258.6);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#FFFFFF").s().p("AAAApQgEgCgDgDQgEgEgBgEIgBgLIAAgdIgSAAIAAgKIATAAIABgUIALAAIAAAUIAeAAIAAAKIgeAAIAAAdIAAAGQABAEACACQABACADABIAHABQAHAAAJgDIACAKQgMAEgIAAQgIgBgEgCg");
	this.shape_715.setTransform(365,257.6);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgFIgCgIIgBgHQAAgFADgIQADgHAFgEQAEgEAGgDQAGgCAGAAQAHAAAFACQAGACAEAEQAEAFACAFQACAGAAAHIgBAGIgwAAQAAAFACAEQACAEADACQADADAEABIAIABQAGgBAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgBgDgBIgHgBIgGABQgDAAgDADIgFAGIgCAHIAlAAIAAAAg");
	this.shape_716.setTransform(357,258.6);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#FFFFFF").s().p("AAPAsIgYg0IgJgSIACAbIAAArIgNAAIAAhXIAPAAIAYAzIAIATIAAAAIgCgcIAAgqIAOAAIAABXg");
	this.shape_717.setTransform(349,257.5);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#FFFFFF").s().p("AADAvQgDgCgDgDIgEgIQgBgFAAgFIAAg8IgWAAIAAgLIAiAAIAABHIABAGIACAFQADADAGAAQAFAAAHgDIADAKQgLADgHAAQgFAAgFgBg");
	this.shape_718.setTransform(333.2,257.2);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgCgBgEQgCgEgBgDQAAgGADgEQADgEAGgDIANgEQAIgCANgBIgCgFIgDgFIgEgDQgDgBgFAAQgEAAgHACIgKAFIgEgJQAGgEAGgCIAIgCIAIgBQAGAAAFACQAFACAEADQADADACAGQABAFAAAHIAAAmIgKAAIgBgJIAAAAIgMAHQgGADgGAAIgJgBgAABABIgJAEQgFABgBADQgCADABADQgBAEAEADQAEACAFAAQAFAAAEgCIALgHIAAgPIgQABg");
	this.shape_719.setTransform(325.1,258.6);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#FFFFFF").s().p("AgIAgQgHgDgFgEQgFgFgCgFIgCgIIgBgHIABgHIACgGQADgHAFgEQAFgEAHgDQAGgCAGAAQAGAAAJADQAFACAEAEIgGAIQgEgDgEgBQgEgCgFAAQgFAAgEACQgDABgDADQgEADgCAEQgBAFAAAEQAAAFABAEQACAFADADQADADAEACQAEACAFAAQAFgBAGgCQAEgCAEgDIAGAIQgGAFgGADQgHACgHAAQgHAAgGgCg");
	this.shape_720.setTransform(309.4,258.6);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#FFFFFF").s().p("AgLAgQgGgDgEgEQgGgFgCgFIgCgIIAAgHQAAgFACgIQACgHAGgEQAEgEAGgDQAFgCAGAAQAHAAAFACQAGADAFAEQAEAEADAHQADAIAAAFIgBAHIgCAIQgDAFgEAFQgFAEgGADQgFACgHAAQgGAAgFgCgAgHgUQgEABgCADQgDADgBAEQgBAFAAAEQAAAFABAEQABAFADADQACADAEACQADACAEAAQAEAAADgCQAEgCADgDQACgDABgFQACgEAAgFQAAgEgCgFIgDgHQgDgDgEgBQgDgCgEAAQgEAAgDACg");
	this.shape_721.setTransform(301.3,258.6);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FFFFFF").s().p("AgIAsIgJgCIgHgFIgHgFIAIgJQAFAFAGACQAHAEAGAAIAHgBIAGgDIADgEQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgBgFIgDgEIgLgFIgLgGIgHgCIgGgFQgDgDgBgDQgCgEAAgEQAAgGACgEQACgEAEgDQAEgDAGgDQAFgBAGAAQAFAAAKADQAHADAFAEIgHAJIgJgFQgGgDgGAAIgFABIgFADIgDADIgBAFIABAEIADAEIAKAFIAMAGIAHACIAGAFQADACABAEQACAEAAAEQAAAGgCAEQgDAFgEADQgEAEgGACQgGACgHAAIgIgBg");
	this.shape_722.setTransform(293.4,257.5);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#FFFFFF").s().p("AAHAwIAAg1IgcAAIAAgLIApAAIAABAgAAFgfQgCgDAAgEQAAgEACgDQADgCAEAAQAFAAACACQADADAAAEQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_723.setTransform(404,218.2);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FFFFFF").s().p("AAHAwIAAg1IgcAAIAAgLIApAAIAABAgAAFgfQgCgDAAgEQAAgEACgDQADgCAEAAQAFAAACACQADADAAAEQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_724.setTransform(372.2,160);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_725.setTransform(317.7,161.5);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_726.setTransform(349.1,122.7);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_727.setTransform(317.3,122.7);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_728.setTransform(301.8,122.7);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#FFFFFF").s().p("AgPAvQgGgCgDgCQgEgCgCgDQgCgDAAgFQAAgEACgDQADgEAFgDIAAgBQgDgBgBgCQgCgEAAgDQAAgEACgCQACgDADgCIAAgBQgDgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgDAEgCIAKgBQAFAAAEABIAbAAIAAALIgQAAIADAFIACAHQAAAFgCAEQgCAEgEADQgDADgFABQgEACgFAAQgFAAgFgCQgFADAAADQAAADAEABQADACAGAAIANAAIALABIAIADQADACACADQABADAAAEQAAAEgCAFQgDAEgFADQgFAEgGABQgHACgIAAQgGAAgGgBgAgUAXIgBAGQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAIAEADIAGACIAJABIAIgBQAEgBADgCIAFgDQAAgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgDgBQgDgCgHAAIgLAAIgKgBQgEACgCACgAgIglIgEADIgDAEIgBAGIABAGQABADACACIAEACIAFABIAFgBIAEgCQACgCABgDIABgGIgBgGIgDgEIgEgDIgFgBIgFABg");
	this.shape_729.setTransform(389,279.4);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgDgHgEIAGgIQAGADAGACQAHADAIAAQAHAAAEgDQADgCAAgEQAAgDgDgDIgPgFQgGgBgFgCIgIgDIgEgFQgCgDAAgEQAAgEACgEQACgDADgCQAEgEAFgBQAFgBAGAAQAHAAAIACQAGACAGAEIgHAJQgEgDgGgCQgFgCgGAAQgGAAgEACQgDADAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAGQAAAEgCAEIgGAGQgEADgFABQgGACgHAAIgIAAg");
	this.shape_730.setTransform(372.8,278);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIQAAgEADgKQADgFAFgFQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAGIgBAHIgwAAQAAAEACAEQACAFADACQADADAEAAIAIABQAGAAAEgBQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgCgDgCIgHgBIgGABQgDABgDADIgFAFIgCAIIAlAAIAAAAg");
	this.shape_731.setTransform(364.9,278);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FFFFFF").s().p("AgeArIAAhVIAVAAIAJAAIAIACIAHADIAGAGIAEAGIAEAHIACAIIABAKIgBAKIgCAJIgEAHIgEAGIgGAFIgHADIgIADIgIAAgAgRAgIAIAAQAGAAAFgCQAFgBAEgFQADgEACgGQACgHAAgHQAAgIgCgGQgCgFgDgFQgEgEgFgCQgFgCgGAAIgIAAg");
	this.shape_732.setTransform(357.2,276.9);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#FFFFFF").s().p("AgHAiIgJgDQgHgDgHgEIAGgIQAGADAGACQAHADAIAAQAHAAAEgDQADgCAAgEQAAgDgDgDIgPgFQgGgBgFgCIgIgDIgEgFQgCgDAAgEQAAgEACgEQACgDADgCQAEgEAFgBQAFgBAGAAQAHAAAIACQAGACAGAEIgHAJQgEgDgGgCQgFgCgGAAQgGAAgEACQgDADAAADQAAAEAFACQADACAJACIANAEQAFABADACIAFAGIABAGQAAAEgCAEIgGAGQgEADgFABQgGACgHAAIgIAAg");
	this.shape_733.setTransform(341,278);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgEgDgHIgCgGIgBgIQAAgEADgKQADgFAFgFQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEADQAEAEACAGQACAGAAAGIgBAHIgwAAQAAAEACAEQACAFADACQADADAEAAIAIABQAGAAAEgBQAFgBAEgDIAFAJQgFADgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgIIgEgFQgCgCgDgCIgHgBIgGABQgDABgDADIgFAFIgCAIIAlAAIAAAAg");
	this.shape_734.setTransform(325.2,278);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#FFFFFF").s().p("AgPAhIgHgEQgDgDgBgDQgCgDgBgEQAAgGADgFQADgEAGgBIANgFQAIgCANgBIgCgGIgDgEIgEgDQgDgBgFgBQgEABgHACIgKAFIgEgJQAGgEAGgCIAIgDIAIAAQAGAAAFACQAFACAEADQADAEACAFQABAFAAAGIAAAmIgKAAIgBgIIAAAAIgMAHQgGADgGAAIgJgBgAABACIgJADQgFABgBADQgCADABACQAAAFADACQAEACAFAAQAFAAAEgCIALgGIAAgPIgQACg");
	this.shape_735.setTransform(301.3,278);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#FFFFFF").s().p("AgeArIAAhVIAaAAIAMABIAJADQAEADADAEQACAEAAAFIgBAHQgBADgCACIgFAFIgGACIAAABIAIACIAGAEIAEAGQACADAAAFQAAAHgDAFQgCAEgFADQgEADgGACQgGABgGAAgAgQAgIANAAIAIgBQAEAAADgCQADgCABgDQACgDAAgEQAAgDgCgDQgBgDgDgCIgHgCIgIgBIgNAAgAgQgGIALAAIAHgBQAEgBACgCQADgBABgDIABgGIgBgFIgEgEIgGgCIgHAAIgLAAg");
	this.shape_736.setTransform(293.6,276.9);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#FFFFFF").s().p("AAHAwIAAg1IgcAAIAAgLIApAAIAABAgAAFgfQgCgDAAgEQAAgEACgDQADgCAEAAQAFAAACACQADADAAAEQAAAEgDADQgCADgFAAQgEAAgDgDg");
	this.shape_737.setTransform(372.2,160);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_738.setTransform(444.5,122.7);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_739.setTransform(349.1,122.7);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#FFFFFF").s().p("AAQAhIAAglIgBgIIgCgFIgEgDIgGgBQgEAAgFADQgEACgFAFIAAAsIgNAAIAAhAIALAAIABALIAAAAQAGgGAFgDQADgCACAAIAHgBQAGAAAEABQAEACADADQADAEABAFIABALIAAAng");
	this.shape_740.setTransform(317.3,122.7);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#FFFFFF").s().p("AgaAhIAAhAIALAAIABAPIAGgHIAHgFQACgCAEgBIAJgBQAHAAAGACIgDAMQgHgDgFAAIgHABIgGADIgGAGIgGAIIAAAkg");
	this.shape_741.setTransform(301.8,122.7);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#FFFFFF").s().p("AgIAgQgHgDgFgEQgFgFgCgGIgCgHIgBgHIABgGIACgHQADgHAFgEQAFgFAHgCQAGgCAGAAQAGAAAJADQAFACAEAEIgGAJQgEgEgEgCQgEgBgFAAQgFAAgEABQgDACgDADQgEADgCAEQgBAFAAAEQAAAFABAEQACAFADADQADADAEACQAEABAFAAQAFAAAGgCQAEgCAEgEIAGAJQgGAFgGADQgHACgHAAQgHAAgGgCg");
	this.shape_742.setTransform(309.4,297.4);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FFFFFF").s().p("AgJAgQgHgDgEgEQgFgFgDgGIgCgHIgBgHQAAgFADgIQADgHAFgEQAEgFAGgCQAGgCAGAAQAHAAAFACQAGADAEAEQAEAEACAFQACAGAAAGIgBAHIgwAAQAAAEACAFQACAEADACQADACAEACIAIAAQAGAAAEgBQAFgBAEgDIAFAIQgFAEgGACQgHACgHAAQgHAAgGgCgAAUgFIgCgHIgEgHQgCgCgDAAIgHgBIgGABQgDABgDACIgFAGIgCAHIAlAAIAAAAg");
	this.shape_743.setTransform(293.4,297.4);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FFFFFF").s().p("AAAApQgFgBgCgEQgDgEgCgEIgBgLIAAgdIgSAAIAAgKIASAAIACgVIALAAIAAAVIAdAAIAAAKIgdAAIAAAdIAAAGQAAAEACACQACACADABIAHABQAGAAAJgDIADAKQgMAEgJAAQgGAAgFgDg");
	this.shape_744.setTransform(325.2,121.8);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgFAAgCgDg");
	this.shape_745.setTransform(317.2,299.5);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_746.setTransform(325.2,299.5);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_747.setTransform(341.1,299.5);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_748.setTransform(333.1,299.5);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_749.setTransform(325.2,299.5);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_750.setTransform(333.1,299.5);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_751.setTransform(341.1,299.5);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_752.setTransform(325.2,299.5);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_753.setTransform(333.1,299.5);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_754.setTransform(341.1,299.5);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_755.setTransform(325.2,299.5);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_756.setTransform(333.1,299.5);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_757.setTransform(341.1,299.5);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_758.setTransform(325.2,299.5);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_759.setTransform(333.1,299.5);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgFAAgCgDg");
	this.shape_760.setTransform(317.2,299.5);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_761.setTransform(325.2,299.5);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_762.setTransform(333.1,299.5);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_763.setTransform(341.1,299.5);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_764.setTransform(325.2,299.5);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_765.setTransform(333.1,299.5);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_766.setTransform(341.1,299.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_562},{t:this.shape_561,p:{x:301.8,y:122.7}},{t:this.shape_560},{t:this.shape_559,p:{x:317.3,y:122.7}},{t:this.shape_558,p:{x:325.2,y:121.8}},{t:this.shape_557,p:{x:333.1,y:121.6}},{t:this.shape_556},{t:this.shape_555,p:{x:349.1,y:122.7}},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551,p:{x:388.7,y:122.8}},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546,p:{x:428.6,y:122.7}},{t:this.shape_545},{t:this.shape_544,p:{x:444.5,y:122.7}},{t:this.shape_543}]},683).to({state:[{t:this.shape_562},{t:this.shape_561,p:{x:301.8,y:122.7}},{t:this.shape_560},{t:this.shape_581,p:{x:317.3,y:122.7}},{t:this.shape_558,p:{x:325.2,y:121.8}},{t:this.shape_580},{t:this.shape_556},{t:this.shape_579,p:{x:349.1,y:122.7}},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551,p:{x:388.7,y:122.8}},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_578,p:{x:428.6,y:122.7}},{t:this.shape_545},{t:this.shape_559,p:{x:444.5,y:122.7}},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_555,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_546,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_544,p:{x:436.5,y:142.1}},{t:this.shape_563}]},4).to({state:[{t:this.shape_562},{t:this.shape_595,p:{x:301.8,y:122.7}},{t:this.shape_560},{t:this.shape_594,p:{x:317.3,y:122.7}},{t:this.shape_558,p:{x:325.2,y:121.8}},{t:this.shape_580},{t:this.shape_556},{t:this.shape_581,p:{x:349.1,y:122.7}},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551,p:{x:388.7,y:122.8}},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_578,p:{x:428.6,y:122.7}},{t:this.shape_545},{t:this.shape_579,p:{x:444.5,y:122.7}},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_559,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_546,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_555,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_561,p:{x:365.4,y:161.5}},{t:this.shape_585,p:{x:372.2,y:160}},{t:this.shape_584},{t:this.shape_544,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582}]},4).to({state:[{t:this.shape_562},{t:this.shape_595,p:{x:301.8,y:122.7}},{t:this.shape_560},{t:this.shape_625,p:{x:317.3,y:122.7}},{t:this.shape_558,p:{x:325.2,y:121.8}},{t:this.shape_580},{t:this.shape_556},{t:this.shape_624,p:{x:349.1,y:122.7}},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551,p:{x:388.7,y:122.8}},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_623,p:{x:428.6,y:122.7}},{t:this.shape_545},{t:this.shape_622,p:{x:444.5,y:122.7}},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_621,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_620,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_594,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_561,p:{x:365.4,y:161.5}},{t:this.shape_585,p:{x:372.2,y:160}},{t:this.shape_584},{t:this.shape_581,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_618,p:{x:301.2,y:181}},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_578,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_579,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_559,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_555,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604,p:{x:460.4,y:180.9}},{t:this.shape_603},{t:this.shape_544,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600,p:{x:508,y:182.3}},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_546,p:{x:539.9,y:180.9}},{t:this.shape_596}]},4).to({state:[{t:this.shape_562},{t:this.shape_651,p:{x:301.8,y:122.7}},{t:this.shape_560},{t:this.shape_650,p:{x:317.3,y:122.7}},{t:this.shape_558,p:{x:325.2,y:121.8}},{t:this.shape_580},{t:this.shape_556},{t:this.shape_625,p:{x:349.1,y:122.7}},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551,p:{x:388.7,y:122.8}},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_649,p:{x:428.6,y:122.7}},{t:this.shape_545},{t:this.shape_624,p:{x:444.5,y:122.7}},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_622,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_623,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_621,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_648,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_595,p:{x:365.4,y:161.5}},{t:this.shape_585,p:{x:372.2,y:160}},{t:this.shape_584},{t:this.shape_594,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_618,p:{x:301.2,y:181}},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_620,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_581,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_579,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_559,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_647,p:{x:460.4,y:180.9}},{t:this.shape_603},{t:this.shape_555,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600,p:{x:508,y:182.3}},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_578,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_590,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_561,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_546,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_604,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_544,p:{x:500.1,y:200.3}},{t:this.shape_626}]},4).to({state:[{t:this.shape_562},{t:this.shape_678,p:{x:301.8,y:122.7}},{t:this.shape_560},{t:this.shape_677,p:{x:317.3,y:122.7}},{t:this.shape_558,p:{x:325.2,y:121.8}},{t:this.shape_580},{t:this.shape_556},{t:this.shape_676,p:{x:349.1,y:122.7}},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_674,p:{x:428.6,y:122.7}},{t:this.shape_545},{t:this.shape_650,p:{x:444.5,y:122.7}},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_625,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_649,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_624,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_673,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_651,p:{x:365.4,y:161.5}},{t:this.shape_672,p:{x:372.2,y:160}},{t:this.shape_584},{t:this.shape_622,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_623,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_621,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_594,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_581,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_647,p:{x:460.4,y:180.9}},{t:this.shape_603},{t:this.shape_579,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600,p:{x:508,y:182.3}},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_620,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_648,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_595,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_578,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_604,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_559,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_590,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_561,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_585,p:{x:404,y:218.2}},{t:this.shape_555,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_546,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_544,p:{x:508.1,y:219.7}},{t:this.shape_652}]},4).to({state:[{t:this.shape_562},{t:this.shape_703,p:{x:301.8,y:122.7}},{t:this.shape_560},{t:this.shape_702,p:{x:317.3,y:122.7}},{t:this.shape_558,p:{x:325.2,y:121.8}},{t:this.shape_580},{t:this.shape_556},{t:this.shape_701,p:{x:349.1,y:122.7}},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_699,p:{x:444.5,y:122.7}},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_677,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_676,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_678,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_673,p:{x:365.4,y:161.5}},{t:this.shape_698,p:{x:372.2,y:160}},{t:this.shape_584},{t:this.shape_650,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_625,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_624,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_622,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_621,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_651,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_648,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_594,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_595,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_590,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_672,p:{x:404,y:218.2}},{t:this.shape_581,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_579,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_559,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_555,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_561,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_585,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_544,p:{x:500.1,y:239.1}}]},4).to({state:[{t:this.shape_562},{t:this.shape_728,p:{x:301.8,y:122.7}},{t:this.shape_560},{t:this.shape_727,p:{x:317.3,y:122.7}},{t:this.shape_558,p:{x:325.2,y:121.8}},{t:this.shape_580},{t:this.shape_556},{t:this.shape_726,p:{x:349.1,y:122.7}},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_702,p:{x:444.5,y:122.7}},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_701,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_699,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_725,p:{x:317.7}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_703,p:{x:365.4,y:161.5}},{t:this.shape_724,p:{x:372.2,y:160}},{t:this.shape_584},{t:this.shape_677,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_676,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_650,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_625,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_624,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_678,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_673,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_622,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_651,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_648,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_723,p:{x:404,y:218.2}},{t:this.shape_621,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_594,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_581,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_579,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_595,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_698,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_559,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_672,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_590,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_555,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_561,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_585,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_544,p:{x:500.1,y:258.5}}]},4).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_558,p:{x:325.2,y:121.8}},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}}]},4).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742}]},3).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_745,p:{x:317.2}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_745,p:{x:317.2}},{t:this.shape_746,p:{x:325.2}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_745,p:{x:317.2}},{t:this.shape_749,p:{x:325.2}},{t:this.shape_748,p:{x:333.1}},{t:this.shape_747,p:{x:341.1}},{t:this.shape_746,p:{x:349}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_745,p:{x:317.2}},{t:this.shape_746,p:{x:325.2}},{t:this.shape_748,p:{x:333.1}},{t:this.shape_747,p:{x:341.1}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_745,p:{x:317.2}},{t:this.shape_749,p:{x:325.2}},{t:this.shape_748,p:{x:333.1}},{t:this.shape_747,p:{x:341.1}},{t:this.shape_746,p:{x:349}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_745,p:{x:317.2}},{t:this.shape_749,p:{x:325.2}},{t:this.shape_750,p:{x:333.1}},{t:this.shape_747,p:{x:341.1}},{t:this.shape_746,p:{x:349}},{t:this.shape_748,p:{x:357}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_745,p:{x:317.2}},{t:this.shape_752,p:{x:325.2}},{t:this.shape_750,p:{x:333.1}},{t:this.shape_751,p:{x:341.1}},{t:this.shape_749,p:{x:349}},{t:this.shape_748,p:{x:357}},{t:this.shape_747,p:{x:364.9}},{t:this.shape_746,p:{x:372.9}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_745,p:{x:317.2}},{t:this.shape_752,p:{x:325.2}},{t:this.shape_753,p:{x:333.1}},{t:this.shape_751,p:{x:341.1}},{t:this.shape_749,p:{x:349}},{t:this.shape_750,p:{x:357}},{t:this.shape_747,p:{x:364.9}},{t:this.shape_746,p:{x:372.9}},{t:this.shape_748,p:{x:380.8}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_745,p:{x:317.2}},{t:this.shape_752,p:{x:325.2}},{t:this.shape_753,p:{x:333.1}},{t:this.shape_754,p:{x:341.1}},{t:this.shape_749,p:{x:349}},{t:this.shape_750,p:{x:357}},{t:this.shape_751,p:{x:364.9}},{t:this.shape_746,p:{x:372.9}},{t:this.shape_748,p:{x:380.8}},{t:this.shape_747,p:{x:388.8}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_745,p:{x:317.2}},{t:this.shape_755,p:{x:325.2}},{t:this.shape_753,p:{x:333.1}},{t:this.shape_754,p:{x:341.1}},{t:this.shape_752,p:{x:349}},{t:this.shape_750,p:{x:357}},{t:this.shape_751,p:{x:364.9}},{t:this.shape_749,p:{x:372.9}},{t:this.shape_748,p:{x:380.8}},{t:this.shape_747,p:{x:388.8}},{t:this.shape_746,p:{x:396.7}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_745,p:{x:317.2}},{t:this.shape_755,p:{x:325.2}},{t:this.shape_756,p:{x:333.1}},{t:this.shape_754,p:{x:341.1}},{t:this.shape_752,p:{x:349}},{t:this.shape_753,p:{x:357}},{t:this.shape_751,p:{x:364.9}},{t:this.shape_749,p:{x:372.9}},{t:this.shape_750,p:{x:380.8}},{t:this.shape_747,p:{x:388.8}},{t:this.shape_746,p:{x:396.7}},{t:this.shape_748,p:{x:404.7}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_745,p:{x:317.2}},{t:this.shape_755,p:{x:325.2}},{t:this.shape_756,p:{x:333.1}},{t:this.shape_757,p:{x:341.1}},{t:this.shape_752,p:{x:349}},{t:this.shape_753,p:{x:357}},{t:this.shape_754,p:{x:364.9}},{t:this.shape_749,p:{x:372.9}},{t:this.shape_750,p:{x:380.8}},{t:this.shape_751,p:{x:388.8}},{t:this.shape_746,p:{x:396.7}},{t:this.shape_748,p:{x:404.7}},{t:this.shape_747,p:{x:412.6}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_745,p:{x:317.2}},{t:this.shape_758,p:{x:325.2}},{t:this.shape_756,p:{x:333.1}},{t:this.shape_757,p:{x:341.1}},{t:this.shape_755,p:{x:349}},{t:this.shape_753,p:{x:357}},{t:this.shape_754,p:{x:364.9}},{t:this.shape_752,p:{x:372.9}},{t:this.shape_750,p:{x:380.8}},{t:this.shape_751,p:{x:388.8}},{t:this.shape_749,p:{x:396.7}},{t:this.shape_748,p:{x:404.7}},{t:this.shape_747,p:{x:412.6}},{t:this.shape_746,p:{x:420.6}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_745,p:{x:317.2}},{t:this.shape_758,p:{x:325.2}},{t:this.shape_759,p:{x:333.1}},{t:this.shape_757,p:{x:341.1}},{t:this.shape_755,p:{x:349}},{t:this.shape_756,p:{x:357}},{t:this.shape_754,p:{x:364.9}},{t:this.shape_752,p:{x:372.9}},{t:this.shape_753,p:{x:380.8}},{t:this.shape_751,p:{x:388.8}},{t:this.shape_749,p:{x:396.7}},{t:this.shape_750,p:{x:404.7}},{t:this.shape_747,p:{x:412.6}},{t:this.shape_746,p:{x:420.6}},{t:this.shape_748,p:{x:428.5}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_760},{t:this.shape_758,p:{x:325.2}},{t:this.shape_759,p:{x:333.1}},{t:this.shape_757,p:{x:341.1}},{t:this.shape_755,p:{x:349}},{t:this.shape_756,p:{x:357}},{t:this.shape_754,p:{x:364.9}},{t:this.shape_752,p:{x:372.9}},{t:this.shape_753,p:{x:380.8}},{t:this.shape_751,p:{x:388.8}},{t:this.shape_749,p:{x:396.7}},{t:this.shape_750,p:{x:404.7}},{t:this.shape_747,p:{x:412.6}},{t:this.shape_746,p:{x:420.6}},{t:this.shape_748,p:{x:428.5}},{t:this.shape_745,p:{x:436.5}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_760},{t:this.shape_761,p:{x:325.2}},{t:this.shape_759,p:{x:333.1}},{t:this.shape_757,p:{x:341.1}},{t:this.shape_758,p:{x:349}},{t:this.shape_756,p:{x:357}},{t:this.shape_754,p:{x:364.9}},{t:this.shape_755,p:{x:372.9}},{t:this.shape_753,p:{x:380.8}},{t:this.shape_751,p:{x:388.8}},{t:this.shape_752,p:{x:396.7}},{t:this.shape_750,p:{x:404.7}},{t:this.shape_747,p:{x:412.6}},{t:this.shape_749,p:{x:420.6}},{t:this.shape_748,p:{x:428.5}},{t:this.shape_745,p:{x:436.5}},{t:this.shape_746,p:{x:444.4}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_760},{t:this.shape_761,p:{x:325.2}},{t:this.shape_762,p:{x:333.1}},{t:this.shape_757,p:{x:341.1}},{t:this.shape_758,p:{x:349}},{t:this.shape_759,p:{x:357}},{t:this.shape_754,p:{x:364.9}},{t:this.shape_755,p:{x:372.9}},{t:this.shape_756,p:{x:380.8}},{t:this.shape_751,p:{x:388.8}},{t:this.shape_752,p:{x:396.7}},{t:this.shape_753,p:{x:404.7}},{t:this.shape_747,p:{x:412.6}},{t:this.shape_749,p:{x:420.6}},{t:this.shape_750,p:{x:428.5}},{t:this.shape_745,p:{x:436.5}},{t:this.shape_746,p:{x:444.4}},{t:this.shape_748,p:{x:452.4}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_760},{t:this.shape_761,p:{x:325.2}},{t:this.shape_762,p:{x:333.1}},{t:this.shape_763,p:{x:341.1}},{t:this.shape_758,p:{x:349}},{t:this.shape_759,p:{x:357}},{t:this.shape_757,p:{x:364.9}},{t:this.shape_755,p:{x:372.9}},{t:this.shape_756,p:{x:380.8}},{t:this.shape_754,p:{x:388.8}},{t:this.shape_752,p:{x:396.7}},{t:this.shape_753,p:{x:404.7}},{t:this.shape_751,p:{x:412.6}},{t:this.shape_749,p:{x:420.6}},{t:this.shape_750,p:{x:428.5}},{t:this.shape_745,p:{x:436.5}},{t:this.shape_746,p:{x:444.4}},{t:this.shape_748,p:{x:452.4}},{t:this.shape_747,p:{x:460.3}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_760},{t:this.shape_764},{t:this.shape_762,p:{x:333.1}},{t:this.shape_763,p:{x:341.1}},{t:this.shape_761,p:{x:349}},{t:this.shape_759,p:{x:357}},{t:this.shape_757,p:{x:364.9}},{t:this.shape_758,p:{x:372.9}},{t:this.shape_756,p:{x:380.8}},{t:this.shape_754,p:{x:388.8}},{t:this.shape_755,p:{x:396.7}},{t:this.shape_753,p:{x:404.7}},{t:this.shape_751,p:{x:412.6}},{t:this.shape_752,p:{x:420.6}},{t:this.shape_750,p:{x:428.5}},{t:this.shape_745,p:{x:436.5}},{t:this.shape_749,p:{x:444.4}},{t:this.shape_748,p:{x:452.4}},{t:this.shape_747,p:{x:460.3}},{t:this.shape_746,p:{x:468.3}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_760},{t:this.shape_764},{t:this.shape_765},{t:this.shape_763,p:{x:341.1}},{t:this.shape_761,p:{x:349}},{t:this.shape_762,p:{x:357}},{t:this.shape_757,p:{x:364.9}},{t:this.shape_758,p:{x:372.9}},{t:this.shape_759,p:{x:380.8}},{t:this.shape_754,p:{x:388.8}},{t:this.shape_755,p:{x:396.7}},{t:this.shape_756,p:{x:404.7}},{t:this.shape_751,p:{x:412.6}},{t:this.shape_752,p:{x:420.6}},{t:this.shape_753,p:{x:428.5}},{t:this.shape_745,p:{x:436.5}},{t:this.shape_749,p:{x:444.4}},{t:this.shape_750,p:{x:452.4}},{t:this.shape_747,p:{x:460.3}},{t:this.shape_746,p:{x:468.3}},{t:this.shape_748,p:{x:476.2}}]},1).to({state:[{t:this.shape_562},{t:this.shape_741},{t:this.shape_560},{t:this.shape_740},{t:this.shape_744},{t:this.shape_580},{t:this.shape_556},{t:this.shape_739},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_675},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_700},{t:this.shape_545},{t:this.shape_738},{t:this.shape_543},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_557,p:{x:325.2,y:141}},{t:this.shape_573},{t:this.shape_727,p:{x:341.1,y:142.1}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_674,p:{x:420.6,y:142.1}},{t:this.shape_564},{t:this.shape_726,p:{x:436.5,y:142.1}},{t:this.shape_563},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_728,p:{x:317.7,y:161.5}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_725,p:{x:365.4}},{t:this.shape_737},{t:this.shape_584},{t:this.shape_702,p:{x:388.8,y:161.5}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_619},{t:this.shape_671},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_649,p:{x:333.2,y:180.9}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_701,p:{x:365,y:180.9}},{t:this.shape_612},{t:this.shape_611},{t:this.shape_699,p:{x:388.8,y:180.9}},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_677,p:{x:428.6,y:180.9}},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_697},{t:this.shape_603},{t:this.shape_676,p:{x:476.3,y:180.9}},{t:this.shape_602},{t:this.shape_601},{t:this.shape_696},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_623,p:{x:539.9,y:180.9}},{t:this.shape_596},{t:this.shape_646},{t:this.shape_645},{t:this.shape_703,p:{x:309.8,y:200.3}},{t:this.shape_644},{t:this.shape_643},{t:this.shape_678,p:{x:333.6,y:200.3}},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_620,p:{x:396.8,y:200.3}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_647,p:{x:484.2,y:200.3}},{t:this.shape_627},{t:this.shape_650,p:{x:500.1,y:200.3}},{t:this.shape_626},{t:this.shape_670},{t:this.shape_669},{t:this.shape_673,p:{x:309.8,y:219.7}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_651,p:{x:333.6,y:219.7}},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_618,p:{x:388.6,y:219.8}},{t:this.shape_661},{t:this.shape_724,p:{x:404,y:218.2}},{t:this.shape_625,p:{x:412.7,y:219.7}},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_551,p:{x:452.3,y:219.8}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_578,p:{x:492.2,y:219.7}},{t:this.shape_653},{t:this.shape_624,p:{x:508.1,y:219.7}},{t:this.shape_652},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_604,p:{x:317.3,y:239.1}},{t:this.shape_692},{t:this.shape_622,p:{x:333.2,y:239.1}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_600,p:{x:364.9,y:240.5}},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_546,p:{x:396.8,y:239.1}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_621,p:{x:428.6,y:239.1}},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_648,p:{x:460.8,y:239.1}},{t:this.shape_681},{t:this.shape_680},{t:this.shape_723,p:{x:483.5,y:237.6}},{t:this.shape_679},{t:this.shape_594,p:{x:500.1,y:239.1}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_698,p:{x:316.6,y:257}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_595,p:{x:389.3,y:258.5}},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_581,p:{x:428.6,y:258.5}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_590,p:{x:460.8,y:258.5}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_672,p:{x:483.5,y:257}},{t:this.shape_704},{t:this.shape_579,p:{x:500.1,y:258.5}},{t:this.shape_736},{t:this.shape_735},{t:this.shape_559,p:{x:309.3,y:277.9}},{t:this.shape_555,p:{x:317.3,y:277.9}},{t:this.shape_734},{t:this.shape_561,p:{x:333.6,y:277.9}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_585,p:{x:380.2,y:276.4}},{t:this.shape_729},{t:this.shape_544,p:{x:396.8,y:277.9}},{t:this.shape_743},{t:this.shape_558,p:{x:301.4,y:296.4}},{t:this.shape_742},{t:this.shape_760},{t:this.shape_764},{t:this.shape_765},{t:this.shape_766},{t:this.shape_761,p:{x:349}},{t:this.shape_762,p:{x:357}},{t:this.shape_763,p:{x:364.9}},{t:this.shape_758,p:{x:372.9}},{t:this.shape_759,p:{x:380.8}},{t:this.shape_757,p:{x:388.8}},{t:this.shape_755,p:{x:396.7}},{t:this.shape_756,p:{x:404.7}},{t:this.shape_754,p:{x:412.6}},{t:this.shape_752,p:{x:420.6}},{t:this.shape_753,p:{x:428.5}},{t:this.shape_745,p:{x:436.5}},{t:this.shape_749,p:{x:444.4}},{t:this.shape_750,p:{x:452.4}},{t:this.shape_751,p:{x:460.3}},{t:this.shape_746,p:{x:468.3}},{t:this.shape_748,p:{x:476.2}},{t:this.shape_747,p:{x:484.2}}]},1).to({state:[]},597).wait(8));

	// Back Orng
	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#DE7300").s().p("Ag4A4QgXgXABghQgBggAXgYQAYgWAgAAQAhAAAXAWQAXAYAAAgQAAAhgXAXQgXAXghAAQggAAgYgXg");
	this.shape_767.setTransform(399.6,199.5);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#DE7300").s().p("AjXDWQhXhYAAh+QAAh9BXhZQBahZB9ABQB+gBBYBZQBZBZAAB9QAAB+hZBYQhYBZh+AAQh9AAhahZg");
	this.shape_768.setTransform(399.5,199.4);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#DE7300").s().p("Al2F0QiYiZAAjbQAAjaCYicQCciYDaAAQDbAACZCYQCbCcABDaQgBDbibCZQiZCbjbABQjagBicibg");
	this.shape_769.setTransform(399.4,199.3);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#DE7300").s().p("AoVIRQjZjZAAk4QAAk3DZjeQDejaE3ABQE4gBDaDaQDdDeABE3QgBE4jdDZQjaDfk4AAQk3AAjejfg");
	this.shape_770.setTransform(399.3,199.2);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#DE7300").s().p("Aq0KwQkbkbAAmVQAAmUEbkhQEgkaGUABQGVgBEaEaQEhEhAAGUQAAGVkhEbQkaEgmVAAQmUAAkgkgg");
	this.shape_771.setTransform(399.2,199.1);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#DE7300").s().p("AtUNNQlblbAAnyQAAnxFbljQFjlbHxAAQHyAAFbFbQFjFjAAHxQAAHyljFbQlbFjnyAAQnxAAljljg");
	this.shape_772.setTransform(399.1,199);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#DE7300").s().p("AvzPrQmcmcAApPQAApOGcmlQGlmcJOAAQJPAAGcGcQGlGlAAJOQAAJPmlGcQmcGlpPAAQpOAAmlmlg");
	this.shape_773.setTransform(399,198.9);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#DE7300").s().p("AySSJQndndAAqsQAAqrHdnnQHnndKrAAQKsAAHdHdQHnHnAAKrQAAKsnnHdQndHnqsAAQqrAAnnnng");
	this.shape_774.setTransform(398.9,198.8);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#DE7300").s().p("A0xUmQoeodAAsJQAAsIIeopQIpoeMIAAQMJAAIeIeQIpIpAAMIQAAMJopIdQoeIqsJAAQsIAAopoqg");
	this.shape_775.setTransform(398.8,198.7);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#DE7300").s().p("A3QXEQpfpeAAtmQAAtlJfpsQJrpeNlAAQNmAAJeJeQJsJsAANlQAANmpsJeQpeJstmAAQtlAAprpsg");
	this.shape_776.setTransform(398.7,198.6);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#DE7300").s().p("A5wZiQqfqfAAvDQAAvCKfquQKuqfPCAAQPDAAKfKfQKuKuAAPCQAAPDquKfQqfKuvDAAQvCAAququg");
	this.shape_777.setTransform(398.7,198.5);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#DE7300").s().p("A8PcAQrgrgAAwgQAAwfLgrwQLwrgQfAAQQgAALgLgQLwLwAAQfQAAQgrwLgQrgLwwgAAQwfAArwrwg");
	this.shape_778.setTransform(398.6,198.4);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#DE7300").s().p("A+ueeQshshAAx9QAAx8MhsyQMyshR8AAQR9AAMgMhQMzMyAAR8QAAR9szMhQsgMyx9AAQx8AAsysyg");
	this.shape_779.setTransform(398.5,198.3);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#DE7300").s().p("EghOAg7QththAAzaQAAzZNht0QN1tiTZAAQTaAANhNiQN1N0AATZQAATat1NhQthN1zaAAQzZAAt1t1g");
	this.shape_780.setTransform(398.4,198.2);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#DE7300").s().p("EgjtAjZQuiuiAA03QAA02Oiu3QO3uiU2AAQU3AAOiOiQO3O3AAU2QAAU3u3OiQuiO303AAQ02AAu3u3g");
	this.shape_781.setTransform(398.3,198.1);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#DE7300").s().p("EgmMAl3QvjvjAA2UQAA2TPjv5QP5vjWTAAQWUAAPjPjQP5P5AAWTQAAWUv5PjQvjP52UAAQ2TAAv5v5g");
	this.shape_782.setTransform(398.2,198);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#DE7300").s().p("EgorAoUQwkwjAA3xQAA3wQkw7QQ7wkXwAAQXxAAQkQkQQ7Q7AAXwQAAXxw7QjQwkQ83xAAQ3wAAw7w8g");
	this.shape_783.setTransform(398.1,197.9);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#DE7300").s().p("EgrKAqzQxlxlAA5OQAA5NRlx+QR9xkZNAAQZOAARkRkQR+R+AAZNQAAZOx+RlQxkR95OAAQ5NAAx9x9g");
	this.shape_784.setTransform(398,197.8);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#DE7300").s().p("EgtpAtRQymymAA6rQAA6qSmzAQS/ylaqAAQaqAASmSlQTATAAAaqQAAarzASmQymS/6qAAQ6qAAy/y/g");
	this.shape_785.setTransform(397.9,197.7);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#DE7300").s().p("EgwJAvuQzmzmAA8IQAA8HTm0CQUCzmcHAAQcHAATnTmQUCUCAAcHQAAcI0CTmQznUC8HAAQ8HAA0C0Cg");
	this.shape_786.setTransform(397.8,197.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_767,p:{scaleX:1,scaleY:1,x:399.6,y:199.5}}]},629).to({state:[{t:this.shape_768}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_771}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_773}]},1).to({state:[{t:this.shape_774}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_776}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_778}]},1).to({state:[{t:this.shape_779}]},1).to({state:[{t:this.shape_780}]},1).to({state:[{t:this.shape_781}]},1).to({state:[{t:this.shape_782}]},1).to({state:[{t:this.shape_783}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_785}]},1).to({state:[{t:this.shape_786}]},1).to({state:[{t:this.shape_767,p:{scaleX:57.358,scaleY:57.358,x:397.7,y:197.5}}]},1).to({state:[{t:this.shape_767,p:{scaleX:57.358,scaleY:57.358,x:397.7,y:197.5}}]},10).to({state:[]},677).wait(8));

	// subtexts
	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#000000").s().p("AABBBQgGgCgFgGQgDgFgCgIQgCgHAAgJIAAg2IgfAAIAAgHIAfgBIABghIAIAAIAAAhIA0AAIAAAIIg0AAIAAA3IABANQABAGADAEQADAEAFACQAGACAIAAQAIAAAGgBIANgEIADAHQgIADgHACQgHABgJAAQgLAAgGgDg");
	this.shape_787.setTransform(234,89.1);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#000000").s().p("AAiA0IAAg9QAAgIgCgHQgBgGgEgEQgDgEgGgCQgFgCgIAAIgJABIgJAEQgIAFgMAMIAABIIgJAAIAAhkIAIAAIABATIABAAQAJgKAJgFIAKgFQAEgCAHAAQAJAAAGADQAIACAEAFQAFAFABAIQADAIAAAKIAAA+g");
	this.shape_788.setTransform(221.4,90.5);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#000000").s().p("AgPAyQgJgEgHgHQgIgHgDgJIgEgLIgBgMQAAgLAFgKQAEgJAGgHQAIgIAJgDQAIgEAJAAQALAAAIAEQAIACAHAHQAGAGADAIQADAJAAALIgBAGIhUAAQAAALADAIQAEAIAGAGQAGAGAIACQAIADAIAAQAKAAAJgDQAHgCAIgGIAEAHQgJAFgHAEQgLADgMAAQgJAAgLgDgAAngGQAAgJgDgHQgDgHgFgGQgEgEgHgDQgGgCgIAAQgHAAgGACQgIADgFAFQgGAFgDAHQgEAIgBAIIBMAAIAAAAg");
	this.shape_789.setTransform(208.7,90.6);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#000000").s().p("AAoA0IAAhHQAAgMgDgFQgEgGgHAAQgGAAgFAFQgFAEgGAKIAABLIgIAAIAAhHQAAgMgDgFQgEgGgGAAQgIAAgEAFQgFAEgFAKIAABLIgKAAIAAhkIAIAAIABAOIABAAQAEgJAGgDQAFgFAIAAQAIAAAFAFQAEAEACAJQAGgJAFgEQAGgFAIAAQAFAAAEACQAEACADAEQADAEABAFQABAGAAAIIAABIg");
	this.shape_790.setTransform(196.2,90.5);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#000000").s().p("AgsBKIAAiRIAIAAIABAPIAAAAQAJgIAJgFQAKgEAJAAQAKAAAJADQAIAEAFAGQAGAIACAJQADAJAAAMQAAANgEAJQgEAKgGAHQgGAHgJAEQgJAEgIAAQgIAAgJgEQgJgEgIgHIAAAAIAAAVIAAAkgAgQg9QgJAFgKAKIAAA2QAIAIAKAEQAIAEAIAAQAGAAAIgEQAHgDAFgHQAFgFADgIQACgJAAgKQAAgJgCgIQgCgIgEgGQgEgGgHgDQgHgDgJAAQgGAAgKAEg");
	this.shape_791.setTransform(183.8,92.8);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#000000").s().p("AgSAyQgJgEgGgHQgIgHgDgJQgEgLAAgMQAAgLAEgKQADgKAIgHQAGgGAJgEQAJgEAJAAQAKAAAJAEQAIAEAIAGQAGAHAEAKQAEAKAAALQAAAMgEALQgEAJgGAHQgIAHgIAEQgJADgKAAQgJAAgJgDgAgPgoQgHADgFAGQgFAGgDAIQgDAIAAAJQAAAKADAIQADAIAFAHQAFAGAHADQAIADAHAAQAJAAAGgDQAIgDAFgGQAGgHACgIQADgIAAgKQAAgJgDgIQgCgIgGgGQgFgGgIgDQgGgEgJAAQgHAAgIAEg");
	this.shape_792.setTransform(170.8,90.6);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#000000").s().p("AAIBLQgFgCgDgEQgEgEgCgGQgCgHAAgIIAAhwIglAAIAAgIIAtAAIAAB5QAAAGACAEQABAFADADQADADAEABQAEACAFAAIAKgCIALgEIADAHIgMAFQgGACgHAAQgHAAgGgCg");
	this.shape_793.setTransform(158.4,88.2);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#000000").s().p("AgPAyQgJgEgHgHQgIgHgDgJIgEgLIgBgMQAAgLAFgKQAEgJAGgHQAHgIAKgDQAIgEAJAAQALAAAIAEQAIACAHAHQAGAGADAIQADAJAAALIgBAGIhUAAQAAALADAIQAEAIAGAGQAGAGAIACQAIADAIAAQAKAAAJgDQAHgCAIgGIAEAHQgJAFgHAEQgLADgMAAQgJAAgLgDgAAngGQAAgJgDgHQgDgHgFgGQgEgEgHgDQgGgCgIAAQgHAAgGACQgIADgFAFQgGAFgDAHQgEAIgBAIIBMAAIAAAAg");
	this.shape_794.setTransform(145.7,90.6);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#000000").s().p("AgEAzIgthkIAJAAIAcA+IAMAdIABAAIAMgdIAcg+IAJAAIgtBkg");
	this.shape_795.setTransform(133,90.6);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#000000").s().p("AgPAyQgJgEgHgHQgIgHgEgJIgDgLIgBgMQAAgLAEgKQAFgJAGgHQAIgIAIgDQAJgEAJAAQALAAAIAEQAIACAHAHQAGAGADAIQADAJAAALIgBAGIhUAAQAAALADAIQAEAIAGAGQAGAGAIACQAIADAIAAQAKAAAJgDQAHgCAIgGIAEAHQgJAFgHAEQgLADgMAAQgJAAgLgDgAAngGQAAgJgDgHQgDgHgFgGQgEgEgHgDQgHgCgHAAQgHAAgGACQgIADgFAFQgGAFgDAHQgEAIgBAIIBMAAIAAAAg");
	this.shape_796.setTransform(120.5,90.6);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#000000").s().p("AguBFIAAiJIAgAAQAIAAAGABQAHABAGADIAKAGQAFADAEAEIAHAKIAFAMQADASAAAKQgBAUgCAIIgFAMQgDAGgEAEIgJAIIgKAGIgNAEIgOABgAgkA9IAVAAQAHAAAGgBIAKgDIAJgGIAIgHQAGgIADgMQADgLAAgNQAAgNgDgLQgDgLgGgIIgIgHIgJgGIgKgDIgNgBIgVAAg");
	this.shape_797.setTransform(108.2,88.7);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#000000").s().p("AgSBJQgJgEgIgGIAAAAIgBALIgIAAIAAiWIAJAAIAAAsIAAAWIAAAAQAIgIAKgFQAKgFAJAAQAKAAAJAEQAIADAFAHQAGAHACAIQADAKAAALQAAANgEAKQgDAKgHAHQgGAHgJAEQgIAEgJAAQgIAAgJgEgAgQgPQgJAEgKAKIAAA3QAIAHAKAEQAIAEAIAAQAGAAAIgEQAHgDAFgGQAFgGADgJQACgJAAgKQAAgJgCgIQgCgHgEgFQgEgHgHgDQgHgDgJAAQgGAAgKAFg");
	this.shape_798.setTransform(83,88.2);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#000000").s().p("AgPAyQgJgEgHgHQgIgHgEgJIgDgLIgBgMQAAgLAEgKQAFgJAGgHQAHgIAKgDQAIgEAJAAQALAAAIAEQAIACAHAHQAGAGADAIQADAJAAALIgBAGIhUAAQAAALADAIQAEAIAGAGQAGAGAIACQAIADAIAAQAKAAAJgDQAHgCAIgGIAEAHQgJAFgHAEQgLADgMAAQgJAAgLgDgAAngGQAAgJgDgHQgDgHgFgGQgEgEgHgDQgHgCgHAAQgHAAgGACQgIADgFAFQgGAFgDAHQgEAIgBAIIBMAAIAAAAg");
	this.shape_799.setTransform(70.1,90.6);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#000000").s().p("AAaBFIgUhBIgFgYIgBAAIgFAYIgTBBIgMAAIgXiJIAJAAIAQBdIADAhIABAAIAJghIARg5IAJAAIARA5IAJAhIABAAIAFghIANhdIAKAAIgWCJg");
	this.shape_800.setTransform(57.4,88.7);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#000000").s().p("AgXBKQgIgCgGgEQgGgEgDgFQgDgFAAgHQAAgHAEgFQAFgHAIgFIAAgBQgFgCgCgDQgEgFAAgGQAAgFAEgEQADgFAGgEIAAgBQgGgEgDgHQgDgGAAgJQAAgIADgGQACgHAGgEQAFgFAHgDQAHgDAHAAQAHAAAGADIAqAAIAAAIIgeAAQAFAFADAGQADAHAAAIQAAAHgDAGQgCAHgFAEQgGAGgGABQgHADgHAAQgKABgJgFQgFADgCADQgDADAAAEQAAAHAHAEQAGADALAAIAYAAIAQABQAHACAEACQAFADACAEQACAEAAAHQAAAGgEAGQgDAGgHAFQgHAFgKADQgKADgLAAQgMAAgJgCgAglAkQgDAFAAAGQAAAFACADQACAEAFAEIAMAEQAHACAJAAQAJAAAJgDQAIgCAGgEQAFgDAEgFQADgEAAgFQAAgFgCgCQgCgDgDgCQgGgDgOgBIgXAAQgJAAgGgBQgJAFgEAFgAgQhBQgFACgEAEQgEADgCAGQgCAFAAAGQAAAGACAGQACAEAEAEQAEAEAFACQAFACAGAAQAFAAAFgCQAFgCAEgEQAEgEACgEQACgGAAgGQAAgGgCgFQgCgGgEgDQgEgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_801.setTransform(158.6,130.5);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#000000").s().p("AATBJIAAhcIgxAAIAAgIIA6AAIAABkgAAPg2QgDgDAAgFQAAgEADgDQACgDAFAAQAEAAADADQACADAAAEQAAAFgCADQgDACgEAAQgFAAgCgCg");
	this.shape_802.setTransform(144.4,125.9);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#000000").s().p("AgKAzIgNgDQgLgEgLgHIAFgGQAKAGAJAEIANADIANABQAIAAAGgCQAFgBAEgDQAEgCACgEQACgEAAgEQgBgJgFgDIgKgGIgTgFQgJgBgHgCQgIgDgFgEQgFgDgDgEQgDgFAAgFQAAgFADgGQACgFAFgDQAFgDAHgCQAIgDAJAAQAKAAALAEQAKADAHAGIgFAHQgHgGgIgDQgJgDgJAAQgIAAgGACQgFABgEADQgDACgCAEQgBADAAADQAAAFACACQACADAEADQAGAEASAEIAWAFQAIADAFADQAEAEACAEQACAFAAAFQAAAHgDAEQgDAGgFADQgGAFgHABQgIADgKAAIgOgCg");
	this.shape_803.setTransform(132.9,128.2);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#000000").s().p("AgPAyQgJgEgHgHQgIgHgEgJIgDgLIgBgMQAAgLAEgKQAFgJAGgIQAIgGAIgEQAJgEAJAAQALAAAIAEQAIACAHAHQAGAFADAKQADAIAAALIgBAHIhUAAQAAAKADAJQAEAHAGAGQAGAFAIADQAIADAIAAQAKAAAJgDQAHgDAIgFIAEAHQgJAGgHADQgLADgMAAQgJAAgLgDgAAngFQAAgKgDgHQgDgHgFgGQgEgEgHgCQgHgDgHAAQgHAAgGADQgIADgFAEQgGAFgDAHQgEAIgBAJIBMAAIAAAAg");
	this.shape_804.setTransform(120.5,128.2);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#000000").s().p("AgPAyQgJgEgHgHQgIgHgEgJIgDgLIgBgMQAAgLAEgKQAFgJAGgIQAHgGAKgEQAIgEAJAAQALAAAIAEQAIACAHAHQAGAFADAKQADAIAAALIgBAHIhUAAQAAAKADAJQAEAHAGAGQAGAFAIADQAIADAIAAQAKAAAJgDQAHgDAIgFIAEAHQgJAGgHADQgLADgMAAQgJAAgLgDgAAngFQAAgKgDgHQgDgHgFgGQgEgEgHgCQgHgDgHAAQgHAAgGADQgIADgFAEQgGAFgDAHQgEAIgBAJIBMAAIAAAAg");
	this.shape_805.setTransform(70.1,128.2);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#000000").s().p("AAiA0IAAg9QAAgIgCgHQgBgGgEgEQgDgEgGgCQgFgCgIAAIgJABIgJAEQgIAFgMAMIAABIIgJAAIAAhkIAIAAIABATIABAAQAJgKAJgFIAKgFQAEgCAHAAQAJAAAGADQAIACAEAFQAFAFABAIQADAIAAAKIAAA+g");
	this.shape_806.setTransform(221.4,91);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#000000").s().p("AgPAxQgJgDgHgHQgIgHgDgKIgEgKIgBgMQAAgLAFgKQAEgJAGgIQAIgGAJgEQAIgEAJAAQALAAAIADQAIADAHAGQAGAHADAJQADAIAAALIgBAHIhUAAQAAAKADAJQAEAHAGAGQAGAFAIADQAIADAIAAQAKAAAJgDQAHgDAIgFIAEAHQgJAFgHADQgLAEgMAAQgJAAgLgEgAAngGQAAgJgDgIQgDgGgFgFQgEgFgHgDQgGgCgIAAQgHAAgGACQgIADgFAFQgGAFgDAHQgEAHgBAJIBMAAIAAAAg");
	this.shape_807.setTransform(208.7,91.1);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#000000").s().p("AgsBLIAAiSIAIAAIABAOIAAAAQAJgHAJgEQAKgFAJgBQAKAAAJAFQAIADAFAHQAGAHACAJQADAKAAALQAAAMgEAKQgEAKgGAHQgGAHgJAEQgJADgIAAQgIAAgJgDQgJgEgIgHIAAAAIAAAVIAAAlgAgQg8QgJAEgKAJIAAA4QAIAHAKAEQAIAEAIgBQAGABAIgEQAHgEAFgFQAFgHADgHQACgJAAgKQAAgKgCgHQgCgIgEgFQgEgHgHgDQgHgDgJAAQgGAAgKAFg");
	this.shape_808.setTransform(183.8,93.3);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#000000").s().p("AgSAxQgJgDgGgHQgIgHgDgKQgEgKAAgLQAAgMAEgLQADgJAIgHQAGgGAJgFQAJgDAJAAQAKAAAJADQAIAFAIAGQAGAHAEAJQAEALAAAMQAAALgEAKQgEAKgGAHQgIAHgIADQgJAEgKAAQgJAAgJgEgAgPgpQgHAEgFAGQgFAGgDAIQgDAJAAAJQAAAJADAJQADAHAFAGQAFAHAHACQAIAEAHAAQAJAAAGgEQAIgCAFgHQAGgGACgHQADgJAAgJQAAgJgDgJQgCgIgGgGQgFgGgIgEQgGgCgJAAQgHAAgIACg");
	this.shape_809.setTransform(170.8,91.1);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#000000").s().p("AgPAxQgJgDgHgHQgIgHgDgKIgEgKIgBgMQAAgLAFgKQAEgJAGgIQAHgGAKgEQAIgEAJAAQALAAAIADQAIADAHAGQAGAHADAJQADAIAAALIgBAHIhUAAQAAAKADAJQAEAHAGAGQAGAFAIADQAIADAIAAQAKAAAJgDQAHgDAIgFIAEAHQgJAFgHADQgLAEgMAAQgJAAgLgEgAAngGQAAgJgDgIQgDgGgFgFQgEgFgHgDQgGgCgIAAQgHAAgGACQgIADgFAFQgGAFgDAHQgEAHgBAJIBMAAIAAAAg");
	this.shape_810.setTransform(145.7,91.1);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#000000").s().p("AgEAyIgthkIAJAAIAcA/IAMAdIABAAIAMgdIAcg/IAJAAIgtBkg");
	this.shape_811.setTransform(133,91.1);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#000000").s().p("AgPAxQgJgDgHgHQgIgHgEgKIgDgKIgBgMQAAgLAEgKQAFgJAGgIQAIgGAIgEQAJgEAJAAQALAAAIADQAIADAHAGQAGAHADAJQADAIAAALIgBAHIhUAAQAAAKADAJQAEAHAGAGQAGAFAIADQAIADAIAAQAKAAAJgDQAHgDAIgFIAEAHQgJAFgHADQgLAEgMAAQgJAAgLgEgAAngGQAAgJgDgIQgDgGgFgFQgEgFgHgDQgHgCgHAAQgHAAgGACQgIADgFAFQgGAFgDAHQgEAHgBAJIBMAAIAAAAg");
	this.shape_812.setTransform(120.5,91.1);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#000000").s().p("AguBFIAAiJIAgAAQAIAAAGABQAHABAGADIAKAGQAFADAEAEIAHAKIAFAMQADASAAAKQgBAUgCAIIgFAMQgDAGgEAEIgJAIIgKAGIgNAEIgOABgAgkA9IAVAAQAHAAAGgBIAKgDIAJgGIAIgHQAGgIADgMQADgLAAgNQAAgNgDgLQgDgLgGgIIgIgHIgJgGIgKgDIgNgBIgVAAg");
	this.shape_813.setTransform(108.2,89.2);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#000000").s().p("AgSBJQgJgEgIgGIAAAAIgBALIgIAAIAAiWIAJAAIAAAsIAAAWIAAAAQAIgIAKgFQAKgFAJAAQAKAAAJAEQAIADAFAHQAGAHACAIQADAKAAALQAAANgEAKQgDAKgHAHQgGAHgJAEQgIAEgJAAQgIAAgJgEgAgQgPQgJAEgKAKIAAA3QAIAHAKAEQAIAEAIAAQAGAAAIgEQAHgDAFgGQAFgGADgJQACgJAAgKQAAgJgCgIQgCgHgEgFQgEgHgHgDQgHgDgJAAQgGAAgKAFg");
	this.shape_814.setTransform(83,88.7);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#000000").s().p("AgPAxQgJgDgHgHQgIgHgEgKIgDgKIgBgMQAAgLAEgKQAFgJAGgIQAHgGAKgEQAIgEAJAAQALAAAIADQAIADAHAGQAGAHADAJQADAIAAALIgBAHIhUAAQAAAKADAJQAEAHAGAGQAGAFAIADQAIADAIAAQAKAAAJgDQAHgDAIgFIAEAHQgJAFgHADQgLAEgMAAQgJAAgLgEgAAngGQAAgJgDgIQgDgGgFgFQgEgFgHgDQgHgCgHAAQgHAAgGACQgIADgFAFQgGAFgDAHQgEAHgBAJIBMAAIAAAAg");
	this.shape_815.setTransform(70.1,91.1);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#000000").s().p("AAaBFIgUhBIgFgYIgBAAIgFAYIgTBBIgMAAIgXiJIAJAAIAQBdIADAhIABAAIAJghIARg5IAJAAIARA5IAJAhIABAAIAFghIANhdIAKAAIgWCJg");
	this.shape_816.setTransform(57.4,89.2);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#000000").s().p("AgXBKQgIgCgGgEQgGgEgDgFQgDgGAAgGQAAgHAEgFQAFgHAIgFIAAgBQgFgCgCgDQgEgFAAgGQAAgFAEgEQADgFAGgEIAAgBQgGgEgDgHQgDgGAAgJQAAgIADgGQACgHAGgEQAFgGAHgCQAHgDAHAAQAHAAAGADIAqAAIAAAIIgeAAQAFAFADAGQADAHAAAHQAAAIgDAGQgCAHgFAEQgGAGgGABQgHADgHAAQgKABgJgFQgFADgCADQgDADAAAEQAAAHAHAEQAGADALAAIAYAAIAQABQAHACAEACQAFADACAEQACAEAAAGQAAAHgEAHQgDAFgHAFQgHAFgKADQgKADgLAAQgMAAgJgCgAglAkQgDAFAAAGQAAAFACAEQACAEAFADIAMAEQAHABAJAAQAJAAAJgCQAIgCAGgEQAFgEAEgEQADgEAAgFQAAgFgCgCQgCgDgDgCQgGgDgOAAIgXAAQgJgBgGgBQgJAFgEAFgAgQhBQgFACgEAEQgEADgCAGQgCAFAAAGQAAAGACAGQACAFAEADQAEAEAFACQAFACAGAAQAFAAAFgCQAFgCAEgEQAEgDACgFQACgGAAgGQAAgGgCgFQgCgGgEgDQgEgEgFgCQgFgCgFAAQgGAAgFACg");
	this.shape_817.setTransform(209,165.5);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#000000").s().p("AgKA0IgNgEQgLgEgLgHIAFgGQAKAGAJAEIANADIANABQAIAAAGgCQAFgBAEgDQAEgCACgEQACgEAAgEQgBgJgFgDIgKgGIgTgFQgJgBgHgCQgIgDgFgEQgFgDgDgEQgDgFAAgFQAAgGADgFQACgEAFgEQAFgDAHgCQAIgDAJAAQAKAAALAEQAKADAHAGIgFAHQgHgGgIgDQgJgDgJAAQgIAAgGABQgFACgEADQgDACgCAEQgBADAAADQAAAFACACQACADAEADQAGADASAFIAWAFQAIADAFAEQAEADACAFQACAEAAAFQAAAGgDAFQgDAGgFADQgGAFgHACQgIACgKAAIgOgBg");
	this.shape_818.setTransform(183.3,163.2);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#000000").s().p("AgPAyQgJgEgHgHQgIgHgEgJIgDgLIgBgMQAAgLAEgKQAFgJAGgHQAHgHAJgEQAJgEAJAAQALAAAIAEQAIACAHAHQAGAGADAIQADAJAAALIgBAGIhUAAQAAALADAJQAEAHAGAGQAGAFAIADQAIADAIAAQAKAAAJgDQAHgDAIgFIAEAHQgJAGgHADQgLADgMAAQgJAAgLgDgAAngFQAAgKgDgHQgDgHgFgGQgEgEgHgCQgHgDgHAAQgHAAgGADQgIADgFAEQgGAFgDAHQgEAIgBAJIBMAAIAAAAg");
	this.shape_819.setTransform(170.9,163.2);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#000000").s().p("AgNAyQgKgEgHgHQgIgHgEgJQgDgHgBgQQAAgHAEgOQAFgKAHgHQAIgGAKgEQAKgEAKAAQAIAAANAFQAIAEAHAGIgFAHQgHgHgHgDQgIgEgJAAQgJAAgIAEQgIADgHAGQgGAGgDAIQgDAJAAAIQAAAKADAIQADAIAGAHQAGAFAJAEQAIADAJAAQAKAAAJgEQAIgEAHgGIAFAGQgIAHgKAFQgOAEgHAAQgLAAgKgDg");
	this.shape_820.setTransform(133.2,163.2);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#000000").s().p("AATBJIAAhcIgxAAIAAgIIA6AAIAABkgAAPg2QgDgDAAgFQAAgEADgDQACgDAFAAQAEAAADADQACADAAAEQAAAFgCADQgDACgEAAQgFAAgCgCg");
	this.shape_821.setTransform(119.2,160.9);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#000000").s().p("AAiBMIAAg+QAAgJgCgFQgBgGgEgEQgDgFgGgBQgFgDgIAAIgJACIgJAEQgIAFgMALIAABJIgJAAIAAiXIAJAAIAAAsIAAAbIAAAAQAKgLAJgGQAFgDAFgBQAFgCAGAAQAJAAAGADQAIACAEAFQAFAFABAIQADAGAAALIAAA/g");
	this.shape_822.setTransform(108,160.7);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#000000").s().p("AgsBKIAAiRIAIAAIABAPIAAAAQAJgIAJgFQAKgEAJAAQAKAAAJADQAIAEAFAGQAGAIACAJQADAJAAAMQAAAMgEAKQgEAKgGAHQgGAHgJAEQgJAEgIAAQgIAAgJgEQgJgEgIgHIAAAAIAAAVIAAAkgAgQg9QgJAFgKAKIAAA2QAIAIAKAEQAIADAIABQAGgBAIgDQAHgDAFgHQAFgFADgIQACgIAAgLQAAgKgCgHQgCgIgEgGQgEgGgHgDQgHgDgJAAQgGAAgKAEg");
	this.shape_823.setTransform(95.6,165.3);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#000000").s().p("AgUA0QgHgCgFgEQgFgDgCgGQgDgFAAgHQAAgIAEgHQAEgFAKgFQAJgEAPgDQANgDAVgBQAAgIgCgEQgBgHgEgEQgDgEgGgDQgGgDgIAAIgKABIgLAEQgJAEgHAFIgFgHQAIgGAKgEIANgDIAMgCQAKAAAHADQAHADAFAGQAFAEACAIQACAHAAAIIAABAIgIAAIgBgQIAAAAQgKAIgKAFQgOAFgHAAQgHAAgGgBgAACAAQgMACgIAEQgIADgEAFQgDAFAAAGQAAAFACAEQACAEAFADQAFADANABQAJAAAKgEQAKgFALgJIAAgfQgTABgNADg");
	this.shape_824.setTransform(82.5,163.2);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#000000").s().p("AgmA0IAAhkIAIAAIACAZIAJgLQAFgFAGgEQAGgEAGgCQAHgCAHAAIALABQAFABAFADIgDAIQgKgEgJAAQgGAAgGACQgGACgFADQgGAEgFAGQgGAGgFAJIAAA+g");
	this.shape_825.setTransform(70.9,163);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#000000").s().p("AgDBGIgLgDIgKgGIgIgJQgEgEgDgGIgFgMQgCgJgCgVQAAgKAEgTIAGgMIAHgKQADgFAFgEIAKgGQAGgCAGgBQAFgCAHAAQAJAAANAGQAIAEAHAHIgGAGQgGgGgHgEQgIgEgKAAQgLAAgJAEQgJAFgGAIQgHAIgDAMQgEALAAAOQAAAOADAMQAEALAGAJQAGAIAJAEQAJAFALAAQAJAAAIgDQAIgDAFgFIAAgrIggAAIAAgIIApAAIAAA3QgHAHgKAEQgOAFgJAAQgHAAgFgCg");
	this.shape_826.setTransform(57.2,161.3);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#000000").s().p("AATBJIAAhcIgxAAIAAgIIA6AAIAABkgAAPg2QgDgDAAgFQAAgEADgDQACgDAFAAQAEAAADADQACADAAAEQAAAFgCADQgDACgEAAQgFAAgCgCg");
	this.shape_827.setTransform(144.4,125.9);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#000000").s().p("AAiA0IAAg9QAAgIgCgHQgBgGgEgEQgDgEgGgCQgFgCgIAAIgJABIgJAEQgIAFgMAMIAABIIgJAAIAAhkIAIAAIABATIABAAQAJgKAJgFIAKgFQAEgCAHAAQAJAAAGADQAIACAEAFQAFAFABAIQADAIAAAKIAAA+g");
	this.shape_828.setTransform(221.4,91);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#000000").s().p("AguBFIAAiJIAgAAQAIAAAGABQAHABAGADIAKAGQAFADAEAEIAHAKIAFAMQADASAAAKQgBAUgCAIIgFAMQgDAGgEAEIgJAIIgKAGIgNAEIgOABgAgkA9IAVAAQAHAAAGgBIAKgDIAJgGIAIgHQAGgIADgMQADgLAAgNQAAgNgDgLQgDgLgGgIIgIgHIgJgGIgKgDIgNgBIgVAAg");
	this.shape_829.setTransform(108.2,89.2);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#000000").s().p("AgSAyQgJgEgGgHQgIgHgDgJQgEgLAAgMQAAgLAEgKQADgKAIgHQAGgHAJgDQAJgEAJAAQAKAAAJAEQAIADAIAHQAGAHAEAKQAEAKAAALQAAAMgEALQgEAJgGAHQgIAHgIAEQgJADgKAAQgJAAgJgDgAgPgoQgHADgFAGQgGAGgCAIQgDAJAAAIQAAAKADAIQACAJAGAFQAFAGAHADQAIAEAHAAQAJAAAGgEQAIgDAFgGQAGgFACgJQADgIAAgKQAAgIgDgJQgCgIgGgGQgFgGgIgDQgGgDgJgBQgHABgIADg");
	this.shape_830.setTransform(259,197.5);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#000000").s().p("AgUAzQgHgBgFgDQgFgEgCgFQgDgGAAgHQAAgIAEgGQAEgGAKgFQAJgEAPgDQANgDAVgCQAAgHgCgEQgBgHgEgEQgDgFgGgCQgGgDgIAAIgKACIgLADQgJAEgHAFIgFgHQAIgGAKgEIANgDIAMgCQAKAAAHADQAHADAFAGQAFAEACAIQACAHAAAIIAABAIgIAAIgBgQIAAAAQgKAIgKAFQgOAFgHAAQgHAAgGgCgAACAAQgMACgIAEQgIADgEAFQgDAFAAAGQAAAFACAEQACAEAFADQAFADANABQAJAAAKgEQAKgFALgJIAAgfQgTABgNADg");
	this.shape_831.setTransform(221.1,197.5);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#000000").s().p("AArBFIgPgvIg2AAIgRAvIgJAAIAwiJIAJAAIAxCJgAAYAOIgIgZQgKgcgFgUIgBAAIgPAwIgIAZIAvAAg");
	this.shape_832.setTransform(170.8,195.6);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#000000").s().p("AgmA0IAAhkIAIAAIACAZIAJgLQAFgFAGgEQAGgEAGgCQAHgCAHAAIALABQAFABAFADIgDAIQgKgEgJAAIgMACQgGACgFADQgGAEgFAGQgGAGgFAJIAAA+g");
	this.shape_833.setTransform(146.5,197.3);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#000000").s().p("AgPAyQgJgEgHgHQgIgHgEgJIgDgLIgBgMQAAgLAEgKQAFgJAGgIQAHgGAJgEQAJgEAJAAQALAAAIAEQAIACAHAHQAGAFADAKQADAIAAALIgBAHIhUAAQAAAKADAJQAEAHAGAGQAGAFAIADQAIADAIAAQAKAAAJgDQAHgDAIgFIAEAHQgJAGgHADQgLADgMAAQgJAAgLgDgAAngFQAAgKgDgHQgDgIgFgFQgEgEgHgCQgHgDgHAAQgHAAgGADQgIADgFAEQgGAFgDAHQgEAIgBAJIBMAAIAAAAg");
	this.shape_834.setTransform(133.1,197.5);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#000000").s().p("AABBBQgGgCgFgGQgDgFgCgIQgCgHAAgJIAAg2IgfAAIAAgHIAfgBIABghIAIAAIAAAhIA0AAIAAAIIg0AAIAAA3IABANQABAGADAEQADAEAFACQAGACAIAAQAIAAAGgBIANgEIADAHQgIADgHACQgHABgJAAQgLAAgGgDg");
	this.shape_835.setTransform(120.6,195.9);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#000000").s().p("AgWAxQgHgCgEgFQgEgFgDgIQgCgIAAgKIAAg+IAJAAIAAA9QAAAIACAHQACAGADAEQADAEAGACQAFACAIAAIAJgBQAFgBAEgDQAGgEANgOIAAhHIAKAAIAABkIgIAAIgBgTIgBAAQgJAKgJAGIgKAEQgFACgGAAQgJAAgHgDg");
	this.shape_836.setTransform(107.6,197.6);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#000000").s().p("AgsBLIAAiSIAIAAIABAPIAAAAQAJgIAJgEQAKgGAJAAQAKABAJADQAIAEAFAHQAGAGACAKQADAKAAALQAAAMgEAKQgEAKgGAHQgGAHgJAEQgJADgIABQgIgBgJgDQgJgEgIgHIAAAAIAAAVIAAAlgAgQg9QgJAFgKAJIAAA3QAIAIAKAEQAIADAIABQAGgBAIgDQAHgDAFgHQAFgFADgIQACgIAAgLQAAgJgCgIQgCgIgEgGQgEgGgHgDQgHgDgJAAQgGAAgKAEg");
	this.shape_837.setTransform(95.6,199.6);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#000000").s().p("AAoA0IAAhHQAAgMgDgFQgEgGgHAAQgGAAgFAFQgFAEgGAKIAABLIgIAAIAAhHQAAgMgDgFQgEgGgGAAQgIAAgEAFQgFAEgFAKIAABLIgKAAIAAhkIAIAAIABAOIABAAQAEgJAGgDQAFgFAIAAQAIAAAFAFQAEAEACAJQAGgJAFgEQAGgFAIAAQAFAAAEACQAEACADAEQADAEABAFQABAGAAAIIAABIg");
	this.shape_838.setTransform(82.8,197.3);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#000000").s().p("AgSAyQgJgEgGgHQgIgHgDgJQgEgLAAgMQAAgLAEgKQADgKAIgHQAGgHAJgDQAJgEAJAAQAKAAAJAEQAIADAIAHQAGAHAEAKQAEAKAAALQAAAMgEALQgEAJgGAHQgIAHgIAEQgJADgKAAQgJAAgJgDgAgOgoQgIADgFAGQgGAGgCAIQgDAJAAAIQAAAKADAIQACAJAGAFQAFAGAIADQAHAEAHAAQAJAAAGgEQAIgDAFgGQAGgFACgJQADgIAAgKQAAgIgDgJQgCgIgGgGQgFgGgIgDQgGgDgJgBQgHABgHADg");
	this.shape_839.setTransform(70,197.5);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#000000").s().p("AgDBGQgGgBgFgCIgKgGIgIgJQgEgEgDgGIgFgMIgEgOIgBgQQAAgKAFgTIAFgMIAHgKIAIgJIAKgGIAMgDQAFgCAHAAQAIAAANAFQAJAFAGAHIgGAGQgGgGgHgEQgIgEgJAAQgKAAgKAEQgJAFgGAIQgHAIgDAMQgEALAAAOQAAAOAEAMQADALAHAJQAGAIAJAEQAJAFAKAAQALAAAIgEQAIgEAIgJIAGAGQgLALgHADQgFADgGABQgGACgHAAIgLgCg");
	this.shape_840.setTransform(57.5,195.6);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#000000").s().p("AATBJIAAhcIgxAAIAAgIIA6AAIAABkgAAPg2QgDgDAAgFQAAgEADgDQACgDAFAAQAEAAADADQACADAAAEQAAAFgCADQgDACgEAAQgFAAgCgCg");
	this.shape_841.setTransform(119.2,160.9);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#000000").s().p("AAiA0IAAg9QAAgIgCgHQgBgGgEgEQgDgEgGgCQgFgCgIAAIgJABIgJAEQgIAFgMAMIAABIIgJAAIAAhkIAIAAIABATIABAAQAJgKAJgFIAKgFQAEgCAHAAQAJAAAGADQAIACAEAFQAFAFABAIQADAIAAAKIAAA+g");
	this.shape_842.setTransform(171,128);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#000000").s().p("AATBJIAAhcIgxAAIAAgIIA6AAIAABkgAAPg2QgDgDAAgFQAAgEADgDQACgDAFAAQAEAAADADQACADAAAEQAAAFgCADQgDACgEAAQgFAAgCgCg");
	this.shape_843.setTransform(144.4,125.9);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#000000").s().p("AABBBQgGgCgFgGQgDgFgCgIQgCgHAAgJIAAg2IgfAAIAAgHIAfgBIABghIAIAAIAAAhIA0AAIAAAIIg0AAIAAA3IABANQABAGADAEQADAEAFACQAGACAIAAQAIAAAGgBIANgEIADAHQgIADgHACQgHABgJAAQgLAAgGgDg");
	this.shape_844.setTransform(234,89.6);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#000000").s().p("AAiA0IAAg9QAAgIgCgHQgBgGgEgEQgDgEgGgCQgFgCgIAAIgJABIgJAEQgIAFgMAMIAABIIgJAAIAAhkIAIAAIABATIABAAQAJgKAJgFIAKgFQAEgCAHAAQAJAAAGADQAIACAEAFQAFAFABAIQADAIAAAKIAAA+g");
	this.shape_845.setTransform(221.4,91);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#000000").s().p("AAoA0IAAhHQAAgMgDgFQgEgGgHAAQgGAAgFAFQgFAEgGAKIAABLIgIAAIAAhHQAAgMgDgFQgEgGgGAAQgIAAgEAFQgFAEgFAKIAABLIgKAAIAAhkIAIAAIABAOIABAAQAEgJAGgDQAFgFAIAAQAIAAAFAFQAEAEACAJQAGgJAFgEQAGgFAIAAQAFAAAEACQAEACADAEQADAEABAFQABAGAAAIIAABIg");
	this.shape_846.setTransform(196.2,91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_800,p:{y:88.7}},{t:this.shape_799},{t:this.shape_798,p:{y:88.2}},{t:this.shape_797,p:{y:88.7,x:108.2}},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793,p:{y:88.2}},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790,p:{y:90.5,x:196.2}},{t:this.shape_789},{t:this.shape_788,p:{x:221.4,y:90.5}},{t:this.shape_787,p:{y:89.1}}]},518).to({state:[{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813,p:{y:89.2}},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_793,p:{y:88.7}},{t:this.shape_809},{t:this.shape_808},{t:this.shape_790,p:{y:91,x:196.2}},{t:this.shape_807},{t:this.shape_806,p:{x:221.4,y:91}},{t:this.shape_787,p:{y:89.6}},{t:this.shape_800,p:{y:126.3}},{t:this.shape_805},{t:this.shape_798,p:{y:125.8}},{t:this.shape_797,p:{y:126.3,x:108.2}},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802,p:{x:144.4,y:125.9}},{t:this.shape_801},{t:this.shape_788,p:{x:171,y:128}}]},6).to({state:[{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_829},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_793,p:{y:88.7}},{t:this.shape_809},{t:this.shape_808},{t:this.shape_790,p:{y:91,x:196.2}},{t:this.shape_807},{t:this.shape_828,p:{y:91}},{t:this.shape_787,p:{y:89.6}},{t:this.shape_800,p:{y:126.3}},{t:this.shape_805},{t:this.shape_798,p:{y:125.8}},{t:this.shape_813,p:{y:126.3}},{t:this.shape_804},{t:this.shape_803},{t:this.shape_827,p:{x:144.4,y:125.9}},{t:this.shape_801},{t:this.shape_806,p:{x:171,y:128}},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821,p:{x:119.2,y:160.9}},{t:this.shape_820},{t:this.shape_797,p:{y:161.3,x:158.6}},{t:this.shape_819},{t:this.shape_818},{t:this.shape_802,p:{x:194.8,y:160.9}},{t:this.shape_817},{t:this.shape_788,p:{x:221.4,y:163}}]},6).to({state:[{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_829},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_793,p:{y:88.7}},{t:this.shape_809},{t:this.shape_808},{t:this.shape_846},{t:this.shape_807},{t:this.shape_845},{t:this.shape_844},{t:this.shape_800,p:{y:126.3}},{t:this.shape_805},{t:this.shape_798,p:{y:125.8}},{t:this.shape_813,p:{y:126.3}},{t:this.shape_804},{t:this.shape_803},{t:this.shape_843},{t:this.shape_801},{t:this.shape_842},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_841},{t:this.shape_820},{t:this.shape_797,p:{y:161.3,x:158.6}},{t:this.shape_819},{t:this.shape_818},{t:this.shape_827,p:{x:194.8,y:160.9}},{t:this.shape_817},{t:this.shape_828,p:{y:163}},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_806,p:{x:183.6,y:197.3}},{t:this.shape_821,p:{x:194.8,y:195.2}},{t:this.shape_790,p:{y:197.3,x:208.8}},{t:this.shape_831},{t:this.shape_787,p:{y:195.9}},{t:this.shape_802,p:{x:245.2,y:195.2}},{t:this.shape_830},{t:this.shape_788,p:{x:271.8,y:197.3}}]},6).to({state:[]},114).wait(694));

	// Curs_highlight
	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#FFFFFF").s().p("AvtCGIAAkLIfbAAIAAELg");
	this.shape_847.setTransform(141.7,90.5);
	this.shape_847._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_847).wait(544).to({_off:false},0).wait(8).to({y:128.5},0).wait(16).to({y:162.5},0).wait(8).to({scaleX:1.21,x:163.1,y:197.5},0).wait(5).to({scaleX:1,x:141.7,y:90.5},0).to({_off:true},69).wait(694));

	// Lines2
	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("#000000").ss(1,1,1).p("ABkAAIjHAA");
	this.shape_848.setTransform(31,26);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f().s("#000000").ss(1,1,1).p("AAAlgIAALB");
	this.shape_849.setTransform(21,61.3);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("#000000").ss(1,1,1).p("AhjAAIDHAA");
	this.shape_850.setTransform(31.1,96.1);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f().s("#000000").ss(1,1,1).p("AAAiuIAAFd");
	this.shape_851.setTransform(21.1,113.6);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#000000").ss(1,1,1).p("AAAi4IAAFx");
	this.shape_852.setTransform(21.1,114.6);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f().s("#000000").ss(1,1,1).p("AhjAAIDHAA");
	this.shape_853.setTransform(31.1,96.1);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("#000000").ss(1,1,1).p("AAAizIAAFn");
	this.shape_854.setTransform(21.1,151.1);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f().s("#000000").ss(1,1,1).p("AhjAAIDHAA");
	this.shape_855.setTransform(31.1,96.1);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("#000000").ss(1,1,1).p("AAAiaIAAE1");
	this.shape_856.setTransform(21.1,184.6);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f().s("#000000").ss(1,1,1).p("AAAinIAAFP");
	this.shape_857.setTransform(21.1,185.8);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("#000000").ss(1,1,1).p("AhjAAIDHAA");
	this.shape_858.setTransform(31.1,96.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_848}]},509).to({state:[{t:this.shape_848},{t:this.shape_849}]},3).to({state:[{t:this.shape_848},{t:this.shape_849},{t:this.shape_850,p:{y:96.1,x:31.1}}]},3).to({state:[{t:this.shape_848},{t:this.shape_849},{t:this.shape_850,p:{y:96.1,x:31.1}},{t:this.shape_851}]},3).to({state:[{t:this.shape_848},{t:this.shape_849},{t:this.shape_853,p:{y:96.1}},{t:this.shape_852},{t:this.shape_850,p:{y:133.1,x:31.1}}]},3).to({state:[{t:this.shape_848},{t:this.shape_849},{t:this.shape_853,p:{y:96.1}},{t:this.shape_852},{t:this.shape_850,p:{y:133.1,x:31.1}},{t:this.shape_854}]},3).to({state:[{t:this.shape_848},{t:this.shape_849},{t:this.shape_855,p:{y:96.1}},{t:this.shape_852},{t:this.shape_853,p:{y:133.1}},{t:this.shape_854},{t:this.shape_850,p:{y:169.1,x:31.1}}]},3).to({state:[{t:this.shape_848},{t:this.shape_849},{t:this.shape_855,p:{y:96.1}},{t:this.shape_852},{t:this.shape_853,p:{y:133.1}},{t:this.shape_854},{t:this.shape_856},{t:this.shape_850,p:{y:169.1,x:31}}]},3).to({state:[{t:this.shape_848},{t:this.shape_849},{t:this.shape_858},{t:this.shape_852},{t:this.shape_855,p:{y:133.1}},{t:this.shape_854},{t:this.shape_857},{t:this.shape_853,p:{y:203.1}},{t:this.shape_850,p:{y:169.1,x:31.1}}]},3).to({state:[]},117).wait(694));

	// Lines
	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f().s("#000000").ss(1,1,1).p("AHMABIqngBIjwAB");
	this.shape_859.setTransform(516.2,144);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#000000").ss(1,1,1).p("AHMABIjiAAInFgBIjwAB");
	this.shape_860.setTransform(516.2,144);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f().s("#000000").ss(1,1,1).p("AnJgrIDtgBIHEBZIDjAA");
	this.shape_861.setTransform(516.3,139.6);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("#000000").ss(1,1,1).p("AnIhXIDqgBIHECxIDjAA");
	this.shape_862.setTransform(516.5,135.2);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f().s("#000000").ss(1,1,1).p("AnHiDIDngBIHFEJIDiAA");
	this.shape_863.setTransform(516.6,130.7);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("#000000").ss(1,1,1).p("AnFiwIDkAAIHFFhIDiAA");
	this.shape_864.setTransform(516.8,126.3);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f().s("#000000").ss(1,1,1).p("AnEjcIDhgBIHFG7IDjAA");
	this.shape_865.setTransform(516.9,121.9);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("#000000").ss(1,1,1).p("AnCkIIDegBIHFITIDiAA");
	this.shape_866.setTransform(517.1,117.5);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f().s("#000000").ss(1,1,1).p("AnAk1IDaAAIHFJrIDiAA");
	this.shape_867.setTransform(517.2,113.1);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("#000000").ss(1,1,1).p("Am/lhIDXAAIHFLDIDjAA");
	this.shape_868.setTransform(517.4,108.6);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f().s("#000000").ss(1,1,1).p("Am9mNIDUgBIHFMdIDiAA");
	this.shape_869.setTransform(517.5,104.2);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("#000000").ss(1,1,1).p("Am8m6IDRAAIHFN1IDjAA");
	this.shape_870.setTransform(517.7,99.8);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f().s("#000000").ss(1,1,1).p("Am6nmIDOAAIHFPNIDiAA");
	this.shape_871.setTransform(517.8,95.4);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("#000000").ss(1,1,1).p("Am5oSIDLAAIHFQlIDjAA");
	this.shape_872.setTransform(518,91);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f().s("#000000").ss(1,1,1).p("AG4I/IjiAAInFx9IjIAA");
	this.shape_873.setTransform(518.1,86.5);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("#000000").ss(1,1,1).p("Anuo+IDIAAIIyR9IDiAA");
	this.shape_874.setTransform(512.7,86.5);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f().s("#000000").ss(1,1,1).p("Aoko+IDIAAIKfR9IDiAA");
	this.shape_875.setTransform(507.3,86.5);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("#000000").ss(1,1,1).p("Apao+IDIAAIMLR9IDiAA");
	this.shape_876.setTransform(501.8,86.5);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f().s("#000000").ss(1,1,1).p("AqRo+IDIAAIN4R9IDjAA");
	this.shape_877.setTransform(496.4,86.5);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("#000000").ss(1,1,1).p("ArHo+IDIAAIPlR9IDiAA");
	this.shape_878.setTransform(491,86.5);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f().s("#000000").ss(1,1,1).p("Ar9o+IDIAAIRRR9IDiAA");
	this.shape_879.setTransform(485.5,86.5);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("#000000").ss(1,1,1).p("As0o+IDIAAIS+R9IDjAA");
	this.shape_880.setTransform(480.1,86.5);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f().s("#000000").ss(1,1,1).p("ANrI/IjiAAI0rx9IjIAA");
	this.shape_881.setTransform(474.6,86.5);
	this.shape_881._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_859}]},485).to({state:[{t:this.shape_860}]},3).to({state:[{t:this.shape_861}]},1).to({state:[{t:this.shape_862}]},1).to({state:[{t:this.shape_863}]},1).to({state:[{t:this.shape_864}]},1).to({state:[{t:this.shape_865}]},1).to({state:[{t:this.shape_866}]},1).to({state:[{t:this.shape_867}]},1).to({state:[{t:this.shape_868}]},1).to({state:[{t:this.shape_869}]},1).to({state:[{t:this.shape_870}]},1).to({state:[{t:this.shape_871}]},1).to({state:[{t:this.shape_872}]},1).to({state:[{t:this.shape_873}]},1).to({state:[{t:this.shape_874}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_876}]},1).to({state:[{t:this.shape_877}]},1).to({state:[{t:this.shape_878}]},1).to({state:[{t:this.shape_879}]},1).to({state:[{t:this.shape_880}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_881}]},1).to({state:[]},1).wait(694));
	this.timeline.addTween(cjs.Tween.get(this.shape_881).wait(509).to({_off:false},0).wait(140).to({_off:true},1).wait(694));

	// Text AreasOfExp
	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#000000").s().p("AA+BjIgXhEIhOAAIgXBEIgNAAIBFjFIANAAIBGDFgAAjATIgMgkQgOgogJgcIAAAAIgVBEIgNAkIBFAAg");
	this.shape_882.setTransform(147.1,143.2);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#000000").s().p("AgVBHQgOgFgKgLQgKgKgGgNIgFgPIgBgRQAAgQAGgOQAFgOALgKQAKgKANgGQANgEANAAQAPgBAMAFQALAEAJAJQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFALQgLAHgLAEQgPAGgRgBQgPAAgOgEgAA4gJQAAgNgFgLQgEgJgHgIQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAIgFAJQgGALgBAMIBtAAIAAAAg");
	this.shape_883.setTransform(453.2,145.9);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#000000").s().p("Ag2BKIAAiPIALAAIACAjIAAAAQAHgJAHgHQAHgHAJgFQAIgFAJgDQAKgDAKAAIAPABQAIACAGADIgDAMQgPgFgNAAQgJAAgIACQgJADgHAFQgIAGgIAIQgJAJgHAMIAABZg");
	this.shape_884.setTransform(166.5,145.7);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#000000").s().p("AgVBHQgOgFgKgLQgKgKgGgNIgFgPIgBgRQAAgQAGgOQAFgOALgKQAKgKANgGQANgEANAAQAPgBAMAFQALAEAJAJQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFALQgLAHgLAEQgPAGgRgBQgPAAgOgEgAA4gJQAAgNgFgLQgEgJgHgIQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAIgFAJQgGALgBAMIBtAAIAAAAg");
	this.shape_885.setTransform(309.2,145.9);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#000000").s().p("AgdBJQgJgCgHgFQgIgFgDgIQgFgHAAgKQAAgMAHgJQAGgJANgGQAOgGAVgEQATgFAegCQAAgKgCgIQgDgIgEgGQgGgGgIgEQgIgEgMAAQgHAAgIACIgPAFQgNAFgLAHIgGgKQALgHAPgGIASgFQAJgCAIAAQAOAAALADQAKAFAHAHQAHAIADAKQADAKAAAMIAABbIgLAAIgCgVIAAAAQgOAKgPAHQgUAIgLgBQgJAAgJgCgAADgBQgSADgLAGQgLAEgFAIQgFAGAAAJQAAAIADAFQADAGAGADQAHAFAUACQANAAAOgHQAPgGAPgNIAAgtQgcADgSADg");
	this.shape_886.setTransform(201,145.9);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#000000").s().p("AAzBIIgfgnIgUgbIgBAAIgUAcIgdAmIgPAAIA5hJIg0hGIAPAAIAbAkIASAZIABAAIATgZIAbgkIAOAAIg1BGIA6BJg");
	this.shape_887.setTransform(327.1,145.9);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#000000").s().p("AAcBoIAAiEIhIAAIAAgLIBUAAIAACPgAAVhOQgFgEAAgGQAAgHAFgEQAEgEAGAAQAFAAAEAEQAFAEAAAHQAAAGgFAEQgEAEgFAAQgGAAgEgEg");
	this.shape_888.setTransform(415.5,142.7);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#000000").s().p("AgaBHQgNgGgJgJQgKgKgGgOQgFgPAAgRQAAgQAFgPQAGgOAKgJQAJgKANgGQANgEANAAQAOAAANAEQANAGAJAKQAKAJAFAOQAGAPAAAQQAAARgGAPQgFAOgKAKQgJAJgNAGQgNAEgOAAQgNAAgNgEgAgVg6QgLAEgHAJQgHAJgEALQgFAMAAANQAAAPAFALQAEALAHAJQAHAIALAGQAKAEALAAQAMAAALgEQAKgGAHgIQAIgJADgLQAFgLAAgPQAAgNgFgMQgDgLgIgJQgHgJgKgEQgLgFgMAAQgLAAgKAFg");
	this.shape_889.setTransform(255.1,145.9);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#000000").s().p("AgOBKIgTgFQgRgGgOgKIAHgKQANAKAOAGIARADIAUACQALAAAJgCQAIgCAFgFQAGgDADgGQADgFAAgGQgCgMgHgFQgFgEgKgEIgbgHIgYgFQgLgEgHgFQgHgFgEgGQgEgGAAgIQAAgIAEgHQADgHAHgFQAHgGALgDQALgCANAAQAOAAAPAEQAPAGALAHIgHAKQgKgIgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFAEgCAEQgCAFAAAFQAAAGADAEQADAFAGADQAHAFAbAGQATAEAMAEQAMAEAHAFQAGAFADAGQACAHAAAIQAAAIgEAIQgEAHgHAFQgIAGgLADQgLADgOAAQgKAAgKgBg");
	this.shape_890.setTransform(219,145.9);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#000000").s().p("AgVBHQgOgFgKgLQgKgKgGgNIgFgPIgBgRQAAgQAGgOQAFgOALgKQAKgKANgGQANgEANAAQAPgBAMAFQALAEAJAJQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFALQgLAHgLAEQgPAGgRgBQgPAAgOgEgAA4gJQAAgNgFgLQgEgJgHgIQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAIgFAJQgGALgBAMIBtAAIAAAAg");
	this.shape_891.setTransform(309.2,145.9);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#000000").s().p("Ag2BKIAAiPIALAAIACAjIAAAAQAGgJAIgHQAHgHAJgFQAIgFAJgDQAKgDAKAAIAPABQAIACAGADIgDAMQgPgFgNAAQgJAAgIACQgJADgHAFQgIAGgJAIQgIAJgHAMIAABZg");
	this.shape_892.setTransform(382.5,145.7);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#000000").s().p("AgVBHQgOgFgKgLQgKgKgGgNIgFgPIgBgRQAAgQAGgOQAFgOALgKQAKgKANgGQANgEANAAQAPgBAMAFQALAEAJAJQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFALQgLAHgLAEQgPAGgRgBQgPAAgOgEgAA4gJQAAgNgFgLQgEgJgHgIQgGgHgKgDQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAIgFAJQgGALgBAMIBtAAIAAAAg");
	this.shape_893.setTransform(183.2,145.9);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#000000").s().p("AgYBuIAAiEIgsAAIAAgKIAsgBIAAgSQAAgNADgLQADgLAHgHQAGgIAKgEQAKgEANAAQALAAAJACQALACAKAFIgEAKQgKgEgIgCQgHgBgLAAQgLAAgJADQgHADgFAGQgEAGgDAJQgCAIAAAKIAAATIBCAAIAAALIhCAAIAACEg");
	this.shape_894.setTransform(274.4,142.1);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#000000").s().p("Ag/BqIAAjQIALAAIACAVIAAAAQAMgLAOgGQAPgHAMAAQAPAAAMAFQALAFAIAKQAHAJAEAOQAEANAAARQAAASgFAOQgFAOgKAKQgJAKgNAGQgMAFgMAAQgLAAgNgGQgOgFgKgKIgBAAIABAeIAAA0gAgXhXQgOAHgNANIAABPQAMALAOAFQALAFAKAAQALAAAKgFQAKgEAHgJQAHgJAEgLQAEgMAAgPQAAgNgDgLQgDgMgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAHg");
	this.shape_895.setTransform(345.6,148.9);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#000000").s().p("AgOBKIgTgFQgRgGgOgKIAHgKQANAKAOAGIARADIAUACQALAAAJgCQAIgCAFgFQAGgDADgGQADgFAAgGQgCgMgHgFQgFgEgKgEIgbgHIgYgFQgLgEgHgFQgHgFgEgGQgEgGAAgIQAAgIAEgHQADgHAHgFQAHgGALgDQALgCANAAQAOAAAPAEQAPAGALAHIgHAKQgKgIgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFAEgCAEQgCAFAAAFQAAAGADAEQADAFAGADQAHAFAbAGQATAEAMAEQAMAEAHAFQAGAFADAGQACAHAAAIQAAAIgEAIQgEAHgHAFQgIAGgLADQgLADgOAAQgKAAgKgBg");
	this.shape_896.setTransform(219,145.9);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#000000").s().p("AABBdQgJgEgGgHQgGgIgCgKQgDgKAAgOIAAhOIgrAAIAAgKIArgBIACgvIALAAIAAAvIBMAAIAAALIhMAAIAABPQAAALACAIQACAIAFAGQADAGAHADQAJADALAAQALAAAKgCIASgGIAEAKQgMAFgJACQgLACgNAAQgOAAgKgEg");
	this.shape_897.setTransform(399.4,143.7);

	this.instance_23 = new lib.Tween3("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(300.2,142.4);
	this.instance_23._off = true;

	this.instance_24 = new lib.Tween4("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(300.2,23.4);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_882}]},440).to({state:[{t:this.shape_882},{t:this.shape_883}]},2).to({state:[{t:this.shape_882},{t:this.shape_884},{t:this.shape_883}]},3).to({state:[{t:this.shape_882},{t:this.shape_884},{t:this.shape_885,p:{x:309.2}},{t:this.shape_883}]},3).to({state:[{t:this.shape_882},{t:this.shape_884},{t:this.shape_886},{t:this.shape_885,p:{x:309.2}},{t:this.shape_883}]},3).to({state:[{t:this.shape_882},{t:this.shape_884},{t:this.shape_886},{t:this.shape_885,p:{x:309.2}},{t:this.shape_887},{t:this.shape_883}]},3).to({state:[{t:this.shape_882},{t:this.shape_884},{t:this.shape_886},{t:this.shape_885,p:{x:309.2}},{t:this.shape_887},{t:this.shape_888},{t:this.shape_883}]},3).to({state:[{t:this.shape_882},{t:this.shape_884},{t:this.shape_886},{t:this.shape_889},{t:this.shape_885,p:{x:309.2}},{t:this.shape_887},{t:this.shape_888},{t:this.shape_883}]},3).to({state:[{t:this.shape_882},{t:this.shape_884},{t:this.shape_886},{t:this.shape_890,p:{x:219}},{t:this.shape_889},{t:this.shape_885,p:{x:309.2}},{t:this.shape_887},{t:this.shape_888},{t:this.shape_883}]},3).to({state:[{t:this.shape_882},{t:this.shape_884},{t:this.shape_886},{t:this.shape_890,p:{x:219}},{t:this.shape_889},{t:this.shape_891},{t:this.shape_887},{t:this.shape_885,p:{x:363.2}},{t:this.shape_888},{t:this.shape_883}]},3).to({state:[{t:this.shape_882},{t:this.shape_884},{t:this.shape_893},{t:this.shape_886},{t:this.shape_890,p:{x:219}},{t:this.shape_889},{t:this.shape_891},{t:this.shape_887},{t:this.shape_885,p:{x:363.2}},{t:this.shape_892},{t:this.shape_888},{t:this.shape_883}]},3).to({state:[{t:this.shape_882},{t:this.shape_884},{t:this.shape_893},{t:this.shape_886},{t:this.shape_890,p:{x:219}},{t:this.shape_889},{t:this.shape_894},{t:this.shape_891},{t:this.shape_887},{t:this.shape_885,p:{x:363.2}},{t:this.shape_892},{t:this.shape_888},{t:this.shape_883}]},3).to({state:[{t:this.shape_882},{t:this.shape_884},{t:this.shape_893},{t:this.shape_886},{t:this.shape_896},{t:this.shape_889},{t:this.shape_894},{t:this.shape_891},{t:this.shape_887},{t:this.shape_895},{t:this.shape_885,p:{x:363.2}},{t:this.shape_892},{t:this.shape_888},{t:this.shape_890,p:{x:435}},{t:this.shape_883}]},3).to({state:[{t:this.shape_882},{t:this.shape_884},{t:this.shape_893},{t:this.shape_886},{t:this.shape_896},{t:this.shape_889},{t:this.shape_894},{t:this.shape_891},{t:this.shape_887},{t:this.shape_895},{t:this.shape_885,p:{x:363.2}},{t:this.shape_892},{t:this.shape_897},{t:this.shape_888},{t:this.shape_890,p:{x:435}},{t:this.shape_883}]},3).to({state:[{t:this.instance_23}]},10).to({state:[{t:this.instance_24}]},13).to({state:[{t:this.instance_24}]},8).to({state:[]},141).wait(694));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(488).to({_off:false},0).to({_off:true,y:23.4},13).wait(843));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(488).to({_off:false},13).to({x:211.2},8).to({_off:true},141).wait(694));

	// Text
	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#FFFFFF").s().p("Ag2BEIBghDIAAgBIhghDIAAgOIBtBMIAAALIhtBMg");
	this.shape_898.setTransform(364.2,76.1);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#FFFFFF").s().p("AgEBlQgJgCgHgDQgHgEgHgFQgGgGgGgGQgFgHgEgIIgIgRQgEgOgCgdQAAgPAGgbIAIgRIAKgPQAFgGAHgFQAHgGAIgDQAHgEAJgBQAIgCAKAAQANgBASAJQALAFAKAKIgIAJQgJgJgJgFQgMgFgOgBQgQAAgNAHQgNAFgKANQgJALgFAQQgEASAAATQAAAUAEARQAFARAJALQAJAMAMAGQANAHAQAAQANAAALgEQAMgEAGgHIAAg9IgtAAIAAgNIA7AAIAABPQgJAKgPAHQgUAFgOABQgIAAgIgCg");
	this.shape_899.setTransform(400.1,76.2);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#FFFFFF").s().p("Ag2BKIAAiPIAMAAIABAjIABAAQAGgJAGgHQAIgHAIgFQAJgFAIgDQALgDAKAAIAPABQAIACAGADIgEAMQgPgFgMAAQgJAAgJACQgIADgIAFIgQAOQgIAJgGAMIAABZg");
	this.shape_900.setTransform(419.8,78.7);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgLQgKgJgGgOIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgGQANgEANAAQAPgBAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAGgRAAQgPgBgOgFgAA4gJQAAgNgFgLQgEgJgHgIQgGgGgKgEQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_901.setTransform(436.5,78.9);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgLQgKgJgGgOIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgGQANgEANAAQAPgBAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAGgRAAQgPgBgOgFgAA4gJQAAgNgFgLQgEgJgHgIQgGgGgKgEQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_902.setTransform(436.5,78.9);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#FFFFFF").s().p("AABBdQgJgEgGgHQgGgIgDgKQgCgKAAgOIAAhOIgrAAIAAgKIAsgBIABgvIALAAIAAAvIBMAAIAAALIhMAAIAABPQAAALACAIQACAJAEAFQAEAGAIADQAHADANAAQAKAAAKgCIASgGIADALQgKAEgKACQgLADgMAAQgPgBgKgEg");
	this.shape_903.setTransform(472.7,76.7);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#FFFFFF").s().p("AAbBoIAAiEIhHAAIAAgLIBVAAIAACPgAAVhOQgEgEAAgGQAAgHAEgEQADgEAGAAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAQgGAAgDgEg");
	this.shape_904.setTransform(488.8,75.7);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#FFFFFF").s().p("AAwBKIAAhXQAAgMgCgJQgDgJgFgGQgEgGgIgDQgIgDgLAAQgHAAgGACQgHACgGAEQgLAHgRARIAABnIgNAAIAAiPIALAAIACAbIABAAQAOgPAMgHQAHgEAHgCQAHgDAIAAQAOAAAJAEQAKADAHAHQAGAIADALQADAKAAAPIAABZg");
	this.shape_905.setTransform(508.6,78.7);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#FFFFFF").s().p("AghBqQgMgDgJgGQgIgFgEgJQgFgHAAgKQAAgIAHgJQAGgJAMgIIAAgBQgHgDgDgFQgFgHAAgHQAAgIAEgGQAFgHAIgGIAAgBQgIgGgEgJQgFgKAAgMQAAgLAEgKQAEgJAIgHQAHgHAKgEQAKgDALAAQAKgBAJAEIA8AAIAAALIgsAAQAHAIAFAIQAFAKAAALQAAALgEAKQgEAIgIAHQgHAHgKAEQgJADgKAAQgPAAgNgHQgGAFgEAEQgEAFAAAGQAAAJAKAGQAIAEAQABIAiAAQAOAAAKABQAKADAGADQAHAEADAGQADAHAAAIQAAAKgGAIQgFAJgKAHQgKAHgOAEQgOAEgQABQgRAAgNgDgAg1A0QgFAGAAAJQAAAGADAGQAEAGAGAEQAHAEAKACQALADANAAQANAAAMgEQAMgCAIgHQAIgFAFgGQAEgHAAgGQAAgGgCgFQgDgEgEgCQgJgEgTgBIgiAAQgNAAgJgCQgMAGgGAJgAgXheQgHAEgGAFQgFAFgDAIQgDAHAAAJQAAAJADAHQADAHAFAGQAGAFAHADQAIADAIAAQAHAAAHgDQAHgDAGgFQAFgGADgHQAEgHAAgJQAAgJgEgHQgDgIgFgFQgGgFgHgEQgHgDgHAAQgIAAgIADg");
	this.shape_906.setTransform(527,82.2);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#FFFFFF").s().p("AgOBKIgTgFQgRgGgOgKIAHgKQANAKAOAGIARADIAUACQALAAAJgCQAIgDAFgEQAGgDADgGQADgEAAgHQgCgMgHgFQgFgEgKgEIgbgHIgYgFQgLgEgHgFQgHgFgEgGQgEgGAAgIQAAgIAEgHQADgHAHgFQAHgGALgDQALgCANAAQAOAAAPAEQAPAGALAHIgHAKQgKgIgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFAEgCAEQgCAFAAAFQAAAFADAFQADAEAGAEQAHAFAbAGQATAFAMADQAMAEAHAFQAGAFADAGQACAHAAAIQAAAIgEAIQgEAHgHAFQgIAGgLADQgLADgOABIgUgCg");
	this.shape_907.setTransform(544.3,78.9);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#FFFFFF").s().p("AgLBhQgFgFAAgIQAAgJAFgGQAFgEAGAAQAHAAAFAEQAFAGABAJQgBAIgFAFQgFAFgHAAQgGAAgFgFgAgEAhIgChxIAAgVIAMAAIAAAVIgBBxg");
	this.shape_908.setTransform(562.4,76.2);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#FFFFFF").s().p("AgOBKIgTgFQgRgGgOgKIAHgKQANAKAOAGIARADIAUACQALAAAJgCQAIgDAFgEQAGgDADgGQADgEAAgHQgCgMgHgFQgFgEgKgEIgbgHIgYgFQgLgEgHgFQgHgFgEgGQgEgHAAgHQAAgIAEgHQADgHAHgFQAHgGALgDQALgCANAAQAOAAAPAEQAPAGALAHIgHAKQgKgIgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFAEgCAEQgCAFAAAFQAAAFADAFQADAEAGAEQAHAFAbAGQATAEAMAEQAMAEAHAFQAGAFADAHQACAFAAAJQAAAIgEAIQgEAHgHAFQgIAGgLADQgLAEgOAAIgUgCg");
	this.shape_909.setTransform(544.3,118.6);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#FFFFFF").s().p("AghBqQgMgEgJgFQgIgFgEgJQgFgHAAgKQAAgIAHgJQAGgKAMgGIAAgCQgHgDgDgFQgFgHAAgHQAAgIAEgGQAFgHAIgGIAAgBQgIgHgEgIQgFgKAAgMQAAgLAEgKQAEgJAIgHQAHgHAKgEQAKgDALAAQAKAAAJADIA8AAIAAAMIgsAAQAHAHAFAIQAFAKAAALQAAAKgEALQgEAJgIAGQgHAHgKAEQgJADgKAAQgPAAgNgHQgGAFgEAEQgEAFAAAGQAAAJAKAGQAIAEAQABIAiAAQAOAAAKABQAKACAGAEQAHAEADAGQADAGAAAJQAAAJgGAJQgFAJgKAHQgKAHgOAEQgOAEgQAAQgRAAgNgCgAg1A0QgFAGAAAJQAAAGADAGQAEAFAGAFQAHAEAKACQALACANABQANgBAMgDQAMgCAIgHQAIgFAFgGQAEgHAAgGQAAgHgCgDQgDgEgEgDQgJgFgTAAIgiAAQgNAAgJgCQgMAGgGAJgAgXheQgHADgGAGQgFAFgDAIQgDAHAAAJQAAAIADAIQADAHAFAGQAGAFAHADQAIADAIAAQAHAAAHgDQAHgDAGgFQAFgGADgHQAEgIAAgIQAAgJgEgHQgDgIgFgFQgGgGgHgDQgHgDgHAAQgIAAgIADg");
	this.shape_910.setTransform(527,121.9);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#FFFFFF").s().p("AAbBoIAAiDIhHAAIAAgMIBVAAIAACPgAAVhOQgEgEAAgGQAAgHAEgEQADgEAGAAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAQgGAAgDgEg");
	this.shape_911.setTransform(488.8,115.4);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#FFFFFF").s().p("AABBdQgJgEgGgHQgGgIgDgKQgCgLAAgNIAAhNIgrAAIAAgLIAsgBIABgvIALAAIAAAvIBMAAIAAAMIhMAAIAABOQAAALACAIQACAJAEAFQAEAGAIADQAHADANAAQAKAAAKgCIASgFIADAKQgKAEgKACQgLADgMAAQgPAAgKgFg");
	this.shape_912.setTransform(472.7,116.4);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgLQgKgJgGgOIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgGQANgEANAAQAPAAAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAGgRAAQgPgBgOgFgAA4gJQAAgNgFgKQgEgKgHgIQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_913.setTransform(454.5,118.6);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgLQgKgJgGgOIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgGQANgEANAAQAPAAAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAGgRAAQgPgBgOgFgAA4gJQAAgNgFgKQgEgKgHgIQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_914.setTransform(436.5,118.6);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#FFFFFF").s().p("AgEBlQgJgCgHgDQgHgEgHgFQgGgFgGgHQgFgHgEgIIgIgRQgEgOgCgdQAAgPAGgaIAIgSIAKgPQAFgGAHgFQAHgGAIgDQAHgEAJgCQAIgBAKAAQANgBASAJQALAFAKALIgIAJQgJgKgJgFQgMgGgOAAQgQABgNAFQgNAGgKAMQgJAMgFAQQgEARAAAUQAAAUAEARQAFARAJAMQAJALAMAHQANAGAQAAQANAAALgEQAMgEAGgHIAAg9IgtAAIAAgNIA7AAIAABPQgJAKgPAHQgUAFgOABQgIAAgIgCg");
	this.shape_915.setTransform(400.1,115.9);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#FFFFFF").s().p("Ag2BEIBghDIAAgBIhghDIAAgOIBtBMIAAALIhtBMg");
	this.shape_916.setTransform(364.2,76.1);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#FFFFFF").s().p("AAvBjIhLiKIgWgoIAAAAIACA4IAAB6IgNAAIAAjFIAPAAIBLCLIAVAnIABAAIgCg5IAAh5IAOAAIAADFg");
	this.shape_917.setTransform(400.4,76.2);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgKgEgNQgFgPAAgSQAAgRAFgOQAGgNAJgKQAKgKAMgFQAMgGANABQANgBAMAGQALAEALALIABAAIgBgdIAAg8IANAAIAADXIgLAAIgCgVIAAAAQgLALgMAGQgSAIgKAAQgOgBgLgFgAgQgYQgKAFgHAIQgIAKgEAKQgEAMAAANQAAAOADAMQAEAMAHAIQAGAJAKAFQAJAEALAAQANAAAMgHQANgGAMgOIAAhPQgMgLgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_918.setTransform(453.8,75.5);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#FFFFFF").s().p("AgdBJQgJgCgHgFQgIgFgDgIQgFgHAAgKQAAgMAHgJQAGgJANgGQAOgGAVgEQATgEAegDQAAgKgCgIQgDgIgEgGQgGgGgIgEQgIgEgMAAQgHAAgIACIgPAFQgNAFgLAHIgGgKQALgHAPgGIASgGQAJgBAIAAQAOAAALADQAKAFAHAIQAHAHADAKQADAKAAAMIAABbIgLAAIgCgVIAAAAQgOALgPAGQgUAIgLAAQgJgBgJgCgAADgBQgSADgLAGQgLAEgFAIQgFAGAAAJQAAAIADAGQADAFAGAEQAHAEAUACQANAAAOgGQAPgHAPgNIAAgtQgcACgSAEg");
	this.shape_919.setTransform(490.3,78.9);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FFFFFF").s().p("AAgBIIgWhWIgJgpIgBAAIgJAqIgWBVIgSAAIgliPIAPAAIAWBdIAJAmIABAAIAJgmIAXhbIAQAAIAWBbIAKAmIABAAIAJgmIAXhdIAMAAIgkCPg");
	this.shape_920.setTransform(526.4,78.9);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgLQgKgJgGgOIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgGQANgEANAAQAPgBAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAGgRAAQgPgBgOgFgAA4gJQAAgNgFgLQgEgJgHgIQgGgGgKgEQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_921.setTransform(418.5,78.9);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FFFFFF").s().p("AgaBoQgNgFgLgKIgBAAIgBARIgLAAIAAjXIANAAIAAA+IgBAgIABAAQALgMAOgGQAPgIANABQAPAAAMAEQALAGAIAJQAHAKAEANQAEANAAARQAAASgFAPQgFAOgKAKQgJAKgMAFQgMAFgNABQgLAAgNgGgAgXgWQgOAGgNAOIAABPQAMALAOAFQAMAFAKAAQAKAAAKgFQAKgEAHgKQAHgIAEgMQAEgNAAgOQAAgOgDgLQgDgKgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAHg");
	this.shape_922.setTransform(562.9,75.5);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgKgEgNQgFgPAAgSQAAgRAFgOQAGgNAJgKQAKgKAMgFQAMgGANABQANgBAMAGQALAEALALIABAAIgBgdIAAg8IANAAIAADXIgLAAIgCgVIAAAAQgLALgMAGQgSAIgKAAQgOgBgLgFgAgQgYQgKAFgHAIQgIAKgEAKQgEAMAAANQAAAOADAMQAEAMAHAIQAGAJAKAFQAJAEALAAQANAAAMgHQANgGAMgOIAAhPQgMgLgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_923.setTransform(453.8,75.5);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgLQgKgJgGgOIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgGQANgEANAAQAPgBAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAGgRAAQgPgBgOgFgAA4gJQAAgNgFgLQgEgJgHgIQgGgGgKgEQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_924.setTransform(418.5,78.9);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#FFFFFF").s().p("AAwBKIAAhXQAAgMgCgJQgDgJgFgGQgEgGgIgDQgIgDgLAAQgHAAgGACQgHACgGAEQgLAHgRARIAABnIgNAAIAAiPIALAAIACAbIABAAQAOgPAMgHQAHgEAHgCQAHgDAIAAQAOAAAJAEQAKADAHAHQAGAIADALQADAKAAAPIAABZg");
	this.shape_925.setTransform(688.6,78.7);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgLQgKgJgGgOIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgGQANgEANAAQAPgBAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAGgRAAQgPgBgOgFgAA4gJQAAgNgFgLQgEgJgHgIQgGgGgKgEQgJgDgLAAQgJAAgKADQgKAEgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_926.setTransform(418.5,78.9);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#FFFFFF").s().p("Ag2BKIAAiPIAMAAIABAjIABAAQAGgJAGgHQAIgHAIgFQAJgFAIgDQALgDAKAAIAPABQAIACAGADIgEAMQgPgFgMAAQgJAAgJACQgIADgIAFIgQAOQgIAJgGAMIAABZg");
	this.shape_927.setTransform(725.8,78.7);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#FFFFFF").s().p("AgNBjQgFgFAAgJQAAgJAFgFQAFgEAHAAQAGAAAFAEQAGAFAAAJQAAAJgGAFQgFAFgGAAQgHAAgFgFgAgKAiQgBgHABgHQABgHAEgHQAFgHALgMQAQgPADgFQAFgGACgFQACgGAAgHQAAgGgCgGQgDgHgEgFQgFgFgIgCQgHgEgKAAQgMAAgLAGQgLAEgJAKIgJgJQAKgKANgFIAOgGIAPgBQAMAAAKADQAKAEAHAGQAHAGADAJQAEAIAAAJQAAAIgDAHQgCAGgEAGQgFAHgOANQgOAMgEAHQgEAGgBAHQgCAGABAHg");
	this.shape_928.setTransform(742.1,76.1);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#FFFFFF").s().p("AgOBKIgTgGQgRgFgOgKIAHgKQANAKAOAGIARADIAUACQALAAAJgCQAIgCAFgEQAGgEADgFQADgFAAgHQgCgMgHgFQgFgEgKgEIgbgHIgYgGQgLgDgHgFQgHgFgEgGQgEgHAAgHQAAgIAEgHQADgHAHgFQAHgFALgEQALgDANAAQAOAAAPAGQAPAFALAHIgHAJQgKgHgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFADgCAFQgCAEAAAGQAAAFADAFQADAEAGAEQAHAFAbAGQATAFAMADQAMAEAHAFQAGAFADAHQACAFAAAJQAAAIgEAHQgEAIgHAFQgIAGgLADQgLAEgOAAIgUgCg");
	this.shape_929.setTransform(544.3,158.3);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#FFFFFF").s().p("AghBqQgMgDgJgGQgIgFgEgJQgFgHAAgKQAAgIAHgJQAGgKAMgGIAAgBQgHgDgDgGQgFgGAAgJQAAgHAEgGQAFgHAIgGIAAgBQgIgHgEgIQgFgKAAgMQAAgLAEgKQAEgJAIgHQAHgHAKgEQAKgEALABQAKAAAJADIA8AAIAAAMIgsAAQAHAHAFAIQAFAKAAALQAAAKgEAKQgEAKgIAGQgHAHgKAEQgJADgKAAQgPAAgNgGQgGADgEAGQgEAEAAAGQAAAKAKAFQAIAEAQABIAiAAQAOgBAKACQAKACAGAEQAHAEADAGQADAGAAAJQAAAJgGAJQgFAJgKAHQgKAHgOAEQgOAEgQAAQgRAAgNgCgAg1A0QgFAGAAAJQAAAGADAGQAEAGAGAEQAHAEAKACQALACANABQANgBAMgDQAMgCAIgGQAIgGAFgGQAEgHAAgGQAAgHgCgDQgDgEgEgDQgJgFgTAAIgiAAQgNAAgJgDQgMAHgGAJgAgXhdQgHADgGAFQgFAFgDAIQgDAHAAAJQAAAIADAIQADAHAFAGQAGAFAHADQAIACAIAAQAHAAAHgCQAHgDAGgFQAFgGADgHQAEgIAAgIQAAgJgEgHQgDgIgFgFQgGgFgHgDQgHgEgHAAQgIAAgIAEg");
	this.shape_930.setTransform(527,161.6);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#FFFFFF").s().p("AABBdQgJgDgGgIQgGgIgDgLQgCgKAAgNIAAhNIgrAAIAAgLIAsgBIABgwIALAAIAAAwIBMAAIAAAMIhMAAIAABPQAAAKACAIQACAIAEAGQAEAGAIADQAHADANAAQAKAAAKgCIASgFIADAKQgKAEgKACQgLACgMABQgPAAgKgFg");
	this.shape_931.setTransform(472.7,156.1);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_932.setTransform(454.5,158.3);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_933.setTransform(436.5,158.3);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#FFFFFF").s().p("Ag2BKIAAiPIAMAAIABAjIABAAQAGgJAGgHQAIgHAIgFQAJgFAIgDQALgDAKAAIAPABQAIACAGADIgEAMQgPgFgMAAQgJAAgJACQgIADgIAFQgHAGgJAIQgIAJgGAMIAABZg");
	this.shape_934.setTransform(419.8,158.1);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#FFFFFF").s().p("AgEBlQgJgCgHgEQgHgDgHgFQgGgFgGgHQgFgHgEgIIgIgSQgEgMgCgeQAAgPAGgaIAIgSIAKgPQAFgHAHgEQAHgFAIgEQAHgEAJgCQAIgCAKAAQANAAASAJQALAFAKALIgIAJQgJgKgJgFQgMgGgOAAQgQABgNAFQgNAHgKALQgJAMgFAQQgEARAAAUQAAAUAEARQAFAQAJANQAJALAMAHQANAGAQAAQANAAALgEQAMgEAGgHIAAg9IgtAAIAAgMIA7AAIAABOQgJALgPAFQgUAHgOAAQgIgBgIgBg");
	this.shape_935.setTransform(400.1,155.6);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#FFFFFF").s().p("AgNBjQgFgFAAgJQAAgJAFgFQAFgEAHAAQAGAAAFAEQAGAFAAAJQAAAJgGAFQgFAFgGAAQgHAAgFgFgAgKAiQgBgHABgHQABgHAEgHQAFgHALgNQAQgPADgEQAFgFACgGQACgGAAgHQAAgGgCgGQgDgHgEgFQgFgFgIgCQgHgEgKAAQgMABgLAFQgLAEgJAKIgJgIQAKgLANgFIAOgGIAPgBQAMAAAKADQAKAEAHAGQAHAGADAIQAEAJAAAJQAAAIgDAHQgCAGgEAGQgFAHgOANQgOALgEAJQgEAFgBAHQgCAGABAHg");
	this.shape_936.setTransform(742.1,115.8);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#FFFFFF").s().p("AAbBoIAAiDIhHAAIAAgMIBVAAIAACPgAAVhOQgEgEAAgGQAAgHAEgEQADgEAGAAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAQgGAAgDgEg");
	this.shape_937.setTransform(650.8,115.4);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgKgEgNQgFgPAAgSQAAgRAFgOQAGgNAJgKQAKgKAMgFQAMgFANAAQANAAAMAFQALAEALALIABAAIgBgdIAAg8IANAAIAADXIgLAAIgCgVIAAAAQgLALgMAGQgSAIgKAAQgOgBgLgFgAgQgYQgKAFgHAIQgIAKgEAKQgEAMAAANQAAAOADAMQAEAMAHAIQAGAJAKAFQAJAEALAAQANAAAMgHQANgGAMgOIAAhOQgMgMgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_938.setTransform(597.8,115.2);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#FFFFFF").s().p("AgaBoQgNgFgLgKIgBAAIgBARIgLAAIAAjXIANAAIAAA+IgBAgIABAAQALgMAOgGQAPgIANABQAPAAAMAEQALAFAIAKQAHAKAEANQAEANAAARQAAASgFAPQgFAOgKAKQgJAKgMAFQgMAFgNABQgLAAgNgGgAgXgWQgOAGgNANIAABPQAMAMAOAFQAMAFAKAAQAKAAAKgFQAKgEAHgKQAHgIAEgNQAEgMAAgOQAAgNgDgMQgDgKgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAHg");
	this.shape_939.setTransform(562.9,115.2);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgLQgKgJgGgOIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgGQANgEANAAQAPAAAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAGgRAAQgPgBgOgFgAA4gJQAAgNgFgKQgEgKgHgIQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_940.setTransform(544.5,118.6);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#FFFFFF").s().p("AAgBIIgWhWIgJgqIgBAAIgJArIgWBVIgSAAIgliPIAPAAIAWBdIAJAmIABAAIAJgmIAXhaIAQAAIAWBaIAKAmIABAAIAJgmIAXhdIAMAAIgkCPg");
	this.shape_941.setTransform(526.4,118.6);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#FFFFFF").s().p("AgdBJQgJgCgHgFQgIgFgDgIQgFgHAAgKQAAgMAHgJQAGgJANgGQAOgGAVgFQATgDAegDQAAgKgCgIQgDgIgEgGQgGgGgIgEQgIgEgMAAQgHAAgIACIgPAFQgNAFgLAHIgGgKQALgHAPgGIASgGQAJgBAIAAQAOAAALADQAKAFAHAIQAHAHADAKQADAKAAAMIAABbIgLAAIgCgVIAAAAQgOALgPAGQgUAIgLAAQgJAAgJgDgAADgBQgSADgLAFQgLAFgFAIQgFAHAAAIQAAAIADAGQADAFAGAEQAHAEAUACQANAAAOgGQAPgHAPgNIAAgtQgcACgSAEg");
	this.shape_942.setTransform(490.3,118.6);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgKgEgNQgFgPAAgSQAAgRAFgOQAGgNAJgKQAKgKAMgFQAMgFANAAQANAAAMAFQALAEALALIABAAIgBgdIAAg8IANAAIAADXIgLAAIgCgVIAAAAQgLALgMAGQgSAIgKAAQgOgBgLgFgAgQgYQgKAFgHAIQgIAKgEAKQgEAMAAANQAAAOADAMQAEAMAHAIQAGAJAKAFQAJAEALAAQANAAAMgHQANgGAMgOIAAhOQgMgMgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_943.setTransform(453.8,115.2);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgLQgKgJgGgOIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgGQANgEANAAQAPAAAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAGgRAAQgPgBgOgFgAA4gJQAAgNgFgKQgEgKgHgIQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_944.setTransform(436.5,118.6);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgLQgKgJgGgOIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgGQANgEANAAQAPAAAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAGgRAAQgPgBgOgFgAA4gJQAAgNgFgKQgEgKgHgIQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_945.setTransform(418.5,118.6);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#FFFFFF").s().p("AAlBjIgcheIgIghIgBAAIgIAhIgaBeIgSAAIghjFIAOAAIAVCGIAGAvIABAAIAMgvIAZhSIAOAAIAYBSIANAvIABAAIAGgvIAViGIANAAIggDFg");
	this.shape_946.setTransform(400.4,76.2);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#FFFFFF").s().p("Ag2BEIBghDIAAgBIhghDIAAgOIBtBMIAAALIhtBMg");
	this.shape_947.setTransform(364.2,76.1);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#FFFFFF").s().p("AhCBjIAAjFIAtAAQALAAAKACQAJACAJADQAIAEAHAFQAHAEAFAHQAGAHAEAHIAHARQAGAaAAAOQgDAcgDANIgHARQgEAHgGAHQgFAGgHAFQgHAGgIADQgIADgKACQgKACgLAAgAg1BYIAeAAQAKAAAJgCQAIgCAHgDQAHgDAGgFQAGgFAFgGQAJgLAEgQQAFgQAAgTQAAgTgFgQQgEgQgJgLIgLgKQgGgFgHgDQgHgDgIgBIgTgCIgeAAg");
	this.shape_948.setTransform(473,76.2);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#FFFFFF").s().p("AgGBIIhAiPIANAAIAoBZIARAqIABAAIASgqIAnhZIAOAAIhACPg");
	this.shape_949.setTransform(508.4,78.9);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#FFFFFF").s().p("AAMBrQgIgDgEgGQgGgGgDgIQgCgKAAgMIAAigIg2AAIAAgLIBCAAIAACuQAAAHACAHQACAGAEAEQAEAFAGACQAGACAHAAQAHAAAIgCIAPgGIAEALQgKAEgHACQgIACgLABQgKAAgIgDg");
	this.shape_950.setTransform(544.7,75.5);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#FFFFFF").s().p("AgaBGQgMgEgKgKQgKgKgFgOQgGgPAAgRQAAgQAGgPQAFgOAKgKQAKgJAMgGQAMgEAOAAQAOAAANAEQAMAGAKAJQAKAKAFAOQAGAPAAAQQAAARgGAPQgFAOgKAKQgKAKgMAEQgNAFgOABQgOgBgMgFgAgWg6QgJAEgIAJQgIAIgEAMQgEAMAAANQAAAOAEAMQAEALAIAJQAIAIAJAGQALAEALAAQAMAAAKgEQAKgGAIgIQAHgJAFgLQAEgMAAgOQAAgNgEgMQgFgMgHgIQgIgJgKgEQgKgFgMAAQgLAAgLAFg");
	this.shape_951.setTransform(562.4,78.9);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#FFFFFF").s().p("Ag/BqIAAjQIALAAIACAVIAAAAQAMgLAOgGQAPgHAMAAQAPAAAMAFQALAFAIAKQAHAJAEAOQAEANAAARQAAASgFAOQgFAOgKAKQgJAKgNAGQgMAFgMAAQgLAAgNgGQgOgFgKgKIgBAAIABAeIAAA0gAgXhXQgOAHgNANIAABPQAMALAOAFQALAFAKAAQALAAAKgFQAKgEAHgJQAHgJAEgLQAEgMAAgPQAAgNgDgLQgDgMgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAHg");
	this.shape_952.setTransform(580.9,82);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FFFFFF").s().p("AgOBKIgTgGQgRgFgOgKIAHgKQANALAOAEIARAEIAUACQALAAAJgCQAIgCAFgEQAGgEADgFQADgGAAgGQgCgLgHgGQgFgEgKgEIgbgHIgYgGQgLgDgHgFQgHgFgEgGQgEgHAAgHQAAgIAEgHQADgHAHgFQAHgGALgDQALgDANAAQAOAAAPAGQAPAEALAIIgHAJQgKgHgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFADgCAFQgCAEAAAGQAAAGADAEQADAFAGADQAHAEAbAIQATAEAMADQAMAEAHAFQAGAFADAHQACAFAAAJQAAAJgEAGQgEAIgHAGQgIAFgLAEQgLADgOAAIgUgCg");
	this.shape_953.setTransform(544.3,198);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#FFFFFF").s().p("AghBqQgMgDgJgGQgIgFgEgJQgFgHAAgJQAAgJAHgJQAGgKAMgGIAAgBQgHgEgDgFQgFgGAAgJQAAgHAEgGQAFgHAIgGIAAgBQgIgHgEgIQgFgKAAgMQAAgLAEgKQAEgJAIgHQAHgHAKgDQAKgFALAAQAKABAJADIA8AAIAAAMIgsAAQAHAHAFAJQAFAKAAAKQAAAKgEAKQgEAKgIAGQgHAHgKADQgJAEgKAAQgPAAgNgGQgGADgEAGQgEAEAAAGQAAAKAKAFQAIAEAQAAIAiAAQAOAAAKACQAKACAGAEQAHAEADAGQADAHAAAIQAAAKgGAIQgFAJgKAHQgKAHgOAEQgOAFgQgBQgRAAgNgCgAg1A0QgFAGAAAJQAAAHADAFQAEAGAGADQAHAFAKACQALACANABQANgBAMgDQAMgDAIgFQAIgGAFgGQAEgHAAgGQAAgHgCgDQgDgFgEgCQgJgFgTABIgiAAQgNgBgJgDQgMAHgGAJgAgXhdQgHADgGAFQgFAGgDAGQgDAIAAAJQAAAJADAHQADAHAFAFQAGAGAHADQAIACAIAAQAHAAAHgCQAHgDAGgGQAFgFADgHQAEgHAAgJQAAgJgEgIQgDgGgFgGQgGgFgHgDQgHgEgHAAQgIAAgIAEg");
	this.shape_954.setTransform(527,201.3);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#FFFFFF").s().p("AAbBoIAAiDIhHAAIAAgMIBVAAIAACPgAAVhOQgEgEAAgHQAAgGAEgEQADgEAGAAQAGAAAFAEQAEAEAAAGQAAAHgEAEQgFAEgGAAQgGAAgDgEg");
	this.shape_955.setTransform(488.8,194.8);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FFFFFF").s().p("AABBdQgJgDgGgJQgGgGgDgMQgCgKAAgNIAAhNIgrAAIAAgLIAsgBIABgwIALAAIAAAwIBMAAIAAAMIhMAAIAABPQAAAKACAIQACAIAEAGQAEAGAIADQAHADANAAQAKAAAKgCIASgFIADAKQgKAEgKACQgLACgMABQgPAAgKgFg");
	this.shape_956.setTransform(472.7,195.8);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFALQgGAKgBAMIBtAAIAAAAg");
	this.shape_957.setTransform(454.5,198);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFALQgGAKgBAMIBtAAIAAAAg");
	this.shape_958.setTransform(436.5,198);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#FFFFFF").s().p("AgEBlQgJgCgHgEQgHgDgHgGQgGgEgGgHQgFgHgEgIIgIgSQgEgMgCgeQAAgPAGgaIAIgSIAKgPQAFgHAHgEQAHgFAIgEQAHgEAJgCQAIgCAKAAQANAAASAIQALAGAKALIgIAJQgJgKgJgFQgMgGgOABQgQAAgNAFQgNAHgKALQgJAMgFAQQgEASAAATQAAAUAEARQAFAQAJANQAJALAMAHQANAGAQAAQANAAALgEQAMgEAGgHIAAg+IgtAAIAAgLIA7AAIAABOQgJALgPAFQgUAHgOAAQgIgBgIgBg");
	this.shape_959.setTransform(400.1,195.3);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#FFFFFF").s().p("AgNBjQgFgFAAgJQAAgIAFgGQAFgEAHgBQAGABAFAEQAGAGAAAIQAAAJgGAFQgFAFgGAAQgHAAgFgFgAgKAjQgBgIABgHQABgHAEgHQAFgHALgNQAQgPADgEQAFgFACgGQACgGAAgHQAAgHgCgFQgDgHgEgFQgFgFgIgCQgHgDgKgBQgMABgLAEQgLAFgJAKIgJgIQAKgLANgFIAOgGIAPgBQAMAAAKAEQAKADAHAGQAHAGADAIQAEAJAAAJQAAAIgDAHQgCAGgEAGQgFAHgOANQgOALgEAJQgEAGgBAGQgCAHABAHg");
	this.shape_960.setTransform(742.1,155.5);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FFFFFF").s().p("Ag2BKIAAiPIAMAAIABAjIABAAQAGgJAGgHQAIgHAIgFQAJgFAIgDQALgDAKAAIAPABQAIACAGADIgEAMQgPgFgMAAQgJAAgJACQgIADgIAFQgHAGgJAIQgIAJgGAMIAABZg");
	this.shape_961.setTransform(725.8,158.1);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgKgEgNQgFgPAAgSQAAgQAFgPQAGgNAJgKQAKgKAMgFQAMgFANAAQANAAAMAFQALAEALALIABAAIgBgeIAAg7IANAAIAADXIgLAAIgCgVIAAAAQgLAKgMAHQgSAIgKAAQgOAAgLgGgAgQgYQgKAFgHAIQgIAJgEALQgEAMAAANQAAAOADAMQAEAMAHAJQAGAIAKAFQAJAEALAAQANAAAMgHQANgGAMgNIAAhPQgMgMgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_962.setTransform(597.8,154.9);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FFFFFF").s().p("AgaBoQgNgFgLgJIgBAAIgBAQIgLAAIAAjXIANAAIAAA+IgBAgIABAAQALgMAOgGQAPgIANABQAPgBAMAGQALAEAIAKQAHAKAEANQAEANAAARQAAASgFAPQgFAOgKAKQgJAKgMAFQgMAGgNAAQgLgBgNgFgAgXgWQgOAHgNAMIAABPQAMAMAOAFQAMAFAKAAQAKAAAKgFQAKgEAHgKQAHgIAEgNQAEgMAAgOQAAgNgDgMQgDgKgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAHg");
	this.shape_963.setTransform(562.9,154.9);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_964.setTransform(544.5,158.3);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#FFFFFF").s().p("AAgBIIgWhWIgJgqIgBAAIgJArIgWBVIgSAAIgliPIAPAAIAWBdIAJAlIABAAIAJglIAXhaIAQAAIAWBaIAKAlIABAAIAJglIAXhdIAMAAIgkCPg");
	this.shape_965.setTransform(526.4,158.3);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#FFFFFF").s().p("AgdBKQgJgDgHgFQgIgFgDgIQgFgHAAgKQAAgMAHgJQAGgJANgGQAOgGAVgFQATgDAegDQAAgKgCgIQgDgIgEgGQgGgHgIgDQgIgEgMAAQgHAAgIACIgPAFQgNAFgLAHIgGgKQALgHAPgGIASgGQAJgCAIAAQAOAAALAEQAKAFAHAIQAHAHADAKQADAKAAAMIAABbIgLAAIgCgWIAAAAQgOAMgPAGQgUAIgLAAQgJAAgJgCgAADgBQgSADgLAFQgLAGgFAHQgFAHAAAIQAAAIADAGQADAFAGAEQAHAEAUACQANAAAOgGQAPgHAPgNIAAgtQgcACgSAEg");
	this.shape_966.setTransform(490.3,158.3);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgKgEgNQgFgPAAgSQAAgQAFgPQAGgNAJgKQAKgKAMgFQAMgFANAAQANAAAMAFQALAEALALIABAAIgBgeIAAg7IANAAIAADXIgLAAIgCgVIAAAAQgLAKgMAHQgSAIgKAAQgOAAgLgGgAgQgYQgKAFgHAIQgIAJgEALQgEAMAAANQAAAOADAMQAEAMAHAJQAGAIAKAFQAJAEALAAQANAAAMgHQANgGAMgNIAAhPQgMgMgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_967.setTransform(453.8,154.9);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_968.setTransform(436.5,158.3);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgOQAFgOALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAKQgLAHgLAEQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAIgFAKQgGAKgBAMIBtAAIAAAAg");
	this.shape_969.setTransform(418.5,158.3);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#FFFFFF").s().p("AgaBGQgMgEgKgKQgKgKgFgOQgGgOAAgSQAAgRAGgOQAFgOAKgKQAKgKAMgFQAMgEAOAAQAOAAANAEQAMAFAKAKQAKAKAFAOQAGAOAAARQAAASgGAOQgFAOgKAKQgKAKgMAEQgNAFgOABQgOgBgMgFgAgWg6QgJAFgIAIQgIAIgEAMQgEAMAAANQAAAOAEAMQAEAMAIAIQAIAJAJAFQALAEALAAQAMAAAKgEQAKgFAIgJQAHgIAFgMQAEgMAAgOQAAgNgEgMQgFgMgHgIQgIgIgKgFQgKgFgMAAQgLAAgLAFg");
	this.shape_970.setTransform(562.4,118.6);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#FFFFFF").s().p("AAMBrQgIgDgEgGQgGgGgDgIQgCgKAAgMIAAifIg2AAIAAgMIBCAAIAACuQAAAHACAHQACAGAEAEQAEAFAGACQAGACAHAAQAHAAAIgCIAPgFIAEAKQgKAEgHACQgIADgLAAQgKAAgIgDg");
	this.shape_971.setTransform(544.7,115.2);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#FFFFFF").s().p("AhCBjIAAjFIAtAAQALAAAKACQAJACAJADQAIAEAHAEQAHAFAFAHQAGAHAEAHIAHARQAGAZAAAPQgDAcgDANIgHARQgEAHgGAHQgFAGgHAGQgHAFgIADQgIADgKACQgKACgLAAgAg1BYIAeAAQAKgBAJgBQAIgCAHgDQAHgDAGgFQAGgEAFgHQAJgLAEgQQAFgQAAgTQAAgTgFgQQgEgQgJgLIgLgKQgGgEgHgEQgHgDgIgBIgTgCIgeAAg");
	this.shape_972.setTransform(473,115.9);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#FFFFFF").s().p("AAlBjIgcheIgIgiIgBAAIgIAiIgaBeIgSAAIghjFIAOAAIAVCGIAGAvIABAAIAMgvIAZhSIAOAAIAYBSIANAvIABAAIAGgvIAViGIANAAIggDFg");
	this.shape_973.setTransform(400.4,115.9);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#FFFFFF").s().p("AA+BjIgXhEIhOAAIgXBEIgOAAIBGjFIANAAIBFDFgAAjATIgNgkQgOgogHgcIgBAAIgWBEIgMAkIBFAAg");
	this.shape_974.setTransform(400.4,76.2);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#FFFFFF").s().p("Ag2BEIBghDIAAgBIhghDIAAgOIBtBMIAAALIhtBMg");
	this.shape_975.setTransform(364.2,76.1);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#FFFFFF").s().p("AAwBKIAAhXQAAgMgCgJQgDgJgFgGQgEgGgIgDQgIgDgLAAQgHAAgGACQgHACgGAEQgLAHgRARIAABnIgNAAIAAiPIALAAIACAbIABAAQAOgPAMgHQAHgEAHgCQAHgDAIAAQAOAAAJAEQAKADAHAHQAGAIADALQADAKAAAPIAABZg");
	this.shape_976.setTransform(418.6,78.7);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#FFFFFF").s().p("AA5BKIAAhmQAAgQgFgJQgFgIgKAAQgKAAgHAHQgGAGgIAOIAABsIgMAAIAAhmQAAgQgFgJQgFgIgKAAQgKAAgHAHQgHAGgHAOIAABsIgNAAIAAiPIALAAIACATIAAAAQAHgLAHgGQAIgGALAAQAMAAAHAHQAGAGADANQAJgOAHgFQAIgHALAAQAIAAAGADQAGADADAFQAEAFACAIQADAJAAAKIAABog");
	this.shape_977.setTransform(454.7,78.7);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#FFFFFF").s().p("AgOBKIgTgGQgRgFgOgKIAHgKQANALAOAEIARAFIAUABQALAAAJgCQAIgCAFgEQAGgEADgFQADgGAAgFQgCgMgHgGQgFgEgKgEIgbgHIgYgGQgLgDgHgFQgHgFgEgGQgEgGAAgIQAAgIAEgHQADgHAHgFQAHgFALgDQALgEANAAQAOAAAPAGQAPAEALAIIgHAJQgKgHgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFADgCAFQgCAEAAAGQAAAGADAEQADAEAGAEQAHAEAbAIQATAEAMADQAMAEAHAFQAGAFADAHQACAFAAAJQAAAJgEAGQgEAIgHAGQgIAFgLAEQgLADgOAAIgUgCg");
	this.shape_978.setTransform(544.3,237.7);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#FFFFFF").s().p("AghBqQgMgDgJgGQgIgGgEgHQgFgIAAgJQAAgJAHgJQAGgJAMgHIAAgBQgHgDgDgGQgFgGAAgJQAAgHAEgGQAFgHAIgGIAAgBQgIgGgEgJQgFgKAAgMQAAgLAEgKQAEgJAIgHQAHgHAKgDQAKgFALAAQAKABAJADIA8AAIAAAMIgsAAQAHAHAFAJQAFAJAAALQAAAKgEAKQgEAKgIAGQgHAHgKADQgJAEgKAAQgPAAgNgGQgGADgEAGQgEAEAAAFQAAALAKAFQAIAFAQgBIAiAAQAOAAAKACQAKADAGADQAHAEADAGQADAHAAAIQAAAKgGAIQgFAJgKAHQgKAHgOAEQgOAFgQgBQgRAAgNgCgAg1AzQgFAIAAAIQAAAHADAFQAEAGAGADQAHAFAKACQALADANgBQANAAAMgDQAMgDAIgFQAIgGAFgGQAEgGAAgHQAAgGgCgEQgDgEgEgDQgJgFgTABIgiAAQgNAAgJgEQgMAHgGAIgAgXhdQgHADgGAFQgFAGgDAGQgDAIAAAJQAAAJADAHQADAHAFAFQAGAGAHACQAIADAIAAQAHAAAHgDQAHgCAGgGQAFgFADgHQAEgHAAgJQAAgJgEgIQgDgGgFgGQgGgFgHgDQgHgDgHgBQgIABgIADg");
	this.shape_979.setTransform(527,241);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#FFFFFF").s().p("AABBeQgJgFgGgIQgGgGgDgMQgCgKAAgNIAAhNIgrAAIAAgLIAsgBIABgwIALAAIAAAwIBMAAIAAAMIhMAAIAABPQAAALACAHQACAIAEAGQAEAGAIADQAHADANAAQAKAAAKgCIASgFIADAJQgKAFgKACQgLACgMABQgPgBgKgDg");
	this.shape_980.setTransform(472.7,235.5);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgKQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gIQAAgOgFgKQgEgLgHgHQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_981.setTransform(454.5,237.7);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgKQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gIQAAgOgFgKQgEgLgHgHQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_982.setTransform(436.5,237.7);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#FFFFFF").s().p("AgEBlQgJgCgHgEQgHgDgHgGQgGgEgGgHQgFgHgEgIIgIgSQgEgNgCgdQAAgPAGgaIAIgSIAKgPQAFgHAHgFQAHgEAIgEQAHgEAJgCQAIgCAKAAQANABASAHQALAGAKALIgIAJQgJgKgJgFQgMgGgOABQgQAAgNAFQgNAGgKAMQgJAMgFAQQgEASAAATQAAAUAEARQAFAQAJANQAJALAMAHQANAGAQAAQANAAALgEQAMgEAGgHIAAg+IgtAAIAAgLIA7AAIAABOQgJALgPAFQgUAHgOAAQgIgBgIgBg");
	this.shape_983.setTransform(400.1,235);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#FFFFFF").s().p("AgNBjQgFgFAAgJQAAgIAFgGQAFgEAHgBQAGABAFAEQAGAGAAAIQAAAJgGAFQgFAFgGAAQgHAAgFgFgAgKAjQgBgIABgIQABgGAEgGQAFgJALgMQAQgPADgFQAFgEACgGQACgGAAgHQAAgHgCgGQgDgGgEgFQgFgFgIgCQgHgDgKAAQgMAAgLAEQgLAGgJAJIgJgIQAKgLANgGIAOgFIAPgBQAMAAAKAEQAKADAHAGQAHAGADAIQAEAJAAAJQAAAIgDAHQgCAGgEAGQgFAHgOAOQgOAKgEAJQgEAGgBAFQgCAIABAHg");
	this.shape_984.setTransform(742.1,195.2);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#FFFFFF").s().p("AAbBoIAAiDIhHAAIAAgMIBVAAIAACPgAAVhOQgEgEAAgHQAAgGAEgEQADgEAGAAQAGAAAFAEQAEAEAAAGQAAAHgEAEQgFAEgGAAQgGAAgDgEg");
	this.shape_985.setTransform(650.8,194.8);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgJgEgPQgFgOAAgRQAAgSAFgOQAGgNAJgKQAKgKAMgFQAMgFANgBQANABAMAFQALAFALAKIABAAIgBgeIAAg6IANAAIAADWIgLAAIgCgVIAAAAQgLAKgMAHQgSAHgKABQgOAAgLgGgAgQgYQgKAFgHAIQgIAJgEALQgEAMAAAOQAAAOADALQAEAMAHAJQAGAIAKAEQAJAFALAAQANAAAMgHQANgGAMgNIAAhPQgMgMgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_986.setTransform(597.8,194.6);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FFFFFF").s().p("AgaBoQgNgFgLgJIgBAAIgBAQIgLAAIAAjWIANAAIAAA9IgBAgIABAAQALgMAOgGQAPgIANAAQAPAAAMAGQALAFAIAJQAHAKAEANQAEANAAARQAAASgFAPQgFAOgKAKQgJAKgMAFQgMAGgNAAQgLgBgNgFgAgXgXQgOAIgNAMIAABPQAMALAOAGQAMAFAKAAQAKAAAKgFQAKgFAHgIQAHgKAEgMQAEgMAAgOQAAgOgDgKQgDgLgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAGg");
	this.shape_987.setTransform(562.9,194.6);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFALQgGAKgBAMIBtAAIAAAAg");
	this.shape_988.setTransform(544.5,198);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#FFFFFF").s().p("AgdBKQgJgDgHgFQgIgFgDgIQgFgHAAgKQAAgMAHgJQAGgJANgGQAOgGAVgFQATgEAegCQAAgKgCgHQgDgJgEgGQgGgGgIgEQgIgEgMAAQgHAAgIACIgPAEQgNAGgLAIIgGgLQALgHAPgGIASgGQAJgCAIAAQAOAAALAFQAKAEAHAIQAHAHADAKQADAKAAAMIAABbIgLAAIgCgWIAAAAQgOALgPAHQgUAHgLABQgJAAgJgCgAADgBQgSADgLAFQgLAGgFAHQgFAHAAAIQAAAIADAGQADAFAGAEQAHAEAUACQANAAAOgGQAPgHAPgNIAAgtQgcADgSADg");
	this.shape_989.setTransform(490.3,198);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgJgEgPQgFgOAAgRQAAgSAFgOQAGgNAJgKQAKgKAMgFQAMgFANgBQANABAMAFQALAFALAKIABAAIgBgeIAAg6IANAAIAADWIgLAAIgCgVIAAAAQgLAKgMAHQgSAHgKABQgOAAgLgGgAgQgYQgKAFgHAIQgIAJgEALQgEAMAAAOQAAAOADALQAEAMAHAJQAGAIAKAEQAJAFALAAQANAAAMgHQANgGAMgNIAAhPQgMgMgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_990.setTransform(453.8,194.6);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFALQgGAKgBAMIBtAAIAAAAg");
	this.shape_991.setTransform(436.5,198);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#FFFFFF").s().p("AgVBGQgOgFgKgJQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAEAJAJQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gJQAAgNgFgKQgEgKgHgIQgGgHgKgDQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFALQgGAKgBAMIBtAAIAAAAg");
	this.shape_992.setTransform(418.5,198);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#FFFFFF").s().p("AAvBjIhLiLIgWgnIAAAAIACA4IAAB6IgNAAIAAjFIAPAAIBLCLIAVAnIABAAIgCg5IAAh5IAOAAIAADFg");
	this.shape_993.setTransform(400.4,195.3);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#FFFFFF").s().p("Ag2BKIAAiPIAMAAIABAjIABAAQAGgJAGgHQAIgHAIgFQAJgFAIgDQALgDAKAAIAPABQAIACAGADIgEAMQgPgFgMAAQgJAAgJACQgIADgIAFQgHAGgJAIQgIAJgGAMIAABZg");
	this.shape_994.setTransform(617.8,158.1);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FFFFFF").s().p("AgaBGQgMgEgKgKQgKgKgFgOQgGgOAAgSQAAgRAGgOQAFgOAKgKQAKgKAMgEQAMgGAOAAQAOAAANAGQAMAEAKAKQAKAKAFAOQAGAOAAARQAAASgGAOQgFAOgKAKQgKAKgMAEQgNAGgOAAQgOAAgMgGgAgWg6QgJAFgIAIQgIAIgEAMQgEAMAAANQAAAOAEAMQAEALAIAJQAIAJAJAEQALAFALAAQAMAAAKgFQAKgEAIgJQAHgJAFgLQAEgMAAgOQAAgNgEgMQgFgMgHgIQgIgIgKgFQgKgFgMAAQgLAAgLAFg");
	this.shape_995.setTransform(562.4,158.3);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#FFFFFF").s().p("AAMBrQgIgDgEgFQgGgGgDgJQgCgKAAgLIAAigIg2AAIAAgMIBCAAIAACuQAAAHACAHQACAGAEAFQAEAEAGACQAGACAHAAQAHAAAIgCIAPgFIAEAKQgKAEgHADQgIACgLAAQgKgBgIgCg");
	this.shape_996.setTransform(544.7,154.9);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#FFFFFF").s().p("AgGBIIhAiPIANAAIAoBZIARApIABAAIASgpIAnhZIAOAAIhACPg");
	this.shape_997.setTransform(508.4,158.3);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FFFFFF").s().p("AhCBjIAAjFIAtAAQALAAAKACQAJACAJADQAIADAHAFQAHAFAFAHQAGAGAEAIIAHARQAGAZAAAPQgDAcgDANIgHARQgEAHgGAHQgFAGgHAGQgHAFgIADQgIADgKACQgKACgLAAgAg1BXIAeAAQAKAAAJgBQAIgCAHgDQAHgDAGgFQAGgEAFgHQAJgLAEgQQAFgQAAgTQAAgTgFgQQgEgQgJgLIgLgKQgGgFgHgDQgHgDgIgBIgTgCIgeAAg");
	this.shape_998.setTransform(473,155.6);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#FFFFFF").s().p("AAlBjIgcheIgIgiIgBAAIgIAiIgaBeIgSAAIghjFIAOAAIAVCGIAGAvIABAAIAMgvIAZhTIAOAAIAYBTIANAvIABAAIAGgvIAViGIANAAIggDFg");
	this.shape_999.setTransform(400.4,155.6);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FFFFFF").s().p("Ag2BEIBghDIAAgBIhghDIAAgOIBtBMIAAALIhtBMg");
	this.shape_1000.setTransform(364.2,76.1);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#FFFFFF").s().p("Ag/BqIAAjQIALAAIACAVIAAAAQAMgLAOgGQAPgHAMAAQAPAAAMAFQALAFAIAKQAHAJAEAOQAEANAAARQAAASgFAOQgFAOgKAKQgJAKgNAGQgMAFgMAAQgLAAgNgGQgOgFgKgKIgBAAIABAeIAAA0gAgXhXQgOAHgNANIAABPQAMALAOAFQALAFAKAAQALAAAKgFQAKgEAHgJQAHgJAEgLQAEgMAAgPQAAgNgDgLQgDgMgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAHg");
	this.shape_1001.setTransform(454.9,82);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FFFFFF").s().p("AAwBsIAAhYQAAgMgCgIQgDgJgFgGQgEgGgIgDQgIgDgLAAQgHAAgGACQgHACgGAEQgLAHgRAQIAABoIgNAAIAAjXIANAAIAAA+IgBAmIABAAQAOgPANgIQAHgEAHgCQAHgDAIAAQAOAAAJAEQAKADAHAHQAGAIADALQADAJAAAPIAABag");
	this.shape_1002.setTransform(472.6,75.3);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#FFFFFF").s().p("AgTBGQgPgEgKgKQgLgKgFgOQgEgJgCgXQAAgLAGgUQAGgOALgKQALgJAOgGQAOgEAPAAQAMAAATAGQALAFAKAKIgHAJQgKgJgKgEQgMgGgMAAQgNAAgNAFQgLAEgJAJQgJAIgEAMQgFAMAAANQAAAOAFAMQAEAMAJAIQAIAIAMAGQAMAEANAAQAOAAANgGQAMgFAKgKIAHAKQgMALgNAFQgUAHgLAAQgQgBgOgFg");
	this.shape_1003.setTransform(508.7,78.9);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FFFFFF").s().p("AAbBoIAAiEIhHAAIAAgLIBVAAIAACPgAAVhOQgEgEAAgGQAAgHAEgEQADgEAGAAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAQgGAAgDgEg");
	this.shape_1004.setTransform(488.8,75.7);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#FFFFFF").s().p("AAwBKIAAhXQAAgMgCgJQgDgJgFgGQgEgGgIgDQgIgDgLAAQgHAAgGACQgHACgGAEQgLAHgRARIAABnIgNAAIAAiPIALAAIACAbIABAAQAOgPAMgHQAHgEAHgCQAHgDAIAAQAOAAAJAEQAKADAHAHQAGAIADALQADAKAAAPIAABZg");
	this.shape_1005.setTransform(634.6,78.7);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#FFFFFF").s().p("Ag2BKIAAiPIAMAAIABAjIABAAQAGgJAGgHQAIgHAIgFQAJgFAIgDQALgDAKAAIAPABQAIACAGADIgEAMQgPgFgMAAQgJAAgJACQgIADgIAFIgQAOQgIAJgGAMIAABZg");
	this.shape_1006.setTransform(419.8,78.7);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#FFFFFF").s().p("AgOBKIgTgGQgRgFgOgKIAHgKQANALAOAEIARAFIAUABQALAAAJgCQAIgDAFgDQAGgEADgFQADgFAAgGQgCgMgHgGQgFgEgKgEIgbgHIgYgGQgLgDgHgFQgHgFgEgGQgEgGAAgIQAAgIAEgHQADgHAHgFQAHgFALgDQALgEANAAQAOABAPAFQAPAEALAIIgHAJQgKgHgMgEQgNgEgNAAQgMAAgIACQgIACgFAEQgFAEgCAEQgCAFAAAFQAAAFADAFQADAEAGAEQAHAEAbAIQATAEAMADQAMAEAHAFQAGAFADAGQACAGAAAJQAAAJgEAGQgEAIgHAGQgIAFgLAEQgLACgOAAQgKABgKgCg");
	this.shape_1007.setTransform(544.3,277.4);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FFFFFF").s().p("AghBpQgMgDgJgFQgIgGgEgHQgFgIAAgJQAAgJAHgJQAGgKAMgHIAAAAQgHgDgDgGQgFgGAAgJQAAgHAEgGQAFgHAIgGIAAgBQgIgGgEgJQgFgKAAgMQAAgLAEgKQAEgJAIgHQAHgHAKgDQAKgFALAAQAKAAAJAEIA8AAIAAAMIgsAAQAHAHAFAJQAFAKAAAKQAAALgEAJQgEAJgIAHQgHAHgKADQgJAEgKAAQgPAAgNgGQgGADgEAGQgEAEAAAFQAAALAKAFQAIAFAQgBIAiAAQAOAAAKADQAKABAGAEQAHAEADAGQADAGAAAJQAAAKgGAIQgFAJgKAHQgKAHgOAEQgOAFgQgBQgRAAgNgDgAg1AzQgFAIAAAIQAAAGADAGQAEAFAGAEQAHAFAKACQALADANgBQANABAMgEQAMgDAIgFQAIgGAFgGQAEgGAAgIQAAgFgCgFQgDgDgEgDQgJgFgTABIgiAAQgNAAgJgEQgMAHgGAIgAgXhdQgHADgGAFQgFAGgDAGQgDAIAAAJQAAAIADAIQADAHAFAFQAGAGAHACQAIADAIAAQAHAAAHgDQAHgCAGgGQAFgFADgHQAEgIAAgIQAAgJgEgIQgDgGgFgGQgGgFgHgDQgHgDgHAAQgIAAgIADg");
	this.shape_1008.setTransform(527,280.7);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FFFFFF").s().p("AABBeQgJgFgGgIQgGgGgDgMQgCgJAAgOIAAhNIgrAAIAAgLIAsgBIABgwIALAAIAAAwIBMAAIAAAMIhMAAIAABPQAAALACAHQACAJAEAFQAEAGAIADQAHADANAAQAKAAAKgCIASgGIADAKQgKAFgKACQgLADgMgBQgPAAgKgDg");
	this.shape_1009.setTransform(472.7,275.2);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#FFFFFF").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgFQANgFANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAFgRAAQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_1010.setTransform(454.5,277.4);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FFFFFF").s().p("AgVBHQgOgGgKgJQgKgLgGgNIgFgPIgBgRQAAgQAGgPQAFgNALgKQAKgKANgFQANgFANgBQAPAAAMAFQALAFAJAIQAIAJAFAMQAEAMAAAQIAAAKIh6AAQABAPAFAMQAFALAJAIQAIAIAMAEQALAEAMAAQAOAAAMgEQALgEALgIIAFAKQgLAJgLADQgPAFgRAAQgPAAgOgEgAA4gIQAAgOgFgLQgEgKgHgHQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_1011.setTransform(436.5,277.4);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FFFFFF").s().p("AgEBlQgJgCgHgEQgHgDgHgGQgGgFgGgGQgFgHgEgIIgIgSQgEgNgCgdQAAgPAGgbQADgJAFgIIAKgPQAFgHAHgFQAHgEAIgEQAHgEAJgBQAIgDAKAAQANABASAHQALAGAKALIgIAJQgJgKgJgFQgMgGgOABQgQAAgNAFQgNAHgKALQgJAMgFARQgEAQAAAUQAAAUAEARQAFARAJAMQAJAMAMAFQANAHAQAAQANAAALgEQAMgEAGgHIAAg+IgtAAIAAgLIA7AAIAABOQgJALgPAFQgUAHgOgBQgIABgIgCg");
	this.shape_1012.setTransform(400.1,274.7);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#FFFFFF").s().p("AgNBjQgFgFAAgJQAAgIAFgGQAFgFAHAAQAGAAAFAFQAGAGAAAIQAAAJgGAFQgFAFgGAAQgHAAgFgFgAgKAjQgBgIABgIQABgGAEgGQAFgJALgMQAQgPADgFQAFgEACgGQACgGAAgGQAAgHgCgHQgDgGgEgFQgFgFgIgDQgHgCgKAAQgMAAgLAEQgLAGgJAJIgJgIQAKgLANgGIAOgEQAIgCAHAAQAMAAAKAEQAKADAHAGQAHAGADAIQAEAJAAAJQAAAIgDAHQgCAGgEAGQgFAHgOAOQgOAKgEAJQgEAFgBAGQgCAHABAIg");
	this.shape_1013.setTransform(742.1,234.9);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgJgEgPQgFgOAAgRQAAgSAFgOQAGgNAJgKQAKgKAMgFQAMgFANgBQANABAMAFQALAFALAKIABAAIgBgeIAAg6IANAAIAADWIgLAAIgCgVIAAAAQgLALgMAGQgSAHgKAAQgOABgLgGgAgQgYQgKAFgHAJQgIAIgEALQgEAMAAAOQAAAOADAMQAEALAHAJQAGAIAKAEQAJAFALAAQANAAAMgHQANgGAMgNIAAhPQgMgMgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_1014.setTransform(597.8,234.3);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FFFFFF").s().p("AgaBoQgNgFgLgJIgBAAIgBAQIgLAAIAAjWIANAAIAAA+IgBAeIABAAQALgLAOgHQAPgHANAAQAPAAAMAGQALAFAIAJQAHAKAEAMQAEAOAAARQAAASgFAOQgFAPgKAKQgJAKgMAFQgMAGgNgBQgLAAgNgFgAgXgXQgOAIgNAMIAABPQAMALAOAGQAMAFAKAAQAKAAAKgFQAKgFAHgIQAHgKAEgMQAEgMAAgOQAAgOgDgKQgDgLgFgIQgGgJgKgEQgJgFgNAAQgLAAgNAGg");
	this.shape_1015.setTransform(562.9,234.3);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgKQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gIQAAgOgFgKQgEgLgHgHQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_1016.setTransform(544.5,237.7);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#FFFFFF").s().p("AAgBIIgWhWIgJgqIgBAAIgJArIgWBVIgSAAIgliPIAPAAIAWBcIAJAmIABAAIAJgmIAXhZIAQAAIAWBZIAKAmIABAAIAJgmIAXhcIAMAAIgkCPg");
	this.shape_1017.setTransform(526.4,237.7);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#FFFFFF").s().p("AgdBKQgJgDgHgFQgIgFgDgHQgFgIAAgKQAAgMAHgJQAGgJANgGQAOgGAVgFQATgEAegCQAAgKgCgHQgDgJgEgGQgGgGgIgEQgIgEgMAAQgHAAgIACIgPAEQgNAGgLAIIgGgKQALgIAPgGIASgGQAJgCAIAAQAOAAALAFQAKAEAHAIQAHAHADAKQADAKAAAMIAABbIgLAAIgCgWIAAAAQgOALgPAHQgUAHgLABQgJgBgJgBgAADgBQgSADgLAFQgLAGgFAHQgFAHAAAJQAAAHADAGQADAFAGADQAHAFAUACQANAAAOgHQAPgGAPgNIAAgtQgcADgSADg");
	this.shape_1018.setTransform(490.3,237.7);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FFFFFF").s().p("AgZBoQgMgEgIgKQgJgJgEgPQgFgOAAgRQAAgSAFgOQAGgNAJgKQAKgKAMgFQAMgFANgBQANABAMAFQALAFALAKIABAAIgBgeIAAg6IANAAIAADWIgLAAIgCgVIAAAAQgLALgMAGQgSAHgKAAQgOABgLgGgAgQgYQgKAFgHAJQgIAIgEALQgEAMAAAOQAAAOADAMQAEALAHAJQAGAIAKAEQAJAFALAAQANAAAMgHQANgGAMgNIAAhPQgMgMgMgFQgLgFgLAAQgLAAgKAFg");
	this.shape_1019.setTransform(453.8,234.3);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgKQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gIQAAgOgFgKQgEgLgHgHQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_1020.setTransform(436.5,237.7);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FFFFFF").s().p("AgVBGQgOgEgKgKQgKgKgGgOIgFgPIgBgRQAAgQAGgPQAFgNALgLQAKgJANgFQANgGANAAQAPABAMAEQALAFAJAIQAIAJAFAMQAEANAAAPIAAAKIh6AAQABAPAFAMQAFALAJAJQAIAHAMAEQALAEAMAAQAOAAAMgEQALgEALgHIAFAJQgLAJgLADQgPAFgRABQgPAAgOgGgAA4gIQAAgOgFgKQgEgLgHgHQgGgGgKgEQgJgDgLAAQgJAAgKAEQgKADgIAHQgIAHgFAKQgGALgBANIBtAAIAAAAg");
	this.shape_1021.setTransform(418.5,237.7);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#FFFFFF").s().p("AgaBGQgMgEgKgKQgKgKgFgOQgGgPAAgQQAAgRAGgPQAFgOAKgKQAKgJAMgFQAMgGAOAAQAOAAANAGQAMAFAKAJQAKAKAFAOQAGAPAAARQAAAQgGAPQgFAOgKAKQgKAKgMAEQgNAGgOAAQgOAAgMgGgAgWg6QgJAFgIAIQgIAJgEALQgEAMAAAOQAAAOAEALQAEALAIAJQAIAJAJAEQALAFALAAQAMAAAKgFQAKgEAIgJQAHgJAFgLQAEgLAAgOQAAgOgEgMQgFgLgHgJQgIgIgKgFQgKgFgMAAQgLAAgLAFg");
	this.shape_1022.setTransform(562.4,198);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FFFFFF").s().p("AAMBrQgIgDgEgFQgGgHgDgJQgCgJAAgLIAAigIg2AAIAAgLIBCAAIAACtQAAAHACAHQACAGAEAFQAEAEAGACQAGACAHAAQAHAAAIgCIAPgFIAEAKQgKAFgHACQgIACgLAAQgKgBgIgCg");
	this.shape_1023.setTransform(544.7,194.6);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#FFFFFF").s().p("AhCBjIAAjFIAtAAQALAAAKACQAJACAJADQAIAEAHAEQAHAGAFAGQAGAGAEAIIAHARQAGAZAAAPQgDAcgDAMIgHASQgEAHgGAHQgFAGgHAGQgHAEgIAEQgIADgKACQgKACgLAAgAg1BXIAeAAQAKAAAJgCQAIgBAHgDQAHgDAGgFQAGgEAFgHQAJgLAEgQQAFgQAAgTQAAgTgFgQQgEgQgJgLIgLgKQgGgEgHgDQgHgEgIgCIgTgBIgeAAg");
	this.shape_1024.setTransform(473,195.3);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#FFFFFF").s().p("AAlBjIgcheIgIgiIgBAAIgIAiIgaBeIgSAAIghjFIAOAAIAVCHIAGAuIABAAIAMguIAZhUIAOAAIAYBUIANAuIABAAIAGguIAViHIANAAIggDFg");
	this.shape_1025.setTransform(400.4,195.3);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#FFFFFF").s().p("Ag2BKIAAiPIAMAAIABAjIABAAQAGgJAGgHQAIgHAIgFQAJgFAIgDQALgDAKAAIAPABQAIACAGADIgEAMQgPgFgMAAQgJAAgJACQgIADgIAFQgHAGgJAIQgIAJgGAMIAABZg");
	this.shape_1026.setTransform(527.8,158.1);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#FFFFFF").s().p("AA+BjIgXhEIhOAAIgXBEIgOAAIBGjFIANAAIBFDFgAAjAUIgNglQgOgogHgcIgBAAIgWBEIgMAlIBFAAg");
	this.shape_1027.setTransform(400.4,155.6);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#FFFFFF").s().p("AgTBGQgPgEgKgKQgLgKgFgOQgEgJgCgXQAAgLAGgUQAGgOALgKQALgKAOgFQAOgEAPAAQAMAAATAGQALAGAKAJIgHAJQgKgJgKgEQgMgGgMAAQgNAAgNAFQgLAFgJAIQgJAIgEAMQgFAMAAANQAAAOAFAMQAEAMAJAIQAIAJAMAFQAMAEANAAQAOAAANgGQAMgFAKgKIAHAJQgMAMgNAFQgUAHgLAAQgQgBgOgFg");
	this.shape_1028.setTransform(508.7,118.6);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#FFFFFF").s().p("AAbBoIAAiDIhHAAIAAgMIBVAAIAACPgAAVhOQgEgEAAgGQAAgHAEgEQADgEAGAAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAQgGAAgDgEg");
	this.shape_1029.setTransform(488.8,115.4);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#FFFFFF").s().p("AgGBjIAAhJIhEh8IAPAAIAjBBIAYAuIACAAIAZguIAihBIAOAAIhEB8IAABJg");
	this.shape_1030.setTransform(400.3,76.2);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#FFFFFF").s().p("Ag2BEIBghDIAAgBIhghDIAAgOIBtBMIAAALIhtBMg");
	this.shape_1031.setTransform(364.2,76.1);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#FFFFFF").s().p("AgfBGQgJgDgHgHQgHgIgDgLQgDgKAAgPIAAhZIANAAIAABXQAAAMACAJQADAJAFAGQAFAGAIADQAHADALAAQAGAAAHgCQAHgCAHgEQAIgFATgUIAAhmIANAAIAACPIgLAAIgBgcIgBAAQgOAPgMAIQgIAEgHADQgHACgJAAQgNAAgJgEg");
	this.shape_1032.setTransform(436.1,79.1);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#FFFFFF").s().p("AgeCIQgLgDgIgEIAGgLQAHAEAIADQAKACAJAAQAMAAAIgDQAIgDAFgGQAFgGACgIQABgIAAgKIAAiRIhHAAIAAgLIBVAAIAACaQAAAOgDAKQgDALgHAHQgGAIgLADQgLAEgPAAQgJAAgLgCgAAahwQgEgEAAgHQAAgGAEgEQADgEAGAAQAGAAAFAEQAEAEAAAGQAAAHgEAEQgFAEgGAAQgGAAgDgEg");
	this.shape_1033.setTransform(470.3,79.1);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#FFFFFF").s().p("AgfBGQgJgDgHgHQgHgIgDgLQgDgKAAgPIAAhZIANAAIAABXQAAAMACAJQADAJAFAGQAFAGAIADQAHADALAAQAGAAAHgCQAHgCAHgEQAIgFATgUIAAhmIANAAIAACPIgLAAIgBgcIgBAAQgOAPgMAIQgIAEgHADQgHACgJAAQgNAAgJgEg");
	this.shape_1034.setTransform(436.1,79.1);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#FFFFFF").s().p("AABBdQgJgEgGgHQgGgIgDgKQgCgKAAgOIAAhOIgsAAIAAgKIAtgBIABgvIALAAIAAAvIBMAAIAAALIhMAAIAABPQAAALACAIQACAJAEAFQAEAGAIADQAHADANAAQAKAAAKgCIARgGIAEALQgKAEgKACQgLADgMAAQgPgBgKgEg");
	this.shape_1035.setTransform(526.7,76.7);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#FFFFFF").s().p("AAwBsIAAhYQAAgMgCgIQgDgJgFgGQgEgGgIgDQgIgDgLAAQgHAAgGACQgHACgGAEQgLAHgRAQIAABoIgNAAIAAjXIANAAIAAA+IgBAmIABAAQAOgPANgIQAHgEAHgCQAHgDAIAAQAOAAAJAEQAKADAHAHQAGAIADALQADAJAAAPIAABag");
	this.shape_1036.setTransform(562.6,75.3);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#FFFFFF").s().p("AgZBuIAAiEIgrAAIAAgKIArgBIAAgSQABgNADgLQADgLAHgHQAHgIAIgEQALgEANAAQAKAAAKACQAKACALAFIgFAKQgKgEgHgCQgIgBgKAAQgLAAgIADQgIADgFAGQgEAGgCAJQgDAIAAAKIAAATIBCAAIAAALIhCAAIAACEg");
	this.shape_1037.setTransform(653.7,75.1);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#FFFFFF").s().p("AgaBGQgMgEgKgKQgKgKgFgOQgGgPAAgRQAAgQAGgPQAFgOAKgKQAKgJAMgGQAMgEAOAAQAOAAANAEQAMAGAKAJQAKAKAFAOQAGAPAAAQQAAARgGAPQgFAOgKAKQgKAKgMAEQgNAFgOABQgOgBgMgFgAgWg6QgJAEgIAJQgIAIgEAMQgEAMAAANQAAAOAEAMQAEALAIAJQAIAIAJAGQALAEALAAQAMAAAKgEQAKgGAIgIQAHgJAFgLQAEgMAAgOQAAgNgEgMQgFgMgHgIQgIgJgKgEQgKgFgMAAQgLAAgLAFg");
	this.shape_1038.setTransform(418.4,78.9);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#FFFFFF").s().p("AgfBGQgJgDgHgHQgHgIgDgLQgDgKAAgPIAAhZIANAAIAABXQAAAMACAJQADAJAFAGQAFAGAIADQAHADALAAQAGAAAHgCQAHgCAHgEQAIgFATgUIAAhmIANAAIAACPIgLAAIgBgcIgBAAQgOAPgMAIQgIAEgHADQgHACgJAAQgNAAgJgEg");
	this.shape_1039.setTransform(436.1,79.1);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#FFFFFF").s().p("AAwBKIAAhXQAAgMgCgJQgDgJgFgGQgEgGgIgDQgIgDgLAAQgHAAgGACQgHACgGAEQgLAHgRARIAABnIgNAAIAAiPIALAAIACAbIABAAQAOgPAMgHQAHgEAHgCQAHgDAIAAQAOAAAJAEQAKADAHAHQAGAIADALQADAKAAAPIAABZg");
	this.shape_1040.setTransform(706.6,78.7);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#FFFFFF").s().p("AgLBhQgFgFAAgIQAAgJAFgGQAFgEAGAAQAHAAAFAEQAFAGABAJQgBAIgFAFQgFAFgHAAQgGAAgFgFgAgEAhIgChxIAAgVIAMAAIAAAVIgBBxg");
	this.shape_1041.setTransform(742.4,76.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_898,p:{y:76.1}}]},24).to({state:[{t:this.shape_898,p:{y:76.1}}]},23).to({state:[{t:this.shape_898,p:{y:76.1}}]},13).to({state:[{t:this.shape_898,p:{y:76.1}},{t:this.shape_899}]},1).to({state:[{t:this.shape_898,p:{y:76.1}},{t:this.shape_899},{t:this.shape_900,p:{y:78.7,x:419.8}}]},2).to({state:[{t:this.shape_898,p:{y:76.1}},{t:this.shape_899},{t:this.shape_900,p:{y:78.7,x:419.8}},{t:this.shape_901,p:{x:436.5}}]},3).to({state:[{t:this.shape_898,p:{y:76.1}},{t:this.shape_899},{t:this.shape_900,p:{y:78.7,x:419.8}},{t:this.shape_902,p:{x:436.5}},{t:this.shape_901,p:{x:454.5}}]},2).to({state:[{t:this.shape_898,p:{y:76.1}},{t:this.shape_899},{t:this.shape_900,p:{y:78.7,x:419.8}},{t:this.shape_902,p:{x:436.5}},{t:this.shape_901,p:{x:454.5}},{t:this.shape_903,p:{x:472.7}}]},3).to({state:[{t:this.shape_898,p:{y:76.1}},{t:this.shape_899},{t:this.shape_900,p:{y:78.7,x:419.8}},{t:this.shape_902,p:{x:436.5}},{t:this.shape_901,p:{x:454.5}},{t:this.shape_903,p:{x:472.7}},{t:this.shape_904,p:{x:488.8}}]},2).to({state:[{t:this.shape_898,p:{y:76.1}},{t:this.shape_899},{t:this.shape_900,p:{y:78.7,x:419.8}},{t:this.shape_902,p:{x:436.5}},{t:this.shape_901,p:{x:454.5}},{t:this.shape_903,p:{x:472.7}},{t:this.shape_904,p:{x:488.8}},{t:this.shape_905,p:{y:78.7}}]},3).to({state:[{t:this.shape_898,p:{y:76.1}},{t:this.shape_899},{t:this.shape_900,p:{y:78.7,x:419.8}},{t:this.shape_902,p:{x:436.5}},{t:this.shape_901,p:{x:454.5}},{t:this.shape_903,p:{x:472.7}},{t:this.shape_904,p:{x:488.8}},{t:this.shape_905,p:{y:78.7}},{t:this.shape_906,p:{x:527}}]},2).to({state:[{t:this.shape_898,p:{y:76.1}},{t:this.shape_899},{t:this.shape_900,p:{y:78.7,x:419.8}},{t:this.shape_902,p:{x:436.5}},{t:this.shape_901,p:{x:454.5}},{t:this.shape_903,p:{x:472.7}},{t:this.shape_904,p:{x:488.8}},{t:this.shape_905,p:{y:78.7}},{t:this.shape_906,p:{x:527}},{t:this.shape_907,p:{x:544.3}}]},3).to({state:[{t:this.shape_898,p:{y:76.1}},{t:this.shape_899},{t:this.shape_900,p:{y:78.7,x:419.8}},{t:this.shape_902,p:{x:436.5}},{t:this.shape_901,p:{x:454.5}},{t:this.shape_903,p:{x:472.7}},{t:this.shape_904,p:{x:488.8}},{t:this.shape_905,p:{y:78.7}},{t:this.shape_906,p:{x:527}},{t:this.shape_907,p:{x:544.3}},{t:this.shape_908,p:{y:76.2}}]},2).to({state:[{t:this.shape_898,p:{y:76.1}},{t:this.shape_899},{t:this.shape_900,p:{y:78.7,x:419.8}},{t:this.shape_902,p:{x:436.5}},{t:this.shape_901,p:{x:454.5}},{t:this.shape_903,p:{x:472.7}},{t:this.shape_904,p:{x:488.8}},{t:this.shape_905,p:{y:78.7}},{t:this.shape_906,p:{x:527}},{t:this.shape_907,p:{x:544.3}},{t:this.shape_908,p:{y:76.2}}]},21).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},10).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},1).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_901,p:{x:418.5}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},2).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_902,p:{x:418.5}},{t:this.shape_901,p:{x:436.5}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},3).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_902,p:{x:418.5}},{t:this.shape_901,p:{x:436.5}},{t:this.shape_918,p:{x:453.8}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},2).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_902,p:{x:418.5}},{t:this.shape_901,p:{x:436.5}},{t:this.shape_918,p:{x:453.8}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},3).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_902,p:{x:418.5}},{t:this.shape_901,p:{x:436.5}},{t:this.shape_918,p:{x:453.8}},{t:this.shape_919,p:{x:490.3}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},2).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_902,p:{x:418.5}},{t:this.shape_901,p:{x:436.5}},{t:this.shape_918,p:{x:453.8}},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},3).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_902,p:{x:418.5}},{t:this.shape_901,p:{x:436.5}},{t:this.shape_918,p:{x:453.8}},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},2).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_921,p:{x:418.5}},{t:this.shape_902,p:{x:436.5}},{t:this.shape_918,p:{x:453.8}},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_901,p:{x:544.5}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},3).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_921,p:{x:418.5}},{t:this.shape_902,p:{x:436.5}},{t:this.shape_918,p:{x:453.8}},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_901,p:{x:544.5}},{t:this.shape_922,p:{x:562.9}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},2).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_921,p:{x:418.5}},{t:this.shape_902,p:{x:436.5}},{t:this.shape_918,p:{x:453.8}},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_901,p:{x:544.5}},{t:this.shape_922,p:{x:562.9}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},3).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_921,p:{x:418.5}},{t:this.shape_902,p:{x:436.5}},{t:this.shape_923},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_901,p:{x:544.5}},{t:this.shape_922,p:{x:562.9}},{t:this.shape_918,p:{x:597.8}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},2).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_924,p:{x:418.5}},{t:this.shape_921,p:{x:436.5}},{t:this.shape_923},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_902,p:{x:544.5}},{t:this.shape_922,p:{x:562.9}},{t:this.shape_918,p:{x:597.8}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},3).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_924,p:{x:418.5}},{t:this.shape_921,p:{x:436.5}},{t:this.shape_923},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_902,p:{x:544.5}},{t:this.shape_922,p:{x:562.9}},{t:this.shape_918,p:{x:597.8}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_907,p:{x:634.3}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},2).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_924,p:{x:418.5}},{t:this.shape_921,p:{x:436.5}},{t:this.shape_923},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_902,p:{x:544.5}},{t:this.shape_922,p:{x:562.9}},{t:this.shape_918,p:{x:597.8}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_907,p:{x:634.3}},{t:this.shape_904,p:{x:650.8}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},2).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_924,p:{x:418.5}},{t:this.shape_921,p:{x:436.5}},{t:this.shape_923},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_902,p:{x:544.5}},{t:this.shape_922,p:{x:562.9}},{t:this.shape_918,p:{x:597.8}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_907,p:{x:634.3}},{t:this.shape_904,p:{x:650.8}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},2).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_924,p:{x:418.5}},{t:this.shape_921,p:{x:436.5}},{t:this.shape_923},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_902,p:{x:544.5}},{t:this.shape_922,p:{x:562.9}},{t:this.shape_918,p:{x:597.8}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_907,p:{x:634.3}},{t:this.shape_904,p:{x:650.8}},{t:this.shape_906,p:{x:671}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},3).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_924,p:{x:418.5}},{t:this.shape_921,p:{x:436.5}},{t:this.shape_923},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_902,p:{x:544.5}},{t:this.shape_922,p:{x:562.9}},{t:this.shape_918,p:{x:597.8}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_907,p:{x:634.3}},{t:this.shape_904,p:{x:650.8}},{t:this.shape_906,p:{x:671}},{t:this.shape_925,p:{y:78.7}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},3).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_926},{t:this.shape_924,p:{x:436.5}},{t:this.shape_923},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_921,p:{x:544.5}},{t:this.shape_922,p:{x:562.9}},{t:this.shape_918,p:{x:597.8}},{t:this.shape_902,p:{x:616.5}},{t:this.shape_907,p:{x:634.3}},{t:this.shape_904,p:{x:650.8}},{t:this.shape_906,p:{x:671}},{t:this.shape_925,p:{y:78.7}},{t:this.shape_901,p:{x:706.5}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},2).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_926},{t:this.shape_924,p:{x:436.5}},{t:this.shape_923},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_921,p:{x:544.5}},{t:this.shape_922,p:{x:562.9}},{t:this.shape_918,p:{x:597.8}},{t:this.shape_902,p:{x:616.5}},{t:this.shape_907,p:{x:634.3}},{t:this.shape_904,p:{x:650.8}},{t:this.shape_906,p:{x:671}},{t:this.shape_925,p:{y:78.7}},{t:this.shape_901,p:{x:706.5}},{t:this.shape_927,p:{x:725.8,y:78.7}},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},3).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_926},{t:this.shape_924,p:{x:436.5}},{t:this.shape_923},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_921,p:{x:544.5}},{t:this.shape_922,p:{x:562.9}},{t:this.shape_918,p:{x:597.8}},{t:this.shape_902,p:{x:616.5}},{t:this.shape_907,p:{x:634.3}},{t:this.shape_904,p:{x:650.8}},{t:this.shape_906,p:{x:671}},{t:this.shape_925,p:{y:78.7}},{t:this.shape_901,p:{x:706.5}},{t:this.shape_927,p:{x:725.8,y:78.7}},{t:this.shape_928},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},2).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_926},{t:this.shape_924,p:{x:436.5}},{t:this.shape_923},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_921,p:{x:544.5}},{t:this.shape_922,p:{x:562.9}},{t:this.shape_918,p:{x:597.8}},{t:this.shape_902,p:{x:616.5}},{t:this.shape_907,p:{x:634.3}},{t:this.shape_904,p:{x:650.8}},{t:this.shape_906,p:{x:671}},{t:this.shape_925,p:{y:78.7}},{t:this.shape_901,p:{x:706.5}},{t:this.shape_927,p:{x:725.8,y:78.7}},{t:this.shape_928},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},3).to({state:[{t:this.shape_916,p:{y:76.1}},{t:this.shape_917,p:{y:76.2}},{t:this.shape_926},{t:this.shape_924,p:{x:436.5}},{t:this.shape_923},{t:this.shape_919,p:{x:490.3}},{t:this.shape_920},{t:this.shape_921,p:{x:544.5}},{t:this.shape_922,p:{x:562.9}},{t:this.shape_918,p:{x:597.8}},{t:this.shape_902,p:{x:616.5}},{t:this.shape_907,p:{x:634.3}},{t:this.shape_904,p:{x:650.8}},{t:this.shape_906,p:{x:671}},{t:this.shape_925,p:{y:78.7}},{t:this.shape_901,p:{x:706.5}},{t:this.shape_927,p:{x:725.8,y:78.7}},{t:this.shape_928},{t:this.shape_898,p:{y:115.8}},{t:this.shape_915},{t:this.shape_900,p:{y:118.4,x:419.8}},{t:this.shape_914,p:{x:436.5}},{t:this.shape_913,p:{x:454.5}},{t:this.shape_912,p:{x:472.7}},{t:this.shape_911,p:{y:115.4,x:488.8}},{t:this.shape_905,p:{y:118.4}},{t:this.shape_910,p:{x:527}},{t:this.shape_909,p:{x:544.3}},{t:this.shape_908,p:{y:115.9}}]},18).to({state:[{t:this.shape_947,p:{y:76.1}},{t:this.shape_946},{t:this.shape_916,p:{y:115.8}},{t:this.shape_917,p:{y:115.9}},{t:this.shape_945},{t:this.shape_944,p:{x:436.5}},{t:this.shape_943},{t:this.shape_942,p:{x:490.3}},{t:this.shape_941},{t:this.shape_940,p:{x:544.5}},{t:this.shape_939,p:{x:562.9}},{t:this.shape_938},{t:this.shape_914,p:{x:616.5}},{t:this.shape_909,p:{x:634.3}},{t:this.shape_937,p:{x:650.8}},{t:this.shape_910,p:{x:671}},{t:this.shape_925,p:{y:118.4}},{t:this.shape_913,p:{x:706.5}},{t:this.shape_900,p:{y:118.4,x:725.8}},{t:this.shape_936},{t:this.shape_898,p:{y:155.5}},{t:this.shape_935},{t:this.shape_934,p:{y:158.1}},{t:this.shape_933,p:{x:436.5}},{t:this.shape_932,p:{x:454.5}},{t:this.shape_931,p:{x:472.7}},{t:this.shape_911,p:{y:155.1,x:488.8}},{t:this.shape_905,p:{y:158.1}},{t:this.shape_930,p:{x:527}},{t:this.shape_929,p:{x:544.3}},{t:this.shape_908,p:{y:155.6}}]},1).to({state:[{t:this.shape_947,p:{y:76.1}},{t:this.shape_946},{t:this.shape_901,p:{x:418.5}},{t:this.shape_916,p:{y:115.8}},{t:this.shape_917,p:{y:115.9}},{t:this.shape_945},{t:this.shape_944,p:{x:436.5}},{t:this.shape_943},{t:this.shape_942,p:{x:490.3}},{t:this.shape_941},{t:this.shape_940,p:{x:544.5}},{t:this.shape_939,p:{x:562.9}},{t:this.shape_938},{t:this.shape_914,p:{x:616.5}},{t:this.shape_909,p:{x:634.3}},{t:this.shape_937,p:{x:650.8}},{t:this.shape_910,p:{x:671}},{t:this.shape_925,p:{y:118.4}},{t:this.shape_913,p:{x:706.5}},{t:this.shape_900,p:{y:118.4,x:725.8}},{t:this.shape_936},{t:this.shape_898,p:{y:155.5}},{t:this.shape_935},{t:this.shape_934,p:{y:158.1}},{t:this.shape_933,p:{x:436.5}},{t:this.shape_932,p:{x:454.5}},{t:this.shape_931,p:{x:472.7}},{t:this.shape_911,p:{y:155.1,x:488.8}},{t:this.shape_905,p:{y:158.1}},{t:this.shape_930,p:{x:527}},{t:this.shape_929,p:{x:544.3}},{t:this.shape_908,p:{y:155.6}}]},2).to({state:[{t:this.shape_947,p:{y:76.1}},{t:this.shape_946},{t:this.shape_901,p:{x:418.5}},{t:this.shape_922,p:{x:436.9}},{t:this.shape_916,p:{y:115.8}},{t:this.shape_917,p:{y:115.9}},{t:this.shape_945},{t:this.shape_944,p:{x:436.5}},{t:this.shape_943},{t:this.shape_942,p:{x:490.3}},{t:this.shape_941},{t:this.shape_940,p:{x:544.5}},{t:this.shape_939,p:{x:562.9}},{t:this.shape_938},{t:this.shape_914,p:{x:616.5}},{t:this.shape_909,p:{x:634.3}},{t:this.shape_937,p:{x:650.8}},{t:this.shape_910,p:{x:671}},{t:this.shape_925,p:{y:118.4}},{t:this.shape_913,p:{x:706.5}},{t:this.shape_900,p:{y:118.4,x:725.8}},{t:this.shape_936},{t:this.shape_898,p:{y:155.5}},{t:this.shape_935},{t:this.shape_934,p:{y:158.1}},{t:this.shape_933,p:{x:436.5}},{t:this.shape_932,p:{x:454.5}},{t:this.shape_931,p:{x:472.7}},{t:this.shape_911,p:{y:155.1,x:488.8}},{t:this.shape_905,p:{y:158.1}},{t:this.shape_930,p:{x:527}},{t:this.shape_929,p:{x:544.3}},{t:this.shape_908,p:{y:155.6}}]},3).to({state:[{t:this.shape_947,p:{y:76.1}},{t:this.shape_946},{t:this.shape_901,p:{x:418.5}},{t:this.shape_922,p:{x:436.9}},{t:this.shape_916,p:{y:115.8}},{t:this.shape_917,p:{y:115.9}},{t:this.shape_945},{t:this.shape_944,p:{x:436.5}},{t:this.shape_943},{t:this.shape_942,p:{x:490.3}},{t:this.shape_941},{t:this.shape_940,p:{x:544.5}},{t:this.shape_939,p:{x:562.9}},{t:this.shape_938},{t:this.shape_914,p:{x:616.5}},{t:this.shape_909,p:{x:634.3}},{t:this.shape_937,p:{x:650.8}},{t:this.shape_910,p:{x:671}},{t:this.shape_925,p:{y:118.4}},{t:this.shape_913,p:{x:706.5}},{t:this.shape_900,p:{y:118.4,x:725.8}},{t:this.shape_936},{t:this.shape_898,p:{y:155.5}},{t:this.shape_935},{t:this.shape_934,p:{y:158.1}},{t:this.shape_933,p:{x:436.5}},{t:this.shape_932,p:{x:454.5}},{t:this.shape_931,p:{x:472.7}},{t:this.shape_911,p:{y:155.1,x:488.8}},{t:this.shape_905,p:{y:158.1}},{t:this.shape_930,p:{x:527}},{t:this.shape_929,p:{x:544.3}},{t:this.shape_908,p:{y:155.6}}]},2).to({state:[{t:this.shape_947,p:{y:76.1}},{t:this.shape_946},{t:this.shape_901,p:{x:418.5}},{t:this.shape_922,p:{x:436.9}},{t:this.shape_948,p:{x:473}},{t:this.shape_916,p:{y:115.8}},{t:this.shape_917,p:{y:115.9}},{t:this.shape_945},{t:this.shape_944,p:{x:436.5}},{t:this.shape_943},{t:this.shape_942,p:{x:490.3}},{t:this.shape_941},{t:this.shape_940,p:{x:544.5}},{t:this.shape_939,p:{x:562.9}},{t:this.shape_938},{t:this.shape_914,p:{x:616.5}},{t:this.shape_909,p:{x:634.3}},{t:this.shape_937,p:{x:650.8}},{t:this.shape_910,p:{x:671}},{t:this.shape_925,p:{y:118.4}},{t:this.shape_913,p:{x:706.5}},{t:this.shape_900,p:{y:118.4,x:725.8}},{t:this.shape_936},{t:this.shape_898,p:{y:155.5}},{t:this.shape_935},{t:this.shape_934,p:{y:158.1}},{t:this.shape_933,p:{x:436.5}},{t:this.shape_932,p:{x:454.5}},{t:this.shape_931,p:{x:472.7}},{t:this.shape_911,p:{y:155.1,x:488.8}},{t:this.shape_905,p:{y:158.1}},{t:this.shape_930,p:{x:527}},{t:this.shape_929,p:{x:544.3}},{t:this.shape_908,p:{y:155.6}}]},3).to({state:[{t:this.shape_947,p:{y:76.1}},{t:this.shape_946},{t:this.shape_902,p:{x:418.5}},{t:this.shape_922,p:{x:436.9}},{t:this.shape_948,p:{x:473}},{t:this.shape_901,p:{x:490.5}},{t:this.shape_916,p:{y:115.8}},{t:this.shape_917,p:{y:115.9}},{t:this.shape_945},{t:this.shape_944,p:{x:436.5}},{t:this.shape_943},{t:this.shape_942,p:{x:490.3}},{t:this.shape_941},{t:this.shape_940,p:{x:544.5}},{t:this.shape_939,p:{x:562.9}},{t:this.shape_938},{t:this.shape_914,p:{x:616.5}},{t:this.shape_909,p:{x:634.3}},{t:this.shape_937,p:{x:650.8}},{t:this.shape_910,p:{x:671}},{t:this.shape_925,p:{y:118.4}},{t:this.shape_913,p:{x:706.5}},{t:this.shape_900,p:{y:118.4,x:725.8}},{t:this.shape_936},{t:this.shape_898,p:{y:155.5}},{t:this.shape_935},{t:this.shape_934,p:{y:158.1}},{t:this.shape_933,p:{x:436.5}},{t:this.shape_932,p:{x:454.5}},{t:this.shape_931,p:{x:472.7}},{t:this.shape_911,p:{y:155.1,x:488.8}},{t:this.shape_905,p:{y:158.1}},{t:this.shape_930,p:{x:527}},{t:this.shape_929,p:{x:544.3}},{t:this.shape_908,p:{y:155.6}}]},2).to({state:[{t:this.shape_947,p:{y:76.1}},{t:this.shape_946},{t:this.shape_902,p:{x:418.5}},{t:this.shape_922,p:{x:436.9}},{t:this.shape_948,p:{x:473}},{t:this.shape_901,p:{x:490.5}},{t:this.shape_949,p:{y:78.9,x:508.4}},{t:this.shape_916,p:{y:115.8}},{t:this.shape_917,p:{y:115.9}},{t:this.shape_945},{t:this.shape_944,p:{x:436.5}},{t:this.shape_943},{t:this.shape_942,p:{x:490.3}},{t:this.shape_941},{t:this.shape_940,p:{x:544.5}},{t:this.shape_939,p:{x:562.9}},{t:this.shape_938},{t:this.shape_914,p:{x:616.5}},{t:this.shape_909,p:{x:634.3}},{t:this.shape_937,p:{x:650.8}},{t:this.shape_910,p:{x:671}},{t:this.shape_925,p:{y:118.4}},{t:this.shape_913,p:{x:706.5}},{t:this.shape_900,p:{y:118.4,x:725.8}},{t:this.shape_936},{t:this.shape_898,p:{y:155.5}},{t:this.shape_935},{t:this.shape_934,p:{y:158.1}},{t:this.shape_933,p:{x:436.5}},{t:this.shape_932,p:{x:454.5}},{t:this.shape_931,p:{x:472.7}},{t:this.shape_911,p:{y:155.1,x:488.8}},{t:this.shape_905,p:{y:158.1}},{t:this.shape_930,p:{x:527}},{t:this.shape_929,p:{x:544.3}},{t:this.shape_908,p:{y:155.6}}]},3).to({state:[{t:this.shape_947,p:{y:76.1}},{t:this.shape_946},{t:this.shape_921,p:{x:418.5}},{t:this.shape_922,p:{x:436.9}},{t:this.shape_948,p:{x:473}},{t:this.shape_902,p:{x:490.5}},{t:this.shape_949,p:{y:78.9,x:508.4}},{t:this.shape_901,p:{x:526.5}},{t:this.shape_916,p:{y:115.8}},{t:this.shape_917,p:{y:115.9}},{t:this.shape_945},{t:this.shape_944,p:{x:436.5}},{t:this.shape_943},{t:this.shape_942,p:{x:490.3}},{t:this.shape_941},{t:this.shape_940,p:{x:544.5}},{t:this.shape_939,p:{x:562.9}},{t:this.shape_938},{t:this.shape_914,p:{x:616.5}},{t:this.shape_909,p:{x:634.3}},{t:this.shape_937,p:{x:650.8}},{t:this.shape_910,p:{x:671}},{t:this.shape_925,p:{y:118.4}},{t:this.shape_913,p:{x:706.5}},{t:this.shape_900,p:{y:118.4,x:725.8}},{t:this.shape_936},{t:this.shape_898,p:{y:155.5}},{t:this.shape_935},{t:this.shape_934,p:{y:158.1}},{t:this.shape_933,p:{x:436.5}},{t:this.shape_932,p:{x:454.5}},{t:this.shape_931,p:{x:472.7}},{t:this.shape_911,p:{y:155.1,x:488.8}},{t:this.shape_905,p:{y:158.1}},{t:this.shape_930,p:{x:527}},{t:this.shape_929,p:{x:544.3}},{t:this.shape_908,p:{y:155.6}}]},2).to({state:[{t:this.shape_947,p:{y:76.1}},{t:this.shape_946},{t:this.shape_921,p:{x:418.5}},{t:this.shape_922,p:{x:436.9}},{t:this.shape_948,p:{x:473}},{t:this.shape_902,p:{x:490.5}},{t:this.shape_949,p:{y:78.9,x:508.4}},{t:this.shape_901,p:{x:526.5}},{t:this.shape_950},{t:this.shape_916,p:{y:115.8}},{t:this.shape_917,p:{y:115.9}},{t:this.shape_945},{t:this.shape_944,p:{x:436.5}},{t:this.shape_943},{t:this.shape_942,p:{x:490.3}},{t:this.shape_941},{t:this.shape_940,p:{x:544.5}},{t:this.shape_939,p:{x:562.9}},{t:this.shape_938},{t:this.shape_914,p:{x:616.5}},{t:this.shape_909,p:{x:634.3}},{t:this.shape_937,p:{x:650.8}},{t:this.shape_910,p:{x:671}},{t:this.shape_925,p:{y:118.4}},{t:this.shape_913,p:{x:706.5}},{t:this.shape_900,p:{y:118.4,x:725.8}},{t:this.shape_936},{t:this.shape_898,p:{y:155.5}},{t:this.shape_935},{t:this.shape_934,p:{y:158.1}},{t:this.shape_933,p:{x:436.5}},{t:this.shape_932,p:{x:454.5}},{t:this.shape_931,p:{x:472.7}},{t:this.shape_911,p:{y:155.1,x:488.8}},{t:this.shape_905,p:{y:158.1}},{t:this.shape_930,p:{x:527}},{t:this.shape_929,p:{x:544.3}},{t:this.shape_908,p:{y:155.6}}]},3).to({state:[{t:this.shape_947,p:{y:76.1}},{t:this.shape_946},{t:this.shape_921,p:{x:418.5}},{t:this.shape_922,p:{x:436.9}},{t:this.shape_948,p:{x:473}},{t:this.shape_902,p:{x:490.5}},{t:this.shape_949,p:{y:78.9,x:508.4}},{t:this.shape_901,p:{x:526.5}},{t:this.shape_950},{t:this.shape_951,p:{x:562.4}},{t:this.shape_916,p:{y:115.8}},{t:this.shape_917,p:{y:115.9}},{t:this.shape_945},{t:this.shape_944,p:{x:436.5}},{t:this.shape_943},{t:this.shape_942,p:{x:490.3}},{t:this.shape_941},{t:this.shape_940,p:{x:544.5}},{t:this.shape_939,p:{x:562.9}},{t:this.shape_938},{t:this.shape_914,p:{x:616.5}},{t:this.shape_909,p:{x:634.3}},{t:this.shape_937,p:{x:650.8}},{t:this.shape_910,p:{x:671}},{t:this.shape_925,p:{y:118.4}},{t:this.shape_913,p:{x:706.5}},{t:this.shape_900,p:{y:118.4,x:725.8}},{t:this.shape_936},{t:this.shape_898,p:{y:155.5}},{t:this.shape_935},{t:this.shape_934,p:{y:158.1}},{t:this.shape_933,p:{x:436.5}},{t:this.shape_932,p:{x:454.5}},{t:this.shape_931,p:{x:472.7}},{t:this.shape_911,p:{y:155.1,x:488.8}},{t:this.shape_905,p:{y:158.1}},{t:this.shape_930,p:{x:527}},{t:this.shape_929,p:{x:544.3}},{t:this.shape_908,p:{y:155.6}}]},2).to({state:[{t:this.shape_947,p:{y:76.1}},{t:this.shape_946},{t:this.shape_921,p:{x:418.5}},{t:this.shape_922,p:{x:436.9}},{t:this.shape_948,p:{x:473}},{t:this.shape_902,p:{x:490.5}},{t:this.shape_949,p:{y:78.9,x:508.4}},{t:this.shape_901,p:{x:526.5}},{t:this.shape_950},{t:this.shape_951,p:{x:562.4}},{t:this.shape_952,p:{y:82}},{t:this.shape_916,p:{y:115.8}},{t:this.shape_917,p:{y:115.9}},{t:this.shape_945},{t:this.shape_944,p:{x:436.5}},{t:this.shape_943},{t:this.shape_942,p:{x:490.3}},{t:this.shape_941},{t:this.shape_940,p:{x:544.5}},{t:this.shape_939,p:{x:562.9}},{t:this.shape_938},{t:this.shape_914,p:{x:616.5}},{t:this.shape_909,p:{x:634.3}},{t:this.shape_937,p:{x:650.8}},{t:this.shape_910,p:{x:671}},{t:this.shape_925,p:{y:118.4}},{t:this.shape_913,p:{x:706.5}},{t:this.shape_900,p:{y:118.4,x:725.8}},{t:this.shape_936},{t:this.shape_898,p:{y:155.5}},{t:this.shape_935},{t:this.shape_934,p:{y:158.1}},{t:this.shape_933,p:{x:436.5}},{t:this.shape_932,p:{x:454.5}},{t:this.shape_931,p:{x:472.7}},{t:this.shape_911,p:{y:155.1,x:488.8}},{t:this.shape_905,p:{y:158.1}},{t:this.shape_930,p:{x:527}},{t:this.shape_929,p:{x:544.3}},{t:this.shape_908,p:{y:155.6}}]},3).to({state:[{t:this.shape_947,p:{y:76.1}},{t:this.shape_946},{t:this.shape_924,p:{x:418.5}},{t:this.shape_922,p:{x:436.9}},{t:this.shape_948,p:{x:473}},{t:this.shape_921,p:{x:490.5}},{t:this.shape_949,p:{y:78.9,x:508.4}},{t:this.shape_902,p:{x:526.5}},{t:this.shape_950},{t:this.shape_951,p:{x:562.4}},{t:this.shape_952,p:{y:82}},{t:this.shape_901,p:{x:598.5}},{t:this.shape_916,p:{y:115.8}},{t:this.shape_917,p:{y:115.9}},{t:this.shape_945},{t:this.shape_944,p:{x:436.5}},{t:this.shape_943},{t:this.shape_942,p:{x:490.3}},{t:this.shape_941},{t:this.shape_940,p:{x:544.5}},{t:this.shape_939,p:{x:562.9}},{t:this.shape_938},{t:this.shape_914,p:{x:616.5}},{t:this.shape_909,p:{x:634.3}},{t:this.shape_937,p:{x:650.8}},{t:this.shape_910,p:{x:671}},{t:this.shape_925,p:{y:118.4}},{t:this.shape_913,p:{x:706.5}},{t:this.shape_900,p:{y:118.4,x:725.8}},{t:this.shape_936},{t:this.shape_898,p:{y:155.5}},{t:this.shape_935},{t:this.shape_934,p:{y:158.1}},{t:this.shape_933,p:{x:436.5}},{t:this.shape_932,p:{x:454.5}},{t:this.shape_931,p:{x:472.7}},{t:this.shape_911,p:{y:155.1,x:488.8}},{t:this.shape_905,p:{y:158.1}},{t:this.shape_930,p:{x:527}},{t:this.shape_929,p:{x:544.3}},{t:this.shape_908,p:{y:155.6}}]},2).to({state:[{t:this.shape_947,p:{y:76.1}},{t:this.shape_946},{t:this.shape_924,p:{x:418.5}},{t:this.shape_922,p:{x:436.9}},{t:this.shape_948,p:{x:473}},{t:this.shape_921,p:{x:490.5}},{t:this.shape_949,p:{y:78.9,x:508.4}},{t:this.shape_902,p:{x:526.5}},{t:this.shape_950},{t:this.shape_951,p:{x:562.4}},{t:this.shape_952,p:{y:82}},{t:this.shape_901,p:{x:598.5}},{t:this.shape_927,p:{x:617.8,y:78.7}},{t:this.shape_916,p:{y:115.8}},{t:this.shape_917,p:{y:115.9}},{t:this.shape_945},{t:this.shape_944,p:{x:436.5}},{t:this.shape_943},{t:this.shape_942,p:{x:490.3}},{t:this.shape_941},{t:this.shape_940,p:{x:544.5}},{t:this.shape_939,p:{x:562.9}},{t:this.shape_938},{t:this.shape_914,p:{x:616.5}},{t:this.shape_909,p:{x:634.3}},{t:this.shape_937,p:{x:650.8}},{t:this.shape_910,p:{x:671}},{t:this.shape_925,p:{y:118.4}},{t:this.shape_913,p:{x:706.5}},{t:this.shape_900,p:{y:118.4,x:725.8}},{t:this.shape_936},{t:this.shape_898,p:{y:155.5}},{t:this.shape_935},{t:this.shape_934,p:{y:158.1}},{t:this.shape_933,p:{x:436.5}},{t:this.shape_932,p:{x:454.5}},{t:this.shape_931,p:{x:472.7}},{t:this.shape_911,p:{y:155.1,x:488.8}},{t:this.shape_905,p:{y:158.1}},{t:this.shape_930,p:{x:527}},{t:this.shape_929,p:{x:544.3}},{t:this.shape_908,p:{y:155.6}}]},3).to({state:[{t:this.shape_947,p:{y:76.1}},{t:this.shape_946},{t:this.shape_924,p:{x:418.5}},{t:this.shape_922,p:{x:436.9}},{t:this.shape_948,p:{x:473}},{t:this.shape_921,p:{x:490.5}},{t:this.shape_949,p:{y:78.9,x:508.4}},{t:this.shape_902,p:{x:526.5}},{t:this.shape_950},{t:this.shape_951,p:{x:562.4}},{t:this.shape_952,p:{y:82}},{t:this.shape_901,p:{x:598.5}},{t:this.shape_927,p:{x:617.8,y:78.7}},{t:this.shape_916,p:{y:115.8}},{t:this.shape_917,p:{y:115.9}},{t:this.shape_945},{t:this.shape_944,p:{x:436.5}},{t:this.shape_943},{t:this.shape_942,p:{x:490.3}},{t:this.shape_941},{t:this.shape_940,p:{x:544.5}},{t:this.shape_939,p:{x:562.9}},{t:this.shape_938},{t:this.shape_914,p:{x:616.5}},{t:this.shape_909,p:{x:634.3}},{t:this.shape_937,p:{x:650.8}},{t:this.shape_910,p:{x:671}},{t:this.shape_925,p:{y:118.4}},{t:this.shape_913,p:{x:706.5}},{t:this.shape_900,p:{y:118.4,x:725.8}},{t:this.shape_936},{t:this.shape_898,p:{y:155.5}},{t:this.shape_935},{t:this.shape_934,p:{y:158.1}},{t:this.shape_933,p:{x:436.5}},{t:this.shape_932,p:{x:454.5}},{t:this.shape_931,p:{x:472.7}},{t:this.shape_911,p:{y:155.1,x:488.8}},{t:this.shape_905,p:{y:158.1}},{t:this.shape_930,p:{x:527}},{t:this.shape_929,p:{x:544.3}},{t:this.shape_908,p:{y:155.6}}]},5).to({state:[{t:this.shape_975,p:{y:76.1}},{t:this.shape_974,p:{y:76.2}},{t:this.shape_947,p:{y:115.8}},{t:this.shape_973},{t:this.shape_944,p:{x:418.5}},{t:this.shape_939,p:{x:436.9}},{t:this.shape_972,p:{x:473}},{t:this.shape_940,p:{x:490.5}},{t:this.shape_949,p:{y:118.6,x:508.4}},{t:this.shape_914,p:{x:526.5}},{t:this.shape_971},{t:this.shape_970,p:{x:562.4}},{t:this.shape_952,p:{y:121.7}},{t:this.shape_913,p:{x:598.5}},{t:this.shape_900,p:{y:118.4,x:617.8}},{t:this.shape_916,p:{y:155.5}},{t:this.shape_917,p:{y:155.6}},{t:this.shape_969},{t:this.shape_968,p:{x:436.5}},{t:this.shape_967},{t:this.shape_966,p:{x:490.3}},{t:this.shape_965,p:{y:158.3}},{t:this.shape_964,p:{x:544.5}},{t:this.shape_963,p:{x:562.9}},{t:this.shape_962},{t:this.shape_933,p:{x:616.5}},{t:this.shape_929,p:{x:634.3}},{t:this.shape_911,p:{y:155.1,x:650.8}},{t:this.shape_930,p:{x:671}},{t:this.shape_925,p:{y:158.1}},{t:this.shape_932,p:{x:706.5}},{t:this.shape_961,p:{y:158.1}},{t:this.shape_960},{t:this.shape_898,p:{y:195.2}},{t:this.shape_959},{t:this.shape_934,p:{y:197.8}},{t:this.shape_958,p:{x:436.5}},{t:this.shape_957,p:{x:454.5}},{t:this.shape_956},{t:this.shape_955,p:{y:194.8}},{t:this.shape_905,p:{y:197.8}},{t:this.shape_954,p:{x:527}},{t:this.shape_953,p:{x:544.3}},{t:this.shape_908,p:{y:195.3}}]},18).to({state:[{t:this.shape_975,p:{y:76.1}},{t:this.shape_974,p:{y:76.2}},{t:this.shape_976,p:{y:78.7}},{t:this.shape_947,p:{y:115.8}},{t:this.shape_973},{t:this.shape_944,p:{x:418.5}},{t:this.shape_939,p:{x:436.9}},{t:this.shape_972,p:{x:473}},{t:this.shape_940,p:{x:490.5}},{t:this.shape_949,p:{y:118.6,x:508.4}},{t:this.shape_914,p:{x:526.5}},{t:this.shape_971},{t:this.shape_970,p:{x:562.4}},{t:this.shape_952,p:{y:121.7}},{t:this.shape_913,p:{x:598.5}},{t:this.shape_900,p:{y:118.4,x:617.8}},{t:this.shape_916,p:{y:155.5}},{t:this.shape_917,p:{y:155.6}},{t:this.shape_969},{t:this.shape_968,p:{x:436.5}},{t:this.shape_967},{t:this.shape_966,p:{x:490.3}},{t:this.shape_965,p:{y:158.3}},{t:this.shape_964,p:{x:544.5}},{t:this.shape_963,p:{x:562.9}},{t:this.shape_962},{t:this.shape_933,p:{x:616.5}},{t:this.shape_929,p:{x:634.3}},{t:this.shape_911,p:{y:155.1,x:650.8}},{t:this.shape_930,p:{x:671}},{t:this.shape_925,p:{y:158.1}},{t:this.shape_932,p:{x:706.5}},{t:this.shape_961,p:{y:158.1}},{t:this.shape_960},{t:this.shape_898,p:{y:195.2}},{t:this.shape_959},{t:this.shape_934,p:{y:197.8}},{t:this.shape_958,p:{x:436.5}},{t:this.shape_957,p:{x:454.5}},{t:this.shape_956},{t:this.shape_955,p:{y:194.8}},{t:this.shape_905,p:{y:197.8}},{t:this.shape_954,p:{x:527}},{t:this.shape_953,p:{x:544.3}},{t:this.shape_908,p:{y:195.3}}]},2).to({state:[{t:this.shape_975,p:{y:76.1}},{t:this.shape_974,p:{y:76.2}},{t:this.shape_976,p:{y:78.7}},{t:this.shape_904,p:{x:434.8}},{t:this.shape_947,p:{y:115.8}},{t:this.shape_973},{t:this.shape_944,p:{x:418.5}},{t:this.shape_939,p:{x:436.9}},{t:this.shape_972,p:{x:473}},{t:this.shape_940,p:{x:490.5}},{t:this.shape_949,p:{y:118.6,x:508.4}},{t:this.shape_914,p:{x:526.5}},{t:this.shape_971},{t:this.shape_970,p:{x:562.4}},{t:this.shape_952,p:{y:121.7}},{t:this.shape_913,p:{x:598.5}},{t:this.shape_900,p:{y:118.4,x:617.8}},{t:this.shape_916,p:{y:155.5}},{t:this.shape_917,p:{y:155.6}},{t:this.shape_969},{t:this.shape_968,p:{x:436.5}},{t:this.shape_967},{t:this.shape_966,p:{x:490.3}},{t:this.shape_965,p:{y:158.3}},{t:this.shape_964,p:{x:544.5}},{t:this.shape_963,p:{x:562.9}},{t:this.shape_962},{t:this.shape_933,p:{x:616.5}},{t:this.shape_929,p:{x:634.3}},{t:this.shape_911,p:{y:155.1,x:650.8}},{t:this.shape_930,p:{x:671}},{t:this.shape_925,p:{y:158.1}},{t:this.shape_932,p:{x:706.5}},{t:this.shape_961,p:{y:158.1}},{t:this.shape_960},{t:this.shape_898,p:{y:195.2}},{t:this.shape_959},{t:this.shape_934,p:{y:197.8}},{t:this.shape_958,p:{x:436.5}},{t:this.shape_957,p:{x:454.5}},{t:this.shape_956},{t:this.shape_955,p:{y:194.8}},{t:this.shape_905,p:{y:197.8}},{t:this.shape_954,p:{x:527}},{t:this.shape_953,p:{x:544.3}},{t:this.shape_908,p:{y:195.3}}]},3).to({state:[{t:this.shape_975,p:{y:76.1}},{t:this.shape_974,p:{y:76.2}},{t:this.shape_976,p:{y:78.7}},{t:this.shape_904,p:{x:434.8}},{t:this.shape_977,p:{y:78.7}},{t:this.shape_947,p:{y:115.8}},{t:this.shape_973},{t:this.shape_944,p:{x:418.5}},{t:this.shape_939,p:{x:436.9}},{t:this.shape_972,p:{x:473}},{t:this.shape_940,p:{x:490.5}},{t:this.shape_949,p:{y:118.6,x:508.4}},{t:this.shape_914,p:{x:526.5}},{t:this.shape_971},{t:this.shape_970,p:{x:562.4}},{t:this.shape_952,p:{y:121.7}},{t:this.shape_913,p:{x:598.5}},{t:this.shape_900,p:{y:118.4,x:617.8}},{t:this.shape_916,p:{y:155.5}},{t:this.shape_917,p:{y:155.6}},{t:this.shape_969},{t:this.shape_968,p:{x:436.5}},{t:this.shape_967},{t:this.shape_966,p:{x:490.3}},{t:this.shape_965,p:{y:158.3}},{t:this.shape_964,p:{x:544.5}},{t:this.shape_963,p:{x:562.9}},{t:this.shape_962},{t:this.shape_933,p:{x:616.5}},{t:this.shape_929,p:{x:634.3}},{t:this.shape_911,p:{y:155.1,x:650.8}},{t:this.shape_930,p:{x:671}},{t:this.shape_925,p:{y:158.1}},{t:this.shape_932,p:{x:706.5}},{t:this.shape_961,p:{y:158.1}},{t:this.shape_960},{t:this.shape_898,p:{y:195.2}},{t:this.shape_959},{t:this.shape_934,p:{y:197.8}},{t:this.shape_958,p:{x:436.5}},{t:this.shape_957,p:{x:454.5}},{t:this.shape_956},{t:this.shape_955,p:{y:194.8}},{t:this.shape_905,p:{y:197.8}},{t:this.shape_954,p:{x:527}},{t:this.shape_953,p:{x:544.3}},{t:this.shape_908,p:{y:195.3}}]},2).to({state:[{t:this.shape_975,p:{y:76.1}},{t:this.shape_974,p:{y:76.2}},{t:this.shape_976,p:{y:78.7}},{t:this.shape_904,p:{x:434.8}},{t:this.shape_977,p:{y:78.7}},{t:this.shape_919,p:{x:472.3}},{t:this.shape_947,p:{y:115.8}},{t:this.shape_973},{t:this.shape_944,p:{x:418.5}},{t:this.shape_939,p:{x:436.9}},{t:this.shape_972,p:{x:473}},{t:this.shape_940,p:{x:490.5}},{t:this.shape_949,p:{y:118.6,x:508.4}},{t:this.shape_914,p:{x:526.5}},{t:this.shape_971},{t:this.shape_970,p:{x:562.4}},{t:this.shape_952,p:{y:121.7}},{t:this.shape_913,p:{x:598.5}},{t:this.shape_900,p:{y:118.4,x:617.8}},{t:this.shape_916,p:{y:155.5}},{t:this.shape_917,p:{y:155.6}},{t:this.shape_969},{t:this.shape_968,p:{x:436.5}},{t:this.shape_967},{t:this.shape_966,p:{x:490.3}},{t:this.shape_965,p:{y:158.3}},{t:this.shape_964,p:{x:544.5}},{t:this.shape_963,p:{x:562.9}},{t:this.shape_962},{t:this.shape_933,p:{x:616.5}},{t:this.shape_929,p:{x:634.3}},{t:this.shape_911,p:{y:155.1,x:650.8}},{t:this.shape_930,p:{x:671}},{t:this.shape_925,p:{y:158.1}},{t:this.shape_932,p:{x:706.5}},{t:this.shape_961,p:{y:158.1}},{t:this.shape_960},{t:this.shape_898,p:{y:195.2}},{t:this.shape_959},{t:this.shape_934,p:{y:197.8}},{t:this.shape_958,p:{x:436.5}},{t:this.shape_957,p:{x:454.5}},{t:this.shape_956},{t:this.shape_955,p:{y:194.8}},{t:this.shape_905,p:{y:197.8}},{t:this.shape_954,p:{x:527}},{t:this.shape_953,p:{x:544.3}},{t:this.shape_908,p:{y:195.3}}]},3).to({state:[{t:this.shape_975,p:{y:76.1}},{t:this.shape_974,p:{y:76.2}},{t:this.shape_976,p:{y:78.7}},{t:this.shape_904,p:{x:434.8}},{t:this.shape_977,p:{y:78.7}},{t:this.shape_919,p:{x:472.3}},{t:this.shape_903,p:{x:490.7}},{t:this.shape_947,p:{y:115.8}},{t:this.shape_973},{t:this.shape_944,p:{x:418.5}},{t:this.shape_939,p:{x:436.9}},{t:this.shape_972,p:{x:473}},{t:this.shape_940,p:{x:490.5}},{t:this.shape_949,p:{y:118.6,x:508.4}},{t:this.shape_914,p:{x:526.5}},{t:this.shape_971},{t:this.shape_970,p:{x:562.4}},{t:this.shape_952,p:{y:121.7}},{t:this.shape_913,p:{x:598.5}},{t:this.shape_900,p:{y:118.4,x:617.8}},{t:this.shape_916,p:{y:155.5}},{t:this.shape_917,p:{y:155.6}},{t:this.shape_969},{t:this.shape_968,p:{x:436.5}},{t:this.shape_967},{t:this.shape_966,p:{x:490.3}},{t:this.shape_965,p:{y:158.3}},{t:this.shape_964,p:{x:544.5}},{t:this.shape_963,p:{x:562.9}},{t:this.shape_962},{t:this.shape_933,p:{x:616.5}},{t:this.shape_929,p:{x:634.3}},{t:this.shape_911,p:{y:155.1,x:650.8}},{t:this.shape_930,p:{x:671}},{t:this.shape_925,p:{y:158.1}},{t:this.shape_932,p:{x:706.5}},{t:this.shape_961,p:{y:158.1}},{t:this.shape_960},{t:this.shape_898,p:{y:195.2}},{t:this.shape_959},{t:this.shape_934,p:{y:197.8}},{t:this.shape_958,p:{x:436.5}},{t:this.shape_957,p:{x:454.5}},{t:this.shape_956},{t:this.shape_955,p:{y:194.8}},{t:this.shape_905,p:{y:197.8}},{t:this.shape_954,p:{x:527}},{t:this.shape_953,p:{x:544.3}},{t:this.shape_908,p:{y:195.3}}]},2).to({state:[{t:this.shape_975,p:{y:76.1}},{t:this.shape_974,p:{y:76.2}},{t:this.shape_976,p:{y:78.7}},{t:this.shape_904,p:{x:434.8}},{t:this.shape_977,p:{y:78.7}},{t:this.shape_919,p:{x:472.3}},{t:this.shape_903,p:{x:490.7}},{t:this.shape_951,p:{x:508.4}},{t:this.shape_947,p:{y:115.8}},{t:this.shape_973},{t:this.shape_944,p:{x:418.5}},{t:this.shape_939,p:{x:436.9}},{t:this.shape_972,p:{x:473}},{t:this.shape_940,p:{x:490.5}},{t:this.shape_949,p:{y:118.6,x:508.4}},{t:this.shape_914,p:{x:526.5}},{t:this.shape_971},{t:this.shape_970,p:{x:562.4}},{t:this.shape_952,p:{y:121.7}},{t:this.shape_913,p:{x:598.5}},{t:this.shape_900,p:{y:118.4,x:617.8}},{t:this.shape_916,p:{y:155.5}},{t:this.shape_917,p:{y:155.6}},{t:this.shape_969},{t:this.shape_968,p:{x:436.5}},{t:this.shape_967},{t:this.shape_966,p:{x:490.3}},{t:this.shape_965,p:{y:158.3}},{t:this.shape_964,p:{x:544.5}},{t:this.shape_963,p:{x:562.9}},{t:this.shape_962},{t:this.shape_933,p:{x:616.5}},{t:this.shape_929,p:{x:634.3}},{t:this.shape_911,p:{y:155.1,x:650.8}},{t:this.shape_930,p:{x:671}},{t:this.shape_925,p:{y:158.1}},{t:this.shape_932,p:{x:706.5}},{t:this.shape_961,p:{y:158.1}},{t:this.shape_960},{t:this.shape_898,p:{y:195.2}},{t:this.shape_959},{t:this.shape_934,p:{y:197.8}},{t:this.shape_958,p:{x:436.5}},{t:this.shape_957,p:{x:454.5}},{t:this.shape_956},{t:this.shape_955,p:{y:194.8}},{t:this.shape_905,p:{y:197.8}},{t:this.shape_954,p:{x:527}},{t:this.shape_953,p:{x:544.3}},{t:this.shape_908,p:{y:195.3}}]},3).to({state:[{t:this.shape_975,p:{y:76.1}},{t:this.shape_974,p:{y:76.2}},{t:this.shape_976,p:{y:78.7}},{t:this.shape_904,p:{x:434.8}},{t:this.shape_977,p:{y:78.7}},{t:this.shape_919,p:{x:472.3}},{t:this.shape_903,p:{x:490.7}},{t:this.shape_951,p:{x:508.4}},{t:this.shape_927,p:{x:527.8,y:78.7}},{t:this.shape_947,p:{y:115.8}},{t:this.shape_973},{t:this.shape_944,p:{x:418.5}},{t:this.shape_939,p:{x:436.9}},{t:this.shape_972,p:{x:473}},{t:this.shape_940,p:{x:490.5}},{t:this.shape_949,p:{y:118.6,x:508.4}},{t:this.shape_914,p:{x:526.5}},{t:this.shape_971},{t:this.shape_970,p:{x:562.4}},{t:this.shape_952,p:{y:121.7}},{t:this.shape_913,p:{x:598.5}},{t:this.shape_900,p:{y:118.4,x:617.8}},{t:this.shape_916,p:{y:155.5}},{t:this.shape_917,p:{y:155.6}},{t:this.shape_969},{t:this.shape_968,p:{x:436.5}},{t:this.shape_967},{t:this.shape_966,p:{x:490.3}},{t:this.shape_965,p:{y:158.3}},{t:this.shape_964,p:{x:544.5}},{t:this.shape_963,p:{x:562.9}},{t:this.shape_962},{t:this.shape_933,p:{x:616.5}},{t:this.shape_929,p:{x:634.3}},{t:this.shape_911,p:{y:155.1,x:650.8}},{t:this.shape_930,p:{x:671}},{t:this.shape_925,p:{y:158.1}},{t:this.shape_932,p:{x:706.5}},{t:this.shape_961,p:{y:158.1}},{t:this.shape_960},{t:this.shape_898,p:{y:195.2}},{t:this.shape_959},{t:this.shape_934,p:{y:197.8}},{t:this.shape_958,p:{x:436.5}},{t:this.shape_957,p:{x:454.5}},{t:this.shape_956},{t:this.shape_955,p:{y:194.8}},{t:this.shape_905,p:{y:197.8}},{t:this.shape_954,p:{x:527}},{t:this.shape_953,p:{x:544.3}},{t:this.shape_908,p:{y:195.3}}]},2).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},19).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_927,p:{x:419.8,y:78.7}},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},2).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_927,p:{x:419.8,y:78.7}},{t:this.shape_919,p:{x:436.3}},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},3).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_927,p:{x:419.8,y:78.7}},{t:this.shape_919,p:{x:436.3}},{t:this.shape_1001,p:{y:82}},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},2).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_927,p:{x:419.8,y:78.7}},{t:this.shape_919,p:{x:436.3}},{t:this.shape_1001,p:{y:82}},{t:this.shape_1002,p:{y:75.3}},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},3).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_927,p:{x:419.8,y:78.7}},{t:this.shape_919,p:{x:436.3}},{t:this.shape_1001,p:{y:82}},{t:this.shape_1002,p:{y:75.3}},{t:this.shape_904,p:{x:488.8}},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},2).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_927,p:{x:419.8,y:78.7}},{t:this.shape_919,p:{x:436.3}},{t:this.shape_1001,p:{y:82}},{t:this.shape_1002,p:{y:75.3}},{t:this.shape_904,p:{x:488.8}},{t:this.shape_1003},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},3).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_927,p:{x:419.8,y:78.7}},{t:this.shape_919,p:{x:436.3}},{t:this.shape_1001,p:{y:82}},{t:this.shape_1002,p:{y:75.3}},{t:this.shape_904,p:{x:488.8}},{t:this.shape_1003},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},2).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_927,p:{x:419.8,y:78.7}},{t:this.shape_919,p:{x:436.3}},{t:this.shape_1001,p:{y:82}},{t:this.shape_1002,p:{y:75.3}},{t:this.shape_904,p:{x:488.8}},{t:this.shape_1003},{t:this.shape_948,p:{x:545}},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},3).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_927,p:{x:419.8,y:78.7}},{t:this.shape_919,p:{x:436.3}},{t:this.shape_1001,p:{y:82}},{t:this.shape_1002,p:{y:75.3}},{t:this.shape_904,p:{x:488.8}},{t:this.shape_1003},{t:this.shape_948,p:{x:545}},{t:this.shape_901,p:{x:562.5}},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},2).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_927,p:{x:419.8,y:78.7}},{t:this.shape_919,p:{x:436.3}},{t:this.shape_1001,p:{y:82}},{t:this.shape_1002,p:{y:75.3}},{t:this.shape_904,p:{x:488.8}},{t:this.shape_1003},{t:this.shape_948,p:{x:545}},{t:this.shape_901,p:{x:562.5}},{t:this.shape_907,p:{x:580.3}},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},3).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_927,p:{x:419.8,y:78.7}},{t:this.shape_919,p:{x:436.3}},{t:this.shape_1001,p:{y:82}},{t:this.shape_1002,p:{y:75.3}},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_948,p:{x:545}},{t:this.shape_901,p:{x:562.5}},{t:this.shape_907,p:{x:580.3}},{t:this.shape_904,p:{x:596.8}},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},2).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_927,p:{x:419.8,y:78.7}},{t:this.shape_919,p:{x:436.3}},{t:this.shape_1001,p:{y:82}},{t:this.shape_1002,p:{y:75.3}},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_948,p:{x:545}},{t:this.shape_901,p:{x:562.5}},{t:this.shape_907,p:{x:580.3}},{t:this.shape_904,p:{x:596.8}},{t:this.shape_906,p:{x:617}},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},3).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_927,p:{x:419.8,y:78.7}},{t:this.shape_919,p:{x:436.3}},{t:this.shape_1001,p:{y:82}},{t:this.shape_1002,p:{y:75.3}},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_948,p:{x:545}},{t:this.shape_901,p:{x:562.5}},{t:this.shape_907,p:{x:580.3}},{t:this.shape_904,p:{x:596.8}},{t:this.shape_906,p:{x:617}},{t:this.shape_1005,p:{y:78.7}},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},2).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_927,p:{x:419.8,y:78.7}},{t:this.shape_919,p:{x:436.3}},{t:this.shape_1001,p:{y:82}},{t:this.shape_1002,p:{y:75.3}},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_948,p:{x:545}},{t:this.shape_902,p:{x:562.5}},{t:this.shape_907,p:{x:580.3}},{t:this.shape_904,p:{x:596.8}},{t:this.shape_906,p:{x:617}},{t:this.shape_1005,p:{y:78.7}},{t:this.shape_901,p:{x:652.5}},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},3).to({state:[{t:this.shape_1000,p:{y:76.1}},{t:this.shape_899},{t:this.shape_1006},{t:this.shape_919,p:{x:436.3}},{t:this.shape_1001,p:{y:82}},{t:this.shape_1002,p:{y:75.3}},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_948,p:{x:545}},{t:this.shape_902,p:{x:562.5}},{t:this.shape_907,p:{x:580.3}},{t:this.shape_904,p:{x:596.8}},{t:this.shape_906,p:{x:617}},{t:this.shape_1005,p:{y:78.7}},{t:this.shape_901,p:{x:652.5}},{t:this.shape_927,p:{x:671.8,y:78.7}},{t:this.shape_975,p:{y:115.8}},{t:this.shape_974,p:{y:115.9}},{t:this.shape_976,p:{y:118.4}},{t:this.shape_911,p:{y:115.4,x:434.8}},{t:this.shape_977,p:{y:118.4}},{t:this.shape_942,p:{x:472.3}},{t:this.shape_912,p:{x:490.7}},{t:this.shape_970,p:{x:508.4}},{t:this.shape_900,p:{y:118.4,x:527.8}},{t:this.shape_947,p:{y:155.5}},{t:this.shape_999},{t:this.shape_968,p:{x:418.5}},{t:this.shape_963,p:{x:436.9}},{t:this.shape_998},{t:this.shape_964,p:{x:490.5}},{t:this.shape_997,p:{y:158.3}},{t:this.shape_933,p:{x:526.5}},{t:this.shape_996},{t:this.shape_995,p:{x:562.4}},{t:this.shape_952,p:{y:161.4}},{t:this.shape_932,p:{x:598.5}},{t:this.shape_994,p:{y:158.1}},{t:this.shape_916,p:{y:195.2}},{t:this.shape_993,p:{y:195.3}},{t:this.shape_992},{t:this.shape_991,p:{x:436.5}},{t:this.shape_990},{t:this.shape_989},{t:this.shape_965,p:{y:198}},{t:this.shape_988,p:{x:544.5}},{t:this.shape_987,p:{x:562.9}},{t:this.shape_986},{t:this.shape_958,p:{x:616.5}},{t:this.shape_953,p:{x:634.3}},{t:this.shape_985,p:{y:194.8}},{t:this.shape_954,p:{x:671}},{t:this.shape_925,p:{y:197.8}},{t:this.shape_957,p:{x:706.5}},{t:this.shape_961,p:{y:197.8}},{t:this.shape_984},{t:this.shape_898,p:{y:234.9}},{t:this.shape_983},{t:this.shape_934,p:{y:237.5}},{t:this.shape_982,p:{x:436.5}},{t:this.shape_981,p:{x:454.5}},{t:this.shape_980},{t:this.shape_955,p:{y:234.5}},{t:this.shape_905,p:{y:237.5}},{t:this.shape_979,p:{x:527}},{t:this.shape_978,p:{x:544.3}},{t:this.shape_908,p:{y:235}}]},2).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},17).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_951,p:{x:418.4}},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},2).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_951,p:{x:418.4}},{t:this.shape_1032,p:{x:436.1}},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},3).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_951,p:{x:418.4}},{t:this.shape_1032,p:{x:436.1}},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},2).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_951,p:{x:418.4}},{t:this.shape_1032,p:{x:436.1}},{t:this.shape_1033},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},3).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_951,p:{x:418.4}},{t:this.shape_1034,p:{x:436.1}},{t:this.shape_1033},{t:this.shape_1032,p:{x:490.1}},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},2).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_951,p:{x:418.4}},{t:this.shape_1034,p:{x:436.1}},{t:this.shape_1033},{t:this.shape_1032,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},3).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_951,p:{x:418.4}},{t:this.shape_1034,p:{x:436.1}},{t:this.shape_1033},{t:this.shape_1032,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},2).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_951,p:{x:418.4}},{t:this.shape_1034,p:{x:436.1}},{t:this.shape_1033},{t:this.shape_1032,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},3).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_951,p:{x:418.4}},{t:this.shape_1034,p:{x:436.1}},{t:this.shape_1033},{t:this.shape_1032,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1036},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},2).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_951,p:{x:418.4}},{t:this.shape_1034,p:{x:436.1}},{t:this.shape_1033},{t:this.shape_1032,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1036},{t:this.shape_919,p:{x:580.3}},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},3).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_951,p:{x:418.4}},{t:this.shape_1034,p:{x:436.1}},{t:this.shape_1033},{t:this.shape_1032,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1036},{t:this.shape_919,p:{x:580.3}},{t:this.shape_949,p:{y:78.9,x:598.4}},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},2).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_951,p:{x:418.4}},{t:this.shape_1034,p:{x:436.1}},{t:this.shape_1033},{t:this.shape_1032,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1036},{t:this.shape_919,p:{x:580.3}},{t:this.shape_949,p:{y:78.9,x:598.4}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},3).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_951,p:{x:418.4}},{t:this.shape_1034,p:{x:436.1}},{t:this.shape_1033},{t:this.shape_1032,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1036},{t:this.shape_919,p:{x:580.3}},{t:this.shape_949,p:{y:78.9,x:598.4}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},2).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_951,p:{x:418.4}},{t:this.shape_1034,p:{x:436.1}},{t:this.shape_1033},{t:this.shape_1032,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1036},{t:this.shape_919,p:{x:580.3}},{t:this.shape_949,p:{y:78.9,x:598.4}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_1037},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},3).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1038},{t:this.shape_1034,p:{x:436.1}},{t:this.shape_1033},{t:this.shape_1032,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1036},{t:this.shape_919,p:{x:580.3}},{t:this.shape_949,p:{y:78.9,x:598.4}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_1037},{t:this.shape_951,p:{x:670.4}},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},2).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1038},{t:this.shape_1039},{t:this.shape_1033},{t:this.shape_1034,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1036},{t:this.shape_919,p:{x:580.3}},{t:this.shape_949,p:{y:78.9,x:598.4}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_1037},{t:this.shape_951,p:{x:670.4}},{t:this.shape_1032,p:{x:688.1}},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},3).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1038},{t:this.shape_1039},{t:this.shape_1033},{t:this.shape_1034,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1036},{t:this.shape_919,p:{x:580.3}},{t:this.shape_949,p:{y:78.9,x:598.4}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_1037},{t:this.shape_951,p:{x:670.4}},{t:this.shape_1032,p:{x:688.1}},{t:this.shape_1040},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},2).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1038},{t:this.shape_1039},{t:this.shape_1033},{t:this.shape_1034,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1036},{t:this.shape_919,p:{x:580.3}},{t:this.shape_949,p:{y:78.9,x:598.4}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_1037},{t:this.shape_951,p:{x:670.4}},{t:this.shape_1032,p:{x:688.1}},{t:this.shape_1040},{t:this.shape_918,p:{x:723.8}},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},3).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1038},{t:this.shape_1039},{t:this.shape_1033},{t:this.shape_1034,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1036},{t:this.shape_919,p:{x:580.3}},{t:this.shape_949,p:{y:78.9,x:598.4}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_1037},{t:this.shape_951,p:{x:670.4}},{t:this.shape_1032,p:{x:688.1}},{t:this.shape_1040},{t:this.shape_918,p:{x:723.8}},{t:this.shape_1041},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},2).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1038},{t:this.shape_1039},{t:this.shape_1033},{t:this.shape_1034,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1036},{t:this.shape_919,p:{x:580.3}},{t:this.shape_949,p:{y:78.9,x:598.4}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_1037},{t:this.shape_951,p:{x:670.4}},{t:this.shape_1032,p:{x:688.1}},{t:this.shape_1040},{t:this.shape_918,p:{x:723.8}},{t:this.shape_1041},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},7).to({state:[{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1038},{t:this.shape_1039},{t:this.shape_1033},{t:this.shape_1034,p:{x:490.1}},{t:this.shape_907,p:{x:508.3}},{t:this.shape_1035},{t:this.shape_1036},{t:this.shape_919,p:{x:580.3}},{t:this.shape_949,p:{y:78.9,x:598.4}},{t:this.shape_901,p:{x:616.5}},{t:this.shape_1037},{t:this.shape_951,p:{x:670.4}},{t:this.shape_1032,p:{x:688.1}},{t:this.shape_1040},{t:this.shape_918,p:{x:723.8}},{t:this.shape_1041},{t:this.shape_1000,p:{y:115.8}},{t:this.shape_915},{t:this.shape_927,p:{x:419.8,y:118.4}},{t:this.shape_942,p:{x:436.3}},{t:this.shape_1001,p:{y:121.7}},{t:this.shape_1002,p:{y:115}},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_972,p:{x:545}},{t:this.shape_914,p:{x:562.5}},{t:this.shape_909,p:{x:580.3}},{t:this.shape_937,p:{x:596.8}},{t:this.shape_910,p:{x:617}},{t:this.shape_1005,p:{y:118.4}},{t:this.shape_913,p:{x:652.5}},{t:this.shape_900,p:{y:118.4,x:671.8}},{t:this.shape_975,p:{y:155.5}},{t:this.shape_1027},{t:this.shape_976,p:{y:158.1}},{t:this.shape_911,p:{y:155.1,x:434.8}},{t:this.shape_977,p:{y:158.1}},{t:this.shape_966,p:{x:472.3}},{t:this.shape_931,p:{x:490.7}},{t:this.shape_995,p:{x:508.4}},{t:this.shape_1026},{t:this.shape_947,p:{y:195.2}},{t:this.shape_1025},{t:this.shape_991,p:{x:418.5}},{t:this.shape_987,p:{x:436.9}},{t:this.shape_1024},{t:this.shape_988,p:{x:490.5}},{t:this.shape_997,p:{y:198}},{t:this.shape_958,p:{x:526.5}},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_952,p:{y:201.1}},{t:this.shape_957,p:{x:598.5}},{t:this.shape_994,p:{y:197.8}},{t:this.shape_916,p:{y:234.9}},{t:this.shape_993,p:{y:235}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_982,p:{x:616.5}},{t:this.shape_978,p:{x:634.3}},{t:this.shape_985,p:{y:234.5}},{t:this.shape_979,p:{x:671}},{t:this.shape_925,p:{y:237.5}},{t:this.shape_981,p:{x:706.5}},{t:this.shape_961,p:{y:237.5}},{t:this.shape_1013},{t:this.shape_898,p:{y:274.6}},{t:this.shape_1012},{t:this.shape_934,p:{y:277.2}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_955,p:{y:274.2}},{t:this.shape_905,p:{y:277.2}},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_908,p:{y:274.7}}]},18).to({state:[]},18).wait(925));

	// Cursor
	this.instance_25 = new lib.BlinkingCursor();
	this.instance_25.parent = this;
	this.instance_25.setTransform(402.8,80,1,1,0,0,0,9.2,15.1);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(24).to({_off:false},0).wait(8).to({_off:true},1).wait(9).to({_off:false},0).wait(8).to({_off:true},1).wait(9).to({_off:false},0).wait(1).to({x:420.8},0).wait(2).to({x:438.8},0).wait(3).to({x:456.8},0).wait(2).to({x:474.8},0).to({_off:true},1).wait(9).to({_off:false,x:547.8},0).wait(3).to({x:563.8},0).wait(2).to({x:580.8},0).wait(3).to({_off:true},1).wait(9).to({_off:false},0).wait(8).to({_off:true},1).wait(9).to({_off:false,x:402.8},0).wait(1).to({x:420.8},0).wait(2).to({x:438.8},0).wait(3).to({x:456.8},0).wait(2).to({x:474.8},0).to({_off:true},1).wait(9).to({_off:false,x:547.8},0).wait(3).to({x:563.8},0).wait(2).to({x:581.8},0).wait(3).to({x:597.8},0).to({_off:true},1).wait(9).to({_off:false,x:670.8},0).wait(4).to({x:692.8},0).wait(4).to({x:709.8},0).to({_off:true},1).wait(9).to({_off:false,x:762.8},0).wait(8).to({_off:true},1).wait(9).to({_off:false,x:424.8},0).wait(2).to({x:439.8},0).wait(3).to({x:457.8},0).wait(2).to({x:475.8},0).wait(1).to({x:762.8},0).to({_off:true},1).wait(9).to({_off:false,x:548.8},0).wait(2).to({x:566.8},0).wait(2).to({x:583.8},0).wait(3).to({x:601.8},0).to({_off:true},1).wait(9).to({_off:false,x:638.8},0).wait(8).to({_off:true},1).wait(9).to({_off:false,x:422.8},0).wait(2).to({x:439.8},0).wait(3).to({x:455.8},0).wait(2).to({x:475.8},0).wait(1).to({_off:true},1).wait(9).to({_off:false,x:547.8},0).wait(8).to({_off:true},1).wait(9).to({_off:false,x:420.8,y:79},0).wait(2).to({x:439.8},0).wait(3).to({x:456.8},0).wait(2).to({x:474.8},0).wait(1).to({_off:true},1).wait(9).to({_off:false,x:528.8,y:80},0).wait(2).to({x:565.8,y:78},0).wait(2).to({x:583.8},0).wait(3).to({x:600.8},0).wait(1).to({_off:true},1).wait(9).to({_off:false,x:672.8,y:80},0).wait(1).to({x:691.8},0).wait(7).to({_off:true},1).wait(9).to({_off:false,x:422.8,y:79},0).wait(2).to({x:438.8},0).wait(3).to({x:455.8},0).wait(2).to({x:472.8},0).wait(1).to({_off:true},1).wait(9).to({_off:false,x:547.8,y:80},0).wait(2).to({x:564.8},0).wait(2).to({x:582.8},0).wait(3).to({x:600.8},0).wait(1).to({x:601.8},0).to({_off:true},1).wait(9).to({_off:false,x:690.8,y:76},0).wait(4).to({x:708.8},0).wait(2).to({x:728.8},0).wait(2).to({_off:true},1).wait(9).to({_off:false,x:760.8},0).wait(8).to({_off:true},1).wait(9).to({_off:false},0).wait(8).to({_off:true},1).wait(934));

	// Back Gr
	this.instance_26 = new lib.green_background();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-401.6,199.5,1,1,0,0,0,399.6,200.6);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(418).to({_off:false},0).wait(1).to({x:-361.5},0).wait(1).to({x:-321.4},0).wait(1).to({x:-281.4},0).wait(1).to({x:-241.3},0).wait(1).to({x:-201.3},0).wait(1).to({x:-161.2},0).wait(1).to({x:-121.1},0).wait(1).to({x:-81.1},0).wait(1).to({x:-41},0).wait(1).to({x:-1},0).wait(1).to({x:39.1},0).wait(1).to({x:79.2},0).wait(1).to({x:119.2},0).wait(1).to({x:159.3},0).wait(1).to({x:199.3},0).wait(1).to({x:239.4},0).wait(1).to({x:279.5},0).wait(1).to({x:319.5},0).wait(1).to({x:359.6},0).wait(1).to({x:399.6},0).wait(211).to({_off:true},1).wait(694));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(434.2,265,285.7,268.5);
// library properties:
lib.properties = {
	width: 800,
	height: 400,
	fps: 24,
	color: "#0F6F91",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;