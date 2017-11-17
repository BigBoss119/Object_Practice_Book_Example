
var book1 = {
	title: "King James",
	body: ['I', 'II', 'III', 'IV', 'V'],
}

var book2 = {
	title: 'The Grail',
	body: ['x', 'XX', 'XXX', 'XL', 'L'],

}

function read (abook) {

console.log("Title: " + abook.title)
for(var i = 0; i < abook.body.length; i++) {
	console.log("Page" + (i+1) + ":" + abook.body[i])
}

}

read(book1)

read(book2)
