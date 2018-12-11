function canvas(l,t){
	var x = document.createElement("CANVAS");
	x.id="myCanvas";
	x.width=l;
	x.height=t;
	x.style.position="absolute";
	x.style.border="1px solid";
	document.body.appendChild(x);
}

function kotak(x,y,p,l){
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.rect(x,y,p,l);
	ctx.stroke();
}

function lingkaran(x,y,r){
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
}
