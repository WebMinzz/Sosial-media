


function redirectToWhatsApp() {
    var password = prompt("Masukan Kunci:");
    if (password === "password123") {
        var phoneNumber = "6288294992685"; // Ganti dengan nomor tujuan Anda
        var message = "P in Aja Bang"; // Pesan default
        var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.location.href = whatsappUrl;
    } else {
        alert("Akses Ditolak!!");
    }
}