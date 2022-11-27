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


// const url = ''
// fetch(url).then( res => res.json()).then( data => data )
// console.log( arr.length)
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

// ================================>function to create the table and take vale from input

table.addEventListener("click", function (e) {
//     console.log(e);
    let value = e.key;
    let id = e.target.id;

  
    
    // console.log(arr.length);
//    console.log(e.target.id);
        if (document.getElementById(e.target.id).value != '') {
                return;
        }
        document.getElementById(e.target.id).style.color = game_status ? "black" : "red"
        if (game_status) {
                game_status = false;

                for (let i = 0; i < arr.length; i++) {
  
                        for (let j = 0; j < arr.length; j++) {
                              arr[i].forEach((value)=>{
                                        if(!player1Array.includes(value) == player1.includes(value)){
                                                player1Array.push(value);
                                                // if(player1Array.includes(value) == player1.includes(value)){
                                                //         // arr[i][j]=document.getElementById(e.target.id).value =='';
                                                //         player1Array.pop(value);
                                                //         console.log(player1Array);
                                                //         // console.log(arr[i][j]);
                                                // //        arr[i].splice(arr[i].iOf(value),1);
                                                // // console.log(); 
                                                // // console.log(e.key);
                                                // }
                                        } 

                                })
                                // console.log(arr[i].indexOf(value));
                        } 
                    }
                        console.log('value player1 ',player1Array); 
                        console.log('value length',player1Array.length); 

                

        } 
        else {
                game_status = true

              for (let i = 0; i < arr.length; i++) {
  
                for (let j = 0; j < arr.length; j++) {
                        arr[i].forEach((value)=>{
                                  if(!player2Array.includes(value) ==player2.includes(value)){
                                          player2Array.push(value);
                                        } 
                                        else if(player2Array?.includes(value) === value){

                                              //        arr[i].splice(arr[i].iOf(value),1);
                                              console.log(' you have already entered this value'); 
                                              }
                                //   else{
                                //         player2Array.push('');
                                //   } 
                                //   if(player2Array.length > player2.length){
                                //           alert('player2 win');
                                //   }
                          })
                  } 
              }
                  console.log('value player2 ',player2Array); 
                  console.log('value length',player2Array.length); 
                  console.log('value length',player2.length); 
        }




        for (let i = 0; i < arr.length; i++) {
            arr[i]=[];
            // debugger;
            // console.log(arr.length);
            for (let j = 0; j < arr.length; j++) {
               
               if((document.getElementById(`inputvalue${i}${j}`) !== '')){
                         arr[i].push(document.getElementById(`inputvalue${i}${j}`).value);
               
                        //  while ( arr[i].length > 2 ) {
                        //          //Get a word out of the existing letters
                        //               let text = arr.join("");
                        //  }
                       
                         
                        //  console.log(arr[i][j]);
                        
                }
                else{
                        arr[i].push('');
                }
                
            }
       
        
        // valueOfCol(arr,i);
        // console.log("arr[i] ",arr[i]);
        }
        console.log("arr ",arr);
      
   






// console.log(player1.includes(value));


let rowsValue = '';
let colsValue = [];

for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
              arr[i].forEach((value)=>{
                //        console.log(arr[i].indexOf(value));
                        if((arr[i][j].includes(value)) != ''){
                                // console.log('value',value);
                                rowsValue = arr[i][j] + arr[i][j+1]+arr[i][j+2]+arr[i][j+3]+arr[i][j+4]+arr[i][j+5]+arr[i][j+6]+arr[i][j+7];
                                console.log('arr[i][j]',rowsValue);
                        }
                        // else if(arr[i][j].includes(value)&&(player2.includes(value))){
                        //         // console.log('value',value);
                        //         arr=arr[i][j] + arr[i][j+1]+arr[i][j+2]+arr[i][j+3]+arr[i][j+4];
                        //         console.log('arr[i][j]',arr);
                        // }
                          
                })
        } 
    }
        // console.log('value player1 ',player1Array); 
        // console.log('value length',player1Array.length); 

         
            
        //   for (let i = 0; i < arr.length; i++) {
        //         // const element = array[i];
        //         for (let j = 0; j < arr.length; j++) {
        //                 // const element = array[j];
        //                 arr[i].forEach((value)=>{
        //                         arr[i][j] = arr[i][j].value + arr[i][j+1].value+arr[i][j+2]+arr[i][j+3]+arr[i][j+4];
        //                 console.log(arr[i][j]);
        //                 })

                        
        //         }

                
        //   }
                // console.log(arr);

        
//     console.log('value length',player1Array.length); 
//     console.log('value length',player2Array.length); 
//     console.log('value',player1Array); 
//     console.log('value',player2Array); 




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





function valueOfCol(customArr,n){
        const arrayColumn = (arr, n) => arr.map(x => x[n]);

console.log(arrayColumn(customArr, n));

}





















// ========================>  for dont work to go to back or cut the word
//===> https://stackoverflow.com/questions/664631/disable-backspace-and-delete-key-with-javascript-in-ie

window.onkeydown = function (event) {

    if (event.which == 8) { 

         event.preventDefault();   // turn off browser transition to the previous page 

                 // put here code you need 

        }; 

};