import {Navigate, createBrowserRouter} from 'react-router-dom';
import App from './App';
import IssueList from './pages/IssueList';
import ROUTES from './constants/routes';
import IssueDetail from './pages/IssueDetail';
import Header from './components/common/Header';
import NotFound from './pages/NotFound';

export const Router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <App />,
        children: [
            {
                path: ROUTES.HOME,
                element: <Navigate to='/issues' replace={true} />,
            },
            {
                path: ROUTES.ISSUES,
                element: <IssueList />,
            },
            {
                path: `${ROUTES.ISSUES}/:id`,
                element: <IssueDetail />,
            },
        ],
        errorElement: (
            <>
                <Header />
                <NotFound />
            </>
        ),
    },
]);
