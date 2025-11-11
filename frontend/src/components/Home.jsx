import style from "../components-css/Home.module.css"

export default function Home() {
    console.log(import.meta.env.VITE_SERVER_URL)
    return (
        <div className={style.container}>
            <div>
                <img className={style.customImg} src={import.meta.env.VITE_SERVER_URL + "/images/cityport.png"} alt="City Port" />
            </div>

            <div>
                Contains image 2
            </div>

            <div>
                Contains image 3
            </div>

            <div>
                Contains image 4
            </div>
        </div>
    )
}