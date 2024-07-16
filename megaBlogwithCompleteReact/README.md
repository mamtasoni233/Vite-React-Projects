# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Complete url used in this project
Appwrite -> https://appwrite.io
Rich text-editor -> https://www.npmjs.com/package/@tinymce/tinymce-react
Ract hook form -> https://www.react-hook-form.com/
enviornment variable file(.env) -> https://vitejs.dev/guide/env-and-mode.html
https://www.npmjs.com/package/html-react-parser

## Dependicies

---

npm install @reduxjs/toolkit
npm install react-redux
npm install react-router-dom
npm install appwrite --save
npm i @tinymce/tinymce-react
npm install html-react-parser --save
npm install react-hook-form

### Tailwind css with vite config

so we used with vite config tailwind css

1.  npm install -D tailwindcss postcss autoprefixer
2.  npx tailwindcss init -p
3.  Add config in tailwind config file
    /** @type {import('tailwindcss').Config} \*/
    export default {
    content: [
    "./index.html",
    "./src/**/\*.{js,ts,jsx,tsx}",
    ],
    theme: {
    extend: {},
    },
    plugins: [],
    }
4.  Add in index.css file
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

## add normal tailwind css in react app

1.  npm install -D tailwindcss
2.  npx tailwindcss init
3.  add configuration in config file
    -- /** @type {import('tailwindcss').Config} \*/
    module.exports = {
    content: [
    "./src/**/\*.{js,jsx,ts,tsx}",
    ],
    theme: {
    extend: {},
    },
    plugins: [],
    }
4.  add tailwind directory in indexedDB.css file
    -- @tailwind base;
    -- @tailwind components;
    -- @tailwind utilities;

## add font awsome in react app

1. npm i --save @fortawesome/fontawesome-svg-core

2. npm i --save @fortawesome/free-solid-svg-icons
3. npm i --save @fortawesome/free-regular-svg-icons
4. npm i --save @fortawesome/free-brands-svg-icons

5. npm i --save @fortawesome/react-fontawesome@latest

## react notification component

-- npm i react-notifications

## react heroicons

-- npm i @heroicons/react

## react router

-- npm i react-router-dom
--- https://reactrouter.com/en/main

## react tostify

-- npm i react-toastify

## axois

--- npm i axios

## smooth scroll

--- npm install -D tailwindcss react-scroll
