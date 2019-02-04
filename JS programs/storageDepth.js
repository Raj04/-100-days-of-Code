document.querySelector("form").addEventListener("submit",function(){
	
	let name=document.getElementById("task").value;
	let age=document.getElementById("task1").value;
	let domain=document.getElementById("task2").value;
	
	//console.log(name); //not working
	
	var obj={
		nobj:name,
		aobj:age,
		dobj:domain,
	};
//	localStorage.setItem("details",JSON.stringify(obj));
	
	let details;
	if(localStorage.getItem("details")===null){
		details=[];//intially empty array is created where we will push the object
	}else{
		details=JSON.parse(localStorage.getItem("details"));//else we parse into object form here array object form
		//console.log(typeof details);
		//details=localStorage.getItem("details");
	}
	details.push(obj);
	localStorage.setItem("details",JSON.stringify(details)); //localstorage string valued
	//localStorage.setItem("details",details);
});
//we want to store an different objects in an array. i.e array of objects is maintained
//JSON.parse() as we have to convert it to array object to push the next values...  
//and JSON.stringify() as local storage allows to store only string values i.e in " " between the quotes
//check typeof localStorage.details
//typeof JSON.parse(localStorage.details
