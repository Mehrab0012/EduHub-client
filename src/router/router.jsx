import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import AuthenticateLayout from "../layouts/AuthenticateLayout";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";
import UserDetails from "../pages/UserDetails";
import AddCourse from "../pages/AddCourse";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import MyCourses from "../pages/MyCourses";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayouts,
        children:[
            {
                index:true,
                Component: Home,
                loader: ()=>fetch('http://localhost:3000/courses')
            },
            {
                path:'authenticate',
                Component:AuthenticateLayout,
                children: [
                    {
                        path: 'signIn',
                        Component:SignIn,
                    },
                    {
                        path:'register',
                        Component: Register,
                    }
                ]
            },
            {
                path: 'courses',
                Component: Courses,
                loader:()=>fetch('http://localhost:3000/courses') ,
            },
            {
                path: 'myCourses',
                element: <PrivateRoute>
                    <MyCourses></MyCourses>
                </PrivateRoute>
            },
            {
                path: 'courses/:id',
                element: (<PrivateRoute>
                    <CourseDetails></CourseDetails>
                    </PrivateRoute>),
                loader:({params})=> fetch(`http://localhost:3000/courses/${params.id}`)

            },
            {
                path: 'userDetails',
                Component: UserDetails,
            },
            {
                path: 'addCourse',
                element: <PrivateRoute>
                    <AddCourse></AddCourse>
                </PrivateRoute>
            }

        ]
    }
])
export default router;