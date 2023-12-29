let btn = document.querySelector("button");

let inp = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;


    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    
    inp.value = "";




});


ul.addEventListener("click",function(evt){
    if(evt.target.nodeName == "BUTTON"){
        let listitem = evt.target.parentElement;
        listitem.remove();
        console.log("delete");


    }
    
});

// let delbtns = document.querySelectorAll(".delbtn");
// for(delbtn of delbtns){
// delbtn.addEventListener("click",function(){
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
   

// });
// }

