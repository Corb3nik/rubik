# rubik

## requirements

- postgresql 9.6.2
- ruby
- RubyGems
- gem bundler

## install

Install dependencies:

```bash
bundle install
```

## create databases

```bash
rake db:create
```

### running the services

```bash
bundle exec foreman start -f Procfile.dev
```
