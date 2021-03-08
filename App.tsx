import 'react-native-gesture-handler';
import React from 'react';
import { createStore } from 'redux';
import { rootReducer } from './src/store/root.reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HomeScreen } from './src/screens/home';

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
    return (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    );
};

export default App;
