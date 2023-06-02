import { createBoard } from '@wixc3/react-board';
import { Sidebar } from '../../components/sidebar/sidebar';

export default createBoard({
    name: '1st_page',
    Board: () => (
        <div>
            <Sidebar />
        </div>
    ),
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
