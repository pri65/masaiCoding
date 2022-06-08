//now we have to return here
//using a function we can return anything
//so first make a function
//then we want to return the html tag
//to return something we need back ticks``


function navbar() {
    return `
        <h3>
            <a href="/">Home</a>
        </h3>
        <div id="options">
            <h3>
                <a href="electronics.html">Electronics</a>
            </h3>
            <h3>
                <a href="jewellery.html">Jewellery</a>
            </h3>
            <h3>
                <a href="#">Login</a>
            </h3>
            <h3>
                <a href="#">Signup</a>
            </h3>
        </div>
    `
}