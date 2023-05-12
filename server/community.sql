use codingon;
create table community (
                           idx int not null primary key auto_increment,
                           title varchar(50) not null,
                           writer varchar(50) not null,
                           content text not null,
                           updatedate DATETIME DEFAULT CURRENT_TIMESTAMP NULL
);

desc community;

select*from community;
