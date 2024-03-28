import './App.css';
import Item from './TodoListItem';

function TodoList() {
  const list = [{"id":1, "title": "Food's"}, {"id":2, "title": "Movie's"}, {"id":3, "title": "Anime's"}, {}];

  return (
    <>
      <ul>
      {list.map((item) => {
        return (
          <Item key={item.id} item={item}/>
        )
      })}
      </ul>
    </>
  );
}

export default TodoList