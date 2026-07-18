let students = [];

const studentBody = document.getElementById("studentBody");
let studentId = 1;
let editId = null;

const addBtn = document.getElementById("addBtn");
const submitBtn = document.getElementById("submitBtn");

const studentFormContainer = document.getElementById("studentFormContainer");

const studentForm = document.getElementById("studentForm");

console.log(studentBody);
console.log(addBtn);

// ==================================
//  show form on add button click
// ==================================

addBtn.addEventListener("click", () => {
  studentFormContainer.style.display = "flex";
});

// ==================================
// get data through form
// ==================================

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  if (editId === null) {
    const student = {
      id: studentId++,
      name,
      email,
    };
    console.log(student);
    students.push(student);
    studentFormContainer.style.display = "none";
  }else{
    students = students.map((s)=>{
        if(s.id === editId){
            s.name = name
            s.email = email
        }
        return s;
    })
    editId = null;
    // submitBtn.innerHTML = "Add Student"
    studentFormContainer.style.display = "none";

  }
  renderStudents();
  studentForm.reset();
});

// console.log(students);

// ==================================
//  display students in table
// ==================================

function renderStudents() {
  studentBody.innerHTML = "";
  students.forEach((s, i) => {
    studentBody.innerHTML += ` <tr>
    <td>${s.id}</td>
    <td>${s.name}</td>
    <td>${s.email}</td>
    <td>
    <button onclick="editStudent(${s.id})">+</button>
    <button onclick="deleteStudent(${s.id})">Del</button>
    </td>
    </tr>`;
  });
}

// ==================================
//  delete student function
// ==================================
function deleteStudent(id) {
  students = students.filter((student) => {
    return student.id !== id;
  });
  renderStudents();
}

// ==================================
//  edit student function
// ==================================
function editStudent(id) {
  studentFormContainer.style.display = "flex";
  const student = students.filter((student) => {
    if (student.id === id) {
      document.getElementById("name").value = student.name;
      document.getElementById("email").value = student.email;
    }
  });
  editId = id;
  submitBtn.innerText = "Update Student";
  console.log(id);
  console.log(student);
}

// ==========
renderStudents();
