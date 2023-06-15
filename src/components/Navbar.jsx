import reactIcon from "../assets/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <div>
                <img src={reactIcon} />
                <h3>ReactFacts</h3>
            </div>
            <div>
                <h4>Scrimba / React Course: Project 1</h4>
            </div>
        </nav>
    );
}