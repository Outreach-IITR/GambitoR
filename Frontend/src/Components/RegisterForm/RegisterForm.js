import React from "react";
import Card from "../../HelperComponents/Card/Card";
import style from "./RegisterForm.module.css";
import { Formik } from "formik";
import { useState } from "react";
import InputBox from "../../HelperComponents/InputBox/InputBox";
import SharedButton from "../../HelperComponents/SharedButton/SharedButton";
import api from "../../https/api";
import { get } from "loadsh";
import { useNavigate } from "react-router-dom";
import Loader from "../../HelperComponents/Loader/Loader";
import { useEffect } from "react";

const RegisterForm = () => {
  const [index, setIndex] = useState(0);
  const [submitObj, setSubmitObj] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const options = [
    {
      label: "METIOX (For 9 & 10)",
      value: "metiox",
    },
    {
      label: "APOLLOX (For 11)",
      value: "apollox",
    },
    {
      label: "ATHENOX (For 12)",
      value: "athenox",
    },
  ];

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

  const handleValidate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.contactNumber) {
      errors.contactNumber = "Required";
    }
    if (
      values.contactNumber < 999999999 ||
      values.contactNumber > 10000000000
    ) {
      errors.contactNumber = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
      errors.email = "Required";
    }
    return errors;
  };

  useEffect(() => {
    window.alert("Registrations are closed!");
    navigate("/");
  }, [])

  const handleFormData = async (values) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("marksheet", get(values, "file"));
      formData.append("name", get(submitObj, "name"));
      formData.append(
        "referralCode",
        get(submitObj, "referralCode", "").toUpperCase()
      );
      formData.append("email", get(submitObj, "email"));
      formData.append("class", get(submitObj, "class"));
      formData.append(
        "contactNumber",
        get(submitObj, "contactNumber", "").toString()
      );
      formData.append(
        "parent.contactNumber",
        get(submitObj, "parent.contactNumber", "").toString()
      );
      formData.append("parent.email", submitObj.parent.email);
      formData.append("parent.name", submitObj.parent.name);
      formData.append("school.name", values.name);
      formData.append("school.email", values.email);
      formData.append(
        "school.contactNumber",
        (get(values, "contactNumber") || "").toString()
      );
      await api.post("/api/v1/registration", formData);
      navigate("/verify");
    } catch (err) {
      window.alert(get(err, "response.data.message", "Error"));
      setIndex(0);
      console.log(err);
    }
    setLoading(false);
  };

  const StudentForm = () => {
    return (
      <Formik
        initialValues={{
          name: null,
          contactNumber: null,
          email: null,
          class: options[0].value,
          referralCode: undefined,
        }}
        onSubmit={(values) => {
          setSubmitObj({ ...values, ...submitObj });
          setIndex(1);
        }}
        validate={handleValidate}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.container}>
              <InputBox
                label={"Name"}
                htmlFor={"name"}
                onChange={handleChange}
                name="name"
                className={errors.name ? style.inputError : ""}
                type={"text"}
                value={values.name}
              />
              <div className={style.select}>
                <select
                  name="class"
                  id=""
                  value={values.class}
                  onChange={(e) => setFieldValue("class", e.target.value)}
                >
                  {options.map((data, idx) => {
                    return <option value={data.value}>{data.label}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className={style.container}>
              <InputBox
                label={"Contact Number"}
                name="contactNumber"
                onChange={handleChange}
                value={values.contactNumber}
                type="number"
                className={errors.contactNumber ? style.inputError : ""}
              />
            </div>
            <div className={style.container}>
              <InputBox
                onChange={handleChange}
                label={"Email Address"}
                name="email"
                type={"email"}
                className={errors.email ? style.inputError : ""}
                value={values.email}
              />
              {/* <SharedButton className={style.btn} onClick={handleSubmit}>
                Verify
              </SharedButton> */}
            </div>
            <div className={style.container}>
              <InputBox
                onChange={handleChange}
                label={"Referral Code (if any)"}
                name="referralCode"
                type={"text"}
                inputStyle={{
                  textTransform: "uppercase",
                }}
                // className={errors.referralCode ? style.inputError : ""}
                value={values.referralCode}
              />
              {/* <SharedButton className={style.btn} onClick={handleSubmit}>
                Verify
              </SharedButton> */}
            </div>
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
        validate={handleValidate}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form className={style.form} onSubmit={handleSubmit}>
            <InputBox
              label={"Name"}
              htmlFor={"name"}
              onChange={handleChange}
              name="name"
              type={"text"}
              className={errors.name ? style.inputError : ""}
              value={values.name}
            />
            <InputBox
              label={"Contact Number"}
              name="contactNumber"
              onChange={handleChange}
              value={values.contactNumber}
              className={errors.contactNumber ? style.inputError : ""}
              type="number"
            />
            <InputBox
              onChange={handleChange}
              label={"Email Address"}
              name="email"
              type={"email"}
              className={errors.email ? style.inputError : ""}
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
        validate={(values) => {
          const errors = {};
          if (values.file) {
            if (values.file.type !== "application/pdf") {
              errors.marksheet = "Required.";
            }
            if (values.file.size > 1024 * 1024) {
              errors.marksheet = "Required.";
            }
          } else {
            errors.marksheet = "Required.";
          }
          console.log(errors);
          return errors;
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form className={style.form} onSubmit={handleSubmit}>
            <InputBox
              label={"Name"}
              htmlFor={"name"}
              onChange={handleChange}
              name="name"
              type={"text"}
              className={errors.name ? style.inputError : ""}
              value={values.name}
            />
            <div className={style.flexRow}>
              <InputBox
                label={"Contact Number"}
                name="contactNumber"
                onChange={handleChange}
                value={values.contactNumber}
                type="number"
                className={`${style.number} ${errors.contactNumber ? style.inputError : ""
                  }`}
              />
              <InputBox
                onChange={handleChange}
                label={"Email Address"}
                name="email"
                className={errors.email ? style.inputError : ""}
                type={"email"}
                value={values.email}
              />
            </div>
            <InputBox
              accept={"application/pdf"}
              type="file"
              label={"Marksheet (PDF) upto 1MB"}
              name="marksheet"
              className={errors.marksheet ? style.inputError : ""}
              onChange={(event) => {
                setFieldValue("file", event.currentTarget.files[0]);
              }}
              value={values.marksheet}
            />
            <SharedButton
              disabled={loading}
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
        {loading ? (
          <div className={style.loader}>
            <Loader />
          </div>
        ) : (
          <>
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
          </>
        )}
        <p>
          {/* Facing any issue registering Contact: <b>7877553148</b>{" "} */}
        </p>
      </Card>
    </div>
  );
};

export default React.memo(RegisterForm);
