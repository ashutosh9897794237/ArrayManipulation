let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  function printDeveloper() {
   data.forEach(
    (person)=>{
      if(person.profession==="developer"){
        console.log('I am ${person.name}. I am ${person.age} years old. I am working as a ${person.profession}.');
      }
    }
   )
  }
  
  function addData() {
    let newname = prompt("Enter name:");
    let newage = parseInt(prompt("Enter age:"));
    let newprofession = prompt("Enter profession:");
    console.log(newname,newage,newprofession);
    data.push({ name: newname,
       age:newage,
      profession:newprofession });
      console.log(data);
  }
  
  function removeAdmin() {
    data=data.filter((person)=>person.profession!="admin");
    console.log(data);
  }
  
  function concatenateArray() {
    let dummyarray = [
      { name: "alex", age: 30, profession: "manager" },
      { name: "emma", age: 26, profession: "developer" }
    ]
      data.push(...dummyarray);
      console.log(data);
  };
  
  function averageAge() {
    let avgval = 0;
    data.forEach((person)=>{
      avgval+=person.age})
      console.log(avgval/data.length);
    }
  
  
  function checkAgeAbove25() {
   let satus = false;
   data.forEach(person=>{
   if(person.age>25){
       satus=true; 
   }
  })
   let count = data.some((person)=>person.age>25);
   console.log(count?"yes, a person greater than age 25 exist":"No, a person greter than age 25 not exist");
   }
  
  
  function uniqueProfessions() {
   let professionsarr = [];
   data.forEach(person=>{
    if(!professionsarr.includes(person.profession)){
      professionsarr.arr(person.profession);
    }
   })
   console.log(professionsarr);
  }
  
  function sortByAge() {
    data.sort((a,b)=>b.age-a.age);
    console.log(data);
  }
  
  function updateJohnsProfession() {
   data.forEach(person=>{
    if(person.name=="John"){
      person.profession="manager";
    }
   })
   console.log(data);
  }
  
  function getTotalProfessions() {
    let devcount = data.filter(person=>person.profession=="developer");
    let admincount = data.filter(person=>person.profession="admin");
    console.log('Developers: ${devcount.length}, admin: ${admincount.length}')
  }
  