import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import ShopPage from "./pages/ShopPage"
import { LanguageProvider } from "./context/LanguageContext"

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:slug" element={<ShopPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}
