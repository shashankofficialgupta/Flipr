import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import SideLeftTable from "../SideLeftTable/SideLeftTable";
import "./SideRightTable.css";

const SideRightTable = (props) => {
  const [tempData, setTempData] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const handlePass = (awbno) => {
    let filterData = props.data.filter((data) => {
      return data.awbno === awbno;
    });
    setTempData(filterData);
  };
  return (
    <React.Fragment>
      <Table responsive>
        <thead>
          <tr>
            <th>AWB NUMBER</th>
            <th>TRANSPORTER</th>
            <th>SOURCE</th>
            <th>DESTINATION</th>
            <th>BRAND</th>
            <th>START DATE</th>
            <th>ETD</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((data, i) => (
              <tr
                key={i}
                onClick={() => {
                  handlePass(data.awbno);
                  setSelectedItemIndex(i);
                }}
                className={selectedItemIndex === i ? "active" : ""}
              >
                <td>{data.awbno}</td>
                <td>{data.carrier}</td>
                <td>{data.from}</td>
                <td>{data.to}</td>
                <td>{data.carrier}</td>
                <td>{data.pickup_date && data.pickup_date.substring(0, 10)}</td>
                <td>
                  {data.extra_fields &&
                    data.extra_fields.expected_delivery_date.substring(0, 10)}
                </td>
                <td className="tableCurrentStatus">{data.current_status}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <SideLeftTable tempData={tempData[0]} />
    </React.Fragment>
  );
};

export default SideRightTable;
