import React from 'react';
import { Link } from 'react-router-dom';

const convertToSlug = (string) => {
  if (string) {
    return string.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
  }
};


export const ProjectIndexItem = ({project}) => {
  return (
    <div className="project">
      <Link to={'/projects/' + convertToSlug(project.title)}>
        <li><img className ="projectImg" src={project.img_url}></img></li>
        <br/>
        <li>{project.title}</li>
        <br/>
        <li>{project.description}</li>
      </Link>
    </div>
  );
};
