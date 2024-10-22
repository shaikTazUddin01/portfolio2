"use client";
import { TPortfolio } from "@/type/portfolio";
import { Image } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import { useGetSpecificWorkQuery } from "@/redux/feature/Mywork/MyworkApi";
import PortFolioDLoading from "@/components/ui/Loading/PortfolioDetailsLoading";
// import { BackgroundBeams } from "@/components/ui/Background";

const MyProject = () => {
  const { projectName } = useParams();

  const decodeUrl = decodeURIComponent(projectName as unknown as string);

  const { data, isLoading } = useGetSpecificWorkQuery(decodeUrl);

  const portfolio: TPortfolio = data?.data;

if(isLoading){
  return <PortFolioDLoading/>
}

  return (
    <div className="bg-[#151515] min-h-screen text-default-100">
      <div className="max-w-[1100px] mx-auto py-10 px-5 lg:px-20 shadow-xl shadow-[#fddc7a17] z-20 bg-[#111111]">
        <div className="flex justify-center max-h-[400px] ">
          <Image
            src={portfolio?.image}
            className="w-full h-full rounded-md object-cover border"
            alt="img"
          />
        </div>
        <div className=" mx-auto pt-8">
          <h1 className="text-2xl">
            Project Name: <span className="text-lg">{portfolio?.name}</span>
          </h1>
          <h1 className=" mt-2 text-justify">{portfolio?.details}</h1>
          {/* technology */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* frontend */}
            <div className="">
              <h1 className="text-xl">Frontend Technology:</h1>
              <ul className="pt-2">
                {portfolio?.useTechnlogyClient?.map(
                  (item: string, idx: number) => (
                    <li key={idx} className="flex items-center  gap-1">
                      <span className="text-[10px]">
                        <FaCircle />
                      </span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* backend */}
            <div className="">
              <h1 className="text-xl">Backend Technology:</h1>
              <ul className="pt-2">
                {portfolio?.useTechnlogyServer?.map(
                  (item: string, idx: number) => (
                    <li key={idx} className="flex items-center  gap-1">
                      <span className="text-[10px]">
                        <FaCircle />
                      </span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          {/* project Feature and essintial links */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="">
              <h1 className="text-xl">Project Feature:</h1>
              <ul className="pt-5">
                {portfolio?.feature?.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start  gap-1 mb-2">
                    <span className="text-[10px]">
                      <FaCircle />
                    </span>
                    <span className="-mt-[6px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* necessary link */}
            <div>
              {/* project links */}

              <div className="flex gap-1 flex-col">
                <h1 className="text-xl">Frontend Live Link : </h1>
                {portfolio?.livesiteClient ? (
                  <Link
                    href={portfolio?.livesiteClient as string}
                    className="hover:text-primaryColor"
                  >
                    {portfolio?.livesiteClient}
                  </Link>
                ) : (
                  <p>No link avaliable</p>
                )}
              </div>
              {portfolio?.adminDashBoardLink && (
                <div className="flex gap-1 flex-col mt-2">
                  <h1 className="text-xl">Admin Dashboard : </h1>
                  <Link
                    href={portfolio?.adminDashBoardLink as string}
                    className="hover:text-primaryColor"
                  >
                    {portfolio?.adminDashBoardLink}
                  </Link>
                </div>
              )}
              <div className="flex  items-start flex-col mt-2">
                <h1 className="flex-1 text-xl">Backend Live Link:</h1>
                {portfolio?.livesiteServer ? (
                  <p>
                    <Link
                      href={portfolio?.livesiteServer as string}
                      className="hover:text-primaryColor"
                    >
                      {portfolio?.livesiteServer}
                    </Link>
                  </p>
                ) : (
                  <p>no link avaliable</p>
                )}
              </div>
              {/* git hub links */}
              <div className="flex  items-start flex-col mt-2">
                <h1 className="flex-1 text-xl">Frontend Github Link:</h1>
                {portfolio?.gitClient ? (
                  <p>
                    <Link
                      href={portfolio?.gitClient as string}
                      className="hover:text-primaryColor"
                    >
                      {portfolio?.gitClient}
                    </Link>
                  </p>
                ) : (
                  <p>no link avaliable</p>
                )}
              </div>
              <div className="flex  items-start flex-col mt-2">
                <h1 className="flex-1 text-xl">Backend Github Link:</h1>
                {portfolio?.gitServer ? (
                  <p>
                    <Link
                      href={portfolio?.gitServer as string}
                      className="hover:text-primaryColor"
                    >
                      {portfolio?.gitServer}
                    </Link>
                  </p>
                ) : (
                  <p>no link avaliable</p>
                )}
              </div>
            </div>
          </div>
          {/* admin login details */}
          {portfolio?.adminEmail && portfolio?.adminPassword && (
            <div className="mt-5">
              <h1 className="text-xl mb-3">Admin Login Information :</h1>
              <p>
                Admin Email : <span>{portfolio?.adminEmail}</span>
              </p>
              <p>
                Admin Password : <span>{portfolio?.adminPassword}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProject;
