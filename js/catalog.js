usersRef.on("child_added", function (data) {
      

      const dataProd = data.val();
  
      const row = table.insertRow(table.rows.length);
  
      const td1 = row.insertCell(0);
      const td2 = row.insertCell(1);
      const td3 = row.insertCell(2);
      const td4 = row.insertCell(3);
      const td5 = row.insertCell(4);
      const td6 = row.insertCell(5);
      const td7 = row.insertCell(6);
  
      td1.innerHTML = ++nomorUrut;
      td2.innerHTML = dataProd.prod_id;
      td3.innerHTML = dataProd.prod_name;
      td4.innerHTML = dataProd.prod_image;
      td5.innerHTML = dataProd.prod_price;
      td6.innerHTML = dataProd.prod_type;
      td7.innerHTML = dataProd.prod_stock;
  });
  