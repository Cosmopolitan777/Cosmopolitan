import pymysql
conn = pymysql.connect(host="127.0.0.1",user="user",password="4321",db="codingon",charset="utf8")
cur = conn.cursor()

def create_cocktailtable(cc):
    sql = "CREATE TABLE cocktail\
    (\
            cocktail_id     INT         NOT NULL    AUTO_INCREMENT  COMMENT '칵테일 ID',\
            name            VARCHAR(50) NOT NULL    COMMENT '칵테일 이름',\
            api_id         INT         NULL        COMMENT 'API용 id값',\
            alcholic       VARCHAR(30) NULL        COMMENT '알콜 여부',\
            category       VARCHAR(50) NULL        COMMENT '칵테일 카테고리',\
            glass          VARCHAR(30) NULL        COMMENT '칵테일용 잔',\
            ingredient1    VARCHAR(50) NULL        COMMENT '칵테일 재료1',\
            ingredient2    VARCHAR(50) NULL        COMMENT '칵테일 재료2',\
            ingredient3    VARCHAR(50) NULL        COMMENT '칵테일 재료3',\
            ingredient4    VARCHAR(50) NULL        COMMENT '칵테일 재료4',\
            ingredient5    VARCHAR(50) NULL        COMMENT '칵테일 재료5',\
            ingredient6    VARCHAR(50) NULL        COMMENT '칵테일 재료6',\
            ingredient7    VARCHAR(50) NULL        COMMENT '칵테일 재료7',\
            ingredient8    VARCHAR(50) NULL        COMMENT '칵테일 재료8',\
            ingredient9    VARCHAR(50) NULL        COMMENT '칵테일 재료9',\
            ingredient10   VARCHAR(50) NULL        COMMENT '칵테일 재료10',\
            ingredient11   VARCHAR(50) NULL        COMMENT '칵테일 재료11',\
            ingredient12   VARCHAR(50) NULL        COMMENT '칵테일 재료12',\
            ingredient13   VARCHAR(50) NULL        COMMENT '칵테일 재료13',\
            ingredient14   VARCHAR(50) NULL        COMMENT '칵테일 재료14',\
            ingredient15   VARCHAR(50) NULL        COMMENT '칵테일 재료15',\
            measure1       VARCHAR(50) NULL        COMMENT '재료1 용량',\
            measure2       VARCHAR(50) NULL        COMMENT '재료2 용량',\
            measure3       VARCHAR(50) NULL        COMMENT '재료3 용량',\
            measure4       VARCHAR(50) NULL        COMMENT '재료4 용량',\
            measure5       VARCHAR(50) NULL        COMMENT '재료5 용량',\
            measure6       VARCHAR(50) NULL        COMMENT '재료6 용량',\
            measure7       VARCHAR(50) NULL        COMMENT '재료7 용량',\
            measure8       VARCHAR(50) NULL        COMMENT '재료8 용량',\
            measure9       VARCHAR(50) NULL        COMMENT '재료9 용량',\
            measure10      VARCHAR(50) NULL        COMMENT '재료10 용량',\
            measure11      VARCHAR(50) NULL        COMMENT '재료11 용량',\
            measure12      VARCHAR(50) NULL        COMMENT '재료12 용량',\
            measure13      VARCHAR(50) NULL        COMMENT '재료13 용량',\
            measure14      VARCHAR(50) NULL        COMMENT '재료14 용량',\
            measure15      VARCHAR(50) NULL        COMMENT '재료15 용량',\
            tags           text        NULL        COMMENT '칵테일 태그',\
            imagelink      TEXT        NULL        COMMENT '칵테일 이미지 링크',\
            instruction    TEXT        NULL        COMMENT '칵테일 제조방법',\
            updatedate     DATETIME DEFAULT CURRENT_TIMESTAMP    NULL        COMMENT '수정 일자',\
            PRIMARY KEY (cocktail_id)\
    );"
    cc.execute(sql)


def sqlinsert(ill,cc):
    sql = "INSERT INTO cocktail\
        (name, api_id,alcholic,category,glass,\
        ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,\
        ingredient6,ingredient7,ingredient8,ingredient9,ingredient10,\
        ingredient11,ingredient12,ingredient13,ingredient14,ingredient15,\
        measure1,measure2,measure3,measure4,measure5,\
        measure6,measure7,measure8,measure9,measure10,\
        measure11,measure12,measure13,measure14,measure15,\
        tags,imagelink,instruction)\
        values\
        (\
        %s,%s,%s,%s,%s,\
        %s,%s,%s,%s,%s,\
        %s,%s,%s,%s,%s,\
        %s,%s,%s,%s,%s,\
        %s,%s,%s,%s,%s,\
        %s,%s,%s,%s,%s,\
        %s,%s,%s,%s,%s,\
        %s,%s,%s\
        );"
    cc.execute(sql,(ill[0],ill[1],ill[2],ill[3],ill[4],ill[5],ill[6],ill[7],ill[8],ill[9],ill[10],ill[11],ill[12],ill[13],ill[14],ill[15],ill[16],ill[17],ill[18],ill[19],ill[20],ill[21],ill[22],ill[23],ill[24],ill[25],ill[26],ill[27],ill[28],ill[29],ill[30],ill[31],ill[32],ill[33],ill[34],ill[35],ill[36],ill[37]))



cur.execute("show tables like 'cocktail'")
if len(cur.fetchall()) != 0:

    print("이미 cocktail 이란 테이블이 존재합니다.")
    print("기존의 cocktail 테이블을 삭제합니다.")
    sql = "drop table cocktail;"
    cur.execute(sql)
    conn.commit()
    print("삭제하였습니다. 새로운 테이블을 생성합니다.")

create_cocktailtable(cur)
conn.commit()
print("cocktail 테이블 생성 완료! \n칵테일 데이터를 추가합니다.")
f = open("cocktaillisttable.txt","r",encoding="utf-8")
rl = f.readlines()

for i in rl:
    il = i.split("|")
    sqlinsert(il,cur)
    conn.commit()

print("칵테일 데이터 추가가 완료되었습니다! \nMysql에서 cocktail 테이블을 확인해주세요")
