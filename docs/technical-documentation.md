# Technical Documentation

## 1. Project Overview

This project is a responsive personal portfolio web application developed using HTML, CSS, and JavaScript.

The application contains four main content sections:

1. About
2. Skills
3. Projects
4. Contact

The website is designed to provide a simple and clear presentation of personal information, technical skills, projects, and contact options.

## 2. Project Architecture

The project separates structure, presentation, and behavior into different files.

- `index.html` contains the structure and content.
- `css/styles.css` contains the visual design and responsive layout.
- `js/script.js` contains interactive behavior.
- `assets/images/` is reserved for image assets.
- `docs/` contains project documentation.

This separation makes the project easier to read, maintain, and extend.

## 3. HTML Structure

The website uses semantic HTML elements including:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<form>`
- `<footer>`

Semantic HTML provides a clearer document structure and helps improve accessibility and maintainability.

The navigation links use section IDs to allow users to move directly to different areas of the page.

## 4. CSS Design

The stylesheet provides the visual design for the website.

### Flexbox

Flexbox is used for components such as the navigation bar and content alignment.

### CSS Grid

CSS Grid is used for the skills and projects layouts.

### Responsive Design

Media queries adjust the layout at different screen widths.

The main breakpoints are:

- Above 900px: desktop layout
- 601px to 900px: tablet-oriented layout
- 600px and below: mobile layout

On smaller screens, multi-column layouts change to fewer columns or a single column to maintain readability and usability.

## 5. JavaScript Functionality

### Theme Toggle

The theme toggle allows users to switch between light and dark modes.

JavaScript adds or removes the `dark-mode` class from the document body. CSS rules associated with this class change the website colors.

### Theme Persistence

The selected theme is stored using the browser's `localStorage`.

When the page loads, JavaScript checks for a previously saved theme and applies it when appropriate.

### Contact Form

The contact form contains:

- Name
- Email
- Message

Because the assignment does not require a backend, JavaScript prevents the form from performing a real server submission. Instead, a confirmation message is displayed to the user after valid form submission.

### Dynamic Copyright Year

JavaScript uses the `Date` object to retrieve the current year and automatically display it in the footer.

## 6. Accessibility

The website includes several accessibility considerations:

- Semantic HTML elements
- Form labels connected to their input fields
- Clear heading hierarchy
- Keyboard-focus styles
- An accessible label for the theme toggle
- A status region for contact-form feedback

These features help make the interface easier to understand and navigate.

## 7. Performance

The project uses plain HTML, CSS, and JavaScript without large external frameworks or libraries.

This keeps the application lightweight and reduces unnecessary dependencies.

## 8. Browser Compatibility

The project uses standard HTML5, CSS, and JavaScript features supported by modern web browsers.

The website should be tested in multiple browsers and at different screen sizes before final submission.

## 9. Future Development

This portfolio provides a foundation that can be expanded in future assignments.

Possible future additions include:

- Additional projects
- Project images
- Live project links
- GitHub repository links
- Additional skills
- Animations
- A deployed version of the portfolio