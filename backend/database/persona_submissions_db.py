```python
import sqlite3
from sqlite3 import Error

def create_connection():
    conn = None;
    try:
        conn = sqlite3.connect(':memory:')       
        print(f'successful SQLite connection with id {id(conn)}')
    except Error as e:
        print(e)
    
    if conn:
        return conn

def close_connection(conn):
    conn.close()
    print(f'connection {id(conn)} closed')

def create_table(conn):
    try:
        sql = """ CREATE TABLE IF NOT EXISTS persona_submissions (
                                        id integer PRIMARY KEY,
                                        user_id integer NOT NULL,
                                        persona_id integer NOT NULL,
                                        submission text NOT NULL,
                                        status text NOT NULL
                                    ); """
        c = conn.cursor()
        c.execute(sql)
    except Error as e:
        print(e)

def create_submission(conn, submission):
    sql = ''' INSERT INTO persona_submissions(user_id,persona_id,submission,status)
              VALUES(?,?,?,?) '''
    cur = conn.cursor()
    cur.execute(sql, submission)
    return cur.lastrowid

def update_submission_status(conn, submission):
    sql = ''' UPDATE persona_submissions
              SET status = ? 
              WHERE id = ?'''
    cur = conn.cursor()
    cur.execute(sql, submission)
    conn.commit()

def delete_submission(conn, id):
    sql = 'DELETE FROM persona_submissions WHERE id=?'
    cur = conn.cursor()
    cur.execute(sql, (id,))
    conn.commit()

def select_all_submissions(conn):
    cur = conn.cursor()
    cur.execute("SELECT * FROM persona_submissions")
 
    rows = cur.fetchall()
 
    for row in rows:
        print(row)

def select_submission_by_status(conn, status):
    cur = conn.cursor()
    cur.execute("SELECT * FROM persona_submissions WHERE status=?", (status,))
 
    rows = cur.fetchall()
 
    for row in rows:
        print(row)
```