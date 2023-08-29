import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import IssueList from './pages/IssueList';
// import ROUTES from './constants/routes';

export const Router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '/',
                element: <IssueList />,
            },
        ],
    },
]);
