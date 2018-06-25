import React, {Component} from 'react'; // Name spaced so vague references work for import
import ReactDOM from 'react-dom'; // Both libraries are needed
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = "AIzaSyBGNojjRNFb18HPRq0yFYwE8pD1YWftTCI";

class App extends Component { // ES 2016 syntax (const instead of var; doesn't change; => function in ES6)
   constructor(props) {
     super(props);
     this.state =  { videos:[] };

     YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
       this.setState({ videos }); //shorthand for videos: videos (name is the same)
     });
   }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
// JSX is translated into vanilla JS
// JSX is what produces the HTML when we render component
// JSX gets turned into HTML; what the user ends up seeing
// JSX > vanilla JS for this case; so much shorter/simpler
// JSX (3 lines); vanilla JS (12 lines)
// JSX is compiled into vanilla JS; lazy programmers are good programmers
// JSX = clear & concise

// Take this component's generated HTML
// Put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
// "ReactDOM, please render my component 'App' in the target container. Thx."
