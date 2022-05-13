
import FilmList from './FilmList';
import useFetch from './useFetch';


const Home = () => {
   
 const{data: films, isPending, error} = useFetch('http://localhost:8000/films');
    //const [name, setName] = useState("Rober Zemeckis");

    // const handleDelete = (id) => { // sukuria nauja saraso be pasirinkto id, naudojama kai nera json failo
    //     const newFilms = films.filter(film => film.id !== id);
    //     setFilms(newFilms);

   


        // console.log('use effect run');
        // console.log(name);
    // }, [])

    //let name = "Robert Zemeckis";
    //const handleClick = () => {
    // name = 'Victor Salva';
    // console.log(name);
    //     setName('Victor Salva');
    //     setAge(30);
    // }

    // const handleClick = (e) =>{
    //     console.log("Hello, films",e);
    // }
    // const handleClickAgain = (name,e) => {
    //     console.log('hello, ' + name, e.target);
    // }


    return (
        <div className="home">
            {error && <div> { error} </div>}
            {isPending && <div>Loading...</div>}
            {films && <FilmList films={films} title="All Films" />}
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

export default Home;