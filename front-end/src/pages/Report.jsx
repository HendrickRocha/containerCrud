import { useEffect } from "react";
import { useState } from "react";
import { getReport } from "../api/report";

import Header from "../components/Header";
import Table from "../components/Table";

const Report = () => {
    const [report, setReport] = useState([])

    useEffect(()=>{
        getReport(setReport)
    },[report])


  return (
    <>
      <Header />
      <Table page='report' item={report}/>
    </>
  );
};

export default Report;
