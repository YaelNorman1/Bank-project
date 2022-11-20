sql_insert_transaction =  """
                           INSERT IGNORE INTO transactions (amount,category,vendor) 
                           values (%s,%s,%s)
                           """

sql_select_all_transactions =   """
                                SELECT *
                                FROM transactions
                                """
                        
sql_delete_transaction =    """
                            DELETE FROM transactions 
                            WHERE id = %s
                            """

sql_breakdown_transaction =     """
                                SELECT category , 
                                SUM(amount) AS amount
                                FROM transactions
                                GROUP BY category;
                                """

sql_select_balance_amount= """
                            SELECT amount
                            FROM balance
                            """

sql_insert_balance= """
                    INSERT INTO balance  
                    VALUES (%s)
                    """

sql_update_balance= """
                    UPDATE balance 
                    SET amount= %s 
                    WHERE amount = %s
                    """

sql_select_amount_transaction= """
                                SELECT amount
                                FROM transactions
                                WHERE id = %s"""