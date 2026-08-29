# Modified: skip creation, use existing D1 database
import requests
import os

api_endpoint = f"https://api.cloudflare.com/client/v4/accounts/{os.environ['CLOUDFLARE_ACCOUNT_ID']}"
headers = {
    "Authorization": f"Bearer {os.environ['CLOUDFLARE_API_TOKEN']}",
}
d1_name = "uptimeflare_d1"
d1_id = "c286ace9-7057-44ab-8cc6-3903bca5bb04"

with open('init.sql', 'r') as f:
    init_sql = f.read()

print(f"Using existing D1 database ID: {d1_id}")

# Create initial table in D1
r = requests.post(
    api_endpoint + f"/d1/database/{d1_id}/query",
    headers=headers,
    json={
        "sql": init_sql,
        "params": []
    }
).json()

print("Initialize D1 database response: ", r)
if not r['success']:
    print("Error initializing D1 database (table may already exist, continuing).")

print("D1 database initialized successfully.")

with open(os.environ['GITHUB_ENV'], "a") as f:
    f.write(f"D1_ID={d1_id}\n")