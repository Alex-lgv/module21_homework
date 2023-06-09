const parser = new DOMParser()
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const students = listNode.querySelectorAll("student");

const studentsObj = {list: []};

students.forEach(item => {
  const student = {}
  for (let child of item.children) {
    let childText = child.textContent.trim().split(/\n\s*/).join(' ')
    student[child.tagName] = +childText || childText
    if (child.hasAttribute('lang')) {             
      student.lang = child.getAttribute('lang')
    }
  }
  studentsObj.list.push(student)
})

console.log('результат', studentsObj);


