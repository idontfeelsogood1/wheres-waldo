export default function Menu({ characters, showMenu, menuPosition, imgNormalizedPosition, setShowMenu }) {
    function handleClick(event, characterId) {
        setShowMenu(false)
        // FETCH THE RESULTS
        // RENDER DIALOUGE BOX FOR A FEW SECONDS THEN REMOVE IT
    }

    return showMenu && (
        <div 
            style={{
            position: 'absolute',
            top: menuPosition.y,
            left: menuPosition.x,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            padding: '10px',
            zIndex: 1000, // Ensure it's on top
        }}
        >
            <ul>
                {characters.map((character) => {
                    return (
                        <li onClick={(event) => handleClick(event, character.id)}>{character.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}