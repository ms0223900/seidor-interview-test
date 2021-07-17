import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/Header/Header';
import StepView from 'View/StepView/StepView';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route
          path={'/checkout/:step'}
          component={StepView}
        />
      </Switch>
    </div>
  );
}

export default App;
