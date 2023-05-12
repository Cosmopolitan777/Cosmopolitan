import pymysql
import sys
import random


conn = pymysql.connect(host="127.0.0.1",user="user",password="1234",db="kdt",charset="utf8")
cur = conn.cursor()

def create_zzimtable(cc):
    cc.execute("show tables like 'zzim'")
    if len(cc.fetchall()) == 0:
        print("zzim 테이블이 존재하지 않습니다. 테이블을 생성합니다.")
        sql = "CREATE TABLE zzim(idx INT NOT NULL PRIMARY KEY AUTO_INCREMENT, user_id INT NOT NULL, cocktail_id INT NOT NULL, mark TINYINT NOT NULL);"
        cc.execute(sql)
    else:
        print("zzim 테이블이 이미 존재합니다.")
        print("데이터를 추가합니다.")

def put_dummy_zzim(user,cock,cc):
    sql = "select idx from zzim where user_id=%s and cocktail_id=%s;"
    cc.execute(sql,(user,cock))
    sresult = cc.fetchall()
    if len(sresult) == 0:
        sql = "INSERT INTO zzim (user_id,cocktail_id, mark) values(%s,%s,1);"
        cc.execute(sql,(user,cock))
    else:
        print("중복 데이터 존재! ",user,"번 유저가 찜 했던",cock,"번 칵테일을 해제합니다!")
        sql = "DELETE FROM zzim WHERE idx = %s;"
        cc.execute(sql,(sresult[0][0]))


create_zzimtable(cur)

randset = set()
while(len(randset)<7):
    rc = random.randrange(1,620)
    randset.add(rc)

for i in randset:
    print(i)
    put_dummy_zzim(1,i,cur)

conn.commit()
print("zzim 데이터 입력이 완료되었습니다.")