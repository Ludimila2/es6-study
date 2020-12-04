"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// CLASSES
var TodoList = /*#__PURE__*/function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.todos = [];
  } // para adicionar novo to do


  _createClass(TodoList, [{
    key: "addTodo",
    value: function addTodo() {
      this.todos.push('Novo to do');
      console.log(this.todos);
    }
  }]);

  return TodoList;
}(); // para armazenar uma nova lista


var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.addTodo();
};
