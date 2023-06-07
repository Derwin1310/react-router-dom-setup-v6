import { BrowserRouter, Routes, NavLink, Route, Navigate } from "react-router-dom"
import { routes } from "./routes"
import { Suspense } from "react"

export const Navigation = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img style={{ width: "100px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png" alt="nav-img" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={name}>
                  <NavLink className={({ isActive }) => isActive ? "nav-active" : ""} to={to}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
