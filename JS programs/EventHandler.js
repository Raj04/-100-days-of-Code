//click event

document.querySelector(".clickMe").addEventListener("click", afterClickcing);

function afterClickcing(){
	alert("you clicked a button");
}

document.addEventListener("keypress",function(){
										key(event.key);
										});
function key(key){
		
	alert("My Friend You Pressed '"+key+"'");
}
