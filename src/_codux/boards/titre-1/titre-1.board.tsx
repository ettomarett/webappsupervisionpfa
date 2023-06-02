import { createBoard } from '@wixc3/react-board';
import { Titre1 } from '../../../components/titre-1/titre-1';

export default createBoard({
    name: 'Titre1',
    Board: () => <Titre1 />
});
