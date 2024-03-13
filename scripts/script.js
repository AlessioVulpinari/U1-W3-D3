const addBtn = document.getElementById("addTextBtn")

const handleClickBtn = (event) => {
  const textBox = document.getElementById("inputBox")
  const taskList = document.getElementById("taskList")
  let value = textBox.value

  // Manipoli il DOM
  if (value !== "") {
    const elementContainer = document.createElement("div")
    elementContainer.classList.add("task")

    const elementList = document.createElement("li")
    elementList.innerText = value
    elementList.classList.add("elementList")
    elementList.addEventListener("click", handleClickElementList)

    const btnElementList = document.createElement("button")
    btnElementList.innerText = "Elimina!"
    btnElementList.classList.add("btnElimina")
    btnElementList.addEventListener("click", handleEraseBtn)

    taskList.appendChild(elementContainer)
    elementContainer.appendChild(elementList)
    elementContainer.appendChild(btnElementList)
  }

  // ressetti la textBox
  textBox.value = ""
}

addBtn.addEventListener("click", handleClickBtn)

const handleClickElementList = (event) => {
  text = event.target.innerText

  if (event.target.style.textDecoration !== "line-through") {
    strikeText = event.target.style.textDecoration = "line-through"
    text = strikeText
    console.log("entrato")
  }
}

const handleEraseBtn = (event) => {
  event.target.closest(".task").remove()
}
