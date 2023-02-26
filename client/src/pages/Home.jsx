import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Title 1",
      desc: "Description 1",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Ffree&psig=AOvVaw1S6eicgVsCx5ulf0o1pkJk&ust=1677458195261000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjNpO_4sf0CFQAAAAAdAAAAABAE",
    },
    {
      id: 2,
      title: "Title 2",
      desc: "Description 2",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522challenges%2Bahead%2522&psig=AOvVaw1S6eicgVsCx5ulf0o1pkJk&ust=1677458195261000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjNpO_4sf0CFQAAAAAdAAAAABAJ",
    },
    {
      id: 3,
      title: "Title 3",
      desc: "Description 3",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522challenges%2Bahead%2522&psig=AOvVaw1S6eicgVsCx5ulf0o1pkJk&ust=1677458195261000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjNpO_4sf0CFQAAAAAdAAAAABAQ",
    },
    {
      id: 4,
      title: "Title 4",
      desc: "Description 4",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw1835WzZI7d2-EXhiCQVPHK&ust=1677465321803000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKihh7eTsv0CFQAAAAAdAAAAABAE",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>View More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
