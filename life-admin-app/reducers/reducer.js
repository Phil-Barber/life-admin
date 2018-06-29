import { combineReducers } from 'redux'
import {
  TOGGLE_EDIT_TASK,
  UPDATE_TASK_TITLE,
  UPDATE_TASK_RECURRENCE_N,
  UPDATE_TASK_RECURRENCE_MODE,
  UPDATE_TASK,
  FETCH_TASKS,
  COMPLETE_TASK
} from '../actions/actions'

const reducer = combineReducers({
  editTask,
  tasks
})

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

function tasks (state = [], action) {
  switch (action.type) {
    case FETCH_TASKS:
      return action.tasks
    case UPDATE_TASK:
      return updateTask(state, action.task)
    case COMPLETE_TASK:
      return completeTask(state, action.taskId)
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
      return Object.assign({}, task, {
        due: false,
        lastCompleted: '26/10/2016'
      })
    }
    return task
  })
  if (!found) {
    // TODO handle properly
    console.error('Couldn\'t find task when completing')
  }
  return tasks
}

export default reducer
