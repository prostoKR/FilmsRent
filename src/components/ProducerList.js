import { Link } from "react-router-dom";



const ProducerList = ({ producers, producerName }) => {


    // const films = props.films;
    // const title = props.title;

    // console.log(props.films);

    return (
        <div className="film-list">
            <h2>{producerName}</h2>
            {producers.map((producer) => (
                <div className="film-preview" key={producer.id}>
                    <Link to={`/producers/${producer.id}`}>

                        <h2>{producer.producerName}</h2>
                        <p>Name of producer:  {producer.producerName}</p>
                    </Link>
                    {/* <button onClick={() => handleDelete(film.id)}>delete film</button>  */}
                    {/* pasirenka id */}
                    {/* <p>Description {blog.storyline}</p> */}

                </div>
            ))}
        </div>
    );
}

export default ProducerList;