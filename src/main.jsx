import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootNode = document.getElementById('root')
if (rootNode) {
  const root = createRoot(rootNode)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} else {
  // Fallback: log error if root element not found
  // (Prevents runtime crash in some environments)
  // eslint-disable-next-line no-console
  console.error('Root element not found')
}
