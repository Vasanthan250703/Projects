function genpass() {
    var pwlen = 8;
    var ch = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_";
    var uc = "QWERTYUIOPASDFGHJKLZXCVBNM";
    var lc = "qwertyuiopasdfghjklzxcvbnm";
    var spl = "!@#$%^&*()_";
    var num = "1234567890";
    var pwd = "";
    pwd += uc.charAt(Math.floor(Math.random() * uc.length));
    pwd += lc.charAt(Math.floor(Math.random() * lc.length));
    pwd += spl.charAt(Math.floor(Math.random() * spl.length));
    pwd += num.charAt(Math.floor(Math.random() * num.length));

    for (var i = 4; i < pwlen; i++) {
        pwd += ch.charAt(Math.floor(Math.random() * ch.length));
    }
    var pwdarr = pwd.split('');
    for (var i = pwdarr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = pwdarr[i];
        pwdarr[i] = pwdarr[j];
        pwdarr[j] = temp;
    }
    pwd = pwdarr.join('');
    document.getElementById("pass").value = pwd;
}