from fastapi import APIRouter, status, Response
from db.connection import connection_db
from db import queries

route = APIRouter()
db_connection= connection_db()

@route.get("/balance", status_code=status.HTTP_200_OK)
def get_balance():
    return db_connection.select_all_from_table(queries.sql_select_balance_amount)