class Challenge < ApplicationRecord

  has_many :spiders
  has_many :dirbs
  has_many :wappalyzers

  validates :name, uniqueness: true, presence: true, allow_blank: false
  validates :root, format: { with: URI.regexp, message: 'must be an URI' }

end
