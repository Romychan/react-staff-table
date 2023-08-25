import { Avatar } from '@ui/Avatar/Avatar';

import styles from './Profile.module.scss';

interface IProfileProps {
  /** Sets the name at the top */
  name: string;
  /** Sets the username at the bottom */
  username: string;
  /** Link to the avatar image */
  imageSrc: string;
}

export const Profile = ({ name, username, imageSrc }: IProfileProps) => {
  return (
    <div className={styles.container}>
      <Avatar src={imageSrc} alt={name} />
      <div className={styles.content}>
        <div className={styles.name}>{name}</div>
        <div className={styles.username}>{username}</div>
      </div>
    </div>
  );
};
