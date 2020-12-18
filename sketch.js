function setup() {
	createCanvas(800,800);
	angleMode(DEGREES);
}

function draw() {
	background(0,0,0);
	// The time variables
	var hr = hour();
	var mn = minute();
	var sc = second();

	// The times to angle
	hrAngle = map(hr,0,12,0,360);
	mnAngle = map(mn,0,60,0,360);
	scAngle = map(sc,0,60,0,360);

	translate(400,400)

	//The clock arms
	//the second arm
	push();
	rotate(scAngle-90);
	stroke(0,205,205);
	strokeWeight(7);
	line(0,0,140,0);
	pop();

	//the minute arm
	push();
	rotate((mnAngle+ scAngle/60)-90);
	stroke(205,205,0);
	strokeWeight(7);
	line(0,0,120,0);
	pop();
	
	//the hour arm
	push();
	rotate((hrAngle + mnAngle/60 + scAngle /3600)-90);
	stroke(205,0,0);
	strokeWeight(7);
	line(0,0,100,0);
	pop();

	//the clock arcs
	//the second arc
	push();
	noFill();
	stroke(0,255,255);
	strokeWeight(7);
	arc(0,0,500,500,-90,scAngle-90);
	pop();

	//the minute arc
	push();
	noFill();
	stroke(255,255,0);
	strokeWeight(7);
	arc(0,0,480,480,-90,(mnAngle+ scAngle/60)-90);
	pop();

	//the hour arc
	push();
	noFill();
	stroke(255,0,0);
	strokeWeight(7);
	arc(0,0,460,460,-90,(hrAngle + mnAngle/60 + scAngle /3600)-90);
	pop();
}