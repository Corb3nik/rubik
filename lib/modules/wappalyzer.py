#!/usr/bin/env python3

import argparse
import subprocess
import json

class Wappalyzer:
    'Wappalyzer module'

    def __init__(self, root, output=False):
        self.root = root
        self.loot = { }
        self.output = output

    def run(self):
        'Run module'
        self.loot['results'] = {}
        p = subprocess.Popen(['node', 'wappalyzer.js', args.root],
          stdout=subprocess.PIPE)
        output = p.stdout.read()
        self.loot['results'] = json.loads(output)

        if self.output:
            print(self.loot)

        return(self.loot)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Wappalyzer module')
    parser.add_argument('root', metavar='root', type=str,
                    help='URL of the web challenge')

    args = parser.parse_args()
    module = Wappalyzer(args.root, True)
    module.run()

