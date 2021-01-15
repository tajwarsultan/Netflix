
import { home } from './home';
import { TvShows} from './TV shows';
import { Movies} from './Movies';
import { NewPopular} from './New & popular';
import { MyList} from './My list';

const layout = () => {
    if( location.pathname === "/home") {
        return home();
    }
    else if( location.pathname === "/TvShows") {
        return TvShows()
    }
    else if( location.pathname === "/Movies") {
        return Movies();
    }
    else if( location.pathname === "/NewPopular") {
        return NewPopular();
    }
    else if( location.pathname === "/MyList") {
        return MyList();
    }
}

export default layout