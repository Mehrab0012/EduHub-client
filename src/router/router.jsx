import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import AuthenticateLayout from "../layouts/AuthenticateLayout";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";
import UserDetails from "../pages/UserDetails";
import AddCourse from "../pages/AddCourse";

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
                        path:'authenticate/signIn',
                        Component:SignIn,
                    },
                    {
                        path:'authenticate/signUp',
                        Component: SignUp,
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