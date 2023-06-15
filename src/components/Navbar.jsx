import reactIcon from "../assets/react-icon-small.png"

export default function Navbar() {
    return (
        <div className="navBar">
            <div>
                <img src={reactIcon} />
                <h3>ReactFacts</h3>
            </div>
            <div>
                <h4>Scrimba / React Course: Project 1</h4>
            </div>
        </div>
    );
}