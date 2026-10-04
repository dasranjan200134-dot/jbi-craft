import json
import os
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

with open('/tmp/odishi_products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

out_dir = 'public/assets/tribal-jewellery'
os.makedirs(out_dir, exist_ok=True)

def download_item(item):
    url = item.get('image', '')
    if not url:
        return item, None
    fname = os.path.basename(url.split('?')[0])
    local_rel = f"/assets/tribal-jewellery/{fname}"
    local_path = os.path.join(out_dir, fname)
    if os.path.exists(local_path) and os.path.getsize(local_path) > 1000:
        item['localImage'] = local_rel
        return item, True

    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = resp.read()
            with open(local_path, 'wb') as f_out:
                f_out.write(data)
        item['localImage'] = local_rel
        return item, True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        item['localImage'] = url
        return item, False

updated = []
with ThreadPoolExecutor(max_workers=8) as executor:
    futures = [executor.submit(download_item, p) for p in products]
    for future in as_completed(futures):
        item, ok = future.result()
        updated.append(item)

print(f"Completed downloads for {len(updated)} items.")
with open('/tmp/odishi_products_downloaded.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, indent=2)
