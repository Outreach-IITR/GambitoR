import React from "react";

import style from "./Updates.module.css";

const xyz = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cursus non neque tellus sagittis nam orci enim. Ac suspendisse aliquam pulvinar vulputate sagittis auctor et morbi sollicitudin.",
    time: "TIME",
    date: "DATE",
  },
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cursus non neque tellus sagittis nam orci enim. Ac suspendisse aliquam pulvinar vulputate sagittis auctor et morbi sollicitudin.",
    time: "TIME",
    date: "DATE",
  },
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cursus non neque tellus sagittis nam orci enim. Ac suspendisse aliquam pulvinar vulputate sagittis auctor et morbi sollicitudin.",
    time: "TIME",
    date: "DATE",
  },
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum cursus non neque tellus sagittis nam orci enim. Ac suspendisse aliquam pulvinar vulputate sagittis auctor et morbi sollicitudin.",
    time: "TIME",
    date: "DATE",
  },
];

const Updates = () => {
  return (
    <div className={style.updateContainer}>
      <h1 className={style.heading}>Updates</h1>
      <ul className={style.content}>
        {xyz.map((update, idx) => {
          return (
            <li className={style.updateBlock}>
              <p>{update.description}</p>
              <p>{update.time}"|"</p>
              <p>{update.date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Updates;
