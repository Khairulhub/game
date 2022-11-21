let rows = 8;
let col = 8;
let game_status = true;


let array1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let array2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


let player1 = array1;
let player2 = array2;


let player1Array = [];
let player2Array = [];


let table = document.getElementById('table-box');
var arr = [[],[],[],[],[],[],[],[]];
// String[][] arr = new String[rows][col];



// ================================>function to create the table
for (let i = 0; i < rows; i++) {

        let tr = document.createElement('tr');
        for (let j = 0; j < col; j++) {
                let td = document.createElement('td');
                td.innerHTML = `<input class="inputvalue" maxlength="1" id="inputvalue${i}${j}"  type="text">`;
                tr.appendChild(td);
        }
        table.appendChild(tr);

}

// ================================>function to create the table

table.addEventListener("keypress", function (e) {
    console.log(e.key);
    let value = e.key;
    // let id = e.target.id;
  
    
    // console.log(arr.length);
//    console.log(e.target.id);
        if (document.getElementById(e.target.id).value != '') {
                return
        }
        document.getElementById(e.target.id).style.color = game_status ? "black" : "red"
        if (game_status) {
                game_status = false


                let newArray2 = player2.indexOf(value);
                if(newArray2 > -1){
                     player2.splice(newArray2, 1);
                     console.log(player2);
                 }
                     for(let i = 0; i< 1 ; i++){
                       player2Array.push(value);
                    }
                    console.log('player2',player2Array);
        
                    // if((player2.lenght==26) && (player2Array.lenght==26)){
                    //           word.disabled = true;
                    //      }

        } 
        else {
                game_status = true

                 //person1============> by using number

                    let newArray1 = player1.indexOf(value);
                    if(newArray1 > -1){
                     player1.splice(newArray1, 1);
                         console.log(player1);
                    }
        
                    for(let i = 0; i< 1 ; i++){
                         player1Array.push(value);
                         }
                        console.log('player1',player1Array);
        }




        for (let i = 0; i < arr.length; i++) {
            arr[i]=[];
            // console.log(arr.length);
            for (let j = 0; j < arr.length; j++) {
               
               if(document.getElementById(`inputvalue${i}${j}`).value != ''){
                         arr[i].push(document.getElementById(`inputvalue${i}${j}`).value);

               

                        //  array = document.getElementById(e.target.id) != '' ? value : '';
                          // arr[i][j] = array;
                         console.log(arr[i][j]);
                }
                else{
                        arr[i].push('');
                }
                // console.log(arr[i]);
            }
            // console.log(array);


        //   arr.push(array);
            console.log(arr);
            console.log(arr.length);
        }






            // while ( arr.length > 2 ) {
            //     // Get a word out of the existing letters
            //      let text = arr.join("");
             
            //     console.log(text);
            //     // And see if it's in the dictionary
            //     // if ( dict[ text ] ) {
            //     //     // If it is, return that word
            //     //     return text;
            //     // }
         
            //     // // Otherwise remove another letter from the end
            //     // curLetters.pop();
            // }
})


























/* ==================================================
             player 1 and player 2
========================================================*/
const p1text= document.getElementsByClassName('player1')
const span1 =document.createElement('span');
span1.innerText = "Player 1", `${arr} `;
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