import Todoform from "./todoform";
import Todolist from "./todolist";
import { useState } from "react";
function Todocontainer() {
  const [addacty, setaddacty] = useState([
    { id: 1, activity: "Welcome to the Home" },
    { id: 2, activity: "What do you want" },
    { id: 3, activity: "Then, what's going on?" },
  ]);
  return (
    <div className="flex gap-5 flex-wrap ">
      <Todoform addacty={addacty} setaddacty={setaddacty} />
      <Todolist addacty={addacty} setaddacty={setaddacty} />
    </div>
  );
}
export default Todocontainer;
