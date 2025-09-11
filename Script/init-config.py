# Create database.js and jwt.js from environment or defaults
import os, secrets
db_host = os.getenv("DB_HOST","127.0.0.1")
db_user = os.getenv("DB_USER","root")
db_pass = os.getenv("DB_PASS","Noname@2022")
db_name = os.getenv("DB_NAME","cgame")
uri = f"mysql://{db_user}:{db_pass}@{db_host}/{db_name}"
os.makedirs("server-core/src/config", exist_ok=True)
with open("server-core/src/config/database.js","w") as f:
    f.write(f"""module.exports = {{
  uri: '{uri}'
}};""")
secret = secrets.token_hex(32)
with open("server-core/src/config/jwt.js","w") as f:
    f.write(f"""module.exports = {{
  secret: '{secret}'
}};""")
print("✅ Created database.js and jwt.js")
