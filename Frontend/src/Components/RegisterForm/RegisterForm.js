import React from "react";
import Card from "../../HelperComponents/Card/Card";
import style from "./RegisterForm.module.css";
import { Formik } from "formik";
import { useState } from "react";
import InputBox from "../../HelperComponents/InputBox/InputBox";
import SharedButton from "../../HelperComponents/SharedButton/SharedButton";
import api from "../../https/api";
import { get } from "loadsh";

const RegisterForm = () => {
  const [index, setIndex] = useState(0);
  const [submitObj, setSubmitObj] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  console.log(selectedFile?.name);

  const formDetails = [
    {
      heading: "STUDENT REGISTRATION",
    },
    {
      heading: "GUARDIAN DETAILS",
    },
    {
      heading: "SCHOOL DETAILS",
    },
  ];

  const handleFormData = async (values) => {
    console.log(values)
    try {
      const formData = new FormData();
      formData.append("marksheet", selectedFile);
      formData.append("name", submitObj.name);
      formData.append("email", submitObj.email);
      formData.append("contactNumber", submitObj.contactNumber.toString());
      formData.append("parent.contactNumber", submitObj.parent.contactNumber.toString());
      formData.append("parent.email", submitObj.parent.email);
      formData.append("parent.name", submitObj.parent.name);
      formData.append("school.name", values.name);
      formData.append("school.email", values.email);
      formData.append("school.contactNumber", values.contactNumber.toString());
      await api.post("/api/v1/registration", formData);
    } catch (err) {
      console.log(err);
    }
  };

  const StudentForm = () => {
    return (
      <Formik
        initialValues={{
          name: null,
          contactNumber: null,
          email: null,
        }}
        onSubmit={(values) => {
          setSubmitObj({ ...values, ...submitObj });
          setIndex(1);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form className={style.form} onSubmit={handleSubmit}>
            <InputBox
              label={"Name"}
              htmlFor={"name"}
              onChange={handleChange}
              name="name"
              type={"text"}
              value={values.name}
            />
            <InputBox
              label={"Contact Number"}
              name="contactNumber"
              onChange={handleChange}
              value={values.contactNumber}
              type="number"
            />
            <InputBox
              onChange={handleChange}
              label={"Email Address"}
              name="email"
              type={"email"}
              value={values.email}
            />
            <SharedButton
              type={"submit"}
              className={style.btn}
              onClick={handleSubmit}
            >
              Confirm
            </SharedButton>
          </form>
        )}
      </Formik>
    );
  };

  const ParentForm = () => {
    return (
      <Formik
        initialValues={{
          name: null,
          contactNumber: null,
          email: null,
        }}
        onSubmit={(values) => {
          setSubmitObj({ parent: values, ...submitObj });
          setIndex(2);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form className={style.form} onSubmit={handleSubmit}>
            <InputBox
              label={"Name"}
              htmlFor={"name"}
              onChange={handleChange}
              name="name"
              type={"text"}
              value={values.name}
            />
            <InputBox
              label={"Contact Number"}
              name="contactNumber"
              onChange={handleChange}
              value={values.contactNumber}
              type="number"
            />
            <InputBox
              onChange={handleChange}
              label={"Email Address"}
              name="email"
              type={"email"}
              value={values.email}
            />
            <SharedButton
              type={"submit"}
              className={style.btn}
              onClick={handleSubmit}
            >
              Confirm
            </SharedButton>
          </form>
        )}
      </Formik>
    );
  };

  const SchoolDetails = () => {
    return (
      <Formik
        initialValues={{
          name: null,
          contactNumber: null,
          email: null,
          marksheet: null,
        }}
        onSubmit={handleFormData}
      >
        {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
          <form className={style.form} onSubmit={handleSubmit}>
            <InputBox
              label={"Name"}
              htmlFor={"name"}
              onChange={handleChange}
              name="name"
              type={"text"}
              value={values.name}
            />
            <div className={style.flexRow}>
              <InputBox
                label={"Contact Number"}
                name="contactNumber"
                onChange={handleChange}
                value={values.contactNumber}
                type="number"
                className={style.number}
              />
              <InputBox
                onChange={handleChange}
                label={"Email Address"}
                name="email"
                type={"email"}
                value={values.email}
              />
            </div>
            <InputBox
              type="file"
              name="marksheet"
              onChange={(event) => {
                setFieldValue("file", event.currentTarget.files[0])
              }}
              value={values.marksheet}
            />
            <SharedButton
              type={"submit"}
              className={style.btn}
              onClick={handleSubmit}
            >
              Confirm
            </SharedButton>
          </form>
        )}
      </Formik>
    );
  };

  return (
    <div className={style.structure}>
      <Card className={style.cardStructure}>
        <h1>{formDetails[index].heading}</h1>
        {index === 0 ? (
          <StudentForm />
        ) : index === 1 ? (
          <ParentForm />
        ) : (
          <SchoolDetails />
        )}
        <div className={style.dots}>
          <div
            className={style.dot}
            style={{ opacity: `${index >= 0 ? 1 : 0.2}` }}
          ></div>
          <div
            className={style.dot}
            style={{ opacity: `${index >= 1 ? 1 : 0.2}` }}
          ></div>
          <div
            className={style.dot}
            style={{ opacity: `${index >= 2 ? 1 : 0.2}` }}
          ></div>
        </div>
      </Card>
    </div>
  );
};

export default React.memo(RegisterForm);
