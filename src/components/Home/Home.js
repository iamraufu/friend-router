import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';
import './Home.css'


const Home = () => {
      const [friends, setFriends] = useState([])

      useEffect(() => {
            const url = 'https://jsonplaceholder.typicode.com/users';
            axios.get(url)
                  .then(response => setFriends(response.data))
      }, [])
      return (
            <div>
                  <h1>Total Friends: {friends.length}</h1>
                  {
                        friends.map(friends => <Friends friends={friends} key={friends.id}></Friends>)
                  }
            </div>
      );
};

export default Home;