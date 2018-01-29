package main

import (
	"context"
	pb "github.com/johnkariuki/grpc-protobuf-tutorial/proto"
	"log"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

const (
	port = ":50050"
)

type employeeLeaveDays struct{}

func (e *employeeLeaveDays) EligibleForLeave(ctx context.Context, emp *pb.Employee) (*pb.LeaveEligibility, error) {
	return &pb.LeaveEligibility{emp.AccruedLeaveDays >= emp.RequestedLeaveDays}, nil
}

func (e *employeeLeaveDays) GrantLeave(ctx context.Context, emp *pb.Employee) (*pb.LeaveFeedback, error) {
	return &pb.LeaveFeedback{true, emp.AccruedLeaveDays - emp.RequestedLeaveDays, emp.RequestedLeaveDays}, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterEmployeeLeaveDaysServiceServer(s, &employeeLeaveDays{})
	reflection.Register(s)
	if err = s.Serve(lis); err != nil {
		log.Fatalf("failed to serve %v", err)
	}
}
