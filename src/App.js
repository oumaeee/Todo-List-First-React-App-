import Navigasibar from "./components/Navigasibar";
import Addtodo from "./components/Addtodo";
import Todolist from "./components/Todolist";
import React, { useReducer } from "react";

export const DispatchContext = React.createContext();

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "addToDo":
      return [...state, action.newToDo];
    case "edit":
      return state;
    case "change":
      let newState = [];
      for (const objectState of state) {
        if (objectState.id === action.id) {
          objectState.isCompleted = true;
        }
        newState = [...newState, objectState];
      }
      return newState;

    case "delete":
      for (const key in state) {
        if (state[key].id === action.id) {
          state.splice(key, 1);
        }
      }
      return [...state];
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
  const tes = () => console.log(dispatch());
  return (
    <div className="App bg-secondary" style={{ minHeight: "100vh" }}>
      <Navigasibar />
      <main>
        <Addtodo dispatch={dispatch} />
        <p>{JSON.stringify(toDos)}</p>
        <DispatchContext.Provider value={{ dispatch: dispatch }}>
          <Todolist statusTodo="UNCOMPLETED" toDos={toDos.filter((toDo) => toDo.isCompleted === false)} />
          <Todolist statusTodo="COMPLETED" toDos={toDos.filter((toDo) => toDo.isCompleted === true)} />
        </DispatchContext.Provider>
      </main>
      <button onClick={tes}></button>
    </div>
  );
}

export default App;
