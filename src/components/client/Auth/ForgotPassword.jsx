import { useState } from 'react';
import AuthForm from '../../common//AuthForm';
import InputGroup from '../../common/InputGroup';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!email) {
        throw new Error('Email is required');
      }
      
      // Simulate successful password reset request
      setSuccess(true);
      
    } catch (err) {
      setError(err.message || 'Failed to process request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthForm 
      title="Reset Password" 
      subtitle="We'll send you a link to reset your password"
      onSubmit={handleSubmit}
      error={error}
    >
      {success ? (
        <div className="bg-success-50 border border-success-200 text-success-700 px-4 py-3 rounded-lg mb-6" role="alert">
          <p className="font-medium">Reset link sent!</p>
          <p className="text-sm mt-1">Please check your email inbox for instructions to reset your password.</p>
        </div>
      ) : (
        <>
          <InputGroup
            label="Email Address"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          
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
                  Sending...
                </div>
              ) : 'Send Reset Link'}
            </button>
          </div>
        </>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-secondary-600">
          Remember your password?{' '}
          <a href="/login" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
            Back to login
          </a>
        </p>
      </div>
    </AuthForm>
  );
};

export default ForgotPassword;