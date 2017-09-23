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
        <li className="projecttitle">{project.title}</li>
        <br/>
        <li className="holdbyauthor">
          <div className="projectby">by  </div>
          <div className="projectauthor">{username}</div>
        </li>
      </Link>
    </div>
  );
};
