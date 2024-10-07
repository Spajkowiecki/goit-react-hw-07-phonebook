import style from './Contact.module.css';

//! refactored Contact class to function
export default function Contact({ contact, children }) {
  return (
    <div className={style.container}>
      <div className={style.contactInfo}>
        <div className={style.contactLeft}>
          <img src="https://placehold.co/60x60" alt="user avatar" />
        </div>
        <div className={style.contactRight}>
          <p>
            <strong>{contact.name}</strong> <br /> {contact.number} <br />{' '}
            {contact.email}
          </p>
        </div>
      </div>
      <div className={style.controls}>{children}</div>
    </div>
  );
}
