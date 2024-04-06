function Todoitem(props) {
  const addacty = props.addacty;
  const setaddacty = props.setaddacty;

  const handledelete = (deleteid) => {
    var temarr = addacty.filter(function (item) {
      if (item.id === deleteid) {
        return false;
      } else {
        return true;
      }
    });
    setaddacty(temarr);
  };

  return (
    <div className="flex justify-between">
      <p>
        {props.index + 1}.{props.activity}
      </p>

      <button onClick={() => handledelete(props.id)}>❌</button>
    </div>
  );
}
export default Todoitem;
