import { Link } from "react-router-dom";



const ProducerList = ({ producers, name }) => {


    return (
        <div className="film-list">
            <h2>{name}</h2>
            {producers.map((producer) => (
                <div className="film-preview" key={producer.id}>
                    <Link to={`/producers/${producer.id}`}>

                        {/* <h2>{producer.name}</h2> */}
                        <p>Name of producer:  {producer.name}</p>
                        <p>Country of producer:  {producer.country}</p>

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