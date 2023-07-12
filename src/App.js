import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setTodo] = useState("");
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekday[new Date().getDay()];

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
          required
        />
        <i
          onClick={() => {
            if(toDo===""){
              alert('Empty To-Do Item')
            }else{
              setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
            }
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((object) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  value={object.status}
                  onChange={(e) => {
                    setToDos(
                      toDos.filter((obj) => {
                        if (obj.id === object.id) {
                          obj.status = e.target.checked;
                        }
                        return obj;
                      })
                    );
                  }}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{object.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() =>
                    setToDos(toDos.filter((obj3) => object.id !== obj3.id))
                  }
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
        <br></br>
        <h2><u>Completed Tasks</u></h2>
        {toDos.map((obj) => {
          if (obj.status) {
            return <h1>{obj.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
