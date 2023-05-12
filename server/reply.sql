use codingon;

CREATE TABLE reply(
        idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
        text_id INT NOT NULL, 
        writer varchar(50) NULL, 
        secret INT NULL, 
        content TEXT NULL, 
        updatedate DATETIME DEFAULT CURRENT_TIMESTAMP NULL);

insert into reply(text_id,writer,secret,content) values(1,'테스트계정',0,'이건 테스트입니다');
insert into reply(text_id,writer,secret,content) values(1,'비밀계정',1,'비밀글 테스트입니다');