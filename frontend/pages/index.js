import React from "react";
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <p>Heyooo</p>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
    </>
  );
};

export default Home;
