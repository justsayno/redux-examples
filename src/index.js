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

deepFreeze(initialState)
let store = createStore(employeeReducer)


const testRequestEmployees = () => {
	// the action I am dispatching
	const action = {
		  type: 'EMPLOYEES_REQUESTED'
	}
	
	// create the store
	let store = createStore(employeeReducer)

	// the state that should be there after calling that action
	const expectedState = {
		employees: [{
			firstName: 'Gabriella',
			lastName: 'Boon'
		}]
	}

	// dispatch the action
	store.dispatch(action)

	// check the resulting state returned from getState() is equal to what I expected
	expect(store.getState()).toEqual(expectedState)
}

testRequestEmployees()

console.log('All tests passed')
