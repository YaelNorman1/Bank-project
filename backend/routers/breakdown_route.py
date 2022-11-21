from fastapi import APIRouter, status, HTTPException
import pymysql as mysql
from db.connection_db import connection_db
from db import queries

route = APIRouter()
db_connection= connection_db()

@route.get("/breakdown", status_code=status.HTTP_200_OK)
def get_breakdown():
    try:
        return db_connection.select_all_from_table(queries.sql_breakdown_transaction)
    except mysql.MySQLError as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=e)