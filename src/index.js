import expect from 'expect'

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
	expect(employeeReducer(stateBefore, action)).toEqual(stateAfter)
}

testRequestEmployees()

console.log('All tests passed')
