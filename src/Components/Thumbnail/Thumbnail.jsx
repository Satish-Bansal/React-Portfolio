import style from '../Thumbnail/Thumbnail.module.css'

const Thumbnail = () => {
    return (
        <div className={style.main}>
            <h1>i do whatever it takes to help me <br /><span>Grow in Life</span></h1>
            <img src="./public/Thumbnail.png" alt="Thumbnail" />
        </div>
    )
}

export default Thumbnail