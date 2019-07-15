create or replace package body Project_Del is
    procedure deleteAddress
    (IDD addresses.id%type)
    as
        
    begin
        delete from addresses where id=IDD;
    end deleteAddress;

    procedure deleteUser
    (IDD user_account.id%type)
    as
       addID user_account.addressID%type;
    begin
        

        select addressID into addID from user_account where id = IDD;
        
        delete from educational_detail where user_account_id=IDD;
        delete from experience_detail where user_account_id=IDD;
        delete from job_activity where user_account_id=IDD;
        delete from user_account where id=IDD;
        delete from addresses where id=addID;
       
    end deleteUser;

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

    procedure deleteEducation
    (IDD educational_detail.id%type)
    as
       
    begin
       delete from experience_detail where id=IDD;
    end deleteEducation;

    procedure deleteExperience
    (IDD experience_detail.id%type)
    as
        
    begin
        delete from experience_detail where id=IDD;

    end deleteExperience;

    procedure deleteCompany
    (IDD company_account.id%type)
    as
       
    begin
        delete from company_account where id=IDD;
    end deleteCompany;
end Project_Del;
/
