

function Page() {
    return (
        <div>
            <ReasonsList />
            <Header />
            <Footer />
        </div>
    )
} 

function ReactPage() {
    return (
        <div>
            <img src="./assets/react.png" height="100px" width="100px" />
            <h1><b>Fun facts about React</b></h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

function ReasonsList() {
    return (
        <div>
            <ul>
                <li>Reason 1</li>
                <li>Reason 2</li>
                <li>Reason 3</li>
                <li>Reason 4</li>
                <li>Reason 5</li>
            </ul>
        </div>
    )
}

function Header() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./assets/react.png" height="100px" width="100px" />
                    <h1>Reasons I'm excited to learn React:</h1>
                </nav>
            </header>
        </div>
    )
}

function Footer() {
    return (
        <small>Copyright 2024. Developed by <a href="#">Madhu.</a> All rightss reserved.</small>
    )
}



ReactDOM.render(
    <Page />
    , document.getElementById('root')
)