
document.querySelector(".list1-item").addEventListener("click",function(){

  console.log("list1-item class firstChild");
  //console.log(event.target);
});

document.querySelector(".list2-item").addEventListener("click",function(){

  console.log("list2-item class SecondChild");
  //console.log(event.target);
});

document.querySelector(".list3-item").addEventListener("click",function(){

  console.log("list3-item class ThirdChild");
  //console.log(event.target);
});

document.querySelector(".list4-item").addEventListener("click",function(){

  console.log("list4-item class FourthChild");
  //console.log(event.target);
});

document.querySelector(".list-item").addEventListener("click",function(){

  console.log("list-item parentClass");
  console.log(this);
    console.log(event.target);
});

document.querySelector(".lists").addEventListener("click",function(){

  console.log("div element");
  // console.log(this);
  // console.log(event.target);
});
