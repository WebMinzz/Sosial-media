


//not ready ALERT
function notReady() {
    alert("This Page Not Ready!!");
  }


    
//Whatsap Lock
function redirectToWhatsApp() {
    var password = prompt("Ketik 0:");
    if (password === "0") {
        var phoneNumber = "6288294992685"; // Ganti dengan nomor tujuan Anda
        var message = "Hi!!"; // Pesan default
        var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.location.href = whatsappUrl;
    } else {
        alert("Akses Ditolak!!");
    }
}