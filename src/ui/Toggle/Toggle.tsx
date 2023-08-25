import styles from './Toggle.module.scss';

interface IToggleLabel {
  /** Controls the state of the toggle. */
  checked: boolean;
  /** The callback that will be called when the value of the checked state changes. */
  onChange: () => void;
}

export const Toggle = ({ checked = false, onChange }: IToggleLabel) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={styles.input}
      data-testid="switch-toggle"
    />
  );
};
