import { Todo } from "../../../types/indes";

let todos: Todo[] = [];

const todoService = {
	getTodos: () => {
		return todos;
	},

	addTodo: (text: string) => {
		const newTodo = {
			id: new Date().toISOString(),
			text,
			done: false,
		};

		todos.push(newTodo);
	},

	updateTodo: (id: string, text: string) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id);
		todos[todoIndex] = { ...todos[todoIndex], text };
	},

	deleteTodo: (id: string) => {
		todos = todos.filter((todo) => todo.id !== id);
	},

	toggleTodo: (id: string) => {
		const todoIndex = todos.findIndex((todo) => todo.id === id);
		todos[todoIndex] = { ...todos[todoIndex], done: !todos[todoIndex].done };
	},

	getById: (id: string) => {
		return todos.find((todo) => todo.id === id);
	},
};

export default todoService;
