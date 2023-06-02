import { createBoard } from '@wixc3/react-board';
import { EmploySearch } from '../../../components/employ-search/employ-search';

export default createBoard({
    name: 'EmploySearch',
    Board: () => <EmploySearch />
});
