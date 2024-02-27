import './App.css'

function App() {
  const list = [{"id":1, "title": "Food's"}, {"id":2, "title": "Movie's"}, {"id":3, "title": "Anime's"}, {}];

  return (
    <>
      <h1>Todo List</h1>
      <ul>
      {list.map(function(item) {
        return (
          <li key={item.id}>
            {item.title}
          </li>
        )
      })}
      </ul>
    </>
  );
}

export default App
