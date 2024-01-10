import React from 'react';
import p from './Profile.module.css'

const Profile = () => {
    return <div className={p.content}>
    <div>
      <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt='main_photo(seaBeach)' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className={p.posts}>
        <div className={p.item}>
          post 1
        </div>
        <div className={p.item}>
          post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;