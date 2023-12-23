import { createBoard } from '@wixc3/react-board';
import { AddButton } from '../../../components/add-button/add-button';

export default createBoard({
    name: 'AddButton',
    Board: () => <AddButton />,
    isSnippet: true,
});
