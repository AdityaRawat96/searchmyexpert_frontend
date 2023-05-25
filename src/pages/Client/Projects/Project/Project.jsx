import classes from './Project.module.css';
import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import { useState } from 'react';
import OverviewTab from './Tabs/OverviewTab';

import ContractTab from './Tabs/ContractTab';
import ProjectTableTab from './Tabs/ProjectTableTab';
import MilestoneTab from './Tabs/MilestoneTab';
import SupportTab from './Tabs/SupportTab';
import ScopeTab from './Tabs/ScopeTab';

const project = {
  id: 1,
  status: 'Active',
  title: 'Piyush Kumar Solanki Sv Website Development',
  service_type: 'Single Vendor eCommerce',
  date: '2021-09-01',
  deadline: '2021-09-15',
  budget: '50000',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu dictum varius duis. Eu turpis egestas pretium aenean pharetra magna ac placerat. Fringilla urna porttitor rhoncus dolor. Diam donec adipiscing tristique risus nec feugiat in. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Vulputate dignissim suspendisse in est ante in nibh. Tincidunt eget nullam non nisi est sit amet facilisis. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Dignissim sodales ut eu sem integer vitae justo. At auctor urna nunc id cursus metus aliquam eleifend. Semper quis lectus nulla at volutpat diam. Donec ultrices tincidunt arcu non. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Viverra tellus in hac habitasse platea dictumst. Faucibus a pellentesque sit amet porttitor eget dolor. Et pharetra pharetra massa massa ultricies mi. Facilisi nullam vehicula ipsum a arcu cursus vitae congue.
  Nulla facilisi morbi tempus iaculis urna id. Elit sed vulputate mi sit. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Consequat nisl vel pretium lectus quam id. Sed odio morbi quis commodo odio aenean sed. Scelerisque varius morbi enim nunc faucibus a pellentesque. Sed odio morbi quis commodo. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Lectus quam id leo in vitae turpis massa sed. Pellentesque adipiscing commodo elit at. Odio morbi quis commodo odio aenean sed adipiscing diam.
  In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Dolor magna eget est lorem ipsum. Venenatis cras sed felis eget velit. In dictum non consectetur a erat. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Semper feugiat nibh sed pulvinar proin. Faucibus in ornare quam viverra orci sagittis eu. Aliquet risus feugiat in ante metus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Netus et malesuada fames ac. Sed felis eget velit aliquet sagittis. Nunc congue nisi vitae suscipit tellus mauris. Sed felis eget velit aliquet. Suspendisse in est ante in nibh mauris cursus. Sollicitudin ac orci phasellus egestas. Sodales ut etiam sit amet. Viverra orci sagittis eu volutpat odio facilisis.
  Sollicitudin tempor id eu nisl nunc mi. Proin fermentum leo vel orci. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Scelerisque felis imperdiet proin fermentum leo. Amet nisl purus in mollis nunc. Viverra vitae congue eu consequat. At consectetur lorem donec massa sapien. Volutpat diam ut venenatis tellus. Consequat id porta nibh venenatis cras sed felis eget velit. Volutpat sed cras ornare arcu. Ultricies mi eget mauris pharetra. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Viverra ipsum nunc aliquet bibendum. Est ultricies integer quis auctor elit sed vulputate mi sit.
  Suspendisse interdum consectetur libero id faucibus. Dignissim suspendisse in est ante in nibh mauris cursus. Commodo quis imperdiet massa tincidunt nunc. Eleifend mi in nulla posuere sollicitudin aliquam. Amet tellus cras adipiscing enim eu turpis. Metus aliquam eleifend mi in. Velit dignissim sodales ut eu sem integer vitae. Gravida rutrum quisque non tellus orci ac. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Senectus et netus et malesuada fames ac turpis egestas maecenas. Porta lorem mollis aliquam ut porttitor leo a.`,
};

const Project = () => {
  const [key, setKey] = useState('overview');

  return (
    <div className={`page-content-wrapper-main ${classes.Project}`}>
      <Row className="mb-3">
        <Col md={12} sm={12}>
          <h3 className="my-3">{project.title}</h3>
        </Col>
      </Row>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="project-tabs"
      >
        <Tab eventKey="overview" title="Overview">
          <OverviewTab project={project} />
        </Tab>
        <Tab eventKey="contract" title="Contract">
          <ContractTab project={project} />
        </Tab>
        <Tab eventKey="project_table" title="Project Table">
          <ProjectTableTab project={project} />
        </Tab>
        <Tab eventKey="scope" title="Scope">
          <ScopeTab project={project} />
        </Tab>
        <Tab eventKey="support" title="Support">
          <SupportTab project={project} />
        </Tab>
        <Tab eventKey="milestone" title="Milestone">
          <MilestoneTab project={project} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Project;
