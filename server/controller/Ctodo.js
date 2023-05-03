// 예시 코드
const models = require("../models");
exports.main = (req, res) => {
  res.send("hi");
};
// (1)  GET /todos - show all todo
exports.readTodos = async (req, res) => {
  const result = await models.Todo.findAll();
  res.send(result);
};
// (2) POST /todo - create a new todo
exports.createTodo = async (req, res) => {
  const result = await models.Todo.create({
    title: req.body.title,
    done: false,
  });
  res.send(result);
};

// (3) PATCH /todo/:todoId - edit a specific todo
exports.updateTodo = async (req, res) => {
  const result = await models.Todo.update(
    {
      title: req.body.title,
      done: req.body.done,
    },
    {
      where: { id: req.params.todoId },
    }
  );

  res.send(true);
};

// (4) DELETE /todo/:todoId - remove a specific todo
exports.deleteTodo = async (req, res) => {
  await models.Todo.destroy({
    where: { id: req.params.todoId },
  });
  res.send(true);
};
