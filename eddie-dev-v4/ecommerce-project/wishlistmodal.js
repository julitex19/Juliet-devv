const openbtn = document.getElementsByClassName("modalopen")[0]
const closebtn = document.getElementById("modalclose")
const modalcontainer = document.getElementById("modalcontainer")

openbtn.addEventListener("click" , function(){
    // console.log(openbtn,modalcontainer)
    modalcontainer.style.display = "block"
})
closebtn.addEventListener("click" , function(){
    // console.log(closebtn,modalcontainer)
    modalcontainer.style.display = "none"
})