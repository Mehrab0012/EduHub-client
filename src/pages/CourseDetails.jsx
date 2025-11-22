import { LoaderPinwheel } from 'lucide-react';
import React, { use, useEffect, useState } from 'react';
import { FaStar, FaUserFriends, FaClock, FaLayerGroup, FaCertificate, FaInfinity, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { useParams } from 'react-router';
import Loader from '../components/Loader/Loader';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import useTitle from '../hooks/useTitle';

const CourseDetails = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading]= useState(true);
    const {user}= use(AuthContext);

    useEffect(() => {
        fetch(`http://eduhub-zeta-one.vercel.app/courses/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log()
                setData(data.result);
                setLoading(false)
            })

    }, [])

    const { author, category, date, description, image, level, price, rating, students, title, duration } = data;
    useTitle(title || 'Course Details');

    // Sample data for what you'll learn and requirements
    const learningObjectives = [
        "Master the fundamentals of this technology.",
        "Build real-world applications from scratch.",
        "Understand advanced concepts and best practices.",
        "Prepare for industry certification exams."
    ];

    const requirements = [
        "A computer with internet access.",
        "Basic understanding of web development concepts.",
        "No prior experience with the specific technology is required."
    ];

    if(loading){
        return <Loader></Loader>
    }
    const handleEnroll=()=>{
        fetch('http://eduhub-zeta-one.vercel.app/enrolled',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...data, enrolled_by: user.email})
                    }).then(res=>res.json())
                    .then(()=>{
                        
                        toast.success("Enrolled Successfully")
                    })
                    .catch(err=>{
                        console.log(err)
            })
    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className=" ">
                <header className="  pt-16 pb-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                            <div className="lg:col-span-2">
                                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-2">{category}</p>
                                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{title}</h1>
                                <p className="text-lg text-base-content mb-6">A comprehensive guide to mastering the concepts for all skill levels.</p>
                                <div className="flex flex-wrap items-center text-sm text-base-content gap-x-6 gap-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-yellow-400">{rating}</span>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className={i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-500'} />
                                            ))}
                                        </div>
                                        <span className="text-gray-400">({students} ratings)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaUserFriends />
                                        <span>Created by <span className="font-semibold">{author}</span></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MdLanguage />
                                        <span>English</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
                    <div className="flex max-lg:flex-col-reverse  lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="lg:col-span-2 max-lg:mt-10 space-y-8">
                            <div className="bg-base-100  shadow-xl rounded-lg border border-base-200  p-8">
                                <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    {learningObjectives.map((objective, index) => (
                                        <li key={index} className="flex items-start">
                                            <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                            <span>{objective}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-base-100  shadow-xl rounded-lg p-8">
                                <h2 className="text-2xl text-base-content font-bold mb-4">Description</h2>
                                <div className="prose dark:prose-invert max-w-none text-base-content whitespace-pre-line">
                                    {description}
                                </div>
                            </div>

                            <div className="shadow-xl rounded-lg p-8">
                                <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                                <ul className="space-y-3">
                                    {requirements.map((req, index) => (
                                        <li key={index} className="flex items-start">
                                            <FaExclamationCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 lg:mt-0 ">
                            <div className="lg:sticky lg:top-8">
                                <div className="sm:w-1/2 m-auto lg:w-full shadow-xl rounded-lg overflow-hidden">
                                    <img src={image} alt={title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <p className="text-4xl font-bold mb-4">${price}</p>
                                        <button onClick={handleEnroll} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg">
                                            Enroll Now
                                        </button>

                                        <p className="text-xs text-center text-gray-500 mt-4">30-Day Money-Back Guarantee</p>
                                    </div>
                                    <div className="p-6 border-t border-base-200">
                                        <h3 className="font-bold text-lg mb-4">This course includes:</h3>
                                        <ul className="space-y-3 text-sm text-base-content/70">
                                            <li className="flex items-center"><FaClock className="mr-3 text-blue-500" />{duration} on-demand video</li>
                                            <li className="flex items-center"><FaLayerGroup className="mr-3 text-blue-500" />Content level: {level}</li>
                                            <li className="flex items-center"><FaInfinity className="mr-3 text-blue-500" />Full lifetime access</li>
                                            <li className="flex items-center"><FaCertificate className="mr-3 text-blue-500" />Certificate of completion</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </main>
                <footer className="py-12">
                </footer>
            </div>
        </div>
    );
};

export default CourseDetails;