import { Col, Container, Image } from 'react-bootstrap';

export default function Concept() {
  return (
    <Container fluid>
      <Col className='text-center justify-content-center'>
        <h1>Notre concept</h1>
        <Image src='/assets/images/flow_diagram.png' className='img-fluid w-75' alt='Flow diagram' />
        <p className='mt-4'>
          Notre <strong>architecture de propulsion hybride</strong> combine une <strong>pile à combustible</strong> et un <strong>turboprop à hydrogène</strong>. Cette approche a pour objectif de maximiser l'efficacité énergétique tout en réduisant le poids global du système de propulsion.
        </p>
        <p>
          <strong>Stockage d'hydrogène (H₂ Tank)</strong> : L'hydrogène est stocké dans un réservoir, prêt à être utilisé par deux systèmes principaux : la pile à combustible et le turboprop.
        </p>
        <p>
          <strong>Pile à Combustible (Fuel Cell)</strong> : La pile à combustible convertit l'hydrogène en électricité, alimentant une propulsion électrique (Elec. Propul) qui travaille en parallèle avec le turboprop. Elle génère également de l'eau qui est exploitée pour améliorer les performances du turboprop.
        </p>
        <p>
          <strong>Système de Turboprop</strong> : L'hydrogène est aussi utilisé pour alimenter une turbine à gaz (Turbine), qui est ensuite couplée à un arbre (Turboshaft) pour produire de l'énergie mécanique (P méc.). Cette énergie est transférée à une boîte de vitesses (Gearbox) qui entraîne l’hélice (Prop).
        </p>
        <p>
          <strong>Optimisation par la Gestion de l'Eau</strong> : L'eau produite par la pile à combustible est récupérée, condensée, puis réinjectée dans le système de turbomachine via un compresseur. Cette eau, sous forme de vapeur et de gouttelettes, permet d'améliorer les performances de la chambre de combustion (CC) et de la turbine, tout en optimisant la gestion thermique.
        </p>
        <p>
          <strong>Échangeur de Chaleur (HEX)</strong> : L'échangeur de chaleur permet de récupérer de la chaleur issue des gaz d’échappement pour améliorer l'efficacité du système global, en réchauffant l'eau issu de la pile à combustible.
        </p>
        <p>
          Nous appelons se système hybridation synergetique car il y a une hybridation mécanique via le turboprop et la propulsion électrique (moteur electrique - PAC), mais aussi, l'utilisation de l'eau de la pac pour la réinjecter dans la turbomachine. Ceci nous permet de concevoir un système de propulsion à la fois performant et économe, tout en limitant sont impact sur l'environnement en divisant par 10 les emmision de Nox.
        </p>
      </Col>
    </Container>
  );
}
