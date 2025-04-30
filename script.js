const form = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');

// Submit form and log the data
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const student = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    course: document.getElementById('course').value,
  };

  // Here you can POST this data to an API
  console.log("Student Submitted:", student);

  // Reset the form
  form.reset();
});

// Fetch mock student data 
function fetchStudents() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      studentList.innerHTML = ''; // Clear old data
      data.slice(0, 5).forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name} - ${student.email}`;
        studentList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error fetching students:', error);
    });
}
