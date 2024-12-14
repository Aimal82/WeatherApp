
import Home from './Home';
import secondpage from './secondpage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
    return (
        <Router>
            <div className='App'>
                <div className='content'>
                   <Switch>
                    
                    <Route exact path="/">
                    <Home />
                    </Route> 

                    <Route path="/secondpage">
                    <secondpage />
                    </Route>

                   </Switch>
                </div>
            </div>
        </Router>

    );
}

export default App;