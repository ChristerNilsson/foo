ass = require 'assert'

assert = (a,b) -> 
	if a == b then return
	print "\nassert failure: (gives javascript file line numbers)\n#{a}\n#{b}\n"
	throw	new ass.AssertionError {actual: b,expected: a,operator: 'strictEqual'}

print = console.log 


f = (hhxmm) ->
 
# assert '12:00 am', f '00:00'  
# assert '12:01 am', f '00:01'
# assert '12:59 am', f '00:59'
# assert '01:00 am', f '01:00' 
# assert '11:59 am', f '11:59' 
# assert '12:00 pm', f '12:00'     
# assert '12:01 pm', f '12:01'
# assert '12:59 pm', f '12:59'
# assert '01:00 pm', f '13:00'
# assert '11:59 pm', f '23:59'

print '\nok\n'