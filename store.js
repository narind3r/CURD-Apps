let key = prompt("Enter key you want to set ")
let value = prompt("Enter value you want to set ")
//localStorage.setItem(key, value)
//console.log(`the value at${key} is ${localStorage.getItem(Key)}`)
//const Employee = {
   /// firstname: "Maria",
   // lastname: "Sanchez",
 // };
  localStorage.removeItem('keyName');
  localStorage.setItem('username', 'JohnDoe');

localStorage.removeItem('username');
console.log(`the value at ${key} is ${localStorage.getItem}`)
localStorage.removeItem(key)

const response = await supabase
  .from('countries')
  .delete()
  .eq('id', 1)