# Authentication & Profile UI Demo

A modern, responsive React UI demonstration showcasing authentication and profile management interfaces, built with React, Vite, and Tailwind CSS. This project is a frontend UI prototype only for the assignment completion purposes with no actual authentication functionality, designed to display clean interfaces for login, registration, password reset, user profile updates, and order history visualization.

[Demo Link](https://your-demo-link-here) 

## About This Project

This is a **UI demonstration only**. All data is mocked, and no actual authentication or data persistence is implemented. It serves as a visual prototype or template for authentication and profile management interfaces.

## UI Features

- **Authentication Screens**:
  - Login interface with "Remember Me" option
  - Registration form with input fields
  - Forgot Password flow with email input screen
- **Profile UI Components**:
  - Personal information form (name, email, phone, address)
  - Order history display with mock data and product images
  - Fully responsive design across mobile, tablet, and desktop
- **Technical Highlights**:
  - Reusable UI components (`AuthForm`, `InputGroup`, `OrderItemCard`)
  - Static mock data for demonstration
  - Modular structure for easy customization
  - Tailwind CSS for responsive, utility-first styling

## Project Structure

```
auth-profile-ui/
├── public/
├── src/
│   ├── components/
│   │   ├── client/
│   │   │   ├── Auth/
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   ├── RegisterForm.jsx
│   │   │   │   └── ForgotPassword.jsx
│   │   │   └── Profile/
│   │   │       ├── UserProfile.jsx
│   │   │       └── OrderHistory.jsx
│   │   └── common/
│   │       ├── AuthForm.jsx
│   │       ├── InputGroup.jsx
│   │       └── OrderItemCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── tailwind.config.js
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm (or yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YuvrajKathpalia/Versai_Tech
   cd Versai_Tech
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser to view the UI demo.

## Usage

- **Authentication UI**: Navigate between Login, Register, and Forgot Password screens to see the interface designs.
- **Profile UI**: Click any buttons that navigate to the User Profile and Order History screens to view these interfaces.
- **Responsive Testing**: Resize the browser or use dev tools to see how the UI adapts to mobile, tablet, and desktop screen sizes.

## Design Guidelines

- **Component Reusability**: UI elements are built as reusable components for consistency.
- **Styling**: Tailwind CSS classes provide consistent styling across the application.
- **Mock Visuals**: Static data is used to demonstrate how real data would appear.
- **Responsiveness**: All UI elements are designed to work on multiple screen sizes.
- **Design System**: Consistent colors, spacing, and typography are applied throughout.

## Potential Integrations

For future use , I can look to extend this UI demo into a functional application:

- Add state management (React Context or Redux)
- Implement form validation with React Hook Form
- Connect to an authentication backend (Firebase, Auth0, or custom API)
- Add data fetching and persistence
- Implement routing for navigation between screens

## Contributing

This UI template is open for contributions. Feel free to suggest design improvements, additional UI components, or responsive design enhancements through issues or pull requests.


UI Design by Yuvraj(https://github.com/YuvrajKathpalia)