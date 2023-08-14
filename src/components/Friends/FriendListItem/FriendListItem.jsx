import { Online, Offline } from "./FriendListItem.styled";

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      {isOnline ? <Online/> : <Offline/>}
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};
