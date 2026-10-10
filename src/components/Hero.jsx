import "./Hero.css";
function Hero({ title, subtitle, ctaText }) {
    return (
        <section className="hero">
            <img
                src="https://placehold.co/1200x400/667eea/ffffff?text=Build+Your+Dream+PC"
                alt="Build your dream PC"
                className="hero-image"
            />

            <div className="hero-content">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <button>{ctaText}</button>
            </div>
        </section>
    );
}

export default Hero;

