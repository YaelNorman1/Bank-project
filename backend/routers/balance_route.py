from fastapi import APIRouter, status, HTTPException
import pymysql as mysql
from db.connection_db import connection_db
from db import queries

route = APIRouter()
db_connection= connection_db()

@route.get("/balance", status_code=status.HTTP_200_OK)
def get_balance():
    try:
        return db_connection.select_from_table(queries.sql_select_balance_amount)
    except mysql.MySQLError as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=e)

@route.post("/balance", status_code=status.HTTP_200_OK)
def update_balance(new_amount):
    try:
        old_amount= get_balance()["amount"]
        new_amount += old_amount
        return db_connection.insert_to_table(queries.sql_update_balance, (new_amount, old_amount))
    except mysql.MySQLError as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=e)