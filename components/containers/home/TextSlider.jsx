import { textSlider } from '@/data/textSlider'
import Image from 'next/image'

const TextSlider = () => {
  return (
    <section className="ep-text-slider-section overflow-hidden pt-120 bg-white">
      <div className="slider-main d-flex align-items-center">
        <div className="slider-item d-flex align-items-center">
          {textSlider.map((item) => (
            <h2 key={item.id} className="title">
              <Image src={item.icon} alt="globe-icon" />
              {item.title}
            </h2>
          ))}
        </div>
        <div className="slider-item d-flex align-items-center">
          {textSlider.map((item) => (
            <h2 key={item.id} className="title">
              <Image src={item.icon} alt="globe-icon" />
              {item.title}
            </h2>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TextSlider
