import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/Header/Header';
import StepView from 'View/StepView/StepView';
import { IntlProvider } from 'react-intl';
import useLocale from 'lib/hooks/useLocale';

function App() {
  const {
    locale,

  } = useLocale();

  return (
    <IntlProvider locale={locale}>
      <div>
        <Header />
        <Switch>
          <Route
            path={'/checkout/:step'}
            component={StepView}
          />
        </Switch>
      </div>
    </IntlProvider>
  );
}

export default App;
