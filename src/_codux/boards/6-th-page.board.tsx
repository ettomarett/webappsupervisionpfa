import { createBoard } from '@wixc3/react-board';
import { Sidebar6 } from '../../components/sidebar-6/sidebar-6';
import { RequestHistory } from '../../components/request-history/request-history';

export default createBoard({
    name: '6th_page',
    Board: () => (
        <div>
            <Sidebar6 />
            <RequestHistory />
        </div>
    ),
    environmentProps: {
        windowWidth: 1444,
        windowHeight: 720,
    },
});
