const router = require('express').Router();
const TodoController = require('../controller/todo.controller');

router.post('/todo',TodoController.create);

module.exports = router;