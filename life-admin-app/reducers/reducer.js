import { combineReducers } from 'redux'
import {
  TOGGLE_EDIT_TASK,
  UPDATE_TASK_TITLE,
  UPDATE_TASK_RECURRENCE_N,
  UPDATE_TASK_RECURRENCE_MODE,
  UPDATE_TASK,
  FETCH_TASKS,
  COMPLETE_TASK,
  INIT_NEW_TASK,
  SUBMIT_NEW_TASK
} from '../constants/types'
import { submitTaskToServer } from '../api/api'

function editTask (state = {task: null}, action) {
  switch (action.type) {
    case TOGGLE_EDIT_TASK:
      return toggleEditTask(state, action)
    case UPDATE_TASK_TITLE:
      return updateTaskTitle(state, action)
    case UPDATE_TASK_RECURRENCE_N:
      return updateTaskRecurrenceN(state, action)
    case UPDATE_TASK_RECURRENCE_MODE:
      return updateTaskRecurrenceMode(state, action)
    case INIT_NEW_TASK:
      return initNewTask(state, action)
    default:
      return state
  }
}

function toggleEditTask (state = false, action) {
  return Object.assign({}, state, {
    task: action.task
  })
}

function updateTaskTitle (state, action) {
  const task = state.task
  const newTask = Object.assign({}, task, {
    title: action.title
  })
  return Object.assign({}, state, {
    task: newTask
  })
}

function updateTaskRecurrenceN (state, action) {
  let task = state.task
  task.recurrence = Object.assign({}, task.recurrence, {
    n: action.n
  })
  return Object.assign({}, state, {task})
}

function updateTaskRecurrenceMode (state, action) {
  let task = state.task
  task.recurrence = Object.assign({}, task.recurrence, {
    mode: action.mode
  })
  return Object.assign({}, state, {task})
}

function initNewTask (state, action) {
  return Object.assign({}, state, {task: action.task})
}

function tasks (state = [], action) {
  switch (action.type) {
    case FETCH_TASKS:
      return action.tasks
    case UPDATE_TASK:
      return updateTask(state, action.task)
    case COMPLETE_TASK:
      return completeTask(state, action.taskId)
    case SUBMIT_NEW_TASK:
      return submitNewTask(state, action.task)
    default:
      return state
  }
}

function updateTask (state, task) {
  let tasks = state.filter((t) => t.id !== task.id)
  tasks.push(task)
  return tasks
}

function completeTask (state, taskId) {
  let found = false
  const tasks = state.map((task) => {
    if (task.id === taskId) {
      found = true
      task = Object.assign({}, task, {
        due: false,
        lastCompleted: '26/10/2016'
      })
      submitTaskToServer(task);
      return task;
    }
    return task
  })
  if (!found) {
    // TODO handle properly
    console.error('Couldn\'t find task when completing')
  }
  return tasks
}

function submitNewTask(state, task) {
  // make call to api
  
}

const reducer = combineReducers({
  editTask,
  tasks
})

export default reducer
