import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import Landing from 'routes/landing';
import ApplicantApp from 'routes/applicant_app';
import EmployerApp from 'routes/employer_app';
import NewJob from 'routes/containers/newjob';
import Jobs from 'routes/containers/jobs';
import Controls from 'routes/forms/controls';
import Profile from 'routes/containers/profile_user';
import Charts from 'routes/containers/chart_stats';
import Calendar from 'routes/components/calendar';
import EmployerDashboard from 'routes/containers/employer_dashboard';
import ApplicantDashboard from 'routes/containers/applicant_dashboard';
import Applicant_Sidebar from 'routes/components/applicant_sidebar';



export default (browserHistory, onUpdate) => {
  return (
    <Router history={browserHistory} onUpdate={onUpdate}>
      <Route path='/' component={Landing}/>
      <Route path='/applicant' component={ApplicantApp}>
        <IndexRoute component={ApplicantDashboard} />
        <Route path='/applicant/profile' component={Profile} />
        <Route path='/applicant/jobs' component={Jobs} />
        <Route path='/applicant/charts' component={Charts} />
        <Route path='/applicant/calendar' component={Calendar} />
        <Route path='/sidebar' component={Applicant_Sidebar} />

      </Route>

      <Route path='/employer' component={EmployerApp} >
        <IndexRoute component={EmployerDashboard} />
        <Route path='/employer/profile' component={Profile} />
        <Route path='/employer/applications' component={Applications} />
        <Route path='/employer/newjob' component={NewJob} />
        <Route path='/employer/calendar' component={Calendar} />
      </Route>
    </Router>
  );
};
