import PropTypes from "prop-types";
import s from "./FriendsItem.module.css";
export default FriendListItem;

function FriendListItem({ avatar, name, isOnline }) {
  const status = isOnline ? `online` : `offline`;

  return (
    <li className={s.friendsList}>
      <span className={s[status]}></span>
      <img className={s.img} src={avatar} alt="User avatar" width="65" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
