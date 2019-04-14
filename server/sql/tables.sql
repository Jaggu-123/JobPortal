-- job Seeker Profile
CREATE OR REPLACE TYPE MyType AS VARRAY(200) OF VARCHAR2(50);

create sequence seqAddress
minvalue 1
start with 1
increment by 1
cache 10;

create table addresses(id number(10) primary key not null,
    streetAddress varchar(50),
    city varchar(20),
    state varchar(20),
    country varchar(20),
    zip varchar(15)
);

-- create sequence seqLanguage
-- minvalue 1
-- start with 1
-- increment by 1
-- cache 10;

-- create table languages(id int not null primary key,
--     language_name varchar(30)
-- );

-- create sequence seqSkill
-- minvalue 1
-- start with 1
-- increment by 1
-- cache 10;

-- create table skills(id int not null primary key,
--     skill_name varchar(30)
-- );

create sequence seqUser
minvalue 1
start with 1
increment by 1
cache 10;

create table user_account(id int primary key not null,
    userName varchar(15) not null, 
    firstName varchar(30) not null, 
    lastName varchar(30), 
    email varchar(50) not null,
    pass varchar(30) not null,
    gender varchar(10) not null,
    contactNo number(15) not null,
    addressID int references addresses(id)
);

-- create table user_skill(id int not null references skills(id),
--     user_account_id int not null references user_account(id),
--     primary key(id, user_account_id)
-- );

-- create table user_language(id int not null references languages(id),
--     user_account_id int not null references user_account(id),
--     primary key(id, user_account_id)
-- );

create sequence seqEducation
minvalue 1
start with 1
increment by 1
cache 10;

create table educational_detail(id int not null primary key,
    user_account_id int not null references user_account(id),
    degreeName varchar(30),
    instituteName varchar(30),
    cgpa varchar(10)
);

create sequence seqExperience
minvalue 1
start with 1
increment by 1
cache 10;

create table experience_detail(id int not null primary key,
    user_account_id int not null references user_account(id),
    companyName varchar(30),
    position varchar(30),
    description varchar(100)
);

--company profile
create sequence seqCompany
minvalue 1
start with 1
increment by 1
cache 10;

create table company_account(id int primary key not null,
    userName varchar(15) not null,
    pass varchar(30) not null,
    companyName varchar(30) not null,
    email varchar(50),
    bussinessStream varchar(40),
    description varchar(100),
    websiteUrl varchar(30)
);

--job post
-- create sequence seqJobType
-- minvalue 1
-- start with 1
-- increment by 1
-- cache 10;

-- create table job_post(id int primary key not null,
--     jobPostName varchar(30)
-- );

-- create sequence seqJobEvent
-- minvalue 1
-- start with 1
-- increment by 1
-- cache 10;

-- create table job_event(id int primary key not null,
--     company_id int not null references company_account(id),
--     job_post_id int not null references job_post(id),
--     isActive int not null,
--     jobDescription varchar(1000),
--     salary varchar(100),
--     skill varchar(30),
--     job_type varchar(30),
--     addressID int references addresses(id)
-- );

-- create table job_skill(id int not null references skills(id),
--     job_id int not null references job_event(id),
--     primary key(id, job_id) 
-- );

create table job_activity(id int not null references job_event(id),
    user_account_id int not null references user_account(id),
    primary key(id, user_account_id)
);

--administrator
create sequence seqAdmin
minvalue 1
start with 1
increment by 1
cache 10;

create table administrator(id int not null primary key,
    userName varchar(30),
    fullName varchar(40),
    email varchar(40),
    pass varchar(40)
);