import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AddPlayer } from './Compnents/AddPlayer.jsx';

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
    },
    {
    path:"/addPlayer",
    element:<AddPlayer/>,
    },
    {
      path:"/updatePlayer/:playerId",
      element:<AddPlayer/>,
    }
]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

