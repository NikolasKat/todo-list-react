import Dropdown from "./Dropdown";

const AddMenu = ({ text, setText, addTodo, status, changeStatus }) => {
   const handleKeyPress = (event) => {
      if (event.key === "Enter") {
         addTodo();
      }
   };

   return (
      <>
         <form className="flex justify-center flex-wrap mt-10">
            {/* <select className="w-52" required> */}
            <Dropdown status={status} changeStatus={changeStatus} />
            {/* </select> */}
            <input
               className="text-lg block p-2.5 mx-3"
               value={text}
               onChange={(e) => {
                  setText(e.target.value);
               }}
               placeholder="Type new task"
               onKeyUp={handleKeyPress}
               required
            />
            <button onClick={addTodo}>Add new task</button>
         </form>
      </>
   );
};

export default AddMenu;
