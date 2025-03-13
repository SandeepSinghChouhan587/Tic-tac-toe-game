let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#restart");
let msgContainer= document.querySelector(".msgContainer");
let msg= document.querySelector("#msg");

let count=0;

let turno= true;//player x, player o
//2d array
const arr=[[0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6]
];

const resetGame = () => {
               turno=true;
               enableBoxes();
             msgContainer.classList.add("hide");
             count=0;
       };
          
  

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count+=1;
        if(turno){
        box.innerText="O";
        turno= false;
        }else{
            box.innerHTML="<p style='color:green;'>X</p>";
            turno=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled = true;

    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
     msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
     disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of arr){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

       if(pos1 != "" && pos2 !=  "" && pos3 != ""){
           if(pos1===pos2 && pos2===pos3){
            showWinner(pos1);

       }
       else if(count===9){
        msg.innerText="Match Drawn!";
        msgContainer.classList.remove("hide");
       }  
       }
        }

      };

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



