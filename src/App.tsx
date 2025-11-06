
import { useTranslation } from 'react-i18next';
import './App.css'

function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en'? 'vn':'en')
  }
  return (
    <div>
      <button onClick={toggleLanguage}>click</button>
      {t('Welcome to React')}
    </div>
  )
}

export default App
