const TodoService = require("../services/todo.services");

exports.create = async (req, res, next) => {
  try {
    console.log("---req body---", req.body);
    const { userId, title, description } = req.body;

    const successRes = await TodoService.create(userId, title, description);

    res.json({
      status: true,
      success: "Todo Created Successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getList = async (req, res, next) => {
  try {
    const list = await TodoService.getList();

    res.json({
      status: true,
      success: list,
    });
  } catch (error) {
    next(error);
  }
};
