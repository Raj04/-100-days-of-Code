
document.body.addEventListener("click",deleteItem);
function deleteItem(e){
  if(e.target.parentElement.classList.contains("list1-item")){
    console.log("deleteItem");
    e.target.parentElement.remove();
  }
}
