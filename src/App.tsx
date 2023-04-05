import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New Yor", "San Francisco", "Paris", "Tokyo"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
