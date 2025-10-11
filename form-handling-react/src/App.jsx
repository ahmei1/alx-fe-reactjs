import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm'; // Note the lowercase 'f'

function App() {
  return (
    <div>
      <h1>Form Handling Demo</h1>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
}

export default App;