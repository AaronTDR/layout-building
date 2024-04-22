import { useParams } from "react-router-dom";

/* Components */
import Layout from "../../../components/layout/Layout";

import {
  faFaceSadTear,
  faMagnifyingGlassMinus,
} from "@fortawesome/free-solid-svg-icons";

/* Components */
import Message from "../../../components/message/Message";
import Categories from "../components/categories/Categories";

/* Styles */
import styles from "./domain.module.css";

/* Utils */
import { getDomains } from "../utils/getDomains";

const Domain = () => {
  const { name } = useParams();

  const domains = getDomains();

  // Handles the case where name or domains do not exist
  if (!name || !domains) {
    // return <div>Domain not found</div>;
    return (
      <Message
        icon={faFaceSadTear}
        title="Something went wrong"
        message="Sorry, we were unable to complete your action. Please try again later."
      />
    );
  }

  const domain = domains.find(
    (d) => d.name.toLowerCase() === name.toLowerCase()
  );

  // Handle the case where the domain is not found
  if (!domain) {
    return (
      <Message
        icon={faMagnifyingGlassMinus}
        title="Domain not found"
        message="Oops! It seems that the domain you're trying to access is not available."
      />
    );
  }

  return (
    <Layout css={styles.container}>
      <main className={styles.content}>
        <Categories domain={domain} />
      </main>
    </Layout>
  );
};

export default Domain;
