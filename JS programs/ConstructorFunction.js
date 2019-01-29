var obj1 = new Person("raj",21,"04.05.1997","Retail");

//constructor function is used when we want to create the same kind of objects again and again with same properties
//
var obj2=new Person("rajdeep");
function Person(name, age, dob, domain) {
    this.name = name;
    this.myAge = age;
    this.dob = dob;
    this.domain = domain;
}

// console.log(obj1.name)
console.log(obj2.name);


//constructor function having function 
var obj3=new Student("rajdeep",23,"ECE","ProjectWork");

function Student(name,age,stream,work){

    this.name=name;
    this.age=age;
    this.stream=stream;
    this.work=work;
    this.details=function(){
        console.log(name+" "+age+" "+stream+" "+work);
    }
}
obj3.details();
