
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import AllServices from '../../Pages/Home/Services/AllServices';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
            },

            // {
            //     path: '/checkout/:id',
            //     element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            //     loader: ({ params }) => fetch(`https://genius-car-server-xi-eight.vercel.app/services/${params.id}`)

            // },
            // {
            //     path: '/orders',
            //     element: <PrivateRoute><Orders></Orders></PrivateRoute>
            // }

        ]
    }
])
export default router;