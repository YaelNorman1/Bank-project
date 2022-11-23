from fastapi import APIRouter, status, HTTPException, Request
import pymysql as mysql
from db.connection_db import connection_db
from db import queries
from routers.balance_route import get_balance, update_balance

route = APIRouter()
db_connection= connection_db()

@route.get("/transactions", status_code=status.HTTP_200_OK)
def get_transactions():
    try:
        return db_connection.select_all_from_table(queries.sql_select_all_transactions)
    except mysql.MySQLError as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=e)
     
@route.post("/transactions", status_code=status.HTTP_201_CREATED)
async def add_transaction(request:Request):
    try:
        res = await request.json()
        db_connection.insert_to_table(queries.sql_insert_transaction, (res["amount"],res["category"], res["vendor"]))
        update_balance(int(res["amount"]))
    except mysql.MySQLError as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=e)


@route.delete("/transactions", status_code=status.HTTP_200_OK)
def delete_transaction(id):
    check_if_id_number(id)
    try:
        amount_to_delete= db_connection.select_from_table(queries.sql_select_amount_transaction, id)
        update_balance(-int(amount_to_delete["amount"]))
        return db_connection.delete_from_table(queries.sql_delete_transaction, id)   
    except mysql.MySQLError as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=e)
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=e)
    except TypeError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=e)   


def check_if_id_number(id):
    if not type(id)== int:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="need to insert id as number")