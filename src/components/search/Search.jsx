import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()

  const [text, setText] = useState(searchParams.get("q") || "");
  const changeHandler = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    setSearchParams({ q: text });
  }, [text]);
    
    const keyDownHandler = (e)=>{ 
        if (e.key === 'Enter') {
            navigate(`/search?q=${text}`)
      }
    }

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Search..."
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};

export default Search;
