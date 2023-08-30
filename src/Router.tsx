import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import IssueList from './pages/IssueList';
import ROUTES from './constants/routes';
import IssueDetail from './pages/IssueDetail';
// import ROUTES from './constants/routes';

export const Router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <App />,
        children: [
            {
                path: ROUTES.ISSUES,
                element: <IssueList />,
            },
            {
                path: `${ROUTES.ISSUE_DETAIL}/:issueId`,
                element: <IssueDetail />,
            },
        ],
    },
]);
