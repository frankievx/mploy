
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('applications').del(), 

    // Inserts seed entries
    knex('applications').insert({years_experience: 1.5, education: 'MA in CS', personal_statement: 'I am a great guy who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, skill_5_met: true, skill_6_met: true, skill_7_met: true, can_work_here: false, user_id: 5, job_id: 4}),
    knex('applications').insert({years_experience: 1.5, education: 'MA in CS', personal_statement: 'I am a great guy who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, skill_5_met: true, skill_6_met: true, skill_7_met: true, can_work_here: false, user_id: 5, job_id: 3}),
    knex('applications').insert({years_experience: 1.5, education: 'MBA', personal_statement: 'I am a great guy who likes banking', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, can_work_here: true, user_id: 4, job_id: 1}),
    knex('applications').insert({years_experience: 1.5, education: 'GED', personal_statement: 'I am a great guy who likes facility maintenance', status: 'unconsidered', skill_1_met: true, skill_2_met: true, can_work_here: true, user_id: 2, job_id: 2}),
    knex('applications').insert({years_experience: 1.5, education: 'MA in CS', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, can_work_here: false, user_id: 6, job_id: 3}),
    knex('applications').insert({years_experience: 1.5, education: 'MA in CS', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, can_work_here: false, user_id: 7, job_id: 3}),
    knex('applications').insert({years_experience: 1.5, education: 'MA in CS', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, can_work_here: false, user_id: 8, job_id: 3}),
    knex('applications').insert({years_experience: 1.5, education: 'MA in CS', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, can_work_here: false, user_id: 9, job_id: 3}),
    knex('applications').insert({years_experience: 1.5, education: 'MA in CS', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, can_work_here: false, user_id: 10, job_id: 3}),
    knex('applications').insert({years_experience: 1.5, education: 'MA in CS', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, skill_5_met: true, skill_6_met: true, skill_7_met: true, can_work_here: false, user_id: 6, job_id: 4}),
    knex('applications').insert({years_experience: 1.5, education: 'MA in CS', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, skill_5_met: true, skill_6_met: true, skill_7_met: true, can_work_here: false, user_id: 7, job_id: 4}),
    knex('applications').insert({years_experience: 1.5, education: 'MA in CS', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, skill_5_met: true, skill_6_met: true, skill_7_met: true, can_work_here: false, user_id: 8, job_id: 4}),
    knex('applications').insert({years_experience: 1.5, education: 'MA in CS', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, skill_5_met: true, skill_6_met: true, skill_7_met: true, can_work_here: false, user_id: 9, job_id: 4}),
    knex('applications').insert({years_experience: 1.5, education: 'MA in CS', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, skill_5_met: true, skill_6_met: true, skill_7_met: true, can_work_here: false, user_id: 10, job_id: 4}), 
    knex('applications').insert({years_experience: 1.5, education: 'MA in CS', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, can_work_here: false, user_id: 6, job_id: 1}),
    knex('applications').insert({years_experience: 1.5, education: 'Master in HH', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, can_work_here: false, user_id: 7, job_id: 1}),
    knex('applications').insert({years_experience: 1.5, education: 'Master in GG', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, can_work_here: false, user_id: 8, job_id: 1}),
    knex('applications').insert({years_experience: 1.5, education: 'Master in FF', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, can_work_here: false, user_id: 9, job_id: 1}),
    knex('applications').insert({years_experience: 1.5, education: 'Master in EE', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, skill_3_met: false, skill_4_met: false, can_work_here: false, user_id: 10, job_id: 1}),
    knex('applications').insert({years_experience: 1.5, education: 'Master in DD', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, can_work_here: false, user_id: 6, job_id: 2}),
    knex('applications').insert({years_experience: 1.5, education: 'Master in CC', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, can_work_here: false, user_id: 7, job_id: 2}),
    knex('applications').insert({years_experience: 1.5, education: 'Master in AA', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, can_work_here: false, user_id: 8, job_id: 2}),
    knex('applications').insert({years_experience: 1.5, education: 'Master in BB', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, can_work_here: false, user_id: 9, job_id: 2}),
    knex('applications').insert({years_experience: 1.5, education: 'Master in ZZ', personal_statement: 'I am a great person who likes computers', status: 'unconsidered', skill_1_met: true, skill_2_met: true, can_work_here: false, user_id: 10, job_id: 2})
  );
};
