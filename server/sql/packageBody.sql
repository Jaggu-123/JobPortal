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
    begin
        Project.insertAddress(StreetAddress, City, State, Country, Zip);

        select max(id) into num from addresses;

        insert into user_account(id, userName, firstName, lastName, email, pass, gender, contactNo, addressID)
            values (seqUser.nextval, UserName, FirstName, LastName, Email, Pass, Gender, ContactNo, num);
    end insertUser;
end Project;
/

-- create or replace procedure AddressHere(
--     t_in MyType)
-- as

-- begin
--        FOR i IN 1..t_in.count LOOP
--         dbms_output.put_line(t_in(i));
--       END LOOP;
-- end;
-- /

