import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-7xl">About Page</h1>
      <Link className="text-2xl" href="/">
        home page
      </Link>
    </div>
  );
};

export default AboutPage;
