import "./App.css";
import List from "./List";
import Style from "./Style";
import styles from "./App.module.css";
import MapFunction  from "./MapFunction";
import Students from "./Students";
function App() {
   const students=[
    {id:1,name:"Bhavya",branch:"CSE",section:"D"},
    {id:2,name:"Gayu",branch:"CSE",section:"A"},
    {id:3,name:"Tej",branch:"CSE",section:"D"},
    {id:4,name:"Vyshu",branch:"CSE",section:"B"},
  ];
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to React 🚀</h1>
      <p>My first React application</p>

      <button
        onClick={() => alert("Hello, Bhavya!")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
      <h1 className={styles.heading}>This is a heading with module CSS</h1>
      <List />
      <Style />
      <MapFunction/>
      <h2>Passing data from parent to child using parent</h2>
      <Students  students={students}/>
    </div>
  );
}

export default App;
