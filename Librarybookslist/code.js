function clickHandler() {
    // Get the values from the input fields
    const newBookInput = document.getElementById("new-book-input");
    const newBook = newBookInput.value;

    const newAuthorInput = document.getElementById("new-author-input");
    const newAuthor = newAuthorInput.value;

    // Get table element
    const table = document.getElementById("myTable");

    // Create new row
    const newRow = table.insertRow();

    // Create new cells
    const cellIcon = newRow.insertCell();
    const cell1 = newRow.insertCell();
    const cell2 = newRow.insertCell();
    const cell3 = newRow.insertCell();

    var img = document.createElement('img');
    img.src = "agenda.png";
    img.style.width = '25px'; 
    img.style.height = '25px';
    cellIcon.appendChild(img);
    

    // Set the text content of the new cells
    cell1.textContent = newBook;
    cell2.textContent = newAuthor;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList = "btn-outline-secondary btn-sm delete-button";
    deleteButton.addEventListener("click", deleteTask);

    // Add the delete button to the third cell
    cell3.appendChild(deleteButton);

    // Clear the input fields
    newBookInput.value = '';
    newAuthorInput.value = '';
}

// Delete task function
function deleteTask(e) {
    const clickedButton = e.target;
    const row = clickedButton.parentElement.parentElement; // Get the row
    row.remove(); // Remove the row from the table
}

// Add event listener to the "Add" button
const button = document.getElementById("Add-button");
button.addEventListener("click", clickHandler);
