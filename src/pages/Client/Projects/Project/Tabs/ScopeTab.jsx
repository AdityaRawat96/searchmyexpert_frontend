import { Button, Card } from 'react-bootstrap';

const ScopeTab = (props) => {
  return (
    <Card className="tab_section card-no-header">
      <Card.Header>
        <h4>Scope: {props.project.title}</h4>
      </Card.Header>
      <Card.Body>
        <h4 className="mt-3">Reference & Competitor Analysis</h4>
        <h5 className="mt-3">References:</h5>
        <span className="mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
        <h5 className="mt-3">Links:</h5>
        <p className="mt-2">
          <span>https://tiemannlawfirm.com</span>
          <br />
          <span>https://tamakilaw.com/</span>
          <br />
          <span>http://www.haimdehfirm.com</span>
        </p>
        <hr className="my-5" />
        <h4>Pages</h4>
        <div className="table-responsive mt-5 mb-5">
          <table className="table table-custom-dahboard table-project">
            <thead>
              <tr>
                <th>Page</th>
                <th>Section</th>
                <th>Description</th>
                <th>Notables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Content / Image / Banner</h4>
        <div className="table-responsive mt-5 mb-5">
          <table className="table table-custom-dahboard table-project">
            <thead>
              <tr>
                <th>To be Provided</th>
                <th>By Client / Partners</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Tech Stack</h4>
        <div className="table-responsive mt-5 mb-5">
          <table className="table table-custom-dahboard table-project">
            <thead>
              <tr>
                <th>Components</th>
                <th>Tech Stack</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Milestones & Deliverable</h4>
        <div className="table-responsive mt-5 mb-5">
          <table className="table table-custom-dahboard table-project">
            <thead>
              <tr>
                <th>Phases</th>
                <th>Release %</th>
                <th>Deliverables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Back-End</h4>
        <div className="table-responsive mt-5 mb-5">
          <table className="table table-custom-dahboard table-project">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Description</th>
                <th>Relevance</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Integrations</h4>
        <div className="table-responsive mt-5 mb-5">
          <table className="table table-custom-dahboard table-project">
            <thead>
              <tr>
                <th>Integrations</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Notification System</h4>
        <div className="table-responsive mt-5 mb-5">
          <table className="table table-custom-dahboard table-project">
            <thead>
              <tr>
                <th>Notification System</th>
                <th>To Be Implemented</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ScopeTab;
