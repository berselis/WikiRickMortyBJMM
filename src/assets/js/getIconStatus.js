import dead from '../../assets/img/dead.png';
import alive from '../../assets/img/alive.png';
import unknown from '../../assets/img/nan.png';
import uknow from '../../assets/img/uknow.png';
import Unknown from '../../assets/img/unknown.png';


export const getIcon = (typeStatus) => {
    return icons[typeStatus];

}
const icons = {
    'Dead': dead,
    'Alive': alive,
    'unknown': unknown,
    'uknow': uknow,
    'Unknown': Unknown
}
