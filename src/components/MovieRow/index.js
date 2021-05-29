import React, { useState } from 'react'
import styles from './MovieRow.module.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function MovieRow({ title, items }) {

    const [scrollList, setScrollList] = useState(0)

    const handleLeftArrow = () => {
        let margin = scrollList + Math.round(window.innerWidth / 2);
        if (margin > 0) {
            margin = 0;
        }
        setScrollList(margin);
    }

    const handleRightArrow = () => {
        let margin = scrollList - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 150;
        if ((window.innerWidth - listWidth) > margin) {
            margin = window.innerWidth - listWidth - 60;
        }
        setScrollList(margin);
    }

    return (
        <div className={styles.movieRow}>
            <h2>{title}</h2>
            <div className={styles.movieRowLeft} onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className={styles.movieRowRight} onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
            <div className={styles.movieRowListArea}>
                <div className={styles.movieRowList} style={{
                    marginLeft: scrollList,
                    width: items.results.length * 150
                }}>
                    {
                        items.results.length > 0 && items.results.map((item, key) => (
                            <div key={key} className={styles.movieRowItem}>
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default MovieRow;