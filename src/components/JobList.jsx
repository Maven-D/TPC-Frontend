import React, { useEffect, useMemo, useState } from "react";

// import styled from "styled-components";
import { useTable, useSortBy } from "react-table";
import { toast } from "react-toastify";

function JobList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/getjobs/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res.json().then((jobs) => {
        let jobsArr = JSON.parse(jobs["jobs"]);
        jobsArr = jobsArr.map((elem) => {
          // { sno: 1, job_title: "SDE", company: "Google", ctc: 1000000 },
          return {
            sno: elem["pk"],
            job_title: elem["fields"]["jobTitle"],
            company: elem["fields"]["cid"],
            minQualification: elem["fields"]["minQual"],
          };
        });
        // console.log(jobsArr);

        setData(jobsArr);
      })
    );
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "S.No.",
        accessor: "sno",
      },
      {
        Header: "Job Title",
        accessor: "job_title",
      },
      {
        Header: "Company",
        accessor: "company",
      },
      {
        Header: "Minimum Qualification",
        accessor: "minQualification",
      },
      {
        Header: "Apply",
        accessor: "apply",
        Cell: (props) => (
          <div onClick={() => applyForJob(props)} style={{ cursor: "pointer" }}>
            Apply Here
          </div>
        ),
      },
    ],
    []
  );

  const applyForJob = (cell) => {
    console.log(cell?.row?.original);
    fetch("/api/apply/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jid: cell?.row?.original["sno"],
      }),
    }).then((res) => {
      if (res.ok) {
        toast.success("Applied Successfully!");
      }
    });
  };

  // const data = useMemo(
  //   () => [
  //     { sno: 1, job_title: "SDE", company: "Google", ctc: 1000000 },
  //     { sno: 2, job_title: "SDE", company: "Google", ctc: 800000 },
  //     { sno: 3, job_title: "SDE", company: "Google", ctc: 900000 },
  //     { sno: 4, job_title: "SDE", company: "Google", ctc: 700000 },
  //   ],
  //   []
  // );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20);
  // console.log(data);

  return (
    <div className="job-table">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
    </div>
  );
}

export default JobList;
