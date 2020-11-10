import React from 'react';

const NewMember = ( ) => (
  <div>
    <label>First Name: </label>
    <input type="text" name="firstName"> </input>
    <label>Last Name: </label>
    <input type="text" name="lastName"> </input>
    <label>Title: </label>
    <input type="text" name="title"> </input>
    <label>Story: </label>
    <textarea name="title"> </textarea>
    <label>Photo URL: </label>
    <input type="text" name="photoURL" placeholder="(Optional)"> </input>
    <label>Favorite Color: </label>
    <input type="text" name="favoriteColor"placeholder="(Optional)"> </input>
  </div>
);

export default NewMember;
