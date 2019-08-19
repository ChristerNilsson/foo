'use strict'

const GRAVITY = 0.1

const assert = chai.assert.deepEqual
const range = _.range
const print = console.log

const balls = []

class Ball {
	constructor (x,y,radius,vx,vy,r,g,b) {
		this.x = x //the position 
		this.y = y
		this.vx = vx // velocity for x 
		this.vy = vy
		this.radius = radius // how big 
		this.r = r
		this.g = g
		this.b = b
	}
	render() {
		fill(this.r,this.g,this.b)
    circle(this.x, this.y, this.radius)	
    this.update()
	}
	update() {
		this.x += this.vx
		this.y += this.vy		
		if (this.x + this.radius > width || this.x < this.radius) this.vx = -this.vx 
		if (this.y + this.radius > height) this.vy = -this.vy; else this.vy += GRAVITY
	}
  // collides() {
  //   if (ball1.collides(ball2))
    
  // }
}

// https://www.youtube.com/watch?v=M5d7vygUPoQ
// https://p5js.org/reference/

function setup () {
	createCanvas(windowWidth, windowHeight)
	for (const i of range(10)) {
    const radius = random (20,50)
    const x = random(radius, width - radius)
		const y = random(0,100)
		const vx = random (-4,4)
		const vy = random (-1,+1)
		const r =  random(0,255)
		const g =  random(0,255)
		const b =  random (0,255)
		balls.push(new Ball(x,y,radius,vx,vy,r,g,b))
  }
}

function circle(x,y,radius) {
	ellipse(x,y,2*radius)
}

// function collisionDetection() {
// 	for (ball1 of balls) {
// 		for (ball2 of balls) {
// 			// if ball1 and ball2 are colliding
// 			if (ball1.collides(ball2)) {
// 				// remove them both
// 			}
// 		}
// 	}
// }

function draw () {
	background(128)
	for (const ball of balls) ball.render()
	// collisionDetection()
}
