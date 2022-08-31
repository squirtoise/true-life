import React, { useState, useMemo } from "react";
import { Link } from 'react-router-dom';
import {
  SRedirectLink,
  SButton,
  SForm,
  SFormControl,
  SFormTitle,
  SInput,
  SLabel,
  SRedirect,
  SRedirectLabel,
} from "./styles/Form.style";

interface FormProps {
  title: string;
  formArr: any[];
  submitBtn: React.ReactNode;
  onSubmit: (form: any, callback: () => void) => void;
  redirect?: any; // not sure what type to use for a React Router Link if we will pass that
}

const prepareForm = (formArr: any[]) => {
  return formArr.reduce<{name?: string}>((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({ title, formArr, submitBtn, onSubmit, redirect }: FormProps) => {
  const initialForm = useMemo(() => prepareForm(formArr), [formArr]);
  const [form, setForm] = useState(initialForm);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onSumbitHandler = () => onSubmit(form, () => setForm(initialForm));

  const hasRedirect = !!redirect;
  return (
      <SForm autoComplete={"off"}>
          <SFormTitle>{title}</SFormTitle>
          {formArr.map(({ label, name, type }, index) => (
              <SFormControl key={index}>
                  <SLabel htmlFor={name}>{label}</SLabel>
                  <SInput
                      id={name}
                      name={name}
                      type={type}
                      value={form[name as keyof typeof form]}
                      onChange={(e) => onChangeHandler(e)}
                  />
              </SFormControl>
          ))}
          <SButton
              onClick={(e) => {
                  e.preventDefault();
                  onSumbitHandler();
              }}
          >
              {submitBtn}
          </SButton>
          {hasRedirect && (
              <SRedirect>
                  <SRedirectLabel>{redirect.label}&nbsp;</SRedirectLabel>
                  <SRedirectLink to={redirect.link.to}>{redirect.link.label}</SRedirectLink>
              </SRedirect>
          )}
      </SForm>
  );
};

Form.defaultProps = {
  title: "Sign In",
  formArr: [
      {
          label: "Email",
          name: "email",
          type: "text",
      },
      {
          label: "Password",
          name: "password",
          type: "password",
      },
  ],
  submitBtn: "Sign In",
  onSubmit: (form: any) => console.log(form),
  redirect: null,
};

export default Form;

