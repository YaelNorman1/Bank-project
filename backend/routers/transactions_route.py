from fastapi import APIRouter, status, Response,Request
from db.connection import connection_db
from db import queries
from routers.balance_route import get_balance, update_balance

route = APIRouter()
db_connection= connection_db()

@route.get("/transactions", status_code=status.HTTP_200_OK)
def get_transactions():
    return db_connection.select_all_from_table(queries.sql_select_all_transactions)
     
@route.post("/transactions", status_code=status.HTTP_201_CREATED)
async def add_transaction(request:Request):
    res = await request.json()
    db_connection.insert_to_table(queries.sql_insert_transaction, (res["amount"],res["category"], res["vendor"]))
    update_balance(int(res["amount"]))


@route.delete("/transactions", status_code=status.HTTP_200_OK)
def delete_transaction(id):
    amount_to_delete= db_connection.select_from_table(queries.sql_select_amount_transaction, id)
    # print(amount_to_delete)
    update_balance(-int(amount_to_delete["amount"]))
    return db_connection.delete_from_table(queries.sql_delete_transaction, id)      
