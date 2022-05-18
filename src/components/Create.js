import { useState } from "react";
//import {useHistory} from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import useFetch from './useFetch';


const Create = () => {
    // const [films,setFilms] = useState([]);

    const [title, setTitle] = useState('');
    const [storyline, setStoryline] = useState('');
    const [producerName, setProducerName] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();
    const{data: producers, isPending2, error} = useFetch('http://localhost:8000/producers');


    const handleSubmit =(e) => {
        e.preventDefault();
        const film ={title, storyline, producerName};

        setIsPending(true);

        fetch('http://localhost:8000/films',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(film)
        }).then(() => {
            console.log('new film added');
            setIsPending(false);
           // history.go(1);
           history('/');
        })

       //console.log(film);
    }
    


    return (
        <div className="create">
            <h2>Add a New Film</h2>

            <form onSubmit={handleSubmit}>
                <label> Film title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Film storyline:</label>
                <textarea
                    required
                    value={storyline}
                    onChange={(e) => setStoryline(e.target.value)}
                ></textarea>
                <label>Film producer:</label>
                
                <select
                    value={producerName}
                    onChange={(e) => setProducerName(e.target.value)}
                >
                    <option value=""></option>
                    {/* <option value="Victor">Victor</option>
                    <option value="Robert">Robert</option>
                    <option value="Konstantin">Konstantin</option> */}
                    {producers&&producers.map((producer) => (<option value={producer.name}>{producer.name}</option>
                    ))}
                </select>
                {!isPending && <button>Add Film</button>}
                {isPending && <button disabled className="addButton">Adding film...</button>}
                <p>{title}</p>
                <p>{storyline}</p>
                <p>{producerName}</p>
                

                
            </form>
        </div>
    );
}

export default Create;