import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';


const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [text, setText] = useState(searchParams.get('q') || '');
    const changeHandler = (e) => { 
        setText(e.target.value)
    }
    useEffect(() => { 
        setSearchParams({q: text})
    }, [text])

    return (
      <div>
        <input type="text" value={text} placeholder="Search..." onChange={changeHandler} />
      </div>
    );
}

export default Search;
