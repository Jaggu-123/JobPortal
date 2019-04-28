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
    Zip addresses.zip%type,
    Photo user_account.photo%type,
    Resumee user_account.resumee%type);

    -- -- --isko array ke liye karna hai
    -- procedure insertLanguage
    -- (user_account_id user_account.id%type,
    -- language_name languages.language_name%type);

    -- procedure insertSkill
    -- (user_account_id user_account.id%type,
    -- skill_name skills.skill_name%type);

    procedure insertEducation
    (User_account_id user_account.id%type,
    DegreeName educational_detail.degreeName%type,
    InstituteName educational_detail.instituteName%type,
    Cgpa educational_detail.cgpa%type);

    procedure insertExperience
    (User_account_id user_account.id%type,
    CompanyName experience_detail.companyName%type,
    Position experience_detail.position%type,
    Description experience_detail.description%type);

    procedure insertCompany
    (UserName company_account.userName%type,
    Pass company_account.pass%type,
    CompanyName company_account.companyName%type,
    Email company_account.email%type,
    BussinessStream company_account.bussinessStream%type,
    Description company_account.description%type,
    WebsiteUrl company_account.websiteUrl%type,
    Logo company_account.logo%type);
end Project;
/

