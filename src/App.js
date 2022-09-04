import Navigasibar from "./components/Navigasibar";
import Addtodo from "./components/Addtodo";
import Todolist from "./components/Todolist";
import { useReducer } from "react";

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "addToDo":
      return [...state, action.newToDo];
    default:
      return state;
  }
};
function App() {
  // const [toDos, setToDos] = useState([]);
  // const addToDoArray = (toDo) => {
  //   setToDos([...toDos, toDo]);
  // };
  const [toDos, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App bg-secondary" style={{ minHeight: "100vh" }}>
      <Navigasibar />
      <main>
        <Addtodo dispatch={dispatch} />
        <p>{JSON.stringify(toDos)}</p>
        <Todolist statusTodo="UNCOMPLETED" toDos={toDos.filter((toDo) => toDo.isCompleted === false)} />
        <Todolist statusTodo="COMPLETED" toDos={toDos.filter((toDo) => toDo.isCompleted === true)} />
      </main>
    </div>
  );
}

export default App;
