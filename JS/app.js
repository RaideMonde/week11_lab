
let todoList = [
                { todo: "clone repo for starter code", status:"complete" },
                { todo: "make a todo list", status: "complete"},
                { todo: "Dance", status: "started"},
                { todo: "Complete week 11 lab", status: "started"}
                
            ];

let completedTodos = [];

for (item of todoList){
    if (item.status == 'complete')
        completedTodos.push(item)
}

for (item of completedTodos){
    const todo = item.todo
    console.log(todo)
}

