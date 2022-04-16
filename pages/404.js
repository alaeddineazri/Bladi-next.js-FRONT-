import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";

const NotFoundPage = () => {
  return (
    <Layout >
    <div className={styles.notFound}>
        <h1>404</h1>
    </div>
    </Layout>
  );
};

export default NotFoundPage;
