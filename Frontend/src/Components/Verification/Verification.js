import React from "react";
import style from "./Verification.module.css";
import cong from "./Assets/Group.png";
import SharedButton from "../../HelperComponents/SharedButton/SharedButton";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate();

  return (
    <div className={style.structure}>
      <div className={style.doodle}>
        <img src={cong} alt="" />
      </div>
      <h1>REGISTRATION SUCCESSFUL!</h1>
      <p>Best of luck for GambitoR!</p>
      <SharedButton onClick={() => navigate("/")}>CONTINUE</SharedButton>
    </div>
  );
};

export default Verification;
