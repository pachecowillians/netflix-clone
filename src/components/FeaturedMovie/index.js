import React from 'react'
import styles from './FeaturedMovie.module.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

function FeaturedMovie({ item }) {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let genreIndex in item.genres) {
        genres.push(item.genres[genreIndex].name);
    }

    let description = item.overview;
    if (description.split(' ').length > 40) {
        description = description.split(' ').slice(0, 40).join(' ') + '...';
    }

    return (
        <section className={styles.featured} style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className={styles.featuredVertical}>
                <div className={styles.featuredHorizontal}>
                    <div className={styles.featuredName}>{item.original_name}</div>
                    <div className={styles.featuredInfo}>
                        <div className={styles.featuredPoints}>{item.vote_average} points</div>
                        <div className={styles.featuredYear}>{firstDate.getFullYear()}</div>
                        <div className={styles.featuredSeasons}>{item.number_of_seasons} season{(item.number_of_seasons !== 1 && 's')}</div>
                    </div>
                    <div className={styles.featuredDescription}>{description}</div>
                    <div className={styles.featuredButtons}>
                        <a href={`/watch/${item.id}`} className={styles.featuredWatchButton}><PlayArrowIcon style={{ marginRight: 5 }} /> Watch</a>
                        <a href={`/list/add/${item.id}`} className={styles.featuredMyListButton}><AddIcon style={{ marginRight: 5 }} /> My list</a>
                    </div>
                    <div className={styles.featuredGenres}><strong>Genres: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedMovie;