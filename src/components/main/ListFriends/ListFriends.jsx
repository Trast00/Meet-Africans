import React from 'react';
import { useSelector } from 'react-redux';
import Friend from './Friend';
import './ListFriends.css';

const ListFriends = () => {
  const listFriends = useSelector((state) => state.chat.friends.listFriends);

  if (listFriends.length <= 0) {
    return (<p className="max-content flex-center">You have no friend !</p>);
  }

  return (
    <div className="list-friends-wrapper">
      <ul className="column listfriends">
        {listFriends.map((friend) => <li key={friend.idChat}><Friend friend={friend} /></li>)}
      </ul>
    </div>
  );
};

export default ListFriends;
