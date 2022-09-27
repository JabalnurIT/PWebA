function regist() {
    var nama_gelar = document.getElementById("nama_gelar").value;
    var instansi_kota = document.getElementById("instansi_kota").value;
    var alamat = document.getElementById("alamat").value;
    var kode_pos = document.getElementById("kode_pos").value;
    var provinsi = document.getElementById("provinsi").value;
    var no_telp = document.getElementById("no_telp").value;
    var email = document.getElementById("email").value;
    var nama_perusahaan_sponsor = document.getElementById("nama_perusahaan_sponsor").value;
    var alamat_perusahaan_sponsor = document.getElementById("alamat_perusahaan_sponsor").value;
    var nama_personal_sponsor = document.getElementById("nama_personal_sponsor").value;
    var telp_personal_sponsor = document.getElementById("telp_personal_sponsor").value;
    var email_perusahaan_sponsor = document.getElementById("email_perusahaan_sponsor").value;
    
    // Code for password validation
    var letters = /^[A-Za-z]+$/;
    var email_val =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // other validation required code
    if (nama_gelar == "" || instansi_kota == "" || alamat == "" || kode_pos == "" || provinsi == "" || no_telp == "" || email == "" || nama_perusahaan_sponsor == "" || alamat_perusahaan_sponsor == "" || nama_personal_sponsor == "" || telp_personal_sponsor == "" || email_perusahaan_sponsor == "") {
      alert("Enter each details correctly");
    } else if (!letters.test(nama_gelar) || !letters.test(nama_personal_sponsor)) {
      alert("Name is incorrect must contains alphabets only");
    } else if (!email_val.test(email) || !email_val.test(email_perusahaan_sponsor)) {
      alert("Invalid email format please enter valid email id");
    }  else {
      alert(
        "Anda Berhasil Mendaftar"
      );
    }
  }