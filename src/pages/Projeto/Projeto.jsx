import { useParams } from "react-router-dom";
import { useState } from "react";
import useProject from "../../hooks/useProject";
import useProjectActions from "../../hooks/useProjectActions";
import Loading from "../../components/Loading/Loading";
import Message from "../../components/Message/Message";
import { ProjectsDetails } from "./ProjetoStyles";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
import ServiceSection from "../../components/ServiceSection/ServiceSection";

function Projeto() {
  const { id } = useParams();
  const { project, setProject, services, setServices, loading, error } =
    useProject(id);
  const [isEditing, setIsEditing] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const { editPost, createService, removeService } = useProjectActions(
    project,
    setProject,
    setServices,
    setMessage,
    setType
  );

  return (
    <ProjectsDetails>
      {loading && <Loading />}
      {error && <Message msg={error} type="error" />}
      {message && <Message msg={message} type={type} />}

      {project && (
        <>
          <ProjectDetails
            project={project}
            isEditing={isEditing}
            toggleEdit={() => setIsEditing(!isEditing)}
            editPost={editPost}
          />
          <ServiceSection
            services={services}
            project={project}
            showServiceForm={showServiceForm}
            toggleServiceForm={() => setShowServiceForm(!showServiceForm)}
            createService={createService}
            removeService={removeService}
          />
        </>
      )}
    </ProjectsDetails>
  );
}

export default Projeto;
