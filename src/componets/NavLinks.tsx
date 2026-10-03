import { NewsCategory } from '@/app/type';
import Link from 'next/link';


type CategoriesResponse = {
  data: NewsCategory[];
};

const promiseData = async (): Promise<CategoriesResponse> => {
  const res = await fetch('https://news-api-v2.vercel.app/api/categories');

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
};

const NavLinks = async () => {
  const { data }: CategoriesResponse = await promiseData();
  const filteredData = data.filter(n=>n.scrapable);

  return (
    <div className='flex justify-center mt-2 gap-3'>
        <Link href="/">হোম</Link>
      {filteredData.map((n: NewsCategory, i: number) => (
        <Link href={`/category/${n.slug}`} key={n.slug || i}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;