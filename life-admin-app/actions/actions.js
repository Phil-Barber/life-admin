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

export function fetchTasksIfNeeded () {
  return (dispatch, getState) => {
    const tasks = getState().tasks
    if (!tasks.length) {
      dispatch(fetchTasks())
    }
  }
}

function fetchTasks () {
  return {
    type: FETCH_TASKS,
    tasks: fetch()
  }
}

export function editOrSubmitTask (task) {
  return (dispatch, getState) => {
    if (task === null) dispatch(updateTask(getState().editTask.task))
    dispatch(toggleEditTask(task))
  }
}

function toggleEditTask (task) {
  return {
    type: TOGGLE_EDIT_TASK,
    task
  }
}

function updateTask (task) {
  return {
    type: UPDATE_TASK,
    task
  }
}

export function updateTaskTitle (text) {
  return {
    type: UPDATE_TASK_TITLE,
    title: text
  }
}

export function updateTaskRecurrenceN (n) {
  return {
    type: UPDATE_TASK_RECURRENCE_N,
    n
  }
}

export function updateTaskRecurrenceMode (mode) {
  return {
    type: UPDATE_TASK_RECURRENCE_MODE,
    mode
  }
}

export function completeTask (taskId) {
  return {
    type: COMPLETE_TASK,
    taskId
  }
}

export function initNewTask() {
  return {
    type: INIT_NEW_TASK,
    task: task()
  }
}

function task() {
  return {
    title: 'New Task',
    recurrence: {
      n: 1,
      mode: 'days'
    }
  }
}

export function createTask(task) {
  return (dispatch, getState) => {
    dispatch(toggleEditTask(null))
    dispatch(submitNewTask(task))
  }
}

function submitNewTask (task) {
  return {
    type: SUBMIT_NEW_TASK,
    task
  }
}

function fetch () {
  return [{
    id: 0,
    due: true,
    title: 'Task 3',
    lastCompleted: '01/01/1992',
    recurrence: {
      n: 2,
      mode: 'weeks'
    }
  }, {
    id: 1,
    due: true,
    title: 'Task 4',
    lastCompleted: '01/01/1992',
    recurrence: {
      n: 2,
      mode: 'weeks'
    }
  }, {
      id: 2,
      due: false,
      title: 'Task 5',
      lastCompleted: '01/01/1992',
      recurrence: {
        n: 2,
        mode: 'weeks'
      }
    }/*, {
      id: 3,
      due: false,
      title: 'task1',
      lastCompleted: '01/01/1992',
      recurrence: {
        n: 2,
        mode: 'weeks'
      }
    }, {
      id: 4,
      due: false,
      title: 'task2',
      lastCompleted: '01/01/1992',
      recurrence: {
        n: 2,
        mode: 'weeks'
      }
    } */
  ]
}
