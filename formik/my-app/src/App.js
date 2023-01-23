import "./App.css";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import { Formik, Form } from "formik";
import * as yup from "yup";

let registrationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .matches(/^[a-zA-Zа-яА-Я]+$/, "Must be only letters"),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .required()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      "Phone number is not valid"
    )
    .min(12, "Must be exactly 12 digits")
    .max(12, "Must be exactly 12 digits"),
  // .test({
  //   name: "phone number",
  //   test: (value) => {
  //     return value.startsWith("+");
  //   },
  //   message: "Starts with +",
  // }),
});

function App() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        phone: "",
      }}
      validationSchema={registrationSchema}
      validateOnBlur
      onSubmit={(e) => {
        console.log("Submit", e);
      }}
    >
      {({ values, handleChange, setFieldValue }) => (
        <div className="App">
          <h1>My Form</h1>
          <Form className="form">
            <Input
              placeholder={"Jim"}
              id={"firstName"}
              name={"firstName"}
              type={"text"}
              text={"First name"}
              value={values.firstName}
              handleOnChange={handleChange}
            />
            <Input
              placeholder={"jim@gmail.com"}
              id={"email"}
              name={"email"}
              type={"email"}
              text={"Email"}
              value={values.email}
              handleOnChange={handleChange}
            />
            <Input
              placeholder={"380501112233"}
              id={"phone"}
              name={"phone"}
              type={"tel"}
              text={"Phone number"}
              value={values.phone}
              handleOnChange={handleChange}
            />
            <Button type={"submit"} text={"Submit"} />
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default App;
