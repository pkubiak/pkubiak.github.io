import argparse
import json
import sys

import urllib.request
from bs4 import BeautifulSoup


def scrap(name, precission=3):
    url = f"https://www.anime-planet.com/anime/{name}/characters"

    req = urllib.request.Request(url, headers={'User-Agent': 'x'})
    f = urllib.request.urlopen(req).read()
    soup = BeautifulSoup(f, "html.parser")
    results = []

    tables = list(soup.select('table'))
    assert len(tables) <= 3, f"Found {len(tables)} tables!"
    tables = tables[:precission]

    for table in tables:
        for link in table.select('td.tableAvatar a'):
            img = link.select('img')[0]

            if 'blank_char.gif' not in img['src']:
                results.append({
                    'title': img['alt'],
                    'image': 'https://www.anime-planet.com' + img['src'],
                    'url': 'https://www.anime-planet.com' + link['href']
                })

    return results


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--minor', help="Scrap all characters", dest='precission', action='store_const', const=3)
    parser.add_argument('--secondary', help="Scrap main and secondary characters", dest='precission', action='store_const', const=2)
    parser.add_argument('--main', help="Scrap only main characters", dest='precission', action='store_const', const=1)
    parser.add_argument('names', nargs='+')

    return parser.parse_args()


if __name__ == '__main__':
    args = parse_args()

    results = []
    for name in args.names:
        items = scrap(name, args.precission)
        results.extend(items)

    sys.stderr.write(f"Scrapped {len(results)} items!\n")

    assert len(results) >= 24, f"Only: {len(results)}"

    print("const data = %s;" % (json.dumps(results),))
