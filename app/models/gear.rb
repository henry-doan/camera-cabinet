class Gear < ApplicationRecord
  belongs_to :kit

  validates :name, :desc, :price, :model, :condition, :make, :image, :serial, :bought, :quantity,   presence: true

end
