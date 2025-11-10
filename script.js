const saveInputBtn=document.querySelector("#btn-el");
let inputEl=document.querySelector("#input-el");
let myLeads=[];
let unorderedList=document.getElementById("ul-el");
let deleteEL=document.getElementById("delete-el");
let TabEl=document.getElementById("tab-btn");
let leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"));

    if(leadsFromLocalStorage){
        myLeads=leadsFromLocalStorage;
        render(myLeads);
    }


saveInputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
    reset();   
});

TabEl.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
    })
    
})

deleteEL.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    unorderedList.textContent=null;
    render(myLeads);
});

function render(leads){
    let listItems="";
    for(let i=0;i<leads.length;i++){
        listItems+=`<li>
         <a href='${leads[i]}' target='_blank'> ${leads[i]}</a>
          </li>`;
    }
    unorderedList.innerHTML=listItems;
}
function reset(){
        inputEl.value="";
}

  