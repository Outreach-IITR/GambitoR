import React from "react";
import Card from "../../HelperComponents/Card/Card";
import style from "./RegisterForm.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import InputBox from "../../HelperComponents/InputBox/InputBox";
import RegButton from "../../HelperComponents/RegButton/RegButton";
import SharedButton from "../../HelperComponents/SharedButton/SharedButton";

const RegisterForm = () => {
  const [index, setIndex] = useState(0);

  const handleIndexChange = (idx) => {
    setIndex(idx);
  };

  const studentForm = useFormik({
    initialValues: {
      name: null,
      contactNumber: null,
      email: null,
    },
  });

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

  const StudentForm = () => {
    return (
      <form className={style.form}>
        <InputBox label={"Name"} name="name" value={studentForm.values.name} />
        <InputBox
          label={"Contact Number"}
          name="contactNumber"
          value={studentForm.values.contactNumber}
          type="number"
        />
        <InputBox
          label={"Email Address"}
          name="email"
          value={studentForm.values.email}
        />
        <SharedButton onClick={studentForm.handleSubmit} >Confirm</SharedButton>
      </form>
    );
  };

  return (
    <div className={style.structure}>
      <Card className={style.cardStructure}>
        <h1>{formDetails[index].heading}</h1>
        {index === 0 ? <StudentForm /> : null}
        <div className={style.dots}>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
        </div>
      </Card>
    </div>
  );
};

export default RegisterForm;
