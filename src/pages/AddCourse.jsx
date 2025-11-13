import React from 'react';

const AddCourse = () => {
    const handleAddCourse = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const author = form.author.value;
        const category = form.category.value;
        const duration = form.duration.value;
        const price = form.price.value;
        const level = form.level.value;
        const image = form.image.value;
        const description = form.description.value;
        const date = new Date().toISOString().split('T')[0]; // Automatically add the date

        const newCourse = { title, author, category, duration, price, level, image, description, date };
        console.log(newCourse);


    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl p-8 space-y-8">
                <h2 className="text-3xl font-bold text-center text-gray-800">Add a New Course</h2>
                <form onSubmit={handleAddCourse} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Title */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Course Title</label>
                            <input type="text" name="title" id="title" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        {/* Author */}
                        <div>
                            <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                            <input type="text" name="author" id="author" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        {/* Category */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                            <select name="category" id="category" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="">Select a category</option>
                                <option value="IT & Security">IT & Security</option>
                                <option value="Development">Development</option>
                                <option value="Business">Business</option>
                                <option value="Design">Design</option>
                                <option value="Marketing">Marketing</option>
                            </select>
                        </div>

                        {/* Duration */}
                        <div>
                            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (e.g., 10h 30m)</label>
                            <input type="text" name="duration" id="duration" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        {/* Price */}
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price ($)</label>
                            <input type="number" name="price" id="price" step="0.01" min="0" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        {/* Level */}
                        <div>
                            <label htmlFor="level" className="block text-sm font-medium text-gray-700">Level</label>
                            <select name="level" id="level" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input type="url" name="image" id="image" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea name="description" id="description" rows="4" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
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