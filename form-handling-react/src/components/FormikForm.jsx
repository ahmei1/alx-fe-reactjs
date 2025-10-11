import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik submitted:", values);
    alert("Form submitted successfully!");
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Register with Formik</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label>Username:</label>
            <Field name="username" type="text" className="w-full border p-2 rounded" />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label>Email:</label>
            <Field name="email" type="email" className="w-full border p-2 rounded" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label>Password:</label>
            <Field name="password" type="password" className="w-full border p-2 rounded" />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>

          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
