# E-Books Library Project
This is a Books Library site.
The user has three shelves to put the books in. The user can also can add new books by pressing the `+` button down the screen.
This project is from the final assessment project for Udacity's React Fundamentals course.

The starte template is from [reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter).

## Up And Running
### On Your Local Machine:
To get started:

* install all project dependencies with `yarn install`
* start the development server with `yarn start`

[Yarn installation](https://classic.yarnpkg.com/en/docs/install)

### Using Docker
1. in the root of the project run:
`docker build -t your-image-name .` to build the image.
2. `docker run -d -p 3000:3000 --name your-container-name your-image-name` to run the container in the background
3. got to `http://localhost:3000/`
4. Enjoy using the app!

## Backend API

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important Note!
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
