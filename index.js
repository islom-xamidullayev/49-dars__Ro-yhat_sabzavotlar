const list = document.querySelector(".list");
const fruitInput = document.getElementById("fruit-input");
const addBtn = document.getElementById("fruit-add-btn");
const cancel = document.getElementById("cancel");


addBtn.addEventListener("click", () => {
  const text = fruitInput.value;

  const element = document.createElement("li");
  fruitInput.value = "";
  if (text === "") {
    alert("Bror narsa kiriting ");

    return;
  }
  const arr = Array.from(list.children);

  let unique = true;

  arr.forEach(( item) => {
    if (text.toLowerCase() === item.innerText.toLowerCase()) {
      unique = false;
    }
  });
  if (unique === false) {
    alert("bu mevani avval yozgansiz:");
    return;
  }

  console.log("qo'shildi", text);

  element.innerText = text;

  list.appendChild(element);
  


});

cancel.addEventListener("click", () => {
    element.innerText = ""
})