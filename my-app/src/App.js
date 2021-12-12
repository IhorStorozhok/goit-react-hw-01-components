//profile
import Profile from "./Components/Profile/Profile";
import user from "./Components/Profile/user.json";
//statistics
import Stats from "./Components/Statistics/Statistics";
import data from "./Components/Statistics/data";

import friends from "./Components/FriendList/friends.json";
import FriendList from "./Components/FriendList/FriendList";
import item from "./Components/TransactionsHistory/transactions.json";
import TransactionsHistory from "./Components/TransactionsHistory/TransactionsHistory";

export default function App() {
  return (
    <>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Stats key={data.id} stats={data} title={"Upload stats"} />{" "}
      </div>
      <FriendList friends={friends} />

      <TransactionsHistory array={item} />
    </>
  );
}
