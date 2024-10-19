"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const HandleHashScrollOutSiteHome = ({
  targetId,
  label,
}: {
  targetId: string;
  label: string;
}) => {
  

  const router = useRouter();
  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    // router.push("/");
    e.preventDefault();

    router.push(`/${targetId}`);
  };

  return (
    <div>
      <Button
        as={Link}
        className="text-default-50  bg-[#3a3a3a88]"
        href={targetId}
        variant="bordered"
        onClick={(e) => handleScroll(e, targetId)}
      >
        {label}
      </Button>
    </div>
  );
};

export default HandleHashScrollOutSiteHome;
