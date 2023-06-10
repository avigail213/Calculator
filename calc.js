let btn = document.querySelectorAll("button")

btn.forEach(b=>{
    b.addEventListener("click",btnClick)
})

let ac = document.querySelector("#ac")
ac.removeEventListener("click",btnClick)
ac.addEventListener("click",clear)

let equal = document.querySelector("#eq")
equal.removeEventListener("click",btnClick)
equal.addEventListener("click",result)

function btnClick(){
    document.querySelector(".value").textContent += this.textContent
}

function clear(){
    document.querySelector(".value").textContent = ""
}

function result(){
    let val = document.querySelector(".value")
    val.textContent=eval(val.textContent)

}