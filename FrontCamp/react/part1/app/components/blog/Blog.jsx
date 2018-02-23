import React from 'react';

export default (props) => {

  const deleteBlog = () => {
    props.deleteBlog(props.index);
  };

  return (
    <li className="blogs__item">
      <h3 className="blogs__title">{props.data.author}</h3>
      <p className="blogs__text">{props.data.description}</p>
      <button type="button" className="blogs__delete-btn" onClick={deleteBlog}>
        &#10799;
      </button>
    </li>
  );

};
