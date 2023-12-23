import { createBoard } from '@wixc3/react-board';
import { Pages } from '../../../components/pages/pages';

export default createBoard({
    name: 'Pages',
    Board: () => <Pages />,
    isSnippet: true,
});
