const TodoModel = require("../model/todo.model");

class TodoService {
  static async create(email, password) {
    try {
      const createTodo = new TodoModel({ email, password });
      return await createTodo.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodoService;
