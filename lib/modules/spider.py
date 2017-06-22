#!/usr/bin/env python3

from html.parser import HTMLParser
from urllib import parse
import requests
import argparse
import json

class Spider:
    'Web crawler module'

    def __init__(self, root, output=False):
        self.root = root
        self.loot = { }
        self.pagesToVisit = [self.root]
        self.visitedPages = []
        self.output = output

    def add(self, link):
        'Add a link to visit'
        self.pagesToVisit += [link]

    def parse_response(self, response):
        url = response.url
        content_type = ''
        try:
            content_type = response.headers['content-type']
        except:
            pass

        return { "url" : url, "content-type": content_type }

    def run(self):
        'Run module'

        pagesToVisit = self.pagesToVisit
        parser = LinkParser()
        self.loot['links'] = []

        while len(pagesToVisit) != 0:
            url = pagesToVisit[0]
            pagesToVisit = pagesToVisit[1:]

            try:
                response = requests.get(url)
                self.visitedPages += [url]
                if response.status_code != 404:
                  self.loot['links'] += [self.parse_response(response)]
                  links = parser.parseLinks(response)
                  for link in set(links):
                      if self.root in link and link not in self.visitedPages:
                          pagesToVisit += [link]
            except Exception as e:
                pass

        self.loot['links'] = list({l['url']: l for l in self.loot['links']}.values())

        if self.output:
            print(json.dumps(self.loot))

        return self.loot

class LinkParser(HTMLParser):
    'Link parser'

    def handle_starttag(self, tag, attrs):
        if tag == "a" or tag == "link":
            for (key, value) in attrs:
                if key == "href":
                    newUrl = parse.urljoin(self.baseUrl, value)
                    newUrl = newUrl.split("#")[0]
                    newUrl = newUrl.split("?")[0]
                    self.links = self.links + [newUrl]

        if tag == "script" or tag == "img" or tag == "iframe":
            for (key, value) in attrs:
                if key == "src":
                    newUrl = parse.urljoin(self.baseUrl, value)
                    newUrl = newUrl.split("#")[0]
                    newUrl = newUrl.split("?")[0]
                    self.links = self.links + [newUrl]

    def parseLinks(self, response):
        self.links = []
        self.baseUrl = response.url
        self.feed(response.text)
        return self.links



if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Web crawler module')
    parser.add_argument('root', metavar='url', type=str,
                    help='URL of the web challenge')

    parser.add_argument("--linkFile", help="File containing additional links to visit")

    args = parser.parse_args()

    module = Spider(args.root, True)

    if args.linkFile:
        with open(args.linkFile) as f:
            for line in f.readlines():
                module.add(line)

    module.run()

