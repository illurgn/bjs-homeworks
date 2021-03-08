'use strict';
//String.prototype.isPalindrome - для задачи №1
/*String.prototype = isPalindrome();

function isPalindrome() {
    this === this.reverse();
}*/

//задача №2
function getAverageMark(marks) { // тесты прошли
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
/*function checkBirthday(birthday) {
    let now = Date.now();
    let birthday = Date.now(birthday);
    let diff = now - birthday; // код для задачи №3 писать здесь
    let age = Math.trunc(diff / 31536000000);

    return age;
}*/