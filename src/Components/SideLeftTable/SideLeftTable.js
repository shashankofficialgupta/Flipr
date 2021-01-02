import React from "react";
import { Card, Row } from "react-bootstrap";
import Destination from "../../assets/destination.svg";
import Warehouse from "../../assets/warehouse.svg";
import "./SideLeftTable.css";

const SideLeftTable = (props) => {
  return (
    <React.Fragment>
      <Card className="sideLeftTableCard">
        <img src={Destination} alt="FliprBrand" className="FliprTableNav" />
        <div class="vl">
          {props.tempData &&
            props.tempData.scan.map((data, i) => (
              <Row className="rowPartsOne" key={i}>
                <hr className="horizontalLineOne" />
                <span className="rowPartsspan">
                  {data.status_detail}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {data.time.substring(0, 10).split('-').reverse().join('-')}&nbsp;&nbsp;&nbsp;
                  {data.time.substring(11)}
                </span>
              </Row>
            ))}
        </div>
        <img src={Warehouse} alt="FliprBrand" className="FliprTableNav" />
      </Card>
    </React.Fragment>
  );
};

export default SideLeftTable;
