//your JS code here. If required.
const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("reset_button");
const blockIdInput = document.getElementById("block_id");
const colorIdInput = document.getElementById("colour_id");
const getItems = document.querySelectorAll(".grid-item");

changeBtn.addEventListener("click", () => {
  console.log("inside");
  const blockId = blockIdInput.value;
  const colorId = colorIdInput.value;
  console.log(blockIdInput.value, blockIdInput, colorId);
  getItems.forEach((i) => (i.style.backgroundColor = "transparent"));

  const selitem = document.getElementById(blockId);
  if (selitem) {
    selitem.style.backgroundColor = colorId;
  } else {
    alert("Invalid Blaock id");
  }
});
resetBtn.addEventListener("click", () => {
  getItems.forEach((i) => (i.style.backgroundColor = "transparent"));
});

console.log("HELLO");
