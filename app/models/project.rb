class Project < ApplicationRecord

  validates :name, uniqueness: true, presence: true, allow_blank: false
  validates :root, format: { with: URI.regexp, message: 'must be an URI' }

end
