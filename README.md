# YOU DO  
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

A to-do list using React.

[View App]()

## Get Started <!-- OPTIONAL, but doesn't hurt -->
```
$ git clone git@github.com:albertchitta/YOU-DO-App.git
$ cd YOU-DO-App
```
## About the User <!-- This is a scaled down user persona -->
- The ideal users for this site are those that want to create a to-do list.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- Authentication - Users can login and logout of the application using Google.
- CRUD - Users can created, read, update, and delete to-dos.
- React and Reactstrap
- Styled Components

## Video Walkthrough of Team Roster <!-- A loom link is sufficient -->


## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site]()
- [Wireframes](https://www.figma.com/file/4YVF79vgSfeSj0H1G9HYDy/YOU-DO-MVP)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
The categoryGroups function is used to categorized to-dos on the DOM.
```
  const categoryGroups = () => {
    const sortedObj = todos.reduce((todoObject, currentObject) => {
      const main = todoObject;
      (main[currentObject.category] = main[currentObject.category] || []).push(
        currentObject,
      );
      return main;
    }, {});
```

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->


## Contributors
- [Albert Chittaphong](https://github.com/albertchitta)
