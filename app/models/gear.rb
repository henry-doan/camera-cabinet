class Gear < ApplicationRecord
  belongs_to :user

  validates :name, :desc, :price, :model, :condition, :make, :type, :image, :serial, presence: true
end
