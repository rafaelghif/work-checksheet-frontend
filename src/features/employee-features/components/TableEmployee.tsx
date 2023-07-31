import { TableColumn } from "react-data-table-component";
import Table from "../../../components/Table";
import { useMemo } from "react";
import { EmployeeInterface } from "../../../types/employee-type";
import Button from "../../../components/Button";
import { formatDateTime } from "../../../libs/date-fns";
import { useQueryEmployee } from "../hooks/useQueryEmployee";

interface TableEmployeeProps {
    search?: string;
    handleClickBtnEdit: (data: EmployeeInterface) => void;
}

const TableEmployee: React.FC<TableEmployeeProps> = ({ search = "", handleClickBtnEdit }) => {
    const { data } = useQueryEmployee(search);
    const columns: TableColumn<EmployeeInterface>[] = useMemo(() => [{
        name: "Employee Id",
        selector: (row) => row.employeeId,
        sortable: true,
        wrap: true
    }, {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
        grow: 2,
        wrap: true
    }, {
        name: "Status",
        cell: (row) => <span>{row.inActive ? "InActive" : "Active"}</span>,
        sortable: true,
    }, {
        name: "Update By",
        selector: (row) => row.updatedBy,
        sortable: true,
    }, {
        name: "Update At",
        selector: (row) => formatDateTime(row.updatedAt),
        sortable: true,
        wrap: true
    }, {
        name: "Edit",
        cell: (row) => <Button color="warning" onClick={() => { handleClickBtnEdit(row) }}>Edit</Button>,
        center: true
    }], [handleClickBtnEdit]);
    return (
        <Table columns={columns as EmployeeInterface[]} data={data} responsive pagination striped highlightOnHover />
    );
}

export default TableEmployee;