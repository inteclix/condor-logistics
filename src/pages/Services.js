import React from "react";

export default class Services extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="page">
        <div className="content">
          <div id="#camions-semi-remorques">
            <h1>Camions Semi-Remorques</h1>
            <p>
              Forts de l'importance de notre flotte composée de plus de 220
              ensembles camions semi remorques à la pointe de l’innovation, nous
              sommes en mesure de répondre, parfaitement, à votre demande en
              matière de transport de vos produits à travers le territoire
              national et international.
            </p>
            <p>
              Nos remorques sont dotées de bâches latérales coulissantes, de
              toits ouvrants et de portes arrières battantes avec une capacité
              de charge utile de 30 tonnes ou 92 M3. Avec nos tracteurs 6x4 à
              double pont, nous pouvons répondre à vos besoins dans les endroits
              les plus ardus.
            </p>
            <u>Indicateur de performance et de qualité :</u>
            <p>
              Soucieux pour mieux vous servir, nous avons intégré au quotidien
              dans notre démarche, des indicateurs de performances afin que
              l'ensemble des compteurs de nos tableaux de bord convergent vers
              une qualité irréprochable :
            </p>
            <ul>
              <li>Importante flotte : plus de 220 camions semi remorques</li>
              <li>
                Matériel récent à la pointe de l'innovation : une pensée pour
                l'environnement qui s'implique dans la réduction des émissions
                de CO2
              </li>
              <li>
                Personnel qualifié : plus de 135 professionnels spécialisés dans
                l'entretien, la maintenance et la gestion afin de mieux répondre
                aux attentes les plus exigeantes de notre clientèle.
              </li>
              <li>
                Atelier intégré doté d'un équipement de maintenance performent
                issu d'une technologie de pointe soutenu par un magasin de
                pièces de rechange d'une superficie de plus de 550 M2.
              </li>
              <li>
                Atelier mobile équipé d'une assistance technique à distance
                7jours/7, synonyme d'un matériel entretenu, sûr et performant.
              </li>
              <li>
                Une station à carburant intégrée et un portique lavage
                automatique opérationnels 24h/24 : flotte prête et propre à
                chaque instant.
              </li>
              <li>
                Localisation des véhicules à temps réel avec une assistance
                commerciale 24h/24: suivi instantané des commandes et des
                livraisons.
              </li>
            </ul>
          </div>
          <div id="camions-porteurs">
            <h1>Camions Porteurs</h1>
            <p>
              Parce que la qualité de nos services est notre principal objectif,
              nous voulons vous garantir une entière satisfaction. C'est
              pourquoi nous nous engageons à vous proposer les choix les mieux
              adaptés à vos besoins en mettant à votre disposition des camions
              porteurs à différents usages:
            </p>
            <ul>
              <li>
                Porteurs avec carrosserie équipée de rideaux coulissants d'une
                capacité de charge utile de 10 tonnes ou 36 M3 pour assurer le
                transport des produits conditionnés et palettisés.
              </li>
              <li>
                Porteurs 6x4 à double pont équipés d'une benne en acier HARDOX
                renforcé offrant ainsi une haute résistance contre les impacts
                et les chocs, dédiée principalement pour l'usage chantier avec
                une capacité de charge utile de 18 tonnes ou 16 M3 conçu pour
                les chargements en vrac.
              </li>
            </ul>
            <p>
              Pour le suivi de vos commandes et vos livraisons à temps réel et
              instantané, l'ensemble de nos camions sont équipés d'un système de
              géo-localisation avec une assistance technique et commerciale
              7jours/7.
            </p>
          </div>
          <div id="camions-porte-engins">
            <h1>Camions Porte Engins et Porte Conteneurs</h1>
            <p>
              Pour les déplacements de vos engins, nous pouvons prendre en
              charge vos demandes les plus spécifiques avec notre porte engins
              surbaissé à trois essieux avec une capacité de charge utile de 44
              tonnes, d'une longueur de 13,16 mètres et d'une largeur de 3
              mètres. Pour faciliter les chargements, notre remorque est équipée
              de deux rampes d'accès hydrauliques. L'expérience et le
              savoir-faire de notre personnel, formé spécialement pour la
              manipulation du porte engins est le gage de sécurité de votre
              engin à transporter.
            </p>
            <p>
              Nous pouvons répondre à votre besoin pour le transport de vos
              conteneurs maritimes 20' et 40', chargés de marchandises sèches ou
              de marchandises sous température dirigée. Nos équipes sont à votre
              écoute afin de prendre en compte votre demande et mettre en œuvre
              le transport et le retour de vos conteneurs selon vos impératifs
              et ceux de votre compagnie maritime. Avec nos tracteurs à double
              pont, nous serons en mesure d'assurer le transport de votre
              machine même vers les endroits les plus ardus. La capacité de
              charge de nos plateaux porte conteneurs est de 45 tonnes avec 12
              twist-lock chacun offrant ainsi la possibilité de charger deux
              conteneurs 20' à la fois.
            </p>
            <p>
              Pour la manutention de vos conteneurs, nous pouvons mettre à votre
              disposition notre REACH STACKER 45/31 d'une capacité de charge de
              45 tonnes et de gerbage sur cinq niveaux.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
