function yorumEkle() {
    var yorumInput = document.getElementById("yorumInput").value;
    var yorumListesi = document.getElementById("yorumListesi");
    var yeniYorum = document.createElement("li");
    yeniYorum.textContent = yorumInput;
    yorumListesi.appendChild(yeniYorum);
    document.getElementById("yorumInput").value = ""; 
}

var kullanicilar = {};

function uye(ad, sifre) {
    if (!kullanicilar[ad]) {
        kullanicilar[ad] = sifre;
        alert("Üyelik başarıyla oluşturuldu!");
    } else {
        alert("Bu kullanıcı adı zaten mevcut.");
    }
}
function giris(event) {
    event.preventDefault();
    var ad = document.querySelector("input[name='mail']").value;
    var sifre = document.querySelector("input[name='sifre']").value;
    
    if (kullanicilar[ad] && kullanicilar[ad] === sifre) {
        alert("Giriş başarılı, hoş geldin " + ad);
    } else {
        alert("Kullanıcı adı veya şifre hatalı!");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", giris);
});
