import classNames from 'classnames';
import styles from './working-area.module.scss';
import { Pages } from '../pages/pages';
import { Section } from '../section/section';

export interface WorkingAreaProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const WorkingArea = ({ className }: WorkingAreaProps) => {
    return <div className={classNames(styles.root, className)}>WorkingArea
        <div className={styles.WorkAreaGap}>
            <Pages />
            <Section /></div></div>;
};
