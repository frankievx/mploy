import classNames from 'classnames';
import { connect } from 'react-redux';
import { JobBody, JobHeader} from './jobCard';


class JobModal extends React.Component {
   render() {

    const styles = {
      'margin': '12.5px 0',
      'borderBottom': '1px dotted #999',
      'paddingBottom': 12.5,
      'textAlign': 'center'
    };

    const panelStyle = {
      'maxWidth': '400px',
      'paddingTop': '0px'
    };

    const colStyle = {
      'zIndex': -100
    };

    return(
      <Grid>
      <Row>
        <Col sm={12} md={12} lg={12} className="clearfix">
        <PanelContainer>
          <Panel>
            <PanelBody>
              <Grid>
                <Row style={styles}>
                  <div className="jobcard">
                    <JobHeader data={this.props.data} />
                    <JobBody data={this.props.data} />
                  </div>
                </Row>
              </Grid>
            </PanelBody>
          </Panel>
        </PanelContainer>
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default class appdashCard extends React.Component {
  getLargeModal() {
    return (
      <Modal md>
    <ModalBody>
      <JobModal data={this.props.item} />
    </ModalBody>
    <ModalFooter>
      <Button outlined bsStyle='lightred' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
    </ModalFooter>
  </Modal>
    );
  }

  render() {
    let jobtitle = this.props.item.job_title;
    let company = this.props.item.company_name;
    let profilePic = this.props.item.profile_picture;
    let appID = this.props.item.appID;
    let index = this.props.index;
    let status = this.props.item.status;

    const card = {
      'border': '1px solid black',
      'border-radius': '5px'
    };

    const panelStyle = {
    'padding': '0px 10px',
    };

    const panelStyle1 = {
    'padding': '0px',
    // 'border': '1px solid rgba(0, 0, 0, 0.30)',
    'borderBottom':'1px solid rgba(0,0,0,.30)',
    'minHeight' : '80px',
    // 'border-radius':'10px',
    'maxWidth': '300px',
    'margin':'auto',
    'marginBottom': '15px',

    };

    const panelStyle3 = {
    'padding': '0px',

    };

    const profileImg = {
    'padding': '0px',
    'marginTop':'10px'

    };

    const panelBody = {
    'paddingTop': '5px',
    };

    const companyName = {
    'margin': '10px 0px'
    };

    const position = {
    'margin': '8px 0px',
    'color':'black'
    };


    return (
      <div>
    <Col style={panelStyle} sm={12} xs={12} md={12}>
    <PanelContainer noControls style={panelStyle1}>
      <Panel style={panelStyle}>
        <PanelBody style={panelBody}>
          <Grid>
            <Row onClick={ModalManager.create.bind(this, this.getLargeModal())}>
              <Col style={profileImg} xs={4} collapseRight>
              <img src={profilePic} width='45' height='45' style={{display: 'block', borderRadius: 45, margin: 'auto', float: 'left', 'border': '2px solid #2AA38B', 'padding': '3px'}} />
              </Col>
              <Col xs={8} style={panelStyle3} className="jobcard">
              <div>
                <h4 style={position}> {jobtitle} </h4>
              </div>
              <div>
                <Col style={{padding: '0px'}} xs={10} sm={10} xs={10}>
                <h6 style={companyName}> {company} </h6>
                </Col>
                <Col style={{ 'padding': '0px'}} xs={2} md={2} sm={2}>
                <Icon onClick={()=> this.props.rescind(appID, index, status)} style={{'float':'right','fontSize':'16px', 'cursor':'pointer'}} bundle='fontello' glyph='trash-1' />
                  </Col>
              </div>
              </Col>
            </Row>
          </Grid>
        </PanelBody>
      </Panel>
    </PanelContainer>
    </Col>
  </div>
    );
  }
}
