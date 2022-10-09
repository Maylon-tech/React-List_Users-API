import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './template/Default'
import TemplatePage from './template/Page'
import Home from './pages/Home'
import Customers from './pages/Customers'

const App = () => {
  return (
    <TemplateDefault>
      <Router>
        <Switch>

          <Route path="/customers">
            <TemplatePage title="Clientes" Component={Customers} />
          </Route>

          <Route path="/">
            <TemplatePage title="Pagina Inicial" Component={Home} />
          </Route>

        </Switch>
      </Router>
    </TemplateDefault>

  )
}

export default App
