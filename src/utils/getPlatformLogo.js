import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faPlaystation, faXbox, faApple, faWindows, faAndroid } from "@fortawesome/free-brands-svg-icons";

const getPlatformLogo = (platform) => {
    console.log('getPlatformLogo')
    switch (platform) {
        case "PlayStation":
            return <FontAwesomeIcon icon={faPlaystation} title={platform} />;
        case "PlayStation 2":
            return <FontAwesomeIcon icon={faPlaystation} title={platform} />;
        case "PlayStation 3":
            return <FontAwesomeIcon icon={faPlaystation} title={platform} />;
        case "PlayStation 4":
            return <FontAwesomeIcon icon={faPlaystation} title={platform} />;
        case "PlayStation 5":
            return <FontAwesomeIcon icon={faPlaystation} title={platform} />;
        case "Xbox Series S/X":
            return <FontAwesomeIcon icon={faXbox} title={platform} />;
        case "Xbox S":
            return <FontAwesomeIcon icon={faXbox} title={platform} />;
        case "Xbox One":
            return <FontAwesomeIcon icon={faXbox} title={platform} />;
        case "Xbox 360":
            return <FontAwesomeIcon icon={faXbox} title={platform} />;
        case "Xbox":
            return <FontAwesomeIcon icon={faXbox} title={platform} />;
        case "PC":
            return <FontAwesomeIcon icon={faWindows} title={platform} />;
        case "Nintendo Switch":
            return <FontAwesomeIcon icon={faGamepad} title={platform} />;
        case "iOS":
            return <FontAwesomeIcon icon={faApple} title={platform} />;
        case "Android":
            return <FontAwesomeIcon icon={faAndroid} title={platform} />;
        case "macOS":
            return <FontAwesomeIcon icon={faApple} title={platform} />;
        case "Web":
            return <FontAwesomeIcon icon={faDesktop} title={platform} />;
        default:
            return <FontAwesomeIcon icon={faGamepad} title={platform} />;
    }
}

export default getPlatformLogo