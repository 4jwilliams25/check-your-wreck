// TODO: update backend and redux to use get requests for single user only
// TODO: once stretch goals reached, refactor back end to do all the review of the total database and generate figures for reports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import rearEndReducer from './rearEnders/rearEndReducer';
import laneChangeReducer from './laneChanges/laneChangeReducer';
import backingReducer from './backing/backingReducer';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    rearEnds: rearEndReducer,
    laneChanges: laneChangeReducer,
    backings: backingReducer,
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));