import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";

function SearchMovies() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);


    const searchMovies = async (e) => {
        e.preventDefault();
        // console.log("i m submitting");
        // let query=e.target.value;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=6abc3ab295baa7a8de2ae700cb89a1a9&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results);
        } catch (err) {
            console.error(err);
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        setQuery(value)


    }
    return (
        <>
        <Form
        handleChange={handleChange}
        searchMovies={searchMovies}
        />
        <Card movies={movies}/>
        {/* <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input
                className="input"
                type="text"
                name="query"
                value={query}
                placeholder="i.e. Jurassic Park"
                // onChange={(e)=>setQuery(e.target.value)}
                onChange={handleChange}
            />
            <button className="button" type="submit">Search</button>

        </form> */}
        </>
    )
}
export default SearchMovies;