import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './template/Default'
import Home from './pages/Header/Home'

const App = () => {
  return (
    <TemplateDefault>
      <Router>
        <Switch>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </TemplateDefault>

  )
}

export default App
