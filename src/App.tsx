import BreedDetails from './components/BreedDetail';
import TodoList from './components/Test1/TodoList';
import ValidatedInput from './components/Test1/ValidatedInput';
import Test2 from './components/Test2';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from './pages/ErrorBoundary';
import GuestPage from './pages/GuestPage';
import Login from './pages/Login';

const App: React.FC = () => {
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <>
      {/* <ValidatedInput
        validationFn={validateEmail}
        errorMessage="Please enter a valid email address."
      />
      <TodoList /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Test2 />} />

          <Route path="/breed/:id" element={<BreedDetails />} />
          <Route path="/guest" element={<GuestPage />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<ErrorBoundary />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
