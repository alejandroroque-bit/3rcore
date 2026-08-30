import json
from playwright.sync_api import sync_playwright
arts = [l.strip() for l in open('arts48.txt') if l.strip()][:8]
with sync_playwright() as p:
    b = p.chromium.connect_over_cdp("http://127.0.0.1:9223")
    pg = b.contexts[0].new_page()
    try:
        for u in arts:
            try:
                pg.goto(u, wait_until="load", timeout=60000)
                pg.wait_for_timeout(3500)
                d = pg.evaluate("""() => {
                  const im=[...document.images];
                  const rotas=im.filter(i=>i.complete && i.naturalWidth===0);
                  return {total:im.length, rotas:rotas.length,
                          srcs:rotas.slice(0,3).map(i=>i.currentSrc||i.src)};
                }""")
                print(f"{d['rotas']:>2}/{d['total']:<3} rotas  {u.split('/')[-1][:52]}")
                for s in d['srcs']: print("        ", s[:100])
            except Exception as e:
                print("ERR", u.split('/')[-1], str(e)[:60])
    finally:
        pg.close()
