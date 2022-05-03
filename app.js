let count = 0

const decrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")
const increase = document.querySelector(".increase")
const value = document.getElementById("value")

decrease.addEventListener("click", () => {
    count--
    value.textContent = count
    value.style.color = "red"
})

reset.addEventListener("click", () => {
    count = 0
    value.textContent = count
    value.style.color = "#222"
})

increase.addEventListener("click", () => {
    count++
    value.textContent = count
    value.style.color = "green"
})