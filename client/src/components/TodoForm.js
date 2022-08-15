
const TodoForm = ({activity, setActivity}) => {

  let id = 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const body = { id, activity }

      setActivity('')

      await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

    } catch (err) {
      console.error(err)

    }


  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" value={activity} placeholder={' Enter new todo'} onChange={(e) => setActivity(e.target.value)} />
        <button className="addButton">Add todo</button>
      </form>
    </div>
  )
}

export default TodoForm