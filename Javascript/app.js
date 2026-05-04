response = prompt("What would you like to do?")
let todo = []
while(response !== "quit"){
    if(response === "new"){
        let newTodo = prompt("Enter a new todo: ")
        todo.push(newTodo)
        console.log(`${newTodo} added to the list!`)
    }
    else if(response === "list"){
        console.log("**********")
        for(let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`)
        }
        console.log("**********")
    }
    else if(response === "delete"){
        let index = parseInt(prompt("Enter the index of the todo to delete: "))
        if(index >= 0 && index < todo.length){
            todo = todo.splice(index,1)
            console.log("Todo Removed")
        }
        
    }
}