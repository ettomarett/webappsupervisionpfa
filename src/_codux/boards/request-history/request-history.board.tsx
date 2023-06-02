import { createBoard } from '@wixc3/react-board';
import { RequestHistory } from '../../../components/request-history/request-history';

export default createBoard({
    name: 'RequestHistory',
    Board: () => <RequestHistory />
});
