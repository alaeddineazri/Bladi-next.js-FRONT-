import Head from 'next/head'
import {useRouter} from 'next/router'
import style from '../styles/layout.module.css'
import Footer from './Footer'
import Header from './Header'
import ShowCase from './ShowCase'

const Layout = ({title , description , keywords , children }) => {
  const router = useRouter()

  return (
    <div>
        <Head > 
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Head>
        <Header />
        {router.pathname ==="/" && <ShowCase/> }
        <div className={style.container}>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout



Layout.defaultProps = {
    title: 'MyEvents',
    description: 'MyEvents is a platform for event organizers to create events and share them with the world',
    keywords: 'events, create, share, platform, event, organize, community'
}