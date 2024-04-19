import { useParams } from "react-router-dom";

import {
  faFaceSadTear,
  faMagnifyingGlassMinus,
} from "@fortawesome/free-solid-svg-icons";

/* Components */
import Message from "../../../components/message/Message";

/* Utils */
import { getDomains } from "./utils/getDomains";

const Domain = () => {
  const { name } = useParams();

  const domains = getDomains();

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

  const domain = domains.find((d) => d.toLowerCase() === name.toLowerCase());

  // Handle the case where the domain is not found
  if (!domain) {
    return (
      <Message
        icon={faMagnifyingGlassMinus}
        title="Domain not found"
        message="Oops! It seems that the domain you’re trying to access is not available."
      />
    );
  }

  return <div>Domain: {domain}</div>;
};

export default Domain;
