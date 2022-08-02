DIMULAI DARI INDEX.HTML

⚠️Hak Akses
      🔅Owner
            -Dapat CRUD product
            -Dapat CRUD employee
            -Hanya owner yang dapat menambahkan admin!!!!
      🔅Admin
            -Dapat CRUD product
            -Dapat CRUD employee
      🔅Customer
            - Hanya dapat melihat catalog

🔏Metode Login
      🔸Masuk menggunakan akun owner dari awal menggunakan
            email : owner@gmail.com
            pass  : 123456
            - akan langsung masuk ke "dashboardOwner.html / dashboardOwner.jsp" dengan segala hak Akses
      🔸Masuk menggunakan akun admin
            email : sesuai yang sudah didaftarkan owner sebelumnya
            pass  : sesuai yang sudah didaftarkan owner sebelumnya
            - akan masuk ke "dashboardAdmin.html / dashboardAdmin.jsp"

🚩Metode SignOut
      Semua LogOut akan langsung diarahkan ke "index.html / index.jsp"

📦Product
      💠Add
            - untuk menghindari key yang sama pada ID, maka dibuatkan button generate code, 
              jadi setiap barang akan memiliki ID yang berbeda
      💠Edit
            - untuk mengedit data maka klik button EDIT, disana kalian dapat melakukan UPDATE dan DELETE
            - EDIT dan DELETE dapat dilakukan dengan cara memasukkan ID Product
      💠CLEAR
            - untuk menghapus semua isi form sebelum di add jika terjadi kesalahan dan untuk merefresh halaman web
