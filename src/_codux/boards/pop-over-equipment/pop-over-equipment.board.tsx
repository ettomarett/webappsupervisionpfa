import { createBoard } from '@wixc3/react-board';
import { PopOverEquipment } from '../../../components/pop-over-equipment/pop-over-equipment';

export default createBoard({
    name: 'PopOverEquipment',
    Board: () => <PopOverEquipment />,
    environmentProps: {
        canvasHeight: 25,
    },
});
