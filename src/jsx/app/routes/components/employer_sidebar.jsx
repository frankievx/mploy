import {
  Sidebar,
  SidebarNav,
  SidebarNavItem,
  } from 'global/jsx/sidebar_component';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from 'redux/actions';
import className from 'classnames';


class EmployerSidebar extends React.Component {
  render() {
  const navItem = {
    'height': '55px!important'
  };

  let posts = this.props.posts;
  if(posts === undefined || posts.length === 0) {

    return (
      <div>
        <Grid>
            <Row>
              <Col xs={12}>
                <div className='sidebar-header'>PAGES</div>
                <div className='sidebar-nav-container' overflowY='scroll'>
                  <SidebarNav style={{marginBottom: 0}}>
                    <SidebarNavItem style={navItem} glyph='icon-feather-map' name='Dashboard' href='/employer' />
                    <SidebarNavItem style={navItem} glyph='icon-outlined-todolist-add' name='Create Job' href='/employernewjob' />
                    <SidebarNavItem style={navItem} glyph='icon-ikons-user-circle' name='Profile' href='/employerprofile' />
                    <SidebarNavItem style={navItem} glyph='icon-dripicons-calendar' name='Calendar' href='/employercalendar' />
                  </SidebarNav>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        );
      }

      return (
        <div>
          <Grid>
            <Row>
              <Col xs={12}>
                <div className='sidebar-header'>PAGES</div>
                <div className='sidebar-nav-container' overflowY='scroll'>
                  <SidebarNav style={{marginBottom: 0}}>
                    <SidebarNavItem  glyph='icon-feather-map' name='Dashboard' href='/employer' style={navItem} />
                    <SidebarNavItem style={navItem}glyph='icon-outlined-todolist-add' name='Create Job' href='/employernewjob' />
                      <SidebarNavItem style={navItem} glyph='icon-ikons-bar-chart-2 float-right-rtl' name={<span>Job Posts</span>}>
                        <SidebarNav>
                          {
                            posts.map(item => <SidebarNavItem className='sBarNavy' glyph='icon-outlined-paper-sheet' href='/employer' name={item.job_title} onClick={() => this.props.select(item.jobID)} />)
                          }
                        </SidebarNav>
                      </SidebarNavItem>
                      <SidebarNavItem style={navItem} glyph='icon-fontello-th-2' name='Manage Posts' href='/employerjobboard' />
                      <SidebarNavItem style={navItem} glyph='icon-ikons-user-circle' name='Profile' href='/employerprofile' />
                      <SidebarNavItem style={navItem} glyph='icon-dripicons-calendar' name='Calendar' href='/employercalendar' />
                  </SidebarNav>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
  }


@connect(state => state)
export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch(actions.fetchUser());
  }

  selectJobPost = (jobID) => {
    this.props.dispatch(actions.selectJob(jobID));
  };

  render() {
    const user = this.props;
    let posts = this.props.posts;

    return (
      <div id='sidebar' {...this.props}>
        <div style={{'backgroundColor':'#395660'}}id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col style={{'padding':'0px'}} xs={12} collapseRight>
                <img src={user.user.profile_picture} width='60' height='60'
                  style={{display: 'block', borderRadius: 45, border: '2px solid #2AA38B', padding:'3px', margin: 'auto'}} />
              </Col>
            </Row>
          </Grid>
        </div>
        <div id='sidebar-container'>
            <EmployerSidebar  posts={this.props.posts}
                              select={this.selectJobPost} />
        </div>
      </div>
    );
  }
}
