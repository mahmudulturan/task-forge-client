import TableRow from "./TableRow/TableRow";
import PropTypes from 'prop-types';

const Table = ({tasks}) => {
    return (
        <table className="w-full">
            <thead className="text-text-col/100">
                <th>#</th>
                <th>Task Name</th>
                <th>Task Details</th>
                <th>Task Deadline</th>
                <th>Priority</th>
                <th> </th>
            </thead>
            <tbody className="text-text-col/85 ">
                {

                    tasks?.map((task, indx) => <TableRow key={indx} indx={indx} task={task}></TableRow>)

                }
            </tbody>
        </table>
    );
};
Table.propTypes = {
    tasks: PropTypes.array
}


export default Table;