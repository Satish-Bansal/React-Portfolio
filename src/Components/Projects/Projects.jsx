import style from '../Projects/Projects.module.css'

const Projects = () => {
    return (
        <div className={style.main} id='projects'>
            <h1>My Recent <span>Projects</span></h1>
            <div className={style.projects}>
                <div className={style.card}>
                    <img src="./public/Amazon.png" alt="Project - 1" />
                    <div className={style.card_cont}>
                        <h2>Amazon.in Website Clone(only Front-end)</h2>
                        <span>Technology Used </span>
                        <p>HTML, CSS, JS, jQuery</p>
                        <button><a href="https://marketplace-6b23c.web.app/" target='_blank'>View Project</a></button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="./public/Myntra.png" alt="Project - 1" />
                    <div className={style.card_cont}>
                        <h2>Myntra.in Website Clone(only Front-end)</h2>
                        <span>Technology Used </span>
                        <p>HTML, CSS, JS, jQuery</p>
                        <button><a href="https://myntra-official.web.app/" target='_blank'>View Project</a></button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="./public/Motorola.png" alt="Project - 1" />
                    <div className={style.card_cont}>
                        <h2>Motorola.in Website Clone(only Front-end)</h2>
                        <span>Technology Used </span>
                        <p>HTML, CSS, JS, jQuery</p>
                        <button><a href="https://motorola-2f3c6.web.app/" target='_blank'>View Project</a></button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="./public/Haavi.png" alt="Project - 1" />
                    <div className={style.card_cont}>
                        <h2>Haavi.in Wordpress Ecommerce Website</h2>
                        <span>Technology Used </span>
                        <p>Elementor, Woocommerce</p>
                        <button><a href="https://haavi.in/" target='_blank'>View Project</a></button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="./public/Raised(1).png" alt="Project - 1" />
                    <div className={style.card_cont}>
                        <h2>Raised Lines Foundation Wordpress NPO Website</h2>
                        <span>Technology Used </span>
                        <p>Elementor, WooCommerce</p>
                        <button><a href="https://raisedlines.org/" target='_blank'>View Project</a></button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src="./public/Amazon.png" alt="Project - 1" />
                    <div className={style.card_cont}>
                        <h2>Amazon.in Website Clone(only Front-end)</h2>
                        <span>Technology Used </span>
                        <p>HTML, CSS, JS, jQuery</p>
                        <button><a href="https://marketplace-6b23c.web.app/" target='_blank'>View Project</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects