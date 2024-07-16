import { useState } from 'react'
import { useDispatch } from 'react-redux'
import authSecive from './appwrite/authService'
import { useEffect } from 'react'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  useEffect(() => {
    authSecive.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className='w-full block'>
          <Header />
          <main>
            TODO : {/* <Outlet /> */}
          </main>
          <Footer />
        </div>
      </div >
    </>
  ) : (null)
}

export default App
