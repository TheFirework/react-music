import { combineReducers} from 'redux';

import * as app from './app/reducer'

const reducers = combineReducers({
    ...app
})

export default reducers