let kaverit = [];

document.getElementById('lisaa').onclick = function() {
    let nimi = document.getElementById('nimi').value;
    if (nimi) {
        kaverit.push(nimi);
        document.getElementById('nimi').value = '';
        document.getElementById('laskuri').textContent = kaverit.length + "/10 kaveria";
        
        if (kaverit.length == 10) {
            document.getElementById('lomake').style.display = "none";
            document.getElementById('tulos').style.display = "block";
            
            let lista = document.getElementById('lista');
            lista.innerHTML = '';
            
            for (let i = 0; i < kaverit.length; i++) {
                let li = document.createElement('li');
                li.textContent = kaverit[i];
                lista.appendChild(li);
            }
        }
    }
};

document.getElementById('aloitaAlusta').onclick = function() {
    kaverit = [];
    document.getElementById('laskuri').textContent = "0/10 kaveria";
    document.getElementById('lomake').style.display = "block";
    document.getElementById('tulos').style.display = "none";
};