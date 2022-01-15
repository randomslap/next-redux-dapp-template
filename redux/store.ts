import { useMemo } from "react"
import {
	applyMiddleware,
	compose,
	createStore,
	combineReducers,
	Store,
} from "redux"
import thunk from "redux-thunk"
import blockchainReducer from "./blockchain/blockchainReducer"
import dataReducer from "./data/dataReducer"

const rootReducer = combineReducers({
	blockchain: blockchainReducer,
	data: dataReducer,
})

const middleware = [thunk]
const composeEnhancers = compose(applyMiddleware(...middleware))

const configureStore = () => {
	return createStore(rootReducer, composeEnhancers)
}

const store: Store = configureStore()

export default store