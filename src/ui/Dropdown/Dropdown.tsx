import {
  Children,
  ReactElement,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
  MutableRefObject,
} from 'react';
import clsx from 'clsx';

import { Icon } from '../Icon/Icon';

import styles from './Dropdown.module.scss';

interface IDropdownProps {
  label?: string;
  initialValue?: number;
  onChange: (item: string) => void;
  className?: string;
}

export const Dropdown = ({
  label,
  initialValue = 0,
  onChange,
  className = '',
  children,
}: PropsWithChildren<IDropdownProps>) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const [isOpen, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(initialValue);
  const items = useMemo(
    () =>
      Children.map(
        children,
        (child) => isValidElement(child) && child.props.children,
      ) as string[],
    [children],
  );

  const handleChange = (item: string, index: number) => {
    onChange(item);
    setHighlightedIndex(index);
    setOpen(false);
  };

  useEffect(() => {
    const isClickedOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('click', isClickedOutside);

    return () => {
      document.removeEventListener('click', isClickedOutside);
    };
  }, [isOpen]);

  return (
    <div className={clsx(styles.container, className)}>
      {label && (
        <h3 data-testid="dropdown-label" className={styles.label}>
          {label}
        </h3>
      )}

      <div
        className={clsx(styles.dropdown, {
          [styles.active]: isOpen,
        })}
        ref={ref}
        data-testid="dropdown-container"
      >
        <button
          className={styles.title}
          onClick={() => setOpen(!isOpen)}
          data-testid="dropdown-header"
        >
          {items[highlightedIndex]}
          <Icon name="chevron" size={8} className={styles.icon} />
        </button>

        {isOpen && (
          <div className={styles.menu} data-testid="dropdown-body">
            {Children.map(children, (child, index) => {
              if (isValidElement(child)) {
                return cloneElement(child as ReactElement, {
                  active: index === highlightedIndex,
                  onClick: () => handleChange(child.props.value, index),
                });
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};
