const empId = document.getElementById('empId');
const empName = document.getElementById('empName');
const role = document.getElementById('role');
const address = document.getElementById('address');
const noPhone = document.getElementById('noPhone');

const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');
const clearBtn = document.getElementById('clearBtn');
const table = document.getElementById("tabel-data").getElementsByTagName('tbody')[0];

function func(){
    var kode = new Date().getTime().toString();

    console.log(kode);  
    document.getElementById("empId").value = "emp-" + kode;
}

var nomorUrut = 0;

const database = firebase.database(); //instance database
const db = firebase.firestore();

const empsRef = database.ref('/employee'); //dibikin wadah


// --------------Create Data-------------- //

addBtn.addEventListener('click', e => {
    empsRef.child(empId.value).set({
        emp_id : empId.value,
        emp_name: empName.value,
        emp_role : role.value,
        emp_address: address.value,
        emp_nophone: noPhone.value,
    });
    alert("DATA BERHASIL DITAMBAH");
});


// --------------Update Data-------------- //

updateBtn.addEventListener('click', e => {
    const newData = {
      emp_id : empId.value,
      emp_name: empName.value,
      emp_role : role.value,
      emp_address: address.value,
      emp_nophone: noPhone.value,
    };
    empsRef.child(empId.value).update(newData)
    location.reload();
    alert("DATA BERHASIL DIUPDATE");
});



// --------------Delete Data-------------- //

removeBtn.addEventListener('click', e => {
    empsRef.child(empId.value).remove()
    .then(() => {
        location.reload();
    })
    .catch(error => {
        console.error();
    });
    alert("DATA BERHASIL DIHAPUS");         
});


// Sumber : https://yopiardinal.wordpress.com/2018/12/04/membaca-data-firebase-dan-menampilkannya-dalam-bentuk-tabel-menggunakan-javascript/
// Referensi Tabel


// --------------Get & Read Data-------------- //

var nomorBaris = "PROD/" +"00000"+ ++nomorUrut;

empsRef.on("child_added", function (data) {
      

    const dataEmp = data.val();

    const row = table.insertRow(table.rows.length);

    const td1 = row.insertCell(0);
    const td2 = row.insertCell(1);
    const td3 = row.insertCell(2);
    const td4 = row.insertCell(3);
    const td5 = row.insertCell(4);
    const td6 = row.insertCell(5);

    td1.innerHTML = ++nomorUrut;
    td2.innerHTML = dataEmp.emp_id;
    td3.innerHTML = dataEmp.emp_name;
    td4.innerHTML = dataEmp.emp_role;
    td5.innerHTML = dataEmp.emp_address;
    td6.innerHTML = dataEmp.emp_nophone;
});


