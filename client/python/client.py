import grpc
import work_leave_pb2 as pb


def main():
    """Python Client for Employee leave days"""

    # Create channel and stub to server's address and port.
    channel = grpc.insecure_channel('localhost:50050')
    stub = pb.EmployeeLeaveDaysServiceStub(channel)

    # Exception handling.
    try:
        # Check if the Employee is eligible or not.
        response = stub.EligibleForLeave(pb.Employee(employee_id=1,
                                                     name='Peter Pan',
                                                     accrued_leave_days=10,
                                                     requested_leave_days=5))
        print(response)

        # If the Employee is eligible, grant them leave days.
        if response.eligible:
            leaveRequest = stub.grantLeave(pb.Employee(employee_id=1,
                                                       name='Peter Pan',
                                                       accrued_leave_days=10,
                                                       requested_leave_days=5))
            print(leaveRequest)
    # Catch any raised errors by grpc.
    except grpc.RpcError as e:
        print("Error raised: " + e.details())

if __name__ == '__main__':
    main()
