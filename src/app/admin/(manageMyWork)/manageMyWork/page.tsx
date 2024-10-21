"use client";
import { useGetMyWorkQuery } from "@/redux/feature/Mywork/MyworkApi";
import { TPortfolio } from "@/type/portfolio";
import {
  Image,
  Skeleton,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Link from "next/link";

const ManageMyork = () => {
  const { data, isLoading: isworkLoading } = useGetMyWorkQuery(undefined);
  console.log(isworkLoading);
  const myWorks = data?.data;
  return (
    <div className="p-10">
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Project Name</TableColumn>
          <TableColumn>Live Site(FrontEnd)</TableColumn>
          <TableColumn>Live Site(BackEnd)</TableColumn>
          <TableColumn>GitHub(FrontEnd)</TableColumn>
          <TableColumn>GitHub(BackEnd)</TableColumn>
        </TableHeader>
        <TableBody>
          {/* loading state */}
          {isworkLoading ? (
             Array(6)
             .fill(null)
             .map((_, idx) => (
               <TableRow key={idx}>
                {
                  Array(5)
                  .fill(null)
                  .map((_, idx) =>(
                 <TableCell key={idx}>
                   <div className="bg-gray-200 rounded-md w-full h-8 animate-pulse"></div>
                 </TableCell>
                  ))
                }
               </TableRow>
             ))
            
          ) : (
            // show table data
            myWorks?.map((myWork: TPortfolio) => (
              <TableRow key={myWork?._id}>
                <TableCell className="flex items-center gap-1">
                  <span>
                    <p>{myWork?.name}</p>
                  </span>
                </TableCell>
                <TableCell>
                  <Link
                    className="hover:text-blue-600"
                    target="_blank"
                    href={myWork?.livesiteClient}
                  >
                    {myWork?.livesiteClient}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    target="_blank"
                    className="hover:text-blue-600"
                    href={myWork?.livesiteServer}
                  >
                    {myWork?.livesiteServer}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    target="_blank"
                    className="hover:text-blue-600"
                    href={myWork?.gitClient}
                  >
                    {myWork?.gitClient}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    target="_blank"
                    className="hover:text-blue-600"
                    href={myWork?.gitServer}
                  >
                    {myWork?.gitServer}
                  </Link>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageMyork;
