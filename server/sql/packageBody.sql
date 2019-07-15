create or replace package body Project is
    procedure insertAddress
    (StreetAddress addresses.streetAddress%type,
    City addresses.city%type,
    State addresses.state%type,
    Country addresses.country%type,
    Zip addresses.zip%type)
    as
        num number := 0;
    begin
        insert into addresses(id, streetAddress, city, state, country, zip)
            values (seqAddress.nextval, StreetAddress, City, State, Country, Zip);
    end insertAddress;

    procedure insertUser
    (UserName user_account.userName%type,
    FirstName user_account.firstName%type,
    LastName user_account.lastName%type,
    Email user_account.email%type,
    Pass user_account.pass%type,
    Gender user_account.gender%type,
    ContactNo user_account.contactNo%type,
    StreetAddress addresses.streetAddress%type,
    City addresses.city%type,
    State addresses.state%type,
    Country addresses.country%type,
    Zip addresses.zip%type,
    Photo user_account.photo%type,
    Resumee user_account.resumee%type)
    as
        num int := 0;
        -- fir int := 0;
        -- sec int := 0;
    begin
        Project.insertAddress(StreetAddress, City, State, Country, Zip);

        select max(id) into num from addresses;

        insert into user_account(id, userName, firstName, lastName, email, pass,photo,resumee, gender, contactNo, addressID)
            values (seqUser.nextval, UserName, FirstName, LastName, Email, Pass,Photo,Resumee, Gender, ContactNo, num);

        -- select max(id) into sec from user_account;

        -- for i in 1..t_in.count LOOP
        --     insert into languages(id, language_name) values (seqLanguage.nextval, t_in(i));

        --     select max(id) into fir from languages;

        --     insert into user_language(id, user_account_id) values (fir, sec);
        -- end loop;
    end insertUser;

    procedure insertEducation
    (User_account_id user_account.id%type,
    DegreeName educational_detail.degreeName%type,
    InstituteName educational_detail.instituteName%type,
    Cgpa educational_detail.cgpa%type)
    as
        num number := 0;
    begin
        insert into educational_detail(id, user_account_id, degreeName, instituteName, cgpa)
            values (seqEducation.nextval, User_account_id, DegreeName, InstituteName, Cgpa);
    end insertEducation;

    procedure insertExperience
    (User_account_id user_account.id%type,
    CompanyName experience_detail.companyName%type,
    Position experience_detail.position%type,
    Description experience_detail.description%type)
    as
        num number := 0;
    begin
        insert into experience_detail(id, user_account_id, companyName, position, description)
            values (seqExperience.nextval, User_account_id, CompanyName, Position, Description);
    end insertExperience;

    procedure insertCompany
    (UserName company_account.userName%type,
    Pass company_account.pass%type,
    CompanyName company_account.companyName%type,
    Email company_account.email%type,
    BussinessStream company_account.bussinessStream%type,
    Description company_account.description%type,
    WebsiteUrl company_account.websiteUrl%type,
    Logo company_account.logo%type)
    as
        num number := 0;
    begin
        insert into company_account(id, userName, pass, companyName, email, bussinessStream, description, websiteUrl,Logo)
            values (seqCompany.nextval, UserName, Pass, CompanyName, Email, BussinessStream, Description, WebsiteUrl,logo);
    end insertCompany;

    procedure insertJobPost 
    (Job_post_name job_post.jobPostName%type) 
    as
        num number := 0;
	begin
			insert into job_post(id, jobPostName) values (seqJobType.nextval, Job_post_name);
	end insertJobPost;

    procedure insertJobEvent
    (Company_id job_event.company_id%type,
	Job_post_name job_post.jobPostName%type,
	IsActive job_event.isActive%type,
	JobDescription job_event.jobDescription%type,
	Salary job_event.salary%type,
	Skill job_event.skill%type,
	Job_type job_event.job_type%type,
	StreetAddress addresses.streetAddress%type,
	City addresses.city%type,
	State addresses.state%type,
	Country addresses.country%type,
	Zip addresses.zip%type)
    as
	
	Job_post_id  job_event.job_post_id%type := 0;
	Address_id job_event.addressID %type := 0;
	
	begin
	
		Project.insertAddress(StreetAddress, City, State, Country, Zip);
		select max(id) into Address_id from addresses;

		Project.insertJobPost(Job_post_name);
		select max(id) into Job_post_id from job_post;

		insert into job_event values(seqJobEvent.nextval, Company_id , Job_post_id , IsActive , JobDescription, Salary , Skill , Job_type , Address_id);
	
	end insertJobEvent;

    procedure deletejon
    (IDD job_event.id%type)
    as
       addID int;
       jobID job_post.id%type;
    begin
        
        dbms_output.put_line('error');
        select addressID into addID from job_event where id = IDD;
        
        select job_post_id into jobID from job_event where id = IDD;
        delete from job_activity where id=IDD;
        
        
        delete from job_event where id=IDD;
        delete from job_post where id=jobID;
        delete from addresses where id=addID;
       
    end deletejon;
end Project;
/

-- create or replace procedure AddressHere(
--     t_in MyType)
-- as

-- begin
--       FOR i IN 1..t_in.count LOOP
--         dbms_output.put_line(t_in(i));
--       END LOOP;
-- end;
-- /

-- create or replace procedure AddressHere(
--     vari in varchar,
--     outi out varchar,
--     jag out varchar)
-- as

-- begin
--       outi := vari;
--       jag := 'jagnani';
-- end;
-- /