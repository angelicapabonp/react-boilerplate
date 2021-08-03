import Card from '@components/Card';

import styles from './Home.module.scss';

import { TEMPLATE_NAME } from '@utils/constants';

const Home = () => {
  const user: UserT = {
    name: 'Jane',
    lastname: 'Doe',
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome {`${user.name} ${user.lastname}`}, to {TEMPLATE_NAME}
        </h1>

        <p className={styles.description}>Get started by editing</p>
        <p className={styles.description}>
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        <p className={styles.description}>
          <code className={styles.code}>templates/Home/Home.tsx</code>
        </p>
        <p className={styles.description}>
          <code className={styles.code}>components/Card/Card.tsx</code>
        </p>

        <div className={styles.grid}>
          <Card
            href="https://github.com/angelicapabonp/react-boilerplate"
            title="Repositorio &rarr;"
            description="Discover and use boilerplate."
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
