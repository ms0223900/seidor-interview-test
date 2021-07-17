import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Header from 'components/Header/Header';
import StepView from 'View/StepView/StepView';
import { IntlProvider } from 'react-intl';
import useLocale from 'lib/hooks/useLocale';
import { ALL_LOCALES } from 'locales';
import { Button, makeStyles } from '@material-ui/core';
import routes from 'routes/routes';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#eee',
    minHeight: '100vh',
  }
}));

function App() {
  const {
    localeVal,
    handleChangeLocale,
  } = useLocale();
  const classes = useStyles();

  return (
    <IntlProvider locale={localeVal}>
      <div className={classes.root}>
        <Header
          localeVal={localeVal}
          allLocales={ALL_LOCALES}
          onChangeLocale={handleChangeLocale}
        />
        <Switch>
          <Route
            exact
            path={'/'}
            component={
              () => <Button>
                <Link to={'/checkout/' + routes.checkout['step-1-my-data']}>{'Checkout'}</Link>
              </Button>
            }
          />
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
