import React, { useMemo } from "react";
// import styled from "styled-components";
import { useTable, useSortBy } from "react-table";

function JobList() {
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
        Header: "CTC",
        accessor: "ctc",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      { sno: 1, job_title: "SDE", company: "Google", ctc: 1000000 },
      { sno: 2, job_title: "SDE", company: "Google", ctc: 800000 },
      { sno: 3, job_title: "SDE", company: "Google", ctc: 900000 },
      { sno: 4, job_title: "SDE", company: "Google", ctc: 700000 },
    ],
    []
  );

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
