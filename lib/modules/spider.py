#!/usr/bin/env python3

from html.parser import HTMLParser
from urllib.request import urlopen
from urllib import parse
import argparse

class Spider:
    'Web crawler module'

    def __init__(self, root, output=False):
        self.root = root
        self.loot = { }
        self.pagesToVisit = [self.root]
        self.output = output

    def add(self, link):
        'Add a link to visit'
        self.pagesToVisit += [link]

    def run(self):
        'Run module'

        pagesToVisit = self.pagesToVisit
        parser = LinkParser()
        self.loot['links'] = []

        while len(pagesToVisit) != 0:
            url = pagesToVisit[0]
            pagesToVisit = pagesToVisit[1:]

            self.loot['links'] += [url]
            try:
                data, links = parser.getLinks(url)
                for link in set(links):
                    if self.root in link and link not in self.loot['links']:
                        pagesToVisit += [link]
            except:
                pass

        if self.output:
            print(self.loot)

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

    def getLinks(self, url):
        self.links = []
        self.baseUrl = url
        response = urlopen(url)
        htmlBytes = response.read()
        htmlString = htmlBytes.decode('utf-8')
        self.feed(htmlString)
        return htmlString, self.links



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

