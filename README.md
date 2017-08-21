# rubik

> CTF collaboration tool for teams

## requirements

- postgresql 9.6.2
- ruby 2.2.5 ([rbenv](https://github.com/rbenv/rbenv) manage ruby versions)
- python 3.6.0 ([pyenv](https://github.com/pyenv/pyenv) manage python versions)
- node.js 7.10.0 ([nvm](https://github.com/creationix/nvm) manage node.js versions)
- RubyGems
- gem bundler
- yarn
- pip

## install

Install dependencies:

```bash
bundle install
yarn install
pip install -r requirements.txt
```

## create databases

```bash
rake db:create
```

## developement

Requirements:

- gem foreman

### running the services

Start postgresql and webpack dev server.

```bash
bundle exec foreman start -f Procfile.dev
```

Start rails server. It is easier to debug using [byebug](http://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-byebug-gem) when server process is separated.

```bash
bin/rails server
```
