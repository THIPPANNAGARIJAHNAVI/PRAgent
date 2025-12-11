def process_user_input():
    user_input = input("Enter expression: ")
    result = eval(user_input)  # BANNED: Can execute arbitrary code
    return result


def execute_dynamic_code():
    code_string = "print('Hello')"
    exec(code_string)  # BANNED: Can execute arbitrary code
    return True


import os
def run_system_command():
    command = "ls -la"
    os.system(command)  # BANNED: Vulnerable to command injection
    return True


import subprocess
def run_subprocess():
    subprocess.run("rm -rf /tmp/*", shell=True)  # BANNED: shell=True is dangerous
    return True

import pickle
def load_pickled_data():
    with open("data.pkl", "rb") as f:
        data = pickle.load(f)  # BANNED: Can execute arbitrary code
    return data


def read_user_file():
    filename = "/tmp/user_input.txt"
    with open(filename, "r") as f:  # BANNED: Hardcoded path, potential path traversal
        content = f.read()
    return content


import requests
def fetch_data():
    response = requests.get("http://example.com/api")  # BANNED: No error handling
    return response.json()

import eval  # BANNED: Importing dangerous built-in
import exec  # BANNED: Importing dangerous built-in


def risky_function():
    user_code = input("Enter code: ")
    result = eval(user_code)  # BANNED: eval
    exec("print(result)")  # BANNED: exec
    os.system("echo done")  # BANNED: os.system
    return result


def run_process():
    process = subprocess.Popen("cat file.txt", shell=True)  # BANNED: shell=True
    process.wait()
    return True


def safe_function():
    result = 1 + 1
    print("Safe operation")
    return result

