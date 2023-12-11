import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input";
import Button from "components/Button";

import { Lesson25Wrapper, LoginForm, Text } from "./styles";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";

function Lesson25() {
  const schema = Yup.object().shape({
    email: Yup.string().required("Поле email обязателное").email("ne format"),
    password: Yup.string().min(3,`Min siphol 3`).max(10,`max siphol 10`).required(`Pole obyazatelno`)
  });
  // Создаем обьект formik, который включает в себя все необходимые
  // функции и свойста для управления данными из формы
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    validateOnChange:true,
    validateOnBlur: true,
    onSubmit: (values, actions) => {
    console.log(values)
    actions.resetForm();
    console.log(actions)
    },
  });

  console.log(formik);
  return (
    <Lesson25Wrapper>
      <LoginForm onSubmit={formik.handleSubmit}>
        <Text>Login form</Text>
        <Input
          error={formik.errors.email}
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          labelName="Email"
          placeholder="Enter email"
        />
        <Input
        error={formik.errors.password}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          labelName="Password"
          placeholder="Enter password"
        />
        <Button disabled={!formik.isValid||!formik.values.email||!formik.values.password} name="Login" type="submit"  />
      </LoginForm>
    </Lesson25Wrapper>
  );
}

export default Lesson25;
