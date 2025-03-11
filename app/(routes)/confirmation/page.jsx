import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Confirmation() {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center'>
        <CheckCircle className='h-20 w-20 text-green-500 mb-4'/>
        <h2 className='font-bold text-3xl'>Your Meeting is Scheduled Successfully!</h2>
        <h2 className='text-lg text-gray-500 mt-2'>A confirmation email has been sent.</h2>
        <Link href={'/'}>
            <Button className="mt-5 px-6 py-2">Thank You</Button>
        </Link>
    </div>
  );
}

export default Confirmation;
