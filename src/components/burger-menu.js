import burger from '../../public/burger.svg';
import { Component } from 'react';
import  classnames  from 'classnames';


export class BurgerMenu extends Component {

    state = { 
        menuOpen: false
    }

    constructor(props) {
        super(props);
        this.setState({ menuOpen: props.menuOpen });
        this.toggleMenuOpen = props.toggleMenuOpen;
    }
    onclickHandler (e) {
        if (this.props.toggleMenuOpen) {
            this.props.toggleMenuOpen();
        }
    };
    
    render () {
        console.log(this.props.menuOpen);
        return (<nav className="md:hidden">
        <img onClick={this.onclickHandler.bind(this)} className={`transition-transform duration-500 burger-menu text-white ${classnames({ 'rotate-90': this.props.menuOpen })}`} src={burger.src} />
        </nav>)
    };

}
