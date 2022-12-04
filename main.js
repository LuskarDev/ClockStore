const account = document.querySelector(".accounts"),
IconAccounts = document.querySelector(".account")

account.onclick = () => {
    IconAccounts.classList.toggle("showOptions")
} 

const form = document.querySelector(".formCreat")
const CreatAccount = () => {
    form.classList.add("ShowForm")
}

const CloseAccount = () => {
    form.classList.remove("ShowForm")
} 
const listaidx = document.querySelector(".listaIdx");
const listAb = document.querySelector(".listAb");
const close1 = document.querySelector(".menu #closeAb")

function ShowMenu()
    {
        listaidx.classList.add("showMenu");
    }

    function hiddenMenu(){
        listaidx.classList.remove("showMenu");
    }

    function ShowMenuA()
    {
        listAb.classList.add("showmenu");
    }

    function hiddenMenuA(){
        listAb.classList.remove("showmenu");
    }