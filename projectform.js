// Create form
var form = document.createElement('form');

// Create form inputs
var inputName = document.createElement('input');
inputName.type = 'text';
inputName.name = 'userName';
inputName.placeholder = 'Name';

var inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.name = 'userEmail';
inputEmail.placeholder = 'Email';

var inputStaffno = document.createElement('input');
inputStaffno.type = 'text';
inputStaffno.name = 'userStaffno';
inputStaffno.placeholder = 'Staffno';

var inputLmname = document.createElement('input');
inputLmname.type = 'text';
inputLmname.name = 'userLmname';
inputLmname.placeholder = 'Line manager name';

var inputDepartment = document.createElement('input');
inputDepartment.type = 'text';
inputDepartment.name = 'userDepartment';
inputDepartment.placeholder = 'Department';

// Create supporting paragraph


// Create clear button
var buttonClear = document.createElement('userName').value = "";
buttonClear.type = 'clear';
buttonClear.value = 'Clear';

// Create submit button
var buttonSubmit = document.createElement('input');
buttonSubmit.type = 'submit';
buttonSubmit.value = 'Submit';

// Add elements to form
form.appendChild(inputName);
form.appendChild(inputEmail);
form.appendChild(inputStaffno);
form.appendChild(inputLmname);
form.appendChild(inputDepartment);
form.appendChild(buttonClear);
form.appendChild(buttonSubmit);

// Append form to the DOM
document.body.appendChild(form);