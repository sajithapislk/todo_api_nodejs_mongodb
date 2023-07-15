const router = require('express').Router();
const TodoController = require('../controller/todo.controller');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/todo',TodoController.create);
router.get('/todo', authenticateToken, TodoController.getList);

module.exports = router;