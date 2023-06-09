function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomInt;

const myPromise = new Promise((resolve, reject) => {
  console.log("1");
  randomInt = getRandomInt(101);
  if (randomInt % 2 == 0) {
    setTimeout(() => {
      console.log("2");
      resolve(randomInt);
    }, 3000);
  } else {
    setTimeout(() => {
      console.log("2");
      reject(randomInt);
    }, 3000);
  }
  console.log("3");
});

myPromise
  .then((result) => {
    console.log("Завершено успешно. Сгенерированное число - ", result);
  })
  .catch((error) => {
    console.log("Завершено с ошибкой. Сгенерированное число — ", error);
  })
  .finally(() => {
    console.log("Так работает асинхронный код");
  });
