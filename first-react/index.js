

const page = (
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

ReactDOM.render(
    page
    , document.getElementById('root')
)

