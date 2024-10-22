import { FaCircle } from "react-icons/fa";
import { Skeleton } from "@nextui-org/react";

const PortFolioDLoading = () => {
  return (
    <div className="bg-[#151515] min-h-screen text-default-100">
      <div className="max-w-[1100px] mx-auto py-10 px-5 lg:px-20 shadow-xl shadow-[#fddc7a17] z-20 bg-[#111111]">
        {/* Image Skeleton */}
        <div className="flex justify-center max-h-[400px]">
          <Skeleton className="bg-default-700 w-full h-[400px] rounded-md object-cover" />
        </div>
        <div className="mx-auto pt-8">
          {/* Project Name Skeleton */}
          <Skeleton className="bg-default-700 w-[200px] h-[30px] mb-2" />
          <Skeleton className="bg-default-700 w-[100%] h-[60px] mb-4" />

          {/* Technology Section Skeleton */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Skeleton className="bg-default-700 w-[150px] h-[20px] mb-2" />
              <ul className="pt-2">
                {[...Array(4)].map((_, idx) => (
                  <li key={idx} className="flex items-center gap-1 mb-2">
                    <span className="text-[10px]">
                      <FaCircle />
                    </span>
                    <Skeleton className="bg-default-700 w-[80px] h-[15px]" />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Skeleton className="bg-default-700 w-[150px] h-[20px] mb-2" />
              <ul className="pt-2">
                {[...Array(4)].map((_, idx) => (
                  <li key={idx} className="flex items-center gap-1 mb-2">
                    <span className="text-[10px]">
                      <FaCircle />
                    </span>
                    <Skeleton className="bg-default-700 w-[80px] h-[15px]" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Feature and Links Skeleton */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Skeleton className="bg-default-700 w-[150px] h-[20px] mb-2" />
              <ul className="pt-5">
                {[...Array(3)].map((_, idx) => (
                  <li key={idx} className="flex items-start gap-1 mb-2">
                    <span className="text-[10px]">
                      <FaCircle />
                    </span>
                    <Skeleton className="bg-default-700 w-[250px] h-[15px]" />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Skeleton className="bg-default-700 w-[150px] h-[20px] mb-2" />
              {[...Array(2)].map((_, idx) => (
                <Skeleton key={idx} className=" bg-default-700 w-full h-[20px] mb-3" />
              ))}
            </div>
          </div>

          {/* Admin Info Skeleton */}
          <div className="mt-5">
            <Skeleton className="bg-default-700 w-[200px] h-[20px] mb-3" />
            <Skeleton className="bg-default-700 w-[300px] h-[15px] mb-2" />
            <Skeleton className="bg-default-700 w-[300px] h-[15px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolioDLoading;
