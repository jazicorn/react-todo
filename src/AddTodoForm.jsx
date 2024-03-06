import './App.css';

function AddTodoForm() {

  return (
    <>
      <form>
        <label htmlFor="title">Title</label>
        <input id="todoTitle" type="text"></input>
        <button type="button">Add</button>
      </form>
    </>
  );
}

export default AddTodoForm