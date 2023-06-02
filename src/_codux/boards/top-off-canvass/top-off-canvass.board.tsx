import { createBoard } from '@wixc3/react-board';
import { TopOffCanvass } from '../../../components/top-off-canvass/top-off-canvass';

export default createBoard({
    name: 'TopOffCanvass',
    Board: () => <TopOffCanvass />
});
