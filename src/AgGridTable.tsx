import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface AgGridTableProps {
  rowData: any[]; // Your data array
  columnDefs: any[]; // Your column definitions
  onGridReady: any;
  onScroll: any;
}
const AgGridTable: React.FC<AgGridTableProps> = ({
  rowData,
  columnDefs,
  onGridReady,
  onScroll,
}) => {
  return (
    <div
      className="ag-theme-alpine"
      onScroll={onScroll}
      style={{
        height: "400px", // Set a specific height
        width: "800px",
        overflowX: "auto", // Horizontal scrollbar
        overflowY: "auto", // Vertical scrollbar
        border: "1px solid #ccc",
      }}
    >
      <AgGridReact
        rowData={rowData}
        onCellClicked={() => console.log("Cell clicked!")}
        columnDefs={columnDefs}
        // pagination
        // paginationPageSize={10}
        domLayout="autoHeight"
        suppressRowDeselection
        alwaysShowHorizontalScroll
        animateRows
        rowMultiSelectWithClick
        rowSelection="multiple"
        onGridReady={onGridReady}
        rowModelType="clientSide"
      />
    </div>
  );
};
export default AgGridTable;
