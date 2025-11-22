import { createBrowserRouter, Navigate } from "react-router";
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
import UpdateCourse from "../pages/UpdateCourse";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import EnrolledCourses from "../pages/EnrolledCourses";
import Error404 from "../pages/Error404";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayouts,
        children:[
            {
                index:true,
                Component: Home,
                loader: ()=>fetch('http://eduhub-zeta-one.vercel.app/latest-courses')
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
                loader:()=>fetch('http://eduhub-zeta-one.vercel.app/courses' ) ,
            },
            {
                path: 'courses/:id',
                element: (<PrivateRoute>
                    <CourseDetails></CourseDetails>
                    </PrivateRoute>),


            },
            {
                path: 'userDetails',
                Component: UserDetails,
            },
            

        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                index: true,
                element: <Navigate to="myCourses" />
            },
            {
                path: 'myCourses',
                element: <PrivateRoute>
                    <MyCourses></MyCourses>
                </PrivateRoute>
            },
            {
                path: 'addCourse',
                element: <PrivateRoute>
                    <AddCourse></AddCourse>
                </PrivateRoute>
            },
            {
                path: 'updateCourse/:id',
                element: <PrivateRoute>
                    <UpdateCourse></UpdateCourse>
                </PrivateRoute>,

            },
            {
                path: 'enrolledCourses',
                element: <PrivateRoute>
                    <EnrolledCourses></EnrolledCourses>
                </PrivateRoute>,
                loader:()=>fetch('http://eduhub-zeta-one.vercel.app/enrolled' ) ,
                
            }
        ]
    },
    {
        path: "*",
        Component: Error404
    }
])
export default router;