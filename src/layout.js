import Link from 'next/link'; 
import { BurgerMenu } from '../src/components/burger-menu';
import { Stars } from '../src/components/stars';
import  classnames  from 'classnames';
import { Component } from 'react';
import { useState } from 'react';
import { withRouter } from 'next/router';
import { Transition } from 'react-transition-group';
import React from 'react';
import { Roboto_Slab } from 'next/font/google'
import { NextReactP5Wrapper } from '@p5-wrapper/next';

const font = Roboto_Slab({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap'
});


const transitionStyles = {
  entering: { opacity: 0, display: 'flex' },
  entered:  { opacity: 1, display: 'flex' },
  exiting:  { opacity: 1, display: 'none' },
  exited:  { opacity: 0, display: 'none' },
};

class RootLayout extends Component {

  state = { menuOpen: false };

  constructor(props) {
      super(props);
      console.log(this.props.router);
      this.setState({ menuOpen: false });
  }
  toggleMenuOpen () {
      this.setState({ menuOpen: !this.state.menuOpen });
  }
  componentDidMount() {
    this.props.router.events.on('routeChangeComplete', () => {
        this.setState({ menuOpen: false });
    });
  }
  render() {
    let ref = React.createRef();
    let stars = Stars;
      console.log(stars);
    return (
        <main className={`flex min-h-screen flex-col items-center justify-start p-4 ${font.className}`}>
        <div class="stars-canvas">
            <NextReactP5Wrapper sketch={stars} />
        </div>
        <div id="overlay-1" className="bg-overlay"></div>
        <div id="overlay-2" className="bg-overlay"></div>
        <div id="overlay-3" className="bg-overlay"></div>
        <div id="overlay-4" className="bg-overlay"></div>
        <div id="overlay-5" className="bg-overlay"></div>
        <div id="overlay-6" className="bg-overlay"></div>
        <div className="h-20 z-20 w-full items-center justify-between font-mono text-sm lg:flex">
        <Link className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 hover:underline"
        href="/"
        rel="noopener noreferrer" >
        <span className="font-bold">Networkismo</span>
        </Link>
        <BurgerMenu menuOpen={this.state.menuOpen} toggleMenuOpen={this.toggleMenuOpen.bind(this)} />
        <nav className="hidden md:flex flex-row gap-8 w-full justify-end">
        <Link className="hover:underline" href="https://correos.filosofiadelfuturo.org/">Blog</Link>
        <Link className="hover:underline" href="/principios/1">Principios del networkismo</Link>
        <Link className="hover:underline" href="/quienes-somos">¿Quiénes somos?</Link>
        </nav>
        </div>
        <Transition in={!this.state.menuOpen} appear={true} timeout={100}>
            {state => (
                    <section style={{
                      ...transitionStyles[state]
                    }}
                    className="transition-opacity duration-200 z-30 page flex flex-col items-center justify-center grow">
                        {this.props.children}
                    </section>
                  )}
        </Transition>
        <Transition in={this.state.menuOpen} timeout={100}>
            {state => (
                    <section style={{
                      ...transitionStyles[state]
                    }}
                    className="flex md:hidden transition-opacity duration-500 z-30 page flex-col items-center justify-center grow">
                        <Link className="py-8 hover:underline" href="https://correos.filosofiadelfuturo.org/">Blog</Link>
                        <Link className="py-8 hover:underline" href="/principios/1">Principios del networkismo</Link>
                        <Link className="py-8 hover:underline" href="/quienes-somos">¿Quiénes somos?</Link>
                    </section>
                  )}
        </Transition>

        </main>
        )
        }
}

export default withRouter(RootLayout);
