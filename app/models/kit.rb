class Kit < ApplicationRecord
  belongs_to :user
  has_many :gears, dependent: :destroy  

  validates :name, :description, :image, presence: true
end
