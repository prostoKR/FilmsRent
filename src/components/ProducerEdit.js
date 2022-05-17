import { useParams } from 'react-router-dom';
import { useState } from 'react';



const ProducerEdit = ({ producers }) => {
    let { id } = useParams();
    
   
    let isPending = true;
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    
    function updateProducer(e) {
        e.preventDefault();
        let updProducer = { name, country };

        const requestOption = {
            method: 'PUT',
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify(updProducer)
        };

        fetch('http://localhost:8000/producers/' + id, requestOption)
            .then(response => response.json())
            .then(data => {
                alert('Produserio duomenys atnaujintos');
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }



    return (
        <div className="edit">
            
            <>
                <h1>Create New Producer</h1>
                <form onSubmit={updateProducer}>
                    <label> Producer name:</label><br/>
                    <input
                        type="text"
                        id="film-title"
                        name="film-title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div>
                        <label>Producer live in country:</label><br />
                        <textarea
                            name="film-storyline"
                            id="film-storyline"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        ></textarea>
                    </div>
                    {/* <div>
                        <label>Film producer:</label><br />

                        <select
                            name="producer"
                            id="producer"
                            value={producer}
                            onChange={(e) => setProducer(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="Victor">Victor</option>
                            <option value="Robert">Robert</option>
                        </select>
                    </div> */}

                    {!isPending && <button>Save</button>}
                    {isPending && <button disabled className="addButton">Adding producer...</button>}
                    <p>{name}</p>
                    <p>{country}</p>
                    


                </form>
            </>
        </div>
    );
}

export default ProducerEdit;