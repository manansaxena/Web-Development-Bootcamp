const todoList = [];
const commandsAllowed = ["new", "list", "delete", "quit"];

let command = prompt("Enter your first command");
while (true) {
  if (command !== "new") {
    console.log("First add something to the todolist by using new command");
    command = prompt("Enter a new command");
  } else {
    break;
  }
}
while (command !== "quit") {
  if (commandsAllowed.includes(command)) {
    if (command === "new") {
      let newItem = prompt("Enter a new item");
      todoList.push(newItem.toLowerCase());
      console.log(`${newItem} added to the list`);
      command = prompt("Enter a new command");
    } else if (command === "list") {
      let index = 0;
      console.log("************");
      for (item of todoList) {
        console.log(`${index}: ${item}`);
        index++;
      }
      console.log("************");
      command = prompt("Enter a new command");
    } else if (command === "delete") {
      let itemDeleted = prompt("What do you want to delete");
      let index = todoList.indexOf(itemDeleted.toLowerCase());
      if(index!==-1){
        todoList.splice(index, 1);
        console.log("Todo Removed");
        command = prompt("Enter a new command");
      }
      else {
        console.log("Enter a valid item")
      }
      
    }
  } else {
    command = prompt("Enter a valid command");
  }
}
console.log("You have successfully quitted the todolist");
