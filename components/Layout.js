import Header from './Header'
import Footer from './Footer'
import Analytics from './Analytics'

export default function Layout({ children, navBarTitle, fullWidth }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header navBarTitle={navBarTitle} fullWidth={fullWidth} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
