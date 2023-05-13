use kdt;
create table community (
                           idx int not null primary key auto_increment,
                           title varchar(50) not null,
                           writer varchar(50) not null,
                           content text not null,
                           updatedate DATETIME DEFAULT CURRENT_TIMESTAMP NULL
);

desc community;

select*from community;

//community 테이블에 테스트 글 데이터 삽입

insert into community(title,writer,content) values("테스트 글 제목","테스트 계정","잘 적히나???");
insert into community(title,writer,content) values("테스트 글2","테스트 계정","잘 적히나2222");
