'use strict';

let allStudents = [];
let getStorage = [];
let total = 0;
let firstRun = true;
let tableBody = document.getElementById('tbody');

function Student(email, mobile, tuition) {

    this.email = email;
    this.mobile = mobile;
    this.tuition = tuition;
    this.id = this.id();
    this.name = this.name();
    this.age = this.age();

    allStudents.push(this);
}

Student.prototype.id = function () {

    return (allStudents.length + 1);

};

Student.prototype.name = function () {

    let name = this.email.split('@', 1);
    return name[0];

};

Student.prototype.age = function () {

    return Math.floor(Math.random() * (24 - 18 + 1)) + 18;

};

let form = document.getElementById('form');
form.addEventListener('submit', submitter);

function submitter(event) {
    event.preventDefault();

    let emailValue = document.getElementById('email').value;
    let mobileValue = document.getElementById('mobile').value;
    let tuitionValue = document.getElementById('tuition').value;



    new Student(emailValue, mobileValue, tuitionValue);



    render();



}


function render() {

    if (firstRun) {
        getter();

        
        for (let i = 0; i < allStudents.length; i++) {

            let tableRow = document.createElement('tr');
            tableBody.appendChild(tableRow);

            let tableId = document.createElement('td');
            let tableName = document.createElement('td');
            let tableEmail = document.createElement('td');
            let tableMobile = document.createElement('td');
            let tableAge = document.createElement('td');
            let tableTuition = document.createElement('td');
            tableRow.appendChild(tableId);
            tableRow.appendChild(tableName);
            tableRow.appendChild(tableEmail);
            tableRow.appendChild(tableMobile);
            tableRow.appendChild(tableAge);
            tableRow.appendChild(tableTuition);
            tableId.textContent = allStudents[i].id;
            tableName.textContent = allStudents[i].name;
            tableEmail.textContent = allStudents[i].email;
            tableMobile.textContent = allStudents[i].mobile;
            tableAge.textContent = allStudents[i].age;
            tableTuition.textContent = allStudents[i].tuition;
            


        }
        console.log('inside render');
        console.log(allStudents);






    }




}

function setter() {

    window.localStorage.clear('students');

    let storage = JSON.stringify(allStudents);
    window.localStorage.setItem('students', storage);

}

function getter() {

    getStorage = JSON.parse(window.localStorage.getItem('students'));
    
    if(getStorage){

        for (let i = 0; i < getStorage.length; i++) {
            allStudents[i] = getStorage [i];
            
        }

    }
    


}

render();








