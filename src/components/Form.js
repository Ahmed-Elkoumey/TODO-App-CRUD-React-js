import { useEffect } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

import { ToastContainer, toast } from "react-toastify";

export default function Form({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = (title, id, completed) => {
    toast.warn("Task has been edited", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
    const newTodo = todos.map((todo) => {
      return todo.id === id ? { title, id, completed } : todo;
    });
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <div className="w-100">
      {/* <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter Your Task"
          className="from-control"
          value={input}
          required
          onChange={onInputChange}
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form> */}

      <form onSubmit={onFormSubmit} class="row w-50 m-auto g-3">
        <div class="col-auto">
          <input
            type="text"
            readonly
            class="form-control-plaintext"
            id="staticEmail2"
            value={input}
          />
        </div>
        <div class="col-auto">
          <label for="inputPassword2" class="visually-hidden">
            Password
          </label>
          <input
            type="text"
            class="form-control"
            id="inputPassword2"
            placeholder="Write Your Task"
            onChange={onInputChange}
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
