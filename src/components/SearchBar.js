import React from 'react';

export default function SearchBar (props) {

    return (
        <label className="contacts-search">
            <input
                name="search"
                onChange={(e) => props.onChange(e.target.value)}
                type="text"
                placeholder="Search by name"
            />
        </label>
    );

}