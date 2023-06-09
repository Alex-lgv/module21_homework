const btn = document.querySelector("button");
const inp = document.querySelector("input");
btn.addEventListener("click", () => {
  if (inp.value <= 10 && inp.value >= 1) {
    fetch(`https://jsonplaceholder.typicode.com/users/${inp.value}/todos`)
      .then((response) => {
        console.log("response", response);
        const result = response.json();
        console.log("result", result);
        return result;
      })
      .then((data) => {
        html = "<ul>";
        data.forEach(function (item, i, arr) {
          if (item.completed === true) {
            html += "<li><strike>" + JSON.stringify(item) + "</strike></li>";
          } else {
            html += "<li>" + JSON.stringify(item) + "</li>";
          }
        });
        html += "</ul>";
        document.write(html);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  } else {
    html = "<p>Пользователь с указанным id не найден</p>";
    document.write(html);
    console.log("Пользователь с указанным id не найден");
  }
});
