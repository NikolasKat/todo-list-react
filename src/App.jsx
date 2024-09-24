import { useState } from "react";

function App() {
   const [todos, setTodos] = useState([]);
   const [text, setText] = useState("");

   const addTodo = () => {
      if (text.trim().length) {
         setTodos([
            ...todos,
            {
               id: new Date().toISOString(),
               text,
               completed: false,
            },
         ]);
         setText("");
      }
   };

   const removeTodo = (id) => {
      setTodos(todos.filter((item) => item.id !== id));
   };

   const handleToggle = (id) => {
      setTodos(
         todos.map((item) => {
            if (item.id !== id) return item;

            return {
               ...item,
               completed: !item.completed,
            };
         })
      );
   };

   const items = todos.map((item) => {
      return (
         <li key={item.id}>
            <input
               type="checkbox"
               id={item.text}
               checked={item.completed}
               onChange={() => handleToggle(item.id)}
            />
            <label htmlFor={item.text}>{item.text}</label>
            <button onClick={() => removeTodo(item.id)}>Delete</button>
         </li>
      );
   });

   return (
      <div className="mt-11 ml-48">
         <label className="flex">
            <input
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 "
               value={text}
               onChange={(e) => {
                  setText(e.target.value);
               }}
            />
            <button onClick={addTodo}>Add new task</button>
         </label>

         <ul>{items}</ul>
      </div>
   );
}

export default App;
