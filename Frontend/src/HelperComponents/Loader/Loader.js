import React from 'react'
import style from "./Loader.module.css";
import {BiLoaderAlt} from "react-icons/bi";

const Loader = () => {
  return (
    <div >
      <BiLoaderAlt className={style.icon} size={48} />
    </div>
  )
}

export default Loader