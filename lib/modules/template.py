#!/usr/bin/env python3

import argparse

class Template:
    'Template module'

    def __init__(self, root, output=False):
        self.root = root
        self.loot = { }
        self.output = output

    def run(self):
        'Run module'
        self.loot['template'] = "TEMPLATE"

        if self.output:
            print(self.loot)

        return(self.loot)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='This is a template module')
    parser.add_argument('root', metavar='root', type=str,
                    help='URL of the web challenge')

    args = parser.parse_args()
    module = Template(args.root, True)
    module.run()

