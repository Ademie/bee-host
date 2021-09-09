import App from './App'
import ReactDOM from 'react-dom';

ReactDOM.render(
    <App/>, document.getElementById('root')
  );

//Automatically refresh the app without reloading the webpage
if (module.hot){
  module.hot.accept()
}