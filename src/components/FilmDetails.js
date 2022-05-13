import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
//import {useHistory} from 'react-router-dom';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';



const FilmDetails = () => {
    //const linkToHost ='http://localhost:8000/films/';
    const { id } = useParams();
    const history = useNavigate();
   const { data: film, error, isPending } = useFetch('http://localhost:8000/films/' + id);
   //const { producer, error, isPending } = useFetch('http://localhost:8000/producers/' + id);
  // const { data: film, error, isPending } = useFetch(linkToHost + id);
  //  const history = useHistory();
  //  const [editId, setEditId] = useState(null);

    const handleClick = () => {
        fetch('http://localhost:8000/films/'+ film.id, {
            method: 'DELETE'
        }).then(() => {
                history('/');
        });
    }

    // const handleClickEdit = () => {
    //     fetch('http://localhost:8000/films/' + film.id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //             history.push('/');
    //     });
    // }


    return (
        <div className="film-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {film && (
                <article>
                    <h2>{film.title}</h2>
                    <p>Film by {film.producerName}</p>
                    <div>{film.storyline}</div>
                    {/* <button onClick={handleClickEdit}>edit</button> */}
                    {/* <button><Link to="/edit">edit</Link></button>  */}
                    <Link to={'/edit/'+film.id}><button>edit</button></Link>
                   
                    <button onClick={handleClick}>delete</button>
                </article>
            )}

        </div>
    );
}

export default FilmDetails;