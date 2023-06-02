import { createBoard } from '@wixc3/react-board';
import { Sidebar8 } from '../../../components/sidebar-8/sidebar-8';

export default createBoard({
    name: 'Sidebar8',
    Board: () => <Sidebar8 />,
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
        canvasWidth: 1023,
    },
});
