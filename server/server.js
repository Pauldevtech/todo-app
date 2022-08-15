const express = require('express');
const app = express();
const path = require('path')

app.use(express.json())

app.use(express.static(path.join(__dirname + '/public')));


const PORT = process.env.PORT || 5000;

const todos = [
    {
        id: 1,
        activity: 'Do your homework',
    },
    {
        id: 2,
        activity: 'Go to the gym',
    },
    {
        id: 3,
        activity: 'Do the laundry',
    }
]

app.get('/api', (req, res) => {
    res.json(todos)
})

app.post('/api', (req, res) => {
    const item = req.body;
    item.id = todos.length +1;
    todos.push(item)
    res.json(todos)
})

app.delete('/api/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(todo => todo.id == id)
    if (index > -1) {
        todos.splice(index, 1)
    }
    res.json(todos)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


