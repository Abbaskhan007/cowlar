import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Avatar from "./components/Avatar";
import InfoBar from "./components/InfoBar";
import Todos from "./components/Todos";

function App() {
  const [showTodos, setShowTodos] = useState(true);
  const onToggleTodos = () => {
    setShowTodos(prev => setShowTodos(!prev));
  };
  return (
    <div className="h-[100vh] w-full overflow-y-scroll flex flex-col  justify-center  py-10 bg-no-repeat bg-center bg-cover bg-[url('https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg')]">
      <div className="w-[450px] mx-auto">
        <Avatar />
        <InfoBar onToggleTodos={onToggleTodos} />
        {showTodos && <Todos />}
      </div>
    </div>
  );
}

export default App;
