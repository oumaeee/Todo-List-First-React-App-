import Navigasibar from "./components/Navigasibar";
import Addtodo from "./components/Addtodo";
import Todolist from "./components/Todolist";

function App() {
  return (
    <div className="App bg-secondary" style={{ minHeight: "100vh" }}>
      <Navigasibar />
      <main>
        <Addtodo />
        <Todolist statusTodo="UNCOMPLETED" />
        <Todolist statusTodo="COMPLETED" />
      </main>
    </div>
  );
}

export default App;
