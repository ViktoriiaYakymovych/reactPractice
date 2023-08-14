import user from 'datas/user.json';
import { Profile } from './Profile/Profile';

import data from 'datas/data.json';
import { StatisticsList } from './Statistics/StatisticsList/StatisticsList';

import friends from 'datas/friends.json';
import { FriendList } from './Friends/FriendList/FriendList.jsx';

import transactions from 'datas/transactions.json';
import { TransactionTable } from './TransactionHistory/TransactionTable/TransactionTable';


export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <StatisticsList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionTable items={transactions} />
    </>
  );
};
