import React from 'react'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Enter Message" />
      <div className="send">
        <img src="https://www.svgrepo.com/show/50846/file.svg" alt="" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src="https://www.svgrepo.com/show/25443/photo.svg" alt="" />
        </label>
        <button>Send</button>
      </div>
      </div>
  )
}

export default Input