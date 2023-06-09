import { BrowserRouter, Routes, NavLink, Route, Navigate } from "react-router-dom"
import { Shopping } from "../02-component-patterns/pages"

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img style={{ width: "100px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png" alt="nav-img" />
          <ul>
            <li>
              <NavLink className={({ isActive }) => isActive ? "nav-active" : ""} to="/">Shopping</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "nav-active" : ""} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "nav-active" : ""} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={ <Shopping /> } />
          <Route path="about" element={ <h1>About page</h1> } />
          <Route path="users" element={ <h1>Users page</h1> } />

          <Route path="/*" element={<Navigate to="/home" replace />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
