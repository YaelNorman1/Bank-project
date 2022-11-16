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
                                SELECT transactions.category , SUM(transactions.amount) AS amount
                                FROM transactions
                                GROUP BY transactions.category
                                """

sql_select_category_name =  """
                            SELECT category_name
                            FROM categories
                            WHERE id = %s
                            """

sql_select_balance_amount= """
                            SELECT amount
                            FROM balance
                            """