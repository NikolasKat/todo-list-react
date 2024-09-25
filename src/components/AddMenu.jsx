const AddMenu = ({ text, setText, addTodo }) => {
   return (
      <>
         <label className="flex justify-center mt-10">
            <input
               className="text-lg block p-2.5 mr-3"
               value={text}
               onChange={(e) => {
                  setText(e.target.value);
               }}
               placeholder="Type new task"
            />
            <button onClick={addTodo}>Add new task</button>
         </label>
      </>
   );
};

export default AddMenu;
