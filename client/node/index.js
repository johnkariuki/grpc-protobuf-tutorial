const grpc = require('grpc');

const protoPath = require('path').join(__dirname, '../..', 'proto');
const proto = grpc.load({root: protoPath, file: 'work_leave.proto' });

//Create a new client instance that binds to the IP and port of the grpc server.
const client = new proto.work_leave.EmployeeLeaveDaysService('localhost:50050', grpc.credentials.createInsecure());

const employees = {
  valid: {
    employee_id: 1,
    name: 'John Kariuki',
    accrued_leave_days: 10,
    requested_leave_days: 4
  },
  ineligible: {
    employee_id: 1,
    name: 'John Kariuki',
    accrued_leave_days: 10,
    requested_leave_days: 20
  },
  invalid: {
    employee_id: 1,
    name: 'John Kariuki',
    accrued_leave_days: 10,
    requested_leave_days: -1
  },
  illegal: {
    foo: 'bar'
  }
}

client.eligibleForLeave(employees.valid, (error, response) => {
  if (!error) {
    if (response.eligible) {
      client.grantLeave(employees.valid, (error, response) => {
        console.log(response);
      })
    } else {
      console.log("You are currently ineligible for leave days");
    }
  } else {
    console.log("Error:", error.message);
  }
});
