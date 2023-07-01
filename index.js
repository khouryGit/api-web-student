function loadData() {
  fetch('http://localhost:1234/getAllStudents')
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




// function GetAllStudents()
// {
//     fetch('http://localhost:1234/GetallStudents')
//     // fetch('https://test20230701.onrender.com/GetAllStudents')
//       .then(response => response.json())
//       .then(json => {
//         let studentstable = document.getElementById('students');
//         const tableBody = document.getElementById('tableBody');
//         json.forEach(s => {
//           const row = jsonData[i];
//           const id = row[0];
//           const name = row[1];
//           const notes = row[2];
//           const emails = row[3];
//           const results = row[4];
//             // let studenttd = document.createElement('td');
//           const newRow = document.createElement('tr');
//           const idCell = document.createElement('td');
//           const nameCell = document.createElement('td');
//           const notesCell = document.createElement('td')
//           const emailCell = document.createElement('td');
//           const resultCell = document.createElement('td');

//           idCell.innerHTML = id;
//           nameCell.innerHTML = name;
//           notesCell.innerHTML = notes;
//           emailCell.innerHTML = emails;
//           resultCell.innerHTML = results;

//           newRow.appendChild(idCell);
//           newRow.appendChild(nameCell);
//           newRow.appendChild(notesCell);
//           newRow.appendChild(emailCell);
//           newRow.appendChild(resultCell);

//           tableBody.appendChild(newRow);

//           tableBody.appendChild(newRow);
//         });
//       })
// }
