function loadData() {
  // fetch('http://localhost:1234/getAllStudents')
  fetch('https://api-test-student.onrender.com/getAllStudents')
    .then(response => response.json())
    .then(json => {
      const tableBody = document.getElementById('studentData');

      // Clear existing table data
      tableBody.innerHTML = '';

      // Iterate over each student record
      json.forEach(student => {
        const row = document.createElement('tr');

        // Create cells for each field
        const idCell = createTableCell(student.id);
        const nameCell = createTableCell(student.name);
        const gradesCell = createTableCell(student.grade);
        const emailCell = createTableCell(student.email);
        const resultCell = createTableCell(student.result);

        // Append cells to the row
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(gradesCell);
        row.appendChild(emailCell);
        row.appendChild(resultCell);

        // Append row to the table body
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error:', error));
}

function createTableCell(text) {
  const cell = document.createElement('td');
  cell.textContent = text;
  return cell;
}




