import { FaRegCalendarCheck, FaEdit } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Todolist({ todos, setTodos, setEditTodo }) {
  const handelDel = ({ id }) => {
    toast.error("Task Deleted", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,

      progress: undefined,
      theme: "colored",
    });

    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handelCompelet = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          toast.success("🌟 Very Good", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handelEdit = ({ id }) => {
   

    const findTodo = todos.find((todo) => {
    
      return todo.id === id;
    });
    setEditTodo(findTodo);
  };

  return (
    <div className="container ">
      <ul className=" m-auto d-flex flex-column align-items-center justify-content-center">
        {todos.map((todoList) => (
          <li
            key={todoList.id}
            className="border border-5 p-3  my-3 d-flex justify-content-between"
          >
            <input
              type="text"
              value={todoList.title}
              readOnly
              onChange={(e) => e.preventDefault()}
              className={`${
                todoList.completed
                  ? "text-success text-decoration-line-through"
                  : "text-dark"
              } fs-3 w-50 border border-1 rounded-5`}
            />

            <button
              className="btn btn-success"
              onClick={() => handelCompelet(todoList)}
            >
              <FaRegCalendarCheck />
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="colored"
              />
            </button>
            <button
              className="btn btn-warning"
              onClick={() => handelEdit(todoList)}
            >
              <FaEdit />

              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </button>

            <button
              className="btn btn-danger"
              onClick={() => handelDel(todoList)}
            >
              <RiDeleteBack2Line />

              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
