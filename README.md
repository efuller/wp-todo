# Overview
An easy way to keep a *quick* todo list while working on your WordPress website!

This is currently under active development.

## Getting Started
This project uses Yarn for dependency management.

To install yarn run:
```
npm install --global yarn
```

```
// Clone it to your plugins directory.
git clone git@github.com:aubreypwd/wp-todo.git
cd wp-todo 

// Install dependencies.
yarn install

// Adjust the Browsersync proxy setting in webpack.config.js.
new Browsersync({
    proxy: 'set this to the URL of your local WordPress install'
})

// Enter development mode.
yarn start

// View it.
Visit http://localhost:3000
```