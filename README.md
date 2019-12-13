
# 🍿🍿🍿popcorn cinema booking


## Table of Contents
* [Intro](#intro)
* [Install](#install)
* [Build](#build)
* [Run](#run)
* [Docker](#docker)
* [CI](#continuousIntegration) ...soon
* [Optimizations](#Optimizations) ...soon

## Intro
This is a semester project for my MSc web development course.🎓🎓

* popcorn is an ⚛️ SPA application for booking tickets 🎫 & seats 🪑. 
* There is also a sub-system for create, update, delete users, movies, seats, auditoriums, movie showings.
* Users have many roles like : Admin, super-user, user
* Frontend is served in Surge [https://popcorn.surge.sh](https://popcorn.surge.sh)
* Back-end repo [https://github.com/panosonasis/popCornCinemaApi](https://github.com/panosonasis/popCornCinemaApi)
* Back-end is served in Azure [https://popcorncinemaapi20191121032120.azurewebsites.net](https://popcorncinemaapi20191121032120.azurewebsites.net)
* SQL Database is served in a digital-ocean droplet 💧.

*** 💕💕Many thanks to my fellow contributors and colleagues 
[https://github.com/panosonasis], [https://github.com/manKraut] for their amazing collaboration on the backend implementation. 

## Install
To install, `cd` to project root and run:
```
$ npm install
```
This will install the required dependencies. From there, you can build or run the app.

## Build
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Run

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Docker

🐳🐳Docker! 
* This application can be dockerized by using `npm run docker:build` to build the image.
* Use `npm run docker:run` to serve the container in [http://localhost:3001](http://localhost:3001)

