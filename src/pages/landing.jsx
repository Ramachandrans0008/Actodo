import Header from "../components/header";
import Card from "../components/card";
import Todocontainer from "../components/todocondainer";
import { useLocation } from "react-router-dom";

function Landing() {
  const use = useLocation();
  return (
    <div className="bg-black p-16">
      {/* header */}
      <div className="bg-white p-12 border rounded-md">
        <Header name={use.state.user} />
        {/* cards */}
        <div className="flex justify-between gap-10 flex-wrap my-5">
          <Card bg={"#FBBF24"} title={"23°"} subtitle={"Chennai"} />
          <Card bg={"#65A30D"} title={"03 April"} subtitle={"20:45:06"} />
          <Card bg={"#F87171"} title={"Build Using"} subtitle={"React"} />
        </div>
        {/* todos */}
        <Todocontainer />
      </div>
    </div>
  );
}

export default Landing;
