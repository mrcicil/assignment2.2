import Genre from "./Genre";

function Container (){
    return <>
    <h1>Movie App</h1>
    <Genre name = 'Comedy' description='Comedy is a genre of dramatic works intended to be humorous or amusing by inducing laughter, especially in theatre, film, stand-up comedy, television, radio, books, or any other entertainment medium.' 
    movieTitle1='TED' year1='2012'
    movieTitle2='The Mask' year2='1994'/>
    <Genre name = 'Romance' description='A romance or romantic novel is a genre fiction novel that primarily focuses on the relationship and romantic love between two people, typically with an emotionally satisfying and optimistic ending.'
    movieTitle1='Titanic' year1='1997'
    movieTitle2='Twilight' year2='2008'/>
    </>
}

export default Container;