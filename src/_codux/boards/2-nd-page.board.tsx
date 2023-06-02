import { createBoard } from '@wixc3/react-board';
import { Sidebar2 } from '../../components/sidebar-2/sidebar-2';

export default createBoard({
    name: '2nd_page',
    Board: () => (
        <div>
            <Sidebar2 />
        </div>
    ),
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
        canvasHeight: 241,
    },
});
