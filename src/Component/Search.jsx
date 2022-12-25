import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className='searchForm'>
        <input type="text" placeholder="Search User"/>
      </div>
      <div className="userChat">
      <img src="https://images.pexels.com/photos/3413359/pexels-photo-3413359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo"></img>
      <div className="userChatInfo">
        <span>Bibek</span>
      </div>
      </div>

    </div>
  )
}

export default Search