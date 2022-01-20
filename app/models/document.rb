class Document < ApplicationRecord
  belongs_to :gears

  validates :bought, :image, presence: true
end
