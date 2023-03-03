import express from "express";
import todoService from "../../services/todos";

const todosRouter = express.Router();

todosRouter.get("/", (req, res) => {
	res.send("Hello from todo router!");
});

todosRouter.get("/:id", (req, res) => {
	const { id } = req.params;

	const todo = todoService.getById(id);

	if (!todo) {
		return res.status(404).send("Todo not found");
	}
});

todosRouter.post("/", (req, res) => {
	const { text } = req.body;
	todoService.addTodo(text);
	res.status(201).send("Todo added");
});

todosRouter.put("/:id", (req, res) => {
	const { id } = req.params;
	const { text } = req.body;
	todoService.updateTodo(id, text);
	res.status(200).send("Todo updated");
});

todosRouter.delete("/:id", (req, res) => {
	const { id } = req.params;
	todoService.deleteTodo(id);
	res.status(200).send("Todo deleted");
});

todosRouter.patch("/:id", (req, res) => {
	const { id } = req.params;
	todoService.toggleTodo(id);
	res.status(200).send("Todo toggled");
});

export default todosRouter;
