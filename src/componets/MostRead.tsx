import { MostReadNewsArticle } from '@/app/type';
import React from 'react';

const fetchPromise = async()=>{
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    return res.json();
}

const MostRead = async() => {
    const {data} = await fetchPromise();
    return (
        <div className='card p-2 bg-gray-100 border border-gray-100'>
            <h2 className='text-red-800 text-xl mb-4 font-bold'>সর্বাধিক পঠিত</h2>
            <div className='grid gap-3'>
                {
                    data.map((n:MostReadNewsArticle, i:number) => <div className='flex items-center gap-3' key={n.id}> 
                        <p className='text-red-800 font-bold'>{i+1}</p>
                        <h2>{n.title}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MostRead;