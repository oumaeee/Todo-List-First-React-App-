import Navigasibar from "./components/Navigasibar";
import Addtodo from "./components/Addtodo";
import Todolist from "./components/Todolist";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const addToDoArray = (toDo) => {
    setToDos([...toDos, toDo]);
  };

  return (
    <div className="App bg-secondary" style={{ minHeight: "100vh" }}>
      <Navigasibar />
      <main>
        <Addtodo addToDoArray={addToDoArray} />
        <p>{JSON.stringify(toDos)}</p>

        <Todolist statusTodo="UNCOMPLETED" toDos={toDos.filter((toDo) => toDo.isCompleted === false)} />
        <Todolist statusTodo="COMPLETED" toDos={toDos.filter((toDo) => toDo.isCompleted === true)} />
      </main>
    </div>
  );
}

export default App;
