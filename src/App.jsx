import './App.css';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import MainBox from './components/MainBox.jsx';
import FinanceSection from './components/FinanceSection.jsx';
import CoursesSection from './components/CoursesSection.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  return (
    <div className="app">
      <div className="left">
        <Navbar />
      </div>
      <div className="right">
        <Header />
        <div className="main">
          <MainBox />
          <div className="sections">
            <div className="section1">
              <FinanceSection />
              <CoursesSection />
            </div>
            <div className="section2">
              <Sidebar />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
