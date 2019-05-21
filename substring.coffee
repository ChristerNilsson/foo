assert = (a,b) -> 
	if a != b
		print "#{a} != #{b}"
		throw 'assert failure!'

print = console.log

substring = (left, right, start, stop) -> 
	left_start = start
	left_stop = Math.min stop,left.length
	left_sub = if start > left.length then "" else left.slice left_start,left_stop
	right_start = Math.max 0,start - left.length
	right_stop = stop - left.length
	right_sub = if stop <= left.length then "" else right.slice right_start,right_stop
	left_sub + right_sub

assert "", substring "abc","def", 0, 0
assert "", substring "abc","def", 1, 1
assert "", substring "abc","def", 2, 2
assert "", substring "abc","def", 3, 3
assert "", substring "abc","def", 4, 4
assert "", substring "abc","def", 5, 5
assert "a", substring "abc","def", 0, 1
assert "b", substring "abc","def", 1, 2
assert "c", substring "abc","def", 2, 3
assert "d", substring "abc","def", 3, 4
assert "e", substring "abc","def", 4, 5
assert "f", substring "abc","def", 5, 6
assert "cd", substring "abc","def", 2, 4
assert "abc", substring "abc","def", 0, 3
assert "cde", substring "abc","def", 2, 5
assert "abcdef", substring "abc","def", 0, 6
