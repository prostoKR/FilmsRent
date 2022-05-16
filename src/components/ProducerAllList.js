
import ProducerList from './ProducerList';
import useFetch from './useFetch';


const ProducerAllList = () => {
   
 const{data: producers, isPending, error} = useFetch('http://localhost:8000/producers');


    return (
        <div className="home">
            {error && <div> { error} </div>}
            {isPending && <div>Loading...</div>}
            {producers && <ProducerList producers={producers} title="All Producers" />}
            {/* <button onClick={() => setName("Anna")}>change name</button>
            <p>{ name}</p> */}
            {/* <FilmList films={films.filter((film) => film.producer ==='Robert Zemeckis')} title = "Films of Robert"/> */}
            {/* // )} */}



            {/* <h2>Homepage</h2>
             <p>{ name } is { age} years old</p>
             <button onClick={handleClick}>Click me</button> */}

            {/* <button onClick={(e) =>{
                 handleClickAgain("other film", e)
             }}>Click me again</button> */}
        </div>
    );
}

export default ProducerAllList;