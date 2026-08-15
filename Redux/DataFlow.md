**Data Flow Cycle**

1. **Trigger**: Component mounts and calls `this.props.getMovies()`.
2. **Dispatch**: Action creator fetches data asynchronously and dispatches `{ type: GET_MOVIES, data }`.
3. **Redirection**: Redux passes the action through `rootReducer` to `movieReducer`.
4. **State Update**: `movieReducer` matches `GET_MOVIES` and returns the new state.
5. **Re-render**: `mapStateToProps` notifies `MovieList`, updating the UI with the fetched movies.

**Key Advantages of Redux Toolkit**

Redux Toolkit (`@reduxjs/toolkit`) is the official standard for modern Redux development, eliminating manual DevTools setup, boilerplate `redux-thunk` wiring, and legacy `createStore` functions.

### Package Installation

```bash
npm install @reduxjs/toolkit react-redux
```

* **Zero-Config DevTools**: The Redux DevTools extension connects automatically in development without `composeWithDevTools` or custom store enhancer logic.
* **Built-in Middleware**: `redux-thunk` comes pre-packaged inside `configureStore`.
* **Direct State Mutation (Immer)**: Inside `createSlice`, you can write direct assignments like `state.movies = action.payload` because Immer handles immutability under the hood.
* **No Action Constants**: String constants like `const GET_MOVIES = 'GET_MOVIES'` are generated automatically by `createSlice` and `createAsyncThunk`.