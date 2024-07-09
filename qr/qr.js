function qrgenerate(){
    var text=document.getElementById("qrcode").value;
    var qrurl='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+encodeURIComponent(text);
    document.getElementById('qrimage').src=qrurl;
}