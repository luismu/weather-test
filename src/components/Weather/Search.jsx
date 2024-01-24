import React, { useState } from 'react';

import search_icon from '../Assets/search.png';

function Search({onSubmit}) {
  const [address, setAddress] = useState('');
  const [suggestedText, setSuggestedText] = useState('4600 Silver Hill Rd, Washington, DC 20233');
  const [isCopied, setIsCopied] = useState(false);

  const handleSearch = () => {
       if ( !address) {
      return;
    }
    onSubmit(address);
    setIsCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(suggestedText)
    .then(() => setIsCopied(true))
    .catch(() => setIsCopied(false));
  };
  
  return (
    <>
    <div className="top-bar">
        <input placeholder='Address' type='text' onChange={(e) => {setAddress(e.target.value)}}></input>
        <div className='search-icon' onClick={handleSearch}>
          <img src={search_icon} alt="" />
        </div>
        
      </div>
      {suggestedText && (
        <div className="suggested-text">
          <p>{suggestedText}</p>
          <button onClick={handleCopy}>{isCopied ? 'Copied!' : 'Copy'}</button>
        </div>
      )}
    </>
  )}

export default Search;