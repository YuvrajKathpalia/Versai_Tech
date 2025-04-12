import { useState } from 'react';
import LoginForm from './components/client/Auth/LoginForm';
import RegisterForm from './components/client/Auth/RegisterForm';
import ForgotPassword from './components/client/Auth/ForgotPassword';
import UserProfile from './components/client/Profile/UserProfile';
import OrderHistory from './components/client/Profile/OrderHistory';

const App = () => {
  
  const [currentPage, setCurrentPage] = useState('login');
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const renderContent = () => {
    
    if (!isAuthenticated) {
      switch (currentPage) {
        case 'login':
          return <LoginForm />;
        case 'register':
          return <RegisterForm />;
        case 'forgot-password':
          return <ForgotPassword />;
        default:
          return <LoginForm />;
      }
    }
    
    // Profile pages (when authenticated)
    switch (currentPage) {
      case 'profile':
        return <UserProfile />;
      case 'orders':
        return <OrderHistory />;
      default:
        return <UserProfile />;
    }
  };
  
  // Mock navigation
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  
  // Mock login/logout
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
    setCurrentPage(isAuthenticated ? 'login' : 'profile');
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
    
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Auth & Profile Demo</h1>
            </div>
            
            <div className="flex items-center">
              {isAuthenticated ? (
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleNavigation('profile')}
                    className={`text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md ${currentPage === 'profile' ? 'bg-gray-100' : ''}`}
                  >
                    Profile
                  </button>
                  <button 
                    onClick={() => handleNavigation('orders')}
                    className={`text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md ${currentPage === 'orders' ? 'bg-gray-100' : ''}`}
                  >
                    Orders
                  </button>
                  <button 
                    onClick={toggleAuth}
                    className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button 
                  onClick={toggleAuth}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Demo Login
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
      
      {/* Footer for auth pages navigation */}
      {!isAuthenticated && (
        <footer className="py-4 px-4 fixed bottom-0 w-full bg-white shadow-inner">
          <div className="max-w-7xl mx-auto flex justify-center space-x-6">
            <button 
              onClick={() => handleNavigation('login')}
              className={`text-sm ${currentPage === 'login' ? 'text-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Login
            </button>
            <button 
              onClick={() => handleNavigation('register')}
              className={`text-sm ${currentPage === 'register' ? 'text-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Register
            </button>
            <button 
              onClick={() => handleNavigation('forgot-password')}
              className={`text-sm ${currentPage === 'forgot-password' ? 'text-indigo-600 font-medium' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Forgot Password
            </button>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;