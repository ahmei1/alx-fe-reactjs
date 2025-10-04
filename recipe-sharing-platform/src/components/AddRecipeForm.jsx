import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    preparation: '',
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Recipe title is required.';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required.';
    if (!formData.preparation.trim()) newErrors.preparation = 'Preparation steps are required.';

    // Example of custom validation (at least two ingredients)
    const ingredientLines = formData.ingredients.split('\n').filter(line => line.trim() !== '');
    if (ingredientLines.length < 2) {
      newErrors.ingredients = 'Please list at least two ingredients (one per line).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // In a real application, you would send this data to an API/database.
      console.log('New Recipe Submitted:', formData);

      // Simulate success and redirect after a short delay
      setIsSuccess(true);
      setFormData({ title: '', ingredients: '', preparation: '' }); // Clear form
      
      setTimeout(() => {
        setIsSuccess(false);
        navigate('/'); // Navigate back to the Home Page
      }, 3000);
    }
  };

  const InputField = ({ name, label, type = 'text', rows = 1 }) => {
    const isTextarea = rows > 1;
    const commonClasses = `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 transition duration-200 ${
      errors[name] 
        ? 'border-red-500 focus:ring-red-100' 
        : 'border-gray-300 focus:ring-blue-100'
    }`;
    
    return (
      <div className="form-group">
        <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-1">
          {label}
        </label>
        {isTextarea ? (
          <textarea
            name={name}
            id={name}
            rows={rows}
            value={formData[name]}
            onChange={handleChange}
            className={commonClasses}
          />
        ) : (
          <input
            type={type}
            name={name}
            id={name}
            value={formData[name]}
            onChange={handleChange}
            className={commonClasses}
          />
        )}
        {errors[name] && <p className="text-xs text-red-500 mt-1">{errors[name]}</p>}
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Submit a New Recipe
      </h1>

      {isSuccess && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg shadow-md">
          <p className="font-semibold">Success!</p>
          <p>Your recipe has been submitted and will now appear on the home page.</p>
        </div>
      )}

      {/* Responsive Form Styling (Task 3, Step 3) */}
      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-xl shadow-2xl space-y-6">
        
        <InputField name="title" label="Recipe Title" />
        
        <InputField 
          name="ingredients" 
          label="Ingredients (List one per line)" 
          rows={5} 
        />
        
        <InputField 
          name="preparation" 
          label="Preparation Steps (Detail each step)" 
          rows={7} 
        />

        {/* Submit Button Styling */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Share Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;