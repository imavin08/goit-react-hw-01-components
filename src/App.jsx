import Statistics from 'components/Statistics';
import Profile from './components/Profile';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './path/user.json';
import data from './path/data.json';
import friends from './path/friends.json';
import transactions from './path/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
