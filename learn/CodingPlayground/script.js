let listOf=document.querySelector("ul");
let addButton=document.querySelector("button");
let input1=document.querySelector("input");

addButton.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
});
addButton.addEventListener("click",()=>{
    let newDiv=document.createElement("li");
    newDiv.textContent=input1.value;
    if(input1.value==="") return;
    input1.value="";
    let rmBut=document.createElement("button");
    rmBut.textContent="Remove"
    rmBut.classList.add("removeBut");
    newDiv.appendChild(rmBut);
    listOf.appendChild(newDiv);
    rmBut.addEventListener("click",()=>{
        newDiv.remove();
    });
});