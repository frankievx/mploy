var db = require('../db/db.js');

var Applications = module.exports;

Applications.submit = function(appObj) {
  return db('applications')
  .returning('*')
  .insert({
    cover_letter: appObj.cover_letter,
    resume: appObj.resume,
    years_experience: appObj.years_experience,
    education: appObj.education,
    personal_statement: appObj.personal_statement,
    status: 'unconsidered',
    skills_met: appObj.skills_met,
    job_id: appObj.job_id,
    user_id: appObj.user_id,
    can_work_here: appObj.can_work_here
  })
  .then(function(record) {
    return record[0].appID
  })
  .then(function(appID) {
    return db('applications')
    .join('job_posts', 'applications.job_id', '=', 'job_posts.jobID')
    .select(['job_posts.user_id as job_user_id', 'job_posts.*', 'job_posts.created_at as job_created_at','applications.user_id as app_user_id', 'applications.created_at as app_created_at', 'applications.appID', 'applications.cover_letter','applications.resume','applications.years_experience', 'applications.education', 'applications.personal_statement', 'applications.status', 'applications.skills_met', 'applications.can_work_here', 'users.*'])
    .join('users', 'job_posts.user_id', '=', 'users.userID')
    .where({appID: appID})
  })
  .then(function(result) {
    return result[0]
  })
  .catch(function(err) {
    throw err
  })
};

Applications.deleteApp = function(appID) {
  
  return db('applications')
  .returning('*')
  .delete()
  .where('appID', appID)
  .then(function(records) {
    return records[0]
  })
  .catch(function(err) {
      throw err
  })
};


//Updates application's previous status to next status
Applications.advanceStatus = function(appID) {
  return db('applications')
  .returning('*')
  .where({
    appID: appID
  })
  .then(function(record) {

    switch(record[0].status){
      case 'unconsidered': 

      return db('applications')
      .returning('*')
      .where({
        appID: appID
      })
      .update({
        status: 'considered'
      })
      case 'considered':

      return db('applications')
      .returning('*')
      .where({
        appID: appID
      })
      .update({
        status: 'interviews'
      })
      case 'interviews':

      return db('applications')
      .returning('*')
      .where({
        appID: appID
      })
      .update({
        status: 'offers'
      })
      case 'offers':

      return db('applications')
      .returning('appID')
      .del()
      .where({
        appID: appID
      })
      default:
      return 'Unexpected record status: ', record.status
    }
  })
  .then(function(result) {
    return result[0]
  })
  .catch(function(err) {
    throw err
  })
};

Applications.revertStatus = function(appID) {
  
  return db('applications')
  .returning('*')
  .where({
    appID: appID
  })
  .then(function(record) {
    switch(record[0].status){
      
      case 'unconsidered': 
      return 'Error! Unconsidered records cannot be reverted.'
      
      case 'considered':
      return db('applications')
      .returning('*')
      .where({
        appID: appID
      })
      .update({
        status: 'unconsidered'
      })

      case 'interviews':
      return db('applications')
      .returning('*')
      .where({
        appID: appID
      })
      .update({
        status: 'considered'
      })

      case 'offers':
      return db('applications')
      .returning('*')
      .where({
        appID: appID
      })
      .update({
        status: 'interviews'
      })

      default:
      return 'Unexpected record status: ', record.status
    }   
  })
  .then(function(result) {
    return result[0]
  })
  .catch(function(err) {
      throw err
  })
};

//update status
Applications.updateStatus = function(appID, status) {
  
  return db('applications')
  .returning()
  .where({
    appID: appID
  })
  .update({
    status: status
  })
  .then(function(record) {
    return record[0]
  })
  .catch(function(err) {
      throw err
  })
};

Applications.getByStatus = function(jobID, status) {
  return db('applications')
  .select(['job_posts.skills', 'job_posts.job_title', 'job_posts.company_name', 'applications.*', 'users.*'])
  .join('users', 'applications.user_id', '=', 'users.userID')
  .join('job_posts', 'applications.job_id', '=', 'job_posts.jobID')
  .orderBy('created_at', 'desc')
  .where({
    job_id: jobID, 
    status: status
  })
  .then(function(records) {
    return records
  })
  .catch(function(err) {
      throw err
  })
};

Applications.appsAndApplicants = function(jobID) {
  return db('applications')
  .join('users', 'user_id', '=', 'users.userID' )
  .where({
    job_id: jobID
  })
  .then(function(data) {
    return data
  })
};

Applications.getUnconsidered = function(jobID) {
  
  return db('applications')
  .orderBy('created_at', 'desc')
  .where({
    job_id: jobID, 
    status: 'unconsidered'
  })
  .then(function(records) {
    return records
  })
  .catch(function(err) {
      throw err
  })
};

Applications.getAppsByUser = function(userID) {
  
  return db('applications')
  .join('job_posts', 'applications.job_id', '=', 'job_posts.jobID')
  .select(['job_posts.user_id as job_user_id', 'job_posts.*', 'job_posts.created_at as job_created_at','applications.user_id as app_user_id', 'applications.created_at as app_created_at', 'applications.cover_letter','applications.resume','applications.years_experience', 'applications.education', 'applications.personal_statement', 'applications.status', 'applications.skills_met', 'applications.can_work_here', 'users.*'])
  .join('users', 'applications.user_id', '=', 'users.userID')
  .then(function(records) {
    return records.filter(function(item) {return item.app_user_id === userID})
  })
  .catch(function(err) {
      throw err
  })
};

Applications.getAppsByUserAndStatus = function(userID, status) {
  
  return db('applications')
  .join('job_posts', 'applications.job_id', '=', 'job_posts.jobID')
  .select(['job_posts.user_id as job_user_id', 'job_posts.*', 'job_posts.created_at as job_created_at','applications.user_id as app_user_id', 'applications.created_at as app_created_at', 'applications.appID', 'applications.cover_letter','applications.resume','applications.years_experience', 'applications.education', 'applications.personal_statement', 'applications.status', 'applications.skills_met', 'applications.can_work_here', 'users.*'])
  .join('users', 'job_posts.user_id', '=', 'users.userID')
  .then(function(records) {
    return records.filter(function(item) {return item.app_user_id === userID && item.status === status})
  })
  .catch(function(err) {
      throw err
  })
};

Applications.getAppsByJob = function(jobID) {
  
  return db('applications').where('job_id', jobID)
  .then(function(records) {
    if (records.length === 0){
      throw ("no records found");
    }
    return records
  })
  .catch(function(err) {
      throw err
  })
};