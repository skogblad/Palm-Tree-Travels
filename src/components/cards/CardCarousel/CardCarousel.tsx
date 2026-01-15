import { Children, useState, type ReactNode } from "react"
import styles from "./CardCarousel.module.scss"
import { ChevronLeft, ChevronRight } from "lucide-react"

type CardCarouselProps = {
  children: ReactNode
  className?: string
}

export const CardCarousel = ({ children, className }: CardCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const items = Children.toArray(children)

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <div className={`${styles.carousel} ${className ?? ''}`}>

      {/* Desktop: show all cards */}
      <div className={styles.desktopView}>
        {children}
      </div>

      {/* Mobile: show 1 + pagination */}
      <div className={styles.mobileView}>
        <div className={styles.cardWithArrows}>
          <button 
            type="button"
            className={styles.arrowButton}
            onClick={goToPrev}
            aria-label="Föregående kort"
          >
            <ChevronLeft aria-hidden="true"/>
          </button>

          {items[activeIndex]}

          <button
            type="button"
            className={styles.arrowButton}
            onClick={goToNext}
            aria-label="Nästa kort"
          >
            <ChevronRight aria-hidden="true"/>
          </button>
        </div>

        <nav className={styles.pagination}>
          {items.map((_, index) => (
            <button 
              key={index}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Visa kort ${index + 1}`}
            />
          ))}
        </nav>
      </div>
    </div>
  )
}