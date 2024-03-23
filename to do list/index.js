
const inputbox= document.querySelector("#input-box");
const listcontainer = document.querySelector("#list-container");
const addbtn = document.querySelector("[data-btn]");


addbtn.addEventListener("click",()=>{
    addTask();
});
function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="&#10006;";
        li.appendChild(span);
    }

    inputbox.value="";
    saveData();
}

//for enter key

inputbox.addEventListener('keydown',(e) => {
    if(e.key === 'Enter'){
        addTask();
    }
})
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
           e.target.classList.toggle("checked");
    }

    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    }, false);

    // to save task in browser
    function saveData(){
        localStorage.setItem("data", listcontainer.innerHTML);

    }

    function showlist(){
        listcontainer.innerHTML= localStorage.getItem("data");
    }
    showlist();