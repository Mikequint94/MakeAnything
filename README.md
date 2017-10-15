![alt text](http://res.cloudinary.com/make-anything/image/upload/c_scale,h_400/v1505856907/Logo_Make_Anything_poheza.png "MakeAnything Logo")


Brief Overview
==

MakeAnything is a DIY project instruction site focusing on ease of use and sleek design.  Users can easily browse or search for projects and gain instant access to detailed instructions on how to Make Anything.  
####   [MakeAnything App](https://make-anything-app.herokuapp.com "MakeAnything")


This full stack web application was inspired by the functionality of Instructables.com.  It was crafted using Ruby on Rails for the backend and React with a Redux architectural framework for the frontend.  The app utilizes a PostgreSQL database, and benefits from advanced performance with the addition of BCrypt, JBuilder, React-Dropzone, and Cloudinary CDN services.



Design
==

MakeAnything was designed with user experience in mind.  The site is fun to navigate, and returns desired results.

![alt text](https://res.cloudinary.com/make-anything/image/upload/c_scale,h_540/v1506715231/Screen_Shot_2017-09-29_at_12.59.51_PM_byuxgc.png "Splash Page")

The splash homepage was a challenge in many senses.  Not only did I want the desired parallax scroll effect, but also I wanted the background image to be a slideshow.  Finally I wanted text on top of each image to give examples of project categories.  Creating the parallax scroll effect on the homepage was challenging in its own sense, but I figured out that wrapping all of my elements with appropriate CSS kept the site functional and stylish on all pages.    I used a simple timer to advance the background image, but timing was a challenge since I had to pair the text with the image perfectly.  

By utilizing class and timers I was able to craft the perfect solution.  

```javascript
dummyInput(string, idx){
    let dummyText = Array.from(string);
    this.setState({text: ""});
    this.clearInterval = setInterval(() => {
      if (dummyText.length) {
        this.setState({text: this.state.text + dummyText.shift()});
      } else {
        clearTimeout(this.clearInterval);
        if (idx === 0) {
          this.bgclass="section parallax bg3";
          this.dummyInput("Woodwork   ", 1);
        } else if (idx === 1) {
          this.bgclass="section parallax bg1";
          this.dummyInput("Artwork      ", 2);
        } else {
          this.bgclass="section parallax bg2";
          this.dummyInput("Cooking      ", 0);
        }
      }
    }, 300);
}
```
Additionally, all the forms are styled to match.  Logged in visitors can create new projects, add steps for the project, edit projects, edit steps, and add comments to any existing project.  
![alt text](https://res.cloudinary.com/make-anything/image/upload/c_scale,h_540/v1506718182/MakeAnythingFormFeatures_h3dsu6.jpg
"Form Features")

Functionality
==

MakeAnything features search to filter projects by title.  I was able to combine this component with the page showing all projects by a single crafter.  Here is an example of a typical user going through the site and leaving a comment.

![alt text](https://res.cloudinary.com/make-anything/image/upload/v1506721204/giphy_uneqcu.gif
  "Search")

Since this is a single page application, it was difficult to maintain similar visual feel across components.  I achieved consistency and non-repetitive code by using conditional statements to set visibility and content of subcomponents based on factors such as logged in user, project author, and the type of media present in the step or project.
````javascript
return(
  <div className="projectshow">
    <ul className="header">
      <li className="steps-edit">
        {editproject}
      </li>
      <li className={titleclass}>{project.title}</li>
      <li className={authorclass}>by:
        <Link to={`/member/${project.author.id}/${project.author.username}/projects`}>  {project.author.username}</Link>
      </li>
    </ul>
    <ul className="pictextvid">
      {image}
      <h2>{project.description}</h2>
      {video}
    </ul>
    <ul className="steps">
      {steps}
      <br/>
      {addSteps}
    </ul>
    <div className="comment-form">
      {comments}
      <CommentIndexContainer />
    </div>
  </div>
);
} else {
  return(
    <div className="loadingtext">
      <h3>Loading</h3>
    </div>
  );
  ````

Future Directions
==

**Keywords and Categories:**
Searching by project title is cool, but searching by keyword is even better!  All projects will be tagged with relevant keywords to allow for improved search.  There will also be a list of categories a user can view and select from for inspiration.

**Enhanced User Interactions:**
Users can view each others projects and leave comments, but what if they want more?  Future updates will add more information to user's profile.  Users will be able to like projects, follow other users, and direct message users with private questions or with requests for collaboration.

 ![alt text](https://res.cloudinary.com/make-anything/image/upload/c_scale,w_115/v1506614644/Logo_Make_Anything_Robot_blackicon_a9hmif.png
 "MakeAnything Logo") **[MakeAnything App](https://make-anything-app.herokuapp.com "MakeAnything")**
