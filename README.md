# Code Test (Frontend Junior Engineer)

Repository used to perform the Code Test for Frontend Junior Engineer.

## Table of Contents

- [Overview](#overview)
  - [Project Description](#project-description)
  - [Functionality](#functionality)
  - [Deploy Application](#deploy-application)
  - [Pre-requirements](#pre-requirements)
  - [How to run the Application](#how-to-run-the-application)
- [Backend Integration (Important Note)](#backend-integration-important-note)
- [Author](#author)

# Overview

## Project Description

This project is a simple CRUD (Create, Read, Update, Delete) web application developed as part of the CodeLeap Frontend Junior Code Test. The main goal is to allow users to sign up with a username and perform basic operations on posts, including creating, editing, and deleting their own content, all while maintaining a clean, responsive UI faithful to the given Figma design.

## Functionality

The project includes:

- Sign Up screen with username input and conditional button activation;
- Create new posts with a title and content;
- List all posts in reverse chronological order (most recent on top);
- Posts are stored and persist using a local backend (`json-server`);
- Only the original author can edit or delete a post;
- Modal pop-ups for confirmation (Delete) and form editing (Edit);
- Friendly UI with form validation and disabled states when required fields are empty;
- Username and post data persist even after refreshing the page;
- Post creation time displayed as relative time.

## Deploy Application

You can access the live application through the link below:

- **[View Code Test on Vercel](https://code-test-iota-wheat.vercel.app/)**

  or

- **[View the Code Test repository](https://github.com/andre-almeida-2121/code-test)**

## Pre Requirements

Before running the application locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [json-server](https://github.com/typicode/json-server)

## How to run the Application

**1. Clone the Repository**

Open any folder you wish, open the terminal and run:

    git clone https://github.com/andre-almeida-2121/code-test

and then:

    cd code-test

**2. Instal Dependencies**

In the terminal, run the following command:

    npm install

If you're starting a similar project from scratch instead of cloning this one, you can initialize with Vite like so:

    npm create vite@latest your-project-name
    # Select React Framework
    # Select JavaScript variant

Then:

    cd your-project-name
    npm install

**3. Install additional global tools, if not already installed**

In the terminal, run the following command:

    npm install -g json-server

**4. Start the local backend**

In the terminal, run the following command:

    json-server --watch db.json --port 3001

**5. Start the frontend**

In the terminal, run the following command:

    npm run dev

**6. Open your browser at http://localhost:5173/ 👍🏼**

## Backend Integration (Important Note)

The original goal was to fetch and persist posts using CodeLeap's public backend API.

Although the POST request returns a 200 status and echoes back the data, no persistence occurs and GET requests still return an empty result. Because of that, the current version uses a local state fallback to simulate the expected CRUD behavior.

However, the integration logic was fully implemented, tested, and left in the code as commented blocks to demonstrate the approach I would take in a real scenario.

Tools used for backend integration:

- fetch API
- React Query (useQuery + refetch)
- Error handling
- JSON formatting

Still, I am willing to learn from my mistakes and, in the future, solve problems that I could not before. Thank you for understanding already.

## Author

Feel free to connect with me!

- Linkedin - [André Almeida](https://www.linkedin.com/in/andr%C3%A9-almeida-0b6300324/)
- Github - [andre-almeida-2121](https://github.com/andre-almeida-2121)
- Portfolio - [André Almeida](https://ratiopitag.wixsite.com/meusite)
- Frontend Mentor - [@andre-almeida-2121](https://www.frontendmentor.io/profile/andre-almeida-2121)
