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
    Zip addresses.zip%type)
    as
        num int := 0;
        -- fir int := 0;
        -- sec int := 0;
    begin
        Project.insertAddress(StreetAddress, City, State, Country, Zip);

        select max(id) into num from addresses;

        insert into user_account(id, userName, firstName, lastName, email, pass, gender, contactNo, addressID)
            values (seqUser.nextval, UserName, FirstName, LastName, Email, Pass, Gender, ContactNo, num);

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
    WebsiteUrl company_account.websiteUrl%type)
    as
        num number := 0;
    begin
        insert into company_account(id, userName, pass, companyName, email, bussinessStream, description, websiteUrl)
            values (seqCompany.nextval, UserName, Pass, CompanyName, Email, BussinessStream, Description, WebsiteUrl);
    end insertCompany;
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

