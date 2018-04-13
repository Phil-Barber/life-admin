import { combineReducers } from 'redux';
import {
  TOGGLE_EDIT_TASK,
  UPDATE_TASK_TITLE,
  UPDATE_TASK_RECURRENCE_N,
  UPDATE_TASK_RECURRENCE_MODE,
  FETCH_TASKS
} from '../actions/actions';

const reducer = combineReducers({
  editTask,
  tasks
});

function editTask(state = {task: null}, action) {
  switch(action.type) {
    case TOGGLE_EDIT_TASK: 
      return toggleEditTask(state, action);
    case UPDATE_TASK_TITLE:
      return updateTaskTitle(state, action);
    case UPDATE_TASK_RECURRENCE_N:
      return updateTaskRecurrenceN(state, action);
    case UPDATE_TASK_RECURRENCE_MODE:
      return updateTaskRecurrenceMode(state, action);
    default:
      return state;
  }
}

function toggleEditTask(state = false, action) {
  return Object.assign({}, state, {
    task : action.task
  });
}

function updateTaskTitle(state, action) {
  const task = state.task;
  const newTask = Object.assign({}, task, {
    title : action.title
  });
  return Object.assign({}, state, {
    task: newTask
  });
}

function updateTaskRecurrenceN(state, action) {
  let task = state.task;
  task.recurrence = Object.assign({}, task.recurrence, {
    n: action.n
  });
  return Object.assign({}, state, {task});
}

function updateTaskRecurrenceMode(state, action) {
  let task = state.task;
  task.recurrence = Object.assign({}, task.recurrence, {
    mode: action.mode
  });
  return Object.assign({}, state, {task});
}

////

function tasks(state = {due:[], upcoming:[]}, action) {
  switch(action.type) {
    case FETCH_TASKS:
      let due = [
        {
          title: 'task3',
          lastCompleted: '01/01/1992',
          recurrence: {
            n: 2,
            mode: 'weeks'
          }
        },
        {
          title: 'task4',
          lastCompleted: '01/01/1992',
          recurrence: {
            n: 2,
            mode: 'weeks'
          }
        },
        {
          title: 'task5',
          lastCompleted: '01/01/1992',
          recurrence: {
            n: 2,
            mode: 'weeks'
          }
        },
      ];
        let upcoming = [
        {
          title: 'task1',
          lastCompleted: '01/01/1992',
          recurrence: {
            n: 2,
            mode: 'weeks'
          }
        },
        {
          title: 'task2',
          lastCompleted: '01/01/1992',
          recurrence: {
            n: 2,
            mode: 'weeks'
          }
        },
      ];
      return {due, upcoming};
    default:
      return state;
  }
}

export default reducer;

