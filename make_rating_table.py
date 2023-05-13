import pymysql
import sys
import random


conn = pymysql.connect(host="127.0.0.1",user="user",password="4321",db="codingon",charset="utf8")
cur = conn.cursor()

def create_ratingtable(cc):
    cc.execute("show tables like 'rating'")
    if len(cc.fetchall()) == 0:
        print("rating 테이블이 존재하지 않습니다. 테이블을 생성합니다.")
        sql = "CREATE TABLE rating(idx INT NOT NULL PRIMARY KEY AUTO_INCREMENT, user_id INT NOT NULL, cocktail_id INT NOT NULL, rating INT NOT NULL);"
        cc.execute(sql)
    else:
        print("rating 테이블이 이미 존재합니다.")
        print("데이터를 추가합니다.")

def put_dummy_rating(user,cock,score,cc):
    sql = "select idx from rating where user_id=%s and cocktail_id=%s;"
    cc.execute(sql,(user,cock))
    sresult = cc.fetchall()
    if len(sresult) == 0:
        sql = "INSERT INTO rating (user_id,cocktail_id,rating) values(%s,%s,%s);"
        cc.execute(sql,(user,cock,score))
    else:
        print("중복 데이터 존재! ",sresult[0][0],"번째 칼럼의",user,"번 유저가 입렸했던",cock,"번 칵테일의 점수를 ",score,"로 변경합니다!")
        sql = "UPDATE rating SET rating = %s where idx = %s;"
        cc.execute(sql,(score,sresult[0][0]))
    


create_ratingtable(cur)
for i in range(1,27):
    pickcock = random.randrange(1,4)
    randset = set()
    while(len(randset)<pickcock):
        rc = random.randrange(1,620)
        randset.add(rc)
    for j in randset:
        rs = random.randrange(1,6)
        #print("user_id:",i,", cocktail_id:",j,", rating:",rs)
        put_dummy_rating(i,j,rs,cur)


conn.commit()
print("rating 데이터 입력이 완료되었습니다.")