import React from "react";
import List from '@mui/material/List';
import { Chat } from './index';

// チャットの上の部分をやっていく。
// sxというのはmuiのスタイルの当て方の一つで、これでスタイルを当てている。
// Listの中身は毎回記述するのは面倒なので、mapを使う。引数chat(ここにはtextとtypeが含まれている)
// とindex順番を受け取り、chatの中に記述。
const Chats = (props) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props.chats.map(( chat, index ) => {
        return <Chat text={chat.text} type={chat.type} key={index.toString()}/>
      })}
    </List>
  )
};

export default Chats;