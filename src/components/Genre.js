import Movie from "./Movie";

function Genre({name, description, movieTitle1, year1, movieTitle2, year2}){
return (
    <>
    <h2>{name}</h2>
   
    <p>{description}</p>
    <div>
    <input type='checkbox' /><label><Movie title={movieTitle1} year = {year1}/></label>
    </div>
    <div>
    <input type='checkbox' /><label><Movie title={movieTitle2} year = {year2}/></label>
    </div>
    
   
    
    </>
)
}

export default Genre;