
import { createBrowserRouter } from 'react-router-dom';
import Edit from '../../Edit/Edit';
import Main from '../../Layout/Main';
import AddService from '../../Pages/AddService/AddService';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import AllServices from '../../Pages/Home/Services/AllServices';
import Login from '../../Pages/Login/Login';
import MyReview from '../../Pages/MyReview/MyReview';
import ServiceDetails from '../../Pages/ServicesDetails/ServiceDetails';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';



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
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>

            },

            {
                path: '/details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://esthetica-salon-server.vercel.app/services/${params.id}`)

            },
            {
                path: '/myReview',
                element: <PrivateRoute> <MyReview></MyReview></PrivateRoute>
            }
            ,
            {
                path: '/edit/:id',
                element: <PrivateRoute><Edit></Edit></PrivateRoute>,
                loader: ({ params }) => fetch(`https://esthetica-salon-server.vercel.app/myReview/${params.id}`)
            }

        ]
    }
])
export default router;