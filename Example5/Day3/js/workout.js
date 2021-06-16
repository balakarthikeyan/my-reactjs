const objValues = [
    { "name": "bala", "company" : "Unimoni", "exp" : "7+"},
    { "name": "ram", "company" : "Hexware", "exp" : "6+"},
    { "name": "vivek", "company" : "adlabs", "exp" : "8+"}
];

const loadDetails = () => {
    let html ="";
       
    objValues.forEach((row, index)=>{
        html += '<div class="border">';
        html += `<div class="right"> <button onclick="fetchEmployee(${index})">Update</button><button onclick="deleteEmployee(${index})">Delete</button></div>`;
        html += `<h4> ${row.name} </h4>
                <p> ${row.company} </p>
                <p> ${row.exp} </p>`;
        html +="</div>";
    })
    
    document.getElementById('result').innerHTML  = html 
    //return html;
}

const addEmployee = (e) => {
    e.preventDefault();
    let empname = document.getElementById('emp_name').value;
    let empcompany = document.getElementById('emp_comp').value;
    let empexp = document.getElementById('emp_exp').value;

    let newData = {
        name: empname,
        company: empcompany,
        exp: empexp
    }
    objValues.push(newData);
}

const fetchEmployee = (i) => {
    data = objValues[i];
    console.log(data);
    document.getElementById('emp_name').value = data.name;
    document.getElementById('emp_comp').value = data.company;
    document.getElementById('emp_exp').value = data.exp;
    document.getElementById('emp_index').value = i;
    document.getElementById("frmEmployee").removeEventListener("submit", addEmployee); 
    document.getElementById('frmEmployee').addEventListener("submit", updateEmployee);
}

const clearEmployee = () => {
    document.getElementById('emp_name').value = "";
    document.getElementById('emp_comp').value = "";
    document.getElementById('emp_exp').value = "";
    document.getElementById('emp_index').value = "";
    document.getElementById('frmEmployee').addEventListener("submit", addEmployee);
}

const updateEmployee = (e) => {
    e.preventDefault();
    let empname = document.getElementById('emp_name').value;
    let empcompany = document.getElementById('emp_comp').value;
    let empexp = document.getElementById('emp_exp').value;
    let emp_index = document.getElementById('emp_index').value;

    objValues[emp_index] = {
        name: empname,
        company: empcompany,
        exp: empexp
    }
    clearEmployee();
    loadDetails();
}

const deleteEmployee = (i) => {
    objValues.splice(i, 1);
    loadDetails();
}


