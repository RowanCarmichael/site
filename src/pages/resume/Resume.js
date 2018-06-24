import React from 'react';
import { Container, Background } from 'react-fixed-background';
import Typewriter from '../../components/typewriter/Typewriter';
import styles from './Resume.css';
import PdfIcon from '../../assets/icons/pdf.svg';
import resume from '../../assets/files/RowanCarmichaelCV.pdf';
import FloatingButton from '../../components/buttons/FloatingButton';
import mountain from '../../assets/images/mountain.jpeg';
import desk from '../../assets/images/desk.jpeg';
import dock from '../../assets/images/dock.jpeg';
import keyboard from '../../assets/images/keyboard.jpeg';
import ArrowIcon from '../../assets/icons/arrow.svg';

class Resume extends React.Component {
  state = {
    loaded: false,
  }

  onLoadImage = () => {
    this.setState({ loaded: true });
  }

  downloadResume = () => {
    window.open(resume);
  }

  render() {
    return (
      <div className={styles.resume}>
        <FloatingButton onClick={this.downloadResume}>
          <PdfIcon width="70" height="70" />
        </FloatingButton>
        <Container className={styles.container}>
          <div className={styles.content}>
            <img onLoad={this.onLoadImage} className={this.state.loaded ? styles.backgroundImage : null} src={mountain} alt="mountain" />
          </div>
          <Background bringToFront className={styles.background}>
            <Typewriter speed={60} delay={1000} className={styles.header} text="See what I can do for you" />
          </Background>
        </Container>
        <Container className={styles.container}>
          <div className={styles.content}>
            <img className={styles.backgroundImage} src={desk} alt="desk" />
          </div>
          <Background bringToFront className={styles.background}>
            <div className={styles.summaryContainer}>
              <h1>SKILLS</h1>
              <div className={styles.summaryDetails}>
                <h2>Experienced In:</h2>
                <ul>
                  <li>ReactJS</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <h2>Familiar With:</h2>
                <ul>
                  <li>SQL</li>
                  <li>Java</li>
                  <li>C#</li>
                  <li>Xamarin</li>
                </ul>
              </div>
            </div>
          </Background>
        </Container>
        <Container className={styles.container}>
          <div className={styles.content}>
            <img className={styles.backgroundImage} src={keyboard} alt="keyboard" />
          </div>
          <Background bringToFront className={styles.background}>
            <div className={styles.summaryContainer}>
              <h1>FAVOURITE LIBRARIES</h1>
              <div className={styles.summaryDetails}>
                <ul>
                  <li>Redux</li>
                  <li>Mobx</li>
                  <li>CSS Modules</li>
                  <li>Mocha</li>
                  <li>Eslint</li>
                  <li>Chai</li>
                  <li>Enzyme</li>
                  <li>Jest</li>
                  <li>Selenium</li>
                  <li>Flow</li>
                  <li>Babel</li>
                  <li>Webpack</li>
                  <li>Node.js (Express)</li>
                </ul>
              </div>
            </div>
          </Background>
        </Container>
        <Container className={styles.container}>
          <div className={styles.content}>
            <img className={styles.backgroundImage} src={dock} alt="dock" />
          </div>
          <Background bringToFront className={styles.background}>
            <div className={styles.summaryContainer}>
              <h1>EXPERIENCE</h1>
              <div className={styles.summaryDetails}>
                <div>
                  <p className={styles.experienceTitle}>React Frontend Engineer</p>
                  <p className={styles.experienceDetails}>EROAD Limited</p>
                  <p className={styles.experienceDetails}>Feb 2016 - Now</p>
                </div>
                <div>
                  <p className={styles.experienceTitle}>Wed Developer - Industry Project</p>
                  <p className={styles.experienceDetails}>OPUS International Consultants Limited</p>
                  <p className={styles.experienceDetails}>Mar 2015 - Nov 2015</p>
                </div>
                <div>
                  <p className={styles.experienceTitle}>Computer Science Lab Demonstrator</p>
                  <p className={styles.experienceDetails}>University of Auckland Computer Science Department</p>
                  <p className={styles.experienceDetails}>Mar 2015 - Nov 2015</p>
                </div>
                <div>
                  <p className={styles.experienceTitle}>BTech(Hons) Specialising in Information Technology</p>
                  <p className={styles.experienceDetails}>University of Auckland</p>
                  <p className={styles.experienceDetails}>Mar 2012 - Nov 2015</p>
                </div>
              </div>
            </div>
          </Background>
        </Container>
        <div className={styles.final}>
          <div className={styles.downloadContainer} onClick={this.downloadResume} role="button" tabIndex={0}>
            <h3 className={styles.header}>Download Full Resume</h3>
            <ArrowIcon className={styles.arrow} width="60" height="60" />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
