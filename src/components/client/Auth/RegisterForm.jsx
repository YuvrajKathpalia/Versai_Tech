import { useState } from 'react';
import AuthForm from '../../common//AuthForm';
import InputGroup from '../../common/InputGroup';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validate form
      if (!formData.fullName || !formData.email || !formData.password) {
        throw new Error('Please fill in all required fields');
      }
      
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }
      
      if (!formData.agreeTerms) {
        throw new Error('You must agree to the terms and conditions');
      }
      
      // Registration successful
      console.log('Registration successful', formData);
      // Here you would redirect to login or dashboard
      
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthForm 
      title="Create Account" 
      subtitle="Join us today and get started"
      onSubmit={handleSubmit}
      error={error}
    >
      <InputGroup
        label="Full Name"
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="John Doe"
        required
      />
      
      <InputGroup
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@example.com"
        required
      />
      
      <InputGroup
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="••••••••"
        required
      />
      
      <InputGroup
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="••••••••"
        required
      />
      
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="agreeTerms"
            name="agreeTerms"
            type="checkbox"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
          />
        </div>
        <label htmlFor="agreeTerms" className="ml-2 block text-sm text-secondary-700">
          I agree to the{' '}
          <a href="/terms" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
            Privacy Policy
          </a>
        </label>
      </div>
      
      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full py-2.5"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating account...
            </div>
          ) : 'Create Account'}
        </button>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-secondary-600">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
            Sign in
          </a>
        </p>
      </div>
    </AuthForm>
  );
};

export default RegisterForm;
