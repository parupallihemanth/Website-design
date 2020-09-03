import React, {useState} from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import  Header  from '../ui/Header';
import theme from '../ui/Theme';
import Footer from './Footer'
import LandingPage from '../ui/LandingPage';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Services from './Services';
import CustomSoftware from '../ui/CustomSoftware'
import MobileApps from '../ui/Mobileapps';
import Website from '../ui/WebsiteDevelopmentPage';
import Revolution from '../ui/RevolutionPage';
import Aboutus from '../ui/Aboutus';
import Contactus from '../ui/Contactus';
function App() {
  const [ value, setValue ] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0)
 
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path="/" render={ (props)  => <LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/services" render={ (props)  => <Services setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path="/customsoftware" render={ (props)  => <CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path="/websites" component={Website}></Route>
          <Route exact path="/mobileapps" component={MobileApps}></Route>
          <Route exact path="/revolution" component={Revolution}></Route>
          <Route exact path="/about" component={Aboutus}></Route>
          <Route exact path="/contact" render={ (props)  => <Contactus setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path="/estimate" component={() =><div>Estimate</div>}></Route>
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </BrowserRouter>
       
      
      </ThemeProvider>
      
     
    
  );
}

export default App;
