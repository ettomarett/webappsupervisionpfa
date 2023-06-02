import { createBoard } from '@wixc3/react-board';
import { Sidebar3 } from '../../components/sidebar-3/sidebar-3';

export default createBoard({
    name: '3rd_page',
    Board: () => (
        <div>
            <Sidebar3 />
        </div>
    ),
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
