#!/usr/bin/env python3

from urllib import parse
import requests
import argparse
import json

class Dirb:
    'Directory Buster module'

    def __init__(self, root, output=False):
        self.root = root
        self.loot = { }
        self.output = output
        self.URIs = []

    def add(self, uri):
        'Add URI to list'
        self.URIs += [uri]

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
        self.loot['links'] = []

        try:
          for uri in self.URIs:
              url = parse.urljoin(self.root, uri)
              response = requests.get(url)

              if response.status_code != 404:
                  self.loot['links'] += [self.parse_response(response)]
        except:
          pass

        if self.output:
            print(json.dumps(self.loot))

        return self.loot


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Directory bruteforcer module')
    parser.add_argument('root', metavar='root', type=str,
                    help='URL of the web challenge')

    parser.add_argument('wordlist', metavar='wordlist', type=str,
                    help='A list of URIs to use')

    args = parser.parse_args()

    module = Dirb(args.root, True)

    # Add wordlist to Dirb module
    with open(args.wordlist) as f:
        for line in f.readlines():
            module.add(line.strip())

    module.run()

