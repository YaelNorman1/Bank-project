from fastapi import APIRouter, status
from db.connection_db import connection_db
from db import queries

route = APIRouter()
db_connection= connection_db()

@route.get("/breakdown", status_code=status.HTTP_200_OK)
def get_breakdown():
    return db_connection.select_all_from_table(queries.sql_breakdown_transaction)