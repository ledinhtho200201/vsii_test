import SearchFilter from './components/SeachFilter';
import Stopwatch from './components/StopWatch';
import TodoList from './components/TodoList';
import ValidatedInput from './components/ValidatedInput';

const App: React.FC = () => {
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <>
      <ValidatedInput
        validationFn={validateEmail}
        errorMessage="Please enter a valid email address."
      />
      <TodoList />
      {/* <Stopwatch />
      <SearchFilter /> */}
    </>
  )
}

export default App
