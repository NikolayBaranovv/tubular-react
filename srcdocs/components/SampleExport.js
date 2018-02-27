import DataGrid, {
    AggregateFunctions,
    ColumnDataType,
    ColumnModel,
    ColumnSortDirection,
    RemoteDataSource
} from '../../build/';
import React from 'react';

const columns = [
    new ColumnModel('OrderID',
        {
            DataType: ColumnDataType.NUMERIC,
            Filtering: true,
            IsKey: true,
            Label: 'ID',
            SortDirection: ColumnSortDirection.ASCENDING,
            SortOrder: 1,
            Sortable: true
        }
    ),
    new ColumnModel('CustomerName',
        {
            Aggregate: AggregateFunctions.COUNT,
            Filtering: true,
            Searchable: true,
            Sortable: true
        }
    )
];
class SamplePagination extends React.Component {
    state = {
        dataSource: new RemoteDataSource('http://tubular.azurewebsites.net/api/orders/paged', columns),
    };
    render() {
        const { dataSource } = this.state;
        return (
            <DataGrid
                dataSource={dataSource}
                showPrintButton={true}
                showExportButton={true}
                showBottomPager={true}
                showTopPager={true}
                rowsPerPage={10}
                gridName='table'
            />
        )
    }
}

export default SamplePagination;