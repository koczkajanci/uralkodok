let array = [
    {
        uralkodo_nev : "I. István",
        esemeny1 : "Koronázás",
        esemeny2 : "Pannonhalmi apátság megalapítása",
        evszam1 : "1000",
        evszam2 : "1001"
    },
    {
        uralkodo_nev : "IV. Béla",
        esemeny1 : "tatárjárás",
        evszam1 : "1241-1242"
    },
    {
        uralkodo_nev : "Mátyás király",
        esemeny1 : "Bécs elfoglalása",
        esemeny2 : "Kenyérmezei csata",
        evszam1 : "1485",
        evszam2 : "1479"
    },
    {
        uralkodo_nev : "II. Rákóczi Ferenc",
        esemeny1 : "A szabadságharc kezdete",
        esemeny2 : "A szabadságharc vége",
        evszam1 : "1703",
        evszam2 : "1711"
    }
];

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');
thead.appendChild(tr);

const tbody = document.createElement('tbody');
table.appendChild(tbody)

const uralkodo_nev = document.createElement('th')
uralkodo_nev.innerHTML = "Uralkodo"
tr.appendChild(uralkodo_nev);

const esemeny = document.createElement('th')
esemeny.innerHTML = "Esemeny"
tr.appendChild(esemeny)

const evszam = document.createElement('th');
evszam.innerHTML = "Evszam"
tr.appendChild(evszam)

render();

const form = document.getElementById("form")

form.addEventListener('submit', function(e){
    const uralkodo_nev = document.getElementById("uralkodo_nev")
    const esemeny1 = document.getElementById("esemeny1")
    const esemeny2 = document.getElementById("esemeny2")
    const evszam1 = document.getElementById("evszam1")
    const evszam2 = document.getElementById("evszam2")

    const uralkodo_nevvalue = uralkodo_nev.value
    const esemeny1value = esemeny1.value
    const esemeny2value = esemeny2.value
    const evszam1value = evszam1.value
    const evszam2value = evszam2.value


    e.preventDefault()
    if(validateFields1(uralkodo_nevvalue,esemeny1value,evszam1value) && validateFields2(esemeny2value,evszam2value ) ){
       
            const new_persons = {
                uralkodo_nev: uralkodo_nevvalue,
                esemeny1: esemeny1value,
                esemeny2: esemeny2value,
                evszam1: evszam1value,
                evszam2: evszam2value
            }

            array.push(new_persons)
            render(array);
            form.reset()
        
    }


    
    
})

function render(){
    let tablebody = tbody
    tbody.innerHTML = ''

    for(kutya of array){
        let row = document.createElement('tr')

        const uralkodo_nev = document.createElement('td')
        uralkodo_nev.innerHTML = kutya.uralkodo_nev
        uralkodo_nev.rowSpan = kutya.esemeny2 ? 2:1
        row.appendChild(uralkodo_nev)

        const esemeny1 = document.createElement('td')
        esemeny1.innerHTML = kutya.esemeny1;
        row.appendChild(esemeny1)

        const evszam1 = document.createElement('td')
        evszam1.innerHTML = kutya.evszam1
        row.appendChild(evszam1)

        tablebody.appendChild(row);

        if(kutya.esemeny2 && kutya.evszam2){
            const sor = document.createElement('tr')

            const esemeny2 = document.createElement('td')
            esemeny2.innerHTML = kutya.esemeny2
            sor.appendChild(esemeny2)

            const evszam2 = document.createElement('td')
            evszam2.innerHTML = kutya.evszam2
            sor.appendChild(evszam2)

            tablebody.appendChild(sor)

        }
    }
}

function validateFields1(uralkodo_nev, esemeny1, evszam1){
    let result = true

    document.getElementById("uralkodo_neverror").innerHTML = '';
    document.getElementById("esemeny1error").innerHTML = '';
    document.getElementById("evszam1error").innerHTML = '';

    if(uralkodo_nev == ''){
        const uralkodo_neverror = document.getElementById("uralkodo_neverror")
        uralkodo_neverror.innerHTML = "error"

        result =false
    }

    if(esemeny1 == ''){
        const esemeny1error = document.getElementById("esemeny1error")
        esemeny1error.innerHTML = "error"

        result = false
    }

    if(evszam1 == ''){
        const evszam1error = document.getElementById("evszam1error")
        evszam1error.innerHTML = "error"

        result =false
    }

    return result

    
}

function validateFields2(esemeny2, evszam2){
    let result2 = true
    document.getElementById("esemeny2error").innerHTML = '';
    document.getElementById("evszam2error").innerHTML = '';

    if(esemeny2 == '' || evszam2 == ''){
        if(esemeny2 == '' && evszam2 !== ''){
            const esemeny2error = document.getElementById("esemeny2error")
            esemeny2error.innerHTML = "error"
    
            result2 = false
        }

        if(evszam2 == '' && esemeny2 !== ''){
            const evszam2error = document.getElementById("evszam2error")
            evszam2error.innerHTML = "error"
    
            result2 =false
        }




    }

    return result2
    

}




