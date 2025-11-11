import style from "../components-css/Home.module.css"

export default function Home() {
    console.log(import.meta.env.VITE_SERVER_URL)
    return (
        <div className={style.container}>
            <div>
                <a href="/game/1">
                    <img className={style.customImg} src={import.meta.env.VITE_SERVER_URL + "/images/cityport.png"} alt="City Port" />
                </a>
            </div>

            <div>
                <a href="/game/2">
                    {/* <img className={style.customImg} src={import.meta.env.VITE_SERVER_URL + "/images/cityport.png"} alt="City Port" /> */}
                </a>
            </div>

            <div>
                <a href="/game/3">
                    {/* <img className={style.customImg} src={import.meta.env.VITE_SERVER_URL + "/images/cityport.png"} alt="City Port" /> */}
                </a>
            </div>

            <div>
                <a href="/game/4">
                    {/* <img className={style.customImg} src={import.meta.env.VITE_SERVER_URL + "/images/cityport.png"} alt="City Port" /> */}
                </a>
            </div>
        </div>
    )
}