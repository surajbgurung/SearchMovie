import React from "react";
function Form(props){
    console.log(props);
    return(
        <form className="form" onSubmit={props.searchMovies}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input
                className="input"
                type="text"
                name="query"
                value={props.query}
                placeholder="i.e. Jurassic Park"
                // onChange={(e)=>setQuery(e.target.value)}
                onChange={props.handleChange}
            />
            <button className="button" type="submit">Search</button>

        </form>
    )
}
export default Form;