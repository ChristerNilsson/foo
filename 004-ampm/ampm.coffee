assert = require('assert').deepEqual
print = console.log
print '##### begin #####'

HH = 
	'00':'12' 
	'13':'01'
	'14':'02'
	'15':'03'
	'16':'04'
	'17':'05'
	'18':'06' 
	'19':'07'
	'20':'08'
	'21':'09'
	'22':'10'
	'23':'11' 

f = (hhxmm) ->
	hh = hhxmm.slice 0,2 
	mm = hhxmm.slice 3,5
	ampm = if hhxmm < '12:00' then 'AM' else 'PM' 
	if hh of HH then hh = HH[hh]
	hh + ':' + mm + ' ' + ampm 
 
# f = (hhxmm) ->
# 	time = new Date "2019-05-12 " + hhxmm
# 	time.toLocaleString 'en-US', { hour: 'numeric', minute: 'numeric', hour12: true }

assert '12:00 AM', f '00:00'
assert '12:01 AM', f '00:01'
assert '12:59 AM', f '00:59'
assert '01:00 AM', f '01:00'
assert '11:59 AM', f '11:59'
assert '12:00 PM', f '12:00' 
assert '12:01 PM', f '12:01'
assert '12:59 PM', f '12:59'
assert '01:00 PM', f '13:00'
assert '11:59 PM', f '23:59'

# assert '12:00 AM', f '00:00'
# assert '12:01 AM', f '00:01'
# assert '12:59 AM', f '00:59'
# assert '1:00 AM', f '01:00'
# assert '11:59 AM', f '11:59'
# assert '12:00 PM', f '12:00'
# assert '12:01 PM', f '12:01'
# assert '12:59 PM', f '12:59'
# assert '1:00 PM', f '13:00'
# assert '11:59 PM', f '23:59'

print '#####  end  #####'
