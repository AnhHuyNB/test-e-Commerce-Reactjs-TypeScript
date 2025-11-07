import { useTranslation } from 'react-i18next'
import styles from './Home.module.scss'
import useTheme from '../../config/context/useTheme'

const HomePage = () => {
    const { toggleTheme } = useTheme()
      const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en'? 'vn':'en')
  }

  return (
    <div>
        <button onClick={toggleLanguage}>click</button>
        <h1 className={styles.title}>{t('Welcome to React')}</h1>
        <button onClick={toggleTheme}>toggleTheme</button>
    </div>
  )
}

export default HomePage