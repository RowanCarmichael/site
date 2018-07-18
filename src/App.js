import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './App.css';
import ScrollToTop from './components/routerUtils/ScrollToTop';
import GithubIcon from './assets/icons/github.svg';
import LinkedInIcon from './assets/icons/linkedin.svg';
import EmailIcon from './assets/icons/email.svg';
import IconButton from './components/buttons/IconButton';
import Button from './components/buttons/Button';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Resume from './pages/resume/Resume';

class App extends React.Component {
  state = {
    scrollY: 0,
    headerClassName: styles.showHeader,
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (val) => {
    if (this.state.scrollY > val.currentTarget.scrollY) {
      this.setState(() => ({
        scrollY: val.currentTarget.scrollY,
        headerClassName: styles.showHeader,
      }));
    } else if (this.state.scrollY < val.currentTarget.scrollY) {
      this.setState(() => ({
        scrollY: val.currentTarget.scrollY,
        headerClassName: styles.hideHeader,
      }));
    }
  }

  gotoGithub = () => {
    window.open('http://www.github.com/RowanCarmichael');
  };

  gotoLinkedIn = () => {
    window.open('http://www.linkedin.com/in/rowan-carmichael/');
  };

  gotoEmail = () => {
    window.location.href = 'mailto:carmichaelr@hotmail.co.uk';
  };

  render() {
    return (
      <Router onUpdate={this.scrollToTop}>
        <ScrollToTop>
          <div className={styles.app}>
            <div className={styles.headerContainer}>
              <Header className={this.state.headerClassName}>
                <Link to={`${process.env.PUBLIC_URL}/`}><Button focussable label="Home" className={styles.linkButton} /></Link>
                <Link to={`${process.env.PUBLIC_URL}/resume`}><Button focussable label="Resume" className={styles.linkButton} /></Link>
              </Header>
            </div>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/resume`} component={Resume} />
            <Footer>
              <p>© 2018 Rowan Carmichael. All rights reserved.</p>
              <div>
                <IconButton onClick={this.gotoGithub} className={styles.iconButton} icon={<GithubIcon width="20" height="20" />} />
                <IconButton onClick={this.gotoLinkedIn} className={styles.iconButton} icon={<LinkedInIcon width="20" height="20" />} />
                <IconButton onClick={this.gotoEmail} className={styles.iconButton} icon={<EmailIcon width="20" height="20" />} />
              </div>
            </Footer>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
};

export default App;
