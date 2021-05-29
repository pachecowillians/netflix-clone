import { useEffect, useState } from 'react';
import FeaturedMovie from './components/FeaturedMovie';
import MovieRow from './components/MovieRow';
import TMDB from './TMDB'
import styles from './App.module.css';
import Header from './components/Header';


function App() {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            let list = await TMDB.getHomeList();
            setMovieList(list);

            let originalsNetflix = list.filter(movie => movie.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originalsNetflix[0].items.results.length - 1))
            let chosen = originalsNetflix[0].items.results[randomChosen];

            let chosenInfo = await TMDB.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }

        loadAll();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, [])

    return (
        <div className={styles.page}>

            <Header black={blackHeader} />

            {featuredData && <FeaturedMovie item={featuredData} />}
            <section className={styles.lists}>
                {
                    movieList.map((movie, key) => (
                        <MovieRow key={key} title={movie.title} items={movie.items} />
                    ))
                }
            </section>

            <footer>
                Image rights to Netflix
                <br />
                Data from themoviedb.org
            </footer>

            {
                movieList.length <= 0 &&
                <div className={styles.loading}>
                    <img src={'https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif'} alt={'Loading'} />
                </div>
            }
        </div>
    );
}

export default App;

// https://api.themoviedb.org/3/movie/550?api_key=38c007f28d5b66f36b9c3cf8d8452a4b
// npm install @material-ui/core
// npm install @material-ui/icons