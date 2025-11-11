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

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayouts,
        children:[
            {
                index:true,
                Component: Home,
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
            },
            {
                path: 'course/:id',
                Component: CourseDetails,
            },
            {
                path: 'userDetails',
                Component: UserDetails,
            },
            {
                path: 'addCourse',
                Component: AddCourse,
            }

        ]
    }
])
export default router;