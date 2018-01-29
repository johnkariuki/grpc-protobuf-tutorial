package main

import (
	pb "github.com/johnkariuki/grpc-protobuf-tutorial/proto"
	"google.golang.org/grpc"
	"log"
	"context"
	"fmt"
)

var employees = map[string]*pb.Employee{
	"eligible": &pb.Employee{12,"Peter",19,10},
	"ineligible": &pb.Employee{14,"John",13,29},
}

func main(){
	conn,err := grpc.Dial("localhost:50050",grpc.WithInsecure())
	if err != nil {
		log.Fatalf("did not connect :%v",err)
	}
	defer conn.Close()
	c := pb.NewEmployeeLeaveDaysServiceClient(conn)
	for _,emp := range employees {
		eligibility, err := c.EligibleForLeave(context.Background(), emp)
		if err != nil {
			log.Fatalf("got error %v", err)
		}
		fmt.Printf("Eligibility of %v : %v\n",emp.Name,eligibility.Eligible)
	}

}
