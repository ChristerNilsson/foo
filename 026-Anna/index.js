'use strict'

const assert = chai.assert.deepEqual
const range = _.range
const print = console.log

const GRAVITY = 0.1
const balls = []

class Ball  {
	constructor(x,y,radius,vx,vy,r,g,b) {
		this.x = x
    this.y = y
    this.radius = radius
    this.vx = vx
    this.vy = vy
    this.r = r
    this.g = g
		this.b = b
		this.active = true
	}

	inside (mx,my) {
		return dist(mx,my,this.x,this.y) < this.radius
	}

	update () {
		this.x += this.vx
		if (this.x + this.radius > width || this.x < this.radius) {
			this.vx = -this.vx
		}
	
		this.y += this.vy
		if (this.y + this.radius > height) {
			this.vy = -this.vy
		} else {
			this.vy += GRAVITY	
		}
	}

	draw () {
		fill(this.r, this.g, this.b)
		ellipse(this.x, this.y,2*this.radius,2*this.radius)
	}
}

function setup () {
	createCanvas(windowWidth,windowHeight)
	ellipseMode(CENTER)
	for (const i in range(10)) {
		const x = width*random()
		const y = 100*random()
		const radius = 50 + 50*random()
		const vx = 2*random()
		const vy = 3*random()
		const r = 255*random()
		const g = 255*random()
		const b = 255*random()
		const ball = new Ball(x,y,radius,vx,vy,r,g,b)
		balls.push(ball)
	}
}

function draw () {
	background(128)
	for (const ball of balls) {
		if (ball.active) {
			ball.draw()
			ball.update()	
		}
	}
}

function mousePressed () {
	for (const ball of balls) {
		if (ball.inside(mouseX,mouseY)) {
			ball.active = false
		}
	}
}
	