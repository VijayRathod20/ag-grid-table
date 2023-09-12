import React, { useEffect, useState } from "react";
// import axios from "axios";
import AgGridTable from "./AgGridTable";
import MOCK_DATA from "./MOCK_DATA.json";
const UserTable = () => {
  const [page, setPage] = useState(20);

  const [rowData, setRowData] = useState<any[]>(MOCK_DATA.slice(0, page));

  const handleScroll = (e: any) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollHeight - scrollTop === clientHeight) {
      // User has scrolled to the bottom
      setPage((prevPage) => prevPage + 10);
    }
  };
  useEffect(() => {
    async function getData() {
      //   const data = await axios.get(`http://localhost:5000/user?_page=${page}`);
      //   setRowData((prevData: any[]) => [...prevData, ...data.data]);

      setRowData(MOCK_DATA.slice(0, page));
    }
    getData();
  }, [page]);

  const onGridReady = async (params: any) => {
    // Store the grid API instance
    const gridApi = params.api;
    gridApi.addEventListener("selectionChanged", () => {
      // Get the selected rows data
      const selectedRows = gridApi.getSelectedRows();
      console.log("Selected Rows:", selectedRows);
    });
  };
  const columnDefs = [
    {
      headerName: "ID",
      field: "id",
      sortable: true,
      filter: true,
      pinned: false,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      showDisabledCheckboxes: true,
    },
    {
      headerName: "Name",
      field: "name",
      sortable: true,
      filter: true,
      pinned: false,
    },
    { headerName: "Email", field: "email", sortable: true, filter: true },
    { headerName: "Phone", field: "phone", sortable: true, filter: true },
    { headerName: "City", field: "city", sortable: true, filter: true },
  ];
  return (
    <AgGridTable
      rowData={rowData}
      columnDefs={columnDefs}
      onGridReady={onGridReady}
      onScroll={handleScroll}
    />
  );
};
export default UserTable;
