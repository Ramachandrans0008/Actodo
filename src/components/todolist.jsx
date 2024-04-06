import { useState } from "react";
import Todoitem from "./todoitem";

function Todolist(props) {
  const addacty = props.addacty;
  const setaddacty = props.setaddacty;
  return (
    <div className="bg-emerald-400 flex-grow border rounded-md p-3">
      <h1 className="text-2xl font-medium">Today's Activity</h1>

      {addacty.length === 0 ? <p>You haven't added anything yet</p> : ""}
      {addacty.map(function (item, index) {
        return (
          <Todoitem
            id={item.id}
            activity={item.activity}
            index={index}
            addacty={addacty}
            setaddacty={setaddacty}
          />
        );
      })}
    </div>
  );
}

export default Todolist;
