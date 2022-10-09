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
    
      <Router>
        <TemplateDefault>
          <Switch>

            <Route path="/customers">
              <TemplatePage title="Clientes" Component={Customers} />
            </Route>

            <Route path="/">
              <TemplatePage title="Pagina Inicial" Component={Home} />
            </Route>

          </Switch>  
        </TemplateDefault>
      </Router>
  

  )
}

export default App
