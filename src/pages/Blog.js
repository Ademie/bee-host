import React, { useState } from "react";
import "../styles/Blog.css";
import data from "../components/BlogData";

function Blog() {
  const [filter, setFilter] = useState("");

  // create a function that sets the filter with the target value of our event
  const searchText = (e) => {
    setFilter(e.target.value);
  };
  // returning based on key
  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <div className="container" id="blog">
      <div className="inputField">
        <h1 style={{ color: "white" }}>BLOG POSTS</h1>
        <input
          type="text"
          placeholder="Search For Posts"
          value={filter}
          onChange={searchText}
        />
      </div>
      {dataSearch.map((item, key) => {
        return (
          <div className="column">
            <div className="card" key={item.id}>
              <img src={item.img} className="img-top" />
              <div className="body">
                <h3 className="title">{item.title}</h3>
                <p className="text">{item.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;
