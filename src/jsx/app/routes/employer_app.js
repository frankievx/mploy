import classNames from 'classnames';
import axios from 'axios';
import { connect } from 'react-redux';
import actions from 'redux/actions';
import SidebarMixin from 'global/jsx/sidebar_component';
import Header from 'routes/components/emp_header';
import Footer from 'routes/components/footer';
import EmployerSidebar from 'routes/components/employer_sidebar';
import ApplicantDashboard from 'routes/containers/applicant_dashboard';
import EmployerDashboard from 'routes/containers/employer_dashboard';
import Applications from 'routes/containers/applications';
import Jobs from 'routes/containers/jobs';
import Profile from 'routes/containers/profile_user';
import Calendar from 'routes/components/calendar';
import Charts from 'routes/containers/chart_stats';
import JobBoard from 'routes/tables/job_board';
import NewJob from 'routes/containers/newjob';


@SidebarMixin
@connect(state => state)
export default class EmployerApp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(actions.fetchEmployerRequests());
	}

	isEmployer = () => {
		axios.get('user/verifyuser')
			.then(function(user) {
				if(!user.data.employer) {
					window.location.replace(document.referrer);
				}
			});
	};

	render() {
    const { dispatch } = this.props;
		let classes = classNames({
			'container-open': this.props.open
		});

		let posts = this.props.posts;

		this.isEmployer();

		return (
			<Container id='container' className={classes}>
				<EmployerSidebar />
				<Header dispatch={ dispatch }/>
        {this.props.children}
				<Footer />
			</Container>
		);
	}
}
