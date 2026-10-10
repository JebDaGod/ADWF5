import Hero from "../components/Hero";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="home-page">
            <Hero
                title="Build Your Dream PC"
                subtitle="Find the right components to create YOUR dream PC."
                ctaText="Shop Components"
            />

            <section className="about-store">
                <h2>Why Shop with Us?</h2>

                <p>
                    ComponentCorner makes it easy to find quality PC components
                    for gaming, school, work, and everyday use.
                </p>

                <p>
                    Browse our selection of processors, graphics cards, memory,
                    storage, motherboards, and power supplies to build the PC
                    that fits your needs.
                </p>
            </section>
        </div>
    );
}

export default HomePage;
