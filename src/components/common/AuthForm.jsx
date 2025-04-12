// import { useState } from 'react';

const AuthForm = ({ title, subtitle, children, onSubmit, error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="form-card">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">{title}</h1>
          {subtitle && <p className="text-secondary-500">{subtitle}</p>}
        </div>
        
        {error && (
          <div className="bg-error-50 border border-error-200 text-error-700 px-4 py-3 rounded-lg mb-6" role="alert">
            <p>{error}</p>
          </div>
        )}
        
        <form className="space-y-6" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;