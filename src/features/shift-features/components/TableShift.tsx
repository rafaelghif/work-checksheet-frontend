import { TableColumn } from "react-data-table-component";
import Table from "../../../components/Table";
import { useMemo } from "react";
import Button from "../../../components/Button";
import { formatDateTime } from "../../../libs/date-fns";
import { ShiftInterface } from "../../../types/shift-type";
import { useQueryShift } from "../hooks/useQueryShift";

interface TableShiftProps {
    search?: string;
    handleClickBtnEdit: (data: ShiftInterface) => void;
}

const TableShift: React.FC<TableShiftProps> = ({ search = "", handleClickBtnEdit }) => {
    const { data } = useQueryShift(search);
    const columns: TableColumn<ShiftInterface>[] = useMemo(() => [{
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
        grow: 2,
        wrap: true
    }, {
        name: "Status",
        cell: (row) => <span>{row.inActive ? "InActive" : "Active"}</span>,
        sortable: true,
        conditionalCellStyles: [{
            when: row => row.inActive,
            style: {
                color: "#dc3545"
            }
        }]
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
        <Table columns={columns as ShiftInterface[]} data={data} responsive pagination striped highlightOnHover />
    );
}

export default TableShift;