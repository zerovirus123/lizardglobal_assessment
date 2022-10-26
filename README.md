# Lizard Global React Developer Assessment

## Overview

The project is a React frontend application that displays data fetched from a backend. 
MirageJS is used to mock an API without the need for a backend service.
The fetched data is displayed as a list of flexed items.
Components are structured to be modular. (for maintainability, testing, etc).
Styling is done with SASS preprocessor language. Media queries are used to scale the application to smaller devices.

## Instructions
1.) Clone the project from Github: https://github.com/zerovirus123/lizardglobal_assessment.git.
2.) Install the dependencies with `npm install`.
3.) To run the project in development mode, type `npm start`.
4.) To run the project in production mode, type `npm run build`. Then type `serve -s build` to serve the production version.

## Milestones

[x] Retrieve the data from the mock API.
[x] Output the data in a list, including properties from the data that are appropriate for a list view.
[x] Implement a category filter - this can be single or multi-select.
[x] Implement pagination - this can be traditional numbered pages or "load more".
[x] Use semantic markup where possible.
[x] Create a responsive layout with HTML and CSS.

## Additional Milestones

[] Use client-side routing to create a "detail" page.
[] Persist filter state in the query string.
[x] Include animated transitions between application state, e.g. when filtering.
[] Convert the application to use TypeScript instead of JavaScript.
[x] Use a CSS preprocessor or CSS-in-JS rather than plain CSS.
