import lan_style from '../Languages/Languages.module.css'


const Languages = () => {

    const data = [
        {
            img: './public/html.png',
            name: "HTML"
        },
        {
            img: './public/css.png',
            name: "CSS"
        },
        {
            img: './public/js.png',
            name: "javaScript"
        },
        {
            img: './public/react.png',
            name: "React"
        },
        {
            img: './public/wordpress.png',
            name: "Wordpress"
        },
        {
            img: './public/figma.png',
            name: "Figma"
        }
    ]

    return (
        <section className={lan_style.main} id='languages'>
            <div className={lan_style.cards}>
                {data.map(function (elem) {
                    return <div className={lan_style.individual}>
                        <img src={elem.img} alt="language icon" />
                        <h2>{elem.name}</h2>
                    </div>
                })}
            </div>


        </section>
    )
}

export default Languages;