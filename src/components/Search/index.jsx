import SearchCompass from './SearchCompass';
import React from 'react';
import styles from './Search.module.scss'
import CloseIcon from './CloseIcon';
import { useContext } from 'react';
import { AppContext } from 'App';

const Search = () => {
    
    const {searchValue, setSearchValue} = useContext(AppContext)

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