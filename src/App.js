import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TodoList from './TodoList';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function randomId() {
  return Math.random().toString(36).substring(7);
}

export default function App() {
  const classes = useStyles();

  const [todos, setTodos] = useState([{
    id: 'a',
    title: 'Learn GrapQL',
    done: false,
  }, {
    id: 'b',
    title: 'Read a book',
    done: false,
  }, {
    id: 'c',
    title: 'Build an app',
    done: false,
  }]);

  const [newTodo, setNewTodo] = useState('');

  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        margin="normal"
        placeholder="Enter Todo ..."
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        onKeyDown={e => {
          if (e.key !== 'Enter' || newTodo === '') {
            return;
          }

          setTodos(t => [...t, { id: randomId(), title: newTodo, done: false }]);
          setNewTodo('');
        }}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}
