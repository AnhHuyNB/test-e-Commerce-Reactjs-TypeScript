import {Route, Routes } from 'react-router'
import { routerConfig } from './routerConfig'

const AppRouter = () => {
    console.log(routerConfig)
  return (
    <Routes>
        {routerConfig.map((router)=>(
            <Route path={router.path} element={router.element}/>
        ))}
    </Routes>
  )
}

export default AppRouter