let kaverit = [];

function paivitaLista() {
    let lista = document.getElementById('lista2');
    lista.innerHTML = '';
    
    if (kaverit.length == 0) {
        document.getElementById('tyhjaViesti').style.display = "block";
    } else {
        document.getElementById('tyhjaViesti').style.display = "none";
        
        for (let i = 0; i < kaverit.length; i++) {
            let li = document.createElement('li');
            li.textContent = kaverit[i] + " ";
            
            let poistoNappi = document.createElement('button');
            poistoNappi.textContent = "Poista";
            poistoNappi.onclick = function() {
                kaverit.splice(i, 1);
                paivitaLista();
            };
            
            li.appendChild(poistoNappi);
            lista.appendChild(li);
        }
    }
}

document.getElementById('lisaaNappi').onclick = function() {
    let nimi = document.getElementById('nimi2').value;
    if (nimi) {
        kaverit.push(nimi);
        document.getElementById('nimi2').value = '';
        paivitaLista();
    }
};

document.getElementById('jarjestaAZ').onclick = function() {
    kaverit.sort();
    paivitaLista();
};

document.getElementById('jarjestaZA').onclick = function() {
    kaverit.sort();
    kaverit.reverse();
    paivitaLista();
};

document.getElementById('tyhjenna').onclick = function() {
    if (confirm('Haluatko tyhjentää listan?')) {
        kaverit = [];
        paivitaLista();
    }
};

paivitaLista();