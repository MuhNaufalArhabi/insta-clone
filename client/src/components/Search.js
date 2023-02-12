import {useState} from 'react';

export default function Search() {
    const [search, setSearch] = useState('');
    
    return (
        <div className='search-bar'>
        <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        </div>
    );
}