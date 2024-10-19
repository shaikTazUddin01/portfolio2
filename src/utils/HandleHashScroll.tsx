'use'
import { Button } from '@nextui-org/react';
import Link from 'next/link';

import React from 'react';

const HandleHashScroll = ({targetId,label}:{targetId:string,label:string}) => {
    
  const handleScroll=(e:React.MouseEvent,targetId:string)=>{
    e.preventDefault();
    const targetElement=document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({behavior:"smooth"})
    }
  }

    return (
        <div>
            <Button as={Link} className="text-default-50  bg-[#3a3a3a88]" href={targetId} variant="bordered" onClick={(e)=>handleScroll(e,targetId)}>
           {label}
          </Button>
        </div>
    );
};

export default HandleHashScroll;