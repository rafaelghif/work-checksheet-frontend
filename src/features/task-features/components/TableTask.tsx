import { TableColumn } from "react-data-table-component";
import Table from "../../../components/Table";
import { useMemo } from "react";
import Button from "../../../components/Button";
import { formatDateTime } from "../../../libs/date-fns";
import { TaskInterface } from "../../../types/task-type";
import { useQueryTask } from "../hooks/useQueryTask";

interface TableTaskProps {
    search?: string;
    handleClickBtnEdit: (data: TaskInterface) => void;
}

const TableTask: React.FC<TableTaskProps> = ({ search = "", handleClickBtnEdit }) => {
    const { data } = useQueryTask(search);
    const columns: TableColumn<TaskInterface>[] = useMemo(() => [{
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
        <Table columns={columns as TaskInterface[]} data={data} responsive pagination striped highlightOnHover />
    );
}

export default TableTask;