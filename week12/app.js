const API_URL = import.meta.env.VITE_API_URL;

// DOM Elements
const table = document.querySelector('.plan table');
const dialog = document.querySelector('.ecors-dialog');

// Prevent dialog from closing via ESC key
dialog.addEventListener('cancel', (event) => {
  event.preventDefault();
});

async function fetchStudyPlans() {
  try {
    const response = await fetch(`${API_URL}/study-plans`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    data.sort((a, b) => a.id - b.id);

    populateTable(data);
  } catch (error) {
    console.error('Error fetching study plans:', error);
    showErrorDialog();
  }
}

function populateTable(plans) {

  plans.forEach(plan => {
    const row = document.createElement('tr');
    row.classList.add('ecors-row');

    const idCell = document.createElement('td');
    idCell.textContent = plan.id;
    idCell.classList.add('ecors-id');
    row.appendChild(idCell);

    const codeCell = document.createElement('td');
    codeCell.textContent = plan.planCode;
    codeCell.classList.add('ecors-planCode');
    row.appendChild(codeCell);

    const nameEngCell = document.createElement('td');
    nameEngCell.textContent = plan.nameEng;
    nameEngCell.classList.add('ecors-nameEng');
    row.appendChild(nameEngCell);

    const nameThCell = document.createElement('td');
    nameThCell.textContent = plan.nameTh;
    nameThCell.classList.add('ecors-nameTh');
    row.appendChild(nameThCell);

    table.appendChild(row);
  });
}

function showErrorDialog(message = "There is a problem. Please try again later.") {
  if (dialog) {
    const messageElement = dialog.querySelector('.ecors-dialog-message');
    if (messageElement) {
      messageElement.textContent = message;
    }
    dialog.showModal();
  }
}

fetchStudyPlans();