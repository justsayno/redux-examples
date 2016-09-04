import expect from 'expect'
import deepFreeze from 'deep-freeze'
import { createStore } from 'redux'

const getEmployees = () => {
	return [
		{
			firstName: 'Gabriella',
			lastName: 'Boon'
		}
	]
}

const initialState = {
	employees: []
}

export const employeeReducer = (state = initialState, action) => {
	if (action.type === 'EMPLOYEES_REQUESTED') {
		return Object.assign({}, state, {
			employees: getEmployees()
		})
	}
	return state
}

let store = createStore(employeeReducer)

const testRequestEmployees = () => {
	const action = {
		type: 'EMPLOYEES_REQUESTED'
	}
	const stateBefore = {
		employees: []
	}

	const stateAfter = {
		employees: [{
			firstName: 'Gabriella',
			lastName: 'Boon'
		}]
	}

	// make sure stateBefore is not mutated
	deepFreeze(stateBefore)

	expect(employeeReducer(stateBefore, action)).toEqual(stateAfter)
}

testRequestEmployees()

console.log('All tests passed')
