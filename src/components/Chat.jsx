import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from "@material-ui/core/Avatar";

// 毎回画像の拡張子を忘れるから注意！それによってmoduleが開けん！！というエラー出る
import NoProfile from '../assets/img/no-profile.png'
import Torahack from '../assets/img/torahack.png'

const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'p-chat__row': 'p-chat__reverse';

  return (
    <ListItem className={classes}>
        <ListItemAvatar>
          {/* isQuestion(上のやつ)はprops.typeつまりdataSet.jsのinitとかの
          typeがquestionである場合、isQuestionはtrueという性質を持つという関数
          で、参考演算子を使って、ListItemのclassNameにclassesという関数
          が入る。
          もしisQuestionがtrueの場合、classNameがp-chat__row,falseの場合、p-chat__reverseになる。
          それによってスタイルが変更される。
          次は画像で、isQuestionがtrueの場合、srcがTorahackになって、falseの場合、
          srcがNoProfileになる。それによって解答する場合はTorahackの画像で、左から出る。
          質問する場合はNoProfileの画像、右から出るというロジックが完成
          */}
          {isQuestion ? (
            <Avatar alt="icon" src={Torahack} />
          ) : (
            <Avatar alt="icon" src={NoProfile} />
          )}
        </ListItemAvatar>
        <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  )
}

export default Chat;