import { useState } from "react";
//import {useHistory} from 'react-router-dom';
import {useNavigate} from "react-router-dom"


const CreateProducer = () => {
    const [producerName, setProducerName] = useState('');
    const [country, setCountry] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();


    const handleSubmit =(e) => {
        e.preventDefault();
        const producer ={producerName, country};

        setIsPending(true);

        fetch('http://localhost:8000/producers',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(producer)
        }).then(() => {
            console.log('new producer added');
            setIsPending(false);
           // history.go(1);
           history('/');
        })

       //console.log(film);
    }
    


    return (
        <div className="create">
            <h2>Add a New Producer</h2>

            <form onSubmit={handleSubmit}>
                <label> Producer name:</label>
                <input
                    type="text"
                    required
                    value={producerName}
                    onChange={(e) => setProducerName(e.target.value)}
                />
                <label>Producer is from country:</label>
                <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                {/* <textarea
                    required
                    value={storyline}
                    onChange={(e) => setStoryline(e.target.value)}
                ></textarea> */}
                {/* <label>Film producer:</label>
                
                <select
                    value={producer}
                    onChange={(e) => setProducer(e.target.value)}
                >
                    <option value=""></option>
                    <option value="Victor">Victor</option>
                    <option value="Robert">Robert</option>
                </select> */}
                {!isPending && <button>Add Producer</button>}
                {isPending && <button disabled className="addButton">Adding film...</button>}
                <p>{producerName}</p>
                <p>{country}</p>
                {/* <p>{producer}</p> */}

                
            </form>
        </div>
    );
}

export default CreateProducer;