import expect from 'expect'
import deepFreeze from 'deep-freeze'

const getEmployees = () => {
	return [
		{
			firstName: 'Gabriella',
			lastName: 'Boon'
		}
	]
}

export const employeeReducer = (state, action) => {
	if (action.type === 'EMPLOYEES_REQUESTED') {
		state.employees = getEmployees()
	}
	return state
}


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
