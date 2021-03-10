import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './FriendDetail.css';

const FriendDetail = () => {
      const {friendId} = useParams();
      const [friend,setFriend] = useState({});
      //eslint-disable-next-line
      const { address, street,suite,company,email,id,name,phone,username,website} = friend;
      useEffect(() => {
            const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
            fetch(url)
                  .then(response => response.json())
                  .then(res => setFriend(res))
                  // eslint-disable-next-line
      },[])
      return (
            <div className="friends-container">
                  <h3>My Name is {name}</h3>
                  <h4>My Phone number is {phone}</h4>
                  {/* <p>I Live near {address.city} {street} {suite} {address.zipcode} </p>
                  <p>Name of my Company is {company.name}</p> */}
                  <p>My email {email} 
                  <br/>
                  My website is {website}</p>
            </div>
      );
};

export default FriendDetail;