"use client";

import { useGetskillQuery } from "@/redux/feature/skill/skillApi";
import { ISkill } from "@/type/skill";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";


const ManageSkill = () => {
  const { data, isLoading: isskillLoading } = useGetskillQuery(undefined);
  const skills= data?.data;
  console.log(skills);



  return (
    <div className="p-10">
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Skill No.</TableColumn>
          <TableColumn>Skill Name</TableColumn>
          <TableColumn>Estimate(%)</TableColumn>
          
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
          {/* loading state */}
          {isskillLoading
            ? Array(6)
                .fill(null)
                .map((_, idx) => (
                  <TableRow key={idx}>
                    {Array(3)
                      .fill(null)
                      .map((_, idx) => (
                        <TableCell key={idx}>
                          <div className="bg-gray-200 rounded-md w-full h-8 animate-pulse"></div>
                        </TableCell>
                      ))}
                  </TableRow>
                ))
            : // show table data
            skills?.map((skill: ISkill,idx:number) => (
                <TableRow key={skill?._id}>
                    <TableCell>
                        {idx+1}
                    </TableCell>
                  
                  <TableCell >{skill?.name}</TableCell>
                  <TableCell >{skill?.estimate}</TableCell>
                  
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageSkill;
