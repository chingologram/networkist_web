import '../globals.css';
import { RootLayout } from '../layout.js'
import  Link  from 'next/link';
import { redirect } from 'next/navigation'
import { useSwipeable } from 'react-swipeable';

export default function MyApp({ Component, pageProps, router }) {

    function prevPrincipio(idx, e) {
        router.push('/principios/' + (parseInt(idx) - 1));
    }

    function nextPrincipio(idx, e) {
        router.push('/principios/' + (parseInt(idx) + 1));
    }

    if (router.pathname.startsWith('/principios/')) {
        let idx = router.pathname.split('/').pop();
        const handlers = useSwipeable({
            onSwipedLeft: (eventData) => nextPrincipio(idx),
            onSwipedRight: (eventData) => prevPrincipio(idx)
        });
        return (
            <RootLayout>
                <h1>Principios networkistas</h1>
                <div {...handlers} class="principios">
                    <h2>{idx}</h2>
                    <Component {...pageProps} />
                    <div className="btn-principios">
                        <Link className={`prev-principio ${idx == 1 ? 'hidden' : ''}`} href="javascript:void(0)" onClick={(e) => prevPrincipio(idx, e)} />
                        <Link className="next-principio" href="javascript:void(0)" onClick={(e) => nextPrincipio(idx, e)} />
                    </div>
                </div>
            </RootLayout>
        )
    } else {
        return (
            <RootLayout>
            <Component {...pageProps} />
            </RootLayout>
        )
    }
}
