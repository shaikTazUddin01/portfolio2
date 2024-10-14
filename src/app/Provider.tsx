import FooterNav from '@/components/navbar/FooterNav';
import React, { ReactNode } from 'react';

const Provider = ({children}:{children:ReactNode}) => {
    return (
        <div>
            <div className='min-h-screen'>
            {children}
            </div>
            <div className='absolute bottom-2 flex justify-center w-full'>
            <FooterNav/>
            </div>
        </div>
    );
};

export default Provider;