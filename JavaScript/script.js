function pullDown() {
const pullDownButton = document.getElementById("lists");
const pullDownParents = document.getElementById("pull-down");
const pullDownChild = document.querySelectorAll(".pull-down-list")
const currentList = document.getElementById("current-list");
const url = [
    "https://www.google.com/",
    "https://www.google.com/",
    "https://www.google.com/",
    "https://www.google.com/",
]
pullDownChild.forEach((list, index) => {
    list.addEventListener('click', () => {
        window.location.href = url[index];
    });
});

pullDownButton.addEventListener('mouseover',function() {
    this.setAttribute("style", "background-color:blue;")
})

pullDownButton.addEventListener('mouseout',function() {
    this.removeAttribute("style", "background-color:red;")
})

pullDownButton.addEventListener('click',function() {
    if (pullDownParents.getAttribute("style") == "display:block;"){
        pullDownParents.removeAttribute("style", "display:block;")
    } else {
        pullDownParents.setAttribute("style", "display:block;")       
    }
})

pullDownChild.forEach(function(list){
    list.addEventListener("click", function(){
        const value = list.innerHTML
        currentList.innerHTML = value
        console.log(value)
    })
})
}
window.addEventListener('load', pullDown)