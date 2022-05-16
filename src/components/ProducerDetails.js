import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
// import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";



const ProducerDetails = () => {
    const { id } = useParams();
    const history = useNavigate();
   const {data: producer, error, isPending } = useFetch('http://localhost:8000/producers/' + id);// po klaustuku produsers
  
    const handleClick = () => {
        fetch('http://localhost:8000/producers/'+ producer.id, {
            method: 'DELETE'
        }).then(() => {
                history('/producers');
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
            {producer && (
                <article>
                    <h2>{producer.name}</h2>
                    <p>Producer name:  {producer.name}</p>
                    <p>Producer country:  {producer.country}</p>
                    {/* <div>{producer.country}</div> */}
                    {/* <button onClick={handleClickEdit}>edit</button>  */}
                     {/* <button><Link to="/edit">edit</Link></button>  */}
                    <Link to={'/producerEdit/'+producer.id}><button>edit</button></Link>
                   
                    <button onClick={handleClick}>delete</button>
                </article>
            )}

        </div>
    );
}

export default ProducerDetails;