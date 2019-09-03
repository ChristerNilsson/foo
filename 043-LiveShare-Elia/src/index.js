'use strict'

const fs = require('fs')
const _ = require('lodash')
const range = _.range

// 1 bit 0 or 1 (2 values)
// ASCII 1 byte 8 bits 2*2*2*2*2*2*2*2==256 0..255
// unicode 16 bits or 2 bytes 2**16 == 256*256 == 65536 == 64K, K=1024
// utf-8 1 byte 2 bytes 3 bytes 4 bytes 
// google ascii, byte, bit, unicode, utf-8

let lines = fs.readFileSync('data.txt','utf-8')
lines = JSON.parse(lines)
//lines.push('bengt')

// remove christer
//lines = lines.filter(  (line) => line !== 'christer')

// lines.pop()
// lines.pop()

// remove bengt
lines.splice(1,1,"david","erik") // array => array

// ["elia","david","erik","christer"]
//console.log(lines.slice())
// remove and insert
// split string => array
// join  array => string

process.argv == ['xxx','yyy','add','Bengt']

const params =  process.argv.slice(2)
console.log(params)
// params == ['add','Bengt']

// todo: list, add cleaning, delete cleaning, reset

lines = JSON.stringify(lines)
//console.dir(lines)
fs.writeFileSync('data2.txt',lines) 

