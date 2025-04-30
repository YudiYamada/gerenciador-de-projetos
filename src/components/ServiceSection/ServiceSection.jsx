import ServiceForm from "../../components/ServiceForm/ServiceForm";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import {
  ServiceFormContainer,
  ProjectInfo,
  Button,
} from "../../pages/Projeto/ProjetoStyles";

function ServiceSection({
  services,
  project,
  showServiceForm,
  toggleServiceForm,
  createService,
  removeService,
}) {
  return (
    <>
      <ServiceFormContainer>
        <h2>Adicione um Serviço</h2>
        <Button onClick={toggleServiceForm}>
          {showServiceForm ? "Fechar" : "Adicionar serviço"}
        </Button>

        {showServiceForm && (
          <ProjectInfo>
            <ServiceForm
              handleSubmit={createService}
              btnText="Adicionar Serviço"
              projectData={project}
            />
          </ProjectInfo>
        )}
      </ServiceFormContainer>

      <ServiceFormContainer>
        {services.length > 0 ? (
          services.map((service) => (
            <ProjectInfo>
              <h2>Serviços</h2>
              <ServiceCard
                key={service.id}
                {...service}
                handleRemove={() => removeService(service.id, service.cost)}
              />
            </ProjectInfo>
          ))
        ) : (
          <p>Não há serviços cadastrados.</p>
        )}
      </ServiceFormContainer>
    </>
  );
}
export default ServiceSection;
