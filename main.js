let students = []

function addStudent() {
    const name = document.getElementById('name').value
    const surname = document.getElementById('surname').value
    const age = document.getElementById('age').value
    const course = document.getElementById('course').value
    const faculty = document.getElementById('faculty').value


const student = {
    name,
    surname,
    age: parseInt(age),
    course: parseInt(course),
    faculty
};

students.push(student);
updateTable();
saveData();
}


function upTable() {
    const table = document.getElementById('tableStudent')
    table.innerHTML = '<tr><th>Ім\'я</th><th>Прізвище</th><th>Вік</th><th>Курс</th><th>Факультет</th><th>Список курсів</th><th>Дії</th></tr>';

    students.forEach((student, index) => {
        const row = table.insertRow();
        row.innerHTML = `<td>${student.name}</td><td>${student.surname}</td><td>${student.age}</td><td>${student.course}</td><td>${student.faculty}</td><td>${student.courses.join(', ')}</td><td><button onclick="deleteStudent(${index})">Видалити</button></td>`;
    });
}

function saveData() {
    const jsonData = JSON.stringify(students);
}