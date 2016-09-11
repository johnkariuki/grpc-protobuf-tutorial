const grpc = require('grpc');

const proto = grpc.load('proto/work_leave.proto');
const server = new grpc.Server();

//define the callable methods that correspond to the methods defined in the protofile
server.addProtoService(proto.work_leave.EmployeeLeaveDaysService.service, {
  /**
  Check if an employee is eligible for leave.
  True If the requested leave days are greater than 0 and within the number
  of accrued days.
  */
  eligibleForLeave(call, callback) {
    if (call.request.requested_leave_days > 0) {
      if (call.request.accrued_leave_days > call.request.requested_leave_days) {
        callback(null, { eligible: true });
      } else {
        callback(null, { eligible: false });
      }-1
    } else {
      callback(new Error('Invalid requested days'));
    }
  },

  /**
  Grant an employee leave days
  */
  grantLeave(call, callback) {
    let granted_leave_days = call.request.requested_leave_days;
    let accrued_leave_days = call.request.accrued_leave_days - granted_leave_days;

    callback(null, {
      granted: true,
      granted_leave_days,
      accrued_leave_days
    });
  }
});

//Specify the IP and and port to start the grpc Server, no SSL in test environment
server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure());

//Start the server
server.start();
console.log('grpc server running on port:', '0.0.0.0:50050');
