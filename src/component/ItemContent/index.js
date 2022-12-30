import imgTv from './img/img-tv.png';
import imgDevicePile from './img/img-device-pile.png';
import imgKids from './img/img-kids.png';
import imgMobile from './img/img-mobile.jpg';

function ItemContent({ title, description, side, img }){
    let chooseImage;
    switch(img){
        case "tv": 
            chooseImage = imgTv;
            break
        case "devicePile": 
            chooseImage = imgDevicePile;
            break

        case "kids": 
            chooseImage = imgKids;
            break
        case "mobile": 
            chooseImage = imgMobile;
            break
        default:
            chooseImage = imgTv
    }

    return (
        <section style={{
            marginBottom: 10,
            width: "100%",
            height: 425,
            backgroundColor: "#000000",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: (side === "left" ? "row" : "row-reverse")
        }}>
            <div className='container-tv-description'>
                <h2>{title}</h2>
                <span>{description}</span>
            </div>
            <div className='container-tv-description'>
                <img 
                    src={chooseImage}
                    className='device'
                />
            </div>
        </section>
    );
}

export default ItemContent;