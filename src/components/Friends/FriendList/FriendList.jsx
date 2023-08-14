import { FriendListItem } from '../FriendListItem/FriendListItem';
import {Wrapper} from './FriendList.styled'

export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </Wrapper>
  );
};
