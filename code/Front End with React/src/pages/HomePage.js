import React , { Component } from  'react';
import logo from '../fig/logo.png';
import {Button} from 'antd';
import MyUpload from '../components/Upload'
import QuizPagePresenter from "../components/QuizPagePresenter";
import QuizPageStudent from "../components/QuizPageStudent";
import Slides from "../components/Spectacle"
import quizStatistic from "../components/QuizStatistic"
import {dimValueGetter} from "echarts/src/component/marker/markerHelper";
// import {
//     BrowserRouter,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quiz:'',
            rawString:'',
            slidesFlag: 0,
            quizFlag: 0,
            studentFlag: 0
        };

    }

    callback=(quiz)=>{
        this.setState({quiz:quiz})
        this.setState({slidesFlag : 1});
    }

    callback1=(slidesString)=>{
        this.setState({slidesString:slidesString})
    }

    callback2=()=>{
        this.setState({quizFlag : 1})
    }

    callback3=()=>(
        this.setState({quizFlag : 0})
    )

    callback4=()=>(
        this.setState({studentFlag : 1})
    )

    statisticButtonClicked=()=>{
        // window.location.reload("/quizStatistic");
        window.location = "/quizStatistic"
    }

    renderStudentPage() {
        console.log(this.state.quiz)
        return (
            <div>
                {this.state.quizFlag ? <QuizPageStudent questions={this.state.quiz} callback3={this.callback3}/> : <Slides callback2={this.callback2} slidesString={this.state.slidesString}/>}
            </div>

            // <Slides />
            // <QuizPagePresenter
            // questions={this.state.quiz}
            // />
        );
    }

    renderPresenterPage() {
        return (
            <div>
                {this.state.quizFlag ? <QuizPagePresenter questions={this.state.quiz} callback3={this.callback3}/> : <Slides callback2={this.callback2} slidesString={this.state.slidesString}/>}
            </div>

            // <Slides />
            // <QuizPagePresenter
            // questions={this.state.quiz}
            // />
        );
    }

    renderUploadPage = () => {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <MyUpload callback={this.callback} callback1={this.callback1} callback4={this.callback4}/>
                    {/*<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">*/}
                    {/*    Learn QuizHero*/}
                    {/*</a>*/}
                </header>

            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.slidesFlag ? (this.state.studentFlag ? this.renderStudentPage() : this.renderPresenterPage()) : this.renderUploadPage()}
            
                {/* <BrowserRouter>
       <div>
         <Route path="/" component={App}>
           <Route path="/quizStatistic" component={QuizStatisticPage}/>
         </Route>
      </div>
    </BrowserRouter> */}
    </div>
        );
    }

}

export default HomePage;