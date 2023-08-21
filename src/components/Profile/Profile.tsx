import { Avatar } from '@ui/Avatar/Avatar';

import styles from './Profile.module.scss';

interface IProfileProps {
  name: string;
  username: string;
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
