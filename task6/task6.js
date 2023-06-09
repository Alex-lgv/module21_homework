const btn = document.querySelector("button");
const firstInp = document.querySelector(".first");
const secondInp = document.querySelector(".second");

btn.addEventListener("click", () => {
  if (
    firstInp.value <= 10 &&
    firstInp.value >= 1 &&
    secondInp.value <= 10 &&
    secondInp.value >= 1
  ) {
    fetch(
      `https://picsum.photos/v2/list?page=${firstInp.value}&limit=${secondInp.value}`
    )
      .then((response) => {
        console.log("response", response);
        const result = response.json();
        console.log("result", result);
        return result;
      })
      .then((data) => {
        html = "<ul>";
        data.forEach(function (item, i, arr) {
          html += "<li>" + JSON.stringify(item) + "</li>";
        });
        html += "</ul>";
        document.write(html);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
    localStorage.setItem("firstValue", firstInp.value);
    localStorage.setItem("secondValue", secondInp.value);
  } else if (
    (firstInp.value > 10 || firstInp.value < 1) &&
    secondInp.value <= 10 &&
    secondInp.value >= 1
  ) {
    html = "<p>Номер страницы вне диапазона от 1 до 10</p>";
    document.write(html);
    console.log("Номер страницы вне диапазона от 1 до 10");
  } else if (
    firstInp.value <= 10 &&
    firstInp.value >= 1 &&
    (secondInp.value > 10 || secondInp.value < 1)
  ) {
    html = "<p>Лимит вне диапазона от 1 до 10</p>";
    document.write(html);
    console.log("Лимит вне диапазона от 1 до 10");
  } else if (
    (firstInp.value > 10 || firstInp.value < 1) &&
    (secondInp.value > 10 || secondInp.value < 1)
  ) {
    html = "<p>Номер страницы и лимит вне диапазона от 1 до 10</p>";
    document.write(html);
    console.log("Номер страницы и лимит вне диапазона от 1 до 10");
  }
});

let myFirstValue = localStorage.getItem("firstValue");
let mySecondValue = localStorage.getItem("secondValue");

if (myFirstValue !== null && mySecondValue !== null) {
  fetch(
    `https://picsum.photos/v2/list?page=${myFirstValue}&limit=${mySecondValue}`
  )
    .then((response) => {
      console.log("response", response);
      const result = response.json();
      console.log("result", result);
      return result;
    })
    .then((data) => {
      html = "<ul>";
      data.forEach(function (item, i, arr) {
        html += "<li>" + JSON.stringify(item) + "</li>";
      });
      html += "</ul>";
      document.write(html);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    });
}

// Для того, чтобы очистить localStorage необходимо воспользоваться в консоли следующими командами:
// myFirstValue = localStorage.removeItem('firstValue');
// mySecondValue = localStorage.removeItem('secondValue');
