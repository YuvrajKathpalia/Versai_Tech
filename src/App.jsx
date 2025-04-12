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
    
    switch (currentPage) {
      case 'profile':
        return <UserProfile />;
      case 'orders':
        return <OrderHistory />;
      default:
        return <UserProfile />;
    }
  };
  
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
    setCurrentPage(isAuthenticated ? 'login' : 'profile');
  };
  
  return (
    <div className="min-h-screen bg-secondary-50">
      <header className="bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h1 className="text-xl font-bold text-secondary-900">MyShop</h1>
            </div>
            
            <nav className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <button 
                    onClick={() => handleNavigation('profile')}
                    className={`px-3 py-2 text-sm font-medium text-secondary-700 rounded-lg hover:bg-secondary-100 hover:text-secondary-900 transition-colors ${currentPage === 'profile' ? 'bg-primary-50 text-primary-700' : ''}`}
                  >
                    Profile
                  </button>
                  <button 
                    onClick={() => handleNavigation('orders')}
                    className={`px-3 py-2 text-sm font-medium text-secondary-700 rounded-lg hover:bg-secondary-100 hover:text-secondary-900 transition-colors ${currentPage === 'orders' ? 'bg-primary-50 text-primary-700' : ''}`}
                  >
                    Orders
                  </button>
                  <button 
                    onClick={toggleAuth}
                    className="btn-danger"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => handleNavigation('login')}
                    className={`px-3 py-2 text-sm font-medium text-secondary-700 rounded-lg hover:bg-secondary-100 hover:text-secondary-900 transition-colors ${currentPage === 'login' ? 'bg-primary-50 text-primary-700' : ''}`}
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => handleNavigation('register')}
                    className={`px-3 py-2 text-sm font-medium text-secondary-700 rounded-lg hover:bg-secondary-100 hover:text-secondary-900 transition-colors ${currentPage === 'register' ? 'bg-primary-50 text-primary-700' : ''}`}
                  >
                    Register
                  </button>
                  <button 
                    onClick={toggleAuth}
                    className="btn-primary"
                  >
                    Demo Login
                  </button>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>
      
      <main className="pb-8">
        {renderContent()}
      </main>
      
      {!isAuthenticated && (
        <footer className="bg-white border-t border-secondary-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-secondary-500">© 2025 MyShop. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="/terms" className="text-sm text-secondary-600 hover:text-primary-600 transition-colors">Terms</a>
                <a href="/privacy" className="text-sm text-secondary-600 hover:text-primary-600 transition-colors">Privacy</a>
                <a href="/contact" className="text-sm text-secondary-600 hover:text-primary-600 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;