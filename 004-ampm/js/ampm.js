// Generated by CoffeeScript 2.3.2
var HH, assert, f, print;

assert = require('assert').deepEqual;

print = console.log;

print('##### begin #####');

HH = {
  '00': '12',
  '13': '01',
  '14': '02',
  '15': '03',
  '16': '04',
  '17': '05',
  '18': '06',
  '19': '07',
  '20': '08',
  '21': '09',
  '22': '10',
  '23': '11'
};

f = function(hhxmm) {
  var ampm, hh, mm;
  hh = hhxmm.slice(0, 2);
  mm = hhxmm.slice(3, 5);
  ampm = hhxmm < '12:00' ? 'AM' : 'PM';
  if (hh in HH) {
    hh = HH[hh];
  }
  return hh + ':' + mm + ' ' + ampm;
};


// f = (hhxmm) ->
// 	time = new Date "2019-05-12 " + hhxmm
// 	time.toLocaleString 'en-US', { hour: 'numeric', minute: 'numeric', hour12: true }
assert('12:00 AM', f('00:00'));

assert('12:01 AM', f('00:01'));

assert('12:59 AM', f('00:59'));

assert('01:00 AM', f('01:00'));

assert('11:59 AM', f('11:59'));

assert('12:00 PM', f('12:00'));

assert('12:01 PM', f('12:01'));

assert('12:59 PM', f('12:59'));

assert('01:00 PM', f('13:00'));

assert('11:59 PM', f('23:59'));

// assert '12:00 AM', f '00:00'
// assert '12:01 AM', f '00:01'
// assert '12:59 AM', f '00:59'
// assert '1:00 AM', f '01:00'
// assert '11:59 AM', f '11:59'
// assert '12:00 PM', f '12:00'
// assert '12:01 PM', f '12:01'
// assert '12:59 PM', f '12:59'
// assert '1:00 PM', f '13:00'
// assert '11:59 PM', f '23:59'
print('#####  end  #####');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1wbS5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXMiOlsiYW1wbS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsRUFBQSxFQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUE7O0FBQUEsTUFBQSxHQUFTLE9BQUEsQ0FBUSxRQUFSLENBQWlCLENBQUM7O0FBQzNCLEtBQUEsR0FBUSxPQUFPLENBQUM7O0FBQ2hCLEtBQUEsQ0FBTSxtQkFBTjs7QUFFQSxFQUFBLEdBQ0M7RUFBQSxJQUFBLEVBQUssSUFBTDtFQUNBLElBQUEsRUFBSyxJQURMO0VBRUEsSUFBQSxFQUFLLElBRkw7RUFHQSxJQUFBLEVBQUssSUFITDtFQUlBLElBQUEsRUFBSyxJQUpMO0VBS0EsSUFBQSxFQUFLLElBTEw7RUFNQSxJQUFBLEVBQUssSUFOTDtFQU9BLElBQUEsRUFBSyxJQVBMO0VBUUEsSUFBQSxFQUFLLElBUkw7RUFTQSxJQUFBLEVBQUssSUFUTDtFQVVBLElBQUEsRUFBSyxJQVZMO0VBV0EsSUFBQSxFQUFLO0FBWEw7O0FBYUQsQ0FBQSxHQUFJLFFBQUEsQ0FBQyxLQUFELENBQUE7QUFDSCxNQUFBLElBQUEsRUFBQSxFQUFBLEVBQUE7RUFBQSxFQUFBLEdBQUssS0FBSyxDQUFDLEtBQU4sQ0FBWSxDQUFaLEVBQWMsQ0FBZDtFQUNMLEVBQUEsR0FBSyxLQUFLLENBQUMsS0FBTixDQUFZLENBQVosRUFBYyxDQUFkO0VBQ0wsSUFBQSxHQUFVLEtBQUEsR0FBUSxPQUFYLEdBQXdCLElBQXhCLEdBQWtDO0VBQ3pDLElBQUcsRUFBQSxJQUFNLEVBQVQ7SUFBaUIsRUFBQSxHQUFLLEVBQUcsQ0FBQSxFQUFBLEVBQXpCOztTQUNBLEVBQUEsR0FBSyxHQUFMLEdBQVcsRUFBWCxHQUFnQixHQUFoQixHQUFzQjtBQUxuQixFQWxCSjs7Ozs7O0FBNkJBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5COztBQUNBLE1BQUEsQ0FBTyxVQUFQLEVBQW1CLENBQUEsQ0FBRSxPQUFGLENBQW5CLEVBdENBOzs7Ozs7Ozs7Ozs7QUFtREEsS0FBQSxDQUFNLG1CQUFOIiwic291cmNlc0NvbnRlbnQiOlsiYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JykuZGVlcEVxdWFsXHJcbnByaW50ID0gY29uc29sZS5sb2dcclxucHJpbnQgJyMjIyMjIGJlZ2luICMjIyMjJ1xyXG5cclxuSEggPSBcclxuXHQnMDAnOicxMicgXHJcblx0JzEzJzonMDEnXHJcblx0JzE0JzonMDInXHJcblx0JzE1JzonMDMnXHJcblx0JzE2JzonMDQnXHJcblx0JzE3JzonMDUnXHJcblx0JzE4JzonMDYnIFxyXG5cdCcxOSc6JzA3J1xyXG5cdCcyMCc6JzA4J1xyXG5cdCcyMSc6JzA5J1xyXG5cdCcyMic6JzEwJ1xyXG5cdCcyMyc6JzExJyBcclxuXHJcbmYgPSAoaGh4bW0pIC0+XHJcblx0aGggPSBoaHhtbS5zbGljZSAwLDIgXHJcblx0bW0gPSBoaHhtbS5zbGljZSAzLDVcclxuXHRhbXBtID0gaWYgaGh4bW0gPCAnMTI6MDAnIHRoZW4gJ0FNJyBlbHNlICdQTScgXHJcblx0aWYgaGggb2YgSEggdGhlbiBoaCA9IEhIW2hoXVxyXG5cdGhoICsgJzonICsgbW0gKyAnICcgKyBhbXBtIFxyXG4gXHJcbiMgZiA9IChoaHhtbSkgLT5cclxuIyBcdHRpbWUgPSBuZXcgRGF0ZSBcIjIwMTktMDUtMTIgXCIgKyBoaHhtbVxyXG4jIFx0dGltZS50b0xvY2FsZVN0cmluZyAnZW4tVVMnLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycsIGhvdXIxMjogdHJ1ZSB9XHJcblxyXG5hc3NlcnQgJzEyOjAwIEFNJywgZiAnMDA6MDAnXHJcbmFzc2VydCAnMTI6MDEgQU0nLCBmICcwMDowMSdcclxuYXNzZXJ0ICcxMjo1OSBBTScsIGYgJzAwOjU5J1xyXG5hc3NlcnQgJzAxOjAwIEFNJywgZiAnMDE6MDAnXHJcbmFzc2VydCAnMTE6NTkgQU0nLCBmICcxMTo1OSdcclxuYXNzZXJ0ICcxMjowMCBQTScsIGYgJzEyOjAwJyBcclxuYXNzZXJ0ICcxMjowMSBQTScsIGYgJzEyOjAxJ1xyXG5hc3NlcnQgJzEyOjU5IFBNJywgZiAnMTI6NTknXHJcbmFzc2VydCAnMDE6MDAgUE0nLCBmICcxMzowMCdcclxuYXNzZXJ0ICcxMTo1OSBQTScsIGYgJzIzOjU5J1xyXG5cclxuIyBhc3NlcnQgJzEyOjAwIEFNJywgZiAnMDA6MDAnXHJcbiMgYXNzZXJ0ICcxMjowMSBBTScsIGYgJzAwOjAxJ1xyXG4jIGFzc2VydCAnMTI6NTkgQU0nLCBmICcwMDo1OSdcclxuIyBhc3NlcnQgJzE6MDAgQU0nLCBmICcwMTowMCdcclxuIyBhc3NlcnQgJzExOjU5IEFNJywgZiAnMTE6NTknXHJcbiMgYXNzZXJ0ICcxMjowMCBQTScsIGYgJzEyOjAwJ1xyXG4jIGFzc2VydCAnMTI6MDEgUE0nLCBmICcxMjowMSdcclxuIyBhc3NlcnQgJzEyOjU5IFBNJywgZiAnMTI6NTknXHJcbiMgYXNzZXJ0ICcxOjAwIFBNJywgZiAnMTM6MDAnXHJcbiMgYXNzZXJ0ICcxMTo1OSBQTScsIGYgJzIzOjU5J1xyXG5cclxucHJpbnQgJyMjIyMjICBlbmQgICMjIyMjJ1xyXG4iXX0=
//# sourceURL=c:\github\foo\004-ampm\ampm.coffee