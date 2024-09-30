import Sidebar from './components/Sidebar';
import HorizontalScrollCarousel from './components/HorizontalScrollCarousel';
import Study from './components/Study';
import Main from './components/Main';
import Projects from './components/Projects';


function App() {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div>
        <Main />
        <Projects />
        <Study />
        </div>
      </div >
    </>
  );
}
export default App;
