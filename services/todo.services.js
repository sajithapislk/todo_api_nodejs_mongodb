const TodoModel = require("../model/todo.model");

class TodoService {
  static async create(userId, title, description) {
    try {
      const createTodo = new TodoModel({ userId, title, description });
      return await createTodo.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodoService;
