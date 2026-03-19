import "./cards.css"

function Cards(){
    return(
        <section className="wrapper">
            <Card/>
            <Card/>
            <Card/>
        </section>
    )
}

function Card(){
    return (
        <article className="card">
            <img src="https://via.placeholder.com/400x200" alt="Card"/>
            <div className="card-content">
                <h3>Card Title</h3>
                <p>
                  This is a responsive card component. It adapts to the screen size and uses a wrapper to center itself on the page.
                </p>
            </div>
        </article>
    )
}

export default Cards