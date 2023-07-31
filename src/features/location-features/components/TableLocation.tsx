import { TableColumn } from "react-data-table-component";
import Table from "../../../components/Table";
import { useMemo } from "react";
import Button from "../../../components/Button";
import { formatDateTime } from "../../../libs/date-fns";
import { useQueryLocation } from "../hooks/useQueryLocation";
import { LocationInterface } from "../../../types/location-type";

interface TableLocationProps {
    search?: string;
    handleClickBtnEdit: (data: LocationInterface) => void;
}

const TableLocation: React.FC<TableLocationProps> = ({ search = "", handleClickBtnEdit }) => {
    const { data } = useQueryLocation(search);
    const columns: TableColumn<LocationInterface>[] = useMemo(() => [{
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
        <Table columns={columns as LocationInterface[]} data={data} responsive pagination striped highlightOnHover />
    );
}

export default TableLocation;