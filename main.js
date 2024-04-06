


//not ready ALERT
function notReady() {
    alert("This Page Not Ready!!");
  }


//Kalkulator
var inputLabel = document.getElementById('inputLabel');

function pushBtn(obj) {
    var pushed = obj.innerHTML;

    if (pushed == "=") {
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
    }
    else if (pushed == "AC") {
        inputLabel.innerHTML = "0";
    }
    else {
        if (inputLabel.innerHTML == "0") {
            inputLabel.innerHTML = pushed;
        }
        else {
            inputLabel.innerHTML += pushed;
        }
    }
}

    
//Whatsap Lock
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