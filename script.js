function openPay(judul,harga){
    document.getElementById('mJudul').innerText = judul;
    document.getElementById('mHarga').innerText = "Total: Rp " + harga.toLocaleString('id-ID');
    document.getElementById('mQris').src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=FARELFLIX-"+judul+"-"+harga;
    document.getElementById('payModal').style.display = "flex";
}
function closePay(){ document.getElementById('payModal').style.display="none"; }
function confirmPay(){ alert("Pembayaran "+document.getElementById('mJudul').innerText+" BERHASIL!"); closePay(); }