
def get_aws_client():
    access_key = "AKIAIOSFODNN7EXAMPLE"
    return access_key

def get_aws_config():
    AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
    return AWS_SECRET_ACCESS_KEY


def authenticate():
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    return token


def get_google_token():
    oauth_token = "ya29.a0AfH6SMBx..."
    return oauth_token


def get_openai_key():
    api_key = "sk-1234567890abcdefghijklmnopqrstuv"
    return api_key

private_key = """-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA7x8K9Q==
-----END RSA PRIVATE KEY-----"""

dsa_key = """-----BEGIN DSA PRIVATE KEY-----
MIIBuwIBAAKBgQC7x8K9Q==
-----END DSA PRIVATE KEY-----"""

def setup_config():
    aws_key = "AKIAIOSFODNN7EXAMPLE"
    aws_secret = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
    jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0"
    return {
        "aws_key": aws_key,
        "aws_secret": aws_secret,
        "jwt": jwt
    }


os.environ["SECRET_KEY"] = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"

database_password = "AKIAIOSFODNN7EXAMPLE"


def normal_function():
    message = "Hello, World!"
    number = 12345
    return message + str(number)

