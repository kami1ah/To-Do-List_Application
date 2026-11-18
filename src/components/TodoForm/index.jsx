function TodoForm({ inputText, setInputText, todos, setTodos }) {
  function handleInput(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false }
    ])
    setInputText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={handleInput}
        required
      />
      <button
        type="submit" className="todo-button"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm;
