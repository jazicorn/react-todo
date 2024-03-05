import './App.css'

/**
 * 
 * 
 */

function TodoList() {
  const list = [{"id":1, "title": "Food's"}, {"id":2, "title": "Movie's"}, {"id":3, "title": "Anime's"}, {}];

  return (
    <>
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

export default TodoList