class Gear < ApplicationRecord
  belongs_to :kit

  has_many :documents, dependent: :destroy


  validates :model, :make, :image, :category, presence: true

end
