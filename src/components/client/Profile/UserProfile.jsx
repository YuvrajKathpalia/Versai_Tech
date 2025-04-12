import { useState } from 'react';
import InputGroup from '../../common/InputGroup';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '555-123-4567',
    address: '123 Main St, Anytown, USA'
  });
  
  const [formData, setFormData] = useState({...userData});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update user data
      setUserData({...formData});
      setSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      
    } catch (err) {
      setError(err.message || 'Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="content-card">
        <div className="border-b border-secondary-200 pb-5 mb-6">
          <h2 className="text-2xl font-bold text-secondary-900">Profile Information</h2>
          <p className="mt-1 text-sm text-secondary-500">Update your account information and preferences</p>
        </div>
        
        {error && (
          <div className="bg-error-50 border border-error-200 text-error-700 px-4 py-3 rounded-lg mb-6" role="alert">
            <p>{error}</p>
          </div>
        )}
        
        {success && (
          <div className="bg-success-50 border border-success-200 text-success-700 px-4 py-3 rounded-lg mb-6" role="alert">
            <p className="font-medium">Success!</p>
            <p className="text-sm mt-1">Your profile information has been updated.</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
            <InputGroup
              label="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            
            <InputGroup
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <InputGroup
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            
            <InputGroup
              label="Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          
          <div className="mt-8 flex items-center justify-end space-x-4">
            <button
              type="button"
              onClick={() => setFormData({...userData})}
              className="btn-secondary"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </div>
              ) : 'Save Changes'}
            </button>
          </div>
        </form>
        
        <div className="mt-12 border-t border-secondary-200 pt-6">
          <h3 className="text-lg font-medium text-secondary-900 mb-4">Security Settings</h3>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-secondary-800">Password</h4>
              <p className="text-sm text-secondary-500 mt-1">Last updated 3 months ago</p>
            </div>
            <button
              type="button"
              className="btn-secondary"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;