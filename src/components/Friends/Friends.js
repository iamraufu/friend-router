import React from 'react';
//eslint-disable-next-line
import { Link, useHistory } from 'react-router-dom';
import './Friends.css'

const Friends = (props) => {
      //eslint-disable-next-line
      const { address, street,suite,company,email,id,name,phone,username,website} = props.friends;
      const history = useHistory();
      const handleClick = (friendId)=>{
            const url = `/friend/${friendId}`;
            history.push(url)
      }
      return (
            <div className="friends-container">
                  <h3>My Name is {name}</h3>
                  {/* <Link to={`/friend/${id}`}>Check More Details of {username}</Link> */}
                  <button onClick={()=>handleClick(id)}>Check More Details of {username}</button>
                  
            </div>
      );
};

export default Friends;