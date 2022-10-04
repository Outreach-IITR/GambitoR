import { Table } from "antd";
import React, { useEffect, useState } from "react";
import api from "../../https/api";
import { get } from "lodash";
import axios from "axios";

const columns = [
  {
    title: "Name",
    dataIndex: "name",

    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  // {
  //   title: "Marksheet",
  //   dataIndex: "marksheet",
  //   render: (data) => (
  //     <p
  //       onClick={() => {
  //         axios
  //           .get(data, {
  //             headers: {
  //               Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  //             },
  //           })
  //           .then(response => {
  //             const url = window.URL.createObjectURL(new Blob([response.data]));
  //             const link = document.createElement('a');
  //             link.href = url;
  //             link.setAttribute('download', 'file.pdf'); //or any other extension
  //             document.body.appendChild(link);
  //             link.click();
  //           })
  //       }}
  //     >
  //       {data}
  //     </p>
  //   ),
  // },
  {
    title: "Class",
    dataIndex: "class",
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Phone",
    dataIndex: "contactNumber",
  },
  {
    title: "Referral Code",
    dataIndex: "referralCode",
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/api/v1/registration", {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });
        setData(get(res, "data.data"));
      } catch (err) {}
    })();
  }, []);
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default App;
