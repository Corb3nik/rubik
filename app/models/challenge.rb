class Challenge < ApplicationRecord

  belongs_to :ctf, class_name: 'CTF'
  has_many :spiders
  has_many :dirbs
  has_many :wappalyzers

  validates :ctf, presence: true
  validates :name, uniqueness: true, presence: true, allow_blank: false
  validates :root, format: { with: URI.regexp, message: 'must be an URI' }

end
