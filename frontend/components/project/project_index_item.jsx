import React from 'react';
import { Link } from 'react-router-dom';

const convertToSlug = (string) => {
  if (string) {
    return string.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
  }
};


export const ProjectIndexItem = ({project}) => {
  let username;
  if (project.author) {
    username = (project.author.username);
  }
  return (
    <div className="project">
      <Link to={'/projects/' + (project.id) + "/" + convertToSlug(project.title)}>
        <li><img className ="projectImg" src={project.img_url}></img></li>
        <br/>
        <li>{project.title}</li>
        <br/>
        <li>by {username}</li>
      </Link>
    </div>
  );
};
