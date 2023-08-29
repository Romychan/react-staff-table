<h2 align="center">
  Staff Table
</h2>

<p align="center">
  <a href="#overview">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage-guide">Usage Guide</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#screenshots">Screenshots</a>
</p>

## Overview

<h1 align="center">
	<img src="https://github.com/Romychan/react-staff-table/assets/60140867/c4804e1d-96c9-49b8-98eb-31ae3cb4333e" alt="Staff Table Demo" />
</h1>

This is a web application for viewing staff. The web application provides the ability to search, sort and filter by specified parameters. The main purpose of creating this application was to implement components without using third-party libraries.

## Features

- Filtering items
- Sorting items
- Searching items
- Pagination
- Dark mode
- Unit and snapshot testing of components
- End-to-End testing of project
- Storybook with project components

## Technologies

### Frontend

- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Cypress](https://www.cypress.io/)
- [Mock Service Worker](https://mswjs.io/)

### Backend

- [JSON Server](https://www.npmjs.com/package/json-server)

## Getting Started

### Requirements

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the project and access the folder

   ```sh
   # Clone this repository
   git clone https://github.com/Romychan/react-staff-table.git
   # Go into the repository
   cd react-staff-table
   ```

2. Create a `.env.local` file and add the following environment variables

   ```sh
   VITE_API_URL=http://localhost:5000
   ```

3. Install dependencies

   ```sh
   npm install
   ```

4. Run the app

   ```sh
   npm run dev
   ```

   Go to http://localhost:3000 to view the application in the browser.

## Usage Guide

### Development

#### Running the application with the server

To run the application together with the server in development mode, run:

```sh
npm run dev
```

Go to http://localhost:3000 to view the application in the browser.

#### Running the react application only

To run only react application in development mode, run:

```sh
npm run dev:client
```

Go to http://localhost:3000 to view the application in the browser.

#### Running the server only

To run only server in development mode, run:

```sh
npm run dev:server
```

The server will be available at http://localhost:5000

### Tests

The project uses two types of testing: unit and End-to-End testing

#### Unit tests

To run unit tests and snapshot tests, run:

```sh
npm run test:unit
```

#### End-to-End tests

To run End-to-End tests in interactive mode, run:

```sh
npm run test:e2e:open
```

To run E2E tests in CL, run:

```sh
npm run test:e2e
```

### Storybook

The project uses a Storybook, which contains the project components and their states

#### Running Storybook in development mode

To run the storybook in development mode, run:

```sh
npm run storybook
```

Go to http://localhost:6006 to view the storybook in the browser.

#### Build Storybook

To build a Storybook, run:

```sh
npm run storybook:build
```

The built Storybook will be located in the `storybook-static` folder

### Production

To build a project, run:

```sh
npm run build
```

The built project will be located in the `dist` folder

To view the built application, run:

```sh
npm run preview
```

### Lint

The project uses eslint and prettier to check the code. To start the linter, run:

```sh
npm run lint
```

To fix the found problems, run:

```sh
npm run lint:fix
```

## Screenshots

**Main Page Light**

<img src="https://github.com/Romychan/react-staff-table/assets/60140867/87f7321c-8688-448d-822f-b11eff780ba3" alt="Main Page Light" />

**Main Page Dark**

<img src="https://github.com/Romychan/react-staff-table/assets/60140867/f4e91004-a38f-45d9-b4a3-f72f5a0cad1b" alt="Main Page Dark" />
