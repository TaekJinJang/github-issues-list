import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
// import ROUTES from './constants/routes';

export const Router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
]);
