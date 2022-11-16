import pymysql
from queries import * 


class connection_db:
    def __init__(self):
        try:
            connection = pymysql.connect(
                host="localhost",
                user="root",
                password="",
                db="poke_tracker",
                charset="utf8",
                cursorclass=pymysql.cursors.DictCursor
            )
        except TypeError as e:
            print("Error while connecting to MySQL", e)
        finally:
            if connection.is_connected():
                cursor = connection.cursor()
                cursor.close()
                connection.close()
                print("MySQL connection is closed")

    def select_all_from_table(self, sql_query, params= None):
        try:
            with self.connection.cursor() as cursor:
                if params:
                    cursor.execute(sql_query, params)  
                else:
                    cursor.execute(sql_query)
                result = cursor.fetchall()
                print(f'selected {result} successfully')
                return result
        except TypeError as e:
            print(e)
    
    def insert_to_table(self, sql_query, params= None):
        try:
            with self.connection.cursor() as cursor:
                if params:
                    cursor.execute(sql_query, params)  
                else:
                    cursor.execute(sql_query)
                    self.connection.commit()
            return {"Success" : "Added data successfuly"}
        except TypeError as e:
            print(e)

    def delete_from_table(self, sql_query, params):
        try:
            with self.connection.cursor() as cursor:
                cursor.execute(sql_query, params)
                self.connection.commit()
        except Exception:
            raise Exception({"Error":"transaction does not exist, sorry"})