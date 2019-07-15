create or replace package Project_Del is
    procedure deleteAddress
    (IDD addresses.id%type);

    procedure deleteUser
    (IDD user_account.id%type);

    
    procedure deleteEducation
    (IDD educational_detail.id%type);

    procedure deleteExperience
    (IDD experience_detail.id%type);

    procedure deleteCompany
    (IDD company_account.id%type);
end Project_Del;
/