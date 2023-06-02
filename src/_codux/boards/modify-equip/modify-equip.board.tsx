import { createBoard } from '@wixc3/react-board';
import { ModifyEquip } from '../../../components/modify-equip/modify-equip';

export default createBoard({
    name: 'ModifyEquip',
    Board: () => <ModifyEquip />
});
