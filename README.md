## Indonesian Quotes API

## Description

Indonesian Quotes API is a project that provides API services to get motivational quotes in three main categories, namely love, life and social. Citation data is stored in JSON format and can be accessed via an API endpoint.

### API Endpoints

Below is the table of available API endpoints:

| Method | Endpoint | Description                                     |
| ------ | -------- | ----------------------------------------------- |
| GET    | /        | Get a welcome message for Indonesian Quotes API |
| GET    | /love    | Get a random love quote                         |
| GET    | /life    | Get a random life quote                         |
| GET    | /social  | Get a random social quote                       |
| GET    | /random  | Get a random quote from any category            |

## Features

1. Get motivational quotes by category (love, life, social).
2. Citation data is stored in a JSON file.

## Project Resources

1. JavaScript
2. Node.js
3. Express.js

## Project Installation Guide

Here are the steps to install this project:

### Precondition

Make sure you have [Node.js](https://nodejs.org/) installed on your system before starting the installation.

### Steps

**1.** Clone the repository project into a local directory:

```bash
git clone https://github.com/username/indonesian-quotes-api.git
```

**2.** Go to the project directory:

```bash
cd indonesian-quotes-api
```

**3.** Install Node.js dependencies using npm:

```bash
npm install
```

**4.** Install Express.js using npm:

```bash
npm install express
```

**5.** Execute server API:

```bash
node server.js
```

After following the steps above, the Indonesian Quotes API server is now running and can be accessed via a browser or an API testing tool such as Postman.

### Example Implementation

**1.** After running the API, move into the "web" folder:

```bash
cd web
```

**2.** Open the index.html file in your preferred web browser to view and interact with the Indonesian Quotes API.
