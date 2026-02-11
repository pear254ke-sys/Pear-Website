import "./card.css"
function Card(){
    return (
        <article class="card">
            <img src="via.placeholder.com" alt="Card Image"/>
            <div class="card-content">
                <h3>Card Title</h3>
                <p>This is a responsive card component. It adapts to the screen size and uses a wrapper to center itself on the page.</p>
            </div>
        </article>
    )
}
export default Card