import { Link } from "react-router-dom";

const FilmList = ({ films, title }) => {


    // const films = props.films;
    // const title = props.title;

    // console.log(props.films);

    return (
        <div className="film-list">
            <h2>{title}</h2>
            {films.map((film) => (
                <div className="film-preview" key={film.id}>
                    <Link to={`/films/${film.id}`}>

                        <h2>{film.title}</h2>
                        <p>Wryte by:  {film.producer.name}</p>
                    </Link>
                    {/* <button onClick={() => handleDelete(film.id)}>delete film</button>  */}
                    {/* pasirenka id */}
                    {/* <p>Description {blog.storyline}</p> */}

                </div>
            ))}
        </div>
    );
}

export default FilmList;