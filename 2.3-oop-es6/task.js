'use strict';

// задача №1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
		return this.state;
	}

	set state (state) {
		if (state < 0) {
			this._state = 0;
		} else if (state > 100) {
			this._state = 100;
		} else {
			this._state = state;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'book';
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

// задача №2
class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	} 

	addBook (book) {
		if (book.state > 30) { 
			this.books.push(book);
		}
		return this.books;
	}

	findBookBy (type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			} 
	    }
	    return null;
    }

	giveBookByName (bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				let searchBook = this.books.splice([i], 1);
				return searchBook[0];
			}
		}
		return null;
	}
}

// задача №3 - НЕ ГОТОВА
class StudentLog {
	constructor (name) {
		this.name = name;
		this.grades = {};
	}

	getName() {
		return this.name;
	}

	addGrade (grade, subject) { // ошибки 
		if (this.grades === subject) {
			if (grade > 0 && grade <= 5) {
				this.grades = [this.grades.push(grade)];
			} else {
				console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
			}
			return this.grades.length;
		} 
	}
}