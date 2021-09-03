// import { ,  } from "react-redux";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import inputReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: "input",
};

const rootReducer = combineReducers({
  myInput: inputReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logger, reduxThunk))
);
const persistor = persistStore(store);

export { store as default, persistor };
