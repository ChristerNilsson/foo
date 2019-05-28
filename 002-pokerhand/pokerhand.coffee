_ = require 'lodash'
range = _.range  
assert = require('assert').deepEqual
print = console.log
print '##### begin #####'     

reverse = (a) -> a.reverse() 
sign = (a,b) -> (if a < b then 1 else (if a > b then -1 else 0))
assert -1, sign 2,1
assert  0, sign 3,3
assert  1, sign 1,2 

compare = (a,b) ->
	if typeof a == "object" and typeof b == "object"
		for i in range Math.min a.length,b.length
			c = compare a[i],b[i]
			if c != 0 then return c
	else
		return sign a,b #(if a > b then -1 else (if a < b then 1 else 0))
	0

assert  1,compare 12,13 
assert  0,compare 12,12
assert -1,compare 13,12
assert -1,compare [1,11],[1,2]
assert  0,compare [1,11],[1,11]
assert  1,compare [1,2],[1,11]
assert  1,compare [1,'11'],[1,'2']
assert  0,compare [1,'11'],[1,'11']
assert -1,compare [1,'2'],[1,'11']

bsort = (list,cmp=compare) ->
	for i in range list.length
		for j in range list.length-1
			[list[j], list[j+1]] = [list[j+1], list[j]] if cmp(list[j], list[j+1]) < 0
	list

assert [1,2,8], bsort [1,8,2],compare 
assert [1,2,8], bsort [1,8,2],compare
assert [[1],[2],[8]], bsort [[1],[8],[2]],compare
assert [[2,1],[2,2],[2,8]], bsort [[2,1],[2,8],[2,2]],compare
assert [[1,7], [1,8], [1,9]], bsort [[1,8], [1,7], [1,9]],compare
assert [1,2,3,4], bsort [3,2,4,1], compare

poker = (a,b) -> compare calc(a.split(" ")), calc(b.split(" "))
calc = (hand) ->
	groups = _.groupBy('  23456789TJQKA'.indexOf(card[2]) for card in hand)
	[score, ranks] = _.unzip reverse bsort ([cnt.length, parseInt(rank)] for rank, cnt of groups)
	if score.length == 5
		if compare(ranks, [14,5,4,3,2])==0 then ranks = [5,4,3,2,1]
		straight = if ranks[0] - ranks[4] == 4 then 1 else 0
		flush = if _.size(_.uniq(suit.substring(0,2) for suit in hand)) == 1 then 1 else 0
		score = [[[1], [3,1,1,1]], [[3,1,1,2], [5]]][flush][straight]
	[score, ranks] 

assert -1, poker 'kl8 ruA ru8 klA kl9', 'ru7 sp2 ru5 sp3 klA'
assert  1, poker 'kl8 spT klK hj9 sp4', 'ru7 sp2 ru5 sp3 klA'
assert  1, poker 'kl8 ruA ru8 klA kl9', 'kl8 ruA ru8 klA klT'
assert -1, poker 'kl8 ruA ru8 klA kl9', 'kl8 ruA ru8 klA kl7'
assert  1, poker 'kl8 ruA ru8 klA kl9', 'klT ruA ruT klA kl9'
assert  0, poker 'spA sp2 sp3 sp4 sp5', 'ruA ru2 ru3 ru4 ru5'
assert  1, poker 'spA hjA ruA klA sp5', 'ruA ru2 ru3 ru4 ru5'
assert -1, poker 'ru7 sp7 hj7 kl7 spJ', 'ru6 sp5 hj6 kl6 spQ'
assert -1, poker 'ru8 sp8 hj8 kl9 sp9', 'ru6 sp6 hj6 ru9 hj9'
assert  0, poker 'ru7 ru3 ru5 ru9 ruK', 'hj7 hj3 hj5 hj9 hjK'
assert  0, poker 'ru7 ru3 ru5 ru9 ruK', 'hj7 hj3 hj5 hj9 hjK'
assert  0, poker 'ru7 ru3 ru5 ru9 ruK', 'hj7 hj3 hj5 hj9 hjK'
assert  1, poker 'ru7 hj8 ru9 hj5 ru6', 'hj7 ru8 kl9 hjT sp6'
assert  1, poker 'ru7 hj8 ru8 kl8 ruJ', 'kl7 hj9 ru9 kl9 ruQ'
assert -1, poker 'ru7 hj7 ru8 kl8 ruJ', 'sp7 kl7 sp8 hj8 ruT'
assert  1, poker 'hj7 kl3 sp3 kl4 hjA', 'sp7 hj3 ru3 klK spA'
assert  1, poker 'sp7 hj3 ru2 kl4 spA', 'hj7 ru3 ru5 sp4 hjA'

print '#####  end  #####'  
