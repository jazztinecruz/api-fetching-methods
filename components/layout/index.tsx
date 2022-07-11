import NavBar from './header'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen grid grid-rows-[auto,1fr] gap-20">
      <header className='sticky top-0 z-50 py-4 px-6 bg-white shadow-md shadow-gray-200'>
        <NavBar />
      </header>
      <main className="py-3 px-2 mx-auto max-w-3xl">{children}</main>
    </div>
  )
}

export default Layout
