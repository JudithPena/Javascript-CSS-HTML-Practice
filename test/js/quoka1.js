// let user = {
//   name: "John", 
//   age: 30
// };

// let key = prompt("What do you want to know about the user?", "name");// access by variablealert(user[key]); // John (if enter "name")
function makeUser() { return {name: "John",ref: this};};let user = makeUser(); alert(user.ref.name);