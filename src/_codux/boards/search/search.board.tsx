import { createBoard } from '@wixc3/react-board';
import { Search } from '../../../components/search/search';

export default createBoard({
    name: 'Search',
    Board: () => <div>
        <Search/>
    </div>,
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
