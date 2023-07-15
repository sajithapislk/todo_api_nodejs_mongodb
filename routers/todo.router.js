const router = require('express').Router();
const TodoController = require('../controller/todo.controller');

router.post('/todo',TodoController.create);
router.get('/todo',TodoController.getList);

module.exports = router;