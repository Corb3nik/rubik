class CTF < ApplicationRecord
  has_many :challenges

  validates :name, uniqueness: true, presence: true, allow_blank: false
end
