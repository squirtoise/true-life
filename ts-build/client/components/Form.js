import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { SRedirectLink, SButton, SForm, SFormControl, SFormTitle, SInput, SLabel, SRedirect, SRedirectLabel, } from "./styles/Form.style";
const prepareForm = (formArr) => {
    return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};
const Form = ({ title, formArr, submitBtn, onSubmit, redirect }) => {
    const initialForm = useMemo(() => prepareForm(formArr), [formArr]);
    const [form, setForm] = useState(initialForm);
    const onChangeHandler = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    const onSumbitHandler = () => onSubmit(form, () => setForm(initialForm));
    const hasRedirect = !!redirect;
    return (_jsxs(SForm, { autoComplete: "off", children: [_jsx(SFormTitle, { children: title }), formArr.map(({ label, name, type }, index) => (_jsxs(SFormControl, { children: [_jsx(SLabel, { htmlFor: name, children: label }), _jsx(SInput, { id: name, name: name, type: type, value: form[name], onChange: (e) => onChangeHandler(e) })] }, index))), _jsx(SButton, { onClick: (e) => {
                    e.preventDefault();
                    onSumbitHandler();
                }, children: submitBtn }), hasRedirect && (_jsxs(SRedirect, { children: [_jsxs(SRedirectLabel, { children: [redirect.label, "\u00A0"] }), _jsx(SRedirectLink, { to: redirect.link.to, children: redirect.link.label })] }))] }));
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
    onSubmit: (form) => console.log(form),
    redirect: null,
};
export default Form;
