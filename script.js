const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  function printDeveloper() {
    console.log("Developers:");
    const developers = data.filter(person => person.profession.toLowerCase() === 'developer');
    developers.forEach(developer => console.log(developer.name));
  }
  
  function addData() {
    const name = prompt("Enter name:");
    const age = parseInt(prompt("Enter age:"));
    const profession = prompt("Enter profession:");
    
    data.push({ name, age, profession });
  }
  
  function removeAdmin() {
    const nonAdmins = data.filter(person => person.profession.toLowerCase() !== 'admin');
    console.log("Non-admins:");
    console.log(nonAdmins);
  }
  
  function concatenateArray() {
    const newArray = [
      { name: "alex", age: 30, profession: "manager" },
      { name: "emma", age: 26, profession: "developer" }
    ];
  
    const combinedArray = data.concat(newArray);
    console.log("Combined Array:");
    console.log(combinedArray);
  }
  
  function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const average = totalAge / data.length;
    console.log("Average Age:", average);
  }
  
  function checkAgeAbove25() {
    const above25 = data.some(person => person.age > 25);
    console.log("Is there anyone above 25?", above25);
  }
  
  function uniqueProfessions() {
    const uniqueProfessions = [...new Set(data.map(person => person.profession))];
    console.log("Unique Professions:", uniqueProfessions);
  }
  
  function sortByAge() {
    const sortedByAge = data.slice().sort((a, b) => a.age - b.age);
    console.log("Sorted by Age:");
    console.log(sortedByAge);
  }
  
  function updateJohnsProfession() {
    const john = data.find(person => person.name.toLowerCase() === 'john');
    if (john) {
      john.profession = 'manager';
      console.log("John's profession updated to 'manager'.");
    }
  }
  
  function getTotalProfessions() {
    const professionCount = {
      developer: 0,
      admin: 0
    };
  
    data.forEach(person => {
      if (person.profession.toLowerCase() === 'developer') {
        professionCount.developer++;
      } else if (person.profession.toLowerCase() === 'admin') {
        professionCount.admin++;
      }
    });
  
    console.log("Profession Count:", professionCount);
  }
  