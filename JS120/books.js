

function createBook(title, author, read = false) {

	return {
		title, // same as title: title,
		author, // same as author: author,
		read,

		getDescription() {
			let originalDescription = `${this.title} was written by ${this.author}.`
			let readDescription = ` I ${this.read ? 'have' : "haven't"} read it.`;
			return originalDescription + readDescription;
		},

		readBook() {
			this.read = true;
		}
	};

}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

console.log(book1.getDescription());  // "Mythos was written by Stephen Fry."
book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"

console.log(book1.read);
book1.readBook();
console.log(book1.read);
console.log(book1.getDescription());