import React from "react";

export default class Enterprise extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="page">
        <div className="content">
          <div style={{ marginBottom: 10 }}>
            <img
              alt=""
              src="http://bejaialogistique.com/file/img/block/naissance-de-la-sarl-bejaia-logistique-ifri-transport-routier.jpg"
            />
          </div>
          <div className="pane">
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <a>
                <img
                  alt=""
                  style={{ width: 251, margin: 5 }}
                  src="http://bejaialogistique.com/file/img/ban/contactez-nous-formulaire-en-envoyannant-un-email.jpg"
                />
              </a>
              <a>
                <img
                  alt=""
                  style={{ width: 251, margin: 5 }}
                  src="http://bejaialogistique.com/file/img/accueil/service-bejaia-logistique-manutention.jpg"
                />
              </a>
            </div>
            <div style={{ flex: 3, marginLeft: 10 }}>
              <h1>NAISSANCE DE LA Condor logistics</h1>
              <p>
                Fondée en 2008, la Sarl BEJAIA LOGISTIQUE –BL- est la référence
                Algérienne dans le domaine du transport routier. Elle bénéficie
                d'une image de qualité et d'une notoriété nationale.
              </p>
              <p>
                Nos activités sont étendues dans le transport public de
                marchandises, Location d’engins et matériels pour bâtiment,
                travaux publics et manutention, location de véhicules avec ou
                sans chauffeur et dans le transport des produits pétroliers.
              </p>
              <p>
                Avec un parc roulant avoisinant les 950 cartes grises, la Sarl
                BEJAIA LOGISTIQUE poursuit son développement sur le marché de la
                location à travers le territoire national et au-delà, à
                destination d'une clientèle professionnelle très diversifiée ;
                entreprises du BTP, collectivités et administrations,
                industries, services, PME, outre une clientèle de Particuliers.
              </p>
              <p>
                A ce jour, le professionnalisme et la performance de la Sarl
                BEJAIA LOGISTIQUE s'appuient sur les compétences des
                collaborateurs formés pour répondre au mieux et sans relâche aux
                clients les plus exigeants. Conscient de sa responsabilité en
                tant qu'acteur majeur du marché de la location, BL investit pour
                concilier :
              </p>
              <ul>
                <li>
                  Dynamisme et développement durable : respect de
                  l'environnement par le choix de matériels sûrs et non
                  polluants, le tri sélectif et le traitement des déchets
                  industriels via les professionnels du recyclage telles que les
                  huiles usées, batteries…
                </li>
                <li>
                  Éthique sociale, en protégeant et en respectant ses équipiers
                  par leur formation en contribuant au progrès collectif, le
                  partage des résultats, la promotion interne. Parce qu'une vie
                  professionnelle saine repose sur un environnement de travail
                  adapté et agréable.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
