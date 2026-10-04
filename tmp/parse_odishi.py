import glob
import re
import html
import json

files = [
    '/tmp/odishi_necklace.html',
    '/tmp/odishi_p2.html',
    '/tmp/odishi_p3.html',
    '/tmp/odishi_p4.html',
    '/tmp/odishi_p5.html'
]

products = []
seen_titles = set()

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    items = re.findall(r'<li class="[^"]*product[^"]*">(.*?)</li>', content, re.DOTALL)
    for item in items:
        m_aria = re.search(r'aria-label=[\"\']Add to cart:\s*&ldquo;(.*?)&rdquo;[\"\']', item)
        m_alt = re.search(r'<img[^>]+alt=[\"\']([^\"\']+)[\"\']', item)
        m_title = re.search(r'<h2[^>]*class="[^"]*woocommerce-loop-product__title[^"]*"[^>]*>(.*?)</h2>', item, re.DOTALL)

        raw_title = ''
        if m_aria:
            raw_title = m_aria.group(1)
        elif m_alt:
            raw_title = m_alt.group(1)
        elif m_title:
            raw_title = m_title.group(1)

        title = html.unescape(raw_title).strip()
        title = re.sub(r'<[^>]+>', '', title).strip()

        # Image
        img_m = re.search(r'<img[^>]+src=[\"\'](https://[^\s\"\']+wp-content/uploads/[^\s\"\']+)[\"\']', item)
        img = img_m.group(1) if img_m else ''

        # Price
        m_curr = re.search(r'Current price is:\s*&#8377;([\d,]+(?:\.\d+)?)', item)
        m_orig = re.search(r'Original price was:\s*&#8377;([\d,]+(?:\.\d+)?)', item)

        if m_curr:
            curr_price = float(m_curr.group(1).replace(',', ''))
            orig_price = float(m_orig.group(1).replace(',', '')) if m_orig else curr_price
        else:
            m_simple = re.search(r'woocommerce-Price-amount[^>]*><bdi><span[^>]*translate="no">&#8377;</span>([\d,]+(?:\.\d+)?)', item)
            if m_simple:
                curr_price = float(m_simple.group(1).replace(',', ''))
                orig_price = curr_price
            else:
                curr_price = 0
                orig_price = 0

        # Link
        m_link = re.search(r'<a[^>]+href=[\"\'](https://www.odishicrafts.com/product/[^\s\"\']+)[\"\']', item)
        link = m_link.group(1) if m_link else ''

        # SKU
        m_sku = re.search(r'data-product_sku=[\"\']([^\"\']*)[\"\']', item)
        sku = m_sku.group(1) if m_sku else ''

        if title and title not in seen_titles:
            seen_titles.add(title)
            products.append({
                'title': title,
                'price': int(round(curr_price)),
                'originalPrice': int(round(orig_price)) if orig_price else int(round(curr_price)),
                'image': img,
                'link': link,
                'sku': sku
            })

print(f"Extracted {len(products)} products total.")
with open('/tmp/odishi_products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, indent=2)

for i, p in enumerate(products):
    print(f"{i+1:2d}. {p['title']:<45} ₹{p['price']} (was ₹{p['originalPrice']}) [SKU: {p['sku']}]")
