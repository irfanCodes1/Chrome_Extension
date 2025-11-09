const saveInputBtn=document.querySelector("#btn-el");
let inputEl=document.querySelector("#input-el");
let myLeads=[];
let unorderedList=document.getElementById("ul-el");

saveInputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    renderLeads();
    reset();
    

    
    
});
function renderLeads(){
    let listItems="";
    for(let i=0;i<myLeads.length;i++){
        listItems+=`<li>
         <a href='${myLeads[i]}' target='_blank'> ${myLeads[i]}"</a>
          </li>`;
        unorderedList.innerHTML=listItems;
    }
}
function reset(){
        inputEl.value="";
}
  