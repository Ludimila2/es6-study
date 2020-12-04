// CLASSES
class TodoList {
    constructor() {
        this.todos = []
    }

    // para adicionar novo to do
    addTodo() {
        this.todos.push('Novo to do')
        console.log(this.todos)
    }
}

// para armazenar uma nova lista
const MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function() {
    MinhaLista.addTodo()
}