import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useFetch from "./useFetch";


const Edit = ({ films }) => {
    let { id } = useParams();
    
    // let film = films[id - 1];
    let isPending = false;
    const [title, setTitle] = useState('');
    const [storyline, setStoryline] = useState('');
    const [producer, setProducer] = useState('');

    // const updateFilm() = () => {
    function updateFilm(e) {
        e.preventDefault();
        let updFilm = { title, storyline, producer };

        const requestOption = {
            method: 'PUT',
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify(updFilm)
        };

        fetch('http://localhost:8000/films/' + id, requestOption)
            .then(response => response.json())
            .then(data => {
                alert('Filmas atnaujintas');
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }



    return (
        <div className="edit">
            Edit form
            <>
                <h1>Create New Film</h1>
                <form onSubmit={updateFilm}>
                    <label> Film title:</label><br/>
                    <input
                        type="text"
                        id="film-title"
                        name="film-title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div>
                        <label>Film storyline:</label><br />
                        <textarea
                            name="film-storyline"
                            id="film-storyline"
                            value={storyline}
                            onChange={(e) => setStoryline(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
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
                    </div>

                    {!isPending && <button>Save</button>}
                    {isPending && <button disabled className="addButton">Adding film...</button>}
                    <p>{title}</p>
                    <p>{storyline}</p>
                    <p>{producer}</p>


                </form>
            </>
        </div>
    );
}

export default Edit;