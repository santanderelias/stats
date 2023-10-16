//set active page state
let active = "additem";
//function => onclick => hide active => show clicked => set clicked active

//#engine #vars
const elemSubtlFecha = document.getElementById('elemSubtlFecha');
const database = [];
let inputMonto = document.getElementById('inputMonto').value;
let inputTipo = document.getElementById('inputTipo').value;
let inputDetalle = document.getElementById('inputDetalle').value;
let inputCash = document.getElementById('inputCash').value;
let numberofitems = 0;
//at start inputs are loaded empty

/* Fecha	12/10/2023
Inicio	1
Cierre	31
Dias Restantes para el cierre	20
Gasto Total	 $0,00
Ingreso Total	 $0,00
Capital Actual	 $0,00
Maximo diario	 $0,00
Ultimo valor dolar	 $1.010,00
Fuente	https://dolarhoy.com/i/cotizaciones/dolar-b */
//#engine #vars

function onLoad() {
    console.log(elemSubtlFecha.innerText)
    console.log('Loaded.')
    elemSubtlFecha.innerText = 'Loaded: ' + new Date()
    //load events at start
    //in mobile we need to focus next input manually after picking an option
    document.getElementById('inputTipo').addEventListener('change',function(){
        if (inputTipo = 'Gasto') {
            document.getElementById('inputDetalle').focus()
        }
        else if (inputTipo = 'Ingreso'){
            document.getElementById('inputDetalle').focus()
        }
    });
    //end of events
    document.getElementById('inputMonto').value = '700';
    document.getElementById('inputTipo').value = 'Gasto';
    document.getElementById('inputDetalle').value = 'Gito';
    document.getElementById('inputCash').value = 'Efectivo';
    document.getElementById('inputMonto').focus();
    addItemStart()
    statsDisplay()
    //document.getElementById('inputMonto').focus();
};
onLoad();

function addItemStart() {
    //update input vars, save, then clear and focus (may be)
    let inputMonto = document.getElementById('inputMonto').value;
    let inputTipo = document.getElementById('inputTipo').value;
    let inputDetalle = document.getElementById('inputDetalle').value;
    let inputCash = document.getElementById('inputCash').value;
    database.push({monto: inputMonto, tipo: inputTipo, detalle: inputDetalle, cash: inputCash});
    numberofitems += 1;
    var row = document.getElementById('logTable').insertRow(0);
    var celcinc = document.createElement("th");
    var celuno = document.createElement("td");
    var celdos = document.createElement("td");
    var celtres = document.createElement("td");
    var celcuat = document.createElement("td");
    celcinc.innerHTML = numberofitems
  /*  row.classList.add('table');
    row.classList.add('table-dark'); */
    celuno.innerHTML = inputMonto
    celdos.innerHTML = inputTipo
    celtres.innerHTML = inputDetalle
    celcuat.innerHTML = inputCash
    row.appendChild(celcinc)
    row.appendChild(celuno)
    row.appendChild(celdos)
    row.appendChild(celtres)
    row.appendChild(celcuat)
    document.getElementById('inputMonto').value = '700';
    document.getElementById('inputTipo').value = 'Gasto';
    document.getElementById('inputDetalle').value = 'Gito';
    document.getElementById('inputCash').value = 'Efectivo';
};
function verDetalles() {
    console.log('it works')
}


var montoTotal = 0;
function statsDisplay() {
    for (var i = 0; i < 3; i++) {
        montoTotal = montoTotal + database[i]
        console.log('monto total: ' + montoTotal)
        }
    //update input vars, save, then clear and focus (may be)
    var row = document.getElementById('statsTable');
    row.innerHTML = '';
    var celuno = document.createElement("th");
    var celdos = document.createElement("td");
    var celtres = document.createElement("td");
    var celcuatro = document.createElement("td");
//    var celcinco = document.createElement("td");
     celuno.innerHTML = numberofitems
    celdos.innerHTML = 'totalGasto'
    // celtres.innerHTML = totalIngreso
    // celcuatro.innerHTML = Captl
    // celcinco.innerHTML = ? cierre ?
    row.appendChild(celuno)
     row.appendChild(celdos)
    // row.appendChild(celtres)
    // row.appendChild(celcuatro)
 //   row.appendChild(celcinco)
}

setTimeout(function(){
    console.log('10s to reload')
    window.location.reload();
 }, 10000);
//menus can wait
//addevent to mobmenu so when you click to nav to where you are now it shows a notif saying "you're already here" and fade asap 

//events
