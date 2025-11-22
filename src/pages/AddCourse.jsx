import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import useTitle from '../hooks/useTitle';

const AddCourse = () => {

    const{user} = use(AuthContext);
    useTitle('Add Course');

    const handleAddCourse = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const author = user.displaName;
        const email = user.email;
        const category = form.category.value;
        const duration = form.duration.value;
        const price = form.price.value;
        const level = form.level.value;
        const image = form.image.value;
        const description = form.description.value;
        const date = new Date().toISOString().split('T')[0]; 

        const newCourse = { title, author,email, category, duration, price, level, image, description, date };
        
        fetch('https://eduhub-zeta-one.vercel.app/courses',{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCourse)
        }).then(res=>res.json())
        .then(()=>{
            
            toast.success("Course Added Successfully")
            form.reset();
        })
        .catch(err=>{
            console.log(err)
        })


    };

    return (

        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <ToastContainer />
            <div className="max-w-4xl w-full bg-base-100 rounded-lg shadow-xl p-8 space-y-8">
                <h2 className="text-3xl font-bold text-center text-base-content">Add a New Course</h2>
                <form onSubmit={handleAddCourse} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Title */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-base-content/80">Course Title</label>
                            <input type="text" name="title" id="title" required className="mt-1 block w-full px-4 py-2 border border-base-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>


                        {/* Category */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-base-content/80">Category</label>
                            <select name="category" id="category" required className="mt-1 block w-full px-4 py-2 border border-base-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="">Select a category</option>
                                <option value="IT & Security">IT & Security</option>
                                <option value="Development">Development</option>
                                <option value="Business">Business</option>
                                <option value="Design">Design</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Marketing">Machine Learning</option>
                            </select>
                        </div>

                        {/* Duration */}
                        <div>
                            <label htmlFor="duration" className="block text-sm font-medium text-base-content/80">Duration (e.g., 10h 30m)</label>
                            <input type="text" name="duration" id="duration" required className="mt-1 block w-full px-4 py-2 border border-base-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        {/* Price */}
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-base-content/80">Price ($)</label>
                            <input type="number" name="price" id="price" step="0.01" min="0" required className="mt-1 block w-full px-4 py-2 border border-base-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        {/* Level */}
                        <div>
                            <label htmlFor="level" className="block text-sm font-medium text-base-content/80">Level</label>
                            <select name="level" id="level" required className="mt-1 block w-full px-4 py-2 border border-base-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="">Select a level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                                <option value="All Levels">All Levels</option>
                            </select>
                        </div>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-base-content/80">Image URL</label>
                        <input type="url" name="image" id="image" required className="mt-1 block w-full px-4 py-2 border border-base-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-base-content/80">Description</label>
                        <textarea name="description" id="description" rows="4" required className="mt-1 block w-full px-4 py-2 border border-base-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Add Course
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCourse;