

    // <tr class="riga">
    //         <th class="listaElementi">Num</th>
    //         <td>ciao</td>
    //         <td>ciao</td>
    //         <td>ciao</td>
            
    //       </tr>

let bottone = document.getElementById('btn');
let nomeChitarra = document.getElementById('guitarName')
let prezzoChitarra = document.getElementById('guitarPrice');
let coloreChitarra = document.getElementById('colorSelect');
let corpoInfo = document.querySelector('.corpoInfo');



bottone.addEventListener('click', funzione);



function funzione(e){
    e.preventDefault();

    if (nomeChitarra.value === '' && prezzoChitarra.value=== ''){
        nomeChitarra.classList.add('error_label')
        prezzoChitarra.classList.add('error_label')
    }
    else{
    const rigaGuitar = document.createElement('tr')
    const valNull=document.createElement('th')
    const elmGuitar=document.createElement('td')
    const elmPrice=document.createElement('td');
    const elmColor= document.createElement('td');

    elmGuitar.textContent=nomeChitarra.value;
    elmPrice.textContent=prezzoChitarra.value;
    elmColor.textContent=coloreChitarra.value;
    valNull.textContent=''

    rigaGuitar.appendChild(valNull);
    rigaGuitar.appendChild(elmGuitar);
    rigaGuitar.appendChild(elmPrice);
    rigaGuitar.appendChild(elmColor);

    corpoInfo.appendChild(rigaGuitar);
    
    }

 }
   


