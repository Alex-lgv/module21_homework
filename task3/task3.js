let myName = localStorage.getItem('myName');
let myDate = localStorage.getItem('myDate');
let userName
let currentDate

if (myName === null) {
	userName = prompt(`Добро пожаловать! Назовите, пожалуйста, ваше имя`);
	currentDate = new Date();
  localStorage.setItem('myName', userName);
  localStorage.setItem('myDate', currentDate);
} else {
	alert(`Добрый день, ${myName}! Давно не виделись. В последний раз вы были у нас ${myDate}`);
  currentDate = new Date();
  localStorage.setItem('myDate', currentDate);
};