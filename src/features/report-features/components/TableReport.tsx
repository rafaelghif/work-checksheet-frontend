import { TableColumn } from "react-data-table-component";
import Table from "../../../components/Table";
import { useMemo } from "react";
import { EmployeeInterface } from "../../../types/employee-type";
import Button from "../../../components/Button";
import { ChecksheetInterface } from "../../../types/checksheet-type";
import { useQueryChecksheet } from "../hooks/useQueryChecksheet";
import DetailReport from "./DetailReport";
import useUserStore from "../../../stores/useUserStore";

interface TableReportProps {
    search?: string;
    yearFilter: string;
    monthFilter: string;
    handleClickApprove: (data: ChecksheetInterface) => void;
}

const TableReport: React.FC<TableReportProps> = ({ search = "", yearFilter, monthFilter, handleClickApprove }) => {
    const { user } = useUserStore();

    const { data } = useQueryChecksheet(yearFilter, monthFilter, user.role, search);

    const columns: TableColumn<ChecksheetInterface>[] = useMemo(() => [{
        name: "Employee Id",
        selector: (row) => row.Employee.employeeId,
        sortable: true,
        wrap: true
    }, {
        name: "Name",
        selector: (row) => row.Employee.name,
        sortable: true,
        wrap: true
    }, {
        name: "Date",
        selector: (row) => row.date,
        sortable: true,
        wrap: true
    }, {
        name: "Shift",
        selector: (row) => row.Shift.name,
        sortable: true,
        wrap: true
    }, {
        name: "Status",
        selector: (row) => row.status.toUpperCase(),
        sortable: true,
        wrap: true,
        conditionalCellStyles: [{
            when: row => row.status === "request",
            style: {
                color: "#dc3545"
            }
        }]
    }, user.role !== "Client" && user.role !== "Basic" ? {
        name: "Approve",
        cell: (row) => <Button color="primary" hidden={row.status === "approve"} onClick={() => { handleClickApprove(row) }}>Approve</Button>,
        center: true
    } : {}], [handleClickApprove]);
    return (
        <Table columns={columns as EmployeeInterface[]} data={data} responsive pagination striped highlightOnHover expandableRows expandableRowsComponent={DetailReport as any} />
    );
}

export default TableReport;