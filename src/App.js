import './App.css';

function App() {
  return (
    <div className="container">
        <div className="header">
            <div className="intro intro1">hello,</div>
            <div className="intro intro2">i'm <name>frank piro</name>.</div>
        </div>
        
        <div className="description">
            i develop software solutions to automate tasks 
            and solve problems, and create user-friendly UIs
            to provide an efficient user experience.
        </div>
        
        <div className="links">
            <div className="link link1">
                <i className="fab fa-github-square"></i>
                <p>Github</p>
            </div>
            <div className="link link2">
                <i className="fab fa-linkedin"></i>
                <p>LinkedIn</p>
            </div>
            <div className="link link3">
                <i className="fas fa-pizza-slice"></i>
                <p>whodelivers.org</p>
            </div>
            <div className="link link4">
                <i className="fas fa-file-alt"></i>
                <p>resume</p>
            </div>
            <div className="link link5">
                <i className="fas fa-envelope"></i>
                <p>contact</p>
            </div>
        </div>
    </div>
  );
}

export default App;
