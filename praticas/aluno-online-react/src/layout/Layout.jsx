import { Outlet } from "react-router-dom"
import Menu from "../components/Menu"

function Layout() {
  return (
    <div className="app-container">
      <Menu />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
