import { createBoard } from '@wixc3/react-board';
import { ManageEmployee } from '../../../components/manage-employee/manage-employee';

export default createBoard({
    name: 'ManageEmployee',
    Board: () => <ManageEmployee />
});
