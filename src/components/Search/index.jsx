import SearchCompass from './SearchCompass';
import React from 'react';
import styles from './Search.module.scss'
import CloseIcon from './CloseIcon';

const Search = ({ searchValue, setSearchValue }) => {
    
    return (
        <div className={styles.wrapper}>
            <SearchCompass />
            <input 
            className={styles.input} 
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            type="text" 
            placeholder='Поиск пиццы...' 
            />
            {searchValue && <CloseIcon setSearchValue={setSearchValue}/>}
        </div>
    );
};

export default Search;