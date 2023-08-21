import styles from './Toggle.module.scss';

interface IToggleLabel {
  checked: boolean;
  onChange: () => void;
}

export const Toggle = ({ checked, onChange }: IToggleLabel) => {
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
