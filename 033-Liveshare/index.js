const assert = chai.assert.deepStrictEqual

const records = {
	"2548": {
		"album": "Slippery When Wet",
		"artist": "Bon Jovi",
		"tracks": [ 
			"Let It Rock", 
			"You Give Love a Bad Name" 
		]
	},
	"2468": {
		"album": "1999",
		"artist": "Prince",
		"tracks": [ 
			"1999", 
			"Little Red Corvette" 
		]
	},
	"1245": {
		"artist": "Robert Palmer",
		"tracks": [ ]
	},
	"5439": {
		"album": "ABBA Gold"
	}
}

const last = (arr) => arr[arr.length-1]
const snapShot = (json) => JSON.parse(JSON.stringify(json))
const recordsCopy = snapShot(records)

updateRecords = (id,  key, value) => {
	if (records[id] == undefined) records[id] = {}
	if (value === '') {
		if (key === '') {
			delete records[id]
		} else {
			delete records[id][key] 
		}
	} else { 
		if (key === 'tracks') {
			if (! records[id].tracks) records[id].tracks = []
			records[id].tracks.push(value)
		} else records[id][key] = value		
	}
	console.log(snapShot(records))
} 
 
console.log(snapShot(records))

updateRecords(5439, "artist", "ABBA")
assert(records[5439].artist, 'ABBA', 'artist should be "ABBA"')

updateRecords(5439, "tracks", "Take a Chance on Me")
assert(last(records[5439].tracks), "Take a Chance on Me", 'tracks should have "Take a Chance on Me" as the last element.')

updateRecords(2548, "artist", "")
assert(records[2548].artist, undefined, 'artist should not be set')

updateRecords(1245, "tracks", "Addicted to Love")
assert(last(records[1245].tracks), "Addicted to Love", 'tracks should have "Addicted to Love" as the last element.')

updateRecords(2468, "tracks", "Free")
assert(records[2468].tracks[0], '1999', 'tracks should have "1999" as the first element.')

updateRecords(2548, "tracks", "")
assert(records[2548].tracks, undefined, 'tracks should not be set')

updateRecords(1245, "album", "Riptide")
assert(records[1245].album, 'Riptide', 'album should be "Riptide"')

updateRecords(6666, "artist", "Beatles")
assert(records[6666].artist, 'Beatles', 'artist should be "Beatles"')

updateRecords(6666, "", "")
assert(records[6666], undefined, 'record should be deleted')

updateRecords(5439, "year", 1988)
assert(records[5439].year, 1988, 'the year should be 1988')
