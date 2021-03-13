'use strict';
//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function isPalindrome() {
	let str = this.toLowerCase().replace(/\s/g, "").split("");

	return str.join("") === str.reverse().join("");
}

//задача №2
function getAverageMark(marks) {
    let sum = 0;

    if (marks.length === 0) {
		return 0;
	}

	for (let i = 0; i < marks.length; i++) {
		sum += marks[i];
	}

	return Math.round(sum / marks.length);
}

//задача №3
function checkBirthday(birthday) {
    let mlsYear = 365.242 * 24 * 60 * 60 * 1000;
    let now = (new Date()).getTime();
    let birthdayCheck = +new Date(birthday);
    let diff = now - birthdayCheck; 
    let age = diff / mlsYear;

    if (age > 18) {
    	return age;
    }
}