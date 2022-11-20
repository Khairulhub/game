let rows = 8;
let col = 8;
let status = true;

let table = document.getElementById('table-box');
let arr = [];
for (let i = 0; i < rows; i++) {
    
        let tr = document.createElement('tr');
    
        for (let j = 0; j < col; j++) {
    
            let td = document.createElement('td');
            td.innerHTML= `<input class="inputvalue" maxlength="1" id="inputvalue${i}${j}" onClick="e=>findword(e)" type="text">`;
            console.log(typeof(td.innerHTML));
            // if(status == false){
            //     td.style.backgroundColor = 'black';
            // }
            // else{
            //     td.style.backgroundColor = 'red';
            //     status = false;
            // }
            
            tr.appendChild(td);
            // let value = document.querySelectorAll('inputvalue');
           
        }
    
        table.appendChild(tr);
    
}


const findword = (e) => {
console.log(e.target.value);

}






















// for (let i = 0; i < 8; i++) {
//     let td = document.createElement('td');
//     td.innerHTML= `<input class="inputvalue" maxlength="1" id="inputvalue$" onchange="wordGame(1)" type="text">`;
//     table.appendChild(td);   
// }


/* ==================================================
             player 1 and player 2
========================================================*/
const p1text= document.getElementsByClassName('player1')
const span1 =document.createElement('span');
span1.innerText = "Player 1";
p1text[0].appendChild(span1);


const p2text= document.getElementsByClassName('player2')
const span =document.createElement('span');
span.innerText = "Player 2";
p2text[0].appendChild(span);





























// ========================>  for dont work to go to back or cut the word
//===> https://stackoverflow.com/questions/664631/disable-backspace-and-delete-key-with-javascript-in-ie

window.onkeydown = function (event) {

    if (event.which == 8) { 

         event.preventDefault();   // turn off browser transition to the previous page 

                 // put here code you need 

        }; 

};