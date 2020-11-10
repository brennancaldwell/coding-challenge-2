import React from 'react';

const NewMember = ( ) => (
  <div>
    <label>First Name: </label>
    <input type="text" name="firstName" /> <br />
    <label>Last Name: </label>
    <input type="text" name="lastName"/> <br />
    <label>Title: </label>
    <input type="text" name="title" /> <br />
    <label>Story: </label>
    <textarea name="title"> </textarea> <br />
    <label>Photo URL: </label>
    <input type="text" name="photoURL" placeholder="(Optional)"/> <br />
    <label>Favorite Color: </label>
    <input type="text" name="favoriteColor"placeholder="(Optional)"/>
  </div>
);

export default NewMember;
