import React from 'react';
import defaultDataset from './dataSet';
import './assets/styles/style.css';
import { AnswersList , Chats} from './components/index';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  // initAnswer = () => {
  //   const initDataset = this.state.dataset[this.state.currentId];
  //   const initAnswers = initDataset.answers;
  //   this.setState({
  //     answers: initAnswers
  //   })
  // }

  displayNextQuestion = (nextQuestionsId) => {
    // chatsのstateを関数として定義、this.
    const chats = this.state.chats
    // chatsという連想配列に対して、オブジェクトを追加している
    // 例えば、質問押した→解答した→次の質問を表示したいというときは、chatsのstate
    // のtextにdatasetの番号（何個目の質問か）、その中のquestionをtextに表示
    chats.push({
      text: this.state.dataset[nextQuestionsId].question,
      type: 'question'
    })
    this.setState({
      // 選択されたjob_offerとかのanswersを取得している
      answers: this.state.dataset[nextQuestionsId].answers,
      chats: chats,
      currentId: nextQuestionsId,
    })
  }

  // 第六回目 条件分岐とコールバック関数のbind
  selectAnswer = (selectedAnswer, nextQuestionsId) => {
      if (nextQuestionsId === 'init'){
        this.displayNextQuestion(nextQuestionsId)
      } else {
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: 'answers'
        })
        this.setState({
          chats: chats
        })
        this.displayNextQuestion(nextQuestionsId)
      }
    }
     //これだけだと、解答しかチャットに表示されない。次の質問を表示できるようにしたい。
  // 上にdisplayNextQuestionを作る。

  // stateを書き換える時はthis.setStateをしないといけない。
  // 一度、chatsのstateを変数として持たせて、それにpushを使って、連想配列を追加して
  // this.setStateしてあげる
  // initChats = () => {
  //   const initDataset = this.state.dataset[this.state.currentId];
  //   const chat = {
  //     text: initDataset.question,
  //     type: 'question'
  //   }
  //   const chats = this.state.chats;
  //   chats.push(chat);
  //   this.setState({
  //     chats: chats
  //   })
  // }

  // componentが初期化して最初のレンダーが終わった後に副作用のある作業をしたいとき
  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId)
    // initAnswer()が実行される answersの中身が変わってstateが書き変わり、レンダーが走り、
  } 

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats}/>
          {/* selectAnswer()ではなくselectAnswerにする。そうでないとコールバック関数が毎回実行されてしまう */}
          <AnswersList answers={this.state.answers} select={this.selectAnswer}/>
        </div>
      </section>
    );
  }
}