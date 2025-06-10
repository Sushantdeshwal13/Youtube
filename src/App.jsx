import Head from './components/Head'
import Body from './components/Body'
import {Provider} from "react-redux"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import store from "./utils/Store"
import Maincontainer from './components/Maincontainer'
import Watchpage from './components/Watchpage'

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children: [
    {
      path:"/",
      element:<Maincontainer/>
    },
    {
      path:"watch",
      element:<Watchpage/>
    },
  ]
}])

function App() {

  return (
    <Provider store={store}>
    <RouterProvider router={appRouter}/>
    </Provider>
  )
  
}

export default App
