import React from 'react';
import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import Image from 'next/image';

const fetchDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch a drink...');
  }
  return res.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await fetchDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Back to Drinks
      </Link>
      <Image
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt={title}
        width={300}
        height={300}
        src={imgSrc}
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
