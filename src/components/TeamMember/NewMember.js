import React from 'react';

const NewMember = ({ onChange }) => (
  <div>
    <label>First Name: </label>
      <input type="text" name="firstName" onChange={onChange}/>
      <br />
    <label>Last Name: </label>
      <input type="text" name="lastName" onChange={onChange}/>
      <br />
    <label>Title: </label>
      <input type="text" name="title" onChange={onChange}/>
      <br />
    <label>Story: </label>
      <textarea name="story" onChange={onChange}> </textarea>
      <br />
    <label>Photo URL: </label>
      <input type="text" name="photoUrl" placeholder="(Optional)" onChange={onChange}/>
      <br />
    <label>Favorite Color: </label>
      <input type="text" name="favoriteColor"placeholder="(Optional)" onChange={onChange}/>
      <br />
    <button className="submitButton">Submit</button>
  </div>
);

export default NewMember;
