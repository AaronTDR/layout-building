import { useParams } from "react-router-dom";
import { getDomains } from "./utils/getDomains";

const Domain = () => {
  const { name } = useParams();

  const domains = getDomains();

  if (!name || !domains) return <div>Domain not found</div>;

  const domain = domains.find((d) => d.toLowerCase() === name.toLowerCase());

  if (!domain) {
    // Manejar el caso en que el dominio no se encuentra
    return <div>Domain not found</div>;
  }

  return <div>Domain: {domain}</div>;
};

export default Domain;
