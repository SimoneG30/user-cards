import '../styles/CardItem.css';
import {Button, Link, makeStyles} from "@material-ui/core";
import {useState} from "react";
import profile from "../images/profile.jpg";
import {GradientCircularProgress} from "react-circular-gradient-progress";
import UserCardPlaceholder from "./UserCardPlaceholder";

const useStyles = makeStyles({
    button: {
        backgroundColor: '#EAE8FE',
        borderColor: '#835bf9',
        color: '#835bf9',
        height: '45px',
        marginTop: '-240px',
        marginLeft: '290px',
        width: '45px !important',
        minWidth: 'unset !important',
        top: '1px',
        radius: '8px',
        fontWeight: '800',
        fontSize: '120%',
        '&:hover': {
            backgroundColor: '#EAE8FE',
            borderColor: '#835bf9',
            border: '2px solid #835bf9',
            color: '#835bf9',
        },
    },
    buttonSuccess: {
        backgroundColor: '#F9F9FC',
        borderColor: '#66BB6A',
        color: '#66BB6A',
        height: '45px',
        marginTop: '-240px',
        marginLeft: '290px',
        width: '45px !important',
        minWidth: 'unset !important',
        top: '1px',
        radius: '8px',
        fontWeight: '800',
        fontSize: '120%',
        '&:hover': {
            backgroundColor: '#F9F9FC',
            borderColor: '#66BB6A',
            border: '2px solid #835bf9',
            color: '#66BB6A',
        },
    },
})
const CardItem = ({userData}) => {
    const [isActive, setActive] = useState(false);
    const [isCardLoaded, setIsCardLoaded] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };
    const classes = useStyles({userData});
    return (
        <div>
            {!isCardLoaded && <UserCardPlaceholder/>}
            <div className="card">
                <div className="card__body" onLoad={() => setTimeout(() => setIsCardLoaded(true))}>
                    <div className="card__image"><img src={profile} alt={''}/>
                        <p className="trustValue">{userData.trust}</p>
                        <GradientCircularProgress className="progressBar"
                                                  size={90} strokeWidth={4}
                                                  endColor={'#fa5d75'} middleColor={'#b860b6'} startColor={'#7864f6'}
                                                  progress={userData.trust} emptyColor={'#FFFFF'}
                        />
                        <p className="name">{userData.first_name} {userData.last_name} </p>
                        <br/>
                        <p className="conn">nessuna connessione</p>
                        <br/>
                        <p className="share">Sta già condividendo <Link>{userData.shared_service}</Link></p>
                        <Button variant="outlined" onClick={toggleClass}
                                className={!isActive ? classes.button : classes.buttonSuccess}>{!isActive ? '+' : '✓'}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardItem;
