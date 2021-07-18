import styles from './Card.module.scss';

type CardT = {
  href: string;
  title: string;
  description: string;
}

const Card = ({ href, title, description }: CardT) => {
  return <a href={href} className={styles.card}>
    <h2>{title}</h2>
    <p>{description}</p>
  </a>
}

export default Card;