import classNames from 'classnames';
import styles from './add-button.module.scss';

export interface AddButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AddButton = ({ className }: AddButtonProps) => {
    return <div className={classNames(styles.root, className)}>
        <button className={styles.AddButton}>+</button></div>;
}; 
