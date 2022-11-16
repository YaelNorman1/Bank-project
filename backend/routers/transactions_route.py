from fastapi import APIRouter, status, Response
from db.connection import connection_db
from db import queries

route = APIRouter()
db_connection= connection_db()

@route.get("/transactions", status_code=status.HTTP_200_OK)
def get_transactions():
    return db_connection.select_all_from_table(queries.sql_select_all_transactions)
     
@route.post("/transactions", status_code=status.HTTP_201_CREATED)
def add_transaction(amount, category, vendor, response: Response):
    return db_connection.insert_to_table(queries.sql_insert_transaction, (amount,category, vendor))

@route.delete("/transactions", status_code=status.HTTP_200_OK)
def delete_transaction(id):
    return db_connection.delete_from_table(queries.sql_delete_transaction, id)      
