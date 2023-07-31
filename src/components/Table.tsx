
import DataTable, { TableColumn, createTheme } from "react-data-table-component";
import { ExpandableRowsComponent } from "react-data-table-component/dist/src/DataTable/types";

interface ReactDataTableProps {
    data?: Array<unknown>;
    columns: TableColumn<unknown>[];
    pagination?: boolean;
    paginationServer?: boolean;
    striped?: boolean;
    responsive?: boolean;
    dense?: boolean;
    highlightOnHover?: boolean;
    paginationTotalRows?: number;
    onChangePage?: (newPage: number) => void;
    onChangeRowsPerPage?: (newPerPage: number, page: number) => void;
    progressPending?: boolean;
    progressComponent?: React.ReactNode;
    expandableRows?: boolean;
    expandableRowsComponent?: ExpandableRowsComponent<unknown>;
}

createTheme("dark", {
    background: {
        default: "transparent",
    },
});

const Table: React.FC<ReactDataTableProps> = ({ data = [], columns, pagination, paginationServer, striped, responsive, dense, highlightOnHover, paginationTotalRows, onChangePage, onChangeRowsPerPage, progressPending, progressComponent, expandableRows, expandableRowsComponent, }) => {
    return (
        <DataTable
            className="shadow-sm"
            columns={columns}
            data={data}
            pagination={pagination}
            paginationServer={paginationServer}
            striped={striped}
            responsive={responsive}
            dense={dense}
            highlightOnHover={highlightOnHover}
            paginationTotalRows={paginationTotalRows}
            expandableRows={expandableRows}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangeRowsPerPage}
            progressPending={progressPending}
            progressComponent={progressComponent}
            expandableRowsComponent={expandableRowsComponent}
        />
    );
}

export default Table;