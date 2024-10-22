import { IBlog } from '@/type/blog';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import React from 'react';

const BlogCard = ({blog}:{blog:IBlog}) => {
    return (
        <div>
            <Card className='w-full' >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={blog.title}
              className="w-full object-cover h-[140px]"
              src={blog.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{blog.title}</b>
            <p className="text-default-500"></p>
          </CardFooter>
        </Card>
        </div>
    );
};

export default BlogCard;