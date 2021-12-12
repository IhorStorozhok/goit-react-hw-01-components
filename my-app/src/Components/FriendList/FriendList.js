import FriendListItem from "./FriendListItem";
import s from "./FriendsItem.module.css";

export default FriendList;
function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.name}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
