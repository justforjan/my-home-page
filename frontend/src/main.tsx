import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router";
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <div className="p-5 pb-20">
          <div className="container mx-auto max-w-2xl cursor-default">
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </div>
      </div>
  </StrictMode>,
)
