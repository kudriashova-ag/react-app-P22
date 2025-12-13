import React, { useEffect, useRef, useState } from "react";
import { Link, useFetcher, useLoaderData, useLocation } from "react-router";

const Search = () => {
  const loaderData = useLoaderData();
  const [users, setUsers] = useState(loaderData.items);
  const [page, setPage] = useState(2);
  const lastUserRef = useRef();
  const location = useLocation();
  const fetcher = useFetcher();  // запити до роутерів без переходу на іншу сторінку

  // отримуємо поточний пошуковий запит
  const params = new URLSearchParams(location.search);  
  const query = params.get("q");

  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Is visisble");
          fetcher.load(`/search?q=${query}&page=${page}`);
        } else {
          console.log("Insible");
        }
      },
      {
        threshold: 0,
        rootMargin: "200px",
      }
    );

    observer.observe(lastUserRef.current);
  }, []);

  return (
    <div>
      <h1>Search Results</h1>
      <div className="user-list">
        {users.map((user, index) => (
          <div
            key={user.id}
            ref={index === users.length - 1 ? lastUserRef : null}
          >
            <Link to={`/users/${user.login}`}>
              <img src={user.avatar_url} alt="" />
              {user.login}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;