import { Container, Image } from 'react-bootstrap';
import { FaChartLine,FaRecycle,  FaFeather, FaLeaf } from 'react-icons/fa';
import './Concept.css'; // Assurez-vous d'avoir un fichier CSS associé pour les styles

export default function Concept() {
  return (
    <Container fluid className="px-4 px-lg-5"> {/* Ajout du padding horizontal */}
      <div className="text-center justify-content-center">
        <h1>Notre concept</h1>
        <Image src="/assets/images/flow_diagram.png" className="img-fluid w-75" alt="Flow diagram" />

        {/* Conteneur Flexbox pour aligner les colonnes */}
        <div className="flex-container mt-5">
          {/* Groupe Hybridation Intelligente (1/3 de la page) */}
          <div className="hybridation-group">
            <section className="about-section text-center" id="hybridation">
              <div className="content">
                <h2 className="section-title">Hybridation Intelligente</h2>
                <div className="text-container">
                  <span className="service-icon rounded-circle mx-auto mb-3 qualite">
                    <FaChartLine />
                  </span>
                  <h4><strong>Complémentarité Technologique</strong></h4>
                  <p className="text-faded mb-0">
                    L’hybridation entre la pile à combustible et le turboprop optimise l’utilisation de chaque technologie en fonction des phases de vol. La pile est efficace en croisière, tandis que le turboprop fournit la puissance au décollage et à la montée.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Groupe Synergie (2/3 de la page) */}
          <div className="synergie-group">
            <section className="about-section text-center" id="synergie">
              <div className="content">
                <h2 className="section-title">Synergie - Par l'injection de vapeur</h2>
                <div className="synergie-subsections"> {/* Nouveau conteneur pour les sous-sections */}
                  <div className="text-container">
                    <span className="service-icon rounded-circle mx-auto mb-3 qualite">
                      <FaRecycle />
                    </span>
                    <h4><strong>Augmentation de l’Efficacité</strong></h4>
                    <p className="text-faded mb-0">
                      La vapeur récupère la chaleur perdue dans les gaz d’échappement, augmentant ainsi le rendement thermique du système.
                    </p>
                  </div>

                  <div className="text-container">
                    <span className="service-icon rounded-circle mx-auto mb-3 qualite">
                      <FaFeather />
                    </span>
                    <h4><strong>Augmentation de la Densité de Puissance</strong></h4>
                    <p className="text-faded mb-0">
                      L’injection de vapeur dans la turbomachine accroît la puissance en augmentant le débit massique, optimisant ainsi le rapport puissance/poids.
                    </p>
                  </div>

                  <div className="text-container">
                    <span className="service-icon rounded-circle mx-auto mb-3 qualite">
                      <FaLeaf />
                    </span>
                    <h4><strong>Réduction des NOx</strong></h4>
                    <p className="text-faded mb-0">
                      L’injection de vapeur réduit significativement les émissions de NOx, améliorant les performances énergétiques et réduisant l'impact environnemental.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Image concept */}
        <div className="content-section-heading concept-img mt-5">
          <img src="assets/images/Concept_Described.png" alt="Hybridation Concept" width="70%" />
        </div>
      </div>
    </Container>
  );
}
