import classNames from 'classnames';
import styles from './pages.module.scss';
import { AddButton } from '../add-button/add-button';
import AddButton_module from '../add-button/add-button.module.scss';

export interface PagesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Pages = ({ className }: PagesProps) => {
    return <div contentEditable="true" className={classNames(styles.root, className)}>Pages<AddButton />
        <AddButton className={styles.SectionAddBtn} />
    </div>;
};
