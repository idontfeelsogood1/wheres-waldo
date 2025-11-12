import { useParams } from 'react-router';
import { useFetch } from '../api/hooks';

export default function Game() {
    const { gameId } = useParams()
    const url = import.meta.env.VITE_SERVER_URL + `/game/${gameId}`
    const { data, loading, error } = useFetch(url)
    let game = null,
        characters = null

    if (loading) {
        return (
            <div>
                Loading Game...
            </div>
        )
    }
    if (error) {
        return (
            <div>
                {error.message}
                {error.status}
            </div>
        )
    }
    if (data) {
        game = data.game
        characters = data.game.characters
    }

    return (
        <div>
            <header>
                <h1>Find these characters</h1>
                {characters.map((character) => {
                    return (
                        <div>
                            <h3>{character.name}</h3>
                            <img src={character.imgUrl} alt={character.imgPath} />
                        </div>
                    )
                })}
            </header>
            
            {/* FIGURE OUT HOW TO GET CORDS FROM THE IMAGE WHEN USER CLICKS */}
            <main>
                <img src={game.imgUrl} alt={game.imgPath} />
            </main>
        </div>
    )
}