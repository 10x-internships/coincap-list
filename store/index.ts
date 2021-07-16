import { createStore } from 'redux';

import coinReducer from 'reducer/coinReducer';

const store = createStore(coinReducer);

export default store;
