import classNames from 'classnames';
import styles from './section.module.scss';

export interface SectionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Section = ({ className }: SectionProps) => {
    return <div contentEditable="true" className={classNames(styles.root, className)}>Section</div>;
};
