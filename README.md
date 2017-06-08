# rubik

## requirements

- postgresql 9.6.2
- ruby ([rbenv](https://github.com/rbenv/rbenv) manage multiple version of ruby)
- python ([pyenv](https://github.com/pyenv/pyenv) manage multiple version of python)
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

### running the services

```bash
bundle exec foreman start -f Procfile.dev
```
