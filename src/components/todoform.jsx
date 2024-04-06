import { useState } from "react";
function Todoform(props) {
  const addacty = props.addacty;
  const setaddacty = props.setaddacty;

  const [addnew, setaddnew] = useState("");
  const handlechange = (evt) => {
    setaddnew(evt.target.value);
  };
  const handleadd = () => {
    setaddacty([...addacty, { id: addacty.length + 1, activity: addnew }]);
    setaddnew("");
  };
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Manage Activities</h1>
      <div>
        <input
          value={addnew}
          onChange={handlechange}
          placeholder="Next activity?"
          className="border border-black "
        />
        <button
          onClick={handleadd}
          className="bg-black text-white border border-black "
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Todoform;
