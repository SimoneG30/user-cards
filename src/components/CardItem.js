import '../styles/CardItem.css';
import {Button,  makeStyles} from "@material-ui/core";
import {useState} from "react";
import profile from "../images/profile2.png";
import mockData from "../components/MockData.json";

const useStyles = makeStyles({
    button: {
        backgroundColor: '#EAE8FE',
        borderColor: '#835bf9',
        color: '#835bf9',
        height: '45px',
        marginTop: '-250px',
        marginLeft: '275px',
        width: '45px !important',
        minWidth: 'unset !important',
        top:'1px',
        radius:'8px',
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
        marginTop: '-250px',
        marginLeft: '275px',
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
const CardItem = ({ userData }) => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
const classes = useStyles();
    return (
        <div className="card">
            {/*<div className="card__title">*/}

            {/*</div>*/}
            <div className="card__body">

                <div className="card__image"><img src={profile} alt={''} />
                    <p className="name">{mockData.first_name}{mockData.last_name} </p>
                    <br/>
                    <p className="conn">{mockData.last}</p>
                    <br/>
                    <p className="share">Sta già condividendo {mockData.shared_service}</p>
                    <Button variant="outlined" onClick={toggleClass}  className={!isActive ? classes.button: classes.buttonSuccess}>{!isActive ? '+': '✓'}</Button>
                </div>

            </div>
        </div>
    )
};

export default CardItem;
