# rubik

## requirements

- postgresql 9.6.2
- ruby
- RubyGems
- gem bundler
- yarn

## install

Install dependencies:

```bash
bundle install
yarn install
```

## create databases

```bash
rake db:create
```

### running the services

```bash
bundle exec foreman start -f Procfile.dev
```
