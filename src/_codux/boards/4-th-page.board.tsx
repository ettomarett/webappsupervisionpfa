import { createBoard } from '@wixc3/react-board';
import { Sidebar4 } from '../../components/sidebar-4/sidebar-4';

export default createBoard({
    name: '4th_page',
    Board: () => (
        <div>
            <Sidebar4 />
        </div>
    ),
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
