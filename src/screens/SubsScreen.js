import React, { useEffect, useState } from "react";
import SubCard from "../styles/SubCard";
// import logoGreen from "../common/images/logo_green.png";
// import logoWhite from "../common/images/logo_white.png";
// import logoYellow from "../common/images/logo_yellow.png";
import { getSubscription } from "../common/Services";

export default function SubsScreen() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    getSubscription()
      .then((answer) => {
        setSubs(answer.data);
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }, []);
  console.log(subs);

  return (
    <>
      <h1>Escolha seu Plano</h1>
      {subs.length === 0 ? (
        <>
          <p>Carregando...</p>
        </>
      ) : (
        subs.map((sub) => (
          <SubCard subId={sub.id} image={sub.image} children={sub.price} />
        ))
      )}
    </>
  );
}
