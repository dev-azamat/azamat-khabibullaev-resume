import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid section__border">
        <motion.div
          className="contact__content"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="contact__title">
            <i className="ri-chat-3-line"></i> Talk to me
          </h3>

          <div className="contact__info">
            <div className="contact__data">
              <span className="contact__data-title">Email</span>
              <span className="contact__data-info">
                azamatkhabibullaevv@gmail.com
              </span>

              <Link
                className="contact__link"
                to="mailto:azamatkhabibullaevv@gmail.com"
                target="_blank"
              >
                Write me <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            <div className="contact__data">
              <span className="contact__data-title">Telegram</span>
              <span className="contact__data-info">+998 (95) 004-40-48</span>

              <Link
                className="contact__link"
                to="https://t.me/azamatkhabibullaev"
                target="_blank"
              >
                Write me <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            <div className="contact__data">
              <span className="contact__data-title">Instagram</span>
              <span className="contact__data-info">@azamatfullstack</span>

              <Link
                className="contact__link"
                to="https://www.instagram.com/azamatfullstack/"
              >
                Write me <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact__content"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="contact__title">
            <i className="ri-send-plane-line"></i> Write me your project
          </h3>

          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag" htmlFor="fullname">
                Full Name
              </label>
              <input
                className="contact__form-input"
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Write your full name"
                autoComplete="off"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag" htmlFor="email">
                Email
              </label>
              <input
                className="contact__form-input"
                type="email"
                name="email"
                id="email"
                placeholder="Write your email"
                autoComplete="off"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag" htmlFor="project">
                Project
              </label>
              <textarea
                className="contact__form-input"
                name="project"
                id="project"
                placeholder="Write your project"
                autoComplete="off"
              ></textarea>
            </div>

            <button className="contact__submit" type="submit">
              Submit <i className="ri-arrow-right-up-line"></i>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
