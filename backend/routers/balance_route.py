from fastapi import APIRouter, status, Response
from db.connection_db import connection_db
from db import queries

route = APIRouter()
db_connection= connection_db()

@route.get("/balance", status_code=status.HTTP_200_OK)
def get_balance():
    return db_connection.select_from_table(queries.sql_select_balance_amount)

@route.post("/balance", status_code=status.HTTP_200_OK)
def update_balance(new_amount):
    old_amount= get_balance()["amount"]
    new_amount += old_amount
    print("old amoumt: "+ str(old_amount) +" new amount: " +str(new_amount))
    return db_connection.insert_to_table(queries.sql_update_balance, (new_amount, old_amount))