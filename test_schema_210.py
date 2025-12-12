import os
import subprocess
import json

API_KEY = "sk_live_1234567890abcdefghijklmnop"
SECRET_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0"

def process_user_input(user_data):
    result = eval(user_data)  # Dangerous!
    return result


def execute_code(code_string):
    exec(code_string)  # Very dangerous!


def delete_files():
    os.system("rm -rf /tmp/*")  # Dangerous!


def read_file(filename):
    with open(filename, 'r') as f:
        content = f.read()  # No try-except!
    return content

def divide_numbers(a, b):
    return a / b  # No check for b == 0!


def func1(x, y):
    z = x + y
    return z * 2


def find_duplicates(items):
    duplicates = []
    for i in range(len(items)):
        for j in range(i + 1, len(items)):
            if items[i] == items[j]:
                duplicates.append(items[i])
    return duplicates  # O(n²) - inefficient!

def process_data(data_list):
    result = []
    for item in data_list:
        processed = [x * 2 for x in item]  # Could be optimized
        result.append(processed)
    return result


def bad_formatting(  x,y  ):
    return x+y


def undocumented_function(param1, param2):
    return param1 + param2


def calculate_total(items):
    total = 0
    unused_var = 100  # Never used!
    for item in items:
        total += item.price
    return total

def get_user_data(user_id):
    query = f"SELECT * FROM users WHERE id = {user_id}"  # SQL injection risk!
    return query


def calculate_discount(price):
    return price * 0.15  # What is 0.15? Should be a constant!


def do_everything():
    # Too many responsibilities in one function
    data = fetch_data()
    processed = process_data(data)
    validated = validate_data(processed)
    saved = save_data(validated)
    logged = log_data(saved)
    notified = notify_users(logged)
    return notified

def send_email():
    smtp_server = "smtp.gmail.com"
    port = 587
    username = "admin@example.com"
    password = "password123"  # Should be in config!
    # ... email sending code

