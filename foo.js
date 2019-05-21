ass = require('assert')
assert = (a,b) => {
	if (a == b) return
	print("\nassert failure: (gives javascript file line numbers)\n#{a}\n#{b}\n")
	throw	new ass.AssertionError({actual: b,expected: a,operator: 'strictEqual'})
}
print = console.log 
/////////////////////

let x
print(x)




/////////////////////
print("\nok\n")   



