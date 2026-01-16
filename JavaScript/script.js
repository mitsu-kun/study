const pullDownButton = document.getElementById("lists");

lists.addEventListener('mouseover',function() {
    const pullDownButton = document.getElementById("lists")
    console.log("乗る")
})

lists.addEventListener('mouseout',function() {
    const pullDownButton = document.getElementById("lists")
    console.log("外れる")
})

lists.addEventListener('click',function() {
    const pullDownButton = document.getElementById("lists")
    console.log("クリック")
})

pullDownButton.addEventListener("mouseover",function(){
    pullDownButton.setAttribute("style", "background-color:blue;")
})

pullDownButton.addEventListener("mouseout",function(){
    pullDownButton.removeAttribute("style", "background-color:red;")
})

pullDownButton.addEventListener("click",function(){
    pullDownButton.setAttribute("style", "background-color:green;")
})