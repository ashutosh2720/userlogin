import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("userDetails");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <p className="mt-12 mb-12 text-3xl text-center text-black">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Ashutosh</span>
        </span>
      </p>

      <section className="mt-6 mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-black/90">Blog</h1>
        <article>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet officia
          autem, voluptates dolores quis exercitationem tempora corrupti!
          Quaerat commodi tempore in eligendi nesciunt fuga aperiam voluptates,
          quam quos consectetur. A libero quisquam fugit perferendis. Dolorum
          doloribus optio dolores cupiditate facilis.
        </article>
      </section>
    </div>
  );
};

export default Home;
