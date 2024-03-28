import './App.css';

function TodoListItem(prop) {
  //console.log(prop.item);
  return (
    <li key={prop.item.id}>
      {prop.item.title}
    </li>
  )
}

export default TodoListItem