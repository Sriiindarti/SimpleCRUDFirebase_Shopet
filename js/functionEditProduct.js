const prodId = document.getElementById('prodId');
const prodName = document.getElementById('prodName');
// const image = document.getElementById('image');
const price = document.getElementById('price');
const type = document.getElementById('type');
const stock = document.getElementById('stock');

const editBtn = document.getElementById('editBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');
const clearBtn = document.getElementById('clearBtn');
const table = document.getElementById("tabel-data").getElementsByTagName('tbody')[0];

function func(){
    var kode = new Date().getTime().toString();

    console.log(kode);  
    document.getElementById("prodId").value = "prod-" + kode;
}

var nomorUrut = 0;

const database = firebase.database(); //instance database
const db = firebase.firestore();

const usersRef = database.ref('/products'); //dibikin wadah



// --------------Update Data-------------- //

updateBtn.addEventListener('click', e => {
    const newData = {
        prod_id: prodId.value,
        prod_name: prodName.value,
        // prod_image : image.value,
        prod_price: price.value,
        prod_type: type.value,
        prod_stock: stock.value
    };
    usersRef.child(prodId.value).update(newData)
    location.reload();
    alert("DATA BERHASIL DIUPDATE");
});



// --------------Delete Data-------------- //

removeBtn.addEventListener('click', e => {
    usersRef.child(prodId.value).remove()
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

usersRef.on("child_added", function (data) {
      

    const dataProd = data.val();

    const row = table.insertRow(table.rows.length);

    const td1 = row.insertCell(0);
    const td2 = row.insertCell(1);
    const td3 = row.insertCell(2);
    const td4 = row.insertCell(3);
    const td5 = row.insertCell(4);
    const td6 = row.insertCell(5);

    td1.innerHTML = ++nomorUrut;
    td2.innerHTML = dataProd.prod_id;
    td3.innerHTML = dataProd.prod_name;
    td4.innerHTML = dataProd.prod_price;
    td5.innerHTML = dataProd.prod_type;
    td6.innerHTML = dataProd.prod_stock;
});
