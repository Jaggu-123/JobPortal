create or replace package Project is
    procedure insertAddress
    (StreetAddress addresses.streetAddress%type,
    City addresses.city%type,
    State addresses.state%type,
    Country addresses.country%type,
    Zip addresses.zip%type);

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
    Zip addresses.zip%type);

    -- -- --isko array ke liye karna hai
    -- procedure insertLanguage
    -- (user_account_id user_account.id%type,
    -- language_name languages.language_name%type);

    -- procedure insertSkill
    -- (user_account_id user_account.id%type,
    -- skill_name skills.skill_name%type);

    -- procedure insertEducation
    -- (user_account_id user_account.id%type,
    -- degreeName educational_detail.degreeName%type,
    -- instituteName educational_detail.instituteName%type,
    -- cgpa educational_detail.cgpa%type);

    -- procedure insertExperience
    -- (user_account_id user_account.id%type,
    -- companyName experience_detail.companyName%type,
    -- position experience_detail.position%type,
    -- description experience_detail.description%type);

    -- procedure insertCompany
    -- (userName company_account.userName%type,
    -- pass company_account.pass%type,
    -- companyName company_account.companyName%type,
    -- email company_account.email%type,
    -- bussinessStream company_account.bussinessStream%type,
    -- description company_account.description%type,
    -- websiteUrl company_account.websiteUrl%type);
end Project;
/

