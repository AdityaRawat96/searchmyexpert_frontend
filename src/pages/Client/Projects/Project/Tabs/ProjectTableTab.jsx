import { Card, Image } from 'react-bootstrap';
import moment from 'moment';

const PROJECT_LIST = [];

const ProjectTableTab = () => {
  return (
    <Card className="tab_section">
      <Card.Body className="table-responsive">
        {PROJECT_LIST.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-custom-dahboard">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Created On</th>
                </tr>
              </thead>
              <tbody>
                {PROJECT_LIST.map((project) => (
                  <tr key={project.id}>
                    <td>{project.title}</td>
                    <td>{project.status}</td>
                    <td>{moment(project.created_at).format('MMM D, Y')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="center-elements-div mt-5">
            <div className="no-data-container">
              <Image src="/assets/images/no_data.svg" alt="no data" />
              <div className="no-data-text-container">
                <h3>No Results</h3>
              </div>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectTableTab;
