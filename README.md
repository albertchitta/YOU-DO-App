# YOU DO  [![Netlify Status](https://api.netlify.com/api/v1/badges/8021eaba-fd05-4104-9fab-652b79ced0a2/deploy-status)](https://app.netlify.com/sites/awc-you-do/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

A to-do list using React.

[View App](https://awc-you-do.netlify.app)

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

## Video Walkthrough of YOU DO <!-- A loom link is sufficient -->
https://www.loom.com/share/6aa0e77349494e449a6e20966d4e81bc

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://awc-you-do.netlify.app)
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
![Home](https://user-images.githubusercontent.com/83558122/138771268-b34af1d4-a5f0-4d5f-8812-474b95585ab8.PNG)
![Completed](https://user-images.githubusercontent.com/83558122/138771271-bc9e1ccf-e993-449f-b9b4-49fba3f82ad0.PNG)
![All](https://user-images.githubusercontent.com/83558122/138771275-e179aea4-9599-4f43-956d-5e0fa494da16.PNG)

## Contributors
- [Albert Chittaphong](https://github.com/albertchitta)
