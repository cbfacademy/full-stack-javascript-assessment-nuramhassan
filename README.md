<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [<img src="packages/frontend/src/assets/logo.png" width="50"> RainBowNoir](#img-srcpackagesfrontendsrcassetslogopng-width50-rainbownoir)
  - [Purpose](#purpose)
    - [Why the project is useful](#why-the-project-is-useful)
- [How users can get started with the project](#how-users-can-get-started-with-the-project)
    - [`npm install`](#npm-install)
    - [`npm run dev`](#npm-run-dev)
    - [`npm install`](#npm-install-1)
    - [`npm run start-dev`](#npm-run-start-dev)
- [Design](#design)
  - [UI Design](#ui-design)
  - [User Story](#user-story)
  - [Diagrams](#diagrams)
  - [Where users can get help with your project](#where-users-can-get-help-with-your-project)
  - [Who maintains and contributes to the project](#who-maintains-and-contributes-to-the-project)
- [Full Stack JavaScript Assessment](#full-stack-javascript-assessment)
  - [Introduction](#introduction)
    - [Learning Outcomes](#learning-outcomes)
  - [Requirements](#requirements)
    - [What we expect you to accomplish](#what-we-expect-you-to-accomplish)
  - [Getting started](#getting-started)
  - [Things to consider whilst building your application](#things-to-consider-whilst-building-your-application)
    - [Design](#design-1)
    - [Code Quality & Structure](#code-quality--structure)
    - [Deployment](#deployment)
    - [Feedback](#feedback)
  - [Deliverables / What You Should Submit](#deliverables--what-you-should-submit)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

 # <img src="packages/frontend/src/assets/logo.png" width="50"> RainBowNoir

## About RainBowNoir
RainBowNoir is a wed-based platform that offers a secure and transparent environment for comprehensive reviews of companies and products. Our assessments encompass broad categories like amenities while also integrating specific insights from neurodiverse individuals. These unique perspectives illuminate details that others might overlook or undervalue.

### Why the project is useful

It allows the integratiom specific insights from marginalized communities such as Black, queer, or neurodiverse individuals. These diverse perspectives shed light on nuanced details that might be overlooked or underestimated by others, enriching the depth and accuracy of our reviews.

# How users can get started with the project

## Launch the app to a live environment 
Use the Link

## Locally running the app
1. From the [frontend](**packages/frontend**) folder run:

### `npm install`

This will ensure that all package dependencies needed to run, test and build the app are downloaded from the internet first.

Once done, you can run any of the following commands:

### `npm run dev`

Runs the backend insuring the DB is ready and Node is running.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

To quit running the app, press `Ctrl`+`C`

   
## 2.  From the [backend](packages/backend) folder run:

   ### `npm install`

This will ensure that all package dependencies needed to run, test and build the app are downloaded from the internet first.

Once done, you can run any of the following commands:

### `npm run start-dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

To quit running the app, press `Ctrl`+`C`

# Design
## UI Design
🔗[Figma Link](https://www.figma.com/file/3cz2fbjOVrCv4B95lYjomE/Ratings-%26-Reviews-App-(Community)?type=design&node-id=263-26378&mode=design&t=UGqnR5S04EDQh6o2-0)

## User Story

## Diagrams

# Tech

## TechStack
1.  **✅Frontend**: Utilise React for creating user interfaces, Tailwind for Styling
2.  **✅Backend**: Build an API using Node.js and Express.js
3.  **✅Database**: MongoDB for data storage, Imagebb for Image storage (Due to memory constraints i had to seperate the 2 databases as not to slow down the app
4.  **❌Deployment**: AWS 

# Challenges & Feedback 

# Help & Credits 
## Where users can get help with your project
<!-- CONTACT -->
### Contact

Nura Hassan - [@your_twitter](https://twitter.com/your_username) 

Project Link: [Repo Link](https://github.com/cbfacademy/full-stack-javascript-assessment-nuramhassan.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
### Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)



-----------------------------------------------------------
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/V8cWq51n)
# Full Stack JavaScript Assessment

- [Introduction](#introduction)
  - [Learning Outcomes](#learning-outcomes)
- [Requirements](#requirements)
  - [What we expect you to accomplish](#what-we-expect-you-to-accomplish)
- [Getting Started](#getting-started)
- [Things to consider whilst building your application](#things-to-consider-whilst-building-your-application)
  - [Design](#design)
  - [Code Quality & Structure](#code-quality--structure)
  - [Deployment](#deployment)
  - [Feedback](#feedback)
- [Deliverables / What You Should Submit](#deliverables--what-you-should-submit)

## Introduction

For your assessment, you are to create a full-stack web application of your choosing. You could build:

1. Search Engine
1. Chat Application
1. Sentiment Analysis
1. Product Recommendation Engine

or whatever you'd like.

This assessment offers you the choice to embrace either a monolithic (all in one) or a mono-repo (in separate pieces) architecture for your full-stack application. While the realm of microservices is gaining traction, understanding both monolithic and mono-repo setups provides a well-rounded perspective.

Opting for a monolithic architecture simplifies deployment, eases developmental complexities, and ensures a comprehensive view of the application stack. On the other hand, choosing the mono-repo route gives you a taste of modular organisation, scalable structures, and the ability to deploy parts independently while maintaining a centralised codebase. Whichever path you choose, this project ensures you garner deep insights and hands-on experience.

By default, this codebase has been set up as a mono-repo; to deploy as a monolith, you will need to make a few adjustments. [You can find out how to make the changes in this short guide](docs/deployment.md).

### Learning Outcomes

By the end of this assessment, you will have demonstrated your ability to:

1. **Design and Architect Applications**: Understand the nuances of designing a user-centric application, from your user's journey to how they interact with your database.
https://www.figma.com/file/3cz2fbjOVrCv4B95lYjomE/Ratings-%26-Reviews-App-(Community)?type=design&node-id=263-26378&mode=design&t=SYwYTABKoqAvMFg8-0 
1. **Implement Best Practices**: Showcase your proficiency in following coding standards and structuring a project optimally.
1. **Utilise Full-Stack Development**: Master using React for your frontend, Node.js for your backend logic, and MongoDB for your data needs.
1. **Implement CI/CD**: Get hands-on with setting up and managing a CI/CD pipeline, leveraging tools like GitHub Actions.
1. **Deploy Applications**: Understand the process to get your applications up and running on platforms suitable for full-stack apps.
1. **Iterative Development & Feedback**: Appreciate the value of feedback loops in your software development journey and make iterations based on real user feedback.

By completing this assessment, you're set for a holistic dive into full-stack development using the JavaScript ecosystem and the intricacies of deploying and maintaining web applications.

## Requirements

✅  **Frontend**: Utilise React for creating user interfaces
✅  **Backend**: Build an API using Node.js and Express.js
✅  **Database**: Utilise MongoDB for data storage

### What we expect you to accomplish

- A fully deployed application with the URL to it in this README
- Comprehensive documentation

We have provided you with some ideas to help you achieve these, [which you can find here](#things-to-consider-whilst-building-your-application).

## Getting started

We have created this codebase as a skeleton for you to use. You can adapt it to your needs.

To get started with setting up this codebase on your machine [follow this guide we have created for you](docs/getting-started.md).

## Things to consider whilst building your application

### Design

- **User Flow**: Outline the user journey, considering main actions and navigation

- **UI/UX**: Sketch a simple UI using tools like Figma or Adobe XD. Ensure a thoughtful user experience and consider tools like Google Lighthouse for insights on performance and accessibility

For more tips refer to the [Design guide](docs/design-guide.md).

### Code Quality & Structure

- **Best Practices**: Adhere to coding best practices such as naming conventions, DRY principles, and more

- **Design Patterns**: Consider popular patterns, like MVC, to structure your web application

For more tips refer to the [Code Quality & Structure guide](docs/code-quality-standards.md).

### Deployment

- **Platform**: Deploy on a platform like [Heroku](https://www.heroku.com/), [Vercel](https://vercel.com/), [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/), or [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/).

- **Domain**: If you'd like, purchase a domain name from providers like [Namecheap](https://www.namecheap.com/) or [GoDaddy](https://www.godaddy.com/) and link it to your deployed application. If using AWS, you can manage domain names with [AWS Route 53](https://aws.amazon.com/route53/).

For more tips refer to the [Deployment Guide](docs/deployment.md).

### Feedback

- **User Feedback**: Design a system to capture user feedback, whether it's through user interviews, surveys, or another medium

- **Iterative Development**: Use feedback to make improvements to your application, refining it based on real user needs

For more tips refer to the [Feedback Implementation Guide](docs/feedback-guide.md).

## Deliverables / What You Should Submit

1. The link to your GitHub repository

1. A deployed version of your application

1. Comprehensive documentation detailing your thought process, design choices, and more

---

Good luck with your assessment! You've got this 💪
