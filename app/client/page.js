'use client';
import { useState } from 'react';

const ClientPage = () => {
  const [count, setCount] = useState(0);
  console.log('client component');
  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        Increase
      </button>
    </div>
  );
};

export default ClientPage;
