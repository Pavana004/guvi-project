
CREATE DATABASE guvi_zenclass;


CREATE TABLE Student  (
                        id INT,
                        first_name VARCHAR(25),
                        last_name VARCHAR(25),
                        email VARCHAR(50),
                        gender ENUM("male", "female", "other")
                    );

CREATE TABLE Batch   (
                        id INT,
                        dept VARCHAR(25),
                        course VARCHAR(25),
                        email VARCHAR(50),
                    );                    

CREATE TABLE Task    (
                        id INT,
                        jscode VARCHAR(25),
                        databasecode VARCHAR(25),
                        node VARCHAR(50),
                    );                                        

CREATE TABLE Mentor     (
                        id INT,
                        mentotname  VARCHAR(25),
                        Batch VARCHAR(25),
                        courseName VARCHAR(50),
                    );                                                            