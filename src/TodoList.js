import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  done: {
    textDecoration: 'line-through',
  },
}));

export default function ToDoList({ todos, setTodos }) {
  const classes = useStyles();

  return (
    <List component="nav" aria-label="main">
      {todos.map((todo, i) => (
        <ListItem key={todo.id} button onClick={() => setTodos(ts => {
          const nts = [...ts];
          nts.splice(i, 1, { ...todo, ...{ done: !todo.done } });
          return nts;
        })}>
          <ListItemText
            primary={todo.title}
            className={todo.done ? classes.done : ''}
          />
        </ListItem>
      ))}
    </List>
  );
}
