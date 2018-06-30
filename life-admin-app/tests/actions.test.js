import * as actions from '../actions/actions'
import * as types from '../constants/types'

describe('actions', () => {
  describe('editing task', () => {
    it('Should create an action to update title text', () => {
      const title = 'sample text'
      const expected = {
        type: types.UPDATE_TASK_TITLE,
        title
      }
      expect(actions.updateTaskTitle(title)).toEqual(expected)
    })
    
    it('Should create action to update recurrence n', () => {
      const n = 3;
      const expected = {
        type: types.UPDATE_TASK_RECURRENCE_N,
        n
      }
      expect(actions.updateTaskRecurrenceN(n)).toEqual(expected)
    })

    it('Should create action to update recurrence mode', () => {
      const mode = 'days'
      const expected = {
        type: types.UPDATE_TASK_RECURRENCE_MODE,
        mode
      }
      expect(actions.updateTaskRecurrenceMode(mode)).toEqual(expected)
    })
  
    it('Should create action to complete task', () => {
      const taskId = 1;
      const expected = {
        type: types.COMPLETE_TASK,
        taskId
      }
      expect(actions.completeTask(taskId)).toEqual(expected)
    })
  })
})

