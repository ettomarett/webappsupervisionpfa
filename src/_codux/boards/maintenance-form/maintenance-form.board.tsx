import { createBoard } from '@wixc3/react-board';
import { MaintenanceForm } from '../../../components/maintenance-form/maintenance-form';

export default createBoard({
    name: 'MaintenanceForm',
    Board: () => <MaintenanceForm />
});
