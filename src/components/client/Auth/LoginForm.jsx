import { useState } from 'react';
import AuthForm from '../../common//AuthForm';
import InputGroup from '../../common/InputGroup';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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
      
      // Simulate validation
      if (!formData.email || !formData.password) {
        throw new Error('Please fill in all required fields');
      }
      
      // Simulate successful login
      console.log('Login successful', formData);
      // Here you would redirect to dashboard or handle auth token
      
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthForm 
      title="Welcome Back" 
      subtitle="Sign in to your account to continue"
      onSubmit={handleSubmit}
      error={error}
    >
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
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
          />
          <label htmlFor="rememberMe" className="ml-2 block text-sm text-secondary-700">
            Remember me
          </label>
        </div>
        
        <div className="text-sm">
          <a href="/forgot-password" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
            Forgot password?
          </a>
        </div>
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
              Signing in...
            </div>
          ) : 'Sign in'}
        </button>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-secondary-600">
          Don't have an account?{' '}
          <a href="/register" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
            Create an account
          </a>
        </p>
      </div>
    </AuthForm>
  );
};

export default LoginForm;
