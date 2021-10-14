var toolboxinner = `<button class='toolButton' id='ptrtoggle'><svg width='32' height='32'  xmlns="http://www.w3.org/2000/svg" fill="white" fill-rule="nonzero" stroke="#000000" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g><g data-paper-data="{&quot;id&quot;:2,&quot;isDefaultLayer&quot;:true}" id="Default layer"><path d="M8.8,24.6l-0.6,-21.6l15.5,14.4l-6.6,1.7l4.4,7.7l-3.9,2.2l-4.4,-8.3z"/></g></g></svg></button><br><br>
<button class='toolButton' id='pen'><svg width='32' height='32'  xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="nonzero" stroke="#000000" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g><g data-paper-data="{&quot;id&quot;:2,&quot;isDefaultLayer&quot;:true}" id="Default layer"><path d="M21.6,13.8l7.4,2.6c0,0 -7.4,2.4 -7.2,2.2" data-paper-data="{&quot;origPos&quot;:null}" fill="#786161"/><path d="M3,5.7c6.3,0 21,4.8 21,10.5c0,5.7 -14.8,10.1 -21,10.1" data-paper-data="{&quot;origPos&quot;:null}" fill="#b2b2b2"/></g></g></svg></button><br>
<button class='toolButton' id='highlight'><svg width='32' height='32'  xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="nonzero" stroke="#000000" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g><g data-paper-data="{&quot;id&quot;:2,&quot;isDefaultLayer&quot;:true}" id="Default layer"><path d="M3,7.6c5.1,0 17.2,3.9 17.2,8.6c0,4.6 -12.1,8.2 -17.2,8.2" data-paper-data="{&quot;origPos&quot;:null}" fill="#5a6580"/><path d="M17.9,13.3l7.8,0.4l3.3,4.9l-11.5,-0.1" fill="#dfe511"/></g></g></svg></button><br>
<button class='toolButton' id='erasor'><svg width='32' height='32'  xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="nonzero" stroke="#000000" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g><g data-paper-data="{&quot;id&quot;:2,&quot;isDefaultLayer&quot;:true}" id="Default layer"><path d="M20.3,21.6M10.7,11.4M4.2,17.4c-1.4,1.4 -1.7,3.5 -0.5,4.7l5.3,5.7c1.2,1.3 3.3,1.2 4.8,-0.2l6.5,-6.1l-9.6,-10.2z" data-paper-data="{&quot;origPos&quot;:null,&quot;origRot&quot;:0}" fill="#ff8fc8"/><path d="M10.9,11.2l7.3,-6.9c1.4,-1.4 3.6,-1.4 4.8,-0.2l5.3,5.7c1.2,1.3 1,3.4 -0.5,4.7l-7.3,6.9z" data-paper-data="{&quot;origPos&quot;:null,&quot;origRot&quot;:0}" fill="#3152c3"/></g></g></svg></button><br>
<button class='toolButton' id='text'><svg width='32' height='32'  xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="nonzero" stroke="none" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g><g data-paper-data="{&quot;id&quot;:2,&quot;isDefaultLayer&quot;:true}" id="Default layer"><g data-paper-data="{&quot;isPGTextItem&quot;:true,&quot;text&quot;:&quot;T&quot;,&quot;fontFamily&quot;:&quot;Noto Serif&quot;,&quot;fontStyle&quot;:&quot;Regular&quot;,&quot;fontSize&quot;:80,&quot;letterSpacing&quot;:0,&quot;wasScaled&quot;:false,&quot;origPos&quot;:null}"><g data-paper-data="{&quot;isPGGlyphGroup&quot;:true}"><path d="M10.2,29v-26h11.7v26z" data-paper-data="{&quot;isPGGlyphRect&quot;:true}" fill-opacity="0" fill="#000000"/><path d="M16.9,10.7v10.5v0c0,0.3 0,0.5 0.1,0.7v0v0c0.1,0.2 0.2,0.3 0.3,0.4v0v0c0.1,0.1 0.3,0.2 0.5,0.2v0v0c0.2,0 0.4,0 0.6,0v0h0.4v0.8h-5.9v-0.8h0.4v0c0.2,0 0.4,0 0.6,0v0v0c0.2,0 0.4,-0.1 0.5,-0.2v0v0c0.1,-0.1 0.3,-0.2 0.3,-0.4v0v0c0.1,-0.2 0.1,-0.4 0.1,-0.7v0v-10.6h-1.8v0c-0.3,0 -0.5,0 -0.7,0.1v0v0c-0.2,0.1 -0.3,0.2 -0.5,0.3v0v0c-0.1,0.1 -0.2,0.3 -0.3,0.5v0v0c-0.1,0.2 -0.1,0.4 -0.1,0.6v0l-0.1,0.8h-1l0.1,-3.3h10.7l0.1,3.3h-1l-0.1,-0.8v0c0,-0.2 -0.1,-0.4 -0.1,-0.6v0v0c-0.1,-0.2 -0.2,-0.4 -0.3,-0.5v0v0c-0.1,-0.1 -0.3,-0.3 -0.5,-0.3v0v0c-0.2,-0.1 -0.4,-0.1 -0.7,-0.1v0z" fill="#000000"/></g></g></g></g></svg></button><br>
<button class='toolButton' id='mathinput'><svg width='32' height='32'  xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="nonzero" stroke="none" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g><g data-paper-data="{&quot;id&quot;:2,&quot;isDefaultLayer&quot;:true}" id="Default layer"><g data-paper-data="{&quot;isPGTextItem&quot;:true,&quot;text&quot;:&quot;&quot;,&quot;fontFamily&quot;:&quot;Noto Serif&quot;,&quot;fontStyle&quot;:&quot;Regular&quot;,&quot;fontSize&quot;:80,&quot;letterSpacing&quot;:0,&quot;wasScaled&quot;:false}" fill="none" font-family="sans-serif" font-weight="normal" font-size="12" text-anchor="start"/><g data-paper-data="{&quot;isPGTextItem&quot;:true,&quot;text&quot;:&quot;Σ&quot;,&quot;fontFamily&quot;:&quot;Noto Serif&quot;,&quot;fontStyle&quot;:&quot;Regular&quot;,&quot;fontSize&quot;:80,&quot;letterSpacing&quot;:0,&quot;wasScaled&quot;:false}"><g data-paper-data="{&quot;isPGGlyphGroup&quot;:true}"><path d="M10.2,29v-26h11.6v26z" data-paper-data="{&quot;isPGGlyphRect&quot;:true}" fill-opacity="0" fill="#000000"/><path d="M12.6,21.7h5.5v0c0.3,0 0.6,0 0.8,-0.1v0v0c0.2,-0.1 0.4,-0.2 0.5,-0.4v0v0c0.1,-0.2 0.3,-0.4 0.3,-0.6v0v0c0.1,-0.2 0.1,-0.5 0.2,-0.7v0l0.1,-0.6h1l-0.1,4.1h-10.2v-0.6l4,-6.1l-3.6,-6.4v-0.6h9l0.1,3.3h-1l-0.1,-0.8v0c0,-0.2 -0.1,-0.4 -0.1,-0.6v0v0c-0.1,-0.2 -0.2,-0.3 -0.3,-0.5v0v0c-0.1,-0.1 -0.3,-0.3 -0.5,-0.3v0v0c-0.2,-0.1 -0.4,-0.1 -0.7,-0.1v0h-4l2.8,5.1v0.3z" fill="#000000"/></g></g></g></g></svg></button><br>
<button class='toolButton' id='grab'><svg width='32' height='32'  xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="nonzero" stroke="none" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g><g data-paper-data="{&quot;id&quot;:2,&quot;isDefaultLayer&quot;:true}" id="Default layer"><path d="" fill="#000000" stroke="none"/><path d="M28.8,15.8c0,1.2 -0.3,2.5 -0.5,3.8c-0.2,1.3 -0.3,2.5 -0.6,3.8c-0.2,1.3 -0.5,2.6 -1.2,3.6c-0.6,1 -1.5,1.6 -2.7,1.9c-1.1,0.3 -2.5,0.1 -3.8,0c-1.3,-0.1 -2.5,-0.2 -3.8,-0.2c-1.3,-0.1 -2.5,-0.2 -3.8,-0.5c-1.2,-0.3 -2.4,-0.8 -3.5,-1.4c-1.1,-0.6 -2.1,-1.4 -3,-2.4c-0.8,-0.9 -1.5,-2 -2,-3.1c-0.5,-1.1 -0.9,-2.4 -1,-3.7c-0.1,-1.3 0.8,-4.1 1.6,-4.8c0.8,-0.6 1.7,-0.6 2.5,-0.6c0.8,0.1 0.6,6.2 0.6,5.3c0.1,-0.9 -0.1,-5.7 -0.5,-6.6c0.4,-0.4 -0.9,-1.5 -0.5,-1.8c-0.2,-0.4 -0.1,-1.4 -0.1,-1.9c0,-1.7 1.9,-2.2 3.4,-2.2c1,0 1.5,2.7 1.9,3.6c0.2,-1.7 0.3,-5.6 3.1,-5.6c2.9,0 2.8,4.2 2.9,5.9c0.6,-0.7 1.8,-3.4 2.8,-3.4c1.8,0 2.4,1.2 2.4,2.9c0,0.8 0.2,3.3 -0.3,3.8c0,0 0.3,0 0.3,0c0.5,-0.7 1.3,-2.8 2.3,-2.8c1.6,0 2.5,0.6 2.5,2.2c0,0.7 0.5,2.6 0.1,3.1c0.6,0.8 0.3,0.2 0.5,1.1z" data-paper-data="{&quot;origPos&quot;:null}" fill="#ffffff" stroke="#000000"/></g></g></svg></button><br>
<button class='toolButton' id='square'><svg width='32' height='32'  xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="nonzero" stroke="none" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g><g data-paper-data="{&quot;id&quot;:2,&quot;isDefaultLayer&quot;:true}" id="Default layer"><path d="" fill="#000000" stroke="none"/><path d="M3,28.4v-24.8h26v24.8z" fill="#ffffff" stroke="#000000"/></g></g></svg></button><br>
<button class='toolButton' id='circle'><svg width='32' height='32'  xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="nonzero" stroke="none" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g><g data-paper-data="{&quot;id&quot;:2,&quot;isDefaultLayer&quot;:true}" id="Default layer"><path d="" fill="#000000" stroke="none"/><path d="M29,16c0,7 -5.8,12.7 -13,12.7c-7.2,0 -13,-5.7 -13,-12.7c0,-7 5.8,-12.7 13,-12.7c7.2,0 13,5.7 13,12.7z" fill="#ffffff" stroke="#000000"/></g></g></svg></button><br>
<button class='toolButton' id='arrow'><svg width='32' height='32'  xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="nonzero" stroke="none" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g><g data-paper-data="{&quot;id&quot;:2,&quot;isDefaultLayer&quot;:true}" id="Default layer"><path d="" fill="#000000" stroke="none"/><path d="M20.1,10.5l8.9,6l-9,4.9l0,-2.8h-17v-5.1h17.1z" data-paper-data="{&quot;origPos&quot;:null}" fill="#ffffff" stroke="#000000"/></g></g></svg></button><br>
<button class='toolButton' id='undo'><svg width='32' height='32'  xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="nonzero" stroke="none" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g><g data-paper-data="{&quot;id&quot;:2,&quot;isDefaultLayer&quot;:true}" id="Default layer"><path d="" fill="#000000"/><path d="M6.2,3l2.4,3.4c2.1,-1.3 4.6,-2 7.2,-2c7.3,0 13.1,5.5 13.1,12.3c0,6.8 -5.9,12.3 -13.1,12.3c-6.1,0 -11.2,-3.9 -12.7,-9.1l4.4,-0.3c1.2,3.4 4.5,5.8 8.4,5.8c4.9,0 8.9,-3.8 8.9,-8.6c0,-4.7 -4,-8.6 -8.9,-8.6c-1.9,0 -3.7,0.6 -5.1,1.5l1.9,2.7l-9.7,0.8z" fill="#626272"/></g></g></svg></button><br>
<button class='toolButton' id='colorrect'><div style='width:32px;height:34px;text-align:center;'><div style='display:inline-block;margin-top:5px;border:1px solid black;border-radius:32px;width:20px;height:20px;background-color:black'></div></div></button><br>
<button class='toolButton' style = 'border:2px solid grey;transform:scaleX(-1);background:linear-gradient(to bottom,#efefef,#cbcbcb)' id='showHide'><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="-624,-93,32,32"><g data-paper-data="{&quot;id&quot;:2,&quot;isDefaultLayer&quot;:true}" id="Default layer" fill="none" fill-rule="nonzero" stroke="#000000" stroke-width="5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M-611.34875,-86.8765l8.037,10.04625l-9.3765,8.70675"/></g></svg></button>`;

function setUpCanvas()
{
var c = document.createElement("canvas");
c.width = window.innerWidth - 20, c.height = window.innerHeight - 20;
c.style = "z-index:10000000000;position:absolute;top:0px;left:0px;"
c.id = "myCanvas";
document.documentElement.appendChild(c);
var hiddenInput = document.createElement("div");
hiddenInput.contentEditable = 'true';
hiddenInput.style = "z-index:10000000000;position:absolute;top:0px;left:0px;color:black";
document.documentElement.appendChild(hiddenInput);
var mqs = [];
var colorselect = document.createElement("div");
var colorselectcanvas = document.createElement("canvas");
colorselectcanvas.width = 165;
colorselectcanvas.height = 135;
var colctx = colorselectcanvas.getContext('2d');
var colcols = 7;
var colrows = 5;
var colwidth = colorselectcanvas.width / colcols;
var colheight = colorselectcanvas.height / colrows;
colorselect.style = "z-index:10000000000006;top:10px;left:0px;border:1px solid black;position:absolute;display:none";
var sizebuttons = document.createElement("div");
var numsizes = 5;
var chosensize = 3;
for(var i = 0; i < numsizes; i++)
{
	var button = document.createElement("button");
	button.innerText = (i+1);
	button.value = i+1;
	button.onclick = function(e){ 
		globalSize = e.currentTarget.value; 
		Array.from(sizebuttons.getElementsByTagName("button")).forEach(b => b.style.backgroundColor = "white"); 
		e.currentTarget.style.backgroundColor = "#4488ff";
		var sizeShow = document.getElementById("colorrect").firstElementChild.firstElementChild;
		sizeShow.style.width = sizeShow.style.height = (globalSize*6 + 2) + "px";
		sizeShow.style.marginTop = ((32 - globalSize*6 - 2)>>1) + "px";
	};
	if(i + 1 == chosensize)
		button.style.backgroundColor = "#4488ff";
	button.style.border = "2px outset grey";
	button.style.width = Math.floor(colorselectcanvas.width/numsizes) + "px";
	button.style.height = Math.floor(colorselectcanvas.width/numsizes) + "px";
	sizebuttons.appendChild(button);
}

for(var i = 0; i < colcols; i++)
{
	for(var j = 0; j < colrows; j++)
	{
		colctx.fillStyle = "hsl(" + Math.floor(360*i/colcols) + "," + (100) + "%," + Math.floor(100*j/colrows) + "%)";
		colctx.fillRect(i*colwidth, j*colheight, colwidth, colheight);
	}
}
for(var i = 0; i < colcols; i++)
{
		colctx.fillStyle = "hsl(" + (0) + "," + (0) + "%," + (100*i/(colcols-1)) + "%)";
		colctx.fillRect(i*colwidth, 0, colwidth, colheight);
}

colorselectcanvas.onclick = function(e)
{
	var x = e.offsetX;
	var y = e.offsetY;
	var d = colctx.getImageData(x,y,1,1);
	var hex = "0123456789abcdef".split("");
	var rgb = (d.data[0]<<16) + (d.data[1]<<8) + (d.data[2]);
	globalColor = "";
	for(var i = 0; i < 6; i++)
		globalColor = hex[rgb&15] + globalColor, rgb = rgb>>4;
	globalColor = "#" + globalColor;
	console.log(globalColor);
	document.getElementById("colorrect").firstElementChild.firstElementChild.style.backgroundColor = globalColor;
	colorselect.style.display = "none";
}
document.documentElement.appendChild(colorselect);
colorselect.appendChild(colorselectcanvas);
colorselect.appendChild(document.createElement("br"));
colorselect.appendChild(sizebuttons);
var ctx = c.getContext("2d");
ctx.strokeStyle = "black";
var hideShow = document.createElement("div");
hideShow.style = "display:none;background:linear-gradient(to bottom,#efefef,#cbcbcb);transition:none;z-index:10000000000001;top:10px;left:0px;position:absolute;color:white;user-select:none;height:40px;width:32px;padding-top:4px"
hideShow.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="-624,-93,32,32"><g data-paper-data="{&quot;id&quot;:2,&quot;isDefaultLayer&quot;:true}" id="Default layer" fill="none" fill-rule="nonzero" stroke="#000000" stroke-width="5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M-611.34875,-86.8765l8.037,10.04625l-9.3765,8.70675"/></g></svg>`;
hideShow.onclick = function(e){
        c.style.display = "",
        toolbox.style.display = "",
       	hideShow.style.display = "none",
        showAllMath();
        repos();
}
document.documentElement.appendChild(hideShow);
var toolbox = document.createElement("div");
toolbox.style = "transition:none;z-index:10000000000002;top:10px;left:0px;position:absolute;color:white;user-select:none;font-family:Verdana;"
toolbox.innerHTML = toolboxinner;
document.documentElement.appendChild(toolbox);
function resize()
{
	var d = {};
	d.height = document.documentElement.clientHeight;
	d.width = document.documentElement.clientWidth;
	c.width = d.width - 10;
	c.height = d.height - 10;
}
function repos()
{
	var t = toolbox.getBoundingClientRect()
	c.style.top = window.pageYOffset + "px";
	hideShow.style.top = ((c.height>>1) + window.pageYOffset - (16)) + "px";
	hideShow.style.left = c.style.left = toolbox.style.left = window.pageXOffset + "px";
	toolbox.style.top = ((c.height>>1) + window.pageYOffset - (t.height >> 1)) + "px";
	colorselect.style.display = "none";
	if(paper.project)
		paper.project.view.translate(new paper.Point(paper.project.view.center.x - window.pageXOffset,paper.project.view.center.y - window.pageYOffset));
}

paper.setup('myCanvas');


window.addEventListener("resize",function(){
	resize();
});

window.addEventListener("scroll",function(){
	repos();
});
resize(), repos();

var stack = [];
var p;
var globalColor = 'black';
var globalSize = chosensize;
var pen = new paper.Tool();
pen.onMouseDown = function(e){
	saveState();
	p = new paper.Path();
	p.strokeColor = globalColor;
	p.strokeWidth = globalSize*2;
	p.add(e.point);
}
pen.onMouseDrag = function(e){
	p.add(e.point);
}
pen.onMouseUp = function(e){
	p.simplify();
}
var highlight = new paper.Tool();
highlight.onMouseDown = function(e){
	saveState();
	p = new paper.Path();
	p.strokeColor = globalColor;
	p.strokeWidth = globalSize*8;
	p.opacity = 0.4;
	p.add(e.point);
}
highlight.onMouseDrag = function(e){
	p.add(e.point);
}
highlight.onMouseUp = function(e){
	p.simplify();
}
var erasor = new paper.Tool();
erasor.onMouseDown = function(e){
	saveState();
	p = new paper.Path();
	p.opacity = 0;
	p.add(e.point);
}
erasor.onMouseDrag = function(e){
	p.add(e.point);
	paper.project.activeLayer.getItems({match:i => p.intersects(i), recursive:false}).forEach(i => ((i.data.mathField ? i.data.mathField.el().remove() : 0),i.remove()));
}
erasor.onMouseUp = function(e){
	p.remove();
}
var text = new paper.Tool();
var textHasFocus = false;
text.onMouseDown = function(e){
	saveState();
	if(e.item && e.item.className == "PointText")
	{
		p = e.item;
		p.visible = false;
		hiddenInput.style.display = "";
		hiddenInput.innerText = p.content;
		hiddenInput.style.left = (p.point.x + (c.width>>1)-2) + "px";
		hiddenInput.style.top = (p.point.y + (c.height>>1)-p.fontSize) + "px";
		hiddenInput.focus();
		hiddenInput.style.fontFamily = p.fontFamily;
		hiddenInput.style.fontSize = p.fontSize + "px";
		hiddenInput.style.color = p.fillColor.toCSS(true);
		hiddenInput.onkeydown = function(key){
			if(key.code != "Enter" || 1)
				return;
			p.content = hiddenInput.innerText;
			p.visible = true;
			hiddenInput.style.display = "none";	
		}
		
	}
	else if(p && p.className == "PointText" && hiddenInput.style.display == "")
	{
		p.content = hiddenInput.innerText;
		p.visible = true;
		hiddenInput.style.display = "none";	
	}
	else
	{
		p = new paper.PointText(e.point);
		p.visible = false;
		p.fillColor = globalColor;
		p.fontSize = globalSize*8 + 10;
		hiddenInput.style.display = "";
		hiddenInput.innerText = "";
		hiddenInput.style.left = (e.point.x + (c.width>>1)-2) + "px";
		hiddenInput.style.top = (e.point.y + (c.height>>1)-p.fontSize) + "px";
		hiddenInput.focus();
		hiddenInput.style.fontFamily = p.fontFamily;
		hiddenInput.style.fontSize = p.fontSize + "px";
		hiddenInput.style.color = p.fillColor.toCSS(true);
		hiddenInput.onkeydown = function(key){
			if(key.code != "Enter" || 1)
				return;
			p.content = hiddenInput.innerText;
			p.visible = true;
			hiddenInput.style.display = "none";	
		}
	}
}
var mathinput = new paper.Tool();
function cleanUpMaths()
{
	mqs = mqs.filter(mq => (mq.latex() ? true : (mq.el().remove(), mq.data.paperElement.remove(), false) ));
}
function setAllMathInvisible()
{
	cleanUpMaths();
	mqs.forEach(mq => (mq.el().style.pointerEvents = "none")&&(mq.el().style.userSelect = "none"));
}
function setAllMathVisible()
{
	mqs.forEach(mq => (mq.el().style.pointerEvents = "")||(mq.el().style.userSelect = ""));
}
function hideAllMath()
{
	mqs.forEach(mq => mq.el().style.display = "none");
}
function showAllMath()
{
	mqs.forEach(mq => mq.el().style.display = "");
}
mathinput.onMouseDown = function(e){
	saveState();
	cleanUpMaths();
	setAllMathVisible();
	var hiddenMath = document.createElement("span");
	hiddenMath.style = "z-index:10000000000;position:absolute;top:0px;left:0px;";
	hiddenMath.style.fontSize = (globalSize*8 + 10) + "px";
	hiddenMath.style.color = globalColor;
		hiddenMath.style.left = (e.point.x + (c.width>>1)-2) + "px";
		hiddenMath.style.top = (e.point.y + (c.height>>1)) + "px";
	
	document.documentElement.appendChild(hiddenMath);
	var MQ = MathQuill.getInterface(2);
	var config = {
		charsThatBreakOutOfSupSub: '+-=<>',
		autoSubscriptNumerals: true,
		autoCommands: 'pi theta sqrt sum nthroot',
		autoOperatorNames: 'sin cos tan cot sec csc log ln',
		maxDepth: 10,
		handlers: {
			edit: function(mathField) {
				var r = mathField.el().getBoundingClientRect();
				var rect = new paper.Rectangle(parseInt(mathField.el().style.left.slice(0,-2)) - (c.width>>1), parseInt(mathField.el().style.top.slice(0,-2)) - (c.height>>1), r.width, r.height);
				var obj = new paper.Path.Rectangle(rect);
				mathField.data.paperElement.remove();
				mathField.data.paperElement = obj;
				obj.data.mathField = mathField;
				obj.fillColor = "#ffffff02";
			}
		},
	};
	
	var answerMathField = MQ.MathField(hiddenMath, config);
	answerMathField.focus();
	
	var grabBag = new paper.Path.Rectangle(e.point, new paper.Size(10,10));
	grabBag.fillColor = "#ffffff02";
	grabBag.data.mathField = answerMathField;
	answerMathField.data.paperElement = grabBag;
	
	
	mqs.unshift(answerMathField);
	lastmqs = mqs[0];
}
mathinput.onMouseDrag = function(e){
	
}
mathinput.onMouseUp = function(e){
	
}
var grab = new paper.Tool();
var downDelta = 0;
paper.settings.hitTolerance = 6;
grab.onMouseDown = function(e){
	saveState();
	p = null;
	if(e.item)
		e.item.bounds.selected = true,
		p = e.item,
		downDelta = new paper.Point(p.position.x - e.point.x, p.position.y - e.point.y);
}
grab.onMouseDrag = function(e){
	if(p)
		p.position = e.point.add(downDelta);
	if(p && p.data.mathField)
		p.data.mathField.el().style.left = (p.bounds.topLeft.x + (c.width>>1)) + "px",
		p.data.mathField.el().style.top = (p.bounds.topLeft.y + (c.height>>1)) + "px"
		
}
grab.onMouseUp = function(e){
	if(p)
		p.bounds.selected = false,
		p = null;
}
var square = new paper.Tool();
square.onMouseDown = function(e){
	saveState();
	p = null;
}
square.onMouseDrag = function(e){
	if(p)
		p.remove();
	p = new paper.Path.Rectangle(e.downPoint, e.point),
	p.strokeColor = globalColor,
	p.strokeWidth = globalSize*2;
}
square.onMouseUp = function(e){
}
var circle = new paper.Tool();
circle.onMouseDown = function(e){
	saveState();
	p = null;
}
circle.onMouseDrag = function(e){
	if(p)
		p.remove();
	p = new paper.Path.Ellipse(e.downPoint, e.point),
	p.strokeColor = globalColor,
	p.strokeWidth = globalSize*2;
}
circle.onMouseUp = function(e){
}
var arrow = new paper.Tool();
arrow.onMouseDown = function(e){
	saveState();
	p = null;
}
arrow.onMouseDrag = function(e){
	var thickness = globalSize*3;
	if(p)
		p.remove();
	var len = e.downPoint.getDistance(e.point);
	var rectTo = new paper.Point(e.downPoint.x + len, e.downPoint.y + thickness);
	var rectFrom = new paper.Point(e.downPoint.x, e.downPoint.y - thickness);
	p = new paper.Path.Rectangle(rectFrom, rectTo);
	var tri = new paper.Path.RegularPolygon(p.bounds.rightCenter,3,thickness*3);
	tri.rotate(90,p.bounds.rightCenter);
	p = p.unite(tri);
	p.strokeColor = 'black';
	p.strokeWidth = 2;
	p.fillColor = globalColor;
	var ang = Math.atan2(e.downPoint.x-e.point.x,-e.downPoint.y + e.point.y)*57.2958 + 90;
	p.rotate(ang, e.downPoint);
}
arrow.onMouseUp = function(e){
	
}
var tools = {"pen":pen, "highlight":highlight, "erasor":erasor, "text":text, "mathinput":mathinput, "grab":grab, "square":square, "circle":circle, "arrow":arrow};
function setToolSelected(s)
{
	Array.from(document.getElementsByClassName("toolButton")).forEach(b => b.style.backgroundColor = "#ffffff");
	s.style.background = "#22ff33";
}
function setTool(e)
{

	if(p && p.className == "PointText" && hiddenInput.style.display == "")
	{
		p.content = hiddenInput.innerText;
		p.visible = true;
		hiddenInput.style.display = "none";	
	}
	setAllMathInvisible();
	colorselect.style.display = "none";
	setToolSelected(e.currentTarget);
	c.style.pointerEvents = "";
	var tool = e.currentTarget.id;
	tools[tool].activate();
	if(tool == "mathinput")
		setAllMathVisible();
}
function saveState()
{
	colorselect.style.display = "none";
	stack.push(paper.project.activeLayer.clone({insert:false}));	
}
function undo()
{
	colorselect.style.display = "none";
	if(stack.length)
		paper.project.activeLayer.remove();
		paper.project.addLayer(stack.pop());
}
Array.from(toolbox.getElementsByTagName("button")).forEach(b => b.onclick = setTool);
document.getElementById("colorrect").onclick = function()
{
	var td = toolbox.getBoundingClientRect();
	colorselect.style.left = (td.left + td.width + window.pageXOffset) + "px";
	console.log(td.top);
	colorselect.style.top = ((colorselect.height >> 1) + td.height + window.pageYOffset) + "px";
	colorselect.style.display = "";
}
document.getElementById("undo").onclick = undo;
document.getElementById("ptrtoggle").onclick = function(e)
{
	colorselect.style.display = "none";
	setToolSelected(e.currentTarget);
	c.style.pointerEvents = "none";
}
document.getElementById("showHide").onclick = function(e)
{
    c.style.display = "none",
    toolbox.style.display = "none",
    hideShow.style.display = "";
    hideAllMath();
}

setToolSelected(document.getElementById("ptrtoggle"));
c.style.pointerEvents = "none";
Array.from(document.getElementsByClassName("toolButton")).forEach(b => b.style.border = "2px outset grey");



}
chrome.storage.local.get(['isActive'], function(result) {
  if(result.isActive)
  	setUpCanvas();
});
