## Project setup steps

## Results can be seen here: https://singular-fenglisu-267e5c.netlify.app/
### Switched from gh-pages to netlify because gh-pages uses static html files and it's needed to use HashRouter instead of BrowserRouter and push build(dist) folder or use gh-pages package to push build folder to gh-pages branch.

### 1. Clone project from git

```
git@github.com:rodakh/ego-tst.git
```

### 2. Run npm install:

```
npm install
```

### 3. Run npm run dev to start project:

```
npm run dev
```

## Mock user data

```
login: admin
password: 12345
```

## Things used in project

- [x] React
- [x] Redux/Redux-toolkit
- [x] Typescript
- [x] Styled-components
- [x] React-router-dom
- [x] React-hook-form
- [x] RTK query
- [x] Material-ui
- [x] React spring (for animations)
- [x] React-i18next

## Project structure

```
├── public
├── src
│   ├── assets
│   ├── components
│   ├── constants
│   ├── features
│   ├── helpers
│   ├── hooks
│   ├── interfaces
│   ├── pages
│   ├── store
│   ├── translations
```

## Implemented pages

- [x] Login page
- [x] Home page
- [x] Profile page
- [x] News page
- [x] Not Found page


## Additional info 

Background images is taken from [here](https://unsplash.com/s/photos/abstract--background). Some icons used from Material-UI library.
No .env file is needed to run project. All data is mocked. (task requirements). Prettier and eslint are used for code formatting.